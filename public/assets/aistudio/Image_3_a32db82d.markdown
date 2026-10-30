---
name: Developer Portfolio System
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#181b25'
  surface-container: '#1c1f29'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2ef'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dfe2ef'
  inverse-on-surface: '#2c303a'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#c0c1ff'
  on-tertiary: '#1000a9'
  tertiary-container: '#8083ff'
  on-tertiary-container: '#0d0096'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#0f131c'
  on-background: '#dfe2ef'
  surface-variant: '#31353f'
typography:
  display:
    fontFamily: Inter
    fontSize: 3.75rem
    fontWeight: '800'
    lineHeight: 4.25rem
    letterSpacing: -0.025em
  display-mobile:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: '800'
    lineHeight: 3rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: '700'
    lineHeight: 2.25rem
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.625rem
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: 1.25rem
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.025em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: 0.875rem
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets an ambitious, high-craft developer portfolio. The aesthetic blends authoritative engineering precision with forward-looking digital polish. It balances a high-performance terminal tool with a premier software product showcase.

The design movement merges modern corporate engineering standards with restrained glassmorphic technical minimalism:
- Deep obsidian and midnight navy canvas foundations prevent high-contrast eye fatigue.
- Luminous electric blue and violet vector accents serve as energy conduits and interactive affordances.
- Strict typography pairing pairs clean geometric headings with monospaced data structures to establish technical authority.
- Translucent frosted glass containers, fine hairline boundaries, and controlled ambient glows communicate precision and engineering depth.

## Colors

The palette establishes an immersive, low-light environment where neon-influenced spectrum gradients draw attention to featured achievements, skills, and interactive surfaces.

### Surface System
- `canvas-root`: `#090D16` — Deepest baseline canvas.
- `canvas-subtle`: `#0D111D` — Recessed structural sections, terminal viewports, and code containers.
- `surface-elevated`: `#13192B` — Interactive card components and overlays.
- `surface-glass`: `rgba(19, 25, 43, 0.65)` — Blurring glassmorphism layer with backdrop filter integration.

### Accents & Gradients
- `primary`: `#3B82F6` (Electric Blue) — Core interactive trigger, primary buttons, and link focus.
- `secondary`: `#8B5CF6` (Vivid Violet) — Feature badges, highlight tags, and visual balance.
- `tertiary`: `#6366F1` (Indigo Spectrum) — Mid-point transition for gradients and secondary active elements.
- `accent-gradient`: `linear-gradient(135deg, #3B82F6 0%, #6366F1 50%, #8B5CF6 100%)` — Hero headlines, call-to-action highlights, and active borders.

### Typography & Border Neutrals
- `text-primary`: `#F8FAFC` — Crisp slate white for primary titles, values, and key interfaces.
- `text-secondary`: `#94A3B8` — Soft muted slate for body paragraphs, descriptions, and labels.
- `text-tertiary`: `#64748B` — Muted technical meta details, timestamps, and line numbers.
- `border-hairline`: `rgba(255, 255, 255, 0.08)` — Subtle definition edge for cards and containers.
- `border-luminous`: `rgba(59, 130, 246, 0.40)` — Elevated state border with electric radiance.

## Typography

The typography architecture uses a complementary pairing between `Inter` and `JetBrains Mono`:
- **Headings & Display**: `Inter` provides dense, geometric impact for portfolio intros, project names, and section titles. Tight negative letter-spacing ensures a clean, modern aesthetic.
- **Narrative, Meta, & Code**: `JetBrains Mono` handles all body content, interactive controls, tags, and technical specs. It reinforces developer identity across both descriptive text and code-related content.

Always apply tabular figure alignment for numbered metrics, commit hashes, timestamps, and statistical counters.

## Layout & Spacing

The system runs on a 12-column responsive layout with max-width boundaries that keep lines readable and terminal windows constrained.

### Viewport Structures
- **Desktop (1024px+)**: Max-width container of `1200px`, 12-column grid, `1.5rem` gutters, and `3rem` section margins.
- **Tablet (768px - 1023px)**: 8-column layout, `1.25rem` gutters, and `2rem` side padding.
- **Mobile (320px - 767px)**: 4-column fluid layout, `1rem` gutters, and `1.25rem` side margins.

### Spacing Rhythm
Vertical rhythm follows strict multiples of `0.25rem` (4px). Section dividers maintain generous vertical spacing (`space-xl` scaled dynamically up to `5rem` for major section transitions) to give individual projects and experiments room to breathe.

## Elevation & Depth

Depth is established through translucent dark layers and subtle luminous glow fields, avoiding opaque solid shadows.

### Surface Tiers
- **Tier 0 (Root Base)**: `#090D16` solid substrate.
- **Tier 1 (Section Blocks / Underlays)**: `#0D111D` with flat containment.
- **Tier 2 (Glass Containers & Cards)**: `rgba(19, 25, 43, 0.65)` layered with `backdrop-filter: blur(12px)` and bordered by hairline `rgba(255, 255, 255, 0.08)`.
- **Tier 3 (Floating Menus / Modals)**: `rgba(19, 25, 43, 0.85)` with `backdrop-filter: blur(20px)` and an ambient shadow: `0 20px 40px -15px rgba(0, 0, 0, 0.7)`.

### Luminous Accents & Glow
- Active hover states introduce an electric halo: `box-shadow: 0 0 25px -5px rgba(59, 130, 246, 0.25)`.
- Secondary highlights and badges use violet ambient diffusion: `box-shadow: 0 0 20px -5px rgba(139, 92, 246, 0.2)`.

## Shapes

The design system uses balanced curvature to soften technical UI without feeling overly playful:
- **Base Components**: Inputs, standard buttons, tabs, and code snippets use `rounded` (0.5rem / 8px).
- **Cards & Surface Modules**: Project showpieces, experience cards, and credential modules use `rounded-lg` (1rem / 16px).
- **Hero Windows & Feature Showcases**: Prominent desktop previews and code terminal containers use `rounded-xl` (1.5rem / 24px).
- **Status Pills & Inline Badges**: Status markers, category indicators, and mini tags use full rounded caps (`9999px`).

## Components

### Buttons
- **Primary Action**: Gradient fill `linear-gradient(135deg, #3B82F6, #6366F1)`, white text (`#F8FAFC`), font weight 500 (`JetBrains Mono`), padding `0.625rem 1.25rem`, border-radius `0.5rem`. Hover triggers an electric blue ambient drop shadow and `translateY(-1px)`.
- **Secondary / Glass Button**: Translucent background `rgba(255, 255, 255, 0.04)`, border `1px solid rgba(255, 255, 255, 0.08)`, text `#F8FAFC`. Hover transitions border to `rgba(59, 130, 246, 0.5)` with background `rgba(59, 130, 246, 0.08)`.

### Cards & Project Showcases
- Surface: `rgba(19, 25, 43, 0.65)` with `backdrop-filter: blur(12px)`.
- Framing: `1px solid rgba(255, 255, 255, 0.08)`.
- Interaction: On hover, border shifts to a dynamic blue-to-violet gradient sheen, the card translates `2px` upward, and an ambient blue glow activates.

### Badges & Technical Chips
- **Live / Status Badge**: Background `rgba(59, 130, 246, 0.1)`, text `#3B82F6`, border `1px solid rgba(59, 130, 246, 0.3)`, pill-shaped (`9999px`), padding `0.25rem 0.625rem`. Includes a pulsating circular green or blue dot (`6px`) indicating deployment status.
- **Skill / Tech Stack Tag**: Monospaced font, background `rgba(255, 255, 255, 0.03)`, text `#94A3B8`, border `1px solid rgba(255, 255, 255, 0.06)`, radius `0.375rem`.

### Form Elements & Terminal Inputs
- Background `#0D111D`, border `1px solid rgba(255, 255, 255, 0.1)`, text `#F8FAFC`, placeholder `#64748B`.
- Focus state: Border transitions to `#3B82F6`, outline disabled, subtle focus ring `0 0 0 3px rgba(59, 130, 246, 0.2)`.

### Code Blocks & Mock Terminals
- Top chrome bar featuring traffic light indicator dots (close, minimize, expand).
- Surface `#090D16` surrounded by a `1px solid rgba(255, 255, 255, 0.08)` border.
- Integrated syntax colors: electric blue (`#3B82F6`), soft violet (`#A855F7`), and subtle slate (`#64748B`).