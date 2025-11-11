/**
 * CRM Data Formatter
 * 
 * Transforms raw form submissions into CRM-ready structured data
 * Handles enrichment with UTM parameters, device info, session tracking, etc.
 */

import type {
  CRMLead,
  DemoRequestLead,
  GeneralInquiryLead,
  PartnerApplicationLead,
  UTMParameters,
  DeviceInfo,
  SessionInfo,
  ConsentInfo,
  LeadSource,
} from '../types/crm';

/**
 * Extract UTM parameters from current URL
 */
export function getUTMParameters(): UTMParameters {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  
  return {
    utm_source: urlParams.get('utm_source') || undefined,
    utm_medium: urlParams.get('utm_medium') || undefined,
    utm_campaign: urlParams.get('utm_campaign') || undefined,
    utm_term: urlParams.get('utm_term') || undefined,
    utm_content: urlParams.get('utm_content') || undefined,
  };
}

/**
 * Get device and browser information
 */
export function getDeviceInfo(): DeviceInfo {
  if (typeof window === 'undefined') {
    return {
      userAgent: '',
      platform: '',
      isMobile: false,
      isTablet: false,
      isDesktop: true,
    };
  }
  
  const ua = navigator.userAgent;
  const platform = navigator.platform;
  
  const isMobile = /Mobile|Android|iPhone/i.test(ua);
  const isTablet = /Tablet|iPad/i.test(ua);
  const isDesktop = !isMobile && !isTablet;
  
  // Basic browser detection
  let browserName: string | undefined;
  let browserVersion: string | undefined;
  
  if (ua.includes('Firefox/')) {
    browserName = 'Firefox';
    browserVersion = ua.split('Firefox/')[1]?.split(' ')[0];
  } else if (ua.includes('Chrome/')) {
    browserName = 'Chrome';
    browserVersion = ua.split('Chrome/')[1]?.split(' ')[0];
  } else if (ua.includes('Safari/')) {
    browserName = 'Safari';
    browserVersion = ua.split('Version/')[1]?.split(' ')[0];
  } else if (ua.includes('Edge/')) {
    browserName = 'Edge';
    browserVersion = ua.split('Edge/')[1]?.split(' ')[0];
  }
  
  return {
    userAgent: ua,
    platform,
    isMobile,
    isTablet,
    isDesktop,
    browserName,
    browserVersion,
  };
}

/**
 * Get session information
 * In production, this would integrate with your analytics system
 */
export function getSessionInfo(): SessionInfo {
  if (typeof window === 'undefined') {
    return {
      sessionId: 'server-render',
      pageUrl: '',
      pagePath: '',
      referrer: '',
      landingPage: '',
      timeOnSite: 0,
      pagesVisited: 1,
    };
  }
  
  // Get or create session ID (in production, use your analytics session ID)
  let sessionId = sessionStorage.getItem('knit_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('knit_session_id', sessionId);
  }
  
  // Get landing page (first page in session)
  let landingPage = sessionStorage.getItem('knit_landing_page');
  if (!landingPage) {
    landingPage = window.location.href;
    sessionStorage.setItem('knit_landing_page', landingPage);
  }
  
  // Get session start time
  let sessionStartTime = sessionStorage.getItem('knit_session_start');
  if (!sessionStartTime) {
    sessionStartTime = Date.now().toString();
    sessionStorage.setItem('knit_session_start', sessionStartTime);
  }
  
  const timeOnSite = Math.floor((Date.now() - parseInt(sessionStartTime)) / 1000);
  
  // Track pages visited (simplified - in production use analytics)
  const pagesVisitedCount = parseInt(sessionStorage.getItem('knit_pages_visited') || '1');
  
  return {
    sessionId,
    pageUrl: window.location.href,
    pagePath: window.location.pathname,
    referrer: document.referrer || 'direct',
    landingPage,
    timeOnSite,
    pagesVisited: pagesVisitedCount,
  };
}

/**
 * Increment page view counter
 */
export function trackPageView(): void {
  if (typeof window === 'undefined') return;
  
  const currentCount = parseInt(sessionStorage.getItem('knit_pages_visited') || '0');
  sessionStorage.setItem('knit_pages_visited', (currentCount + 1).toString());
}

/**
 * Build consent information
 */
export function buildConsentInfo(
  marketingConsent: boolean,
  termsAccepted: boolean = true
): ConsentInfo {
  return {
    marketingConsent,
    termsAccepted,
    privacyPolicyAccepted: termsAccepted,
    dataProcessingConsent: termsAccepted,
    consentTimestamp: new Date().toISOString(),
    consentMethod: termsAccepted ? 'explicit' : 'implied',
  };
}

/**
 * Calculate basic lead score based on form data
 * In production, this would be more sophisticated
 */
function calculateLeadScore(data: Partial<CRMLead>): number {
  let score = 50; // Base score
  
  // Company size scoring
  if (data.companySize) {
    const sizeScores: Record<string, number> = {
      '1-10 employees': 5,
      '11-50 employees': 10,
      '51-200 employees': 15,
      '201-500 employees': 20,
      '501-1000 employees': 25,
      '1001+ employees': 30,
    };
    score += sizeScores[data.companySize] || 0;
  }
  
  // Has website
  if (data.website) {
    score += 10;
  }
  
  // Has phone number
  if (data.phone) {
    score += 5;
  }
  
  // UTM campaign (came from paid marketing)
  if (data.utm?.utm_campaign) {
    score += 10;
  }
  
  // Time on site (more engaged)
  if (data.session && data.session.timeOnSite > 120) { // 2+ minutes
    score += 10;
  }
  
  // Multiple pages visited (more engaged)
  if (data.session && data.session.pagesVisited >= 3) {
    score += 5;
  }
  
  return Math.min(score, 100); // Cap at 100
}

/**
 * Format Demo Request form data for CRM
 */
export function formatDemoRequest(formData: {
  fullName: string;
  email: string;
  organization: string;
  phone?: string;
  vertical?: string;
  message?: string;
  subscribeNewsletter?: boolean;
}): DemoRequestLead {
  const [firstName, ...lastNameParts] = formData.fullName.trim().split(' ');
  const lastName = lastNameParts.join(' ') || firstName; // Fallback if only one name
  
  const now = new Date().toISOString();
  const utm = getUTMParameters();
  const device = getDeviceInfo();
  const session = getSessionInfo();
  const consent = buildConsentInfo(formData.subscribeNewsletter || false);
  
  // Map vertical to industry
  const industryMap: Record<string, any> = {
    'education': 'Education - Higher Education',
    'insurance': 'Life Services - Insurance',
    'healthcare': 'Life Services - Healthcare',
    'funeral': 'Life Services - Funeral Services',
    'legal': 'Life Services - Legal Services',
  };
  
  const baseLead = {
    firstName,
    lastName,
    email: formData.email,
    phone: formData.phone,
    company: formData.organization,
    industry: formData.vertical ? industryMap[formData.vertical] : undefined,
    leadSource: 'Website - Demo Request' as LeadSource,
    leadStatus: 'New' as const,
    createdAt: now,
    updatedAt: now,
    consent,
    utm,
    device,
    session,
    description: formData.message,
  };
  
  const leadScore = calculateLeadScore(baseLead);
  
  // Map vertical to product interest
  let productInterest: 'knit Edu' | 'knit Life' | 'Both Solutions' = 'Both Solutions';
  if (formData.vertical === 'education') {
    productInterest = 'knit Edu';
  } else if (['insurance', 'healthcare', 'funeral', 'legal'].includes(formData.vertical || '')) {
    productInterest = 'knit Life';
  }
  
  return {
    ...baseLead,
    formType: 'demo_request',
    productInterest,
    leadScore,
  };
}

/**
 * Format Get In Touch form data for CRM
 */
export function formatGeneralInquiry(formData: {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  subscribeNewsletter?: boolean;
}): GeneralInquiryLead {
  const now = new Date().toISOString();
  const utm = getUTMParameters();
  const device = getDeviceInfo();
  const session = getSessionInfo();
  const consent = buildConsentInfo(formData.subscribeNewsletter || false);
  
  const baseLead = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    company: formData.company,
    leadSource: 'Website - Get In Touch' as LeadSource,
    leadStatus: 'New' as const,
    createdAt: now,
    updatedAt: now,
    consent,
    utm,
    device,
    session,
    description: formData.message,
  };
  
  const leadScore = calculateLeadScore(baseLead);
  
  return {
    ...baseLead,
    formType: 'general_inquiry',
    inquiryType: formData.interest as 'edu' | 'life' | 'both',
    message: formData.message,
    leadScore,
  };
}

/**
 * Format Partner Application form data for CRM
 */
export function formatPartnerApplication(formData: {
  fullName: string;
  email: string;
  company: string;
  phone?: string;
  position: string;
  companySize: string;
  website?: string;
  partnershipType: string;
  partnershipInterest: string;
  agreedToTerms: boolean;
}): PartnerApplicationLead {
  const [firstName, ...lastNameParts] = formData.fullName.trim().split(' ');
  const lastName = lastNameParts.join(' ') || firstName;
  
  const now = new Date().toISOString();
  const utm = getUTMParameters();
  const device = getDeviceInfo();
  const session = getSessionInfo();
  const consent = buildConsentInfo(true, formData.agreedToTerms); // Partners always consent
  
  const baseLead = {
    firstName,
    lastName,
    email: formData.email,
    phone: formData.phone,
    company: formData.company,
    companySize: formData.companySize as any,
    website: formData.website,
    leadSource: 'Website - Partner Application' as LeadSource,
    leadStatus: 'New' as const,
    createdAt: now,
    updatedAt: now,
    consent,
    utm,
    device,
    session,
    notes: formData.partnershipInterest,
  };
  
  const leadScore = calculateLeadScore(baseLead) + 10; // Partners get bonus points
  
  return {
    ...baseLead,
    formType: 'partner_application',
    partnershipType: formData.partnershipType as any,
    jobTitle: formData.position,
    partnershipDescription: formData.partnershipInterest,
    partnerStatus: 'Applied',
    leadScore,
  };
}

/**
 * Generic function to format any form type
 */
export function formatFormDataForCRM(
  formType: 'demo_request' | 'general_inquiry' | 'partner_application',
  formData: any
): CRMLead {
  switch (formType) {
    case 'demo_request':
      return formatDemoRequest(formData);
    case 'general_inquiry':
      return formatGeneralInquiry(formData);
    case 'partner_application':
      return formatPartnerApplication(formData);
    default:
      throw new Error(`Unknown form type: ${formType}`);
  }
}

/**
 * Validate CRM lead data before submission
 */
export function validateCRMLead(lead: CRMLead): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Required fields
  if (!lead.email || !lead.email.includes('@')) {
    errors.push('Valid email is required');
  }
  
  if (!lead.firstName) {
    errors.push('First name is required');
  }
  
  if (!lead.lastName) {
    errors.push('Last name is required');
  }
  
  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (lead.email && !emailRegex.test(lead.email)) {
    errors.push('Invalid email format');
  }
  
  // Phone format validation (if provided)
  if (lead.phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(lead.phone)) {
      errors.push('Invalid phone format');
    }
  }
  
  // URL validation (if provided)
  if (lead.website) {
    try {
      new URL(lead.website);
    } catch {
      errors.push('Invalid website URL');
    }
  }
  
  return {
    valid: errors.length === 0,
    errors,
  };
}
