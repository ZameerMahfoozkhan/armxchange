export interface Product {
  id: string;
  slug: string;
  title: string;
  brand: string;
  category: 'second-hand-weapons' | 'new-weapons' | 'accessories' | 'pellets';
  categoryLabel: string;
  subcategory: 'air-rifles' | 'air-pistols' | 'sights' | 'footwear' | 'accessories' | 'pellets';
  subcategoryLabel: string;
  isPreOwned: boolean;
  conditionGrade: string;
  priceDisplay: string;
  priceValue: number;
  taxNote: string;
  images: string[];
  shortDescription: string;
  fullDescription: string;
  specifications: Record<string, string>;
  conditionDisclosure?: string[];
  includedItems?: string[];
  badge: string;
  inStock: boolean;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "fwb-800-2018-01",
    slug: "2018-feinwerkbau-800-alu-air-rifle",
    title: "2018 Feinwerkbau 800 Alu with 2024 Cylinder",
    brand: "Feinwerkbau",
    category: "second-hand-weapons",
    categoryLabel: "Second-Hand Weapons",
    subcategory: "air-rifles",
    subcategoryLabel: "Pre-Owned 10m Air Rifles",
    isPreOwned: true,
    conditionGrade: "Very Good / Competition Ready",
    priceDisplay: "Enquire on WhatsApp",
    priceValue: 0,
    taxNote: "Pre-owned equipment transfer — enquire for pricing & documentation",
    images: [
      "/images/products/rifles/feinwerkbau-800-alu-2018-cylinder-2024.webp"
    ],
    shortDescription: "Verified pre-owned 2018 Feinwerkbau 800 Alu 10m match air rifle. Equipped with a brand-new 2024 original cylinder (valid to 2034 ISSF).",
    fullDescription: "A rare opportunity to acquire a pristine, competition-ready Feinwerkbau 800 Alu. Originally manufactured in 2018, this rifle has been meticulously maintained by an active shooter and recently upgraded with a factory-original 2024 Feinwerkbau compressed air cylinder, giving it a full 10-year ISSF certification window up to 2034. Features an ergonomic multi-laminate anatomic grip, precision diopter sighting system, fully adjustable cheekpiece and buttplate, and includes the original Feinwerkbau hard travel case.",
    specifications: {
      "Model": "Feinwerkbau 800 Alu",
      "Manufacturing Year": "2018",
      "Cylinder Validity": "2024 to 2034 (Factory New 2024 Replacement)",
      "Calibre": ".177 (4.5 mm)",
      "System": "Single-stroke compressed air 200 bar",
      "Stock Material": "High-grade Silver & Black Anodized Aluminium",
      "Grip": "Multi-angle adjustable laminated wood grip",
      "Trigger": "Mechanical Match Trigger, two-stage adjustable",
      "Velocity / Energy": "Approx. 170-175 m/s (< 7.5 Joules, Competition Spec)"
    },
    conditionDisclosure: [
      "100% functional match trigger and regulator pressure consistency.",
      "Fitted with brand-new 2024 original Feinwerkbau cylinder (certified valid to 2034 under ISSF rules).",
      "Minor normal handling signs on bench-rest contact points, no structural or barrel wear.",
      "Original factory hard protective carry case included."
    ],
    includedItems: [
      "Feinwerkbau 800 Alu 10m Rifle",
      "Factory Original 2024 Match Air Cylinder",
      "Original Feinwerkbau Hard Carry Case",
      "Precision Match Diopter & Front Sight Tunnel",
      "Original tools & filling adapter"
    ],
    badge: "Verified Pre-Owned",
    inStock: true,
    featured: true
  },
  {
    id: "walther-lg400-anatomic-2022-01",
    slug: "2022-walther-lg400-anatomic-air-rifle",
    title: "2022 Walther LG400 Anatomic Match Air Rifle (Mechanical Trigger)",
    brand: "Walther",
    category: "second-hand-weapons",
    categoryLabel: "Second-Hand Weapons",
    subcategory: "air-rifles",
    subcategoryLabel: "Pre-Owned 10m Air Rifles",
    isPreOwned: true,
    conditionGrade: "Excellent / Certified Range Ready",
    priceDisplay: "Enquire on WhatsApp",
    priceValue: 0,
    taxNote: "Pre-owned equipment transfer — enquiry with verified condition report",
    images: [
      "/images/products/rifles/walther-lg400-anatomic-2022-1.webp",
      "/images/products/rifles/walther-lg400-anatomic-2022-2.webp",
      "/images/products/rifles/walther-lg400-anatomic-2022-3.webp",
      "/images/products/rifles/walther-lg400-anatomic-2022-4.webp"
    ],
    shortDescription: "Verified pre-owned 2022 Walther LG400 Anatomic 10m match air rifle. Laminated anatomic stock, receiver DE 2022 (SN KBB8774), and original Walther cylinder valid to June 2032.",
    fullDescription: "A prime opportunity to acquire an authentic, verified 2022 Walther LG400 Anatomic 10m match air rifle. Manufactured in Germany in 2022 (Receiver DE 2022, Serial KBB8774), this competition air rifle features Walther's precision mechanical two-stage match trigger with integrated dry-fire training mode, carbon-finish barrel jacket with muzzle extension tube, and sculpted blue-grey laminated anatomic wood stock with 3D adjustable match grip and buttplate. Includes factory Walther high-pressure cylinder certified usable until June 2032 (06/32) under ISSF 10-year regulations, original hard flight case, and Walther accessory box.",
    specifications: {
      "Model": "Walther LG400 Anatomic (Mechanical)",
      "Manufacturing Year": "2022 (Receiver DE 2022 / SN KBB8774)",
      "Cylinder Validity": "Valid to June 2032 (06/32 ISSF Certified)",
      "Calibre": ".177 (4.5 mm)",
      "Operating System": "300 bar / 200 bar Compressed Air",
      "Stock Material": "Blue-Grey Laminated Anatomic Wood",
      "Grip & Buttplate": "3D Anatomic Match Grip, Multi-Adjustable Buttplate",
      "Trigger": "Mechanical Match Trigger with Dry-Fire Switch",
      "Velocity / Energy": "Approx. 170-175 m/s (< 7.5 Joules Competition Spec)"
    },
    conditionDisclosure: [
      "German proofmark DE 2022 with verified serial number KBB8774.",
      "Original Walther compressed air cylinder certified usable until 06/2032.",
      "Two-stage mechanical trigger break and dry-fire training switch function smoothly.",
      "Stock laminations and metal barrel shroud in excellent cosmetic and operational condition.",
      "Supplied in Walther hard transport case with original accessory box."
    ],
    includedItems: [
      "2022 Walther LG400 Anatomic 10m Air Rifle",
      "Original Walther Air Cylinder (Certified to 06/2032)",
      "Precision Match Diopter & Front Sight Tunnel",
      "Original Walther Hard Flight Case",
      "Walther Accessory Box with Tools & Adapter"
    ],
    badge: "Verified Pre-Owned",
    inStock: true,
    featured: true
  },
  {
    id: "walther-lg400-anatomic-2023-01",
    slug: "2023-walther-lg400-anatomic-air-rifle",
    title: "2023 Walther LG400 Anatomic Match Air Rifle (Mechanical Trigger)",
    brand: "Walther",
    category: "second-hand-weapons",
    categoryLabel: "Second-Hand Weapons",
    subcategory: "air-rifles",
    subcategoryLabel: "Pre-Owned 10m Air Rifles",
    isPreOwned: true,
    conditionGrade: "Mint / Like-New Condition",
    priceDisplay: "Enquire on WhatsApp",
    priceValue: 0,
    taxNote: "Pre-owned equipment transfer — enquiry with verified condition report",
    images: [
      "/images/products/rifles/walther-lg400-anatomic-2023-1.webp",
      "/images/products/rifles/walther-lg400-anatomic-2023-2.webp"
    ],
    shortDescription: "Verified pre-owned 2023 Walther LG400 Anatomic 10m match air rifle. Mint condition multi-laminate competition stock, sight risers, manual packet, and original travel case.",
    fullDescription: "A rare, like-new 2023 Walther LG400 Anatomic 10m match air rifle. Built with Walther's celebrated mechanical match trigger, carbon barrel jacket, anatomic multi-laminate competition stock, and 3D adjustable match buttplate. Delivered complete with original factory hard flight case, dedicated Walther accessory case, diopter sight risers, factory test group paperwork, and sealed documentation envelope. Thoroughly vetted and ready for national and international ISSF competition.",
    specifications: {
      "Model": "Walther LG400 Anatomic (Mechanical)",
      "Manufacturing Year": "2023",
      "Cylinder Validity": "Original Walther Match Cylinder (Inspected)",
      "Calibre": ".177 (4.5 mm)",
      "Operating System": "300 bar / 200 bar Compressed Air",
      "Stock Material": "Anatomic Multi-Laminate Match Stock",
      "Grip & Buttplate": "3D Sculpted Grip with Aluminium Match Buttplate",
      "Trigger": "Mechanical Match Two-Stage Trigger",
      "Velocity / Energy": "Approx. 170-175 m/s (< 7.5 Joules Competition Spec)"
    },
    conditionDisclosure: [
      "Manufactured in 2023 — pristine condition with minimal range time.",
      "Original Walther compressed air cylinder with certified pressure retention.",
      "Factory manual and documentation packet sealed in original packaging.",
      "Dual-profile inspection confirms flawless metal finish and immaculate stock.",
      "Complete with Walther protective case and specialized accessory box."
    ],
    includedItems: [
      "2023 Walther LG400 Anatomic 10m Air Rifle",
      "Original Walther High-Pressure Cylinder",
      "Precision Match Diopter with Sight Elevation Risers",
      "Original Walther Hard Protective Flight Case",
      "Walther Dedicated Accessory Box & Filling Adapter",
      "Factory Manual & Sealed Documentation Packet"
    ],
    badge: "Verified Pre-Owned",
    inStock: true,
    featured: true
  },
  {
    id: "walther-lg400-alutec-2026-cylinder-01",
    slug: "walther-lg400-alutec-air-rifle-2026-cylinder",
    title: "Walther LG400 Alutec Match Air Rifle (with Brand-New 2026 Cylinder)",
    brand: "Walther",
    category: "second-hand-weapons",
    categoryLabel: "Second-Hand Weapons",
    subcategory: "air-rifles",
    subcategoryLabel: "Pre-Owned 10m Air Rifles",
    isPreOwned: true,
    conditionGrade: "Very Good / Upgraded with 2026 Cylinder",
    priceDisplay: "Enquire on WhatsApp",
    priceValue: 0,
    taxNote: "Pre-owned equipment transfer — enquire for pricing & verified documentation",
    images: [
      "/images/products/rifles/walther-lg400-alutec-2026-cylinder-1.webp",
      "/images/products/rifles/walther-lg400-alutec-2026-cylinder-2.webp",
      "/images/products/rifles/walther-lg400-alutec-2026-cylinder-3.webp",
      "/images/products/rifles/walther-lg400-alutec-2026-cylinder-4.webp",
      "/images/products/rifles/walther-lg400-alutec-2026-cylinder-5.webp",
      "/images/products/rifles/walther-lg400-alutec-2026-cylinder-6.webp"
    ],
    shortDescription: "Verified pre-owned Walther LG400 Alutec 10m match air rifle in black aluminium chassis. Upgraded with a brand-new factory Walther cylinder valid until May 2036 (05/36 — full 10-year ISSF validity).",
    fullDescription: "An exceptional, competition-ready Walther LG400 Alutec 10m match air rifle in sleek matte-black anodized aluminium finish. Built on Walther's celebrated LG400 platform with internal absorber vibration dampening and precision two-stage mechanical match trigger. This rifle has been upgraded with a brand-new, factory-original Walther compressed air cylinder certified usable until May 2036 (05/36), ensuring a full 10-year ISSF equipment control certification window. Fitted with custom Parishram Sports Equipment fore-end riser block and precision sight elevation risers, factory Walther match diopter, front sight tunnel with barrel extension, multi-axis adjustable blue cheekpiece, and adjustable match buttplate. Delivered complete in protective hard transport flight case.",
    specifications: {
      "Model": "Walther LG400 Alutec Competition",
      "Cylinder Validity": "May 2026 to May 2036 (Brand-New Factory Replacement — 05/36)",
      "Calibre": ".177 (4.5 mm)",
      "Operating System": "300 bar / 200 bar Compressed Air with Absorber",
      "Stock Material": "High-Grade Matte Black Anodized Aluminium Alutec Chassis",
      "Trigger": "Mechanical Match Two-Stage Trigger with Dry-Fire Switch",
      "Sighting System": "Walther Precision Match Diopter with Parishram Elevation Risers",
      "Cheekpiece & Buttplate": "Blue anodized 3D cheekpiece, multi-axis aluminium match buttplate",
      "Velocity / Energy": "Approx. 170-175 m/s (< 7.5 Joules ISSF Competition Spec)"
    },
    conditionDisclosure: [
      "Fitted with brand-new factory-original Walther compressed air cylinder stamped 'useable until: 05/36' (valid through May 2036 under ISSF rules).",
      "Action absorber mechanism and two-stage mechanical match trigger break with crisp, clean release.",
      "Custom Parishram Sports Equipment fore-end bench block and sight elevation risers installed.",
      "Sound structural alignment and pristine rifled match barrel; minor normal handling marks on common contact areas.",
      "Delivered in hard protective flight case with original Walther match diopter rear sight."
    ],
    includedItems: [
      "Walther LG400 Alutec 10m Match Air Rifle",
      "Brand-New Factory Walther Air Cylinder (Certified Valid to 05/2036)",
      "Walther Precision Match Diopter Rear Sight",
      "Parishram Sports Equipment Fore-end Block & Sight Elevation Risers",
      "Front Match Sight Tunnel & Barrel Extension",
      "Protective Hard Flight / Travel Case"
    ],
    badge: "2036 Cylinder Installed",
    inStock: true,
    featured: true
  },
  {
    id: "walther-lg400-alutec-electronic-2023-01",
    slug: "2023-walther-lg400-alutec-electronic-air-rifle",
    title: "2023 Walther LG400 Alutec Electronic Match Air Rifle (E-Trigger)",
    brand: "Walther",
    category: "second-hand-weapons",
    categoryLabel: "Second-Hand Weapons",
    subcategory: "air-rifles",
    subcategoryLabel: "Pre-Owned 10m Air Rifles",
    isPreOwned: true,
    conditionGrade: "Mint / Like-New Condition (E-Trigger)",
    priceDisplay: "Enquire on WhatsApp",
    priceValue: 0,
    taxNote: "Pre-owned equipment transfer — enquire for pricing & verified documentation",
    images: [
      "/images/products/rifles/walther-lg400-alutec-electronic-2023-1.webp",
      "/images/products/rifles/walther-lg400-alutec-electronic-2023-2.webp",
      "/images/products/rifles/walther-lg400-alutec-electronic-2023-3.webp",
      "/images/products/rifles/walther-lg400-alutec-electronic-2023-4.webp"
    ],
    shortDescription: "Verified pre-owned 2023 Walther LG400 Alutec Electronic 10m match air rifle. Factory E-Trigger system (German DE 2022 proof / SN KB89437), Walther cylinder valid to March 2033, and full flight case package.",
    fullDescription: "A premier, highly sought-after 2023 Walther LG400 Alutec Electronic (LG 400-E) 10m match air rifle in mint, like-new condition. Built with Walther's celebrated electronic match trigger (E-Trigger) providing zero trigger play, frictionless micro-switch release, and integrated electronic dry-fire mode. Features natural silver anodized aluminium Alutec chassis, carbon barrel jacket, receiver proofed in Germany (DE 2022, Serial KB89437), and an original Walther high-pressure cylinder certified valid until March 2033 (03/33, SN 075185). Delivered complete in original Negrini / Walther hard flight case with Walther blue folding multi-tool, charging adapter, safety line, sight risers, and factory documentation packet.",
    specifications: {
      "Model": "Walther LG400 Alutec Electronic (LG 400-E)",
      "Manufacturing / Proof Year": "2022 / 2023 (Receiver DE 2022 / SN KB89437)",
      "Cylinder Validity": "Valid to March 2033 (03/33 ISSF Certified — SN 075185)",
      "Calibre": ".177 (4.5 mm)",
      "Operating System": "300 bar / 200 bar Compressed Air with Absorber",
      "Trigger": "Walther Electronic Match Trigger (E-Trigger) with Rechargeable Battery System",
      "Stock Material": "Natural Silver Anodized Aluminium Alutec Competition Chassis",
      "Grip & Buttplate": "3D Sculpted Protouch Match Grip, Walther Multi-Adjustable Aluminium Buttplate",
      "Velocity / Energy": "Approx. 170-175 m/s (< 7.5 Joules Competition Spec)"
    },
    conditionDisclosure: [
      "German proofmark DE 2022 with verified serial number KB89437 and LG 400-E electronic receiver marking.",
      "Original factory Walther compressed air cylinder certified valid until March 2033 (03/2033).",
      "Electronic trigger unit thoroughly tested: holds charge, instantaneous micro-switch break, and flawless dry-fire mode.",
      "Immaculate cosmetic condition with zero noticeable wear on silver aluminium stock or carbon shroud.",
      "Delivered in original factory Negrini hard case with Walther blue multi-tool, safety breech line, brass adapter, and paperwork."
    ],
    includedItems: [
      "2023 Walther LG400 Alutec Electronic 10m Air Rifle",
      "Original Walther High-Pressure Cylinder (Certified Valid to 03/2033)",
      "Original Fitted Negrini / Walther Hard Flight Case",
      "Walther Blue Folding Multi-Tool Hex Set",
      "Precision Match Sight Tunnel, Carbon Shroud & Risers",
      "Compressed Air Filling Adapter & Safety Breech Line",
      "Factory Manual & Sealed Target Paper Packet"
    ],
    badge: "Electronic Trigger",
    inStock: true,
    featured: true
  },
  {
    id: "walther-lg500-anatomic-e",
    slug: "walther-lg500-itec-anatomic-e",
    title: "Walther LG500 itec Anatomic E (Electronic Trigger) .177",
    brand: "Walther",
    category: "new-weapons",
    categoryLabel: "New Weapons",
    subcategory: "air-rifles",
    subcategoryLabel: "Match Air Rifles",
    isPreOwned: false,
    conditionGrade: "Brand New In Box",
    priceDisplay: "₹4,59,900",
    priceValue: 459900,
    taxNote: "Further 18% GST shall be applicable for non-renowned shooters",
    images: [
      "/images/products/rifles/walther-lg500-itec-anatomic-e-electronic-trigger.webp",
      "/images/products/rifles/walther-lg500-itec-anatomic-e-action.webp"
    ],
    shortDescription: "Walther's pinnacle 10m match air rifle featuring the revolutionary electronic trigger system and itec vibration absorption bedding.",
    fullDescription: "The Walther LG500 itec represents the latest pinnacle of precision sporting engineering. Featuring an ultra-precise electronic trigger with ball-bearing guidance and zero play, an itec balance and vibration management chassis, and an anatomically sculpted custom stock. Designed for Olympic and World Cup contenders seeking absolute shot stability and millimetric consistency.",
    specifications: {
      "Calibre": ".177 (4.5 mm)",
      "Trigger": "Electronic Trigger (E-Trigger) with micro-switch",
      "Energy": "Up to 7.5 Joules (Olympic 10m specification)",
      "Bedding": "itec adaptive bedding & carbon barrel jacket",
      "Cylinder": "300 bar / 200 bar high-capacity cylinder with manometer",
      "Stock": "Anatomic precision composite & alloy skeleton"
    },
    includedItems: [
      "Walther LG500 itec Anatomic E Rifle",
      "Walther Match Diopter & Foresight",
      "Charging cable & electronics kit",
      "Deluxe Walther hard travel case",
      "Factory inspection certificate & group test target"
    ],
    badge: "Olympic Flagship",
    inStock: true,
    featured: true
  },
  {
    id: "walther-lg500-anatomic-m",
    slug: "walther-lg500-itec-anatomic-m",
    title: "Walther LG500 itec Anatomic M (Mechanical Trigger) .177",
    brand: "Walther",
    category: "new-weapons",
    categoryLabel: "New Weapons",
    subcategory: "air-rifles",
    subcategoryLabel: "Match Air Rifles",
    isPreOwned: false,
    conditionGrade: "Brand New In Box",
    priceDisplay: "₹3,87,450",
    priceValue: 387450,
    taxNote: "Further 18% GST shall be applicable for non-renowned shooters",
    images: [
      "/images/products/rifles/walther-lg500-itec-anatomic-m-mechanical-trigger.webp"
    ],
    shortDescription: "Walther LG500 itec mechanical match air rifle with anatomic chassis and advanced carbon barrel shroud.",
    fullDescription: "Engineered for shooters who favor a crisp, mechanical two-stage break combined with Walther's newest itec recoil mitigation and balance dynamics. The Anatomic M delivers flawless ergonomic configurability and precision barrel resonance control.",
    specifications: {
      "Calibre": ".177 (4.5 mm)",
      "Trigger": "Mechanical two-stage match trigger (adjustable 50g-120g)",
      "Barrel": "Match precision barrel with carbon tension jacket",
      "Stock": "Alloy Anatomic Chassis with 3D cheek rest",
      "Weight": "Approx. 4.5 kg (adjustable with balance weights)"
    },
    includedItems: [
      "Walther LG500 itec M Rifle",
      "Match sight set & foresight tunnel",
      "High-pressure match cylinder",
      "Hard protective case and toolkit"
    ],
    badge: "Brand New Import",
    inStock: true,
    featured: true
  },
  {
    id: "walther-lg500-expert-m",
    slug: "walther-lg500-expert-m",
    title: "Walther LG500 Expert M with Biometric Protouch Grip",
    brand: "Walther",
    category: "new-weapons",
    categoryLabel: "New Weapons",
    subcategory: "air-rifles",
    subcategoryLabel: "Match Air Rifles",
    isPreOwned: false,
    conditionGrade: "Brand New In Box",
    priceDisplay: "₹3,11,745",
    priceValue: 311745,
    taxNote: "Further 18% GST shall be applicable for non-renowned shooters",
    images: [
      "/images/products/rifles/walther-lg500-expert-m-biometric-protouch-grip.webp"
    ],
    shortDescription: "Walther LG500 Expert M with warm wooden biometric grip, Protouch finish, available in Right or Left hand.",
    fullDescription: "The Expert M model combines the advanced LG500 platform with a classic biometric wooden grip enhanced with Protouch tactile coating. Provides supreme organic grip comfort, mechanical trigger reliability, and competition-ready modularity.",
    specifications: {
      "Calibre": ".177 (4.5 mm)",
      "Trigger": "Mechanical Match Trigger",
      "Grip": "Biometric Wooden Grip with Protouch surface (Right/Left)",
      "Action": "Pre-charged pneumatic, regulated 200 bar",
      "Sight": "Walther precision match diopter included"
    },
    includedItems: [
      "Walther LG500 Expert M Rifle",
      "Walther Match Diopter & Insight Sight Set",
      "Air Cylinder with Pressure Gauge",
      "Walther hard transit case"
    ],
    badge: "Brand New Import",
    inStock: true,
    featured: false
  },
  {
    id: "fwb-900-alu-centra",
    slug: "feinwerkbau-900-alu-air-rifle-centra-sight",
    title: "Feinwerkbau 900 Alu Cal .177 with Centra Sight & MeshPro Grip",
    brand: "Feinwerkbau",
    category: "new-weapons",
    categoryLabel: "New Weapons",
    subcategory: "air-rifles",
    subcategoryLabel: "Match Air Rifles",
    isPreOwned: false,
    conditionGrade: "Brand New In Box",
    priceDisplay: "₹3,70,000",
    priceValue: 370000,
    taxNote: "Further 18% GST shall be applicable for non-renowned shooters",
    images: [
      "/images/products/rifles/feinwerkbau-900-alu-centra-sight-meshpro.webp"
    ],
    shortDescription: "Flagship Feinwerkbau 900 Alu with Centra match sight set, innovative breathable 3D MeshPro grip, and full palm rest.",
    fullDescription: "Feinwerkbau's top-tier Model 900 Alu represents the pinnacle of German gunsmithing. Equipped with an advanced absorbing system, optimized loading lever, Centra precision diopter sight set, and the revolutionary 3D-printed MeshPro grip that guarantees sweat-free, slip-proof control in high-pressure finals.",
    specifications: {
      "Calibre": ".177 / 4.5mm",
      "Stock": "Aluminium chassis with extensive multi-axis adjustment",
      "Grip": "High-tech 3D MeshPro breathable structure",
      "Sights": "Centra precision match diopter & front sight",
      "Absorber": "Integrated impulse absorber for dead-still release"
    },
    includedItems: [
      "Feinwerkbau 900 Alu Rifle",
      "Centra Sight System",
      "3D MeshPro Grip, Palm Rest & Cheek Piece",
      "Original 200-bar Air Cylinder",
      "Feinwerkbau Lockable Hard Case & Manual"
    ],
    badge: "Championship Spec",
    inStock: true,
    featured: true
  },
  {
    id: "fwb-900-alu-meshpro",
    slug: "feinwerkbau-900-alu-air-rifle-meshpro",
    title: "Feinwerkbau 900 Alu Cal .177 with MeshPro Grip",
    brand: "Feinwerkbau",
    category: "new-weapons",
    categoryLabel: "New Weapons",
    subcategory: "air-rifles",
    subcategoryLabel: "Match Air Rifles",
    isPreOwned: false,
    conditionGrade: "Brand New In Box",
    priceDisplay: "₹3,60,000",
    priceValue: 360000,
    taxNote: "Further 18% GST shall be applicable for non-renowned shooters",
    images: [
      "/images/products/rifles/feinwerkbau-900-alu-meshpro-grip.webp"
    ],
    shortDescription: "Feinwerkbau 900 Alu with MeshPro grip, adjustable palm rest, and versatile cheek piece architecture.",
    fullDescription: "The pure competition configuration of the Feinwerkbau 900 Alu. Incorporates FWB's latest pneumatic valve train for reduced air turbulence, MeshPro 3D grip ergonomics, and modular weight rail attachments.",
    specifications: {
      "Calibre": ".177 / 4.5mm",
      "Stock": "Precision milled German aluminium",
      "Grip": "3D MeshPro ergonomic grip",
      "Cylinder": "Feinwerkbau match cylinder with manometer",
      "Trigger": "Match trigger with micro-bearings"
    },
    includedItems: [
      "Feinwerkbau 900 Alu Rifle",
      "FWB Match Diopter",
      "MeshPro Grip & Accessories",
      "Hard protective rifle case"
    ],
    badge: "Brand New Import",
    inStock: true,
    featured: false
  },
  {
    id: "steyr-challenge-e",
    slug: "steyr-challenge-electronic-air-rifle",
    title: "Steyr Challenge Electronic (E) 10m Air Rifle",
    brand: "Steyr",
    category: "new-weapons",
    categoryLabel: "New Weapons",
    subcategory: "air-rifles",
    subcategoryLabel: "Match Air Rifles",
    isPreOwned: false,
    conditionGrade: "Brand New In Box",
    priceDisplay: "₹3,40,000",
    priceValue: 340000,
    taxNote: "Further 18% GST shall be applicable for non-renowned shooters",
    images: [
      "/images/products/rifles/steyr-challenge-electronic-match-air-rifle.webp"
    ],
    shortDescription: "Austrian precision match rifle with electronic contact trigger, patented stabilizer, and nickel-plated barrel.",
    fullDescription: "The Steyr Challenge E sets the international benchmark for vibration-free shooting. The patented Steyr stabilizer and electronic micro-switch trigger eliminate movement during release. Anodized aluminium stock offers limitless adjustment for three-position and 10m standing disciplines.",
    specifications: {
      "Calibre": ".177 (4.5 mm)",
      "Trigger": "Electronic match trigger (adjustable from 15g to 250g)",
      "Stabilizer": "Patented Steyr tungsten impulse compensator",
      "Barrel": "Precision match barrel, nickel-plated finish",
      "Stock": "Steyr multi-position aluminium match stock"
    },
    includedItems: [
      "Steyr Challenge E Rifle",
      "Steyr precision rear diopter and front globe sight",
      "Rechargeable battery and charging module",
      "Steyr factory hard case with tools"
    ],
    badge: "Electronic Match",
    inStock: true,
    featured: true
  },
  {
    id: "morini-cm200ei",
    slug: "morini-cm200ei-ticino-air-pistol",
    title: "Morini CM200EI Ticino Air Pistol (Red/Blue)",
    brand: "Morini",
    category: "new-weapons",
    categoryLabel: "New Weapons",
    subcategory: "air-pistols",
    subcategoryLabel: "Match Air Pistols",
    isPreOwned: false,
    conditionGrade: "Brand New In Box",
    priceDisplay: "₹2,85,900",
    priceValue: 285900,
    taxNote: "Further 18% GST shall be applicable for non-renowned shooters",
    images: [
      "/images/products/pistols/morini-cm200ei-ticino-electronic-air-pistol.webp"
    ],
    shortDescription: "The gold standard of Olympic 10m air pistols. Electronic ball-bearing trigger, Lothar Walther polygon barrel, and striking Ticino anodizing.",
    fullDescription: "Morini CM 200EI is the world-renowned choice of Olympic champions. Featuring the revolutionary electronic trigger with CR2 lithium battery delivering over 35,000 shots per battery. Equipped with Lothar Walther polygonal rifling, carbon fibre barrel compensator, and hand-finished Swiss walnut anatomic grips.",
    specifications: {
      "Calibre": ".177 (4.5 mm)",
      "Trigger": "Electronic ball-bearing trigger with micro-switch (500g factory set)",
      "Barrel": "Lothar Walther polygon barrel with carbon shroud",
      "Grip": "Selected Swiss Walnut anatomical grip (Morini original)",
      "Colorway": "Ticino Red/Blue anodized frame",
      "Sight Radius": "Adjustable from 310mm to 350mm"
    },
    includedItems: [
      "Morini CM200EI Air Pistol",
      "Two 200-bar Air Cylinders with Digital/Analog Gauges",
      "Morini Deluxe Padded Hard Pistol Case",
      "Factory test group card & tools"
    ],
    badge: "World Champion Choice",
    inStock: true,
    featured: true
  },
  {
    id: "steyr-evo-10e",
    slug: "steyr-evo-10-e-sx-compact-black",
    title: "Steyr EVO 10 E SX Compact Black Air Pistol",
    brand: "Steyr",
    category: "new-weapons",
    categoryLabel: "New Weapons",
    subcategory: "air-pistols",
    subcategoryLabel: "Match Air Pistols",
    isPreOwned: false,
    conditionGrade: "Brand New In Box",
    priceDisplay: "₹2,67,500",
    priceValue: 267500,
    taxNote: "Further 18% GST shall be applicable for non-renowned shooters",
    images: [
      "/images/products/pistols/steyr-evo-10-e-sx-compact-black-air-pistol.webp"
    ],
    shortDescription: "Steyr EVO 10 E with gold-plated electronic trigger contacts, 8-duct compensator, and compact black frame.",
    fullDescription: "The Steyr EVO 10 E incorporates electronic trigger contacts coated in gold for consistent resistance and zero tactile drag. The 8-duct compensator system prevents muzzle rise, while the rotating front sight and rear notch adjustment provide unbeatable target picture acuity.",
    specifications: {
      "Calibre": ".177 (4.5 mm)",
      "Trigger": "Electronic contact trigger, rechargeable via micro-USB",
      "Compensator": "Patented 8-duct muzzle stabilizer",
      "Sight": "Rotatable front sight & micro-adjustable rear sight",
      "Grip": "Sculpted walnut match grip"
    },
    includedItems: [
      "Steyr EVO 10 E Compact Pistol",
      "Two Steyr 200-bar Air Cylinders",
      "Micro-USB charging adapter & cable",
      "Steyr protective hard case with barrel weights"
    ],
    badge: "Brand New Import",
    inStock: true,
    featured: false
  },
  {
    id: "morini-cm-162ei",
    slug: "morini-cm-162ei-electronic-air-pistol",
    title: "Morini CM 162EI Electronic 10m Air Pistol",
    brand: "Morini",
    category: "new-weapons",
    categoryLabel: "New Weapons",
    subcategory: "air-pistols",
    subcategoryLabel: "Match Air Pistols",
    isPreOwned: false,
    conditionGrade: "Brand New In Box",
    priceDisplay: "₹2,35,900",
    priceValue: 235900,
    taxNote: "Further 18% GST shall be applicable for non-renowned shooters",
    images: [
      "/images/products/pistols/morini-cm-162ei-electronic-10m-air-pistol.webp"
    ],
    shortDescription: "Morini's proven electronic match pistol with digital pressure manometer and classic walnut match grip.",
    fullDescription: "A trusted workhorse at international competitions worldwide. The CM 162EI is renowned for its ultra-smooth electronic trigger break, outstanding shot-to-shot velocity consistency, and comfortable anatomical walnut grip.",
    specifications: {
      "Calibre": ".177 (4.5 mm)",
      "Trigger": "Electronic trigger with ball-bearing guide",
      "Manometer": "Integrated digital pressure gauge",
      "Grip": "Swiss walnut match anatomical grip",
      "Weight": "Approx. 1,020 g"
    },
    includedItems: [
      "Morini CM 162EI Pistol",
      "Two Morini 200-bar Compressed Air Cylinders",
      "Hard protective carry case",
      "Factory manual & battery"
    ],
    badge: "Proven Champion",
    inStock: true,
    featured: false
  },
  {
    id: "morini-cm-162mi",
    slug: "morini-cm-162mi-mechanical-air-pistol",
    title: "Morini CM 162MI Mechanical 10m Air Pistol",
    brand: "Morini",
    category: "new-weapons",
    categoryLabel: "New Weapons",
    subcategory: "air-pistols",
    subcategoryLabel: "Match Air Pistols",
    isPreOwned: false,
    conditionGrade: "Brand New In Box",
    priceDisplay: "₹2,12,900",
    priceValue: 212900,
    taxNote: "Further 18% GST shall be applicable for non-renowned shooters",
    images: [
      "/images/products/pistols/morini-cm-162mi-mechanical-10m-air-pistol.webp"
    ],
    shortDescription: "Mechanical trigger variant of Morini's 162 platform. Superb tactile feedback, reliable mechanics, and Lothar Walther barrel.",
    fullDescription: "For shooters who demand a purely mechanical trigger mechanism without electronic dependencies. The CM 162MI delivers an exquisitely crisp let-off, full adjustability of first and second stage weights, and Morini's renowned barrel precision.",
    specifications: {
      "Calibre": ".177 (4.5 mm)",
      "Trigger": "Mechanical match trigger (fully adjustable)",
      "Barrel": "Lothar Walther match precision barrel",
      "Grip": "Swiss walnut anatomical grip",
      "Cylinder": "200-bar air cylinder with gauge"
    },
    includedItems: [
      "Morini CM 162MI Pistol",
      "Two Air Cylinders",
      "Original Hard Carry Case",
      "Toolkit & filling adapter"
    ],
    badge: "Mechanical Precision",
    inStock: true,
    featured: false
  },
  {
    id: "mec-spy-long",
    slug: "mec-spy-long-rear-sight",
    title: "MEC Spy Long Rear Match Sight",
    brand: "MEC",
    category: "accessories",
    categoryLabel: "Accessories",
    subcategory: "sights",
    subcategoryLabel: "Match Diopter Sights",
    isPreOwned: false,
    conditionGrade: "Brand New In Box",
    priceDisplay: "₹65,000",
    priceValue: 65000,
    taxNote: "Inclusive of standard import duties",
    images: [
      "/images/products/accessories/mec-spy-long-rear-match-sight.webp"
    ],
    shortDescription: "MEC Spy Long rear match diopter with micro-click windage and elevation adjustments for 10m and 50m rifles.",
    fullDescription: "The MEC Spy Long is one of the most widely used precision rear sights among international target rifle shooters. Engineered with zero backlash, 24-click rotation for ultra-fine sub-millimetric point-of-impact adjustments, and high-grade matte black anti-reflective coating.",
    specifications: {
      "Mounting": "Fits standard 11mm Anschütz, Walther, Feinwerkbau dovetail rails",
      "Clicks": "Ultra-precise 24-click per rotation",
      "Length": "Long version for extended sight radius",
      "Finish": "Anti-glare black anodized"
    },
    badge: "Precision Optics",
    inStock: true,
    featured: false
  },
  {
    id: "mec-spy-short",
    slug: "mec-spy-short-rear-sight",
    title: "MEC Spy Short Rear Match Sight",
    brand: "MEC",
    category: "accessories",
    categoryLabel: "Accessories",
    subcategory: "sights",
    subcategoryLabel: "Match Diopter Sights",
    isPreOwned: false,
    conditionGrade: "Brand New In Box",
    priceDisplay: "₹65,000",
    priceValue: 65000,
    taxNote: "Inclusive of standard import duties",
    images: [
      "/images/products/accessories/mec-spy-short-rear-match-sight.webp"
    ],
    shortDescription: "Compact MEC Spy Short rear match diopter designed for optimal head position and compact sight line balance.",
    fullDescription: "A compact profile variant of the acclaimed MEC Spy diopter. Perfect for shooters who prefer a closer eye-to-sight relief and reduced overall weight on the rear stock rail.",
    specifications: {
      "Mounting": "Universal 11mm match dovetail",
      "Profile": "Short compact chassis",
      "Click Value": "0.2mm per click at 10m",
      "Compatibility": "Feinwerkbau, Walther, Anschütz, Bleiker"
    },
    badge: "Match Sight",
    inStock: true,
    featured: false
  },
  {
    id: "mec-duplex-vario",
    slug: "mec-duplex-vario",
    title: "MEC Duplex Vario (3.4-4.4 / 3.8-4.8)",
    brand: "MEC",
    category: "accessories",
    categoryLabel: "Accessories",
    subcategory: "sights",
    subcategoryLabel: "Optical Accessories",
    isPreOwned: false,
    conditionGrade: "Brand New In Box",
    priceDisplay: "₹44,000",
    priceValue: 44000,
    taxNote: "Available in 3.4-4.4mm and 3.8-4.8mm optical ranges",
    images: [
      "/images/products/accessories/mec-duplex-vario-iris-aperture.webp"
    ],
    shortDescription: "Centering optical iris attachment that sharpens target ring concentricity and eliminates parallax alignment errors.",
    fullDescription: "The MEC Duplex Vario mounts between the rear sight and front sight tunnel, providing a secondary centering ring that guarantees perfect coaxial eye alignment. Highly recommended for 10m air rifle shooters aiming for consistent 10.5+ inner rings.",
    specifications: {
      "Aperture Range": "3.4 - 4.4 mm / 3.8 - 4.8 mm variable",
      "Material": "Precision machined aluminium & glass optics",
      "Benefit": "Eliminates aiming parallax and improves cant consistency"
    },
    badge: "Optics Upgrade",
    inStock: true,
    featured: false
  },
  {
    id: "mec-contact-4",
    slug: "mec-contact-4-buttplate",
    title: "MEC Contact 4 Match Buttplate",
    brand: "MEC",
    category: "accessories",
    categoryLabel: "Accessories",
    subcategory: "accessories",
    subcategoryLabel: "Stock Hardware",
    isPreOwned: false,
    conditionGrade: "Brand New In Box",
    priceDisplay: "₹53,500",
    priceValue: 53500,
    taxNote: "ISSF compliant 3-element adjustable buttplate",
    images: [
      "/images/products/accessories/mec-contact-4-match-buttplate.webp"
    ],
    shortDescription: "The gold standard in anatomical shoulder contact plates with independent three-point contour adjustment.",
    fullDescription: "MEC Contact 4 offers unmatched anatomical shoulder contouring. Three individually articulated contact wings adapt to the shooter's jacket and collarbone, ensuring 100% stable rifle positioning during long competition matches.",
    specifications: {
      "Wings": "3 independently adjustable rubberized contact wings",
      "Compliance": "Meets all ISSF dimensional regulations",
      "Mounting": "Universal fitment for match stock backplates"
    },
    badge: "Ergonomics",
    inStock: true,
    featured: false
  },
  {
    id: "mec-cheek-piece-pro",
    slug: "mec-cheek-piece-pro-aw-fwb",
    title: "MEC Cheek Piece Pro (Anschütz / Walther / Feinwerkbau)",
    brand: "MEC",
    category: "accessories",
    categoryLabel: "Accessories",
    subcategory: "accessories",
    subcategoryLabel: "Stock Hardware",
    isPreOwned: false,
    conditionGrade: "Brand New In Box",
    priceDisplay: "₹43,500",
    priceValue: 43500,
    taxNote: "Compatible with Anschütz, Walther, and Feinwerkbau stocks",
    images: [
      "/images/products/accessories/mec-cheek-piece-pro-aw-fwb.webp"
    ],
    shortDescription: "Multi-axis adjustable match cheek piece providing millimeter-precise height, tilt, and lateral displacement.",
    fullDescription: "Finding repeatable head placement is critical to shooting technique. The MEC Cheek Piece Pro provides smooth, rock-solid fine adjustment across three rotational axes and two lateral planes, fitting standard rifle stocks from FWB, Walther, and Anschütz.",
    specifications: {
      "Adjustment": "Height, tilt, rotation, and lateral offset",
      "Finish": "Hard coat anodized with skin-friendly touch surface",
      "Mounting": "Adapters for FWB, Walther, Anschütz included"
    },
    badge: "Stock Hardware",
    inStock: true,
    featured: false
  },
  {
    id: "sauer-rifle-shoes-perfect-top",
    slug: "sauer-rifle-shoes-perfect-top",
    title: "Sauer Rifle Shoes – Perfect Top (All Sizes & Colours)",
    brand: "Sauer",
    category: "accessories",
    categoryLabel: "Accessories",
    subcategory: "footwear",
    subcategoryLabel: "Competition Footwear",
    isPreOwned: false,
    conditionGrade: "Brand New In Box",
    priceDisplay: "₹35,500",
    priceValue: 35500,
    taxNote: "All sizes and custom color configurations available on enquiry",
    images: [
      "/images/products/accessories/sauer-rifle-shoes-perfect-top.webp"
    ],
    shortDescription: "The most successful rifle shooting boot on the international stage with rigid cast sole and thermo-molding upper.",
    fullDescription: "Sauer Perfect Top boots provide the ultimate stable stance required for 10m and 50m rifle disciplines. Featuring a dual-density flat sole complying strictly with ISSF stiffness standards, high ankle support, and interchangeable color accents.",
    specifications: {
      "Discipline": "10m Air Rifle / 50m 3-Position Rifle",
      "Sole": "ISSF compliant flat cast stability sole",
      "Upper": "High-durability synthetic leather with breathing vents",
      "Sizing": "EU 36 to 48 (All sizes available on enquiry)"
    },
    badge: "Best Seller",
    inStock: true,
    featured: true
  },
  {
    id: "sauer-pistol-shoes-easy-top",
    slug: "sauer-pistol-shoes-easy-top",
    title: "Sauer Pistol Shoes – Easy Top",
    brand: "Sauer",
    category: "accessories",
    categoryLabel: "Accessories",
    subcategory: "footwear",
    subcategoryLabel: "Competition Footwear",
    isPreOwned: false,
    conditionGrade: "Brand New In Box",
    priceDisplay: "₹33,500",
    priceValue: 33500,
    taxNote: "Engineered specifically for 10m & 25m pistol stance stability",
    images: [
      "/images/products/accessories/sauer-pistol-shoes-easy-top.webp"
    ],
    shortDescription: "Specialized shooting shoes designed specifically for air pistol athletes needing grounded balance and reduced foot fatigue.",
    fullDescription: "Unlike bulky rifle boots, the Sauer Easy Top provides a low-cut ankle profile with a wide, planar sole designed to maximize ground sensory contact and stabilize the one-handed pistol stance throughout 60-shot qualification matches.",
    specifications: {
      "Discipline": "10m Air Pistol / 25m Sport Pistol",
      "Cut": "Low-cut ankle freedom with reinforced heel counter",
      "Sole": "Wide planar anti-roll rubber sole"
    },
    badge: "Pistol Footwear",
    inStock: true,
    featured: false
  },
  {
    id: "ahg-shooting-boots-allround",
    slug: "ahg-shooting-boots-allround",
    title: "ahg – Shooting Boots Allround",
    brand: "ahg-Anschütz",
    category: "accessories",
    categoryLabel: "Accessories",
    subcategory: "footwear",
    subcategoryLabel: "Competition Footwear",
    isPreOwned: false,
    conditionGrade: "Brand New In Box",
    priceDisplay: "₹33,500",
    priceValue: 33500,
    taxNote: "ISSF approved all-round competition boots",
    images: [
      "/images/products/accessories/ahg-anschutz-shooting-boots-allround.webp"
    ],
    shortDescription: "Versatile German shooting boots by ahg-Anschütz delivering robust ankle stability and all-day comfort.",
    fullDescription: "Manufactured in Germany by ahg-Anschütz, the Allround boots feature an anatomically curved footbed, four-zone lacing for customized tightness, and an ultra-stiff planar sole that guarantees consistent balance.",
    specifications: {
      "Brand": "ahg-Anschütz Germany",
      "Sole": "Stiff flat match sole meeting ISSF standards",
      "Lacing": "Four-zone speed lace hooks"
    },
    badge: "German Quality",
    inStock: true,
    featured: false
  },
  {
    id: "ahg-shooting-boots-strong",
    slug: "ahg-shooting-boots-strong",
    title: "ahg – Shooting Boots STRONG for Rifle",
    brand: "ahg-Anschütz",
    category: "accessories",
    categoryLabel: "Accessories",
    subcategory: "footwear",
    subcategoryLabel: "Competition Footwear",
    isPreOwned: false,
    conditionGrade: "Brand New In Box",
    priceDisplay: "₹35,500",
    priceValue: 35500,
    taxNote: "Heavy-duty reinforcement for maximum standing rigidity",
    images: [
      "/images/products/accessories/ahg-anschutz-shooting-boots-allround.webp"
    ],
    shortDescription: "Extra-reinforced high-ankle rifle shooting boots designed for athletes seeking maximum lateral foot lock.",
    fullDescription: "The STRONG edition by ahg-Anschütz offers additional medial and lateral TPU stabilizers along the ankle collar, preventing micro-sways in the standing position.",
    specifications: {
      "Brand": "ahg-Anschütz Germany",
      "Reinforcement": "High-rigidity lateral ankle struts",
      "Sole": "Flat competition platform"
    },
    badge: "Max Support",
    inStock: true,
    featured: false
  },
  {
    id: "corami-rifle-shoes",
    slug: "corami-shoes-for-rifle-shooting",
    title: "Corami Shoes for Rifle Shooting",
    brand: "Corami",
    category: "accessories",
    categoryLabel: "Accessories",
    subcategory: "footwear",
    subcategoryLabel: "Competition Footwear",
    isPreOwned: false,
    conditionGrade: "Brand New In Box",
    priceDisplay: "₹30,900",
    priceValue: 30900,
    taxNote: "Italian handcrafted precision shooting footwear",
    images: [
      "/images/products/accessories/corami-shoes-rifle-shooting.webp"
    ],
    shortDescription: "Italian precision shooting shoes offering an exceptional blend of stiffness, foot support, and breathable leather.",
    fullDescription: "Corami footwear is crafted in Italy with top-grain leather and precision vulcanized composite soles. Renowned for supreme durability and natural fit for athletes who spend hours on the firing line.",
    specifications: {
      "Origin": "Handcrafted in Italy",
      "Material": "Top-grain Italian leather upper",
      "Sole": "Vulcanized anti-slip flat match sole"
    },
    badge: "Italian Craft",
    inStock: true,
    featured: false
  },
  {
    id: "rws-r10-match-rifle-449",
    slug: "rws-r10-match-rifle-449mm",
    title: "RWS R10 Match Rifle .177 Cal 4.49mm (500ct)",
    brand: "RWS",
    category: "pellets",
    categoryLabel: "Pellets",
    subcategory: "pellets",
    subcategoryLabel: "Match Pellets",
    isPreOwned: false,
    conditionGrade: "Brand New Factory Sealed",
    priceDisplay: "₹1,020",
    priceValue: 1020,
    taxNote: "Batch-selected 8.2 Grains wadcutter (500 pellets per tin)",
    images: [
      "/images/products/pellets/rws-r10-match-rifle-pellets-449mm.webp"
    ],
    shortDescription: "World-class competition match pellets, 4.49mm head size, 8.2 grains, flat head wadcutter for razor-clean hole cuts.",
    fullDescription: "RWS R10 Match pellets are selected from the finest manufacturing batches and subjected to strict dimensional and weight testing. The 4.49mm head diameter is favored by shooters with tight match barrel tolerances (Feinwerkbau, Walther, Steyr) for tightest 10.9 groupings.",
    specifications: {
      "Calibre": ".177 (4.5mm)",
      "Head Size": "4.49 mm",
      "Weight": "0.53 g / 8.2 Grains",
      "Shape": "Flat head Wadcutter",
      "Tin Quantity": "500 pellets per sealed tin"
    },
    badge: "Batch Selected",
    inStock: true,
    featured: true
  },
  {
    id: "rws-r10-match-pistol-450",
    slug: "rws-r10-match-pistol-450mm",
    title: "RWS R10 Match Pistol .177 Cal 4.50mm (500 Nos)",
    brand: "RWS",
    category: "pellets",
    categoryLabel: "Pellets",
    subcategory: "pellets",
    subcategoryLabel: "Match Pellets",
    isPreOwned: false,
    conditionGrade: "Brand New Factory Sealed",
    priceDisplay: "₹1,020",
    priceValue: 1020,
    taxNote: "Including Courier charges | 7.0 Grains Wadcutter",
    images: [
      "/images/products/pellets/rws-r10-match-pistol-pellets-450mm.webp"
    ],
    shortDescription: "Lighter 7.0 grains wadcutter pellets optimized for 10m air pistol velocities with included courier delivery across India.",
    fullDescription: "Specially weighted at 7.0 grains (0.45g) for the lower velocity and barrel dwell times of competition 10m air pistols (Morini, Steyr, Walther). Price includes courier delivery charges directly to your shooting club or residence.",
    specifications: {
      "Calibre": ".177 (4.5mm)",
      "Head Size": "4.50 mm (also available in 4.49 mm)",
      "Weight": "0.45 g / 7.0 Grains",
      "Shape": "Flat head Wadcutter",
      "Delivery": "Courier charges included"
    },
    badge: "Includes Courier",
    inStock: true,
    featured: true
  },
  {
    id: "rws-r10-match-rifle-450",
    slug: "rws-r10-match-rifle-450mm",
    title: "RWS R10 Match Rifle .177 Cal 4.50mm (500ct)",
    brand: "RWS",
    category: "pellets",
    categoryLabel: "Pellets",
    subcategory: "pellets",
    subcategoryLabel: "Match Pellets",
    isPreOwned: false,
    conditionGrade: "Brand New Factory Sealed",
    priceDisplay: "₹1,020",
    priceValue: 1020,
    taxNote: "Standard match 8.2 Grains wadcutter (500 pellets per tin)",
    images: [
      "/images/products/pellets/rws-r10-match-rifle-pellets-450mm.webp",
      "/images/products/pellets/rws-r10-match-rifle-pellets-450mm-tins.webp"
    ],
    shortDescription: "The universal 4.50mm match rifle pellet trusted for Olympic and national trials worldwide.",
    fullDescription: "The gold-standard 4.50mm RWS R10 Match Rifle pellet. Delivering flawless aerodynamics and clean-cut round holes in paper target scoring and electronic target frames alike.",
    specifications: {
      "Calibre": ".177 (4.5mm)",
      "Head Size": "4.50 mm",
      "Weight": "0.53 g / 8.2 Grains",
      "Shape": "Flat head Wadcutter",
      "Packaging": "500ct precision sealed tin"
    },
    badge: "Match Standard",
    inStock: true,
    featured: false
  }
];

export const CATEGORIES = [
  {
    slug: "second-hand-weapons",
    title: "Second-Hand Weapons",
    subtitle: "Verified pre-owned 10m air rifles & pistols with transparent inspection history",
    count: 5,
    tag: "Priority Focus",
    image: "/images/products/rifles/feinwerkbau-800-alu-2018-cylinder-2024.webp",
    description: "Every pre-owned listing on ArmsXchange goes through strict manual review: cylinder manufacturing dates, pressure integrity, and cosmetic condition disclosures."
  },
  {
    slug: "new-weapons",
    title: "New Weapons",
    subtitle: "Brand-new Olympic air rifles & pistols from Walther, Feinwerkbau, Steyr & Morini",
    count: 10,
    tag: "Olympic Brands",
    image: "/images/products/rifles/walther-lg500-itec-anatomic-e-electronic-trigger.webp",
    description: "Direct access to world-leading competition rifles and match pistols with full manufacturer warranty and clear GST disclosures."
  },
  {
    slug: "accessories",
    title: "Shooting Accessories",
    subtitle: "MEC precision sights, buttplates, Sauer & AHG boots, Corami footwear",
    count: 10,
    tag: "Competition Gear",
    image: "/images/products/accessories/sauer-rifle-shoes-perfect-top.webp",
    description: "Fine-tune your setup with competition sights, anatomical buttplates, and ISSF-approved match footwear for rifle and pistol disciplines."
  },
  {
    slug: "pellets",
    title: "Match Pellets",
    subtitle: "RWS R10 batch-selected match rifle and pistol .177 flat head wadcutters",
    count: 3,
    tag: "Precision Ammunition",
    image: "/images/products/pellets/rws-r10-match-rifle-pellets-449mm.webp",
    description: "Competition-tested pellets in calibrated 4.49mm and 4.50mm head sizes for pinpoint 10-ring grouping."
  }
];

export const CONTACT_INFO = {
  // Primary WhatsApp & Orders line
  whatsappPhone: "+91 8922012598",
  whatsappPhoneDisplay: "+91 89220 12598",
  whatsappPhoneRaw: "918922012598",
  whatsappBaseUrl: "https://wa.me/918922012598",

  // Primary Phone (WhatsApp & Orders)
  phone: "+91 8922012598",
  phoneRaw: "918922012598",
  phoneDisplay: "+91 89220 12598",

  // Direct Consultation & Support Line (Retained Old Number)
  secondaryPhone: "+91 6392421574",
  secondaryPhoneRaw: "916392421574",
  secondaryPhoneDisplay: "+91 63924 21574",

  founder: "Pranatpal Singh",
  founderTitle: "Founder, National-Level Shooter & Coach (1 Year)",
  brandMotto: "Every Shooter Deserves a Fair Start.",
  location: "India",
  armsActDisclaimer: "ArmsXchange operates in strict compliance with the Indian Arms Act & Arms Rules 2016 for 0.177 calibre (4.5mm) air weapons with muzzle energy under 20 Joules. All enquiries undergo manual verification. 18% GST applicable for non-renowned shooters on new weapons as per Indian tax norms."
};

export function getWhatsAppListingUrl(productTitle: string, currentUrl?: string): string {
  const text = encodeURIComponent(`Hi Pranatpal, I am enquiring about ${productTitle} listed on ArmsXchange${currentUrl ? ` (${currentUrl})` : ''}. Could you please share availability and next steps?`);
  return `${CONTACT_INFO.whatsappBaseUrl}?text=${text}`;
}
