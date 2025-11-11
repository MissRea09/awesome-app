import { useState, useEffect, useRef } from "react";
import { formatFormDataForCRM, validateCRMLead } from "./utils/crmFormatter";
import type { CRMLead } from "./types/crm";

export interface FormValidationRules {
  [key: string]: {
    required?: boolean;
    email?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: any) => string | undefined;
  };
}

export interface FormSubmitConfig {
  endpoint?: string;
  method?: "POST" | "GET";
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
  /** Enable CRM data formatting - will transform form data to CRM-ready structure */
  formatForCRM?: boolean;
  /** Type of form for CRM formatting */
  crmFormType?: 'demo_request' | 'general_inquiry' | 'partner_application';
}

export interface UseFormReturn<T> {
  values: T;
  errors: Record<string, string>;
  isSubmitting: boolean;
  isSubmitted: boolean;
  honeypot: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent, config?: FormSubmitConfig) => Promise<void>;
  setFieldValue: (name: string, value: any) => void;
  setFieldError: (name: string, error: string) => void;
  resetForm: () => void;
  validate: () => boolean;
  trackFormAbandonment: () => void;
}

export function useForm<T extends Record<string, any>>(
  initialValues: T,
  validationRules?: FormValidationRules,
  formName: string = "form"
): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const hasInteracted = useRef(false);
  const formStartTime = useRef<number>(Date.now());
  const abandonmentTracked = useRef(false);

  // Track form interaction
  useEffect(() => {
    const totalFields = Object.keys(values).length;
    
    const handleBeforeUnload = () => {
      if (hasInteracted.current && !isSubmitted && !abandonmentTracked.current) {
        const interactionTime = Math.floor((Date.now() - formStartTime.current) / 1000);
        const filledFields = Object.keys(touched).filter(key => touched[key]).length;
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "form_abandoned", {
            form_name: formName,
            interaction_time_seconds: interactionTime,
            fields_filled: filledFields,
            total_fields: totalFields,
          });
        }
        abandonmentTracked.current = true;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      // Track abandonment when component unmounts if form was interacted with
      if (hasInteracted.current && !isSubmitted && !abandonmentTracked.current) {
        const interactionTime = Math.floor((Date.now() - formStartTime.current) / 1000);
        const filledFields = Object.keys(touched).filter(key => touched[key]).length;
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "form_abandoned", {
            form_name: formName,
            interaction_time_seconds: interactionTime,
            fields_filled: filledFields,
            total_fields: totalFields,
          });
        }
        abandonmentTracked.current = true;
      }
    };
  }, [isSubmitted, formName]);

  const trackEvent = (eventName: string, eventData?: Record<string, unknown>) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName, eventData);
    }
  };

  const trackFormAbandonment = () => {
    if (hasInteracted.current && !isSubmitted && !abandonmentTracked.current) {
      const interactionTime = Math.floor((Date.now() - formStartTime.current) / 1000);
      trackEvent("form_abandoned", {
        form_name: formName,
        interaction_time_seconds: interactionTime,
        fields_filled: Object.keys(touched).filter(key => touched[key]).length,
        total_fields: Object.keys(initialValues).length,
      });
      abandonmentTracked.current = true;
    }
  };

  const validateField = (name: string, value: any): string | undefined => {
    const rules = validationRules?.[name];
    if (!rules) return undefined;

    // Required validation
    if (rules.required) {
      if (typeof value === "boolean") {
        if (!value) return "This field is required";
      } else if (!value || (typeof value === "string" && value.trim() === "")) {
        return "This field is required";
      }
    }

    // Skip other validations if value is empty and not required
    if (!value && !rules.required) return undefined;

    // Email validation
    if (rules.email && typeof value === "string") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
      }
    }

    // Min length validation
    if (rules.minLength && typeof value === "string") {
      if (value.length < rules.minLength) {
        return `Must be at least ${rules.minLength} characters`;
      }
    }

    // Max length validation
    if (rules.maxLength && typeof value === "string") {
      if (value.length > rules.maxLength) {
        return `Must be no more than ${rules.maxLength} characters`;
      }
    }

    // Pattern validation
    if (rules.pattern && typeof value === "string") {
      if (!rules.pattern.test(value)) {
        return "Please enter a valid value";
      }
    }

    // Custom validation
    if (rules.custom) {
      return rules.custom(value);
    }

    return undefined;
  };

  const validate = (): boolean => {
    if (!validationRules) return true;

    const newErrors: Record<string, string> = {};
    let isValid = true;

    Object.keys(validationRules).forEach((fieldName) => {
      const error = validateField(fieldName, values[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    // Mark field as touched
    if (!touched[name]) {
      setTouched(prev => ({ ...prev, [name]: true }));
    }
    
    // Mark form as interacted
    if (!hasInteracted.current) {
      hasInteracted.current = true;
      trackEvent("form_started", {
        form_name: formName,
      });
    }

    const newValue = type === "checkbox" ? checked : value;
    
    setValues(prev => ({
      ...prev,
      [name]: newValue,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    // Validate field on change if it was touched
    if (touched[name] && validationRules?.[name]) {
      const error = validateField(name, newValue);
      if (error) {
        setErrors(prev => ({ ...prev, [name]: error }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent, config?: FormSubmitConfig) => {
    e.preventDefault();

    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      console.warn("Honeypot triggered - suspected bot submission");
      trackEvent("spam_detected", {
        form_name: formName,
      });
      return;
    }

    // Validate form
    const isValid = validate();
    
    if (!isValid) {
      // Focus on first error field
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const element = document.getElementById(`field-${firstErrorField}`);
        if (element) {
          element.focus();
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
      
      trackEvent("form_validation_failed", {
        form_name: formName,
        error_fields: Object.keys(errors),
      });
      
      return;
    }

    setIsSubmitting(true);

    try {
      let submissionData: any = { ...values };
      let crmData: CRMLead | undefined;
      const submissionTime = Date.now() - formStartTime.current;

      // Format data for CRM if enabled
      if (config?.formatForCRM && config?.crmFormType) {
        try {
          crmData = formatFormDataForCRM(config.crmFormType, values);
          
          // Validate CRM data structure
          const validation = validateCRMLead(crmData);
          if (!validation.valid) {
            console.error("CRM validation failed:", validation.errors);
            // Still proceed with original data if CRM formatting fails
          } else {
            // Use CRM-formatted data for submission
            submissionData = crmData;
          }
        } catch (error) {
          console.error("CRM formatting error:", error);
          // Fallback to original form data
        }
      }

      // Track submission start
      trackEvent("form_submission_started", {
        form_name: formName,
        time_to_submit_seconds: Math.floor(submissionTime / 1000),
        crm_formatted: !!crmData,
      });

      if (config?.endpoint) {
        // Real API submission
        const response = await fetch(config.endpoint, {
          method: config.method || "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // Send both original and CRM-formatted data
            formData: values,
            crmData: crmData,
            metadata: {
              formName,
              submissionTime: new Date().toISOString(),
              timeToSubmit: Math.floor(submissionTime / 1000),
            },
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        trackEvent("form_submitted", {
          form_name: formName,
          submission_method: "api",
          time_to_submit_seconds: Math.floor(submissionTime / 1000),
          crm_formatted: !!crmData,
        });

        setIsSubmitted(true);
        config.onSuccess?.(data);
      } else {
        // Simulated submission for demo purposes
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Log submission data (in production, this would be sent to backend)
        console.log("Form submitted (Original):", values);
        if (crmData) {
          console.log("Form submitted (CRM-formatted):", crmData);
        }
        
        trackEvent("form_submitted", {
          form_name: formName,
          submission_method: "simulated",
          time_to_submit_seconds: Math.floor(submissionTime / 1000),
          crm_formatted: !!crmData,
        });

        setIsSubmitted(true);
        config?.onSuccess?.(submissionData);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      
      trackEvent("form_submission_failed", {
        form_name: formName,
        error: error instanceof Error ? error.message : "Unknown error",
      });

      setErrors({
        _form: "An error occurred while submitting the form. Please try again.",
      });
      
      config?.onError?.(error instanceof Error ? error : new Error("Unknown error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const setFieldValue = (name: string, value: any) => {
    setValues(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const setFieldError = (name: string, error: string) => {
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }));
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
    hasInteracted.current = false;
    abandonmentTracked.current = false;
    formStartTime.current = Date.now();
  };

  return {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    honeypot,
    handleChange,
    handleSubmit,
    setFieldValue,
    setFieldError,
    resetForm,
    validate,
    trackFormAbandonment,
  };
}
