---
name: review-android
description: >
  Captures screenshots of the Android app on 3 device profiles (small_phone,
  medium_phone, medium_tablet) and batch-reviews them with the vision agent.
  Use when the user wants to review the Android app's visual quality, responsive
  layout, or cross-device appearance.
---

# Review Android

Captures 3 viewport screenshots of the Android app and batch-reviews them with
the vision agent.

## Target profiles

| Profile | Description | Why |
|---|---|---|
| `small_phone` | Small phone screen | Smallest form factor, tests spacing/tight layouts |
| `medium_phone` | Standard phone | Primary viewport (matches Pixel 10 Pro XL) |
| `medium_tablet` | Tablet | Tests the ≥840dp breakpoint (arrows vs counter) |

## Capture workflow

### 1. Build the debug APK

```bash
cd android && ./gradlew assembleDebug
```

### 2. For each profile

```bash
# Create AVD (skip if exists)
android emulator create <profile>

# Start emulator
android emulator start <profile>

# Wait for boot
adb wait-for-device
adb shell 'while [ -z "$(getprop sys.boot_completed)" ]; do sleep 1; done'

# Install and launch
android run --apks app/build/outputs/apk/debug/app-debug.apk

# Wait for render
sleep 5

# Capture screenshot
adb shell screencap -p /sdcard/screenshot.png
adb pull /sdcard/screenshot.png /tmp/opencode/android-<profile>.png

# Stop emulator
android emulator stop <profile>
```

### 3. Send to vision agent

After all 3 screenshots are captured, launch the vision agent with a prompt
that includes all 3 image paths and asks for:

1. Per-profile review (layout, typography, contrast, accessibility)
2. Per-profile grade (A–F)
3. Cross-profile overall grade
4. Systemic vs profile-specific issues

Example vision agent prompt:

```
Please read and analyse THREE screenshots of the Android portfolio app at
different device profiles.

Image 1 — Small phone: /tmp/opencode/android-small_phone.png
Image 2 — Medium phone: /tmp/opencode/android-medium_phone.png
Image 3 — Medium tablet: /tmp/opencode/android-medium_tablet.png

For each profile, review layout, typography, contrast, UI elements, responsive
behaviour, and accessibility. Then provide per-profile grades (A–F), an overall
cross-profile grade, and a summary of systemic vs profile-specific issues.
```

## Output

The skill returns the vision agent's full report including per-profile grades
and an overall cross-profile grade.
