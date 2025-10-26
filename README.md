# E-Commerce Store - Frontend Only

A modern, conversion-focused e-commerce store built with Next.js and Tailwind CSS, inspired by the Shopify Debutify theme.

## 🚀 Features

- **Modern Design**: Clean, minimalist interface matching the Debutify theme aesthetic
- **Fully Responsive**: Mobile-first design that works seamlessly across all devices
- **Multi-Language Support**: English and French with automatic browser detection
- **Shopping Cart**: Persistent cart using localStorage - survives page refreshes
- **Product Catalog**: Browse all products or view featured items on the homepage
- **Product Details**: Detailed product pages with image gallery and quantity selectors
- **Real-time Updates**: Cart count badge and language updates instantly across the site

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Context API** for state management
- **localStorage** for cart persistence
- **Lucide React** for icons

## 🚦 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Pages

### Home Page (`/`)
- Hero section with CTA
- Featured products grid
- Features section highlighting key benefits

### Products Page (`/products`)
- Grid layout showing all products
- Product cards with images, names, prices, and "Add to Cart" buttons

### Product Detail Page (`/products/[id]`)
- Large product image
- Product information and description
- Quantity selector
- Add to Cart functionality

### Cart Page (`/cart`)
- List of cart items with images and details
- Quantity controls (increase/decrease/remove)
- Order summary with subtotal and total
- Free shipping threshold indicator

## 🛒 Cart Functionality

The cart is managed using React Context and persists data in localStorage:

- **Add to Cart**: Add products with specified quantities
- **Update Quantity**: Increase or decrease item quantities
- **Remove Items**: Delete items from cart
- **Persistent Storage**: Cart survives page refreshes
- **Real-time Updates**: Cart count badge updates across all pages

## 📱 Responsive Design

The store is fully responsive with breakpoints for mobile, tablet, and desktop devices.

## 🎨 Styling

All styling is done with Tailwind CSS utility classes following the Debutify theme's design principles:
- Clean & minimalist white background
- Elegant typography
- Smooth transitions and hover effects
- Conversion-focused design

## 📦 Dependencies

```json
{
  "next": "14.2.33",
  "react": "^18",
  "react-dom": "^18",
  "lucide-react": "latest",
  "tailwindcss": "^3.4.1"
}
```

## 🚀 Deployment

Build for production:
```bash
npm run build
npm start
```

Deploy to Vercel, Netlify, or any Node.js hosting platform.

---

**Note**: This is a frontend-only implementation using mock data and localStorage. No backend or payment processing is included.
