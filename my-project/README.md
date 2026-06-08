# Amithesh Sequiera - Portfolio Website

A **minimalistic, premium personal portfolio website** designed with a strong visual identity. Clean, modern aesthetics inspired by Notion + Apple product design with dark mode as the primary theme.

## 🎨 Design Philosophy

- **Minimalist & Premium**: Brutally simple but unmistakably polished
- **Duotone Palette**: Deep black (#0a0e27) + off-white with electric blue accent (#00d4ff)
- **Typography**: Space Grotesk geometric sans-serif for sharp hierarchy
- **Micro-interactions**: Smooth hover states, fade-ins on scroll, glow effects
- **Responsive**: Fully mobile-optimized from 320px to 4K

## ✨ Features

### Sections Included
- **Hero** — Full-screen with name, role, and dual CTAs
- **About** — Bio with abstract avatar and contact info
- **Skills** — Categorized expertise displayed as elegant tags
- **Projects** — Card-based grid with hover reveal
- **Experience** — Clean vertical timeline with company roles
- **Achievements** — Recognition & competition wins
- **Contact** — Email, phone, and social links with icons

### Interactive Elements
- 🌓 **Dark/Light Mode Toggle** (persistent)
- ⚡ **Smooth Scroll Navigation**
- 🎯 **Hover Effects** — Card elevation, accent highlights, glow shadows
- ✨ **Fade-in Animations** — Staggered card reveals
- 🔗 **Underline Link Animations** — Gradient slide-in on hover

## 🚀 Tech Stack

- **React 19.2** — UI framework
- **Vite 8.0** — Lightning-fast build tool
- **CSS3** — Pure CSS, no tailwind (for performance & control)
- **Google Fonts** — Space Grotesk font family

## 📦 Getting Started

### Prerequisites
- Node.js 16+ 
- npm 8+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Visit http://localhost:5173/
```

### Build for Production

```bash
npm run build
# Output: dist/
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
my-project/
├── src/
│   ├── App.jsx         # Main portfolio component
│   ├── index.css       # Global styles & design system
│   ├── App.css         # Component-specific animations
│   ├── main.jsx        # React entry point
│   └── assets/         # Images & static files
├── index.html          # HTML template
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

## 🎯 Customization

### Colors (CSS Variables)
Edit `src/index.css` — all colors defined in `:root` variables:

```css
:root {
  --bg-primary: #0a0e27;        /* Main background */
  --text-primary: #e8e9f3;      /* Main text */
  --accent: #00d4ff;            /* Accent color */
  --shadow: 0 20px 60px rgba(...); /* Shadows */
}
```

### Content
Update sections in `src/App.jsx`:
- Hero tagline → `<p className="tagline">`
- Project details → Edit `project-card` components
- Experience entries → Timeline items
- Social links → Update href attributes

### Typography
Fonts managed in `index.html` (Space Grotesk) and `index.css` (--font-family).

## 🔧 Development

### Linting
```bash
npm run lint
```

### Hot Module Replacement (HMR)
Changes are reflected instantly during development — no manual refresh needed.

## 📊 Performance

- **Production Bundle**: ~65KB gzipped (JS + CSS)
- **Build Time**: <300ms (Vite optimized)
- **Lighthouse**: 95+ performance score

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop 'dist/' folder to Netlify
```

### GitHub Pages
Add to `vite.config.js`:
```js
export default {
  base: '/portfolio/',
}
```

## 📝 Sections Breakdown

### Hero
- Full-viewport height
- Gradient text on name
- Animated background orbs (floating effect)
- Dual CTA buttons

### About
- 2-column layout (text + avatar)
- Abstract "AS" monogram avatar
- Contact info with email link

### Skills
- 4 categories (Languages, Security, Tech Stack, Soft Skills)
- Hover elevation on categories
- Tag-based skill display

### Projects
- 3-column responsive grid
- Top border accent animation on hover
- Tech badges for each project
- Shadow elevation effect

### Experience
- Vertical timeline with gradient line
- Alternating left-right layout
- Glowing blue timeline dots
- Hover card effects

### Contact
- Centered content
- Large email link
- Social icon circles with hover scale
- Footer with copyright

## 🎨 Dark Mode Logic

```jsx
// Toggle theme function
const toggleTheme = () => {
  setIsDarkMode(!isDarkMode)
  document.body.classList.toggle('light-mode')
}
```

Light mode CSS defined under `body.light-mode` selector in `index.css`.

## 🚦 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📄 License

MIT — Feel free to use this as your own portfolio template!

## 💡 Tips

1. **Update your data** — All content is hardcoded in `App.jsx`. Edit directly or integrate a CMS later.
2. **Add your projects** — Each project card is a component instance; duplicate and customize.
3. **Replace avatar** — Change the avatar div to an actual image if desired.
4. **Analytics** — Consider adding Umami or Plausible for privacy-friendly tracking.
5. **SEO** — Update meta tags in `index.html` for better search visibility.

---

**Built with ❤️ using React + Vite**
