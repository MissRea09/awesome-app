# CRM Data Flow Architecture

## Overview

This document explains how form submissions flow from the frontend to your CRM system.

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER INTERACTION                          │
│                                                                   │
│  User fills form → Real-time validation → Clicks Submit          │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                     FRONTEND PROCESSING                          │
│                                                                   │
│  1. useForm Hook validates all fields                            │
│  2. Honeypot check (spam detection)                              │
│  3. Gather enrichment data:                                      │
│     • UTM parameters from URL                                    │
│     • Device/browser information                                 │
│     • Session data (time on site, pages visited)                 │
│     • Consent timestamps                                         │
│  4. crmFormatter transforms data:                                │
│     • Split name into firstName/lastName                         │
│     • Map form fields to CRM fields                              │
│     • Calculate lead score (0-100)                               │
│     • Standardize field names                                    │
│  5. Validate CRM data structure                                  │
│  6. Track GA4 event: "form_submission_started"                   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                      API REQUEST                                 │
│                                                                   │
│  POST /api/contact                                               │
│  Content-Type: application/json                                  │
│                                                                   │
│  {                                                                │
│    "formData": { ...original form values... },                   │
│    "crmData": {                                                   │
│      "formType": "demo_request",                                 │
│      "firstName": "John",                                        │
│      "lastName": "Smith",                                        │
│      "email": "john@university.edu",                             │
│      "leadSource": "Website - Demo Request",                     │
│      "leadScore": 85,                                            │
│      "utm": { utm_source: "google", ... },                       │
│      "device": { isMobile: false, ... },                         │
│      "session": { timeOnSite: 180, ... },                        │
│      "consent": { marketingConsent: true, ... }                  │
│    },                                                             │
│    "metadata": {                                                  │
│      "formName": "demo_request",                                 │
│      "submissionTime": "2025-10-31T10:00:00Z",                   │
│      "timeToSubmit": 180                                         │
│    }                                                              │
│  }                                                                │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                     BACKEND PROCESSING                           │
│                                                                   │
│  1. Validate request data                                        │
│  2. Enhance lead score (domain scoring, etc.)                    │
│  3. Store in database                                            │
│     ┌─────────────────────────────────────────┐                 │
│     │  leads_table                            │                 │
│     │  ├─ id                                   │                 │
│     │  ├─ email (indexed)                      │                 │
│     │  ├─ firstName, lastName                  │                 │
│     │  ├─ company, phone                       │                 │
│     │  ├─ leadSource, leadStatus               │                 │
│     │  ├─ leadScore                            │                 │
│     │  ├─ crmSyncStatus                        │                 │
│     │  ├─ crmRecordId                          │                 │
│     │  ├─ rawFormData (JSON)                   │                 │
│     │  ├─ enrichedData (JSON)                  │                 │
│     │  ├─ createdAt, updatedAt                 │                 │
│     └─────────────────────────────────────────┘                 │
│  4. Send to CRM (async)                                          │
│  5. Send email notifications                                     │
│  6. Return success response                                      │
└─────────────────────────────────────────────────────────────────┘
                    ↓                        ↓
        ┌──────────────────┐    ┌──────────────────────┐
        │   CRM SYNC       │    │  EMAIL NOTIFICATIONS  │
        └──────────────────┘    └──────────────────────┘
                    ↓                        ↓
    ┌───────────────────────────┐    ┌─────────────────────┐
    │  Choose CRM Provider:      │    │  • Sales team alert │
    │  ┌─────────────────────┐  │    │  • User confirmation│
    │  │   Salesforce        │  │    │  • Slack notification│
    │  ├─────────────────────┤  │    └─────────────────────┘
    │  │   HubSpot           │  │
    │  ├─────────────────────┤  │
    │  │   Zoho CRM          │  │
    │  ├─────────────────────┤  │
    │  │   Pipedrive         │  │
    │  ├─────────────────────┤  │
    │  │   Dynamics 365      │  │
    │  └─────────────────────┘  │
    │                            │
    │  Map fields:               │
    │  firstName → FirstName     │
    │  lastName → LastName       │
    │  email → Email             │
    │  company → Company         │
    │  leadScore → Custom Field  │
    │  utm.* → Custom Fields     │
    │                            │
    │  Create Lead/Contact       │
    │  Assign to sales rep       │
    │  Trigger workflows         │
    └────────────────────────────┘
                    ↓
        ┌──────────────────────┐
        │   CRM RECORD         │
        │                      │
        │  Lead #12345         │
        │  Status: New         │
        │  Score: 85           │
        │  Assigned: Jane Doe  │
        │  Source: Google CPC  │
        └──────────────────────┘
                    ↓
        ┌──────────────────────┐
        │  SALES WORKFLOW      │
        │                      │
        │  1. Auto-assign      │
        │  2. Send welcome     │
        │  3. Schedule follow  │
        │  4. Add to nurture   │
        └──────────────────────┘
```

---

## Detailed Flow Steps

### Step 1: User Fills Form

**What Happens:**
- User navigates to form (e.g., /edu → "Book a Demo")
- FormField components render with validation rules
- User interacts with first field → GA4 "form_started" event fires
- Real-time validation on each field after blur
- Error messages appear inline

**Data Tracked:**
- Form start time
- Fields touched
- User interaction patterns

---

### Step 2: Frontend Data Enrichment

**What Gets Collected:**

#### UTM Parameters (Marketing Attribution)
```javascript
// Extracted from URL query string
const utm = {
  utm_source: 'google',      // Where they came from
  utm_medium: 'cpc',         // How they got here
  utm_campaign: 'edu_2024',  // Which campaign
  utm_term: 'student+fees',  // Search term
  utm_content: 'banner_a'    // Ad variant
}
```

#### Device Information
```javascript
const device = {
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  isMobile: /Mobile/.test(userAgent),
  isTablet: /Tablet|iPad/.test(userAgent),
  isDesktop: true,
  browserName: 'Chrome',
  browserVersion: '120.0'
}
```

#### Session Tracking
```javascript
const session = {
  sessionId: 'unique_session_id',
  pageUrl: window.location.href,
  pagePath: window.location.pathname,
  referrer: document.referrer,
  landingPage: sessionStorage.getItem('landing_page'),
  timeOnSite: 180, // seconds
  pagesVisited: 4
}
```

#### Consent Management
```javascript
const consent = {
  marketingConsent: formData.subscribeNewsletter,
  termsAccepted: true,
  privacyPolicyAccepted: true,
  dataProcessingConsent: true,
  consentTimestamp: new Date().toISOString(),
  consentMethod: 'explicit'
}
```

---

### Step 3: CRM Data Formatting

**Transformation Example:**

**Input (Form Data):**
```json
{
  "fullName": "John Smith",
  "email": "john@university.edu",
  "organization": "ABC University",
  "vertical": "education"
}
```

**Output (CRM Data):**
```json
{
  "formType": "demo_request",
  "firstName": "John",
  "lastName": "Smith",
  "email": "john@university.edu",
  "company": "ABC University",
  "industry": "Education - Higher Education",
  "leadSource": "Website - Demo Request",
  "leadStatus": "New",
  "leadScore": 85,
  "productInterest": "Knit Edu"
}
```

**Lead Score Calculation:**
```
Base Score:              50
+ Company size (large):  +25
+ Has phone:             +5
+ UTM campaign:          +10
+ Time on site (3+ min): +10
+ Multi-page (5 pages):  +5
─────────────────────────
Total:                   85
```

---

### Step 4: Backend Processing

**Recommended Database Schema:**

```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Contact Info
  email VARCHAR(255) NOT NULL UNIQUE,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone VARCHAR(50),
  
  -- Company Info
  company VARCHAR(255),
  company_size VARCHAR(50),
  industry VARCHAR(100),
  website VARCHAR(500),
  
  -- Lead Classification
  lead_source VARCHAR(100) NOT NULL,
  lead_status VARCHAR(50) DEFAULT 'New',
  lead_score INTEGER DEFAULT 50,
  form_type VARCHAR(50) NOT NULL,
  
  -- CRM Sync
  crm_provider VARCHAR(50),
  crm_record_id VARCHAR(255),
  crm_sync_status VARCHAR(50) DEFAULT 'pending',
  crm_synced_at TIMESTAMP,
  crm_sync_error TEXT,
  
  -- Product Interest
  product_interest VARCHAR(100),
  partnership_type VARCHAR(100),
  
  -- Raw Data (for reprocessing)
  raw_form_data JSONB,
  enriched_data JSONB,
  
  -- Consent
  marketing_consent BOOLEAN DEFAULT false,
  consent_timestamp TIMESTAMP,
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  -- Indexes
  INDEX idx_email (email),
  INDEX idx_lead_status (lead_status),
  INDEX idx_lead_score (lead_score),
  INDEX idx_created_at (created_at),
  INDEX idx_crm_sync (crm_sync_status, crm_provider)
);

CREATE TABLE consent_records (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  email VARCHAR(255) NOT NULL,
  consent_type VARCHAR(50) NOT NULL,
  consent_given BOOLEAN NOT NULL,
  consent_timestamp TIMESTAMP NOT NULL,
  consent_method VARCHAR(50),
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE utm_tracking (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(100),
  utm_term VARCHAR(255),
  utm_content VARCHAR(255),
  referrer TEXT,
  landing_page TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

### Step 5: CRM Synchronization

**Salesforce Example:**

```javascript
async function syncToSalesforce(crmData) {
  const lead = {
    // Standard Salesforce fields
    FirstName: crmData.firstName,
    LastName: crmData.lastName,
    Email: crmData.email,
    Phone: crmData.phone,
    Company: crmData.company,
    Industry: crmData.industry,
    LeadSource: crmData.leadSource,
    Status: crmData.leadStatus,
    
    // Custom fields (create in Salesforce Setup)
    Lead_Score__c: crmData.leadScore,
    Product_Interest__c: crmData.productInterest,
    Form_Type__c: crmData.formType,
    
    // UTM tracking
    UTM_Source__c: crmData.utm.utm_source,
    UTM_Medium__c: crmData.utm.utm_medium,
    UTM_Campaign__c: crmData.utm.utm_campaign,
    
    // Consent
    Marketing_Consent__c: crmData.consent.marketingConsent,
    Consent_Date__c: crmData.consent.consentTimestamp,
    
    // Session
    Landing_Page__c: crmData.session.landingPage,
    Time_On_Site__c: crmData.session.timeOnSite,
    Pages_Visited__c: crmData.session.pagesVisited,
    
    Description: crmData.description
  };
  
  // Create lead in Salesforce
  const result = await sfConnection.sobject('Lead').create(lead);
  
  // Auto-assign based on lead score
  if (crmData.leadScore >= 80) {
    await assignToTopSalesRep(result.id);
  }
  
  return result.id;
}
```

---

## Lead Routing Rules

### Based on Lead Score

```
Score 90-100 (Hot Lead):
  → Assign to: Senior Sales Rep
  → Action: Immediate call (within 1 hour)
  → Notification: SMS + Email + Slack

Score 70-89 (Warm Lead):
  → Assign to: Sales Team (round-robin)
  → Action: Call within 24 hours
  → Notification: Email + Slack

Score 50-69 (Qualified Lead):
  → Assign to: Inside Sales
  → Action: Email follow-up
  → Add to: Nurture campaign

Score 0-49 (Cold Lead):
  → Assign to: Marketing automation
  → Action: Add to nurture drip
  → No immediate sales outreach
```

### Based on Product Interest

```
Knit Edu:
  → Route to: Education Sales Team
  → CRM Campaign: "EDU_2024"
  → Email Template: "Education_Welcome"

Knit Life:
  → Route to: Life Services Sales Team
  → CRM Campaign: "LIFE_2024"
  → Email Template: "Life_Services_Welcome"

Both Solutions:
  → Route to: Enterprise Team
  → CRM Campaign: "ENTERPRISE_2024"
  → Flag as: Cross-sell opportunity
```

### Based on Company Size

```
1001+ employees (Enterprise):
  → Route to: Enterprise Team
  → SLA: Contact within 4 hours
  → Auto-create: Custom demo deck

201-1000 employees (Mid-Market):
  → Route to: Mid-Market Team
  → SLA: Contact within 24 hours
  
1-200 employees (SMB):
  → Route to: Inside Sales
  → SLA: Email within 48 hours
  → Add to: Self-service resources
```

---

## Error Handling & Retry Logic

### Failed CRM Sync

```javascript
// Store failed syncs for retry
async function handleCRMSyncFailure(leadId, crmData, error) {
  // Update lead record
  await db.leads.update({
    where: { id: leadId },
    data: {
      crm_sync_status: 'failed',
      crm_sync_error: error.message,
      updated_at: new Date()
    }
  });
  
  // Queue for retry
  await retryQueue.add({
    leadId,
    crmData,
    attempt: 1,
    maxAttempts: 5,
    nextRetry: Date.now() + (5 * 60 * 1000) // 5 minutes
  });
  
  // Alert team
  await slack.send({
    channel: '#crm-errors',
    message: `CRM sync failed for lead ${leadId}: ${error.message}`
  });
}

// Retry worker
async function processCRMRetries() {
  const failedSyncs = await retryQueue.getReady();
  
  for (const sync of failedSyncs) {
    try {
      await syncToCRM(sync.crmData);
      await retryQueue.complete(sync.id);
    } catch (error) {
      if (sync.attempt >= sync.maxAttempts) {
        // Max retries reached - manual intervention needed
        await notifyOpsTeam(sync);
      } else {
        // Exponential backoff
        const delay = Math.pow(2, sync.attempt) * 5 * 60 * 1000;
        await retryQueue.reschedule(sync.id, Date.now() + delay);
      }
    }
  }
}
```

---

## Monitoring & Alerts

### Key Metrics to Track

1. **Conversion Funnel:**
   - Form started
   - Form submitted
   - CRM synced
   - Sales contacted
   - Demo scheduled
   - Deal closed

2. **Data Quality:**
   - Valid email rate
   - Phone number provided rate
   - Company info completion
   - Consent rate

3. **Performance:**
   - Form submission success rate
   - CRM sync success rate
   - Average sync latency
   - Retry queue depth

4. **Lead Quality:**
   - Average lead score
   - Score distribution
   - Conversion rate by score
   - Source attribution (best UTM sources)

---

## Testing Checklist

- [ ] Form submission creates database record
- [ ] CRM data structure is valid
- [ ] UTM parameters are captured correctly
- [ ] Device detection works (mobile/desktop)
- [ ] Session tracking persists across pages
- [ ] Consent is recorded with timestamp
- [ ] Lead score is calculated correctly
- [ ] CRM sync creates lead/contact
- [ ] Email notifications are sent
- [ ] Failed syncs are queued for retry
- [ ] High-value leads trigger alerts
- [ ] POPIA/GDPR compliance maintained

---

## Production Deployment

### Environment Variables

```bash
# CRM Configuration
CRM_PROVIDER=salesforce  # or hubspot, zoho, etc.
SALESFORCE_LOGIN_URL=https://login.salesforce.com
SALESFORCE_USERNAME=integration@knit.com
SALESFORCE_PASSWORD=***
SALESFORCE_TOKEN=***

# Database
DATABASE_URL=postgresql://user:pass@host:5432/knit_crm

# Email
SMTP_HOST=smtp.sendgrid.net
SMTP_USER=apikey
SMTP_PASS=***

# Monitoring
SENTRY_DSN=***
SLACK_WEBHOOK_URL=***

# Lead Assignment
HIGH_VALUE_THRESHOLD=80
ENTERPRISE_THRESHOLD=90
```

### Health Checks

```javascript
// /api/health/crm
router.get('/api/health/crm', async (req, res) => {
  const health = {
    status: 'healthy',
    checks: {}
  };
  
  // Database connectivity
  try {
    await db.$queryRaw`SELECT 1`;
    health.checks.database = 'ok';
  } catch (error) {
    health.checks.database = 'error';
    health.status = 'degraded';
  }
  
  // CRM connectivity
  try {
    await crm.testConnection();
    health.checks.crm = 'ok';
  } catch (error) {
    health.checks.crm = 'error';
    health.status = 'degraded';
  }
  
  // Retry queue
  const queueDepth = await retryQueue.count();
  health.checks.retryQueue = {
    status: queueDepth < 100 ? 'ok' : 'warning',
    depth: queueDepth
  };
  
  res.json(health);
});
```

---

## Support

For implementation questions, refer to:
- `/CRM_INTEGRATION_GUIDE.md` - Detailed integration guide
- `/tests/sample-crm-payloads.json` - Sample test data
- `/components/types/crm.ts` - TypeScript types
- `/components/utils/crmFormatter.ts` - Formatting logic
