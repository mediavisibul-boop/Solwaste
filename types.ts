import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface StatProps {
  value: string;
  label: string;
  subLabel?: string;
  delay?: number;
}

export interface SolutionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  imageSrc?: string;
}

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  light?: boolean;
}
