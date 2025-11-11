# CRM Integration Guide

## Overview

All Knit marketing forms are now structured to support seamless integration with major CRM platforms (Salesforce, HubSpot, Zoho, Pipedrive, Microsoft Dynamics) without requiring frontend refactoring.

## Architecture

### Data Flow

```
User Form Submission → Frontend Validation → CRM Formatting → Backend API → CRM
```

1. **User fills form** - Standard form fields (name, email, etc.)
2. **Frontend validation** - Real-time validation with error messages
3. **CRM formatting** - Data enriched with UTM, device, session, consent tracking
4. **Backend receives** - Both original form data and CRM-formatted data
5. **Backend processes** - Stores data and syncs to CRM

---

## Data Structure

### Received Payload

When a form is submitted, your backend receives:

```typescript
{
  "formData": {
    // Original form field values
    "fullName": "John Smith",
    "email": "john@company.com",
    "organization": "ABC University",
    // ... other form fields
  },
  "crmData": {
    // CRM-formatted lead object (see below)
  },
  "metadata": {
    "formName": "demo_request",
    "submissionTime": "2025-10-31T10:30:00Z",
    "timeToSubmit": 45  // seconds
  }
}
```

### CRM Lead Object Structure

#### Demo Request Lead

```typescript
{
  "formType": "demo_request",
  
  // Contact Information
  "firstName": "John",
  "lastName": "Smith",
  "email": "john@company.com",
  "phone": "+27 11 234 5678",
  
  // Company Information
  "company": "ABC University",
  "industry": "Education - Higher Education",
  
  // Lead Classification
  "leadSource": "Website - Demo Request",
  "leadStatus": "New",
  "leadScore": 75,  // 0-100 calculated score
  
  // Product Interest
  "productInterest": "Knit Edu",  // or "Knit Life" or "Both Solutions"
  
  // Timestamps (ISO 8601)
  "createdAt": "2025-10-31T10:30:00Z",
  "updatedAt": "2025-10-31T10:30:00Z",
  
  // Consent & Compliance (POPIA/GDPR)
  "consent": {
    "marketingConsent": true,
    "termsAccepted": true,
    "privacyPolicyAccepted": true,
    "dataProcessingConsent": true,
    "consentTimestamp": "2025-10-31T10:30:00Z",
    "consentMethod": "explicit"
  },
  
  // Marketing Attribution (UTM Parameters)
  "utm": {
    "utm_source": "google",
    "utm_medium": "cpc",
    "utm_campaign": "edu_launch_2024",
    "utm_term": "student+finance",
    "utm_content": "banner_ad"
  },
  
  // Device & Browser Info
  "device": {
    "userAgent": "Mozilla/5.0...",
    "platform": "MacIntel",
    "isMobile": false,
    "isTablet": false,
    "isDesktop": true,
    "browserName": "Chrome",
    "browserVersion": "120.0"
  },
  
  // Session Tracking
  "session": {
    "sessionId": "session_1730368200000_abc123",
    "pageUrl": "https://knit.com/edu?utm_source=google",
    "pagePath": "/edu",
    "referrer": "https://google.com/search?q=student+finance",
    "landingPage": "https://knit.com/",
    "timeOnSite": 180,  // seconds
    "pagesVisited": 4
  },
  
  // Additional Notes
  "description": "Looking for a solution for 5000+ students"
}
```

#### General Inquiry Lead

```typescript
{
  "formType": "general_inquiry",
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane@company.co.za",
  "company": "XYZ Insurance",
  "leadSource": "Website - Get In Touch",
  "leadStatus": "New",
  "leadScore": 65,
  
  // Specific to general inquiry
  "inquiryType": "life",  // "edu" | "life" | "both"
  "message": "We're interested in Knit Life for our funeral insurance product...",
  
  // All other standard fields (consent, utm, device, session)
  // ...
}
```

#### Partner Application Lead

```typescript
{
  "formType": "partner_application",
  "firstName": "Alice",
  "lastName": "Johnson",
  "email": "alice@partner.com",
  "phone": "+27 21 555 1234",
  "company": "Tech Integration Partners",
  "companySize": "51-200 employees",
  "website": "https://techpartners.com",
  
  "leadSource": "Website - Partner Application",
  "leadStatus": "New",
  "leadScore": 85,
  
  // Partner-specific fields
  "partnershipType": "API Integration Partner",
  "jobTitle": "Business Development Manager",
  "partnershipDescription": "We'd like to integrate Knit's API...",
  "partnerStatus": "Applied",
  
  // All other standard fields (consent, utm, device, session)
  // ...
}
```

---

## Field Mappings for Popular CRMs

### Salesforce Lead Object

```javascript
// Map CRM lead to Salesforce Lead
const salesforceLead = {
  FirstName: crmData.firstName,
  LastName: crmData.lastName,
  Email: crmData.email,
  Phone: crmData.phone,
  Company: crmData.company,
  Industry: crmData.industry,
  
  // Custom fields (create these in Salesforce)
  Lead_Source__c: crmData.leadSource,
  Lead_Score__c: crmData.leadScore,
  Product_Interest__c: crmData.productInterest,
  
  // UTM tracking
  UTM_Source__c: crmData.utm.utm_source,
  UTM_Medium__c: crmData.utm.utm_medium,
  UTM_Campaign__c: crmData.utm.utm_campaign,
  
  // Consent
  Marketing_Consent__c: crmData.consent.marketingConsent,
  Consent_Date__c: crmData.consent.consentTimestamp,
  
  // Device info
  Device_Type__c: crmData.device.isMobile ? 'Mobile' : 'Desktop',
  
  // Session
  Landing_Page__c: crmData.session.landingPage,
  Referrer__c: crmData.session.referrer,
  Time_On_Site__c: crmData.session.timeOnSite,
  
  Description: crmData.description
};
```

### HubSpot Contact

```javascript
// Map CRM lead to HubSpot Contact
const hubspotContact = {
  properties: {
    firstname: crmData.firstName,
    lastname: crmData.lastName,
    email: crmData.email,
    phone: crmData.phone,
    company: crmData.company,
    
    // HubSpot default fields
    hs_lead_status: crmData.leadStatus.toLowerCase(),
    hubspotscore: crmData.leadScore,
    
    // Custom properties
    lead_source: crmData.leadSource,
    product_interest: crmData.productInterest,
    
    // UTM properties (HubSpot tracks these natively)
    hs_analytics_source: crmData.utm.utm_source,
    hs_analytics_source_data_1: crmData.utm.utm_medium,
    hs_analytics_source_data_2: crmData.utm.utm_campaign,
    
    // Consent
    marketing_consent: crmData.consent.marketingConsent,
    
    // Device
    device_type: crmData.device.isMobile ? 'mobile' : 'desktop',
    
    // Session
    hs_analytics_first_url: crmData.session.landingPage,
    hs_analytics_last_url: crmData.session.pageUrl,
    time_on_site: crmData.session.timeOnSite
  }
};
```

### Zoho CRM Lead

```javascript
// Map CRM lead to Zoho Lead
const zohoLead = {
  First_Name: crmData.firstName,
  Last_Name: crmData.lastName,
  Email: crmData.email,
  Phone: crmData.phone,
  Company: crmData.company,
  Industry: crmData.industry,
  Lead_Source: crmData.leadSource,
  Lead_Status: crmData.leadStatus,
  Rating: calculateZohoRating(crmData.leadScore), // Hot/Warm/Cold
  
  // Custom fields
  Product_Interest: crmData.productInterest,
  UTM_Source: crmData.utm.utm_source,
  UTM_Campaign: crmData.utm.utm_campaign,
  Marketing_Consent: crmData.consent.marketingConsent,
  Device_Type: crmData.device.isMobile ? 'Mobile' : 'Desktop',
  
  Description: crmData.description || crmData.message
};
```

---

## Backend Implementation Examples

### Node.js/Express Example

```javascript
// routes/forms.js
const express = require('express');
const router = express.Router();
const { syncToSalesforce } = require('../services/crm');

router.post('/api/contact', async (req, res) => {
  try {
    const { formData, crmData, metadata } = req.body;
    
    // 1. Validate the data
    if (!crmData.email || !crmData.firstName) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }
    
    // 2. Store in your database
    const lead = await db.leads.create({
      ...crmData,
      rawFormData: formData,
      metadata: metadata
    });
    
    // 3. Sync to CRM (async)
    const crmSynced = await syncToSalesforce(crmData);
    
    // 4. Send notification email
    await sendNotificationEmail({
      to: 'sales@knit.com',
      subject: `New ${crmData.formType} - ${crmData.firstName} ${crmData.lastName}`,
      lead: crmData
    });
    
    // 5. Send confirmation email to user
    if (crmData.consent.marketingConsent) {
      await sendConfirmationEmail({
        to: crmData.email,
        firstName: crmData.firstName
      });
    }
    
    // 6. Return success
    res.json({
      success: true,
      leadId: lead.id,
      message: 'Thank you for your submission',
      metadata: {
        processingTime: Date.now() - new Date(metadata.submissionTime).getTime(),
        crmSynced: crmSynced,
        emailSent: true
      }
    });
    
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred processing your request'
    });
  }
});

module.exports = router;
```

### Salesforce Sync Service

```javascript
// services/crm/salesforce.js
const jsforce = require('jsforce');

const conn = new jsforce.Connection({
  loginUrl: process.env.SALESFORCE_LOGIN_URL
});

async function syncToSalesforce(crmData) {
  try {
    // Login
    await conn.login(
      process.env.SALESFORCE_USERNAME,
      process.env.SALESFORCE_PASSWORD + process.env.SALESFORCE_TOKEN
    );
    
    // Map to Salesforce Lead object
    const sfLead = {
      FirstName: crmData.firstName,
      LastName: crmData.lastName,
      Email: crmData.email,
      Phone: crmData.phone,
      Company: crmData.company,
      Industry: crmData.industry,
      LeadSource: crmData.leadSource,
      Status: crmData.leadStatus,
      
      // Custom fields
      Lead_Score__c: crmData.leadScore,
      Product_Interest__c: crmData.productInterest,
      UTM_Source__c: crmData.utm.utm_source,
      UTM_Campaign__c: crmData.utm.utm_campaign,
      Marketing_Consent__c: crmData.consent.marketingConsent,
      Device_Type__c: crmData.device.isMobile ? 'Mobile' : 'Desktop',
      Landing_Page__c: crmData.session.landingPage,
      Time_On_Site__c: crmData.session.timeOnSite,
      
      Description: crmData.description || crmData.message
    };
    
    // Create lead
    const result = await conn.sobject('Lead').create(sfLead);
    
    if (result.success) {
      console.log('Salesforce Lead created:', result.id);
      
      // Assign to queue/user based on lead score
      if (crmData.leadScore >= 70) {
        await assignToSalesRep(result.id, 'high-value');
      }
      
      return true;
    }
    
    return false;
    
  } catch (error) {
    console.error('Salesforce sync error:', error);
    // Store failed sync for retry
    await storeFailed SyncForRetry(crmData);
    return false;
  }
}

module.exports = { syncToSalesforce };
```

### HubSpot Sync Service

```javascript
// services/crm/hubspot.js
const hubspot = require('@hubspot/api-client');

const hubspotClient = new hubspot.Client({
  accessToken: process.env.HUBSPOT_ACCESS_TOKEN
});

async function syncToHubSpot(crmData) {
  try {
    const contactObj = {
      properties: {
        firstname: crmData.firstName,
        lastname: crmData.lastName,
        email: crmData.email,
        phone: crmData.phone,
        company: crmData.company,
        
        // Custom properties
        lead_source: crmData.leadSource,
        lead_score: crmData.leadScore,
        product_interest: crmData.productInterest,
        
        // UTM
        hs_analytics_source: crmData.utm.utm_source,
        hs_analytics_source_data_1: crmData.utm.utm_campaign,
        
        // Consent
        marketing_consent: crmData.consent.marketingConsent
      }
    };
    
    const response = await hubspotClient.crm.contacts.basicApi.create(contactObj);
    
    console.log('HubSpot Contact created:', response.id);
    
    // Create deal if high value lead
    if (crmData.leadScore >= 70) {
      await createDeal(response.id, crmData);
    }
    
    return true;
    
  } catch (error) {
    // If contact exists, update instead
    if (error.code === 409) {
      return await updateHubSpotContact(crmData);
    }
    console.error('HubSpot sync error:', error);
    return false;
  }
}

module.exports = { syncToHubSpot };
```

---

## Lead Scoring Algorithm

The frontend calculates a basic lead score (0-100) that you can enhance on the backend:

### Base Score: 50

### Modifiers:

| Factor | Points | Condition |
|--------|--------|-----------|
| Company Size | 5-30 | Based on employee count |
| Has Website | +10 | Website URL provided |
| Has Phone | +5 | Phone number provided |
| Paid Marketing | +10 | UTM campaign present |
| High Engagement | +10 | Time on site > 2 minutes |
| Multi-page Visit | +5 | Visited 3+ pages |
| Partner Application | +10 | Form type bonus |

### Backend Enhancement:

```javascript
function enhanceLeadScore(crmData) {
  let score = crmData.leadScore || 50;
  
  // Email domain scoring
  const emailDomain = crmData.email.split('@')[1];
  if (isEducationDomain(emailDomain)) {
    score += 15; // .edu, .ac.za domains
  } else if (isFreeDomain(emailDomain)) {
    score -= 10; // gmail, yahoo, etc.
  }
  
  // Industry scoring
  if (['Education - Higher Education', 'Life Services - Insurance'].includes(crmData.industry)) {
    score += 10; // Target verticals
  }
  
  // Time of submission (business hours)
  const hour = new Date(crmData.createdAt).getHours();
  if (hour >= 9 && hour <= 17) {
    score += 5; // During business hours
  }
  
  // Referrer quality
  if (crmData.session.referrer.includes('linkedin')) {
    score += 10; // Professional network
  }
  
  return Math.min(Math.max(score, 0), 100); // Clamp 0-100
}
```

---

## Webhook Integration

For real-time CRM updates, configure webhooks:

### Salesforce Process Builder

1. Create a Process in Process Builder
2. Trigger: When Lead is created/updated
3. Action: Send outbound message to your webhook endpoint
4. Endpoint: `https://your-api.com/webhooks/salesforce-lead`

### HubSpot Workflows

1. Create workflow triggered by contact creation
2. Add webhook action
3. Configure: `POST https://your-api.com/webhooks/hubspot-contact`

---

## Data Retention & Compliance

### POPIA/GDPR Compliance

All forms capture explicit consent:

```javascript
// Check consent before processing
if (!crmData.consent.dataProcessingConsent) {
  // Don't store or process data
  return res.status(400).json({
    success: false,
    message: 'Data processing consent required'
  });
}

// Store consent record
await db.consent_records.create({
  email: crmData.email,
  consentType: 'marketing',
  consentGiven: crmData.consent.marketingConsent,
  consentTimestamp: crmData.consent.consentTimestamp,
  consentMethod: crmData.consent.consentMethod,
  ipAddress: req.ip
});
```

### Data Retention

```javascript
// Implement data retention policy
async function enforceDataRetention() {
  const retentionPeriod = 365 * 2; // 2 years
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - retentionPeriod);
  
  // Delete old leads without consent
  await db.leads.deleteMany({
    'consent.marketingConsent': false,
    createdAt: { $lt: cutoffDate }
  });
}
```

---

## Testing

### Sample Test Payloads

Located in `/tests/sample-crm-payloads.json`

### API Testing

```bash
# Test demo request endpoint
curl -X POST https://your-api.com/api/contact \
  -H "Content-Type: application/json" \
  -d @tests/demo-request-payload.json

# Expected response:
{
  "success": true,
  "leadId": "lead_123abc",
  "message": "Thank you for your submission",
  "metadata": {
    "processingTime": 234,
    "crmSynced": true,
    "emailSent": true
  }
}
```

---

## Monitoring & Analytics

### Key Metrics to Track

1. **Form Conversion Rate** - % of visitors who submit
2. **CRM Sync Success Rate** - % successfully synced to CRM
3. **Lead Score Distribution** - Average lead quality
4. **Time to First Contact** - Sales response time
5. **Source Attribution** - Which UTM sources convert best

### Recommended Setup

```javascript
// Track metrics in your monitoring system
metrics.increment('form.submission', {
  form_type: crmData.formType,
  lead_score_bucket: getScoreBucket(crmData.leadScore),
  source: crmData.utm.utm_source || 'direct'
});

metrics.timing('crm.sync_duration', syncDuration, {
  crm_provider: 'salesforce',
  success: crmSynced
});
```

---

## Support

For questions about CRM integration:
- Review `/components/types/crm.ts` - TypeScript type definitions
- Review `/components/utils/crmFormatter.ts` - Formatting logic
- Contact: developers@knit.com

---

## Changelog

### v1.0.0 (2025-10-31)
- Initial CRM-ready structure implementation
- Support for Demo Request, General Inquiry, and Partner Application forms
- UTM parameter tracking
- Device and session tracking
- Consent management (POPIA/GDPR)
- Lead scoring algorithm
- Salesforce, HubSpot, Zoho field mappings
