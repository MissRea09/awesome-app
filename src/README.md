# Knit Marketing Website

A comprehensive marketing homepage and platform showcase for Knit's embedded finance solutions serving Education and Life Services verticals.

## Pages

### Main Pages
- **Home** (`/`) - Marketing homepage with hero, metrics, testimonials, and CTAs
- **Platform** (`#platform`) - Overview of the Knit platform and core modules
- **Knit Edu** (`#edu`) - Dedicated page for education vertical solutions
- **Knit Life** (`#life`) - Dedicated page for life services vertical solutions

### Platform Sub-Pages
- **Credit Risk Engine** (`#platform/risk`) - AI-powered underwriting and risk management
- **Payments & Collections** (`#platform/payments`) - Automated payment processing and collections
- **MIS & Analytics** (`#platform/analytics`) - Real-time dashboards and portfolio intelligence

### Resources Section
- **Case Studies** (`#resources/case-studies`) - Customer success stories with measurable results
- **Partner With Us** (`#resources/partner`) - Partnership models (API, white-label, reseller)
- **FAQs** (`#resources/faq`) - Comprehensive FAQ organized by category
- **Compliance & POPIA** (`#resources/compliance`) - Security, compliance frameworks, and data protection

## Features

### 🆕 CRM-Ready Forms
- All form submissions structured for seamless CRM integration
- Compatible with Salesforce, HubSpot, Zoho, Pipedrive, Microsoft Dynamics
- Automatic data enrichment (UTM, device, session tracking)
- Lead scoring (0-100)
- POPIA/GDPR consent management
- See `/CRM_INTEGRATION_GUIDE.md` for details

### Navigation
- Fixed header with dropdown Resources menu
- Mobile-responsive hamburger menu with expandable Resources section
- Active page/section highlighting
- Smooth scroll to sections on homepage

### Analytics & Tracking
- GA4 event tracking on all CTAs
- Dropdown interaction tracking
- FAQ expansion tracking
- Document download tracking
- Resource link click tracking

### Accessibility
- ARIA labels on all interactive elements
- Keyboard navigation support
- Skip to content link
- Proper heading hierarchy (H1-H3)
- Screen reader friendly

### Performance
- Optimized for ≥85 Lighthouse score
- Lazy loading where applicable
- Efficient React component structure
- Modular, reusable components

### SEO
- Unique meta titles and descriptions for each page
- Canonical URLs
- Structured heading hierarchy
- Semantic HTML

## Component Structure

```
components/
├── Header.tsx                    # Main navigation with Resources dropdown
├── Footer.tsx                    # Site footer
├── Hero.tsx                      # Homepage hero section
├── Metrics.tsx                   # Key metrics display
├── HowItWorks.tsx               # Process explanation
├── Testimonials.tsx             # Customer testimonials
├── FAQ.tsx                      # Homepage FAQ section
├── Verticals.tsx                # Vertical overview cards
├── Contact.tsx                  # Contact/demo form
├── CallToAction.tsx             # CTA sections
├── EduPage.tsx                  # Knit Edu page
├── LifePage.tsx                 # Knit Life page
├── PlatformPage.tsx             # Platform overview
├── PlatformRiskPage.tsx         # Risk engine page
├── PlatformPaymentsPage.tsx     # Payments page
├── PlatformAnalyticsPage.tsx    # Analytics page
├── resources/
│   ├── CaseStudiesPage.tsx      # Case studies with results
│   ├── PartnerPage.tsx          # Partnership information
│   ├── FAQPage.tsx              # Comprehensive FAQs
│   └── CompliancePage.tsx       # Compliance & security
├── platform/
│   ├── PlatformHero.tsx         # Platform hero component
│   ├── PlatformModules.tsx      # Platform modules grid
│   └── PlatformCompliance.tsx   # Platform compliance section
└── custom/
    ├── Button.tsx               # Custom button component
    └── Accordion.tsx            # Custom accordion component
```

## Design System

### Typography
- Primary font: Aptos
- Responsive font sizing via globals.css
- No manual font size/weight classes unless specified

### Currency
- All amounts displayed in South African Rands (R)

### Colors
- Primary: Gray-900 (#111827)
- Accent: Custom gradients
- Background: White with gray-50 sections

### Animations
- Slide-down hero badge animations
- Staggered entrance animations
- Gradient card hover effects
- Smooth dropdown transitions

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (iOS Safari, Chrome Mobile)

## Development

The site uses:
- React with TypeScript
- Tailwind CSS v4.0
- Hash-based routing
- No build step required (runs in browser)

## Analytics Events

### Navigation
- `resources_dropdown_open` - Resources dropdown opened
- `resources_dropdown_toggle` - Resources dropdown toggled
- `resources_link_click` - Resource link clicked
- `mobile_resources_toggle` - Mobile resources expanded
- `mobile_resources_link_click` - Mobile resource link clicked

### CTAs
- `cta_click` - Any CTA button clicked
- `partner_signup_click` - Partner signup initiated

### Content Interactions
- `faq_expanded` - FAQ item expanded
- `faq_category_click` - FAQ category filter clicked
- `document_download` - Compliance document downloaded

## Compliance

- POPIA compliant data handling
- NCR registered credit provider
- PCI DSS Level 1 certified
- ISO 27001 certified infrastructure
- SOC 2 Type II audited

## CRM Integration Documentation

Complete documentation for implementing CRM-ready backend:

| Document | Audience | Time to Read |
|----------|----------|--------------|
| **[QUICK_START_CRM.md](./QUICK_START_CRM.md)** | Developers | 5 minutes |
| **[CRM_FEATURES_SUMMARY.md](./CRM_FEATURES_SUMMARY.md)** | Stakeholders | 10 minutes |
| **[CRM_INTEGRATION_GUIDE.md](./CRM_INTEGRATION_GUIDE.md)** | Backend Developers | 30 minutes |
| **[CRM_DATA_FLOW.md](./CRM_DATA_FLOW.md)** | Architects | 20 minutes |
| **[API_SPECIFICATION.md](./API_SPECIFICATION.md)** | Backend Developers | 25 minutes |
| **[BACKEND_CHECKLIST.md](./BACKEND_CHECKLIST.md)** | Project Managers | 15 minutes |
| **[FORMS_IMPLEMENTATION.md](./FORMS_IMPLEMENTATION.md)** | All Teams | 20 minutes |
| **[FORMS_SUMMARY.md](./FORMS_SUMMARY.md)** | Stakeholders | 15 minutes |

**Test Data:** [/tests/sample-crm-payloads.json](./tests/sample-crm-payloads.json)

## Contact

For questions about the Knit platform, visit any of the resource pages or use the contact form to book a demo.
