"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
  className?: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s()+-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.subject) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev: typeof formData) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev: FormErrors) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);

    alert("Thank you! Your message has been received. We will get back to you shortly.");
  };

  const inputClasses =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-navy placeholder-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

  const labelClasses =
    "block text-sm font-medium text-navy/80 mb-1";

  const errorClasses = "mt-1 text-sm text-red-600";

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-6", className)}
      aria-label="Contact form"
    >
      <div>
        <label htmlFor="fullName" className={labelClasses}>
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Doe"
          className={cn(inputClasses, errors.fullName && "border-red-500")}
          required
        />
        {errors.fullName && <p className={errorClasses}>{errors.fullName}</p>}
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className={cn(inputClasses, errors.email && "border-red-500")}
          required
        />
        {errors.email && <p className={errorClasses}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className={labelClasses}>
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(555) 123-4567"
          className={cn(inputClasses, errors.phone && "border-red-500")}
          required
        />
        {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="subject" className={labelClasses}>
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="How can we help?"
          className={cn(inputClasses, errors.subject && "border-red-500")}
          required
        />
        {errors.subject && <p className={errorClasses}>{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more about your inquiry..."
          rows={5}
          className={inputClasses}
          required
        />
        {errors.message && <p className={errorClasses}>{errors.message}</p>}
      </div>

      <div>
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <span
                className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"
                aria-hidden="true"
              />
              Sending...
            </div>
          ) : (
            "Send Message"
          )}
        </Button>
      </div>
    </form>
  );
}
