# 🚀 QUICK REFERENCE GUIDE
## Responsive Design System - Solwaste Website

**Quick access guide for developers working on the Solwaste website**

---

## 📏 RESPONSIVE BREAKPOINTS

```typescript
xs:   480px   // Small phones
sm:   640px   // Large phones
md:   768px   // Tablets
lg:   1024px  // Laptops
xl:   1280px  // Desktop
2xl:  1536px  // Large desktop
```

---

## 🎨 TYPOGRAPHY CLASSES

### Headings (use in HTML/JSX)
```jsx
<h1 className="heading-hero">        // 4xl → 5xl → 6xl → 7xl → 8xl
<h1 className="heading-xl">          // 3xl → 4xl → 5xl → 6xl
<h2 className="heading-lg">          // 2xl → 3xl → 4xl → 5xl
<h3 className="heading-md">          // xl → 2xl → 3xl → 4xl
<h4 className="heading-sm">          // lg → xl → 2xl
```

### Body Text
```jsx
<p className="body-lg">              // base → lg → xl
<p className="body-md">              // sm → base → lg
<p className="body-sm">              // xs → sm → base
```

---

## 📦 SPACING CLASSES

### Section Padding
```jsx
<section className="section-spacing">     // py-12 → 16 → 20 → 24
<section className="section-spacing-lg">  // py-16 → 20 → 24 → 32
```

### Container Padding
```jsx
<div className="container-padding">       // px-4 → 6 → 8 → 12
<div className="container-padding-sm">    // px-3 → 4 → 6
```

### Gaps
```jsx
<div className="gap-responsive-sm">       // gap-3 → 4 → 5
<div className="gap-responsive-md">       // gap-4 → 6 → 8
<div className="gap-responsive-lg">       // gap-6 → 8 → 10 → 12
```

---

## 📐 LAYOUT CLASSES

### Grids
```jsx
<div className="grid-responsive-2">       // 1 col → 2 cols (md+)
<div className="grid-responsive-3">       // 1 → 2 (sm+) → 3 (lg+)
<div className="grid-responsive-4">       // 2 → 3 (md+) → 4 (lg+)
<div className="grid-auto-fit">           // Auto-fit 280px min columns
```

### Card Padding
```jsx
<div className="card-padding">            // p-4 → 6 → 8
<div className="card-padding-lg">         // p-6 → 8 → 10 → 12
```

---

## 🛡️ OVERFLOW PREVENTION

### Essential Classes
```jsx
<div className="no-overflow-x">           // Prevent horizontal scroll
<div className="contained">               // Max-width + overflow hidden
<div className="full-width-section">      // Full width, no overflow
```

### Safe Areas (for notched devices)
```jsx
<div className="safe-padding-x">          // Respects device insets
<div className="safe-padding-y">          // Respects top/bottom insets
```

---

## 🖼️ IMAGE UTILITIES

```jsx
<img className="img-cover" />             // Object-fit: cover
<img className="img-contain" />           // Object-fit: contain
<div className="aspect-video-safe">       // 16:9 aspect ratio
<div className="aspect-square-safe">      // 1:1 aspect ratio
```

---

## 🎯 BUTTON SIZING

```jsx
<button className="btn-touch-target">     
// min-h-[48px → 52px → 56px], proper padding
```

**Minimum sizes for touch:**
- Mobile: 48px × 48px
- Tablet: 52px × 52px
- Desktop: 56px × 56px

---

## 📱 RESPONSIVE VISIBILITY

```jsx
<div className="mobile-only">             // Show on mobile only
<div className="tablet-up">               // Hide on mobile
<div className="desktop-only">            // Show on lg+ only
```

---

## 🎨 HERO SECTIONS

```jsx
<section className="hero-section">
  <div className="hero-content">
    <h1 className="heading-hero">Title</h1>
    <p className="body-lg">Description</p>
  </div>
</section>
```

---

## 📖 READABILITY

```jsx
<div className="text-readable">           // max-w-prose (65ch)
<div className="text-readable-wide">      // max-w-4xl
<div className="text-readable-full">      // max-w-6xl
<p className="leading-comfortable">       // line-height: 1.7
```

---

## 🔢 Z-INDEX SYSTEM

```jsx
.z-base      = 1    // Default content
.z-content   = 10   // Primary content
.z-sticky    = 20   // Sticky elements
.z-header    = 30   // Navigation header
.z-overlay   = 40   // Modals, overlays
.z-modal     = 50   // Top-level modals
```

---

## 🎭 ACCESSIBILITY

### Focus States (automatic)
```css
*:focus-visible {
  outline: 2px solid var(--brand-gold);
  outline-offset: 2px;
}
```

### Reduced Motion Support (automatic)
```css
@media (prefers-reduced-motion: reduce) {
  /* All animations disabled */
}
```

---

## 🛠️ UTILITY FUNCTIONS

### TypeScript Helpers (`/utils/responsive.ts`)

```typescript
import { 
  getCurrentBreakpoint,
  isBreakpoint,
  supportsHover,
  prefersReducedMotion,
  getSafeAreaInsets,
  debounce
} from '../utils/responsive';

// Usage examples:
const breakpoint = getCurrentBreakpoint(); // 'lg'
const isDesktop = isBreakpoint('lg');      // true/false
const canHover = supportsHover();          // true/false
const reduced = prefersReducedMotion();    // true/false

const handleResize = debounce(() => {
  console.log('Resized!');
}, 300);
```

---

## 📋 COMMON PATTERNS

### Responsive Section
```jsx
<section className="section-spacing bg-white">
  <div className="container mx-auto container-padding">
    <h2 className="heading-lg mb-8">Section Title</h2>
    <div className="grid-responsive-3">
      {/* Content */}
    </div>
  </div>
</section>
```

### Responsive Card
```jsx
<div className="card-padding bg-white rounded-xl shadow-lg">
  <h3 className="heading-sm mb-4">Card Title</h3>
  <p className="body-md text-readable">
    Card content with proper readability
  </p>
</div>
```

### Touch-Friendly Button
```jsx
<button className="btn-touch-target rounded-xl bg-brand-gold text-white font-bold">
  Click Me
</button>
```

### Responsive Image
```jsx
<div className="aspect-video-safe overflow-hidden rounded-xl">
  <img 
    src="/image.jpg" 
    alt="Description"
    className="img-cover"
  />
</div>
```

---

## 🚨 COMMON MISTAKES TO AVOID

### ❌ DON'T:
```jsx
// Fixed pixel widths
<div style={{ width: '1200px' }}>

// Non-responsive text
<h1 className="text-8xl">

// Small touch targets
<button style={{ width: '30px', height: '30px' }}>

// Uncontrolled overflow
<div>
  <p>Very long text without word-wrap...</p>
</div>
```

### ✅ DO:
```jsx
// Responsive widths
<div className="max-w-7xl mx-auto px-4">

// Responsive text
<h1 className="heading-hero">

// Touch-friendly targets
<button className="btn-touch-target">

// Controlled overflow
<div className="contained">
  <p className="break-words">
    Very long text with proper wrapping...
  </p>
</div>
```

---

## 🎯 QUICK CHECKLIST

Before committing code, verify:

- [ ] No fixed pixel widths (use responsive classes)
- [ ] Text scales across breakpoints (use heading-* classes)
- [ ] Touch targets are 48px+ (use btn-touch-target)
- [ ] No horizontal overflow (use contained/no-overflow-x)
- [ ] Proper spacing (use section-spacing, gap-responsive-*)
- [ ] Images have aspect ratios (use aspect-*-safe)
- [ ] Focus states visible (automatic with our system)
- [ ] Works on mobile (test at 375px width)

---

## 🔗 RELATED DOCUMENTATION

- **Full Guide:** `/UX_OPTIMIZATION_GUIDE.md`
- **Complete Report:** `/UX_UI_OPTIMIZATION_REPORT.md`
- **Premium Features:** `/PREMIUM_ENHANCEMENTS.md`
- **Utility Functions:** `/utils/responsive.ts`
- **Styles:** `/styles/responsive.css`

---

## 💡 PRO TIPS

1. **Always test mobile first** - Easier to scale up than down
2. **Use spacing variables** - Consistent design system
3. **Respect touch targets** - 48px minimum for accessibility
4. **Prevent overflow** - Add `overflow-hidden` to sections
5. **Optimize images** - Use proper aspect ratios
6. **Test real devices** - Simulators don't catch everything
7. **Check focus states** - Tab through your interface
8. **Reduce motion support** - Respect user preferences

---

**Last Updated:** January 28, 2026  
**Quick Access:** Keep this guide handy during development!
