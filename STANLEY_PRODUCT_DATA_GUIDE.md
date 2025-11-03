# Stanley ProTour Product Page - Data Structure Guide

## 📋 Overview

The Stanley ProTour landing page uses a hierarchical data structure where **each size is a complete product** with its own variants (colors). This makes it easy to manage different sizes with different pricing, descriptions, and color options.

## 🏗️ Data Structure

```typescript
{
  sizes: [
    {
      id: "20oz",                    // Size identifier (14oz, 20oz, 30oz, 40oz, 64oz)
      name: "Product Name | 20 OZ",  // Full product name with size
      description: "...",             // Size-specific description
      price: 35.00,                   // Price for this size
      weight: "0.84 lbs",            // Weight specification
      dimensions: "5.27 x 3.54 x 7.55 in", // Dimensions
      variants: [                     // Color variants for this size
        {
          colorName: "Cherry Blossom Pink",
          sku: "10-12484-0402",
          images: [
            "/assets/images/products/1/1.png",
            "/assets/images/products/1/2.png",
            // ... more images
          ],
          inStock: true  // Optional - defaults to true if omitted
        }
      ]
    }
  ]
}
```

## 🎯 How It Works

### 1. **Size Selection**
When a user selects a size (e.g., "20oz"):
- The page displays the size-specific name, description, and price
- All available colors for that size are shown
- The first color variant is automatically selected

### 2. **Color Selection**
When a user selects a color:
- The main product image updates to show the first image of that color
- The thumbnail gallery updates with all images for that color
- The SKU is updated in the product info

### 3. **Dynamic Updates**
Everything updates automatically:
- Product name
- Description
- Price (size-based)
- Available colors
- Images
- Specifications (weight, dimensions)
- SKU

## 📸 Image Requirements

Each variant should have **3-6 images** showing:
1. Main product image (front view)
2. Side angle
3. Top/lid view
4. Handle/grip detail
5. In-use lifestyle shot (optional)
6. Additional detail shots (optional)

### Image Naming Convention
```
/assets/images/products/[product-id]/[number].png

Example:
/assets/images/products/1/1.png  (main image)
/assets/images/products/1/2.png  (side view)
/assets/images/products/1/3.png  (top view)
/assets/images/products/1/4.png  (detail)
```

## 🎨 Adding New Products

### Adding a New Size
```typescript
{
  id: "64oz",
  name: "The Quencher ProTour Flip Straw Tumbler | 64 OZ",
  description: "Maximum capacity for all-day adventures...",
  price: 50.00,
  weight: "1.5 lbs",
  dimensions: "7.0 x 4.5 x 13.0 in",
  variants: [
    // Add color variants here
  ]
}
```

### Adding a New Color to Existing Size
Just add to the `variants` array of the appropriate size:
```typescript
{
  colorName: "Midnight Blue",
  sku: "10-12484-0414",
  images: [
    "/assets/images/products/5/1.png",
    "/assets/images/products/5/2.png",
    "/assets/images/products/5/3.png",
  ],
  inStock: true
}
```

### Marking Out of Stock
Set `inStock: false` for any variant:
```typescript
{
  colorName: "Limited Edition Gold",
  sku: "10-12484-0415",
  images: [...],
  inStock: false  // This will show "Out of Stock" badge
}
```

## 🔄 Current Sample Data

The page currently includes:

### 14oz (2 colors)
- Ponderosa Shimmer Blue
- Port Shimmer Pink

### 20oz (13 colors) 
- Juniper Green
- Cherry Blossom Pink
- Hydrangea Purple
- Rose Quartz Fade (Out of Stock)
- Frost Fade
- Azure Blue Fade
- Black Fade
- Hot Coral Red
- Pomelo Yellow
- Ash Grey
- Vivid Violet Pink
- Mocha Latte Brown
- Goldenrod Orange

### 30oz (2 colors)
- Port Shimmer
- Cashmere

### 40oz (1 color)
- Rose Petal Motion

## ✨ Features

### Sticky Header
Shows current selection and price, with quick "Add to Cart" button

### Image Gallery
- Main product image with carousel
- Thumbnail navigation
- Smooth fade transitions when switching variants
- 4+ images per variant

### Variant Selector
- Size buttons (horizontal layout)
- Color cards with preview images
- Visual feedback for selection
- Out of stock indicators
- SKU display

### Product Information
- Dynamic description per size
- Star rating (4.3/5 - 244 reviews)
- Technical specifications
- Trust badges (Free Shipping, Lifetime Warranty, etc.)

### Reviews Section
- Average rating display
- Rating distribution graph
- Featured customer reviews
- Filter by star rating

### Related Products
- "You May Also Like" carousel
- 3 related products with ratings

### Additional Sections
- Product highlights with icons
- Brand story (Stanley Since 1913)
- Newsletter subscription

## 🚀 Quick Start

1. **Replace the sample images** with your actual product photos
2. **Update the `productData` object** in the page file with your SKUs and colors
3. **Adjust pricing** for each size as needed
4. **Mark variants as out of stock** when needed
5. **Test the page** - size and color switching should work automatically!

## 📱 Responsive Design

The page is fully responsive and works on:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🎨 Color Selector Features

- Shows thumbnail preview of each color (first image)
- Scrollable list for sizes with many colors (max height: 24rem)
- Clear visual indication of selected color
- Out of stock colors are disabled with visual feedback
- Color count badge ("13 available")

## 🔧 Customization

### Change Default Size
Edit line in the component:
```typescript
const [selectedSizeIndex, setSelectedSizeIndex] = useState(1); // 0=14oz, 1=20oz, 2=30oz, 3=40oz
```

### Add Video Support
Replace the video modal placeholder with actual video URL in your images or add a video field to the data structure.

### Modify Reviews
Update the `REVIEWS_DATA` object with your actual review data.

## 📊 State Management

The component uses React hooks to manage:
- `selectedSizeIndex` - Current size (0-3)
- `selectedVariantIndex` - Current color (0-n)
- `currentImageIndex` - Current gallery image (0-n)
- `quantity` - Cart quantity (1-10)
- `imageTransition` - Fade effect trigger

## 💡 Tips

1. **Keep image sizes consistent** (recommended: 1200x1200px)
2. **Use descriptive color names** that customers understand
3. **Update SKUs** to match your inventory system
4. **Set realistic prices** per size tier
5. **Write compelling descriptions** for each size
6. **Test on mobile** - the color selector is scrollable for long lists

---

**Need help?** The data structure is in `app/stanley1913/page.tsx` starting at line 35.
