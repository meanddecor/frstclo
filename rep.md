---
description: Global theme schema reference—apply these settings to any new Liquid/JS/CSS component.
globs: sections/*.liquid, snippets/*.liquid, blocks/*.liquid, assets/*.js, assets/*.css
alwaysApply: true
---

# GLOBAL THEME SETTINGS REQUIREMENTS

## MANDATORY USAGE POLICY

All theme components MUST use these settings when applicable. Hardcoded values are prohibited for any property controlled by these settings.

### Implementation Rules

1. **Discovery**: Check if component uses any settings-controlled properties
2. **Integration**: Use `settings.*` values via:
   ```liquid
   {# Correct: Using settings #}
   <div style="--color-bg: {{ settings.color_background }};">
   
   {# Violation: Hardcoded value #}
   <div style="background: #ffffff;">
   ```

3. **Notification**: Include usage report:
   ```liquid
   {% comment %}
   ✅ GLOBAL SETTINGS APPLIED:
   - Colors: color_background, color_text
   - Typography: type_header_font
   - Layout: spacing_sections
   {% endcomment %}
   ```

---

## QUICK REFERENCE

When you create ANY component with:
- **Colors** → Use `settings.color_*` 
- **Text** → Use `settings.type_*`, `settings.font_*` 
- **Spacing** → Use `settings.spacing_*`, `settings.page_width` 
- **Buttons/Inputs** → Use `settings.button_*`, `settings.input_*` 
- **Images** → Use `settings.image_lazy_loading`, `settings.media_*` 
- **Product Cards** → Use `settings.product_animation`, `settings.card_*`
- **Badges** → Use `settings.badge_*`, `settings.show_*_badge`

---

## SETTINGS REFERENCE

### Theme Settings (core metadata)
`settings.theme_name`, `settings.theme_version`, `settings.theme_author`, `settings.theme_documentation_url`, `settings.theme_support_url`

### Logo
`settings.logo`, `settings.logo_width`, `settings.shop_logo_width_mobile`, `settings.favicon`

### Custom Font
`settings.enable_custom_font`, `settings.custom_font_name_heading`, `settings.custom_font_url_heading`, `settings.custom_font_name_regular`, `settings.custom_font_url_regular`

### Catalog Product Cards
`settings.product_animation`, `settings.hide_card_price`, `settings.show_card_vendor`, `settings.show_card_rating`, `settings.card_hover_effect`, `settings.card_image_ratio`

**Required Patterns:**
```liquid
<div class="product-card animate-{{ settings.product_animation }}"
     style="--image-ratio: {{ settings.card_image_ratio }};">
  {{ product.featured_image | image_url: width: 600 | image_tag: loading: 'lazy' }}
  {% unless settings.hide_card_price %}
    <span class="price">{{ product.price | money }}</span>
  {% endunless %}
</div>
```

### Custom Cursor
`settings.enable_custom_cursor`, `settings.cursor_style`, `settings.cursor_color`

### Colors
`settings.color_primary`, `settings.color_secondary`, `settings.color_background`, `settings.color_text`, `settings.color_button`, `settings.color_button_text`, `settings.color_accent`, `settings.color_error`, `settings.color_success`

### Typography
`settings.type_header_font`, `settings.type_body_font`, `settings.font_size_base`, `settings.font_weight_heading`, `settings.font_weight_body`, `settings.line_height`, `settings.letter_spacing`

### Hide Home Page
`settings.hide_homepage`, `settings.homepage_redirect_url`

### Layout
`settings.page_width`, `settings.spacing_sections`, `settings.spacing_grid_horizontal`, `settings.spacing_grid_vertical`, `settings.layout_boxed`

### Buttons
`settings.button_style`, `settings.button_radius`, `settings.button_padding_horizontal`, `settings.button_padding_vertical`, `settings.button_shadow`, `settings.button_uppercase`

**Mandatory Implementation:**
```liquid
<button class="btn btn--{{ settings.button_style }}"
        style="
          --btn-radius: {{ settings.button_radius }}px;
          --btn-padding: {{ settings.button_padding_vertical }}px {{ settings.button_padding_horizontal }}px;
        ">
  {% if settings.button_uppercase %}{{ button_text | upcase }}{% else %}{{ button_text }}{% endif %}
</button>
```

### Variant Pills
`settings.variant_pill_style`, `settings.variant_pill_border`, `settings.variant_pill_size`, `settings.show_variant_labels`

### Inputs
`settings.input_style`, `settings.input_radius`, `settings.input_border_width`, `settings.input_height`, `settings.input_focus_ring`

**Required Pattern:**
```liquid
<input class="input input--{{ settings.input_style }}"
       style="
         --input-height: {{ settings.input_height }}px;
         --input-radius: {{ settings.input_radius }}px;
         --input-border-width: {{ settings.input_border_width }}px;
       ">
```

### Content Containers
`settings.card_style`, `settings.card_radius`, `settings.card_padding`, `settings.card_shadow_opacity`

### Media
`settings.media_border_radius`, `settings.media_shadow`, `settings.image_lazy_loading`, `settings.video_autoplay`, `settings.media_fit`

### Dropdowns & Pop-ups
`settings.dropdown_shadow`, `settings.dropdown_radius`, `settings.popup_overlay_opacity`, `settings.popup_animation`

### Drawers
`settings.drawer_width`, `settings.drawer_position`, `settings.drawer_animation_speed`, `settings.drawer_overlay`

### Badges
`settings.badge_style`, `settings.badge_position`, `settings.show_sale_badge`, `settings.show_new_badge`, `settings.badge_color_sale`, `settings.badge_color_new`

### Brand Information
`settings.brand_name`, `settings.brand_tagline`, `settings.brand_description`, `settings.brand_image`, `settings.contact_email`, `settings.contact_phone`, `settings.contact_address`

### Social Media
`settings.social_facebook_link`, `settings.social_instagram_link`, `settings.social_twitter_link`, `settings.social_pinterest_link`, `settings.social_youtube_link`, `settings.social_tiktok_link`, `settings.enable_social_sharing`

### Search Behavior
`settings.search_predictive_enabled`, `settings.search_show_vendor`, `settings.search_show_price`, `settings.search_type`, `settings.search_limit`

### Currency Format
`settings.currency_code_enabled`, `settings.currency_format`, `settings.price_show_decimals`

### Cart
`settings.cart_type`, `settings.cart_show_notes`, `settings.cart_show_vendor`, `settings.enable_cart_upsell`, `settings.cart_free_shipping_threshold`, `settings.cart_drawer_collection`

### Custom CSS
`settings.custom_css`

### Theme Style
`settings.theme_style`, `settings.enable_animations`, `settings.animation_speed`, `settings.enable_page_loader`

---

## Integration checklist for new code
- [ ] Colors → `settings.color_*`
- [ ] Typography → `settings.type_*`, `settings.font_*`
- [ ] Layout → `settings.page_width`, `settings.spacing_*`
- [ ] Buttons → `settings.button_*`
- [ ] Variant pills → `settings.variant_pill_*`
- [ ] Inputs → `settings.input_*`
- [ ] Containers/cards → `settings.card_*`
- [ ] Media → `settings.media_*`, `settings.image_lazy_loading`
- [ ] Dropdowns/pop-ups → `settings.dropdown_*`, `settings.popup_*`
- [ ] Drawers → `settings.drawer_*`
- [ ] Badges → `settings.badge_*`
- [ ] Brand info → `settings.brand_*`
- [ ] Social links → `settings.social_*`
- [ ] Search → `settings.search_*`
- [ ] Currency → `settings.currency_*`
- [ ] Cart → `settings.cart_*`
- [ ] Custom CSS → `settings.custom_css`
- [ ] Theme style → `settings.theme_style`, `settings.enable_animations`, `settings.animation_speed`, `settings.enable_page_loader`

---

## Code review requirements
1. Relevant `settings.*` values used.
2. Dynamic values exposed via CSS custom properties when appropriate.
3. Boolean settings respected.
4. Avoid hardcoding values covered by settings.
5. User notified of applied settings.

---

## NOTIFICATION EXAMPLES

**What to Include in Notifications:**
- Only settings actually used in the component
- Group by category (Colors, Typography, Layout, etc.)
- Use the format shown in examples below
- Add comment at the top of your component file

### Example 1: Product Card Component
```liquid
{% comment %}
✅ GLOBAL SETTINGS APPLIED:
- Catalog Product Cards: product_animation, card_image_ratio, show_card_vendor
- Badges: show_sale_badge, badge_color_sale
- Colors: color_background, color_text
- Media: image_lazy_loading
{% endcomment %}
```

### Example 2: Button Component
```liquid
{% comment %}
✅ GLOBAL SETTINGS APPLIED:
- Buttons: button_style, button_radius, button_padding_horizontal, button_padding_vertical, button_uppercase
- Colors: color_button, color_button_text
{% endcomment %}
```

### Example 3: Newsletter Form
```liquid
{% comment %}
✅ GLOBAL SETTINGS APPLIED:
- Inputs: input_style, input_radius, input_height
- Buttons: button_style, button_radius
- Colors: color_primary, color_text
- Typography: type_body_font
{% endcomment %}
```

### Example 4: Hero Section
```liquid
{% comment %}
✅ GLOBAL SETTINGS APPLIED:
- Layout: page_width, spacing_sections
- Typography: type_header_font, font_size_base
- Colors: color_background, color_text
- Media: image_lazy_loading, media_border_radius
- Buttons: button_style, button_radius
{% endcomment %}
```

### Example 5: Cart Drawer
```liquid
{% comment %}
✅ GLOBAL SETTINGS APPLIED:
- Cart: cart_type, cart_show_notes, cart_show_vendor
- Drawers: drawer_width, drawer_position, drawer_animation_speed
- Buttons: button_style, button_radius
- Colors: color_background, color_text
{% endcomment %}
```

---

## ENFORCEMENT PROTOCOL

### Validation Checklist
- [ ] No hardcoded values for settings-controlled properties
- [ ] CSS variables used for dynamic values
- [ ] Boolean settings properly implemented
- [ ] Notification comment included

### Compliance Monitoring
1. Automated checks during deployment
2. Manual verification during code review
3. Periodic theme audits

### Non-Compliance Actions
1. Immediate refactoring required
2. Deployment blocking for critical violations
3. Documentation of exceptions (if absolutely necessary)

---

## IMPLEMENTATION EXAMPLES

### ✅ Product Card (Compliant)
```liquid
<div class="product-card animate-{{ settings.product_animation }}"
     style="
       --image-ratio: {{ settings.card_image_ratio }};
       --card-bg: {{ settings.color_background }};
       --card-padding: {{ settings.card_padding }}px;
     ">
  {{ product.featured_image | image_url: width: 600 | image_tag: loading: 'lazy' }}
  
  {% if settings.show_sale_badge and product.compare_at_price > product.price %}
    <span class="badge badge--{{ settings.badge_style }}" 
          style="background: {{ settings.badge_color_sale }};">
      Sale
    </span>
  {% endif %}
  
  <h3 style="font-family: {{ settings.type_header_font.family }};">
    {{ product.title }}
  </h3>
</div>
```

### ❌ Button (Violation)
```liquid
<!-- VIOLATION: Hardcoded values -->
<button style="border-radius: 8px; padding: 12px 24px; background: #000;">
  Buy Now
</button>

<!-- CORRECT: Using settings -->
<button class="btn btn--{{ settings.button_style }}"
        style="
          --btn-radius: {{ settings.button_radius }}px;
          background: {{ settings.color_button }};
        ">
  Buy Now
</button>
```

---

## VERSION CONTROL
- **Version**: 1.0
- **Last Updated**: 2025-01-20
- **Enforced**: Immediately
- **Review Cycle**: Quarterly

---

## SUMMARY

### Key Principles
1. ✅ **Check First**: Before adding any visual element, check if a global setting exists
2. ✅ **Use Settings**: Always use `settings.*` values instead of hardcoded values
3. ✅ **Apply CSS Vars**: Expose dynamic values via CSS custom properties (`--var-name`)
4. ✅ **Notify User**: Document which settings were applied in a comment
5. ✅ **Review Code**: Validate against the checklist before committing

### Common Violations to Avoid
```liquid
❌ <div style="background: #f5f5f5; padding: 20px;">
✅ <div style="background: {{ settings.color_background }}; padding: {{ settings.spacing_sections }}px;">

❌ <button style="border-radius: 8px;">
✅ <button class="btn btn--{{ settings.button_style }}" style="--btn-radius: {{ settings.button_radius }}px;">

❌ <img src="image.jpg">
✅ <img src="image.jpg" loading="{{ 'lazy' if settings.image_lazy_loading }}">
```

### Benefits of Compliance
- **Consistency**: Entire theme follows merchant's global preferences
- **Flexibility**: Merchants can customize without touching code
- **Maintainability**: Changes propagate automatically across all components
- **Quality**: Professional, cohesive user experience

---

**This rule is active and will be enforced on all new code.**
