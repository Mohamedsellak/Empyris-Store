export interface Product {
  id: number;
  name: string;
  nameFr: string;
  price: number;
  image: string;
  images?: string[];
  description: string;
  descriptionFr: string;
  category: string;
  featured?: boolean;
  inStock?: boolean;
  buyNowLink?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "DuliCube Floating Moon Lamp Magnetic LED Desk Light",
    nameFr: "Lampe Lune Flottante Magnétique LED DuliCube",
    price: 9.99,
    image: "/assets/images/products/1/1.jpg",
    images: [
      "/assets/images/products/1/1.jpg",
      "/assets/images/products/1/2.jpg",
      "/assets/images/products/1/3.jpg",
      "/assets/images/products/1/4.jpg"
    ],
    description: `Experience the magic of levitation with this stunning floating moon lamp. Using cutting-edge magnetic technology, the 3D printed moon floats effortlessly in mid-air, creating a mesmerizing display.<br /><br />Features:<br />• Magnetic levitation technology - Moon floats without support<br />• Built-in wireless phone charger (10W fast charging)<br />• Anti-drop safety mechanism with chrome frame<br />• 2700K warm LED light - Eye-friendly and energy efficient<br />• Touch control on/off button<br />• Perfect unique gift for any occasion<br /><br />Specifications: 14D x 20W x 36.5H cm | 1.04kg | Brushed Chrome Finish`,
    descriptionFr: `Découvrez la magie de la lévitation avec cette superbe lampe lune flottante. Grâce à une technologie magnétique de pointe, la lune imprimée en 3D flotte sans effort dans les airs, créant un spectacle fascinant.<br /><br />Caractéristiques:<br />• Technologie de lévitation magnétique - Lune flottante<br />• Chargeur sans fil intégré (charge rapide 10W)<br />• Mécanisme de sécurité anti-chute avec cadre chromé<br />• Lumière LED chaude 2700K - Économe et confortable<br />• Contrôle tactile marche/arrêt<br />• Cadeau unique parfait pour toute occasion<br /><br />Spécifications: 14L x 20l x 36,5H cm | 1,04kg | Finition Chrome Brossé`,
    category: "Lighting",
    featured: true,
    inStock: false,
    buyNowLink: "https://example.com/buy-dulicube-moon-lamp"
  },
  {
    id: 2,
    name: "Minecraft Fox Lamp",
    nameFr: "Lampe Renard Minecraft",
    price: 9.99,
    image: "/assets/images/products/2/1.jpg",
    images: [
      "/assets/images/products/2/1.jpg",
      "/assets/images/products/2/2.jpg",
      "/assets/images/products/2/3.jpg",
      "/assets/images/products/2/4.jpg"
    ],
    description: `Relive your childhood adventures with this charming Minecraft Fox Lamp! Perfect for gamers and fans of all ages.<br /><br />• USB Rechargeable - No batteries needed<br />• Authentic Minecraft Fox character design<br />• Soft ambient LED lighting<br />• Safe, cool to touch, energy efficient<br />• 30-Day Return Guarantee<br /><br />⭐ 4.8/5 from 1000+ customers | ⚠️ Low Stock - Order now!`,
    descriptionFr: `Revivez vos aventures d'enfance avec cette charmante lampe Renard Minecraft ! Parfaite pour les joueurs et fans de tous âges.<br /><br />• Rechargeable USB - Pas de piles nécessaires<br />• Design authentique du Renard Minecraft<br />• Éclairage LED d'ambiance doux<br />• Sûre, froide au toucher, économe en énergie<br />• Garantie de retour de 30 jours<br /><br />⭐ 4,8/5 par plus de 1000 clients | ⚠️ Stock Limité - Commandez maintenant !`,
    category: "Lighting",
    featured: true,
    inStock: true,
    buyNowLink: "https://example.com/buy-minecraft-fox-lamp"
  },
  {
    id: 3,
    name: "Minecraft Axolotl Lamp",
    nameFr: "Lampe Axolotl Minecraft",
    price: 282.00,
    image: "/assets/images/products/3/1.png",
    images: [
      "/assets/images/products/3/1.png",
      "/assets/images/products/3/2.png",
      "/assets/images/products/3/3.png",
      "/assets/images/products/3/4.png"
    ],
    description: `Bring the adorable Minecraft Axolotl to life with this charming lamp! Perfect for Minecraft enthusiasts and fans of all ages.<br /><br />• USB Rechargeable - No batteries needed<br />• Authentic Minecraft Axolotl character design<br />• Soft ambient LED lighting<br />• Safe, cool to touch, energy efficient<br />• 30-Day Return Guarantee<br /><br />⭐ 4.9/5 from 3000+ customers | ⚠️ Low Stock - Order now!`,
    descriptionFr: `Donnez vie à l'adorable Axolotl Minecraft avec cette charmante lampe ! Parfaite pour les passionnés de Minecraft et fans de tous âges.<br /><br />• Rechargeable USB - Pas de piles nécessaires<br />• Design authentique du personnage Axolotl Minecraft<br />• Éclairage LED d'ambiance doux<br />• Sûre, froide au toucher, économe en énergie<br />• Garantie de retour de 30 jours<br /><br />⭐ 4,9/5 par plus de 3000 clients | ⚠️ Stock Limité - Commandez maintenant !`,
    category: "Lighting",
    featured: true,
    inStock: false,
    buyNowLink: "https://example.com/buy-minecraft-axolotl-lamp"
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getLocalizedProduct(product: Product, lang: 'en' | 'fr') {
  return {
    ...product,
    name: lang === 'fr' ? product.nameFr : product.name,
    description: lang === 'fr' ? product.descriptionFr : product.description,
    category: product.category,
  };
}
