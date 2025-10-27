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
    price: 29.99,
    image: "/assets/images/products/1/1.jpg",
    images: [
      "/assets/images/products/1/1.jpg",
      "/assets/images/products/1/2.jpg",
      "/assets/images/products/1/3.jpg",
      "/assets/images/products/1/4.jpg"
    ],
    description: `Stunning floating moon lamp with magnetic levitation technology. The 3D printed moon floats in mid-air creating a mesmerizing display.<br /><br />• Magnetic levitation - Moon floats without support<br />• Wireless phone charger (10W fast charging)<br />• 2700K warm LED light - Energy efficient<br />• Touch control on/off<br />• Anti-drop safety mechanism<br /><br />Size: 14D x 20W x 36.5H cm | Weight: 1.04kg`,
    descriptionFr: `Superbe lampe lune flottante avec technologie de lévitation magnétique. La lune imprimée en 3D flotte dans les airs.<br /><br />• Lévitation magnétique - Lune flottante<br />• Chargeur sans fil (charge rapide 10W)<br />• Lumière LED chaude 2700K - Économe<br />• Contrôle tactile<br />• Sécurité anti-chute<br /><br />Taille: 14L x 20l x 36,5H cm | Poids: 1,04kg`,
    category: "Lighting",
    featured: true,
    inStock: false,
    buyNowLink: "https://example.com/buy-dulicube-moon-lamp"
  },
  {
    id: 2,
    name: "Minecraft Fox Lamp",
    nameFr: "Lampe Renard Minecraft",
    price: 19.99,
    image: "/assets/images/products/2/1.jpg",
    images: [
      "/assets/images/products/2/1.jpg",
      "/assets/images/products/2/2.jpg",
      "/assets/images/products/2/3.jpg",
      "/assets/images/products/2/4.jpg"
    ],
    description: `Charming Minecraft Fox Lamp perfect for gamers and fans of all ages.<br /><br />• USB Rechargeable<br />• Authentic Minecraft Fox design<br />• Soft ambient LED lighting<br />• Safe and energy efficient<br />• 30-Day Return Guarantee<br /><br />⭐ 4.8/5 from 1000+ customers`,
    descriptionFr: `Charmante lampe Renard Minecraft parfaite pour joueurs et fans de tous âges.<br /><br />• Rechargeable USB<br />• Design authentique Minecraft<br />• Éclairage LED doux<br />• Sûre et économe en énergie<br />• Garantie retour 30 jours<br /><br />⭐ 4,8/5 par 1000+ clients`,
    category: "Lighting",
    featured: true,
    inStock: false,
    buyNowLink: "https://example.com/buy-minecraft-fox-lamp"
  },
  {
    id: 3,
    name: "Minecraft Axolotl Lamp",
    nameFr: "Lampe Axolotl Minecraft",
    price: 14.29,
    image: "/assets/images/products/3/1.png",
    images: [
      "/assets/images/products/3/1.png",
      "/assets/images/products/3/2.png",
      "/assets/images/products/3/3.png",
      "/assets/images/products/3/4.png"
    ],
    description: `Adorable Minecraft Axolotl lamp perfect for Minecraft enthusiasts and fans.<br /><br />• USB Rechargeable<br />• Authentic Axolotl design<br />• Soft ambient LED lighting<br />• Safe and energy efficient<br />• 30-Day Return Guarantee<br /><br />⭐ 4.9/5 from 3000+ customers`,
    descriptionFr: `Adorable lampe Axolotl Minecraft parfaite pour les passionnés et fans.<br /><br />• Rechargeable USB<br />• Design authentique Axolotl<br />• Éclairage LED doux<br />• Sûre et économe en énergie<br />• Garantie retour 30 jours<br /><br />⭐ 4,9/5 par 3000+ clients`,
    category: "Lighting",
    featured: true,
    inStock: false,
    buyNowLink: "https://example.com/buy-minecraft-axolotl-lamp"
  },
  {
    id: 4,
    name: "Astronaut Star Projector Galaxy Night Light",
    nameFr: "Projecteur d'Étoiles Astronaute Lumière de Nuit Galaxie",
    price: 9.99,
    image: "/assets/images/products/4/1.webp",
    images: [
      "/assets/images/products/4/1.webp",
      "/assets/images/products/4/2.webp",
      "/assets/images/products/4/3.webp",
      "/assets/images/products/4/4.webp"
    ],
    description: `Transform your bedroom into a stunning galaxy with this Astronaut Star Projector. Perfect multifunctional design for entertainment and relaxation.<br /><br />• MULTIFUNCTIONAL DESIGN - Night light, disco ball or DJ light for parties<br />• ADVANCED PROJECTION - Multiple nebulae effects and ambient star displays<br />• BLUETOOTH SPEAKERS - Built-in speakers for music or white noise<br />• REMOTE CONTROL - Easy customization of starry sky atmosphere<br />• AUTO-OFF TIMER - Set to turn off after 1 or 2 hours<br />• USB powered (0-5W)<br /><br />⭐ 4.2/5 from 18 reviews | 88 sold`,
    descriptionFr: `Transformez votre chambre en galaxie avec ce Projecteur Astronaute. Design multifonctionnel parfait pour divertissement et détente.<br /><br />• DESIGN MULTIFONCTIONNEL - Veilleuse, boule disco ou lumière DJ pour fêtes<br />• PROJECTION AVANCÉE - Multiples effets de nébuleuses et étoiles ambiantes<br />• HAUT-PARLEURS BLUETOOTH - Haut-parleurs intégrés pour musique ou bruit blanc<br />• TÉLÉCOMMANDE - Personnalisation facile de l'atmosphère étoilée<br />• MINUTERIE AUTO - Arrêt automatique après 1 ou 2 heures<br />• Alimenté USB (0-5W)<br /><br />⭐ 4,2/5 sur 18 avis | 88 vendus`,
    category: "Lighting",
    featured: true,
    inStock: true,
    buyNowLink: "https://example.com/buy-astronaut-projector"
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
