export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  bio: string;
  image: string;
  availability: string;
  credentials?: string;
}

export const doctors: Doctor[] = [
  {
    id: "sarah-ahmed",
    name: "Dr. Sarah Ahmed",
    specialty: "Cardiology",
    experience: 15,
    credentials: "MD, FACC",
    bio: "Board-certified cardiologist specializing in preventive heart care and advanced cardiac imaging, dedicated to empowering patients through lifestyle and evidence-based treatment.",
    image: "/images/doctor1.jpg",
    availability: "Mon – Wed, 9:00 AM – 5:00 PM",
  },
  {
    id: "michael-johnson",
    name: "Dr. Michael Johnson",
    specialty: "Orthopedics",
    experience: 18,
    credentials: "MD, FAOA",
    bio: "Orthopedic surgeon focused on minimally invasive joint replacement and sports medicine, helping patients return to active, healthy lives.",
    image: "/images/doctor2.jpg",
    availability: "Tue – Fri, 8:00 AM – 4:00 PM",
  },
  {
    id: "emily-wilson",
    name: "Dr. Emily Wilson",
    specialty: "Pediatrics",
    experience: 12,
    credentials: "MD, FAAP",
    bio: "A pediatrician who brings warmth and expertise to every visit, focusing on child development, nutrition, and preventive care.",
    image: "/images/doctor3.jpg",
    availability: "Mon – Thu, 9:00 AM – 6:00 PM",
  },
  {
    id: "james-anderson",
    name: "Dr. James Anderson",
    specialty: "Dermatology",
    experience: 14,
    credentials: "MD, FAAD",
    bio: "Dermatologist with expertise in medical and aesthetic skin care, including advanced treatment for acne, skin cancer, and rejuvenation.",
    image: "/images/doctor4.jpg",
    availability: "Wed – Sat, 10:00 AM – 6:00 PM",
  },
  {
    id: "ayesha-khan",
    name: "Dr. Ayesha Khan",
    specialty: "General Medicine",
    experience: 10,
    credentials: "MD, MBBS",
    bio: "General physician committed to comprehensive primary care, chronic disease management, and whole-person wellness for patients of all ages.",
    image: "/images/doctor5.jpg",
    availability: "Mon – Fri, 7:00 AM – 3:00 PM",
  },
  {
    id: "daniel-smith",
    name: "Dr. Daniel Smith",
    specialty: "Dental",
    experience: 13,
    credentials: "DDS, FICO",
    bio: "Dental specialist providing family-friendly restorative and cosmetic dentistry using gentle, technology-forward techniques.",
    image: "/images/doctor6.jpg",
    availability: "Tue – Sat, 9:00 AM – 5:00 PM",
  },
];
