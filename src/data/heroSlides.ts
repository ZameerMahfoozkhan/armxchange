export interface HeroSlide {
  id: string;
  index: number;
  total: number;
  eyebrow: string;
  headlinePrefix: string;
  headlineHighlight: string;
  headlineSuffix?: string;
  description: string;
  image: string;
  imageWebp?: string;
  imageMobile: string;
  alt: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  features?: string[];
}

export interface HeroCategoryCard {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  image: string;
  badge?: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "pre-owned-rifles",
    index: 1,
    total: 4,
    eyebrow: "01 / 04 — VERIFIED PRE-OWNED HARDWARE",
    headlinePrefix: "Second Hand & Pre-Owned ",
    headlineHighlight: "10m Air Rifles.",
    description: "India's verified exchange for competition 10m air rifles and match air pistols. Inspected cylinder validity, chronograph diagnostics, and direct coach consultation.",
    image: "/images/hero/a_cinematic_high_resolution_indoor_shooting_range.webp",
    imageWebp: "/images/hero/a_cinematic_high_resolution_indoor_shooting_range.webp",
    imageMobile: "/images/hero/a_cinematic_high_resolution_indoor_shooting_range-mobile.webp",
    alt: "Precision pre-owned 10m competition target air rifle on an indoor range firing lane",
    primaryCta: {
      label: "Browse Pre-Owned Rifles",
      href: "/second-hand-air-rifles/"
    },
    secondaryCta: {
      label: "How It Works",
      href: "/how-it-works/"
    },
    features: [
      "Detailed Condition Information",
      "Clear Specifications",
      "Direct Enquiries"
    ]
  },
  {
    id: "pre-owned-pistols",
    index: 2,
    total: 4,
    eyebrow: "02 / 04 — PRE-OWNED AIR PISTOLS",
    headlinePrefix: "Your Next Step ",
    headlineHighlight: "Starts Here.",
    description: "Discover available pre-owned competition air pistols and review their condition and specifications.",
    image: "/images/hero/a_cinematic_ultra_detailed_indoor_shooting_range.webp",
    imageWebp: "/images/hero/a_cinematic_ultra_detailed_indoor_shooting_range.webp",
    imageMobile: "/images/hero/a_cinematic_ultra_detailed_indoor_shooting_range-mobile.webp",
    alt: "Pre-owned precision 10m match air pistols on range firing bench with walnut anatomic grips",
    primaryCta: {
      label: "Explore Air Pistols",
      href: "/second-hand-air-pistols/"
    },
    secondaryCta: {
      label: "How It Works",
      href: "/how-it-works/"
    },
    features: [
      "ISSF 10m Match Pistols",
      "Regulator & Grip Inspected",
      "Direct Coach Consultation"
    ]
  },
  {
    id: "new-equipment",
    index: 3,
    total: 4,
    eyebrow: "03 / 04 — NEW COMPETITION EQUIPMENT",
    headlinePrefix: "Explore the ",
    headlineHighlight: "Latest Equipment.",
    description: "Explore available new equipment, manufacturer specifications, and applicable warranty information.",
    image: "/images/hero/a_cinematic_ultra_realistic_indoor_shooting_range.webp",
    imageWebp: "/images/hero/a_cinematic_ultra_realistic_indoor_shooting_range.webp",
    imageMobile: "/images/hero/a_cinematic_ultra_realistic_indoor_shooting_range-mobile.webp",
    alt: "Cinematic ultra-realistic indoor shooting range with brand-new Olympic 10m match air rifles",
    primaryCta: {
      label: "Explore New Equipment",
      href: "/new-weapons/"
    },
    secondaryCta: {
      label: "Contact Us",
      href: "/contact/"
    },
    features: [
      "Feinwerkbau · Walther · Steyr",
      "Brand-New Factory Warranty",
      "Renowned Shooter Guidance"
    ]
  },
  {
    id: "accessories-pellets",
    index: 4,
    total: 4,
    eyebrow: "04 / 04 — ACCESSORIES & PELLETS",
    headlinePrefix: "Every Detail ",
    headlineHighlight: "Matters.",
    description: "Explore compatible shooting accessories, equipment-care products, and eligible sporting supplies.",
    image: "/images/hero/ArmsXchange_Accessories_Hero_1920x768.webp",
    imageWebp: "/images/hero/ArmsXchange_Accessories_Hero_1920x768.webp",
    imageMobile: "/images/hero/ArmsXchange_Accessories_Hero_1920x768-mobile.webp",
    alt: "ArmsXchange competition accessories, precision match sights, RWS match pellets, and shooting footwear",
    primaryCta: {
      label: "Explore Accessories",
      href: "/accessories/"
    },
    secondaryCta: {
      label: "Explore Pellets",
      href: "/pellets/"
    },
    features: [
      "RWS R10 Selected Pellets",
      "MEC Precision Match Sights",
      "Sauer & Corami Footwear"
    ]
  }
];

export const HERO_CATEGORY_CARDS: HeroCategoryCard[] = [
  {
    id: "pre-owned-weapons",
    title: "Pre-Owned Weapons",
    subtitle: "Detailed condition & cylinder validity",
    href: "/second-hand-weapons/",
    image: "/images/products/rifles/feinwerkbau-800-alu-2018-cylinder-2024.webp",
    badge: "Pre-Owned"
  },
  {
    id: "new-weapons",
    title: "New Competition Equipment",
    subtitle: "Walther, Feinwerkbau, Steyr & Morini",
    href: "/new-weapons/",
    image: "/images/products/rifles/walther-lg500-itec-anatomic-e-electronic-trigger.webp",
    badge: "Brand New"
  },
  {
    id: "shooting-accessories",
    title: "Shooting Accessories",
    subtitle: "MEC precision sights, Sauer shoes & gear",
    href: "/accessories/",
    image: "/images/products/accessories/sauer-rifle-shoes-perfect-top.webp",
    badge: "Accessories"
  },
  {
    id: "pellets",
    title: "Match Pellets",
    subtitle: "RWS R10, Qiang Yuan 4.49 & 4.50mm",
    href: "/pellets/",
    image: "/images/products/pellets/rws-r10-match-rifle-pellets-449mm.webp",
    badge: "Match Grade"
  }
];

