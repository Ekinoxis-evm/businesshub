# Cali Business Hub 2025 - Landing Page

A premium, dark-themed Next.js 14 landing page for the Cali Business Hub 2025 event, featuring professional design, smooth animations, and responsive layout.

## 🚀 Features

- **Next.js 14** with App Router
- **TailwindCSS** for styling with custom brand colors
- **ShadCN/UI** components for professional UI elements
- **Framer Motion** for smooth animations and interactions
- **Responsive Design** optimized for all devices
- **Dark Theme** with cyan and purple brand colors
- **Professional Typography** using Torus Pro font
- **Modular Components** for easy maintenance

## 🎨 Design System

### Colors
- **Primary Cyan**: `#05DAD7`
- **Primary Purple**: `#5628ED`
- **Dark Background**: `#0A0A0A`
- **Dark Surface**: `#1A1A1A`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#B0B0B0`

### Typography
- **Font Family**: Torus Pro (loaded from Google Fonts)
- **Headings**: Bold with gradient text effects
- **Body**: Clean, readable text with proper hierarchy

## 📁 Project Structure

```
calibussineshub/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # ShadCN/UI components
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── sections/            # Page section components
│       ├── hero-section.tsx
│       ├── about-section.tsx
│       ├── value-proposition-section.tsx
│       ├── differential-section.tsx
│       ├── academic-block-section.tsx
│       ├── registration-section.tsx
│       └── footer.tsx
├── lib/
│   ├── utils.ts             # Utility functions
│   └── content.ts           # Content management
├── content/
│   └── landing_calibusinesshub.md  # Event content
└── branding/                # Brand assets
    ├── Fonts/
    ├── Logo PNG/
    ├── Logo vector/
    └── Img/
```

## 🛠️ Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:3000`

## 📱 Sections

### 1. Hero Section
- Gradient background with brand colors
- Animated logo placeholder
- Event title and description
- Call-to-action button
- Scroll indicator

### 2. About Section
- Event context and description
- Attendee profile cards with icons
- Professional grid layout

### 3. Value Proposition
- Benefits list with checkmarks
- Statistics display
- Interactive cards with hover effects

### 4. Differential Section
- Unique selling proposition
- Methodology explanation
- Feature highlights with icons

### 5. Academic Block
- Speaker information
- Session details
- Learning objectives and outcomes

### 6. Registration Section
- Event details
- Pricing information
- Benefits list
- Wompi payment integration

### 7. Footer
- Contact information
- Quick links
- Legal information

## 🎯 Key Features

- **Smooth Animations**: Framer Motion for scroll-triggered animations
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Professional UI**: ShadCN/UI components for consistency
- **Brand Integration**: Custom colors and typography
- **Performance**: Optimized images and code splitting
- **Accessibility**: Proper semantic HTML and ARIA labels

## 🔧 Customization

### Colors
Update colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    cyan: '#05DAD7',
    purple: '#5628ED',
  },
  // ... other colors
}
```

### Content
Modify event content in `lib/content.ts` or integrate with a CMS.

### Animations
Customize animations in individual components using Framer Motion.

## 🚀 Deployment

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel** (recommended)
   ```bash
   npx vercel
   ```

3. **Or deploy to other platforms**
   - Netlify
   - AWS Amplify
   - Railway
   - DigitalOcean App Platform

## 📞 Support

For questions or support, contact the development team.

---

**Cali Business Hub 2025** - Conecta. Inspírate. Escala.
