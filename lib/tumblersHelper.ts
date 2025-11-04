import { tumblers } from './tumblers';

export interface TumblerProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  category: string;
  colorName: string;
  sku: string;
  weight: string;
  dimensions: string;
}

export function getFeaturedTumblers(): TumblerProduct[] {
  // Find the 0.89L product (30OZ) which has the correct images
  const product089L = tumblers.sizes.find((size) => size.id === "0.89L");
  
  if (!product089L) {
    return [];
  }
  
  // Get first 4 variants of the 0.89L product and create separate products for each
  return product089L.variants.slice(0, 4).map((variant, index) => ({
    id: 100 + index, // Start from 100 to avoid conflicts
    name: product089L.name,
    price: product089L.price,
    image: variant.images[0] || '',
    images: variant.images || [],
    description: product089L.description,
    category: "Stanley Tumblers",
    colorName: variant.colorName,
    sku: variant.sku,
    weight: product089L.weight,
    dimensions: product089L.dimensions
  }));
}

export function getChristmasTumblers(): TumblerProduct[] {
  // Find the 0.89L product (30OZ) which has the correct images
  const product089L = tumblers.sizes.find((size) => size.id === "0.89L");
  
  if (!product089L) {
    return [];
  }
  
  // Get variants 5-8 (different from the featured ones)
  return product089L.variants.slice(4, 8).map((variant, index) => ({
    id: 200 + index, // Start from 200 to avoid conflicts
    name: product089L.name,
    price: product089L.price,
    image: variant.images[0] || '',
    images: variant.images || [],
    description: product089L.description,
    category: "Stanley Tumblers",
    colorName: variant.colorName,
    sku: variant.sku,
    weight: product089L.weight,
    dimensions: product089L.dimensions
  }));
}

export function getAllTumblerVariants(): TumblerProduct[] {
  const allProducts: TumblerProduct[] = [];
  let idCounter = 300;
  
  // Loop through all sizes in tumblers
  tumblers.sizes.forEach((size) => {
    // For each size, loop through all its variants
    size.variants.forEach((variant) => {
      allProducts.push({
        id: idCounter++,
        name: size.name,
        price: size.price,
        image: variant.images[0] || '',
        images: variant.images || [],
        description: size.description,
        category: "Stanley Tumblers",
        colorName: variant.colorName,
        sku: variant.sku,
        weight: size.weight,
        dimensions: size.dimensions
      });
    });
  });
  
  return allProducts;
}

export function getLocalizedTumblerProduct(product: TumblerProduct) {
  return {
    ...product,
    name: product.name,
    description: product.description,
    category: product.category,
  };
}
