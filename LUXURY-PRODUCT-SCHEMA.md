# Luxury Product Section - Schema Settings

## Customizable Settings

### Variant Buttons
Control the appearance and sizing of variant selector buttons (S, M, L, XL, etc.):

- **Vertical Padding**: 4-20px (default: 8px)
- **Horizontal Padding**: 8-32px (default: 12px)
- **Font Size**: 10-18px (default: 13px)
- **Minimum Width**: 30-80px (default: 40px)
- **Background Color**: Default #ffffff (white)
- **Text Color**: Default #000000 (black)
- **Border Color**: Default #000000 (black)
- **Hover Background**: Default #f0f0f0 (light gray)
- **Active Background**: Default #000000 (black)
- **Active Text Color**: Default #ffffff (white)

### Add to Cart Button
Customize the main call-to-action button:

- **Background Color**: Default #000000 (black)
- **Text Color**: Default #ffffff (white)
- **Hover Background**: Default #333333 (dark gray)

### Layout (Desktop)
Adjust the three-column layout proportions:

- **Left Column Width**: 250-450px (default: 350px)
  - Contains product title, type badge, description
- **Right Column Width**: 200-350px (default: 230px)
  - Contains variant selector, price, add to cart
- **Column Gap**: 1-5rem (default: 2rem)
  - Space between the three columns
- **Image Gap**: 1-5rem (default: 2rem)
  - Space between images in the gallery

### Section Padding
Control vertical spacing:

- **Top Padding**: 0-100px (default: 32px)
- **Bottom Padding**: 0-100px (default: 32px)

## Global Theme Settings Integration

The section automatically inherits these from your theme settings:

- **Button Border Radius**: From `settings.button_radius`
- **Typography**: 
  - Headings from `settings.type_header_font`
  - Body text from `settings.type_body_font`
  - Letter spacing from `settings.heading_letter_spacing`
- **Colors**:
  - Background from `settings.color_background`
  - Foreground from `settings.color_foreground`
- **Image Loading**: From `settings.image_lazy_loading`

## Responsive Behavior

### Desktop (>1024px)
- Three-column grid layout
- Left and right columns sticky (vertically centered)
- Images flow naturally in middle column
- Page scrolls, not container

### Mobile (≤1024px)
- Single column stacked layout
- Horizontal scrolling image gallery with snap points
- Navigation dots and arrows
- Product info on top
- Purchase options below gallery
- Description shown after add to cart button

## How to Customize

1. Go to **Theme Editor**
2. Navigate to a product page using the luxury template
3. Select the **Luxury Product** section
4. Adjust settings in the sidebar:
   - **Variant Buttons**: Change size, colors, and spacing
   - **Add to Cart Button**: Customize colors
   - **Layout**: Adjust column widths and gaps
   - **Section Padding**: Add vertical spacing

## Best Practices

### Button Sizing
- **Small buttons**: 6-8px vertical, 10-12px horizontal
- **Medium buttons** (default): 8-10px vertical, 12-16px horizontal
- **Large buttons**: 12-16px vertical, 20-28px horizontal

### Color Combinations
- **High contrast** (default): Black/white for clarity
- **Brand colors**: Match your brand identity
- **Subtle**: Gray tones for minimalist look

### Layout Proportions
- **Narrow info**: 250-300px columns for more image focus
- **Balanced** (default): 350px left, 230px right
- **Wide info**: 400-450px columns for detailed descriptions

## Technical Notes

- All colors support hex codes (#000000) and transparency
- Layout settings only affect desktop (>1024px)
- Mobile layout is optimized and cannot be adjusted
- Button radius inherits from global theme settings
- Changes are live-previewed in the theme editor
