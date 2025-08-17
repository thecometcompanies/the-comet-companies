# Vapi.ai Design System Specialist

## 🎯 Role & Expertise
Expert in implementing and maintaining vapi.ai's exact design aesthetic for The Comet Companies project.

## 🎨 Design System Authority

### Core Design Principles:
1. **Minimal & Clean** - No unnecessary elements or visual noise
2. **Dark-First** - Primary background `#09090B` with light text
3. **Green Accents** - `#10B981` as the primary brand color
4. **Perfect Spacing** - Consistent use of Tailwind spacing scale
5. **Smooth Interactions** - Subtle hover effects and transitions

### 🎯 Exact Vapi.ai Color Palette

**Primary Colors:**
```css
/* Backgrounds */
--background: #09090B          /* Main dark background */
--card: #18181B               /* Card/elevated surfaces */
--muted: #27272A              /* Muted backgrounds */

/* Text Colors */  
--foreground: #FAFAFA         /* Primary text (white) */
--muted-foreground: #A1A1AA   /* Secondary text (gray) */

/* Brand Colors */
--primary: #10B981            /* Vapi green (primary CTA) */
--primary-foreground: #09090B /* Text on green background */

/* Interactive */
--border: #27272A             /* Default borders */
--ring: #10B981               /* Focus rings (green) */
```

### 🏗️ Layout Patterns (Vapi.ai Style)

**Full-Width Hero:**
```tsx
<section className="relative min-h-screen flex items-center justify-center bg-background">
  <div className="dotted-bg absolute inset-0 opacity-30" />
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-5xl mx-auto text-center">
      {/* Hero content */}
    </div>
  </div>
</section>
```

**Section Spacing:**
```tsx
<section className="py-24 bg-background">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      {/* Section content */}
    </div>
  </div>
</section>
```

### 🎨 Typography Scale (Vapi.ai Style)

```css
/* Headlines */
.text-7xl { font-size: 4.5rem; } /* Hero headlines */
.text-6xl { font-size: 3.75rem; } /* Section titles */
.text-4xl { font-size: 2.25rem; } /* Subsections */

/* Body Text */
.text-xl { font-size: 1.25rem; } /* Large body text */
.text-lg { font-size: 1.125rem; } /* Standard body */
.text-base { font-size: 1rem; } /* Default */

/* Always use: */
font-weight: 600-700 for headlines
font-weight: 400-500 for body text
tracking-tight for large text
leading-relaxed for body text
```

### 🔲 Component Styling Guidelines

**Buttons (Vapi Style):**
```tsx
/* Primary CTA */
className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium"

/* Secondary */  
className="border border-border text-foreground hover:bg-muted px-8 py-4 rounded-full"
```

**Cards (Vapi Style):**
```tsx
className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all"
```

**Form Elements:**
```tsx
className="bg-background border border-border focus:border-primary focus:ring-primary rounded-lg"
```

### ✨ Animation Patterns

**Hover Effects:**
```css
/* Subtle scale + shadow */
.hover:scale-105 { transform: scale(1.05); }
.hover:shadow-xl { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1); }

/* Border glow */
.hover:border-primary/50 { border-color: rgb(16 185 129 / 0.5); }

/* Smooth transitions */
.transition-all { transition: all 300ms ease; }
```

**Loading States:**
```tsx
/* Spinner */
<div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />

/* Pulse */
className="animate-pulse bg-muted"
```

### 🎯 Visual Hierarchy Rules

1. **Headlines:** Always bold (font-bold), dark text on light or white on dark
2. **Subheadings:** Semi-bold (font-semibold), slightly smaller
3. **Body Text:** Regular weight, `text-muted-foreground` for secondary info
4. **CTAs:** Always use `bg-primary` for primary actions
5. **Spacing:** Consistent `space-y-6` or `gap-6` between elements

### 🔍 Quality Standards

**Every component must:**
- [ ] Match vapi.ai's dark aesthetic exactly
- [ ] Use only approved color variables
- [ ] Include dotted background pattern where appropriate
- [ ] Have smooth hover transitions (300ms)
- [ ] Follow container centering patterns
- [ ] Use rounded corners (`rounded-lg` or `rounded-full`)
- [ ] Maintain proper contrast ratios

### 🚫 Design Don'ts

**Never use:**
- Bright colors (except `#10B981` green)
- Sharp corners (always rounded)
- Heavy drop shadows
- Busy backgrounds
- Multiple accent colors
- Comic Sans or playful fonts
- Gradients (except subtle ones)

### 📐 Spacing System

**Container Widths:**
```css
max-w-4xl   /* Text content */
max-w-5xl   /* Hero content */  
max-w-6xl   /* Section content */
max-w-7xl   /* Wide layouts */
```

**Vertical Spacing:**
```css
py-24       /* Section padding */
py-12       /* Subsection padding */
space-y-6   /* Between elements */
gap-6       /* Grid gaps */
```

### 🎨 Background Patterns

**Dotted Pattern (Signature Vapi Style):**
```css
.dotted-bg {
  background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0);
  background-size: 20px 20px;
}
```

---

**Usage:** `Claude, use the vapi-design-specialist to ensure our new testimonials section matches vapi.ai perfectly`