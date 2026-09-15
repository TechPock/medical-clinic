import type { Metadata } from "next";
import { AppointmentHero } from "@/components/AppointmentHero";

export const metadata: Metadata = {
  title: "Book an Appointment | Medinova Medical Clinic",
  description:
    "Schedule your appointment at Medinova Medical Clinic. Choose your preferred date, time, and department, and our team will confirm your visit.",
  keywords: [
    "appointment",
    "booking",
    "schedule",
    "Medinova",
    "medical clinic",
  ],
  openGraph: {
    title: "Book an Appointment | Medinova Medical Clinic",
    description:
      "Quickly schedule your appointment online with Medinova's experienced medical team.",
  },
};

export default function AppointmentPage() {
  return <AppointmentHero />;
}
