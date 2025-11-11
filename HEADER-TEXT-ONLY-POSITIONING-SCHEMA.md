# Text-Only Header - Advanced Positioning & Layout Schema

## Overview
Comprehensive schema settings for the text-only header that provide complete control over positioning, dimensions, background, padding, and content scaling. All settings are fully responsive and work across all viewport sizes.

---

## 📐 Header Layout & Positioning

### Background Color
**Setting:** `text_only_header_bg_color`
- **Type:** Color
- **Default:** `rgba(0,0,0,0)` (transparent)
- **Description:** Header background color with full transparency support
- **Use Cases:**
  - Solid backgrounds: `#ffffff`, `#000000`
  - Semi-transparent: `rgba(255,255,255,0.95)`
  - Fully transparent for overlay effects: `rgba(0,0,0,0)`

### Position Type
**Setting:** `text_only_position_type`
- **Type:** Select
- **Options:**
  - `relative` - Normal document flow (default)
  - `sticky` - Sticks to viewport on scroll
  - `fixed` - Fixed to viewport, removed from document flow
  - `absolute` - Positioned relative to nearest positioned ancestor
- **Default:** `relative`
- **Description:** Controls how the header is positioned on the page

### Position Offsets
**Settings:**
- `text_only_position_top` (-200px to 200px, default: 0)
- `text_only_position_left` (-200px to 200px, default: 0)
- `text_only_position_right` (-200px to 200px, default: 0)

**Use Cases:**
- **Sticky Header at Top:** 
  - Position: `sticky`, Top: `0px`
- **Fixed Header with Margin:** 
  - Position: `fixed`, Top: `20px`, Left: `20px`, Right: `20px`
- **Absolute Overlay:** 
  - Position: `absolute`, Top: `0px`, Left: `0px`, Right: `0px`

### Z-Index (Stacking Order)
**Setting:** `text_only_z_index`
- **Range:** 1-9999
- **Default:** 100
- **Description:** Controls which elements appear on top. Higher values = on top of other elements.

---

## 📏 Header Dimensions

### Width Type
**Setting:** `text_only_width_type`
- **Options:**
  - `full` - Full Width (100%) - Default
  - `vw` - Viewport Width units
  - `px` - Fixed pixels
  - `max-width` - Uses max-width container with centering

### Width Value
**Setting:** `text_only_width_value`
- **Range:** 10-200
- **Default:** 100
- **Description:** Width value (interpreted as %, vw, or px based on width type)

**Examples:**
- Full width: Type=`full` (value ignored)
- 90% of viewport: Type=`vw`, Value=`90`
- Fixed 1200px: Type=`px`, Value=`1200`
- Centered container: Type=`max-width`, Value=`1600`

### Height Type
**Setting:** `text_only_height_type`
- **Options:**
  - `auto` - Content height (default)
  - `vh` - Viewport height units
  - `px` - Fixed pixels

### Height Value
**Setting:** `text_only_height_value`
- **Range:** 10-200
- **Default:** 80
- **Description:** Height value (used for vh/px, ignored for auto)

**Examples:**
- Auto height: Type=`auto`
- 10vh tall: Type=`vh`, Value=`10`
- 120px tall: Type=`px`, Value=`120`

---

## 🎨 Header Padding

**Settings:**
- `text_only_padding_top` (0-100px, default: 20px)
- `text_only_padding_bottom` (0-100px, default: 20px)
- `text_only_padding_left` (0-200px, default: 20px)
- `text_only_padding_right` (0-200px, default: 20px)

**Description:** Inner spacing around header content. Independent control for all four sides.

**Use Cases:**
- Compact header: All padding = 10px
- Breathing room: Top/Bottom = 30px, Left/Right = 40px
- Asymmetric: Different values for visual balance

---

## 🔄 Content Scaling

### Content Scale
**Setting:** `text_only_content_scale`
- **Range:** 50%-200%
- **Default:** 100%
- **Description:** Uniformly scales all header content (logo, menu items, icons) using CSS transform

**Use Cases:**
- Smaller header: 80%
- Larger for accessibility: 120%
- Dramatic sizing: 150%

**Note:** Uses `transform: scale()` so it doesn't affect layout flow, only visual size.

### Center Content Vertically
**Setting:** `text_only_center_content_vertically`
- **Type:** Checkbox
- **Default:** Checked (true)
- **Description:** Vertically centers all header elements within the header height

---

## 🎯 Common Use Cases

### 1. **Classic Fixed Header at Top**
```
Position Type: fixed
Top: 0px
Left: 0px
Right: 0px
Width Type: full
Height Type: auto
Background: rgba(255,255,255,0.98)
Z-Index: 1000
```

### 2. **Sticky Header with Custom Height**
```
Position Type: sticky
Top: 0px
Width Type: full
Height Type: px
Height Value: 80
Background: #ffffff
```

### 3. **Absolute Positioned Overlay (Hero)**
```
Position Type: absolute
Top: 40px
Left: 40px
Right: 40px
Width Type: full (auto)
Height Type: auto
Background: rgba(0,0,0,0)
Content Scale: 110%
```

### 4. **Centered Fixed Width Header**
```
Position Type: relative
Width Type: max-width
Width Value: 1400
Height Type: auto
Padding Left/Right: 40px
```

### 5. **Floating Fixed Header with Margins**
```
Position Type: fixed
Top: 20px
Left: 20px
Right: 20px
Width Type: full (auto calculated)
Height Type: px
Height Value: 70
Background: rgba(255,255,255,0.95)
Padding: 15px all sides
Border Radius: (via custom CSS)
```

---

## 📱 Responsive Behavior

All positioning, dimension, and padding settings work seamlessly across all breakpoints:
- **XL (1200px+)** - Full customization
- **LG (990-1199px)** - Responsive max-widths apply
- **MD (768-989px)** - Tablet optimized
- **SM (640-767px)** - Large mobile
- **XS (<640px)** - Mobile with burger menu

The content scaling also adapts, ensuring the header remains usable at all screen sizes.

---

## ⚙️ Technical Implementation

### CSS Variables Used:
```css
--text-only-header-bg-color
--text-only-position-type
--text-only-position-top
--text-only-position-left
--text-only-position-right
--text-only-z-index
--text-only-width
--text-only-height
--text-only-padding-top
--text-only-padding-bottom
--text-only-padding-left
--text-only-padding-right
--text-only-content-scale
--text-only-center-vertically
```

### Applied Classes:
- `.header--text-only` - Main wrapper with positioning
- `.text-only-header-wrapper` - Content grid with padding and scaling

### Transform Logic:
Content scaling uses `transform: scale()` with compensating width/height calculations to prevent layout shift:
```css
transform: scale(var(--text-only-content-scale));
width: calc(100% / var(--text-only-content-scale));
height: calc(100% / var(--text-only-content-scale));
```

---

## 🧪 Testing Checklist

- [ ] Test all position types (relative, sticky, fixed, absolute)
- [ ] Verify background colors with transparency
- [ ] Test width types (full, vw, px, max-width)
- [ ] Test height types (auto, vh, px)
- [ ] Verify padding adjustments on all sides
- [ ] Test content scaling from 50% to 200%
- [ ] Check vertical centering toggle
- [ ] Test responsive behavior at all breakpoints
- [ ] Verify z-index layering with other page elements
- [ ] Test with different content amounts (short/long menus)

---

## 📚 Related Files

- **Section:** `f:\frstclo\sections\header.liquid`
- **Snippet:** `f:\frstclo\snippets\header-text-only.liquid`
- **Schema Location:** Lines 1167-1352 in header.liquid

---

## 🎨 Design Tips

1. **Fixed vs Sticky:** Use `sticky` for a header that appears on scroll up, `fixed` for always visible
2. **Transparency:** Semi-transparent backgrounds (0.95-0.98 opacity) work great for overlays
3. **Content Scale:** Keep between 80-120% for best readability
4. **Padding:** Mobile typically needs 15-20px, desktop can handle 30-40px
5. **Z-Index:** 100 works for most cases; increase to 1000+ if competing with modals
6. **Width:** Use max-width for a "contained" look, full for edge-to-edge

---

*Last Updated: 2024*
*Version: 2.0 - Advanced Positioning & Dimensions*
