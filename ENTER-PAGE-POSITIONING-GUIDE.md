# Enter Page Positioning System - User Guide

## 🎉 What Changed?

Your enter-page positioning system has been **completely optimized** for smooth, predictable movement!

### Problems Fixed ✅

1. **Unpredictable movement** - Elements now move along clear X/Y axes
2. **Oversized selection boxes** - Blue outline now wraps content tightly  
3. **Non-responsive positioning** - Same position works across ALL screen sizes
4. **Conflicting transforms** - No more weird padding behavior

---

## 🎯 How It Works Now

### Viewport-Based Grid System

All positions use **viewport units** (`vw` for width, `vh` for height):
- `1vw` = 1% of screen width
- `1vh` = 1% of screen height
- These scale automatically on mobile, tablet, desktop, XL screens!

```
Screen Layout (viewport units):
0vw ────────────── 50vw ─────────────── 100vw
 ↓                   ↓                      ↓
┌─────────────────────────────────────────┐  0vh
│                                         │   ↓
│                                         │
│                  CENTER                 │  50vh
│                 (50vw, 50vh)            │   ↓
│                                         │
└─────────────────────────────────────────┘  100vh
```

---

## 📍 Using Preset Positions

**9 preset positions available:**

```
top-left        top-center       top-right
   (5vw, 5vh)      (50vw, 5vh)       (95vw, 5vh)

center-left     center           center-right
   (5vw, 50vh)     (50vw, 50vh)      (95vw, 50vh)

bottom-left     bottom-center    bottom-right
   (5vw, 95vh)     (50vw, 95vh)      (95vw, 95vh)
```

### How to Use:
1. Add a block (Logo, Menu, Button, etc.)
2. Select a **Position Preset** from dropdown
3. **Done!** It will maintain that position across all screen sizes

---

## 🎨 Using Custom Positions

Want exact control? Use custom positioning!

### The Old Way (❌ Don't use anymore):
- Top: 20%, Left: 30%, Right: 10%, Bottom: 15%
- Creates unpredictable movement
- Different values needed for mobile

### The New Way (✅ Use this):
**Think in viewport coordinates:**
- **Left slider** (0-100) = X position in viewport width (vw)
- **Top slider** (0-100) = Y position in viewport height (vh)

### Examples:

**Quarter from left, half from top:**
```
Custom Left: 25
Custom Top: 50
→ Result: Element at (25vw, 50vh)
```

**Three-quarters from left, near bottom:**
```
Custom Left: 75
Custom Top: 85
→ Result: Element at (75vw, 85vh)
```

**Centered:**
```
Custom Left: 50
Custom Top: 50
→ Result: Element at (50vw, 50vh) - perfect center!
```

---

## 📱 Mobile/Responsive Behavior

### **You don't need separate mobile positions anymore!**

The viewport units scale automatically:
- On desktop: 50vw = center of wide screen
- On mobile: 50vw = center of narrow screen
- **Same relative position, different pixel values**

### When Mobile Settings Are Ignored:
All the old mobile position overrides have been removed because they're not needed. The system is now truly responsive by default.

---

## 🔧 How to Position Elements

### Step-by-Step:

1. **Add a block** in Theme Customizer
2. **Choose positioning method:**

   **Option A: Use Preset** (Recommended for most cases)
   - Select from "Position Preset" dropdown
   - Choose: top-left, center, bottom-right, etc.
   - ✅ Done! Works on all screens

   **Option B: Use Custom Position** (For exact placement)
   - Check "Use Custom Position"
   - Adjust "Left Position" slider (0-100) for X axis
   - Adjust "Top Position" slider (0-100) for Y axis
   - Think of it as coordinates on a grid

3. **Preview** - The blue selection box should now fit your content tightly
4. **Move it** - Adjusting sliders moves element smoothly along X/Y axes

---

## 💡 Pro Tips

### Tight Bounding Boxes
Elements now use `fit-content` sizing, so the blue outline matches content exactly. No more oversized boxes!

### Smooth Movement
When you adjust sliders, elements move predictably:
- **Left/Right slider** = moves horizontally only
- **Top/Bottom slider** = moves vertically only
- No weird diagonal shifting!

### Element Centering
All elements auto-center on their position point:
- Logo at (50, 50) → center of logo is at center of screen
- Menu at (75, 25) → center of menu is at 75% right, 25% down

### Testing Responsiveness
1. Position element where you want it on desktop
2. Open Chrome DevTools (F12)
3. Toggle device toolbar (Ctrl+Shift+M)
4. Switch between Mobile/Tablet/Desktop
5. Element maintains same relative position! 🎉

---

## 🐛 Troubleshooting

### "Element is in a different spot on mobile"
- This shouldn't happen anymore with the new system
- Make sure you're using the updated version (check the comment at top of enter-page.liquid)
- Old mobile position overrides have been removed

### "Blue box is bigger than content"
- This is fixed! Elements now use `fit-content`
- Refresh your theme editor if you still see oversized boxes

### "Element moves weird when I adjust sliders"
- Slider values now map directly to viewport coordinates
- Left: 0 = left edge, 50 = center, 100 = right edge
- Top: 0 = top edge, 50 = middle, 100 = bottom

---

## 📊 Migration from Old System

If you had custom positions set up before:

**Old System:**
- Used percentages with top/left/right/bottom
- Required separate mobile overrides
- Unpredictable with transforms

**New System:**
- Uses viewport units with transforms
- No mobile overrides needed
- Predictable X/Y movement

**Your existing custom positions** will automatically convert. The sliders represent:
- `custom_left` → X coordinate in viewport width
- `custom_top` → Y coordinate in viewport height

---

## 🎓 Quick Reference

| What You Want | Preset to Use | Or Custom Values |
|---------------|---------------|------------------|
| Top left corner | `top-left` | Left: 5, Top: 5 |
| Center of screen | `center` | Left: 50, Top: 50 |
| Bottom right | `bottom-right` | Left: 95, Top: 95 |
| 1/3 from left, centered | - | Left: 33, Top: 50 |
| Far right, 1/4 down | - | Left: 90, Top: 25 |

---

## ✨ Summary

**The new system gives you:**
1. ✅ Smooth, predictable X/Y movement (no more weird padding)
2. ✅ Tight bounding boxes (blue outline fits content)
3. ✅ True responsiveness (same position across all screens)
4. ✅ Easier positioning (viewport coordinate grid)
5. ✅ No mobile overrides needed (automatic scaling)

**Result:** Professional, consistent enter page layouts that work beautifully on every device! 🎉
