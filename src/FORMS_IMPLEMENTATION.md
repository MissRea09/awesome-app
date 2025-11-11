# Forms Implementation Guide

## Overview

This document describes the comprehensive form implementation across the Knit marketing website, meeting all requirements for lead generation, validation, accessibility, analytics, and security.

## All Forms

The following forms are now fully functional with comprehensive validation, accessibility, analytics, security, and **CRM-ready data structures**:

1. **Demo Request Form** - `/components/Contact.tsx` - Light theme, located at #contact
2. **Get in Touch Form** - `/components/CallToAction.tsx` - Dark theme, located at #contact  
3. **Partner Application Form** - `/components/PartnerForm.tsx` - Light theme, located at #partner-form

## 🆕 CRM Integration Ready

All forms now output **CRM-ready structured data** compatible with Salesforce, HubSpot, Zoho CRM, Pipedrive, and Microsoft Dynamics without requiring frontend refactoring. See `/CRM_INTEGRATION_GUIDE.md` for complete integration details.

## Features Implemented

### ✅ CRM Integration (NEW)

**Automatic Data Enrichment:**
- All form submissions are automatically formatted for CRM ingestion
- UTM parameter tracking (source, medium, campaign, term, content)
- Device and browser detection (mobile/desktop/tablet)
- Session tracking (time on site, pages visited, landing page, referrer)
- Consent management (POPIA/GDPR compliant)
- Lead scoring (0-100 based on engagement and company size)
- Timestamps in ISO 8601 format

**Supported CRMs:**
- Salesforce (with field mappings)
- HubSpot (with field mappings)
- Zoho CRM (with field mappings)
- Pipedrive
- Microsoft Dynamics
- Custom CRM systems

**Data Structure:**
```typescript
{
  formData: { /* Original form fields */ },
  crmData: {
    formType: "demo_request" | "general_inquiry" | "partner_application",
    firstName: string,
    lastName: string,
    email: string,
    company: string,
    leadSource: "Website - ...",
    leadStatus: "New",
    leadScore: number,
    consent: { /* POPIA/GDPR compliance */ },
    utm: { /* Marketing attribution */ },
    device: { /* Device info */ },
    session: { /* Session tracking */ }
  },
  metadata: { /* Submission metadata */ }
}
```

**Files:**
- `/components/types/crm.ts` - TypeScript type definitions
- `/components/utils/crmFormatter.ts` - Data formatting utilities
- `/CRM_INTEGRATION_GUIDE.md` - Complete integration guide
- `/tests/sample-crm-payloads.json` - Sample test data

### ✅ Form Components

1. **FormField Component** (`/components/FormField.tsx`)
   - Reusable form field component with built-in validation display
   - Supports text, email, tel, textarea, select, and checkbox inputs
   - Required field indicators with `*` symbol
   - Error messages with AlertCircle icon
   - Full ARIA label support for accessibility
   - Disabled state handling

2. **useForm Hook** (`/components/useForm.ts`)
   - Custom React hook for form state management
   - Built-in validation with multiple rule types
   - Honeypot spam protection
   - Form abandonment tracking
   - GA4 analytics integration
   - Success/error handling
   - Automatic field-level validation

### ✅ Form Pages

1. **Demo Request Form** (`/components/Contact.tsx`)
   - Located at `#contact` section (homepage)
   - Fields: Name, Email, Company, Phone, Vertical, Message, Newsletter
   - Validation: All required fields validated
   - CTA: "Book Demo"
   - Theme: Light

2. **Get in Touch Form** (`/components/CallToAction.tsx`)
   - Located at `#contact` section (homepage, above footer)
   - Fields: First Name, Last Name, Email, Company, Interest, Message, Newsletter
   - Validation: All required fields validated
   - CTA: "Submit Request"
   - Theme: Dark (white text on dark background)

3. **Partner Application Form** (`/components/PartnerForm.tsx`)
   - Located at `#partner-form` on Partner page
   - Fields: Name, Email, Company, Phone, Position, Company Size, Website, Partnership Type, Message, Terms Agreement
   - Extended validation including URL validation
   - CTA: "Submit Partnership Application"
   - Theme: Light

## Validation Rules

The `useForm` hook supports comprehensive validation:

```typescript
{
  fieldName: {
    required: boolean,           // Field must have a value
    email: boolean,              // Must be valid email format
    minLength: number,           // Minimum character length
    maxLength: number,           // Maximum character length
    pattern: RegExp,             // Custom regex pattern
    custom: (value) => string    // Custom validation function
  }
}
```

### Example Usage

```typescript
const form = useForm(
  { email: "", name: "" },
  {
    email: { required: true, email: true },
    name: { required: true, minLength: 2 }
  },
  "my_form"
);
```

## User Experience

### Clear Labels & Indicators
- All labels clearly identify fields
- Required fields marked with red `*`
- Optional fields have no indicator
- Clear placeholder text for guidance

### Validation Feedback
- Real-time validation after field is touched
- Error messages appear below field with icon
- Red border on invalid fields
- No page reload on validation errors
- Focus automatically moves to first error

### Success Messaging
```
✓ Thanks — We'll be in touch shortly
We've received your request and will contact you within 24 hours.
```

### Loading States
- Submit button shows spinner during submission
- Button text changes to "Submitting..." or "Submitting Application..."
- Button disabled during submission

## Accessibility (WCAG 2.1 AA Compliant)

### Keyboard Navigation
- All form fields focusable via Tab key
- Logical tab order maintained
- Submit button accessible via keyboard
- Form can be submitted with Enter key

### Screen Reader Support
- Proper ARIA labels on all inputs
- `aria-required` for required fields
- `aria-invalid` for fields with errors
- `aria-errormessage` linking to error text
- `aria-describedby` for help text
- `role="alert"` on error messages
- `role="status"` on success messages

### Visual Accessibility
- High contrast error states (red borders + backgrounds)
- Icon + text for error messages (not color alone)
- Large touch targets (48x48px minimum)
- Clear focus indicators

## Mobile Responsiveness

### Viewport Optimization
- All forms fit within mobile viewports
- No horizontal scrolling required
- Touch-friendly input sizes
- Responsive grid layouts
- Stack fields vertically on mobile

### Input Types
- `type="email"` triggers email keyboard
- `type="tel"` triggers phone keyboard
- `type="text"` for general input
- Appropriate input modes for better UX

## Analytics Integration (GA4)

### Events Tracked

1. **Form Started**
   ```javascript
   gtag("event", "form_started", {
     form_name: "demo_request"
   });
   ```

2. **Form Submitted**
   ```javascript
   gtag("event", "form_submitted", {
     form_name: "demo_request",
     submission_method: "api",
     time_to_submit_seconds: 45
   });
   ```

3. **Form Abandoned**
   ```javascript
   gtag("event", "form_abandoned", {
     form_name: "demo_request",
     interaction_time_seconds: 30,
     fields_filled: 3,
     total_fields: 7
   });
   ```

4. **Form Validation Failed**
   ```javascript
   gtag("event", "form_validation_failed", {
     form_name: "demo_request",
     error_fields: ["email", "company"]
   });
   ```

5. **Spam Detected**
   ```javascript
   gtag("event", "spam_detected", {
     form_name: "demo_request"
   });
   ```

## Security & Compliance (POPIA)

### Honeypot Spam Protection
Each form includes a hidden honeypot field:
```html
<input 
  type="text" 
  name="_honeypot" 
  style="position: absolute; left: -9999px"
  tabindex="-1"
  autocomplete="off"
/>
```

Bots fill this field; humans cannot see it. Submissions with honeypot values are rejected.

### HTTPS Transmission
- All form submissions occur over HTTPS
- Data encrypted in transit
- No sensitive data logged in browser console (production mode)

### Data Privacy
- Clear privacy policy link on forms
- Consent checkbox for newsletters
- Explicit consent for contact
- Data minimization (only required fields mandatory)

### POPIA Compliance
- Users informed about data usage
- Explicit consent mechanisms
- Privacy policy accessible
- Data stored in South African servers (when configured)

## Backend Integration

### Current Implementation (Demo Mode)
Forms simulate submission with 1.5s delay. No real data sent.

### Production Configuration

#### Option 1: Simple Email Integration
```typescript
await handleSubmit(e, {
  endpoint: "/api/send-email",
  method: "POST",
  onSuccess: (data) => {
    console.log("Email sent:", data);
  },
  onError: (error) => {
    console.error("Failed:", error);
  }
});
```

#### Option 2: CRM Integration (e.g., HubSpot, Salesforce)
```typescript
await handleSubmit(e, {
  endpoint: "https://api.hubspot.com/contacts/v1/contact",
  method: "POST",
  onSuccess: (data) => {
    // Track in CRM
  }
});
```

#### Option 3: Custom Backend
```typescript
await handleSubmit(e, {
  endpoint: "/api/leads",
  method: "POST",
  onSuccess: (data) => {
    // Handle response
  }
});
```

### Backend Requirements

The backend should accept JSON payload:
```json
{
  "name": "John Smith",
  "email": "john@company.com",
  "company": "ABC Corp",
  "phone": "+27110000000",
  "vertical": "education",
  "message": "Interested in learning more...",
  "subscribeNewsletter": false
}
```

Response format:
```json
{
  "success": true,
  "message": "Thank you for your submission",
  "reference": "REF-12345"
}
```

## Testing Checklist

### Functional Testing
- [ ] All required fields validate correctly
- [ ] Optional fields can be left empty
- [ ] Email validation accepts valid emails only
- [ ] Phone validation accepts international formats
- [ ] Success message displays after submission
- [ ] Form resets after success (3-5 seconds)
- [ ] Honeypot catches bot submissions

### Accessibility Testing
- [ ] Can navigate form with keyboard only
- [ ] Screen reader announces all labels
- [ ] Screen reader announces errors
- [ ] Focus indicators visible
- [ ] Form can be submitted with Enter key

### Mobile Testing
- [ ] Form displays correctly on iPhone SE (375px)
- [ ] Form displays correctly on iPad (768px)
- [ ] No horizontal scrolling
- [ ] Touch targets at least 44x44px
- [ ] Keyboard appears appropriately

### Analytics Testing
- [ ] Form started event fires
- [ ] Form submitted event fires
- [ ] Form abandoned event fires on exit
- [ ] Validation failed event fires
- [ ] All event properties captured

## Performance

### Lighthouse Targets
- Performance: ≥ 85
- Accessibility: ≥ 95
- Best Practices: ≥ 90
- SEO: ≥ 90

### Optimizations
- Form fields lazy loaded
- Validation runs on field blur
- Debounced change handlers
- Minimal re-renders
- No unnecessary API calls

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari 14+
- Chrome Mobile 90+

## Future Enhancements

1. **Enhanced Spam Protection**
   - Add Google reCAPTCHA v3
   - Rate limiting on backend
   - IP-based blocking

2. **Progressive Enhancement**
   - Save form state to localStorage
   - Resume partially completed forms
   - Multi-step form wizard

3. **Advanced Validation**
   - Real-time email verification
   - Phone number formatting
   - Company domain validation

4. **Analytics**
   - Heat mapping on forms
   - Field completion times
   - Drop-off analysis

## Support

For questions or issues with form implementation:
- Technical: tech@knit.cash
- Analytics: analytics@knit.cash
- General: info@knit.cash
