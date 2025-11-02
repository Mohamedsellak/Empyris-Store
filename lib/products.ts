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
  colors?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Stanley 1913 x LoveShackFancy Quencher H2.0 FlowState™ Tumbler | 40 OZ",
    nameFr: "Stanley 1913 x LoveShackFancy Quencher H2.0 FlowState™ Gobelet | 40 OZ",
    price: 9.99,
    image: "/assets/images/products/1/1.png",
    images: [
      "/assets/images/products/1/1.png",
      "/assets/images/products/1/2.png",
      "/assets/images/products/1/3.png",
      "/assets/images/products/1/4.png"
    ],
    description: `Our love for pink florals goes global with the latest Stanley 1913 x LoveShackFancy collab. The Ibiza Sunset Collection introduces soft coolers in an Ikat rose print that features an exclusive charm set. And each water bottle shines with a subtle and shimmery finish. For a splash of romance wherever you go.<br /><br />The 40-ounce Quencher® H2.0 FlowState™ Tumbler keeps your drink ice cold for hours, thanks to double-wall vacuum insulation. The versatile FlowState™ 3-position lid has three sip settings: one for the reusable straw, one without and the option to rotate the silicone cover shut when you're on the go. Did we mention it's adorned with a pink bow Straw Topper?<br /><br />• 90% recycled 18/8 stainless steel, BPA-free<br />• Recycled stainless steel icon inside<br />• Double-wall vacuum insulation<br />• Powder coat finish<br />• FlowState™ screw-on 3-position lid<br />• Reusable straw included<br />• Comfort-grip handle<br />• Car cup holder compatible (base diameter: 3.1 inches)<br />• Dishwasher safe<br /><br />Weight: 1.4 lb | Dimensions: 3.54 x 5.43 x 12.52 in.<br /><br />*Not Eligible For Promotions or Resell. Multiple & Large Orders Are Subject To Cancellation.`,
    descriptionFr: `Notre amour pour les motifs floraux roses devient mondial avec la dernière collaboration Stanley 1913 x LoveShackFancy. La collection Ibiza Sunset présente des glacières souples avec un imprimé Ikat rose et un ensemble de breloques exclusif. Chaque bouteille d'eau brille avec une finition subtile et chatoyante. Pour une touche de romance où que vous alliez.<br /><br />Le gobelet Quencher® H2.0 FlowState™ de 40 onces garde votre boisson glacée pendant des heures grâce à l'isolation sous vide à double paroi. Le couvercle polyvalent FlowState™ à 3 positions offre trois modes de boisson : un pour la paille réutilisable, un sans et l'option de faire pivoter le couvercle en silicone fermé lorsque vous êtes en déplacement. Avons-nous mentionné qu'il est orné d'un embout de paille avec nœud rose ?<br /><br />• Acier inoxydable 18/8 recyclé à 90 %, sans BPA<br />• Icône en acier inoxydable recyclé à l'intérieur<br />• Isolation sous vide à double paroi<br />• Finition revêtement poudre<br />• Couvercle vissable FlowState™ à 3 positions<br />• Paille réutilisable incluse<br />• Poignée à prise confortable<br />• Compatible porte-gobelet de voiture (diamètre de base : 3,1 pouces)<br />• Lavable au lave-vaisselle<br /><br />Poids : 1,4 lb | Dimensions : 3,54 x 5,43 x 12,52 pouces<br /><br />*Non éligible aux promotions ou à la revente. Les commandes multiples et importantes sont sujettes à annulation.`,
    category: "Drinkware",
    featured: true,
    inStock: true,
    buyNowLink: "https://example.com/buy-stanley-tumbler",
  },
  {
    id: 2,
    name: "The Quencher H2.0 FlowState™ Tumbler | 64 OZ",
    nameFr: "Le Gobelet Quencher H2.0 FlowState™ | 64 OZ",
    price: 9.99,
    image: "/assets/images/products/2/1.png",
    images: [
      "/assets/images/products/2/1.png",
      "/assets/images/products/2/2.png",
      "/assets/images/products/2/3.png",
      "/assets/images/products/2/4.png",
      "/assets/images/products/2/5.png"
    ],
    description: `With this one by your side, you may never go thirsty again. Bring 64 ounces of your favorite drink wherever you go—for true all-day hydration with fewer refills. From yoga class to desk time, weekends by the lake and beyond, our largest Quencher is a reservoir ready to support your hydration goals.<br /><br />Double-wall vacuum insulation keeps your water or favorite beverage ice-cold for hours. It's made with recycled stainless steel, and the FlowState™ lid has a rotating cover with three versatile positions: a straw opening designed to resist splashes while holding the reusable straw in place, a drink opening, and a full-cover top. The comfort grip handle makes carrying a breeze, and wide base means extra stability. The fan-favorite Quencher, now even bigger, is ready to keep you hydrated at all times.<br /><br />• 18/8 Recycled stainless steel; naturally BPA-free<br />• Double-wall vacuum insulation<br />• FlowState™ screw-on 3-position lid<br />• Lid disassembles for deep cleaning<br />• Reusable straw included<br />• Comfort-grip handle<br />• Wide base for extra stability<br />• Dishwasher safe<br /><br />Weight: 1.80 lb | Dimensions: 6.97L x 4.84W x 12.44H in.<br /><br />Maximum of 20 units allowed per order. Feel free to combine colors!<br />*Not Eligible For Promotions or Resell. Multiple & Large Orders Are Subject To Cancellation.`,
    descriptionFr: `Avec celui-ci à vos côtés, vous n'aurez peut-être plus jamais soif. Apportez 64 onces de votre boisson préférée partout où vous allez—pour une véritable hydratation toute la journée avec moins de remplissages. Du cours de yoga au temps de bureau, des week-ends au bord du lac et au-delà, notre plus grand Quencher est un réservoir prêt à soutenir vos objectifs d'hydratation.<br /><br />L'isolation sous vide à double paroi garde votre eau ou boisson préférée glacée pendant des heures. Il est fabriqué en acier inoxydable recyclé, et le couvercle FlowState™ a une couverture rotative avec trois positions polyvalentes : une ouverture de paille conçue pour résister aux éclaboussures tout en maintenant la paille réutilisable en place, une ouverture de boisson et un couvercle complet. La poignée à prise confortable facilite le transport, et la base large signifie une stabilité supplémentaire. Le Quencher préféré des fans, maintenant encore plus grand, est prêt à vous garder hydraté en tout temps.<br /><br />• Acier inoxydable recyclé 18/8 ; naturellement sans BPA<br />• Isolation sous vide à double paroi<br />• Couvercle vissable FlowState™ à 3 positions<br />• Couvercle démontable pour nettoyage en profondeur<br />• Paille réutilisable incluse<br />• Poignée à prise confortable<br />• Base large pour stabilité supplémentaire<br />• Lavable au lave-vaisselle<br /><br />Poids : 1,80 lb | Dimensions : 6,97L x 4,84l x 12,44H pouces<br /><br />Maximum de 20 unités autorisées par commande. N'hésitez pas à combiner les couleurs !<br />*Non éligible aux promotions ou à la revente. Les commandes multiples et importantes sont sujettes à annulation.`,
    category: "Drinkware",
    featured: true,
    inStock: true,
    buyNowLink: "https://example.com/buy-stanley-64oz",
    colors: ["#c1c9d9", "#b78cb0","#ff2b59","#02b565"]
  },
  {
    id: 3,
    name: "The New Frequency Quencher H2.0 FlowState™ Tumbler | 40 OZ",
    nameFr: "Le Nouveau Gobelet Frequency Quencher H2.0 FlowState™ | 40 OZ",
    price: 9.99,
    image: "/assets/images/products/3/1.png",
    images: [
      "/assets/images/products/3/1.png",
      "/assets/images/products/3/2.png",
      "/assets/images/products/3/3.png",
      "/assets/images/products/3/4.png"
    ],
    description: `The New Frequency Collection features cool iridescent tones of rose and periwinkle and two exclusives for a new year glow. Organic patterns in ocean blues and soft sherbet bring a fresh energy inspired by the motion and flow of your days. With a focus on harmony and self-care, stretch forward with hydration that fits your intentions.<br /><br />The 40-ounce Quencher H2.0 FlowState™ Tumbler keeps your drink ice cold for hours, thanks to double-wall vacuum insulation. The versatile FlowState™ 3-position lid has three sip settings: one for the reusable straw, one without and the option to rotate the silicone cover shut. It fits right in your car cupholder when you're on the go.<br /><br />Maximum of 20 units allowed per order. Feel free to combine colors!<br />*Not Eligible For Promotions or Resell. Multiple & Large Orders Are Subject To Cancellation.<br /><br />• 18/8 recycled stainless steel<br />• Double-wall vacuum insulation<br />• FlowState™ 3-position lid<br />• Reusable straw<br />• Car cup holder compatible<br />• Dishwasher safe<br />• BPA-free<br /><br />Weight: 1.18 lb | Dimensions: 3.62 x 5.82 x 12.03 in.`,
    descriptionFr: `La nouvelle collection Frequency présente de magnifiques tons irisés de rose et de pervenche et deux exclusivités pour une lueur de nouvelle année. Des motifs organiques en bleus océan et sorbet doux apportent une énergie fraîche inspirée par le mouvement et le flux de vos journées. En mettant l'accent sur l'harmonie et les soins personnels, avancez avec une hydratation qui correspond à vos intentions.<br /><br />Le gobelet Quencher H2.0 FlowState™ de 40 onces garde votre boisson glacée pendant des heures grâce à l'isolation sous vide à double paroi. Le couvercle polyvalent FlowState™ à 3 positions offre trois modes de boisson : un pour la paille réutilisable, un sans et l'option de faire pivoter le couvercle en silicone fermé. Il s'adapte parfaitement au porte-gobelet de votre voiture lorsque vous êtes en déplacement.<br /><br />Maximum de 20 unités autorisées par commande. N'hésitez pas à combiner les couleurs !<br />*Non éligible aux promotions ou à la revente. Les commandes multiples et importantes sont sujettes à annulation.<br /><br />• Acier inoxydable recyclé 18/8<br />• Isolation sous vide à double paroi<br />• Couvercle FlowState™ à 3 positions<br />• Paille réutilisable<br />• Compatible porte-gobelet de voiture<br />• Lavable au lave-vaisselle<br />• Sans BPA<br /><br />Poids : 1,18 lb | Dimensions : 3,62 x 5,82 x 12,03 pouces`,
    category: "Drinkware",
    featured: true,
    inStock: true,
    buyNowLink: "https://example.com/buy-stanley-frequency",
  },
  {
    id: 4,
    name: "The New Frequency Quencher H2.0 FlowState™ Tumbler | 40 OZ",
    nameFr: "Le Nouveau Gobelet Frequency Quencher H2.0 FlowState™ | 40 OZ",
    price: 9.99,
    image: "/assets/images/products/4/1.png",
    images: [
      "/assets/images/products/4/1.png",
      "/assets/images/products/4/2.png",
      "/assets/images/products/4/3.png",
      "/assets/images/products/4/4.png"
    ],
    description: `The New Frequency Collection features cool iridescent tones of rose and periwinkle and two exclusives for a new year glow. Organic patterns in ocean blues and soft sherbet bring a fresh energy inspired by the motion and flow of your days. With a focus on harmony and self-care, stretch forward with hydration that fits your intentions.<br /><br />The 40-ounce Quencher H2.0 FlowState™ Tumbler keeps your drink ice cold for hours, thanks to double-wall vacuum insulation. The versatile FlowState™ 3-position lid has three sip settings: one for the reusable straw, one without and the option to rotate the silicone cover shut. It fits right in your car cupholder when you're on the go.<br /><br />Maximum of 20 units allowed per order. Feel free to combine colors!<br />*Not Eligible For Promotions or Resell. Multiple & Large Orders Are Subject To Cancellation.<br /><br />• 18/8 recycled stainless steel<br />• Double-wall vacuum insulation<br />• FlowState™ 3-position lid<br />• Reusable straw<br />• Car cup holder compatible<br />• Dishwasher safe<br />• BPA-free<br /><br />Weight: 1.18 lb | Dimensions: 3.62 x 5.82 x 12.03 in.`,
    descriptionFr: `La nouvelle collection Frequency présente de magnifiques tons irisés de rose et de pervenche et deux exclusivités pour une lueur de nouvelle année. Des motifs organiques en bleus océan et sorbet doux apportent une énergie fraîche inspirée par le mouvement et le flux de vos journées. En mettant l'accent sur l'harmonie et les soins personnels, avancez avec une hydratation qui correspond à vos intentions.<br /><br />Le gobelet Quencher H2.0 FlowState™ de 40 onces garde votre boisson glacée pendant des heures grâce à l'isolation sous vide à double paroi. Le couvercle polyvalent FlowState™ à 3 positions offre trois modes de boisson : un pour la paille réutilisable, un sans et l'option de faire pivoter le couvercle en silicone fermé. Il s'adapte parfaitement au porte-gobelet de votre voiture lorsque vous êtes en déplacement.<br /><br />Maximum de 20 unités autorisées par commande. N'hésitez pas à combiner les couleurs !<br />*Non éligible aux promotions ou à la revente. Les commandes multiples et importantes sont sujettes à annulation.<br /><br />• Acier inoxydable recyclé 18/8<br />• Isolation sous vide à double paroi<br />• Couvercle FlowState™ à 3 positions<br />• Paille réutilisable<br />• Compatible porte-gobelet de voiture<br />• Lavable au lave-vaisselle<br />• Sans BPA<br /><br />Poids : 1,18 lb | Dimensions : 3,62 x 5,82 x 12,03 pouces`,
    category: "Drinkware",
    featured: true,
    inStock: true,
    buyNowLink: "https://example.com/buy-stanley-rose-petal",
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
