import React from 'react';
import * as LucideIcons from 'lucide-react';

type AnyIcon = React.ComponentType<any> | undefined;

function getIcon(name: string): AnyIcon {
  // Use Lucide React icons
  return (LucideIcons as any)[name];
}

function make(name: string) {
  const C = getIcon(name);
  if (C) return (props: any) => <C {...props} />;
  return (props: any) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

// Export commonly used icons (resolve to Feather when possible, otherwise Lucide)
export const ChevronLeft = make('ChevronLeft');
export const ChevronRight = make('ChevronRight');
export const Zap = make('Zap');
export const ShieldCheck = make('ShieldCheck');
export const Recycle = make('Recycle');
export const Target = make('Target');
export const Globe = make('Globe');
export const Award = make('Award');
export const Menu = make('Menu');
export const X = make('X');
export const MapPin = make('MapPin');
export const Phone = make('Phone');
export const Mail = make('Mail');
export const Linkedin = make('Linkedin');
export const Instagram = make('Instagram');
export const Youtube = make('Youtube');
export const Check = make('Check');
export const Download = make('Download');
export const Flame = make('Flame');
export const Layers = make('Layers');
export const Briefcase = make('Briefcase');
export const Heart = make('Heart');
export const Users = make('Users');
export const ArrowRight = make('ArrowRight');
export const Sliders = make('Sliders');
export const Battery = make('Battery');
export const CheckCircle = make('CheckCircle');
export const Box = make('Box');
export const IndianRupee = make('IndianRupee');
export const BookOpen = make('BookOpen');
export const TrendingUp = make('TrendingUp');
export const UserPlus = make('UserPlus');
export const Rocket = make('Rocket');
export const Flag = make('Flag');
export const AlertTriangle = make('AlertTriangle');
export const CloudFog = make('CloudFog');
export const Droplets = make('Droplets');
export const Skull = make('Skull');
export const Settings = make('Settings');
export const ChevronDown = make('ChevronDown');
export const Clock = make('Clock');
export const Eye = make('Eye');
export const Leaf = make('Leaf');
export const Scale = make('Scale');
export const Building2 = make('Building2');
export const Building = make('Building');
export const Hospital = make('Hospital');
export const Store = make('Store');
export const Truck = make('Truck');
export const Lightbulb = make('Lightbulb');
export const FileText = make('FileText');
export const RefreshCw = make('RefreshCw');
export const Search = make('Search');
export const Factory = make('Factory');
export const BarChart = make('BarChart');
export const Filter = make('Filter');
export const CheckCircle2 = make('CheckCircle2');
export const AlertCircle = make('AlertCircle');
export const Send = make('Send');
export const ZoomIn = make('ZoomIn');
export const Apple = make('Apple');
export const Bottle = make('Bottle');
export const Pill = make('Pill');
export const Sun = make('Sun');
export const Moon = make('Moon');
export const UtensilsCrossed = make('UtensilsCrossed');
export const Laptop = make('Laptop');
export const HeartPulse = make('HeartPulse');
export const Landmark = make('Landmark');

export default {} as any;
