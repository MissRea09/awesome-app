# CRM Integration Quick Start

## 🚀 Getting Started in 5 Minutes

### What You Get

When a user submits a form, your backend receives:

```json
{
  "formData": { /* Original form */ },
  "crmData": {
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@company.com",
    "company": "ABC University",
    "leadScore": 85,
    "utm": { /* Marketing attribution */ },
    "consent": { /* POPIA/GDPR compliance */ }
  }
}
```

---

## 📋 Implementation Checklist

### Step 1: Create Database Table (2 minutes)

```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  company VARCHAR(255),
  lead_score INTEGER,
  lead_source VARCHAR(100),
  raw_data JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Step 2: Create API Endpoint (3 minutes)

```javascript
// routes/forms.js
app.post('/api/contact', async (req, res) => {
  const { crmData } = req.body;
  
  // Save to database
  const lead = await db.leads.create({
    email: crmData.email,
    first_name: crmData.firstName,
    last_name: crmData.lastName,
    company: crmData.company,
    lead_score: crmData.leadScore,
    lead_source: crmData.leadSource,
    raw_data: crmData
  });
  
  // Sync to CRM (async)
  syncToCRM(crmData).catch(console.error);
  
  res.json({ success: true, leadId: lead.id });
});
```

### Step 3: Update Frontend Config (30 seconds)

Form is already configured! Just uncomment the endpoint:

```typescript
// /components/Contact.tsx (already done)
await handleSubmit(e, {
  endpoint: "/api/contact",  // ← Uncomment this
  formatForCRM: true,
  crmFormType: 'demo_request'
});
```

✅ **Done!** Forms now send CRM-ready data to your backend.

---

## 🎯 CRM Platform Integration

### Salesforce

```javascript
import jsforce from 'jsforce';

const conn = new jsforce.Connection({
  loginUrl: process.env.SALESFORCE_LOGIN_URL
});

await conn.login(username, password);

await conn.sobject('Lead').create({
  FirstName: crmData.firstName,
  LastName: crmData.lastName,
  Email: crmData.email,
  Company: crmData.company,
  Lead_Score__c: crmData.leadScore
});
```

### HubSpot

```javascript
import { Client } from '@hubspot/api-client';

const hubspot = new Client({
  accessToken: process.env.HUBSPOT_TOKEN
});

await hubspot.crm.contacts.basicApi.create({
  properties: {
    firstname: crmData.firstName,
    lastname: crmData.lastName,
    email: crmData.email,
    company: crmData.company
  }
});
```

### Zoho CRM

```javascript
import axios from 'axios';

await axios.post('https://www.zohoapis.com/crm/v2/Leads', {
  data: [{
    First_Name: crmData.firstName,
    Last_Name: crmData.lastName,
    Email: crmData.email,
    Company: crmData.company,
    Rating: crmData.leadScore >= 70 ? 'Hot' : 'Warm'
  }]
}, {
  headers: {
    'Authorization': `Zoho-oauthtoken ${process.env.ZOHO_TOKEN}`
  }
});
```

---

## 📊 What Data You Receive

### Standard Fields (All Forms)

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `firstName` | string | First name | "John" |
| `lastName` | string | Last name | "Smith" |
| `email` | string | Email (validated) | "john@uni.edu" |
| `phone` | string? | Phone (optional) | "+27 11 234 5678" |
| `company` | string | Company name | "ABC University" |
| `leadSource` | string | Form type | "Website - Demo Request" |
| `leadStatus` | string | Status | "New" |
| `leadScore` | number | Score 0-100 | 85 |
| `createdAt` | ISO 8601 | Timestamp | "2025-10-31T10:00:00Z" |

### Marketing Attribution

| Field | Description | Example |
|-------|-------------|---------|
| `utm.utm_source` | Traffic source | "google" |
| `utm.utm_medium` | Medium | "cpc" |
| `utm.utm_campaign` | Campaign name | "edu_2024" |
| `utm.utm_term` | Search term | "student+finance" |
| `utm.utm_content` | Ad variant | "banner_a" |

### Engagement Data

| Field | Description | Example |
|-------|-------------|---------|
| `session.timeOnSite` | Seconds on site | 180 |
| `session.pagesVisited` | Pages viewed | 4 |
| `session.landingPage` | First page | "https://knit.com/" |
| `session.referrer` | Referrer URL | "https://google.com/" |

### Compliance

| Field | Description |
|-------|-------------|
| `consent.marketingConsent` | Newsletter opt-in |
| `consent.termsAccepted` | Terms accepted |
| `consent.consentTimestamp` | When consent given |

---

## 🔥 Lead Routing Examples

### By Score

```javascript
if (crmData.leadScore >= 80) {
  // Hot lead - immediate action
  assignTo('senior-sales');
  sendSMSAlert();
  scheduleMeeting();
} else if (crmData.leadScore >= 60) {
  // Warm lead
  assignTo('sales-team');
  sendEmail();
} else {
  // Cold lead
  addToNurtureCampaign();
}
```

### By Product Interest

```javascript
switch (crmData.productInterest) {
  case 'Knit Edu':
    assignTo('education-team');
    break;
  case 'Knit Life':
    assignTo('life-services-team');
    break;
  case 'Both Solutions':
    assignTo('enterprise-team');
    flagAsUpsell();
    break;
}
```

### By Source

```javascript
if (crmData.utm.utm_source === 'google') {
  addToCampaign('Paid Search - Google');
} else if (crmData.utm.utm_source === 'linkedin') {
  addToCampaign('Social - LinkedIn');
  increaseScore(+10); // LinkedIn leads convert better
}
```

---

## 🧪 Testing

### 1. Test Payloads

Sample payloads are in `/tests/sample-crm-payloads.json`

```bash
# Test your endpoint
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d @tests/sample-crm-payloads.json
```

### 2. Verify Data Structure

```javascript
// Validate incoming data
import { validateCRMLead } from './components/utils/crmFormatter';

const validation = validateCRMLead(crmData);
if (!validation.valid) {
  console.error('Validation errors:', validation.errors);
  return res.status(400).json({ errors: validation.errors });
}
```

### 3. Check Console

When forms are submitted in demo mode, console shows:

```
Form submitted (Original): { fullName: "...", email: "..." }
Form submitted (CRM-formatted): { firstName: "...", lastName: "...", leadScore: 85 }
```

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| `/CRM_INTEGRATION_GUIDE.md` | Complete integration guide with all CRM platforms |
| `/CRM_DATA_FLOW.md` | Architecture diagram and data flow |
| `/components/types/crm.ts` | TypeScript type definitions |
| `/components/utils/crmFormatter.ts` | Data transformation logic |
| `/tests/sample-crm-payloads.json` | Sample test data |
| `/FORMS_IMPLEMENTATION.md` | Forms feature documentation |

---

## ⚡ Pro Tips

### 1. Enhance Lead Scoring

```javascript
// Backend enhancement
if (email.endsWith('.edu') || email.endsWith('.ac.za')) {
  leadScore += 15; // Education domain bonus
}

if (isFreeEmailProvider(email)) {
  leadScore -= 10; // Gmail, Yahoo, etc.
}
```

### 2. Duplicate Prevention

```javascript
// Check for existing lead
const existing = await db.leads.findUnique({
  where: { email: crmData.email }
});

if (existing) {
  // Update instead of create
  await db.leads.update({
    where: { id: existing.id },
    data: {
      lead_score: Math.max(existing.lead_score, crmData.leadScore),
      updated_at: new Date()
    }
  });
}
```

### 3. Failed Sync Retry

```javascript
// Queue failed syncs
if (!crmSynced) {
  await retryQueue.add({
    leadId: lead.id,
    crmData,
    attempt: 1,
    nextRetry: Date.now() + (5 * 60 * 1000) // Retry in 5 min
  });
}
```

### 4. Notifications

```javascript
// Alert high-value leads
if (crmData.leadScore >= 90) {
  await slack.send({
    channel: '#hot-leads',
    text: `🔥 Hot lead: ${crmData.firstName} ${crmData.lastName} (${crmData.company}) - Score: ${crmData.leadScore}`
  });
}
```

---

## 🆘 Common Issues

### Issue: "Email already exists"

**Solution:** Update existing lead instead of creating new one

```javascript
const lead = await db.leads.upsert({
  where: { email: crmData.email },
  update: { /* new data */ },
  create: { /* new lead */ }
});
```

### Issue: "CRM sync failing"

**Solution:** Implement retry queue and check credentials

```javascript
try {
  await syncToCRM(crmData);
} catch (error) {
  console.error('CRM sync error:', error);
  await queueForRetry(crmData);
}
```

### Issue: "Lead score always 50"

**Solution:** Check that enrichment data (company size, UTM params) is being captured

```javascript
console.log('Lead score factors:', {
  companySize: crmData.companySize,
  hasPhone: !!crmData.phone,
  hasWebsite: !!crmData.website,
  utmCampaign: crmData.utm.utm_campaign,
  timeOnSite: crmData.session.timeOnSite
});
```

---

## 🎉 You're Done!

Your forms are now sending production-ready, CRM-formatted data. No frontend changes needed when you add CRM integration later!

**Next Steps:**
1. Set up your database table
2. Create the API endpoint
3. Configure your CRM platform
4. Test with sample payloads
5. Deploy to production

**Questions?** See the full integration guide in `/CRM_INTEGRATION_GUIDE.md`
