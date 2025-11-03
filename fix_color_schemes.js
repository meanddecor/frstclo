const fs = require('fs');
const path = require('path');

// Color scheme definition for settings_schema.json
const colorSchemeSection = {
  "name": "t:settings_schema.colors.name",
  "settings": [
    {
      "type": "color_scheme_group",
      "id": "color_schemes",
      "definition": [
        {
          "type": "color",
          "id": "background",
          "label": "t:settings_schema.colors.settings.background.label",
          "default": "#000000"
        },
        {
          "type": "color_background",
          "id": "background_gradient",
          "label": "t:settings_schema.colors.settings.background_gradient.label",
          "info": "t:settings_schema.colors.settings.background_gradient.info"
        },
        {
          "type": "color",
          "id": "text",
          "label": "t:settings_schema.colors.settings.text.label",
          "default": "#FFFFFF"
        },
        {
          "type": "color",
          "id": "button",
          "label": "t:settings_schema.colors.settings.button.label",
          "default": "#000000"
        },
        {
          "type": "color",
          "id": "button_label",
          "label": "t:settings_schema.colors.settings.button_label.label",
          "default": "#FFFFFF"
        },
        {
          "type": "color",
          "id": "secondary_button_label",
          "label": "t:settings_schema.colors.settings.secondary_button_label.label",
          "default": "#000000"
        },
        {
          "type": "color",
          "id": "shadow",
          "label": "t:settings_schema.colors.settings.shadow.label",
          "default": "#121212"
        }
      ],
      "role": {
        "text": "text",
        "background": {
          "solid": "background",
          "gradient": "background_gradient"
        },
        "links": "secondary_button_label",
        "icons": "text",
        "primary_button": "button",
        "on_primary_button": "button_label",
        "primary_button_border": "button",
        "secondary_button": "background",
        "on_secondary_button": "secondary_button_label",
        "secondary_button_border": "secondary_button_label"
      }
    }
  ]
};

// Color scheme data for settings_data.json
const colorSchemesData = {
  "scheme-1": {
    "background": "#000000",
    "background_gradient": "",
    "text": "#FFFFFF",
    "button": "#FFFFFF",
    "button_label": "#000000",
    "secondary_button_label": "#FFFFFF",
    "shadow": "#121212"
  },
  "scheme-2": {
    "background": "#FFFFFF",
    "background_gradient": "",
    "text": "#000000",
    "button": "#000000",
    "button_label": "#FFFFFF",
    "secondary_button_label": "#000000",
    "shadow": "#121212"
  }
};

console.log("Updating settings_schema.json...");

// Read settings_schema.json
const schemaPath = path.join('f:', 'frstclo', 'config', 'settings_schema.json');
const schemaData = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

// Check if color scheme section already exists
const hasColorSchemes = schemaData.some(item => 
  item.settings && item.settings.length > 0 && item.settings[0].id === 'color_schemes'
);

if (!hasColorSchemes) {
  // Insert after theme_info and logo sections (position 2)
  schemaData.splice(2, 0, colorSchemeSection);
  console.log("[OK] Added color_scheme_group to settings_schema.json");
} else {
  console.log("[OK] Color scheme section already exists in settings_schema.json");
}

// Write updated settings_schema.json
fs.writeFileSync(schemaPath, JSON.stringify(schemaData, null, 2), 'utf8');

console.log("\nUpdating settings_data.json...");

// Read settings_data.json
const dataPath = path.join('f:', 'frstclo', 'config', 'settings_data.json');
const dataContent = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Check if color_schemes key exists
if (!dataContent.current) {
  dataContent.current = {};
}

if (!dataContent.current.color_schemes) {
  dataContent.current.color_schemes = colorSchemesData;
  console.log("[OK] Added color_schemes to settings_data.json");
} else {
  console.log("[OK] Color schemes already exist in settings_data.json");
}

// Write updated settings_data.json
fs.writeFileSync(dataPath, JSON.stringify(dataContent, null, 2), 'utf8');

console.log("\n[SUCCESS] Color schemes have been successfully configured!");
console.log("You can now preview your theme in the Shopify editor.");
