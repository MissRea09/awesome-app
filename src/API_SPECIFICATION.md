# Knit Forms API Specification

Version: 1.0.0  
Last Updated: 2025-10-31

## Overview

This document specifies the expected API endpoints and data contracts for the Knit marketing website form submissions.

---

## Endpoints

### 1. Demo Request Submission

**Endpoint:** `POST /api/contact`  
**Purpose:** Handle demo request form submissions from the Contact section

#### Request

```http
POST /api/contact HTTP/1.1
Host: api.knit.com
Content-Type: application/json
Authorization: Bearer <optional-if-needed>

{
  "formData": {
    "fullName": "John Smith",
    "email": "john.smith@university.edu",
    "organization": "ABC University",
    "phone": "+27 11 234 5678",
    "vertical": "education",
    "message": "We're looking for a solution for 5,000 students",
    "subscribeNewsletter": true
  },
  "crmData": {
    "formType": "demo_request",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john.smith@university.edu",
    "phone": "+27 11 234 5678",
    "company": "ABC University",
    "industry": "Education - Higher Education",
    "leadSource": "Website - Demo Request",
    "leadStatus": "New",
    "leadScore": 85,
    "productInterest": "Knit Edu",
    "createdAt": "2025-10-31T10:30:00.000Z",
    "updatedAt": "2025-10-31T10:30:00.000Z",
    "consent": {
      "marketingConsent": true,
      "termsAccepted": true,
      "privacyPolicyAccepted": true,
      "dataProcessingConsent": true,
      "consentTimestamp": "2025-10-31T10:30:00.000Z",
      "consentMethod": "explicit"
    },
    "utm": {
      "utm_source": "google",
      "utm_medium": "cpc",
      "utm_campaign": "edu_africa_2024",
      "utm_term": "student+finance",
      "utm_content": "landing_page_variant_a"
    },
    "device": {
      "userAgent": "Mozilla/5.0...",
      "platform": "MacIntel",
      "isMobile": false,
      "isTablet": false,
      "isDesktop": true,
      "browserName": "Chrome",
      "browserVersion": "120.0"
    },
    "session": {
      "sessionId": "session_1730381400000_x7k9m2p",
      "pageUrl": "https://knit.com/edu?utm_source=google",
      "pagePath": "/edu",
      "referrer": "https://www.google.com/",
      "landingPage": "https://knit.com/",
      "timeOnSite": 245,
      "pagesVisited": 5
    },
    "description": "We're looking for a solution for 5,000 students"
  },
  "metadata": {
    "formName": "demo_request",
    "submissionTime": "2025-10-31T10:30:00.000Z",
    "timeToSubmit": 245
  }
}
```

#### Response (Success)

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "leadId": "lead_a1b2c3d4e5f6",
  "message": "Thank you for your submission. We'll be in touch within 24 hours.",
  "metadata": {
    "processingTime": 234,
    "crmSynced": true,
    "emailSent": true
  }
}
```

#### Response (Error - Validation)

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": ["Invalid email format"],
    "phone": ["Invalid phone number format"]
  }
}
```

#### Response (Error - Server)

```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json

{
  "success": false,
  "message": "An error occurred processing your request. Please try again later.",
  "errorId": "err_xyz123"
}
```

---

### 2. General Inquiry Submission

**Endpoint:** `POST /api/general-inquiry`  
**Purpose:** Handle general inquiry form submissions from the Get In Touch section

#### Request

```http
POST /api/general-inquiry HTTP/1.1
Host: api.knit.com
Content-Type: application/json

{
  "formData": {
    "firstName": "Sarah",
    "lastName": "Johnson",
    "email": "sarah@insurance.co.za",
    "company": "XYZ Insurance",
    "interest": "life",
    "message": "We're interested in Knit Life for funeral insurance",
    "subscribeNewsletter": true
  },
  "crmData": {
    "formType": "general_inquiry",
    "firstName": "Sarah",
    "lastName": "Johnson",
    "email": "sarah@insurance.co.za",
    "company": "XYZ Insurance",
    "leadSource": "Website - Get In Touch",
    "leadStatus": "New",
    "leadScore": 75,
    "inquiryType": "life",
    "message": "We're interested in Knit Life for funeral insurance",
    // ... (all other CRM fields)
  },
  "metadata": {
    "formName": "get_in_touch",
    "submissionTime": "2025-10-31T15:15:00.000Z",
    "timeToSubmit": 180
  }
}
```

#### Response

Same structure as Demo Request endpoint.

---

### 3. Partner Application Submission

**Endpoint:** `POST /api/partner`  
**Purpose:** Handle partner application form submissions

#### Request

```http
POST /api/partner HTTP/1.1
Host: api.knit.com
Content-Type: application/json

{
  "formData": {
    "fullName": "Michael Chen",
    "email": "michael@partner.com",
    "company": "Tech Integrations Inc",
    "phone": "+27 21 555 9876",
    "position": "VP of Business Development",
    "companySize": "51-200 employees",
    "website": "https://techintegrations.com",
    "partnershipType": "API Integration Partner",
    "partnershipInterest": "We specialize in building custom integrations...",
    "agreedToTerms": true
  },
  "crmData": {
    "formType": "partner_application",
    "firstName": "Michael",
    "lastName": "Chen",
    "email": "michael@partner.com",
    "phone": "+27 21 555 9876",
    "company": "Tech Integrations Inc",
    "companySize": "51-200 employees",
    "website": "https://techintegrations.com",
    "leadSource": "Website - Partner Application",
    "leadStatus": "New",
    "leadScore": 90,
    "partnershipType": "API Integration Partner",
    "jobTitle": "VP of Business Development",
    "partnershipDescription": "We specialize in building custom integrations...",
    "partnerStatus": "Applied",
    // ... (all other CRM fields)
  },
  "metadata": {
    "formName": "partner_application",
    "submissionTime": "2025-10-31T16:45:00.000Z",
    "timeToSubmit": 420
  }
}
```

#### Response

Same structure as Demo Request endpoint.

---

## Data Types

### FormData Object

Raw form field values as submitted by the user.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Various | string/boolean | Varies | Form-specific fields |

### CRMData Object

Structured, enriched lead data ready for CRM ingestion.

#### Base Fields (All Forms)

| Field | Type | Required | Format | Description |
|-------|------|----------|--------|-------------|
| `formType` | string | Yes | Enum | "demo_request" \| "general_inquiry" \| "partner_application" |
| `firstName` | string | Yes | 2-100 chars | Contact first name |
| `lastName` | string | Yes | 2-100 chars | Contact last name |
| `email` | string | Yes | Email format | Contact email address |
| `phone` | string | No | E.164 or local | Contact phone number |
| `company` | string | No | 2-255 chars | Company name |
| `companySize` | string | No | Enum | "1-10 employees" \| "11-50 employees" \| ... |
| `industry` | string | No | Enum | "Education - Higher Education" \| ... |
| `website` | string | No | URL format | Company website |
| `leadSource` | string | Yes | Enum | "Website - Demo Request" \| ... |
| `leadStatus` | string | Yes | Fixed | Always "New" |
| `leadScore` | number | Yes | 0-100 | Calculated lead score |
| `createdAt` | string | Yes | ISO 8601 | Submission timestamp |
| `updatedAt` | string | Yes | ISO 8601 | Last update timestamp |

#### Consent Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `marketingConsent` | boolean | Yes | User opted into marketing communications |
| `termsAccepted` | boolean | Yes | User accepted terms and conditions |
| `privacyPolicyAccepted` | boolean | Yes | User accepted privacy policy |
| `dataProcessingConsent` | boolean | Yes | User consented to data processing |
| `consentTimestamp` | string | Yes | ISO 8601 timestamp when consent given |
| `consentMethod` | string | Yes | "explicit" \| "implied" \| "checkbox" |
| `consentIpAddress` | string | No | IP address (if backend adds) |

#### UTM Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `utm_source` | string | No | Marketing source (e.g., "google") |
| `utm_medium` | string | No | Marketing medium (e.g., "cpc") |
| `utm_campaign` | string | No | Campaign name |
| `utm_term` | string | No | Search term |
| `utm_content` | string | No | Ad content/variant |

#### Device Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `userAgent` | string | Yes | Full user agent string |
| `platform` | string | Yes | Platform (e.g., "MacIntel") |
| `isMobile` | boolean | Yes | Is mobile device |
| `isTablet` | boolean | Yes | Is tablet device |
| `isDesktop` | boolean | Yes | Is desktop device |
| `browserName` | string | No | Browser name (e.g., "Chrome") |
| `browserVersion` | string | No | Browser version |

#### Session Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `sessionId` | string | Yes | Unique session identifier |
| `pageUrl` | string | Yes | Full URL of submission page |
| `pagePath` | string | Yes | Path of submission page |
| `referrer` | string | Yes | Referrer URL or "direct" |
| `landingPage` | string | Yes | First page visited in session |
| `timeOnSite` | number | Yes | Seconds spent on site |
| `pagesVisited` | number | Yes | Number of pages viewed |

#### Form-Specific Fields

**Demo Request:**
| Field | Type | Description |
|-------|------|-------------|
| `productInterest` | string | "Knit Edu" \| "Knit Life" \| "Both Solutions" |
| `requestedDemoDate` | string | Optional ISO 8601 date |
| `description` | string | User's message |

**General Inquiry:**
| Field | Type | Description |
|-------|------|-------------|
| `inquiryType` | string | "edu" \| "life" \| "both" |
| `message` | string | User's message |

**Partner Application:**
| Field | Type | Description |
|-------|------|-------------|
| `partnershipType` | string | "API Integration Partner" \| "White-Label Partner" \| ... |
| `jobTitle` | string | Applicant's job title |
| `partnershipDescription` | string | Partnership interest description |
| `partnerStatus` | string | Always "Applied" |

### Metadata Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `formName` | string | Yes | Identifier for which form was submitted |
| `submissionTime` | string | Yes | ISO 8601 timestamp |
| `timeToSubmit` | number | Yes | Seconds from form start to submit |

---

## Validation Rules

### Email
- Format: RFC 5322 compliant
- Required for all forms
- Must contain @ and valid domain

### Phone
- Optional for most forms
- Format: International (E.164) or local South African format
- Examples: "+27 11 234 5678", "011 234 5678"

### URL (Website)
- Optional
- Must be valid URL with protocol
- Examples: "https://company.com", "http://www.company.co.za"

### Lead Score
- Range: 0-100 (integer)
- Calculated on frontend
- Backend may enhance/override

### Timestamps
- Format: ISO 8601 with timezone
- Example: "2025-10-31T10:30:00.000Z"

---

## Status Codes

| Code | Meaning | When |
|------|---------|------|
| 200 | OK | Successful submission |
| 400 | Bad Request | Validation error or malformed data |
| 401 | Unauthorized | Missing/invalid API key (if auth required) |
| 409 | Conflict | Duplicate submission (same email within X minutes) |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server-side processing error |
| 503 | Service Unavailable | Server or CRM temporarily unavailable |

---

## Rate Limiting

Recommended rate limits to prevent abuse:

- **Per IP:** 10 submissions per hour
- **Per Email:** 3 submissions per day
- **Global:** 1000 submissions per hour

### Rate Limit Headers

```http
X-RateLimit-Limit: 10
X-RateLimit-Remaining: 7
X-RateLimit-Reset: 1730395200
```

### Rate Limit Response

```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json
Retry-After: 3600

{
  "success": false,
  "message": "Rate limit exceeded. Please try again in 1 hour.",
  "retryAfter": 3600
}
```

---

## Security

### HTTPS Only
All endpoints must use HTTPS in production.

### CORS
```http
Access-Control-Allow-Origin: https://knit.com
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

### Honeypot
- Forms include hidden `_honeypot` field
- If populated, likely bot → reject silently (return 200 but don't process)

### Input Sanitization
- Sanitize all text inputs for XSS
- Validate email format
- Validate phone number format
- Validate URL format
- Strip HTML from message fields

### CSRF Protection
If using session-based auth, implement CSRF tokens.

---

## Idempotency

### Duplicate Detection

Prevent duplicate submissions within short time window:

```javascript
// Pseudo-code
const recentSubmission = await db.findOne({
  email: crmData.email,
  createdAt: { $gte: Date.now() - (5 * 60 * 1000) } // 5 minutes
});

if (recentSubmission) {
  return res.status(409).json({
    success: false,
    message: "You've already submitted this form recently. Please wait before submitting again."
  });
}
```

### Idempotency Keys (Optional)

For critical operations, support idempotency keys:

```http
POST /api/contact
Idempotency-Key: unique_key_123

# Same request with same key returns cached response
```

---

## Webhooks (Optional)

Backend may send webhooks for form submissions:

### Configuration

```json
{
  "webhookUrl": "https://your-app.com/webhooks/knit-forms",
  "events": ["form.submitted", "form.processed", "crm.synced"],
  "secret": "webhook_secret_key"
}
```

### Webhook Payload

```http
POST /webhooks/knit-forms HTTP/1.1
Content-Type: application/json
X-Knit-Signature: sha256=abc123...

{
  "event": "form.submitted",
  "timestamp": "2025-10-31T10:30:00.000Z",
  "data": {
    "leadId": "lead_123",
    "formType": "demo_request",
    "email": "john@university.edu",
    "leadScore": 85
  }
}
```

---

## Monitoring

### Health Check Endpoint

```http
GET /api/health HTTP/1.1

Response:
{
  "status": "healthy",
  "timestamp": "2025-10-31T10:30:00.000Z",
  "checks": {
    "database": "ok",
    "crm": "ok",
    "email": "ok"
  }
}
```

### Metrics to Track

1. **Submission Metrics:**
   - Total submissions per hour/day
   - Submissions by form type
   - Submissions by source (UTM)

2. **Processing Metrics:**
   - Average processing time
   - Success rate
   - Error rate

3. **CRM Sync Metrics:**
   - Sync success rate
   - Average sync latency
   - Failed syncs (requires retry)

4. **Lead Quality:**
   - Average lead score
   - Lead score distribution
   - Conversion rate by score

---

## Testing

### Test Mode

Support test mode for development:

```http
POST /api/contact
X-Test-Mode: true

# Returns success but doesn't store data or sync to CRM
```

### Test Payloads

Sample test payloads available in `/tests/sample-crm-payloads.json`

### Postman Collection

Import API collection for testing:
- Demo request
- General inquiry
- Partner application
- Error cases
- Rate limiting

---

## Changelog

### v1.0.0 (2025-10-31)
- Initial API specification
- Three form endpoints: Demo Request, General Inquiry, Partner Application
- CRM-ready data structure
- UTM tracking, device info, session tracking
- POPIA/GDPR consent management
- Lead scoring
- Comprehensive validation

---

## Support

For API questions or issues:
- Email: developers@knit.com
- Docs: `/CRM_INTEGRATION_GUIDE.md`
- Types: `/components/types/crm.ts`
- Formatter: `/components/utils/crmFormatter.ts`
