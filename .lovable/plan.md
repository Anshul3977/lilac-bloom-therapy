

## Lilac Therapy Website - Implementation Plan

A beautiful, pixel-perfect recreation of the Lilac Squarespace template for a therapy practice, built with React, TypeScript, and Tailwind CSS.

---

### 🎨 Design System & Styling

- **Color Palette**: Cream/beige backgrounds (#f5f3f0), light tan (#e8e6e3), lilac accent (#e5dce8), olive green CTA (#818868)
- **Typography**: Playfair Display (serif headings) + Inter (body text) from Google Fonts
- **Styling**: Tailwind CSS with custom color configuration
- **Animations**: Framer Motion for smooth scroll-triggered animations, accordion transitions, and hover effects

---

### 📄 Pages

**1. Homepage** - All 9 sections as specified:
- Sticky navigation with scroll-triggered appearance
- Hero section with arched image container and CTA
- Introduction split-layout section
- Three-column specialties cards with circular images
- Support section with lilac background and bullet list
- About section with overlapping circular images
- FAQ accordion section
- Professional background with accordion
- Footer with contact info, hours, and navigation

**2. Blog Page** - Static demo:
- Grid layout with 3-4 sample blog post cards
- Each card with featured image, title, excerpt, and date
- Visual consistency with homepage aesthetic

**3. Contact Page** - Functional form:
- Split layout: form on one side, contact info on other
- Working contact form with name, email, phone, message fields
- Form validation with error states
- Sends emails via Lovable Cloud edge function (using Resend)
- Success/error toast notifications

---

### ⚙️ Technical Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Smooth Scrolling**: Navigation links scroll to homepage sections
- **Accordion Components**: Expand/collapse for FAQ and professional background
- **Image Handling**: Unsplash placeholder images with lazy loading
- **Form Validation**: Zod schema validation for contact form
- **Backend**: Lovable Cloud edge function for email sending (Resend integration)

---

### 🧩 Component Structure

- `Navigation` - Sticky header with mobile hamburger menu
- `Hero` - Split layout with arched image
- `Introduction` - Split layout with flat-lay image
- `Specialties` - Three-column card grid
- `Support` - Split layout with bullet list
- `About` - Split layout with overlapping circular images
- `FAQ` - Accordion component
- `ProfessionalBackground` - Accordion with CTA banner
- `Footer` - Three-column layout with legal links
- `ContactForm` - Validated form with email integration
- `BlogCard` - Reusable post preview component

---

### 📧 Email Setup Required

For the contact form to work, you'll need:
1. A Resend account (free tier available at resend.com)
2. A verified sending domain or use their sandbox for testing
3. RESEND_API_KEY stored in Lovable Cloud secrets

