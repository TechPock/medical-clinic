"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { doctors } from "@/data/doctors";

interface AppointmentFormProps {
  className?: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  department?: string;
  doctor?: string;
  message?: string;
}

const departments = [
  "General Medicine",
  "Cardiology",
  "Pediatrics",
  "Orthopedics",
  "Dermatology",
  "Dentistry",
];

export function AppointmentForm({ className }: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    department: "",
    doctor: "",
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

    if (!formData.date) {
      newErrors.date = "Preferred date is required";
    }

    if (!formData.time) {
      newErrors.time = "Preferred time is required";
    }

    if (!formData.department) {
      newErrors.department = "Please select a department";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);

    alert(
      "Thank you! Your appointment request has been received. We will contact you shortly to confirm.",
    );
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
      aria-label="Book an appointment form"
    >
      <div className="grid gap-6 sm:grid-cols-2">
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
          <label htmlFor="date" className={labelClasses}>
            Preferred Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className={cn(inputClasses, errors.date && "border-red-500")}
            required
          />
          {errors.date && <p className={errorClasses}>{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="time" className={labelClasses}>
            Preferred Time *
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={cn(inputClasses, errors.time && "border-red-500")}
            required
          />
          {errors.time && <p className={errorClasses}>{errors.time}</p>}
        </div>

        <div>
          <label htmlFor="department" className={labelClasses}>
            Department *
          </label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className={cn(
              inputClasses,
              "cursor-pointer",
              errors.department && "border-red-500",
            )}
            required
          >
            <option value="">Select a department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          {errors.department && (
            <p className={errorClasses}>{errors.department}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="doctor" className={labelClasses}>
          Preferred Doctor (optional)
        </label>
        <select
          id="doctor"
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          className={cn(
            inputClasses,
            "cursor-pointer",
            errors.doctor && "border-red-500",
          )}
        >
          <option value="">Any available provider</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.name}>
              {doctor.name} — {doctor.specialty}
            </option>
          ))}
        </select>
        {errors.doctor && <p className={errorClasses}>{errors.doctor}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Additional Notes
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Is there anything specific you'd like us to know?"
          rows={4}
          className={inputClasses}
        />
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
              Scheduling...
            </div>
          ) : (
            "Book Appointment"
          )}
        </Button>
      </div>
    </form>
  );
}
