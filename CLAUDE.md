# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Starts Next.js development server
- **Build**: `npm run build` - Creates production build
- **Production server**: `npm start` - Starts production server
- **Lint**: `npm run lint` - Runs ESLint for code quality checks

## Architecture Overview

This is a Next.js 14 React landing page for Comulate, an accounting automation platform targeting real estate brokers. The project uses the App Router pattern.

**Key Technologies:**
- Next.js 14 with TypeScript
- Tailwind CSS for styling
- Radix UI components for accessible UI primitives
- Motion library for animations
- Lucide React for icons

**Project Structure:**
- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable React components organized by feature
- `/components/ui` - Base UI components (buttons, cards, navigation)
- `/lib` - Utility functions (mainly Tailwind class merging)

**Component Architecture:**
The main landing page (`app/page.tsx`) assembles several section components:
- `Header` - Navigation with logo, menu items, and CTA button
- `HeroSection` - Main value proposition area
- `FeatureLayoutSection` - Product features showcase
- `TestimonialSection` - Customer testimonials
- `CallToActionSection` - Final conversion section

**Styling Approach:**
- Uses Tailwind CSS with custom color palette focused on `#0f4f48` (dark teal) and `#4adf7d` (green)
- Custom Tailwind configuration extends base theme with CSS custom properties for shadcn/ui compatibility
- Components use inline Tailwind classes with specific font families and precise spacing

**UI Component System:**
Built on shadcn/ui pattern with components in `/components/ui/` using:
- `class-variance-authority` for component variants
- `clsx` and `tailwind-merge` for conditional styling via `cn()` utility
- Radix UI primitives for accessibility