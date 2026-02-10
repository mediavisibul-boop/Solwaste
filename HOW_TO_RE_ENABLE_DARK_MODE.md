# How to Re-Enable Dark Mode

**Date**: 2026-02-10  
**Status**: Dark mode temporarily disabled for production  
**Reason**: Needs additional fixes before public release

---

## 🔒 What Was Changed

Dark mode has been **temporarily disabled** but **NOT removed**. All the code is still intact and can be easily re-enabled later.

### Changes Made:

1. **Navigation.tsx** - Desktop Theme Toggle (Line ~52-69)
   - Desktop theme toggle button commented out
   - Code preserved with comments

2. **Navigation.tsx** - Mobile/Tablet Theme Toggle (Line ~121-134)
   - Mobile/tablet theme toggle button commented out
   - Code preserved with comments

3. **ThemeContext.tsx**
   - Theme forced to 'light' mode
   - localStorage and system preference checks commented out
   - Dark class removal forced
   - Original code preserved in comments

---

## 🔓 How to Re-Enable Dark Mode

### Step 1a: Re-enable Desktop Theme Toggle Button

**File**: `components/Navigation.tsx`

**Find** (around line 52 in Desktop Nav section):
```jsx
{/* Theme Toggle Button - TEMPORARILY DISABLED */}
{/* <button
  onClick={toggleTheme}
  ...
</button> */}
```

**Change to**:
```jsx
{/* Theme Toggle Button */}
<button
  onClick={toggleTheme}
  className={[
    "min-w-[40px] min-h-[40px] p-2 flex items-center justify-center rounded-lg",
    "transition-all duration-300 hover:scale-110 active:scale-95",
    isNavTransparent
      ? "text-white hover:bg-white/10 active:bg-white/20"
      : "text-brand-brown hover:bg-gray-100 active:bg-gray-200"
  ].join(" ")}
  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
  title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
>
  {theme === 'light' ? (
    <Moon size={20} className="transition-transform duration-300" />
  ) : (
    <Sun size={20} className="transition-transform duration-300" />
  )}
</button>
```

### Step 1b: Re-enable Mobile/Tablet Theme Toggle Button

**File**: `components/Navigation.tsx`

**Find** (around line 121 in Mobile Actions section):
```jsx
{/* Mobile Theme Toggle - TEMPORARILY DISABLED */}
{/* <button
  onClick={toggleTheme}
  ...
</button> */}
```

**Change to**:
```jsx
{/* Mobile Theme Toggle */}
<button
  onClick={toggleTheme}
  className={[
    "min-w-[44px] min-h-[44px] p-2.5 flex items-center justify-center rounded-lg",
    "transition-all duration-300 active:scale-95",
    isNavTransparent
      ? "text-white hover:bg-white/10 active:bg-white/20"
      : "text-brand-brown hover:bg-gray-100 active:bg-gray-200"
  ].join(" ")}
  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
>
  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
</button>
```

### Step 2: Re-enable Theme Context Logic

**File**: `utils/ThemeContext.tsx`

**Find** (around line 13):
```jsx
const [theme, setTheme] = useState<Theme>(() => {
  // TEMPORARILY DISABLED: Dark mode forced to light until fixes are complete
  return 'light';
  
  /* ORIGINAL CODE - Re-enable when dark mode is ready
  // Safe check for browser environment
  ...
  */
});
```

**Change to**:
```jsx
const [theme, setTheme] = useState<Theme>(() => {
  // Safe check for browser environment
  if (typeof window === 'undefined') {
    return 'light';
  }
  
  try {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      // Apply immediately to reduce FOUC
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      return 'dark';
    }
  } catch (error) {
    console.error('Error reading theme from localStorage:', error);
  }
  
  return 'light';
});
```

**Find** (around line 42):
```jsx
useEffect(() => {
  const root = document.documentElement;
  
  // TEMPORARILY DISABLED: Force remove dark class
  root.classList.remove('dark');
  
  /* ORIGINAL CODE - Re-enable when dark mode is ready
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  ...
  */
}, [theme]);
```

**Change to**:
```jsx
useEffect(() => {
  const root = document.documentElement;
  
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  
  try {
    localStorage.setItem('theme', theme);
  } catch (error) {
    console.error('Error saving theme to localStorage:', error);
  }
}, [theme]);
```

---

## ✅ Testing After Re-enabling

1. **Build and start dev server**:
   ```bash
   npm run dev
   ```

2. **Test the toggle**:
   - Click the moon/sun icon in navigation
   - Should switch between light and dark modes
   - Check localStorage persists the choice

3. **Test all pages** (refer to `FINAL_DARK_MODE_CHECKLIST.md`):
   - Home page (all sections)
   - OWC page (especially Technical Specifications)
   - Fahaka page
   - Contact, Careers, Partner With Us
   - Case Studies, Gallery
   - About, Vision2047, Solutions, Sustainability
   - Press Media, Legal pages

4. **Check for issues**:
   - No black text on black backgrounds
   - All sections have proper backgrounds
   - Borders are visible
   - Text is comfortable to read
   - No harsh pure black (#000000)

---

## 📚 Related Documentation

When re-enabling, refer to these documents for the modern dark mode implementation:

1. **DARK_MODE_COLORS_GUIDE.md** - Complete color system reference
2. **FINAL_DARK_MODE_CHECKLIST.md** - Production verification steps
3. **DARK_MODE_FIXES_SUMMARY.md** - What was fixed previously

---

## 🎨 Current Dark Mode Color Palette

The modern, eye-friendly palette is already implemented in the code:

### Backgrounds
- Main: `#1a1a1a` (soft, not harsh)
- Elevated: `#252525` (cards, modals)
- Nested: `#2a2a2a` (icon backgrounds)

### Text
- Primary: `#e5e5e5` (off-white, comfortable)
- Secondary: `#d4d4d4` (body text)
- Muted: `#a3a3a3` (tertiary info)

### Borders
- Strong: `#3f3f3f` (gray-700)
- Subtle: `#262626` (gray-800)

All code using these colors is in place and ready to work once re-enabled!

---

## ⚠️ Known Issues to Fix Before Re-enabling

Review `FINAL_DARK_MODE_CHECKLIST.md` for any remaining pages that need dark mode optimization. The main architectural changes are done, but some pages may need:

- Background color updates
- Text color adjustments
- Border visibility fixes
- Gradient dark mode variants

---

## 🚀 Quick Re-enable Steps

1. Uncomment desktop theme toggle in `Navigation.tsx` (~line 52)
2. Uncomment mobile theme toggle in `Navigation.tsx` (~line 121)
3. Restore original code in `ThemeContext.tsx` (~lines 13-40 and ~lines 42-56)
4. Test thoroughly on both desktop and mobile
5. Deploy

**Estimated time to re-enable**: 5 minutes  
**Estimated time to test**: 30 minutes

---

## 📝 Notes

- All dark mode Tailwind classes are still in the code (e.g., `dark:bg-gray-900`)
- The modern color palette is configured in `tailwind.config.js`
- CSS variables are set in `premium.css`
- No breaking changes were made - only the toggle and theme logic were disabled

---

**Last Updated**: 2026-02-10  
**By**: AI Assistant  
**For**: Solwaste Production Push
