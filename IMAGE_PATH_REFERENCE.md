# 🖼️ Image Path Quick Reference

## Where to Add Your Images

Open `app/stanley1913/page.tsx` and find the `productData` object (around line 35).

## Example Structure

```typescript
{
  id: "20oz",
  name: "The Quencher ProTour Flip Straw Tumbler | 20 OZ",
  description: "Your everyday tumbler...",
  price: 35.0,
  weight: "0.84 lbs",
  dimensions: "5.27 x 3.54 x 7.55 in",
  variants: [
    {
      colorName: "Juniper Green",
      sku: "10-12484-0401",
      images: [
        "/images/20oz/juniper-green/main.jpg",      // 👈 REPLACE WITH YOUR PATH
        "/images/20oz/juniper-green/side.jpg",      // 👈 REPLACE WITH YOUR PATH
        "/images/20oz/juniper-green/handle.jpg"     // 👈 REPLACE WITH YOUR PATH
      ]
    }
  ]
}
```

## Currently Using Placeholder Images

The code currently uses these placeholder paths:
- `/assets/images/products/1/1.png`
- `/assets/images/products/2/1.png`
- `/assets/images/products/3/1.png`
- `/assets/images/products/4/1.png`

## Replace With Your Actual Paths

Example for 20oz Juniper Green:
```typescript
images: [
  "/images/20oz/juniper-green/main.jpg",
  "/images/20oz/juniper-green/side.jpg",
  "/images/20oz/juniper-green/top.jpg",
  "/images/20oz/juniper-green/detail.jpg"
]
```

Example for 40oz Rose Petal Motion:
```typescript
images: [
  "/images/40oz/rose-petal/main.jpg",
  "/images/40oz/rose-petal/angle.jpg",
  "/images/40oz/rose-petal/detail.jpg",
  "/images/40oz/rose-petal/lifestyle.jpg",
  "/images/40oz/rose-petal/lid-close-up.jpg"
]
```

## 💡 Pro Tips

1. **First image matters** - It's used as the thumbnail in the color selector
2. **3-6 images recommended** per variant
3. **Use consistent naming** for easy management
4. **Optimize image sizes** for web (1200x1200px recommended)
5. **Use descriptive names** like `main.jpg`, `side.jpg`, `detail.jpg`

## 📁 Recommended Folder Structure

```
public/
  images/
    14oz/
      ponderosa-blue/
        main.jpg
        side.jpg
        top.jpg
      port-pink/
        main.jpg
        side.jpg
        angle.jpg
    20oz/
      juniper-green/
        main.jpg
        side.jpg
        handle.jpg
      cherry-blossom/
        main.jpg
        angle.jpg
        detail.jpg
    30oz/
      ...
    40oz/
      ...
```

## ✅ Quick Test

After adding your images:
1. Save the file
2. Refresh the page
3. Click different sizes
4. Click different colors
5. Check that all images load correctly

Images should update automatically when you:
- Switch sizes
- Switch colors
- Click thumbnails
