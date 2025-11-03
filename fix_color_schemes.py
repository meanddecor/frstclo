import json

# Color scheme definition for settings_schema.json
color_scheme_section = {
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
}

# Color scheme data for settings_data.json
color_schemes_data = {
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
}

print("Updating settings_schema.json...")
# Read settings_schema.json
with open(r'f:\frstclo\config\settings_schema.json', 'r', encoding='utf-8') as f:
    schema_data = json.load(f)

# Check if color scheme section already exists
has_color_schemes = any(
    item.get('settings', [{}])[0].get('id') == 'color_schemes' 
    for item in schema_data 
    if isinstance(item.get('settings'), list) and len(item.get('settings', [])) > 0
)

if not has_color_schemes:
    # Insert after theme_info and logo sections (position 2)
    schema_data.insert(2, color_scheme_section)
    print("[OK] Added color_scheme_group to settings_schema.json")
else:
    print("[OK] Color scheme section already exists in settings_schema.json")

# Write updated settings_schema.json
with open(r'f:\frstclo\config\settings_schema.json', 'w', encoding='utf-8') as f:
    json.dump(schema_data, f, indent=2)

print("\nUpdating settings_data.json...")
# Read settings_data.json
with open(r'f:\frstclo\config\settings_data.json', 'r', encoding='utf-8') as f:
    data_content = json.load(f)

# Check if color_schemes key exists
if 'color_schemes' not in data_content.get('current', {}):
    if 'current' not in data_content:
        data_content['current'] = {}
    data_content['current']['color_schemes'] = color_schemes_data
    print("[OK] Added color_schemes to settings_data.json")
else:
    print("[OK] Color schemes already exist in settings_data.json")

# Write updated settings_data.json
with open(r'f:\frstclo\config\settings_data.json', 'w', encoding='utf-8') as f:
    json.dump(data_content, f, indent=2)

print("\n[SUCCESS] Color schemes have been successfully configured!")
print("You can now preview your theme in the Shopify editor.")
