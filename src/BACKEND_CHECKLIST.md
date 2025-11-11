# Backend Implementation Checklist

Use this checklist to implement the Knit forms backend integration step by step.

---

## 📋 Phase 1: Setup (Day 1)

### Database Setup

- [ ] **Create `leads` table**
  - [ ] Add primary key (UUID)
  - [ ] Add email field (unique index)
  - [ ] Add first_name, last_name, company
  - [ ] Add lead_score, lead_source, lead_status
  - [ ] Add crm_sync fields (status, record_id, error)
  - [ ] Add timestamps (created_at, updated_at)
  - [ ] Add JSONB columns for raw_data, enriched_data

- [ ] **Create `consent_records` table**
  - [ ] Add lead_id foreign key
  - [ ] Add consent fields (type, given, timestamp)
  - [ ] Add IP address, user agent

- [ ] **Create `utm_tracking` table** (optional)
  - [ ] Add lead_id foreign key
  - [ ] Add UTM parameter fields
  - [ ] Add referrer, landing page

- [ ] **Create indexes**
  - [ ] Email (for duplicate checks)
  - [ ] Lead status (for filtering)
  - [ ] Lead score (for segmentation)
  - [ ] Created at (for reporting)
  - [ ] CRM sync status (for retry jobs)

```sql
-- Example schema in /CRM_DATA_FLOW.md
```

### API Setup

- [ ] **Create routes**
  - [ ] POST /api/contact (demo request)
  - [ ] POST /api/general-inquiry (get in touch)
  - [ ] POST /api/partner (partner application)
  - [ ] GET /api/health (health check)

- [ ] **Add middleware**
  - [ ] CORS configuration
  - [ ] Rate limiting (per IP, per email)
  - [ ] Body parsing (JSON)
  - [ ] Request logging
  - [ ] Error handling

- [ ] **Add validation**
  - [ ] Email format validation
  - [ ] Phone format validation
  - [ ] URL format validation
  - [ ] Required field checks
  - [ ] Honeypot check

### Environment Variables

- [ ] **Set up config**
  ```bash
  # Database
  DATABASE_URL=postgresql://...
  
  # CRM (choose one or more)
  CRM_PROVIDER=salesforce
  SALESFORCE_LOGIN_URL=https://login.salesforce.com
  SALESFORCE_USERNAME=integration@knit.com
  SALESFORCE_PASSWORD=***
  SALESFORCE_TOKEN=***
  
  # OR HubSpot
  HUBSPOT_ACCESS_TOKEN=***
  
  # OR Zoho
  ZOHO_ACCESS_TOKEN=***
  
  # Email
  SMTP_HOST=smtp.sendgrid.net
  SMTP_USER=apikey
  SMTP_PASS=***
  NOTIFICATION_EMAIL=sales@knit.com
  
  # Monitoring
  SENTRY_DSN=***
  SLACK_WEBHOOK_URL=***
  
  # App
  NODE_ENV=production
  PORT=3000
  ```

---

## 📋 Phase 2: Core Functionality (Day 2-3)

### Form Submission Handler

- [ ] **Create endpoint handler**
  ```javascript
  POST /api/contact
  ```

- [ ] **Validate request**
  - [ ] Check required fields
  - [ ] Validate email format
  - [ ] Validate phone format (if provided)
  - [ ] Check honeypot field
  - [ ] Check rate limits

- [ ] **Store in database**
  - [ ] Check for duplicates (same email within 5 min)
  - [ ] Create lead record
  - [ ] Store original formData
  - [ ] Store enriched crmData
  - [ ] Create consent record
  - [ ] Store UTM tracking

- [ ] **Return response**
  - [ ] Return leadId
  - [ ] Return success message
  - [ ] Include processing metadata

### Duplicate Prevention

- [ ] **Implement duplicate check**
  ```javascript
  // Check for submission in last 5 minutes
  const recent = await db.leads.findFirst({
    where: {
      email: crmData.email,
      created_at: { gte: new Date(Date.now() - 5*60*1000) }
    }
  });
  
  if (recent) {
    return 409 Conflict
  }
  ```

### Error Handling

- [ ] **Handle validation errors** (400)
- [ ] **Handle duplicate submissions** (409)
- [ ] **Handle rate limits** (429)
- [ ] **Handle server errors** (500)
- [ ] **Log errors to monitoring**
- [ ] **Return user-friendly messages**

---

## 📋 Phase 3: CRM Integration (Day 4-5)

### Choose CRM Provider

- [ ] **Salesforce**
  - [ ] Install jsforce package
  - [ ] Configure connection
  - [ ] Map fields to Salesforce Lead object
  - [ ] Create custom fields in Salesforce
  - [ ] Test lead creation

- [ ] **OR HubSpot**
  - [ ] Install @hubspot/api-client
  - [ ] Configure API client
  - [ ] Map fields to HubSpot Contact
  - [ ] Create custom properties in HubSpot
  - [ ] Test contact creation

- [ ] **OR Zoho CRM**
  - [ ] Set up API authentication
  - [ ] Map fields to Zoho Lead
  - [ ] Create custom fields in Zoho
  - [ ] Test lead creation

### CRM Sync Function

- [ ] **Create sync function**
  ```javascript
  async function syncToCRM(crmData) {
    // Map fields
    // Create lead/contact
    // Return CRM record ID
  }
  ```

- [ ] **Handle sync errors**
  - [ ] Log error
  - [ ] Store error in database
  - [ ] Queue for retry

- [ ] **Update lead record**
  - [ ] Set crm_record_id
  - [ ] Set crm_sync_status
  - [ ] Set crm_synced_at

### Async Processing

- [ ] **Queue CRM sync**
  ```javascript
  // Don't block response on CRM sync
  syncToCRM(crmData).catch(handleError);
  ```

- [ ] **Implement retry queue**
  - [ ] Store failed syncs
  - [ ] Retry with exponential backoff
  - [ ] Max 5 retry attempts
  - [ ] Alert on max retries exceeded

---

## 📋 Phase 4: Lead Scoring & Routing (Day 6)

### Enhance Lead Score

- [ ] **Implement backend scoring**
  ```javascript
  // Enhance frontend lead score
  if (email.endsWith('.edu')) score += 15;
  if (isFreeEmail(email)) score -= 10;
  if (isBusinessHours()) score += 5;
  ```

- [ ] **Store enhanced score**
  ```javascript
  await db.leads.update({
    where: { id: leadId },
    data: { lead_score: enhancedScore }
  });
  ```

### Lead Assignment

- [ ] **Hot leads (90-100)**
  - [ ] Assign to senior sales rep
  - [ ] Send SMS alert
  - [ ] Send Slack notification
  - [ ] Create high-priority task

- [ ] **Warm leads (70-89)**
  - [ ] Round-robin assignment
  - [ ] Send email notification
  - [ ] Create standard task

- [ ] **Qualified leads (50-69)**
  - [ ] Assign to inside sales
  - [ ] Add to nurture campaign

- [ ] **Cold leads (0-49)**
  - [ ] Add to marketing automation
  - [ ] No immediate sales contact

### Product-Based Routing

- [ ] **Knit Edu leads**
  - [ ] Route to Education team
  - [ ] Add to "EDU_2024" campaign

- [ ] **Knit Life leads**
  - [ ] Route to Life Services team
  - [ ] Add to "LIFE_2024" campaign

- [ ] **Both Solutions**
  - [ ] Route to Enterprise team
  - [ ] Flag as cross-sell opportunity

---

## 📋 Phase 5: Notifications (Day 7)

### Email Notifications

- [ ] **Sales team notification**
  - [ ] Trigger on new lead
  - [ ] Include lead details
  - [ ] Include lead score
  - [ ] Link to CRM record

- [ ] **User confirmation**
  - [ ] Send only if marketing consent
  - [ ] Personalize with first name
  - [ ] Set expectations (24hr response)
  - [ ] Include next steps

- [ ] **Template examples:**
  ```
  Subject: New Demo Request - John Smith (Score: 85)
  
  A new demo request has been submitted:
  
  Name: John Smith
  Company: ABC University
  Email: john@university.edu
  Phone: +27 11 234 5678
  Product Interest: Knit Edu
  Lead Score: 85
  
  Message:
  We're looking for a solution for 5,000 students...
  
  [View in Salesforce] [Send Email]
  ```

### Slack Notifications

- [ ] **High-value leads**
  - [ ] Send to #hot-leads channel
  - [ ] Include score and details
  - [ ] @mention assigned rep

- [ ] **Partner applications**
  - [ ] Send to #partnerships channel
  - [ ] Include company details

- [ ] **CRM sync failures**
  - [ ] Send to #crm-errors channel
  - [ ] Include error details

### SMS Alerts (Optional)

- [ ] **Hot leads only** (score >= 90)
- [ ] Send to on-call sales rep
- [ ] Keep message brief

---

## 📋 Phase 6: Compliance & Security (Day 8)

### POPIA/GDPR Compliance

- [ ] **Store consent records**
  - [ ] Record consent type
  - [ ] Record timestamp
  - [ ] Record IP address
  - [ ] Record consent method

- [ ] **Respect opt-outs**
  - [ ] Don't email if no marketing consent
  - [ ] Store opt-out preferences
  - [ ] Honor data deletion requests

- [ ] **Data retention policy**
  - [ ] Delete old leads without consent (2 years)
  - [ ] Archive instead of hard delete
  - [ ] Implement automated cleanup job

### Security

- [ ] **Input sanitization**
  - [ ] Strip HTML from messages
  - [ ] Validate all inputs
  - [ ] Prevent SQL injection

- [ ] **Rate limiting**
  - [ ] 10 submissions per hour per IP
  - [ ] 3 submissions per day per email
  - [ ] Return 429 when exceeded

- [ ] **Honeypot validation**
  ```javascript
  if (formData._honeypot) {
    // Silently discard (likely bot)
    return 200 OK with fake success
  }
  ```

- [ ] **HTTPS only**
  - [ ] Redirect HTTP to HTTPS
  - [ ] Set secure cookie flags

---

## 📋 Phase 7: Monitoring & Analytics (Day 9)

### Logging

- [ ] **Log all submissions**
  - [ ] Include lead ID
  - [ ] Include timestamp
  - [ ] Include source (UTM)
  - [ ] Include processing time

- [ ] **Log errors**
  - [ ] Validation errors
  - [ ] CRM sync errors
  - [ ] Email send errors
  - [ ] Include stack traces

### Metrics

- [ ] **Set up dashboards**
  - [ ] Submissions per day
  - [ ] Submissions by form type
  - [ ] Submissions by source (UTM)
  - [ ] Average lead score
  - [ ] CRM sync success rate
  - [ ] Processing time percentiles

- [ ] **Set up alerts**
  - [ ] Error rate > 5%
  - [ ] CRM sync failure rate > 10%
  - [ ] Retry queue depth > 100
  - [ ] Processing time > 5 seconds

### Health Checks

- [ ] **Create /api/health endpoint**
  ```javascript
  {
    "status": "healthy",
    "checks": {
      "database": "ok",
      "crm": "ok",
      "email": "ok",
      "retryQueue": { "depth": 5 }
    }
  }
  ```

- [ ] **Monitor endpoint**
  - [ ] Check every 60 seconds
  - [ ] Alert on unhealthy status
  - [ ] Track uptime

---

## 📋 Phase 8: Testing (Day 10)

### Unit Tests

- [ ] **Test validation**
  - [ ] Valid email accepted
  - [ ] Invalid email rejected
  - [ ] Required fields enforced
  - [ ] Phone format validation

- [ ] **Test duplicate detection**
  - [ ] Same email within 5 min rejected
  - [ ] Same email after 5 min accepted

- [ ] **Test lead scoring**
  - [ ] Score calculation correct
  - [ ] Score range 0-100
  - [ ] Score enhancements applied

### Integration Tests

- [ ] **Test database**
  - [ ] Lead created successfully
  - [ ] Consent record created
  - [ ] UTM tracking stored

- [ ] **Test CRM sync**
  - [ ] Lead created in CRM
  - [ ] CRM record ID stored
  - [ ] Failed sync queued for retry

- [ ] **Test email**
  - [ ] Notification sent to sales
  - [ ] Confirmation sent to user
  - [ ] Respects marketing consent

### End-to-End Tests

- [ ] **Submit demo request**
  - [ ] Frontend → Backend → Database → CRM
  - [ ] Verify lead in database
  - [ ] Verify lead in CRM
  - [ ] Verify emails sent

- [ ] **Submit with high score**
  - [ ] Verify assignment to senior rep
  - [ ] Verify Slack notification
  - [ ] Verify SMS sent (if configured)

- [ ] **Submit duplicate**
  - [ ] Verify 409 response
  - [ ] Verify no duplicate in database

### Load Testing

- [ ] **Test rate limits**
  - [ ] Exceed per-IP limit
  - [ ] Verify 429 response

- [ ] **Test concurrent submissions**
  - [ ] 100 concurrent requests
  - [ ] Verify all processed
  - [ ] Check processing times

---

## 📋 Phase 9: Documentation (Day 11)

### API Documentation

- [ ] **Document endpoints**
  - [ ] Request format
  - [ ] Response format
  - [ ] Error codes
  - [ ] Examples

- [ ] **Create Postman collection**
  - [ ] Demo request example
  - [ ] General inquiry example
  - [ ] Partner application example
  - [ ] Error cases

### Runbooks

- [ ] **CRM sync failure runbook**
  - [ ] How to check retry queue
  - [ ] How to manually retry
  - [ ] Common errors and fixes

- [ ] **Database maintenance**
  - [ ] Backup procedures
  - [ ] Restoration procedures
  - [ ] Data retention cleanup

### Team Training

- [ ] **Train sales team**
  - [ ] How to access leads in CRM
  - [ ] Lead scoring interpretation
  - [ ] Follow-up SLAs

- [ ] **Train support team**
  - [ ] How to check submission status
  - [ ] How to resend confirmation emails
  - [ ] Common user questions

---

## 📋 Phase 10: Deployment (Day 12)

### Pre-Deployment

- [ ] **Code review completed**
- [ ] **Tests passing (95%+ coverage)**
- [ ] **Security audit completed**
- [ ] **Performance testing completed**
- [ ] **Documentation completed**

### Staging Deployment

- [ ] **Deploy to staging**
- [ ] **Test all form submissions**
- [ ] **Verify CRM sync** (use test CRM)
- [ ] **Verify emails sent**
- [ ] **Check monitoring dashboards**

### Production Deployment

- [ ] **Deploy to production**
- [ ] **Update frontend endpoints**
  ```typescript
  // In Contact.tsx, CallToAction.tsx, PartnerForm.tsx
  endpoint: process.env.REACT_APP_API_URL + "/api/contact"
  ```

- [ ] **Monitor closely for 24 hours**
  - [ ] Check error rates
  - [ ] Check CRM sync rates
  - [ ] Check processing times

### Post-Deployment

- [ ] **Verify first real submission**
  - [ ] Check database
  - [ ] Check CRM
  - [ ] Check emails

- [ ] **Update status page**
  - [ ] Forms API: Operational

---

## 📋 Ongoing Maintenance

### Daily

- [ ] **Check error logs**
- [ ] **Check retry queue depth**
- [ ] **Review high-value leads**

### Weekly

- [ ] **Review metrics dashboard**
  - [ ] Submission trends
  - [ ] Lead quality (avg score)
  - [ ] Source attribution
  - [ ] Conversion rates

- [ ] **Process failed syncs**
  - [ ] Investigate persistent failures
  - [ ] Manual intervention if needed

### Monthly

- [ ] **Database maintenance**
  - [ ] Run retention cleanup
  - [ ] Optimize indexes
  - [ ] Archive old data

- [ ] **CRM data quality**
  - [ ] Check for duplicates
  - [ ] Verify field mappings
  - [ ] Update lead scores

---

## ✅ Go-Live Checklist

- [ ] Database schema deployed
- [ ] API endpoints live
- [ ] CRM integration working
- [ ] Email notifications working
- [ ] Rate limiting configured
- [ ] Monitoring dashboards created
- [ ] Alerts configured
- [ ] Documentation published
- [ ] Team trained
- [ ] Frontend updated with API endpoints
- [ ] Tested end-to-end in production
- [ ] Backup and restore tested

---

## 📚 Resources

- **Quick Start:** `/QUICK_START_CRM.md`
- **Full Integration Guide:** `/CRM_INTEGRATION_GUIDE.md`
- **Data Flow Diagrams:** `/CRM_DATA_FLOW.md`
- **API Specification:** `/API_SPECIFICATION.md`
- **Sample Payloads:** `/tests/sample-crm-payloads.json`
- **TypeScript Types:** `/components/types/crm.ts`
- **Data Formatter:** `/components/utils/crmFormatter.ts`

---

## 🆘 Support

Need help? Contact:
- Email: developers@knit.com
- Slack: #knit-developers
- Issues: GitHub Issues

---

**Estimated Timeline:** 12 days for full implementation

**Team Required:**
- 1 Backend Developer
- 1 CRM Administrator (for custom field setup)
- 1 DevOps Engineer (for deployment)
