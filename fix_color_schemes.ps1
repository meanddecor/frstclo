# Color scheme definition for settings_schema.json
$colorSchemeSection = @{
    name = "t:settings_schema.colors.name"
    settings = @(
        @{
            type = "color_scheme_group"
            id = "color_schemes"
            definition = @(
                @{
                    type = "color"
                    id = "background"
                    label = "t:settings_schema.colors.settings.background.label"
                    default = "#000000"
                },
                @{
                    type = "color_background"
                    id = "background_gradient"
                    label = "t:settings_schema.colors.settings.background_gradient.label"
                    info = "t:settings_schema.colors.settings.background_gradient.info"
                },
                @{
                    type = "color"
                    id = "text"
                    label = "t:settings_schema.colors.settings.text.label"
                    default = "#FFFFFF"
                },
                @{
                    type = "color"
                    id = "button"
                    label = "t:settings_schema.colors.settings.button.label"
                    default = "#000000"
                },
                @{
                    type = "color"
                    id = "button_label"
                    label = "t:settings_schema.colors.settings.button_label.label"
                    default = "#FFFFFF"
                },
                @{
                    type = "color"
                    id = "secondary_button_label"
                    label = "t:settings_schema.colors.settings.secondary_button_label.label"
                    default = "#000000"
                },
                @{
                    type = "color"
                    id = "shadow"
                    label = "t:settings_schema.colors.settings.shadow.label"
                    default = "#121212"
                }
            )
            role = @{
                text = "text"
                background = @{
                    solid = "background"
                    gradient = "background_gradient"
                }
                links = "secondary_button_label"
                icons = "text"
                primary_button = "button"
                on_primary_button = "button_label"
                primary_button_border = "button"
                secondary_button = "background"
                on_secondary_button = "secondary_button_label"
                secondary_button_border = "secondary_button_label"
            }
        }
    )
}

# Color scheme data for settings_data.json
$colorSchemesData = @{
    "scheme-1" = @{
        background = "#000000"
        background_gradient = ""
        text = "#FFFFFF"
        button = "#FFFFFF"
        button_label = "#000000"
        secondary_button_label = "#FFFFFF"
        shadow = "#121212"
    }
    "scheme-2" = @{
        background = "#FFFFFF"
        background_gradient = ""
        text = "#000000"
        button = "#000000"
        button_label = "#FFFFFF"
        secondary_button_label = "#000000"
        shadow = "#121212"
    }
}

Write-Host "Updating settings_schema.json..."

# Read settings_schema.json
$schemaPath = "f:\frstclo\config\settings_schema.json"
$schemaData = Get-Content $schemaPath -Raw | ConvertFrom-Json

# Check if color scheme section already exists
$hasColorSchemes = $false
foreach ($item in $schemaData) {
    if ($item.settings -and $item.settings.Count -gt 0 -and $item.settings[0].id -eq "color_schemes") {
        $hasColorSchemes = $true
        break
    }
}

if (-not $hasColorSchemes) {
    # Convert to ArrayList for easier manipulation
    $schemaList = [System.Collections.ArrayList]@($schemaData)
    $schemaList.Insert(2, $colorSchemeSection)
    $schemaData = $schemaList
    Write-Host "[OK] Added color_scheme_group to settings_schema.json"
} else {
    Write-Host "[OK] Color scheme section already exists in settings_schema.json"
}

# Write updated settings_schema.json
$schemaData | ConvertTo-Json -Depth 20 | Set-Content $schemaPath -Encoding UTF8

Write-Host ""
Write-Host "Updating settings_data.json..."

# Read settings_data.json
$dataPath = "f:\frstclo\config\settings_data.json"
$dataContent = Get-Content $dataPath -Raw | ConvertFrom-Json

# Check if color_schemes key exists
if (-not $dataContent.current.color_schemes) {
    if (-not $dataContent.current) {
        $dataContent | Add-Member -NotePropertyName "current" -NotePropertyValue @{} -Force
    }
    $dataContent.current | Add-Member -NotePropertyName "color_schemes" -NotePropertyValue $colorSchemesData -Force
    Write-Host "[OK] Added color_schemes to settings_data.json"
} else {
    Write-Host "[OK] Color schemes already exist in settings_data.json"
}

# Write updated settings_data.json
$dataContent | ConvertTo-Json -Depth 20 | Set-Content $dataPath -Encoding UTF8

Write-Host ""
Write-Host "[SUCCESS] Color schemes have been successfully configured!"
Write-Host "You can now preview your theme in the Shopify editor."
