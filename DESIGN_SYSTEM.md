# Design System Documentation

## 🎨 Color Palette

### Dark Mode (Primary)
```css
--bg-primary:      #0a0e27  /* Main background */
--bg-secondary:    #10141f  /* Section backgrounds */
--bg-tertiary:     #1a1f3a  /* Component backgrounds */
--text-primary:    #e8e9f3  /* Primary text */
--text-secondary:  #a8aac4  /* Secondary text */
--text-tertiary:   #7a7d95  /* Tertiary text (muted) */
--accent:          #00d4ff  /* Primary accent (cyan) */
--accent-light:    #33e0ff  /* Lighter accent */
--accent-dark:     #0099cc  /* Darker accent */
--border:          #1f2438  /* Border color */
--shadow:          0 20px 60px rgba(0, 0, 0, 0.6)
--shadow-sm:       0 4px 12px rgba(0, 0, 0, 0.3)
```

### Light Mode
Automatically switches via `body.light-mode` class:
- Backgrounds: white → light gray
- Text: light gray → dark gray
- Accent: cyan → electric blue
- Borders & shadows: lightened

## 🔤 Typography

**Font Family**: Space Grotesk (Google Fonts)
- Weights: 400, 500, 600, 700
- Perfect for modern, geometric sans-serif aesthetic

### Sizing Scale
```css
h1: clamp(2.5rem, 6vw, 4rem)    /* Hero title */
h2: clamp(1.75rem, 5vw, 2.5rem) /* Section titles */
h3: clamp(1.25rem, 3vw, 1.5rem) /* Subsections */
p:  1rem / 1.6 line-height       /* Body text */
```

### Font Weights
- **Regular (400)**: Body text
- **Medium (500)**: Buttons, tags
- **Semibold (600)**: Headings, emphasis
- **Bold (700)**: Hero title

## 📏 Spacing System

```css
Base unit: 0.5rem (8px)

Spacing Scale:
0.5rem (4px)   — Micro
1rem (8px)     — Small
1.5rem (12px)  — Compact
2rem (16px)    — Standard
2.5rem (20px)  — Comfortable
3rem (24px)    — Generous
4rem (32px)    — Extra
5rem (40px)    — Section padding
```

## 🎯 Component Design

### Buttons
**Size**: 44px height (touch-friendly)
**Padding**: 0.875rem × 2rem
**Border Radius**: 8px
**Border**: 2px solid

States:
- **Default**: Accent background
- **Hover**: Lighter accent, translate up 2px, glow shadow
- **Secondary**: Transparent, accent border, filled background on hover

### Cards
**Border Radius**: 12px
**Border**: 1px solid border color
**Padding**: 2rem
**Hover Effects**:
- Border color → accent
- Transform: translateY(-4px)
- Shadow elevation (0 12px 40px)

### Tags/Badges
**Padding**: 0.5rem × 1rem
**Border Radius**: 20px (pill-shaped)
**Font Size**: 0.85rem
**Background**: Tertiary background
**Hover**: Accent background + accent text

### Timeline
**Dot Size**: 16px radius
**Dot Glow**: 0 0 20px rgba(0, 212, 255, 0.4)
**Line Width**: 2px (gradient: accent → border)
**Spacing**: 3rem between items

## ✨ Animations

### Keyframes

**fadeInUp** (1s)
```css
from: opacity 0, translateY 40px
to:   opacity 1, translateY 0
```

**float** (6-8s infinite)
```css
0%/100%: translateY(0px)
50%:     translateY(30px)
```

**shimmer** (3s infinite)
```css
0%:   translateX(-100%)
100%: translateX(100%)
```

**slideInFromLeft/Right** (0.3s)
```css
Horizontal slide with fade
```

**fadeInScale** (0.6s)
```css
from: opacity 0, scale(0.95)
to:   opacity 1, scale(1)
```

### Transition Speeds
- **Fast**: 0.3s (hover states, small elements)
- **Normal**: 0.6s (fade-ins, card reveals)
- **Slow**: 1s (hero entrance, page transitions)

## 📐 Breakpoints

```css
Mobile:    320px - 640px
Tablet:    641px - 1024px
Desktop:   1025px - 1440px
Wide:      1440px+
```

### Responsive Behavior
- **Mobile**: Single column, full-width buttons, touch-friendly spacing
- **Tablet**: 2-column grids, adjusted padding
- **Desktop**: Multi-column grids, hover effects enabled

## 🎪 Micro-interactions

### Hover Glow Effect
```css
box-shadow: 0 8px 24px rgba(0, 212, 255, 0.3)
```

### Link Underline Animation
```css
Gradient slide-in from left to right
Duration: 0.3s
```

### Button Lift
```css
transform: translateY(-2px)
transition: all 0.3s ease
```

### Card Border Accent
```css
Top border scales 0→1 on hover
gradient: accent → accent-light
```

## 🌓 Theme Toggle Logic

**Default**: Dark mode (preferred)
**Toggle**: Click theme button (top-right, fixed)
**Storage**: CSS class on `body` element (`body.light-mode`)
**Variables**: Automatically switch via CSS custom properties

```jsx
const toggleTheme = () => {
  setIsDarkMode(!isDarkMode)
  document.body.classList.toggle('light-mode')
}
```

## 🎨 Gradients

### Text Gradient (Hero H1)
```css
background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent) 100%)
```

### Accent Gradient (Timeline)
```css
background: linear-gradient(180deg, var(--accent) 0%, var(--border) 100%)
```

### Shimmer Effect (Avatar)
```css
background: linear-gradient(45deg, transparent 30%, rgba(0, 212, 255, 0.1) 50%, transparent 70%)
```

## 📊 Shadow System

**Elevation Levels**:
1. **Subtle** (--shadow-sm): Small UI elements
2. **Card** (--shadow): Cards, containers (default)
3. **Heavy**: Modals, dropdowns (on demand)
4. **Glow**: Accent elements (interactive)

## ♿ Accessibility

- **Color Contrast**: WCAG AA compliant (4.5:1+)
- **Focus States**: Blue outline with offset
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: All images have descriptive alt
- **Keyboard Navigation**: Full support
- **Reduced Motion**: Respects prefers-reduced-motion (optional enhancement)

## 📱 Touch Targets

Minimum touch target: 44px × 44px
Applied to: Buttons, links, social icons

## 🚀 Performance Optimizations

- CSS-in-JS avoided (pure CSS)
- Hardware acceleration via transforms
- GPU-accelerated animations
- Minimal paint operations
- No unnecessary reflows

---

**Last Updated**: 2026
**Version**: 1.0
