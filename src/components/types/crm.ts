/**
 * CRM-Ready Data Structures
 * 
 * These types ensure form submissions are structured for easy CRM integration
 * Compatible with: Salesforce, HubSpot, Zoho CRM, Pipedrive, Microsoft Dynamics
 */

/**
 * Standard lead source tracking
 */
export type LeadSource = 
  | 'Website - Demo Request'
  | 'Website - Get In Touch'
  | 'Website - Partner Application'
  | 'Website - Newsletter'
  | 'Referral'
  | 'Direct'
  | 'Organic Search'
  | 'Paid Search'
  | 'Social Media'
  | 'Email Campaign';

/**
 * Lead status for CRM pipelines
 */
export type LeadStatus = 
  | 'New'
  | 'Contacted'
  | 'Qualified'
  | 'Unqualified'
  | 'Nurturing';

/**
 * Industry verticals (standardized for CRM segmentation)
 */
export type Industry = 
  | 'Education - Higher Education'
  | 'Education - K-12'
  | 'Education - Vocational'
  | 'Education - Online Learning'
  | 'Life Services - Insurance'
  | 'Life Services - Healthcare'
  | 'Life Services - Funeral Services'
  | 'Life Services - Legal Services'
  | 'Other';

/**
 * Company size for lead scoring and segmentation
 */
export type CompanySize = 
  | '1-10 employees'
  | '11-50 employees'
  | '51-200 employees'
  | '201-500 employees'
  | '501-1000 employees'
  | '1001+ employees';

/**
 * Partnership types for partner pipeline
 */
export type PartnershipType = 
  | 'API Integration Partner'
  | 'White-Label Partner'
  | 'Referral Partner'
  | 'Reseller Partner'
  | 'Technology Partner'
  | 'Other';

/**
 * UTM parameters for marketing attribution
 */
export interface UTMParameters {
  utm_source?: string;      // e.g., 'google', 'facebook', 'newsletter'
  utm_medium?: string;      // e.g., 'cpc', 'email', 'social'
  utm_campaign?: string;    // e.g., 'summer_2024', 'product_launch'
  utm_term?: string;        // e.g., 'embedded+finance'
  utm_content?: string;     // e.g., 'textlink', 'banner'
}

/**
 * Device and browser information
 */
export interface DeviceInfo {
  userAgent: string;
  platform: string;         // e.g., 'MacIntel', 'Win32', 'iPhone'
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  browserName?: string;
  browserVersion?: string;
}

/**
 * Session tracking information
 */
export interface SessionInfo {
  sessionId: string;        // Unique session identifier
  pageUrl: string;          // Full URL where form was submitted
  pagePath: string;         // Path only (e.g., '/edu')
  referrer: string;         // Previous page URL
  landingPage: string;      // First page visited in session
  timeOnSite: number;       // Seconds spent on site before submission
  pagesVisited: number;     // Number of pages viewed in session
}

/**
 * Consent and compliance tracking (POPIA/GDPR)
 */
export interface ConsentInfo {
  marketingConsent: boolean;          // Opted in to marketing communications
  termsAccepted: boolean;             // Accepted terms and conditions
  privacyPolicyAccepted: boolean;     // Accepted privacy policy
  dataProcessingConsent: boolean;     // Consent to data processing
  consentTimestamp: string;           // ISO 8601 timestamp
  consentIpAddress?: string;          // IP address at time of consent
  consentMethod: 'checkbox' | 'implied' | 'explicit';
}

/**
 * Base CRM Lead structure
 * Maps to standard CRM Lead/Contact objects
 */
export interface CRMLeadBase {
  // Primary identification
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  
  // Company information
  company?: string;
  companySize?: CompanySize;
  industry?: Industry;
  website?: string;
  
  // Lead classification
  leadSource: LeadSource;
  leadStatus: LeadStatus;
  leadScore?: number;           // Calculated lead score (0-100)
  
  // Timestamps (ISO 8601 format)
  createdAt: string;
  updatedAt: string;
  
  // Communication preferences
  consent: ConsentInfo;
  
  // Attribution
  utm: UTMParameters;
  
  // Technical metadata
  device: DeviceInfo;
  session: SessionInfo;
  
  // Custom notes/description
  description?: string;
  notes?: string;
}

/**
 * Demo Request Lead (from Contact form)
 */
export interface DemoRequestLead extends CRMLeadBase {
  formType: 'demo_request';
  productInterest: 'knit Edu' | 'knit Life' | 'Both Solutions';
  requestedDemoDate?: string;   // ISO 8601 date
  timezone?: string;
}

/**
 * General Inquiry Lead (from Get In Touch form)
 */
export interface GeneralInquiryLead extends CRMLeadBase {
  formType: 'general_inquiry';
  inquiryType: 'edu' | 'life' | 'both';
  message: string;
}

/**
 * Partner Application Lead
 */
export interface PartnerApplicationLead extends CRMLeadBase {
  formType: 'partner_application';
  partnershipType: PartnershipType;
  jobTitle: string;
  partnershipDescription: string;
  partnerStatus: 'Applied' | 'Under Review' | 'Approved' | 'Declined';
}

/**
 * Union type of all lead types
 */
export type CRMLead = DemoRequestLead | GeneralInquiryLead | PartnerApplicationLead;

/**
 * API Response structure for form submission
 */
export interface FormSubmissionResponse {
  success: boolean;
  leadId?: string;              // CRM record ID
  message: string;
  errors?: Record<string, string[]>;
  metadata?: {
    processingTime: number;     // milliseconds
    crmSynced: boolean;
    emailSent: boolean;
  };
}

/**
 * CRM Integration Configuration
 */
export interface CRMConfig {
  provider: 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'dynamics' | 'custom';
  apiEndpoint: string;
  apiKey?: string;
  webhookUrl?: string;
  syncEnabled: boolean;
  leadAssignment?: {
    assignToUser?: string;
    assignToTeam?: string;
    autoAssign: boolean;
    roundRobinEnabled: boolean;
  };
  notifications?: {
    emailOnNewLead: boolean;
    slackOnNewLead: boolean;
    smsOnHighValueLead: boolean;
  };
}
