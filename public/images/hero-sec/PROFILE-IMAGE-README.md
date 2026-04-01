he# Profile Image Setup 📸

## How to Add Your Profile Image:

1. **Save your image** as `profile.jpg` or `profile.png`
2. **Copy it to:** `public/images/hero-sec/`
3. **Update the hero section** reference in `src/app/components/home/hero-section/index.tsx`:
```
<Image src={"/images/hero-sec/profile.jpg"} alt="user-img" width={145} height={145} className="border-4 border-white rounded-full" />
```

## Recommended Specs:
- **Size:** 145x145px (or 290x290px for retina)
- **Format:** JPG or PNG
- **Shape:** Square (will be circular cropped)

## Current Image:
`/images/hero-sec/user-img.png` ← Replace this file!

**Drop your image in `public/images/hero-sec/` and rename to `profile.jpg` ✅**

