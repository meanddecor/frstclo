# Luxury Product Section

A premium, three-column product page layout inspired by high-end fashion e-commerce sites.

## Files Created

1. **`sections/main-product-luxury.liquid`** - Main section template
2. **`assets/main-product-luxury.css`** - Styling for the luxury layout
3. **`assets/main-product-luxury.js`** - JavaScript for mobile navigation and variant selection
4. **`templates/product.luxury.json`** - Product template that uses the luxury section

## Features

### Desktop Layout (1024px+)
- **Three-column grid layout**:
  - **Left Column (350px)**: Product title, type badge, description
  - **Middle Column (flexible)**: Vertical scrolling image gallery
  - **Right Column (230px)**: Variant selector and add to cart button
- **Sticky positioning** on left and right columns (centered vertically)
- **Smooth scrolling** image gallery with custom scrollbar
- Product type displayed as a bordered badge
- Clean, minimal design with uppercase typography

### Mobile Layout (≤1024px)
- **Single column layout** with optimized order:
  1. Horizontal scrolling image gallery
  2. Navigation dots and arrows
  3. Product info (title, type, description)
  4. Purchase options (variants, price, add to cart)
- **Touch-friendly** horizontal image scrolling
- **Navigation controls**: Previous/next arrows and dot indicators
- **Snap scrolling** for precise image navigation
- Description moved below the add to cart button

## Global Settings Applied

The section respects global theme settings from `settings_schema.json`:

- **Colors**: `color_background`, `color_foreground`, `color_button`, `color_button_text`
- **Typography**: `heading_font`, `body_font`, `heading_letter_spacing`
- **Buttons**: `button_radius`
- **Layout**: `page_width`

## How to Use

### 1. Assign Template to Product

In the Shopify admin:
1. Go to **Products** → Select a product
2. In the **Theme templates** section
3. Select **luxury** from the template dropdown
4. Save the product

### 2. Customize Blocks

The section supports the following blocks:

- **Title**: Product name (uppercase, bold)
- **Product Type Badge**: Displays product type in a bordered box
- **Description**: Product description (shown on left on desktop, below cart on mobile)
- **Custom Text**: Additional custom text (e.g., "Main material: 100% leather")
- **SKU**: Product ID display

### 3. Section Settings

- **Top Padding**: 0-100px (default: 32px)
- **Bottom Padding**: 0-100px (default: 32px)

## Customization

### Changing Colors

Colors are controlled via global theme settings. To customize:
1. Go to **Theme Customizer** → **Theme Settings**
2. Adjust color variables:
   - `color_background`: Page background
   - `color_foreground`: Text and borders
   - `color_button`: Button background
   - `color_button_text`: Button text color

### Changing Layout Dimensions

Edit `assets/main-product-luxury.css`:

```css
/* Desktop grid columns */
.luxury-product__grid {
  grid-template-columns: 350px 1fr 230px; /* left, middle, right */
  gap: 2rem;
}
```

### Changing Typography

Edit the title styling in `assets/main-product-luxury.css`:

```css
.luxury-product__title {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;
}
```

## JavaScript Functionality

### Variant Selection
- Automatic variant switching based on option selection
- Price updates in real-time
- Button text updates with selected variant price
- URL updates with `?variant=` parameter
- Sold out state handling

### Mobile Gallery Navigation
- Automatic dot indicator creation
- Touch scroll tracking
- Arrow button navigation
- Scroll position synchronization with dots

### Add to Cart
- AJAX cart integration
- Loading state with spinner
- Error handling
- Cart drawer/notification support

## Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile browsers**: iOS Safari 12+, Chrome Mobile
- **Features used**:
  - CSS Grid
  - Flexbox
  - Scroll snap
  - Custom properties (CSS variables)
  - ES6+ JavaScript

## Accessibility

- Semantic HTML structure
- ARIA labels on navigation buttons
- Keyboard navigation support
- Screen reader friendly labels
- Focus management

## Performance

- **Lazy loading** on images
- **Deferred JavaScript** loading
- **Optimized image sizes** (1600px width for gallery)
- **CSS-only** scrollbar styling
- **Minimal JavaScript** for core functionality

## Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 750px - 1024px
- **Mobile**: Below 750px

## Notes

- Gallery supports images, videos, external videos, and 3D models
- Placeholder image shown if product has no media
- Integrates with existing Shopify product forms
- Compatible with cart drawer and notification systems
- Supports structured data (JSON-LD) for SEO

## Troubleshooting

### Gallery not scrolling on mobile
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify `main-product-luxury.js` is loaded

### Variants not switching
- Check that product has variants defined
- Verify variant options are properly configured
- Ensure product form is properly initialized

### Styling issues
- Clear browser cache
- Verify `main-product-luxury.css` is loaded
- Check for CSS conflicts with other stylesheets

## Future Enhancements

Potential improvements:
- Image zoom on hover/click
- Video autoplay options
- Gallery thumbnail navigation
- Quick view modal
- Size guide integration
- Recently viewed products
- Social sharing buttons
