# Luxury Product Section - Block Customization

Complete guide to all customizable block settings in the Luxury Product section.

---

## Product Title Block

Controls the main product heading.

### Settings:
- **Font Size**: 16-48px (default: 24px)
- **Letter Spacing**: 0-5px (default: 1px)
- **Bottom Margin**: 0-48px (default: 24px)
- **Uppercase**: Toggle to force uppercase text (default: off)
- **Text Color**: Custom color (leave empty for theme default)

### Usage Tips:
- Larger font sizes (32-48px) work well for hero products
- Increase letter spacing (2-3px) for luxury aesthetic
- Use uppercase for bold statement pieces

---

## Product Type Badge Block

Displays product category in a bordered box.

### Settings:
- **Font Size**: 10-20px (default: 14px)
- **Vertical Padding**: 4-16px (default: 8px)
- **Horizontal Padding**: 8-32px (default: 16px)
- **Border Width**: 1-4px (default: 2px)
- **Bottom Margin**: 0-48px (default: 24px)
- **Text Color**: Custom color (leave empty for theme default)
- **Border Color**: Custom color (leave empty for theme default)
- **Background Color**: Custom color (default: transparent)

### Usage Tips:
- Keep padding balanced for clean badge appearance
- Use heavier borders (3-4px) for emphasis
- Match brand colors with background/border combinations

---

## Product Description Block

Shows the full product description from Shopify.

### Settings:
- **Font Size**: 12-20px (default: 14px)
- **Line Height**: 1-2.5 (default: 1.6)
- **Bottom Margin**: 0-48px (default: 0px)
- **Text Color**: Custom color (leave empty for theme default)

### Usage Tips:
- Line height 1.5-1.8 is optimal for readability
- Larger font (16-18px) for shorter descriptions
- Use 0 margin when followed by other text blocks

---

## Custom Text Block

Add custom text content (materials, care instructions, etc.).

### Settings:
- **Text**: Multi-line text input
- **Font Size**: 12-20px (default: 14px)
- **Line Height**: 1-2.5 (default: 1.6)
- **Bottom Margin**: 0-48px (default: 8px)
- **Text Color**: Custom color (leave empty for theme default)

### Usage Tips:
- Use for materials, dimensions, care instructions
- Multiple blocks can be added for different info types
- Keep text concise for better mobile experience

---

## Product ID (SKU) Block

Displays the product SKU/variant code.

### Settings:
- **Font Size**: 10-18px (default: 14px)
- **Top Margin**: 0-32px (default: 8px)
- **Text Color**: Custom color (leave empty for theme default)
- **Prefix Text**: Text before SKU (default: "Product ID:")

### Usage Tips:
- Smaller font size (12px) keeps it subtle
- Change prefix to "SKU:", "Item #:", or other terms
- Use lighter text color to de-emphasize

---

## Block Order & Display

### Desktop (Left Column):
Blocks display in the order you arrange them in theme editor:
1. Product Title
2. Product Type Badge
3. Product Description
4. Custom Text blocks
5. Product ID (SKU)

### Mobile:
- Title, Type, and Description show **above** gallery
- Custom Text and SKU show **below** add to cart button
- All blocks respect their styling settings

---

## Color Customization

All blocks support custom colors with these behaviors:

### When Color is Set:
- Block uses your custom color
- Overrides theme defaults
- Consistent across desktop and mobile

### When Color is Empty:
- Block uses theme's default foreground color
- Automatically adapts to theme changes
- Recommended for theme consistency

---

## Common Styling Scenarios

### Minimal & Clean
```
Title: 20px, no uppercase, 1px spacing
Type: 12px, thin border (1px), minimal padding (6px/12px)
Description: 14px, 1.6 line height
SKU: 12px, gray color
```

### Bold & Luxury
```
Title: 32px, uppercase, 2px spacing
Type: 16px, thick border (3px), generous padding (12px/24px)
Description: 16px, 1.8 line height
SKU: Hidden or very subtle
```

### Balanced & Professional
```
Title: 24px (default), no uppercase, 1px spacing
Type: 14px (default), 2px border, standard padding
Description: 14px, 1.6 line height
SKU: 14px, "Product ID:" prefix
```

---

## Responsive Behavior

All block settings apply to **both desktop and mobile**:
- Font sizes scale proportionally
- Margins/padding adjust automatically
- Colors remain consistent
- Line heights optimize for screen size

---

## Best Practices

### Typography Hierarchy
1. **Title**: Largest (24-48px)
2. **Type Badge**: Medium (12-16px)
3. **Description**: Standard (14-16px)
4. **SKU**: Smallest (12-14px)

### Spacing Rules
- More margin between unrelated blocks (24-32px)
- Less margin between related content (8-16px)
- Zero margin when blocks flow together

### Color Strategy
- Use theme defaults for consistency
- Add custom colors for emphasis only
- Keep contrast high for readability
- Test on both light and dark backgrounds

### Performance
- Avoid excessive margins that create dead space
- Keep text concise for faster mobile loading
- Use line height 1.4-1.8 for optimal reading

---

## Integration with Section Settings

Block settings work with section-level settings:

### Global Theme Settings:
- Font families (heading/body)
- Button radius
- Color scheme

### Section Settings:
- Layout columns
- Variant button styling
- Cart button colors
- Image spacing

### Block Settings:
- Individual element styling
- Text formatting
- Custom content
- Per-block colors

All three levels combine to create the final appearance!
