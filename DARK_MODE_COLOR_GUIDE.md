# Dark Mode Color Guide for Production

## Text Color Standards

### Primary Text (Headings, Important Content)
- Light Mode: `text-brand-charcoal` (#44444E) or `text-brand-brown` or `text-brand-dark` (#1A1A1A)
- Dark Mode: `dark:text-white` or `dark:text-gray-100`
- Usage: `className="text-brand-charcoal dark:text-white"`

### Secondary Text (Descriptions, Body Text)
- Light Mode: `text-gray-700` or `text-gray-800`
- Dark Mode: `dark:text-gray-300` 
- Usage: `className="text-gray-700 dark:text-gray-300"`

### Muted Text (Labels, Meta Info)
- Light Mode: `text-gray-600`  
- Dark Mode: `dark:text-gray-400`
- Usage: `className="text-gray-600 dark:text-gray-400"`

### Very Muted Text (Subtle Info)
- Light Mode: `text-gray-500`
- Dark Mode: `dark:text-gray-500`
- Usage: `className="text-gray-500 dark:text-gray-500"`

### Accent/Brand Colors (Always Visible)
- `text-brand-primary` (#BED754) - Works in both modes
- `text-brand-gold` - Works in both modes  
- `text-brand-olive` - Works in both modes

### Interactive Text (Links, Hover States)
- Light Mode: `text-gray-700 hover:text-brand-primary`
- Dark Mode: `dark:text-gray-300 dark:hover:text-brand-primary`

## Background Color Standards

### Card/Container Backgrounds
- Light Mode: `bg-white` or `bg-gray-50` or `bg-brand-cream`
- Dark Mode: `dark:bg-gray-800` or `dark:bg-gray-900`
- Usage: `className="bg-white dark:bg-gray-800"`

### Section Backgrounds
- Light Mode: `bg-brand-light` or `bg-brand-cream` or `bg-gray-50`
- Dark Mode: `dark:bg-gray-900`
- Usage: `className="bg-brand-cream dark:bg-gray-900"`

### Border Colors
- Light Mode: `border-gray-200` or `border-gray-300`
- Dark Mode: `dark:border-gray-700` or `dark:border-gray-600`
- Usage: `className="border-gray-200 dark:border-gray-700"`

## Critical Rules
1. NEVER use `text-brand-dark` or `text-brand-brown` without `dark:text-white`
2. NEVER use `text-gray-800` or `text-gray-900` without `dark:text-gray-300` or lighter
3. ALWAYS test hover states in both modes
4. ALWAYS ensure sufficient contrast (WCAG AA minimum: 4.5:1)
