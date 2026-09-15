"use client";

import {
  Stethoscope,
  HeartPulse,
  Baby,
  Palette,
  Bone,
  Smile,
  HeartHandshake,
  Microscope,
} from "lucide-react";

export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  stethoscope: Stethoscope,
  "heart-pulse": HeartPulse,
  baby: Baby,
  palette: Palette,
  bone: Bone,
  smile: Smile,
  "heart-handshake": HeartHandshake,
  microscope: Microscope,
};

export type ServiceIconName = keyof typeof iconMap;

export interface ServiceIconProps {
  name: ServiceIconName | string;
  className?: string;
}

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = iconMap[name as string];
  if (!Icon) return null;
  return <Icon className={className} />;
}
