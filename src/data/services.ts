import type { ServiceIconName } from "@/lib/icons";

export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: ServiceIconName;
}

export const services: Service[] = [
  {
    id: "general-medicine",
    title: "General Medicine",
    description:
      "Comprehensive primary care for every stage of life, from routine check-ups to chronic condition management.",
    benefits: [
      "Routine physical examinations",
      "Chronic disease management",
      "Preventive health screenings",
      "Vaccinations and immunizations",
    ],
    icon: "stethoscope",
  },
  {
    id: "cardiology",
    title: "Cardiology",
    description:
      "Advanced cardiac care including diagnosis, treatment, and prevention of heart and vascular conditions.",
    benefits: [
      "ECG and stress testing",
      "Echocardiography",
      "Holter and event monitoring",
      "Cardiac rehabilitation",
    ],
    icon: "heart-pulse",
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    description:
      "Compassionate, specialized care for infants, children, and adolescents in a warm, supportive environment.",
    benefits: [
      "Well-child visits and growth tracking",
      "Vaccination schedules",
      "Developmental assessments",
      "Pediatric specialty referrals",
    ],
    icon: "baby",
  },
  {
    id: "dermatology",
    title: "Dermatology",
    description:
      "Expert skin care and dermatologic treatment for conditions ranging from acne to skin cancer screening.",
    benefits: [
      "Skin cancer screening and biopsy",
      "Acne and eczema treatment",
      "Cosmetic dermatology",
      "Advanced laser therapies",
    ],
    icon: "palette",
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    description:
      "Comprehensive musculoskeletal care and advanced surgical solutions for bones, joints, and soft tissue.",
    benefits: [
      "Joint and spine care",
      "Sports injury treatment",
      "Arthritis management",
      "Minimally invasive surgery",
    ],
    icon: "bone",
  },
  {
    id: "dental-care",
    title: "Dental Care",
    description:
      "Preventive and restorative dentistry for the whole family in a calming, modern setting.",
    benefits: [
      "Cleanings and comprehensive exams",
      "Cosmetic dentistry",
      "Dental implants and bridges",
      "Children's dentistry",
    ],
    icon: "smile",
  },
  {
    id: "womens-health",
    title: "Women's Health",
    description:
      "Specialized gynecologic care and preventive women's health services across every life stage.",
    benefits: [
      "Routine gynecologic exams",
      "Maternity prenatal consultation",
      "Hormone replacement therapy",
      "Osteoporosis and bone health screening",
    ],
    icon: "heart-handshake",
  },
  {
    id: "laboratory",
    title: "Laboratory & Diagnostics",
    description:
      "Fast, accurate diagnostic testing and imaging powered by the latest technology and expert interpretation.",
    benefits: [
      "Blood work and pathology",
      "X-ray and advanced imaging",
      "Digital mammography",
      "Rapid on-site results",
    ],
    icon: "microscope",
  },
];
