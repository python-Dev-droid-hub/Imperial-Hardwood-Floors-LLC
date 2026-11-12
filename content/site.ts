export const site = {
  businessName: "Imperial Hardwood Floors LLC",
  contactName: "Imperial Hardwood Floors",
  email: "imperialhardwoodfloor@gmail.com",
  /** Public listing phone — confirm before marketing push. */
  phone: "(913) 927-3985",
  phoneHref: "tel:+19139273985",
  hours: "Monday–Saturday, 8:00 AM–7:00 PM",
  hoursShort: "Mon–Sat, 8 AM–7 PM",
  /** Displayed with hours; Olathe, KS uses Central Time. */
  hoursTimezoneLabel: "Central Time",
  service: "Floor installation",
  location: "Olathe, Kansas",
  locationShort: "Olathe, KS",
  /** Single focus market for this site. */
  servingAreas: ["Olathe, KS"] as const,
  /**
   * Public profile URLs for Organization/LocalBusiness sameAs (social schema).
   * Add Facebook, Instagram, Google Business, Yelp, etc. when available.
   */
  socialProfiles: [] as readonly string[],
  /** Static for Cache Components / prerender — update yearly. */
  copyrightYear: 2026,
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact Us", href: "/#contact" },
  {
    label: "Serving Areas",
    href: "/serving-area",
    attract: true,
  },
] as const;

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Serving Areas", href: "/serving-area" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact Us", href: "/#contact" },
] as const;

export const heroContent = {
  eyebrow: "Flooring Services in Olathe KS",
  /** Primary H1 — use \n for intentional line breaks */
  headline:
    "Your Trusted & Professional Residential or\nCommercial Flooring Services Contractor\nOlathe KS",
  brandLine: "",
  supporting:
    "Protect your investment with Imperial Hardwood Floors LLC, a local and trusted commercial or residential building flooring installation services contractor in Olathe KS. Work with our best and skilled commercial or residential building hardwood flooring services agency for flawless office buildings flooring installation or repair services and comprehensive hardwood floor repair or maintenance services.",
  primaryCta: { label: "Request an Estimate", href: "/#contact" },
  secondaryCta: { label: "About Us", href: "/#about" },
} as const;

export const servicesPageBanner = {
  eyebrow: "Flooring Services in Olathe KS",
  headline:
    "Your Trusted & Professional Residential or\nCommercial Flooring Services Contractor\nOlathe KS",
  supporting:
    "Protect your investment with Imperial Hardwood Floors LLC, a local and trusted commercial or residential building flooring installation services contractor in Olathe KS. Work with our best and skilled commercial or residential building hardwood flooring services agency for flawless office buildings flooring installation or repair services and comprehensive hardwood floor repair or maintenance services.",
} as const;

export const aboutContent = {
  eyebrow: "About Us",
  heading:
    "Imperial Hardwood Floors LLC Best Choice for Commercial or Residential Building Custom or Wood Floor Install or Replace Services Contractor or Company Olathe KS",
  paragraphs: [
    "At Imperial Hardwood Floors LLC, we take pride in delivering top-tier craftsmanship for every property. Whether you are upgrading your home or renovating a business space, we are your premier choice for high-quality floor installation and complete replacements.",
    "Our team specializes in premium hardwood floors, durable laminate, custom staircase transformations, and detailed custom work tailored to your design vision. Beyond new installs, our expert floor repair services restore strength and elegance to worn or damaged surfaces. From minor touch-ups to full-scale commercial installations in Olathe, KS, we deliver lasting durability and precision woodwork designed to enhance your property's overall value.",
  ],
  cta: { label: "Request an Estimate", href: "/#contact" },
  image: {
    src: "/images/hero/floor-detail.jpg",
    alt: "Wide-plank hardwood flooring installed through a residential hallway",
  },
} as const;

export const servicesContent = {
  eyebrow: "Floor Installation",
  title:
    "Hire Now a Professional Hardwood Floor Installation Services Provider Olathe KS",
  description:
    "Work with our best and skilled commercial or residential building hardwood flooring services agency for flawless office buildings flooring installation or repair services and comprehensive hardwood floor repair or maintenance services.",
  items: [
    {
      title: "New Floor Installation",
      body: "We expertly install premium hardwood, laminate, and custom flooring engineered for durability, seamless performance, and long-lasting beauty in any space.",
      image: "/images/hero/floor-hero.jpg",
      alt: "Dark hardwood flooring installed in a finished bedroom",
    },
    {
      title: "Floor Replacement",
      body: "Upgrade your property by safely removing old, worn surfaces and replacing them with high-quality, modern flooring materials built to last.",
      image: "/images/hero/floor-planks.jpg",
      alt: "Light hardwood flooring spanning an open living and dining space",
    },
    {
      title: "Floor Repair",
      body: "Restore the elegance and strength of your existing floors with expert repairs targeting scratches, water damage, warping, and structural wear.",
      image: "/images/hero/floor-living.jpg",
      alt: "Hardwood flooring in a remodeled residential living space",
    },
  ],
} as const;

export const ctaContent = {
  eyebrow: "Hire Now",
  heading:
    "Hire Now a Imperial Hardwood Floors LLC for Your Flooring Installation",
  body: "Choose Imperial Hardwood Floors LLC for flawless installation. Our skilled team delivers premium craftsmanship, durable materials, and precise execution to transform your residential or commercial space in Olathe, KS.",
} as const;

export const serviceAreaContent = {
  eyebrow: "Service Area",
  title:
    "Certified Or Trusted Flooring Installation or Replacement Services Agency",
  intro:
    "Choosing a certified and trusted agency ensures your property receives top-tier craftsmanship and durable materials built to last. Imperial Hardwood Floors LLC brings years of proven expertise to every project, delivering seamless flooring installation and structural replacement tailored to your needs.",
  sections: [
    {
      heading: "Floor Installation",
      body: [
        "Our skilled installers deliver precise, seamless floor installation tailored to your specific residential or commercial layout. We handle every phase with meticulous attention to detail, preparing subfloors correctly to guarantee lasting stability. Upgrade your space with durable, high-performing floors designed to withstand high foot traffic while enhancing aesthetic appeal.",
      ],
    },
    {
      heading: "Hardwood Floors",
      body: [
        "Enhance your property’s elegance and value with our premium hardwood floors selection. We expertly craft, lay, and fit solid or engineered wood options that bring warmth and classic sophistication to any interior. Enjoy timeless beauty, natural durability, and top-tier craftsmanship engineered to last for generations to come.",
      ],
    },
    {
      heading: "Laminate",
      body: [
        "Get the striking look of real hardwood or natural stone at a budget-friendly price point with modern laminate flooring. Engineered for high resilience, our quality laminate materials offer exceptional resistance against scratches, dents, and daily wear. It is an ideal, low-maintenance solution for busy households and active commercial spaces.",
      ],
    },
    {
      heading: "Staircase",
      body: [
        "Transform your staircase into a breathtaking architectural centerpiece with our specialized woodworking and fitting services. We craft custom treads, risers, and trim elements that integrate seamlessly with your surrounding floors. Trust our team to improve safety, structural integrity, and visual flow across every level of your property.",
      ],
    },
    {
      heading: "Custom Work",
      body: [
        "Bring your unique design vision to reality with our bespoke custom work solutions. From intricate border accents and unique inlay patterns to custom stains, we tailor every detail to your exact specifications. We turn complex flooring concepts into one-of-a-kind visual statements that set your property apart effortlessly.",
      ],
    },
    {
      heading: "Floor Repair or Replacement",
      body: [
        "Restore safety, strength, and beauty to damaged surfaces with our floor repair or replacement services. We tackle everything from minor scratches, warping, and board replacements to full structural overhauls. Our team accurately matches existing finishes and materials, ensuring a smooth, flawless outcome that looks good as new.",
      ],
    },
  ],
  cta: { label: "Request an Estimate", href: "/#contact" },
  image: {
    src: "/images/service-area/olathe-landmark.png",
    alt: "Clock tower and plaza landmark in Olathe, Kansas",
    caption: "Olathe, KS",
  },
} as const;

export const reviewsContent = {
  eyebrow: "Customer Reviews",
  title: "Trusted for floor installation in Olathe",
  body: "Sample homeowner feedback for layout. Replace these with verified Imperial Hardwood Floors LLC reviews when you have them—no invented star ratings.",
  cta: { label: "Talk About Your Project", href: "/#contact" },
  testimonials: [
    {
      name: "Elena Brooks",
      handle: "Homeowner · New install",
      description:
        "The hardwood was laid clean and even. Communication stayed clear from first walkthrough to final walk-through.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      name: "Marcus Hale",
      handle: "Homeowner · Replacement",
      description:
        "Our replacement floor lined up cleanly with existing transitions. Scheduling updates were straightforward—no surprises on site.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      name: "Priya Nair",
      handle: "Homeowner · Remodel",
      description:
        "Careful measuring and solid fastening. The crew coordinated installation around the remodel without rushing the details.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      name: "James Ortega",
      handle: "Builder · Residential",
      description:
        "Reliable flooring partner for residential work in Olathe. Layout was accurate and the job was left ready for trim.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      name: "Hannah Cole",
      handle: "Homeowner · New home",
      description:
        "We always knew where the install stood. Clean workmanship and an organized site made the process easier to follow.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      name: "Daniel Kim",
      handle: "Homeowner · Replacement",
      description:
        "Quality first—exactly what we needed. Floors felt solid, and questions were answered without sales pressure.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      name: "Sofia Alvarez",
      handle: "Homeowner · Remodel",
      description:
        "Attention to transitions and gaps made a real difference. The floor was ready for living without rework drama.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      name: "Ryan Patel",
      handle: "Project coordinator",
      description:
        "Good sequencing and clear scope talk. Installation stayed organized so the rest of the remodel could move forward.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&h=160&q=80",
    },
  ],
} as const;

export const faqContent = {
  eyebrow: "FAQs",
  title: "Find quick answers to common flooring installation and repair questions.",
  description:
    "Straight answers about flooring installation, repair, and replacement services in Olathe, KS.",
  image: {
    src: "/images/hero/floor-room.jpg",
    alt: "Hardwood flooring in a residential interior",
    caption: "Floor installation · Olathe",
  },
  items: [
    {
      question: "What types of flooring materials do you install?",
      answer:
        "We specialize in installing solid hardwood, engineered wood, durable laminate, custom staircase components, and specialty materials tailored for both residential homes and commercial properties in Olathe, KS.",
    },
    {
      question: "How long does a typical flooring installation project take?",
      answer:
        "Project timelines depend on room size and material selection. Most standard residential installations wrap up within 1 to 3 days, while custom work or larger commercial jobs may take longer.",
    },
    {
      question: "Do you handle floor repairs or just full replacements?",
      answer:
        "We offer comprehensive services including minor scratch repair, board replacements, water damage restoration, structural subfloor repairs, and complete floor replacements when worn surfaces can no longer be restored.",
    },
    {
      question: "Can you match new wood flooring to my existing floors?",
      answer:
        "Yes, our team accurately matches wood species, grain patterns, and custom stain colors so your new flooring integrates seamlessly with your property’s existing hardwood or adjoining rooms.",
    },
    {
      question:
        "How should I prepare my space before the installation crew arrives?",
      answer:
        "Please clear the installation area of personal items, breakables, and small furniture. Our team will coordinate remaining preparation steps, including subfloor leveling, surface prep, and material delivery beforehand.",
    },
    {
      question: "Why should I choose Imperial Hardwood Floors LLC for my project?",
      answer:
        "As a certified local contractor, Imperial Hardwood Floors LLC delivers premium craftsmanship, transparent estimates, top-grade materials, and reliable service dedicated to maximizing your property’s long-term visual and structural value.",
    },
  ],
} as const;

export const contactContent = {
  eyebrow: "Contact",
  title: "Request an Estimate",
  description:
    "Tell us about your hardwood floor installation project in Olathe. Imperial Hardwood Floors will follow up using the contact details you provide.",
  map: {
    /** Downtown Olathe, KS */
    lat: 38.8814,
    lng: -94.8191,
    zoomLabel: "Olathe, KS",
  },
} as const;

export const heroImages = {
  main: {
    src: "/images/hero/floor-hero.jpg",
    alt: "Hardwood flooring installed in a finished residential bedroom",
  },
} as const;
