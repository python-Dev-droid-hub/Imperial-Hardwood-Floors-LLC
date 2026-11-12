import { site } from "@/content/site";

/** Optional homepage-section copy overrides for a service detail page. */
export type ServiceSectionOverrides = {
  about?: {
    eyebrow?: string;
    heading: string;
    paragraphs: string[];
  };
  orbitSteps?: { title: string; content: string }[];
  services?: {
    title: string;
    items: { label: string; title: string; description: string }[];
  };
  cta?: {
    eyebrow?: string;
    heading: string;
    body: string;
  };
  serviceArea?: {
    eyebrow?: string;
    title: string;
    intro: string;
    sections: { heading: string; body: string[] }[];
  };
  faq?: {
    eyebrow?: string;
    title: string;
    description?: string;
    items: { question: string; answer: string }[];
  };
};

export type ServicePage = {
  /** Internal id (image folders, lookups). */
  slug: string;
  /** Public URL path after domain, e.g. Staircase-services-Olathe-KS */
  path: string;
  name: string;
  shortName: string;
  headline: string;
  brandLine: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  /** Primary hero / card image. */
  image: string;
  imageAlt: string;
  /** Optional gallery for the service detail page. */
  gallery?: { src: string; alt: string }[];
  intro: string[];
  highlights: { title: string; body: string }[];
  process: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
  /** When set, HomeSections uses this copy instead of homepage defaults. */
  sectionOverrides?: ServiceSectionOverrides;
};

const location = site.locationShort;

export const services: ServicePage[] = [
  {
    slug: "floor-installation",
    path: "Floor-Installation-services-Olathe-KS",
    name: "Floor Installation",
    shortName: "Installation",
    headline: `Floor Installation in ${location}`,
    brandLine: "Installed clean. Built to last.",
    summary:
      "Our skilled installers deliver precise, seamless floor installation tailored to your specific residential or commercial layout in Olathe, KS.",
    metaTitle: `Floor Installation Services in Olathe, KS | ${site.businessName}`,
    metaDescription:
      "Get professional floor installation in Olathe, KS. Imperial Hardwood Floors LLC provides quality hardwood, laminate, and custom flooring solutions for residential and commercial properties.",
    image: "/images/services/floor-installation/01-plank-install.jpg",
    imageAlt:
      "Flooring contractor installing dark wood-grain planks in a residential room",
    gallery: [
      {
        src: "/images/services/floor-installation/01-plank-install.jpg",
        alt: "Installer fitting wood-grain floor planks with professional tools",
      },
      {
        src: "/images/services/floor-installation/02-deck-fastening.png",
        alt: "Contractor fastening flooring boards during an outdoor install",
      },
      {
        src: "/images/services/floor-installation/03-layout-measure.jpg",
        alt: "Installer measuring and planning a light wood floor layout",
      },
      {
        src: "/images/services/floor-installation/04-baseboard-finish.jpg",
        alt: "Finishing a floor install with matching baseboard trim",
      },
      {
        src: "/images/services/floor-installation/05-hardwood-nailer.jpg",
        alt: "Crew installing light hardwood with pneumatic flooring nailers",
      },
      {
        src: "/images/services/floor-installation/06-tile-install.jpg",
        alt: "Contractor placing large-format floor tile with a leveling system",
      },
    ],
    intro: [
      "Our skilled installers deliver precise, seamless floor installation tailored to your specific residential or commercial layout. We handle every phase with meticulous attention to detail, preparing subfloors correctly to guarantee lasting stability.",
      "Upgrade your space with durable, high-performing floors designed to withstand high foot traffic while enhancing aesthetic appeal.",
    ],
    highlights: [
      {
        title: "New installs",
        body: "Empty rooms and new construction floors laid from starting lines through transitions and finish-ready surfaces.",
      },
      {
        title: "Occupied homes",
        body: "Sequencing, protection, and access planning so install work fits around daily living when rooms stay in use.",
      },
      {
        title: "Clear scope talk",
        body: "Room list, product notes, and site conditions discussed before the estimate—no vague national pricing.",
      },
    ],
    process: [
      {
        title: "Share the rooms",
        body: "Tell us which spaces, approximate square footage, product preferences, and preferred timing.",
      },
      {
        title: "Confirm the install",
        body: "We review prep, transitions, and access so the scope is locked before boards go down.",
      },
      {
        title: "Install and handoff",
        body: "Clean install work with a practical wrap-up so trim and everyday living can move forward.",
      },
    ],
    faqs: [
      {
        question: "What floor installation work do you handle in Olathe?",
        answer:
          "New installs, replacements, and remodel flooring for residential spaces. Specific product and prep needs are confirmed during the estimate conversation.",
      },
      {
        question: "How do I get an estimate?",
        answer:
          "Use the contact form, call, or email. Include rooms involved, timing, and any product photos or links you already have.",
      },
    ],
  },
  {
    slug: "hardwood-floors",
    path: "Hardwood-Floors-services-Olathe-KS",
    name: "Hardwood Floors",
    shortName: "Hardwood",
    headline:
      "Your Trusted & Professional Residential or\nCommercial Hardwood Floors Installation Services\nContractor Olathe KS",
    brandLine: "",
    summary:
      "Partner with Imperial Hardwood Floors LLC, Olathe’s local contractor for seamless residential and commercial hardwood floor installation, repair, and maintenance. Our certified company specializes in flawless new installations and restoring old hardwood floors to perfection. Get your free estimate from Olathe’s trusted team today!",
    metaTitle: `Hardwood Flooring Installation & Repair in Olathe, KS | ${site.businessName}`,
    metaDescription:
      "Upgrade your property with professional hardwood flooring installation and repair in Olathe, KS. Trust Imperial Hardwood Floors LLC for quality craftsmanship and beautiful floors.",
    image: "/images/services/hardwood-floors/01-rustic-plank.jpg",
    imageAlt:
      "Rustic wide-plank hardwood flooring with a polished finish in a large dining hall",
    gallery: [
      {
        src: "/images/services/hardwood-floors/01-rustic-plank.jpg",
        alt: "Wide-plank rustic hardwood floors in a lodge-style dining space",
      },
      {
        src: "/images/services/hardwood-floors/02-dark-espresso.png",
        alt: "Dark espresso hardwood flooring through a kitchen and staircase area",
      },
      {
        src: "/images/services/hardwood-floors/03-custom-border.png",
        alt: "Multi-tonal hardwood living room floor with a decorative border inlay",
      },
      {
        src: "/images/services/hardwood-floors/04-character-grade.jpg",
        alt: "Character-grade hardwood flooring continuing from entry into the kitchen",
      },
      {
        src: "/images/services/hardwood-floors/05-modern-greige.jpg",
        alt: "Light greige wide-plank hardwood in a modern open living room",
      },
      {
        src: "/images/services/hardwood-floors/06-warm-living.jpg",
        alt: "Warm amber hardwood flooring in a traditional living room",
      },
      {
        src: "/images/services/hardwood-floors/07-gloss-finish.jpg",
        alt: "High-gloss hardwood floors in a sunlit room with stone fireplace",
      },
    ],
    intro: [
      "Looking to elevate your space with flawless craftsmanship? Imperial Hardwood Floors LLC is the best choice for commercial or residential building hardwood floors install or replace services contractor or company in Olathe, KS.",
      "We specialize in high-quality wooden floor installation services, premium classic hardwood flooring, and versatile, modern LVP (Luxury Vinyl Plank) solutions tailored to your unique style and durability requirements.",
    ],
    highlights: [
      {
        title: "New hardwood installs",
        body: "Cost-effective premium solid and engineered wood solutions with seamless alignment and durable finishes.",
      },
      {
        title: "Replacement",
        body: "Complete tear-outs, subfloor leveling, and new plank placement with minimal disruption.",
      },
      {
        title: "Repair & install",
        body: "Water damage, scratches, loose boards, and custom new hardwoods restored with meticulous workmanship.",
      },
    ],
    process: [
      {
        title: "Inquiry",
        body: "Contact our Olathe team to discuss your specific flooring goals.",
      },
      {
        title: "Scope",
        body: "We assess project details, timelines, materials, and overall budget needs.",
      },
      {
        title: "Install",
        body: "Our certified team expertly installs your premium hardwood or LVP.",
      },
    ],
    faqs: [
      {
        question: "How long does hardwood floor installation usually take?",
        answer:
          "Most residential hardwood floor installations take between 1 to 3 days, depending on the square footage, room layout, subfloor prep work, and whether the wood requires on-site acclimation.",
      },
      {
        question: "Do you install both solid wood and engineered hardwood?",
        answer:
          "Yes, we professionally install solid hardwood, engineered wood, and Luxury Vinyl Plank (LVP). Our team helps you select the best material based on your room's moisture levels and traffic.",
      },
      {
        question: "Can hardwood flooring be installed over existing subfloors?",
        answer:
          "Yes, provided the subfloor is clean, flat, dry, and structurally sound. We thoroughly inspect and prepare plywood or concrete subfloors before laying any new hardwood materials.",
      },
      {
        question: "What is the difference between solid and engineered hardwood?",
        answer:
          "Solid hardwood is crafted from a single piece of real timber. Engineered hardwood features a real wood veneer atop cross-laminated layers, offering enhanced moisture stability in high-humidity areas.",
      },
      {
        question: "How soon can I walk on my new hardwood floors?",
        answer:
          "You can usually walk on nail-down installations immediately with socks. For glued or refinished floors, wait 24 hours for foot traffic and 48 to 72 hours before moving heavy furniture back.",
      },
      {
        question: "How do I clean and maintain my new hardwood floors?",
        answer:
          "Sweep or vacuum daily with a soft-bristle attachment. Clean regularly using a damp micro-fiber mop and a specialized hardwood floor cleaner. Avoid harsh chemicals, excess water, and steam mops.",
      },
    ],
    sectionOverrides: {
      about: {
        eyebrow: "About Us",
        heading:
          "Imperial Hardwood Floors LLC Best Choice for Commercial or Residential Building Hardwood Floors Install or Replace Services Contractor or Company Olathe KS",
        paragraphs: [
          "Looking to elevate your space with flawless craftsmanship? Imperial Hardwood Floors LLC is the best choice for commercial or residential building hardwood floors install or replace services contractor or company in Olathe, KS.",
          "We specialize in high-quality wooden floor installation services, premium classic hardwood flooring, and versatile, modern LVP (Luxury Vinyl Plank) solutions tailored to your unique style and durability requirements. As Olathe’s trusted flooring contractor, our experienced crew handles everything from complete tear-outs to precision new installations with uncompromised attention to detail. Contact our expert team today to schedule your consultation and bring unmatched beauty, performance, and long-term value to your residential or commercial property.",
        ],
      },
      orbitSteps: [
        {
          title: "Inquiry",
          content:
            "Contact our Olathe team to discuss your specific flooring goals.",
        },
        {
          title: "Scope",
          content:
            "We assess project details, timelines, materials, and overall budget needs.",
        },
        {
          title: "Layout",
          content:
            "We measure, inspect, and plan precise subfloor layouts for installation.",
        },
        {
          title: "Install",
          content:
            "Our certified team expertly installs your premium hardwood or LVP.",
        },
        {
          title: "Finish",
          content:
            "We sand, stain, seal, and polish for a flawless surface.",
        },
        {
          title: "Handoff",
          content:
            "We walk through the completed project to ensure complete satisfaction.",
        },
      ],
      services: {
        title:
          "Hire Now a Professional Hardwood Floors Installation Services Provider Olathe KS",
        items: [
          {
            label: "New Install",
            title: "Affordable or New Hardwood Floors Installation in Olathe, KS",
            description:
              "Enhance your property with cost-effective, premium new hardwood floor installation in Olathe, KS. We provide tailored solid and engineered wood solutions designed to match your specific style and budget. Our skilled installation team ensures seamless alignment, smooth subfloor preparation, and durable finishes that elevate your space's overall aesthetic value.",
          },
          {
            label: "Replacement",
            title: "Hardwood Floors Replacement in Olathe, KS",
            description:
              "Replace aging, warped, or dull flooring with professional hardwood floors replacement in Olathe, KS. Imperial Hardwood Floors LLC manages complete tear-outs, subfloor leveling, and new plank placement with minimal disruption to your routine. Renew your residential or commercial space with modern, resilient wood options built for long-term daily performance.",
          },
          {
            label: "Repair",
            title:
              "Hardwood Floors Repair or Install Services Contractor in Olathe, KS",
            description:
              "Rely on Olathe’s leading hardwood floors repair and install services contractor to handle all your flooring needs. From repairing water damage, deep scratches, and loose boards to installing brand-new custom hardwoods, our certified crew restores stability and beauty. We deliver meticulous workmanship that seamlessly integrates with your existing interior decor.",
          },
        ],
      },
      cta: {
        eyebrow: "Hire Now",
        heading:
          "Hire Now a Imperial Hardwood Floors LLC for Your Hardwood Flooring Installation Olathe KS",
        body: "Hire Imperial Hardwood Floors LLC for hardwood flooring installation in Olathe, KS. Our certified team delivers flawless craftsmanship, premium materials, and lasting beauty for residential and commercial projects.",
      },
      serviceArea: {
        eyebrow: "Service Area",
        title:
          "Certified Or Trusted Residential or Commercial Buildings Hardwood Floors Installation Services Agency Olathe KS",
        intro:
          "Choose our certified or trusted residential or commercial buildings hardwood floors installation services agency in Olathe, KS, for exceptional craftsmanship and reliable results. We specialize in transforming homes and businesses with premium wood and LVP solutions tailored to your property. Our experienced team guarantees precision installation, durable finishes, and unmatched customer satisfaction on every single project.",
        sections: [
          {
            heading:
              "Fully Home Hardwood Floors Installation Services Contractor or Company in Olathe KS",
            body: [
              "Upgrade your entire residence with a fully home hardwood floors installation services contractor or company in Olathe, KS. We handle complete house transformations, ensuring consistent flow, flawless subfloor preparation, and expert alignment across every room. Experience superior craftsmanship that elevates your home's aesthetic appeal, comfort, and long-term property value effortlessly today.",
            ],
          },
          {
            heading: "New Hardwood Floors Installation Services Contractor or Agency",
            body: [
              "Partner with a premier new hardwood floors installation services contractor or agency to bring your design vision to life. We offer an extensive selection of top-quality solid and engineered wood materials. Our skilled professionals manage every detail from precise measuring to final finishing, delivering stunning, durable floors built to withstand daily traffic.",
            ],
          },
          {
            heading:
              "Offices Full Hardwood Floors Installation Services Contractor Olathe KS",
            body: [
              "Enhance your workspace professionalism with an offices full hardwood floors installation services contractor in Olathe, KS. We install heavy-duty, elegant commercial-grade wood flooring that leaves a lasting impression on clients and employees alike. Our efficient installation process minimizes downtime, ensuring your business operations continue smoothly while upgrading your office interior.",
            ],
          },
          {
            heading:
              "Living or Bedroom Hardwood Floors Installation Services Contractor",
            body: [
              "Create a warm, inviting atmosphere with a specialized living or bedroom hardwood floors installation services contractor. We install beautiful, cozy wood surfaces tailored to high-comfort personal spaces. Enjoy timeless elegance, improved indoor air quality, and resilient flooring designed to handle relaxing family evenings and everyday bedroom foot traffic seamlessly.",
            ],
          },
          {
            heading: "Skilled or Professional Hardwood Flooring Installation Services",
            body: [
              "Rely on skilled or professional hardwood flooring installation services for meticulous attention to detail and flawless execution. Our certified craftsmen utilize advanced techniques and industry-leading tools to guarantee perfect board placement and secure fastening. Trust our expertise to deliver gorgeous, structurally sound hardwood floors that stand the test of time.",
            ],
          },
          {
            heading:
              "Kitchen or Guest Room Hardwood Floors Installation Services Contractor Olathe KS",
            body: [
              "Upgrade high-utility areas with a kitchen or guest room hardwood floors installation services contractor in Olathe, KS. We install moisture-resistant, durable wood options engineered to handle heavy traffic, spills, and daily wear. Elevate your kitchen's style and provide a welcoming, sophisticated look for guests with our expert installation solutions.",
            ],
          },
        ],
      },
      faq: {
        eyebrow: "FAQs",
        title:
          "Find quick answers to common hardwood flooring installation and repair questions.",
        description:
          "Straight answers about hardwood flooring installation, repair, and replacement services in Olathe, KS.",
        items: [
          {
            question: "How long does hardwood floor installation usually take?",
            answer:
              "Most residential hardwood floor installations take between 1 to 3 days, depending on the square footage, room layout, subfloor prep work, and whether the wood requires on-site acclimation.",
          },
          {
            question: "Do you install both solid wood and engineered hardwood?",
            answer:
              "Yes, we professionally install solid hardwood, engineered wood, and Luxury Vinyl Plank (LVP). Our team helps you select the best material based on your room's moisture levels and traffic.",
          },
          {
            question: "Can hardwood flooring be installed over existing subfloors?",
            answer:
              "Yes, provided the subfloor is clean, flat, dry, and structurally sound. We thoroughly inspect and prepare plywood or concrete subfloors before laying any new hardwood materials.",
          },
          {
            question:
              "What is the difference between solid and engineered hardwood?",
            answer:
              "Solid hardwood is crafted from a single piece of real timber. Engineered hardwood features a real wood veneer atop cross-laminated layers, offering enhanced moisture stability in high-humidity areas.",
          },
          {
            question: "How soon can I walk on my new hardwood floors?",
            answer:
              "You can usually walk on nail-down installations immediately with socks. For glued or refinished floors, wait 24 hours for foot traffic and 48 to 72 hours before moving heavy furniture back.",
          },
          {
            question: "How do I clean and maintain my new hardwood floors?",
            answer:
              "Sweep or vacuum daily with a soft-bristle attachment. Clean regularly using a damp micro-fiber mop and a specialized hardwood floor cleaner. Avoid harsh chemicals, excess water, and steam mops.",
          },
        ],
      },
    },
  },
  {
    slug: "laminate",
    path: "Laminate-services-Olathe-KS",
    name: "Laminate",
    shortName: "Laminate",
    headline:
      "Your Trusted & Professional Residential or\nCommercial Building Floor Laminate Services\nContractor Olathe KS",
    brandLine: "",
    summary:
      "Imperial Hardwood Floors LLC is your trusted local choice for professional home and office flooring solutions in Olathe, KS. As a certified, expert contractor, we specialize in seamless floor laminate repair, restoration, and maintenance to keep your residential or commercial spaces looking pristine.",
    metaTitle: `Laminate Flooring Installation in Olathe, KS | ${site.businessName}`,
    metaDescription:
      "Choose a professional laminate flooring installation in Olathe, KS. Imperial Hardwood Floors LLC delivers durable, stylish, and affordable laminate flooring solutions.",
    image: "/images/services/laminate/07-mallet-tap.png",
    imageAlt:
      "Installer tapping light wood-look laminate planks into place with a mallet",
    gallery: [
      {
        src: "/images/services/laminate/01-adhesive-install.jpg",
        alt: "Installer laying light brown laminate planks during a residential job",
      },
      {
        src: "/images/services/laminate/02-underlayment-tools.jpg",
        alt: "Laminate install over underlayment with mallet and tapping block",
      },
      {
        src: "/images/services/laminate/03-foam-underlay.png",
        alt: "Close-up of laminate plank being fitted over foam underlayment",
      },
      {
        src: "/images/services/laminate/04-click-lock.jpg",
        alt: "Hand joining laminate planks with a click-lock connection",
      },
      {
        src: "/images/services/laminate/05-angle-join.jpg",
        alt: "Installer angling a laminate plank into a tongue-and-groove joint",
      },
      {
        src: "/images/services/laminate/06-plank-fit.png",
        alt: "Fitting medium-tone laminate planks with a carpenter square nearby",
      },
      {
        src: "/images/services/laminate/07-mallet-tap.png",
        alt: "Professional tapping laminate boards together for a tight fit",
      },
    ],
    intro: [
      "When your property needs reliable attention, Imperial Hardwood Floors LLC stands out as the best choice for commercial or residential building old or used wood floor laminate services contractor Olathe KS.",
      "Whether you manage a busy office building or a family home, we deliver durable, seamless repairs tailored to your needs.",
    ],
    highlights: [
      {
        title: "Old or used laminate",
        body: "Restore dated interiors with seamless beauty, strength, and lasting value.",
      },
      {
        title: "Full-home laminate",
        body: "Complete residential installs, repairs, and updates across every room.",
      },
      {
        title: "Office polishing",
        body: "High-traffic commercial laminate restoration with minimal downtime.",
      },
    ],
    process: [
      {
        title: "Inquiry",
        body: "Initial consultation to discuss your specific residential or commercial flooring needs.",
      },
      {
        title: "Scope",
        body: "Detailed project evaluation outlining timelines, materials, and specialized repair services.",
      },
      {
        title: "Install",
        body: "Expert placement of durable laminate and wood flooring materials.",
      },
    ],
    faqs: [
      {
        question: "How long does laminate floor repair take in Olathe, KS?",
        answer:
          "Most standard repair or spot-polishing projects take just one day. Larger commercial or full-home laminating services usually take two to three days, depending on total room square footage.",
      },
      {
        question: "Can old or used floor laminate be polished and restored?",
        answer:
          "Yes. Professional polishing smooths out minor scuffs, restores lost shine, and adds a protective seal, effectively renewing your old laminate floors without needing expensive, full floor replacements.",
      },
      {
        question: "Why hire Imperial Hardwood Floors LLC for your flooring project?",
        answer:
          "We bring certified craftsmanship, transparent pricing, and local Olathe expertise to every job. Our team handles everything from minor residential board repairs to major commercial floor updates.",
      },
      {
        question:
          "What is the difference between residential and commercial laminate services?",
        answer:
          "Commercial services focus on high-traffic durability and rapid project turnaround to minimize business downtime. Residential services prioritize custom aesthetic finishes, family-friendly materials, and seamless room-to-room transitions.",
      },
      {
        question: "How do I prepare my home before laminate installation or repair?",
        answer:
          "Clear small furniture, decor, and personal belongings from the target work area. Our team handles the heavy lifting, subfloor preparation, precise layout planning, and final post-project clean up.",
      },
      {
        question: "How do I maintain my newly polished laminate floors?",
        answer:
          "Sweep daily with a soft microfiber broom to remove grit, mop using a damp laminate-safe cleaner, wipe up liquid spills immediately, and avoid abrasive scrubbers or excess standing water.",
      },
    ],
    sectionOverrides: {
      about: {
        eyebrow: "About Us",
        heading:
          "Imperial Hardwood Floors LLC Best Choice for Commercial or Residential Building Old or Used Wood Floor Laminate Services Contractor or Company Olathe KS",
        paragraphs: [
          "When your property needs reliable attention, Imperial Hardwood Floors LLC stands out as the best choice for commercial or residential building old or used wood floor laminate services contractor Olathe KS. Worn or dated surfaces can detract from your interior's appeal, but our certified team specializes in expert restoration and maintenance.",
          "Whether you manage a busy office building or a family home, we deliver durable, seamless repairs tailored to your needs. Trust our experienced local professionals to revitalize your spaces, ensuring long-lasting strength and a flawless finish for every project.",
        ],
      },
      orbitSteps: [
        {
          title: "Inquiry",
          content:
            "Initial consultation to discuss your specific residential or commercial flooring needs.",
        },
        {
          title: "Scope",
          content:
            "Detailed project evaluation outlining timelines, materials, and specialized repair services.",
        },
        {
          title: "Layout",
          content:
            "Planning your ideal flooring design and precise measurements for installation.",
        },
        {
          title: "Install",
          content:
            "Expert placement of durable laminate and wood flooring materials.",
        },
        {
          title: "Finish",
          content:
            "Applying protective seals and polishes for a flawless, lasting shine.",
        },
        {
          title: "Handoff",
          content:
            "Final walkthrough and inspection ensuring complete satisfaction with your results.",
        },
      ],
      services: {
        title:
          "Hire Now a Professional Hardwood Old Floor Laminate Services Provider Olathe KS",
        items: [
          {
            label: "Old / Used",
            title: "Old or Used Floor Laminate Olathe KS",
            description:
              "Bring your dated interiors back to life with professional old or used floor laminate care in Olathe, KS, restoring seamless beauty, strength, and lasting value to every room.",
          },
          {
            label: "Full Home",
            title: "Full Home Wooden Floor Laminate Services Olathe KS",
            description:
              "Upgrade your entire living space with full home wooden floor laminate services in Olathe, KS. We handle complete residential installations, repairs, and updates across every room with precise alignment, seamless transitions, and flawless finishes.",
          },
          {
            label: "Office Polish",
            title: "Offices Full Floor Laminate or Polishing Services Olathe KS",
            description:
              "Maintain a professional corporate image with office full floor laminate or polishing services in Olathe, KS. We restore high-traffic commercial floors efficiently to minimize downtime and leave crisp, resilient surfaces.",
          },
        ],
      },
      cta: {
        eyebrow: "Hire Now",
        heading:
          "Hire Now a Imperial Hardwood Floors LLC for Your old Flooring Laminating Olathe KS",
        body: "Hire Imperial Hardwood Floors LLC for old flooring laminating in Olathe, KS. Our certified team restores worn laminate with reliable repairs, premium finishes, and long-lasting quality for homes and commercial spaces.",
      },
      serviceArea: {
        eyebrow: "Service Area",
        title:
          "Certified or Trusted Residential or Commercial Buildings Used Floor Laminate Services Agency Olathe KS",
        intro:
          "As a certified and trusted residential or commercial buildings used floor laminate services agency in Olathe, KS, Imperial Hardwood Floors LLC delivers dependable, high-quality solutions tailored to your property. Our skilled team restores worn, scuffed, or damaged laminate surfaces to their original brilliance. We combine industry-certified techniques with premium materials to safeguard your investment, ensuring beautiful, durable, and long-lasting flooring for every home, office, or commercial space.",
        sections: [
          {
            heading:
              "Full Home Wooden Floor Laminate Services Contractor or Company in Olathe KS",
            body: [
              "Upgrade your entire living space with a full home wooden floor laminate services contractor in Olathe, KS. Imperial Hardwood Floors LLC handles complete residential installations, repairs, and updates across every room in your house. We ensure precise alignment, seamless transitions, and flawless finishes throughout your home. Rely on our experienced team to enhance your home’s visual appeal and overall market value with reliable, top-quality craftsmanship from wall to wall.",
            ],
          },
          {
            heading: "Old or Used Floor Laminate Services Contractor or Agency",
            body: [
              "Aging surfaces do not always require complete replacement. As a specialized old or used floor laminate services contractor, we focus on renewing worn floors to save you time and money. Our team carefully repairs damaged planks, smooths out surface imperfections, and restores lost luster. We give your existing laminate a clean, fresh look while strengthening its resistance against daily wear and tear for years to come.",
            ],
          },
          {
            heading:
              "Offices Full Floor Laminate or Polishing Services Contractor Olathe KS",
            body: [
              "Maintain a professional corporate image with an experienced office full floor laminate or polishing services contractor in Olathe, KS. High foot traffic quickly dulls commercial floors, but our specialized polishing and laminate restoration services bring back a crisp, clean appearance. We work efficiently around your business operations to minimize downtime, leaving your conference rooms, hallways, and workspaces with vibrant, resilient flooring that impresses every client.",
            ],
          },
          {
            heading:
              "Living or Bedroom Floor Laminate Polishing Services Contractor",
            body: [
              "Create a comfortable, elegant atmosphere in your main living spaces with a dedicated living or bedroom floor laminate polishing services contractor. Daily activity, pet scratches, and furniture movement dull your flooring over time. Our detailed polishing treatment removes surface scuffs, seals out moisture, and restores a smooth, attractive sheen. Enjoy rejuvenated bedroom and living room floors that enhance the warmth and beauty of your personal home environment.",
            ],
          },
          {
            heading: "Skilled or Professional Flooring Laminate Services",
            body: [
              "Choosing skilled or professional flooring laminate services guarantees precision craftsmanship, accurate measurements, and long-lasting performance. Imperial Hardwood Floors LLC brings years of hands-on expertise to every project, ensuring proper underlayment preparation, tight plank integration, and flawless perimeter trim. Whether you need minor spot repairs or a major renovation, our team delivers consistent quality, clear communication, and superior results that stand up to daily use.",
            ],
          },
          {
            heading:
              "Kitchen or Guest Room Used or Old Floor Laminate or Polishing Services Contractor Olathe KS",
            body: [
              "High-use areas like kitchens and guest rooms require durable, moisture-resistant surfaces that look inviting. As a reliable kitchen or guest room used or old floor laminate or polishing services contractor in Olathe, KS, we fix worn planks, erase stubborn stains, and apply protective polishes. We ensure your kitchen floors handle spill exposure easily while making your guest rooms look impeccably prepared for visiting friends and family.",
            ],
          },
        ],
      },
      faq: {
        eyebrow: "FAQs",
        title: "Find answers to common questions about our floor laminate services.",
        description:
          "Straight answers about floor laminate repair, restoration, and polishing services in Olathe, KS.",
        items: [
          {
            question: "How long does laminate floor repair take in Olathe, KS?",
            answer:
              "Most standard repair or spot-polishing projects take just one day. Larger commercial or full-home laminating services usually take two to three days, depending on total room square footage.",
          },
          {
            question: "Can old or used floor laminate be polished and restored?",
            answer:
              "Yes. Professional polishing smooths out minor scuffs, restores lost shine, and adds a protective seal, effectively renewing your old laminate floors without needing expensive, full floor replacements.",
          },
          {
            question:
              "Why hire Imperial Hardwood Floors LLC for your flooring project?",
            answer:
              "We bring certified craftsmanship, transparent pricing, and local Olathe expertise to every job. Our team handles everything from minor residential board repairs to major commercial floor updates.",
          },
          {
            question:
              "What is the difference between residential and commercial laminate services?",
            answer:
              "Commercial services focus on high-traffic durability and rapid project turnaround to minimize business downtime. Residential services prioritize custom aesthetic finishes, family-friendly materials, and seamless room-to-room transitions.",
          },
          {
            question:
              "How do I prepare my home before laminate installation or repair?",
            answer:
              "Clear small furniture, decor, and personal belongings from the target work area. Our team handles the heavy lifting, subfloor preparation, precise layout planning, and final post-project clean up.",
          },
          {
            question: "How do I maintain my newly polished laminate floors?",
            answer:
              "Sweep daily with a soft microfiber broom to remove grit, mop using a damp laminate-safe cleaner, wipe up liquid spills immediately, and avoid abrasive scrubbers or excess standing water.",
          },
        ],
      },
    },
  },
  {
    slug: "staircase",
    path: "Staircase-services-Olathe-KS",
    name: "Staircase",
    shortName: "Stairs",
    headline:
      "Your Trusted & Professional Residential or\nCommercial Building Staircase Repair & Renovation\nMaintenance & Installation Services Contractor Olathe KS",
    brandLine: "",
    summary:
      "As a local and trusted office and home buildings old or used staircase repair contractor, Imperial Hardwood Floors LLC delivers lasting results. From a certified and trusted skilled wooden or tiles staircase repair or maintenance contractor or company Olathe KS to a professional and certified old staircase installation contractor Olathe KS, we elevate every step.",
    metaTitle: `Staircase Installation & Renovation in Olathe, KS | ${site.businessName}`,
    metaDescription:
      "Transform your stairs with professional staircase installation, repair, and renovation in Olathe, KS. Imperial Hardwood Floors LLC delivers beautiful staircase solutions.",
    image: "/images/services/staircase/04-dark-wood-rails.png",
    imageAlt:
      "Dark wood staircase with horizontal metal railings in a residential living space",
    gallery: [
      {
        src: "/images/services/staircase/01-stair-service.png",
        alt: "Technician working at the base of a residential staircase",
      },
      {
        src: "/images/services/staircase/02-handrail-install.jpg",
        alt: "Carpenter installing a wooden handrail with a pneumatic nailer",
      },
      {
        src: "/images/services/staircase/03-modern-wood-glass.png",
        alt: "Crew installing a modern wood staircase with glass railings",
      },
      {
        src: "/images/services/staircase/04-dark-wood-rails.png",
        alt: "Finished dark-grain wood staircase with black horizontal rails",
      },
      {
        src: "/images/services/staircase/05-runner-finish.png",
        alt: "Workers finishing a wood staircase with a carpet runner and white balusters",
      },
      {
        src: "/images/services/staircase/06-contemporary-treads.png",
        alt: "Contemporary staircase with wood treads and glass balustrade",
      },
    ],
    intro: [
      "Worn treads, loose balusters, and structural squeaks compromise both safety and visual appeal in high-traffic spaces.",
      "Whether your property features classic hardwood steps or modern architectural layouts, our skilled technicians evaluate every riser, stringer, and handrail to deliver seamless structural corrections and custom installations.",
    ],
    highlights: [
      {
        title: "Custom design & install",
        body: "Master craftsmen design and build custom stairways for homes and commercial buildings.",
      },
      {
        title: "Repair & restoration",
        body: "Fix squeaks, damaged treads, and loose railings with precision craftsmanship.",
      },
      {
        title: "Maintenance",
        body: "Proactive inspections and upkeep that keep stairs safe and code-compliant.",
      },
    ],
    process: [
      {
        title: "Inquiry",
        body: "Contact Imperial Hardwood Floors LLC today for expert staircase evaluations.",
      },
      {
        title: "Scope",
        body: "We inspect damaged treads, risers, and rails to outline solutions.",
      },
      {
        title: "Install",
        body: "Certified technicians repair structural flaws and install durable staircase components.",
      },
    ],
    faqs: [
      {
        question:
          "How do I know if my staircase needs repair or full replacement?",
        answer:
          "Imperial Hardwood Floors LLC inspects structural integrity first. Minor squeaks, loose balusters, and worn treads are easily repaired, while severe stringer rot or code violations typically require full replacement.",
      },
      {
        question: "Can you match the stain and wood grain of my existing staircase?",
        answer:
          "Yes, our craftsmen custom-blend stains and source matching hardwood species to ensure newly installed treads, risers, and handrails blend seamlessly with your existing stairs and surrounding Olathe flooring finishes.",
      },
      {
        question:
          "How long does a typical staircase repair or installation project take?",
        answer:
          "Most minor structural repairs and tread replacements take one to two days, while custom staircase design, fabrication, and complete installations in Olathe generally require three to five business days.",
      },
      {
        question:
          "Do you offer staircase renovation services for commercial office buildings?",
        answer:
          "Absolutely. We provide after-hours commercial staircase repair, polishing, and structural upgrades for Olathe offices and retail spaces, minimizing workplace disruption while ensuring strict compliance with local building safety codes.",
      },
      {
        question: "How can you stop wooden stairs from squeaking and creaking?",
        answer:
          "We eliminate squeaks by securing loose treads to underlying stringers, applying structural construction adhesives, installing precision wood shims, and reinforcing weak joints from underneath or through discreet surface fasteners.",
      },
      {
        question: "What types of staircase materials do you repair and install?",
        answer:
          "Imperial Hardwood Floors LLC works with solid oak, maple, hickory, and pine staircases, alongside tile treads, laminate overlays, and concrete steps, delivering durable repairs and custom finishes across Olathe.",
      },
    ],
    sectionOverrides: {
      about: {
        eyebrow: "About Us",
        heading:
          "Imperial Hardwood Floors LLC Best Choice for Expert Staircase Repair Services for Residential and Commercial Properties Contractor or Company Olathe KS",
        paragraphs: [
          "Worn treads, loose balusters, and structural squeaks compromise both safety and visual appeal in high-traffic spaces. As a leading used or old staircase repair or install services contractor, Imperial Hardwood Floors LLC restores stability, durability, and craftsmanship to aging stairways across Olathe, KS.",
          "Whether your property features classic hardwood steps or modern architectural layouts, our skilled technicians evaluate every riser, stringer, and handrail to deliver seamless structural corrections and custom installations. From historic homes to busy corporate offices, we complete every project on schedule with minimal disruption to your daily routine. Trust our experienced team to transform worn-out stairs into a safe, striking focal point built to last for decades.",
        ],
      },
      orbitSteps: [
        {
          title: "Inquiry",
          content:
            "Contact Imperial Hardwood Floors LLC today for expert staircase evaluations.",
        },
        {
          title: "Scope",
          content:
            "We inspect damaged treads, risers, and rails to outline solutions.",
        },
        {
          title: "Layout",
          content:
            "Our specialists measure your stairway dimensions for precise custom fitting.",
        },
        {
          title: "Install",
          content:
            "Certified technicians repair structural flaws and install durable staircase components.",
        },
        {
          title: "Finish",
          content: "We sand, stain, and seal wood surfaces for lasting beauty.",
        },
        {
          title: "Handoff",
          content:
            "Final quality inspection ensures your restored stairs are completely safe.",
        },
      ],
      services: {
        title:
          "Hire Now a Professional Custom Staircase Design and New Installation Services Olathe KS",
        items: [
          {
            label: "Custom Install",
            title: "Custom Staircase Design and New Installation Olathe KS",
            description:
              "Bring lasting elegance and structural reliability to your property with Imperial Hardwood Floors LLC. Our master craftsmen design and build custom stairways tailored to fit both modern residences and high-traffic commercial buildings. Specializing in old or used staircase install or replace and repair Olathe KS, we use premium hardwoods and proven techniques to ensure every tread, riser, and handrail stands strong.",
          },
          {
            label: "Repair",
            title: "Wooden Staircase Repair and Restoration Services Olathe KS",
            description:
              "Restore the strength and natural beauty of your stairs with Imperial Hardwood Floors LLC. Our skilled technicians fix squeaks, damaged treads, and loose railings across Olathe, KS with precision.",
          },
          {
            label: "Maintenance",
            title: "Reliable Staircase Maintenance Services Olathe KS",
            description:
              "Prevent costly structural hazards and extend the lifespan of your stairs with proactive care. Our technicians perform thorough inspections, tighten loose balusters, reinforce weakened treads, and eliminate squeaks before minor wear becomes dangerous.",
          },
        ],
      },
      cta: {
        eyebrow: "Hire Now",
        heading:
          "Hire Now a Imperial Hardwood Floors LLC for Your Wooden Staircase Repair and Restoration Services Olathe KS",
        body: "Hire Imperial Hardwood Floors LLC for wooden staircase repair and restoration services in Olathe, KS. Our skilled technicians fix squeaks, damaged treads, and loose railings with precision craftsmanship.",
      },
      serviceArea: {
        eyebrow: "Service Area",
        title:
          "Certified or Trusted Residential or Commercial Buildings Staircase Repair and Installation Services Agency Olathe KS",
        intro:
          "Imperial Hardwood Floors LLC delivers dependable staircase repair, renovation, maintenance, and installation for busy homes and high-traffic commercial properties across Olathe, KS. Our certified specialists restore worn stairs, install custom stairways, and complete every project with precision, durable materials, and clean finishes—without exceeding your budget or disrupting daily operations.",
        sections: [
          {
            heading:
              "Reliable Staircase Maintenance Services for Long-Lasting Safety Contractor or Company in Olathe KS",
            body: [
              "Prevent costly structural hazards and extend the lifespan of your stairs with proactive care from Imperial Hardwood Floors LLC. Our experienced technicians perform thorough inspections, tighten loose balusters, reinforce weakened treads, and eliminate annoying squeaks before minor wear becomes dangerous. Serving residential and commercial properties across Olathe, KS, we deliver dependable upkeep solutions that preserve structural integrity, maintain building code compliance, and keep every step completely secure.",
            ],
          },
          {
            heading: "Old or Used Staircase Services Contractor or Agency",
            body: [
              "Aging stairways require specialized craftsmanship to restore both safety and architectural charm. As a dedicated restoration team, Imperial Hardwood Floors LLC evaluates worn stringers, damaged risers, and scuffed handrails to deliver targeted repairs or complete structural overhauls. Rather than settling for creaky, outdated steps, property owners rely on our proven techniques and quality materials to revitalize older staircases so they look refined and perform reliably for decades.",
            ],
          },
          {
            heading:
              "Offices Staircase Repair or Polishing Services Contractor Olathe KS",
            body: [
              "First impressions matter in professional workspaces, and worn-out stairs can undermine your business image while creating slip hazards. Imperial Hardwood Floors LLC provides commercial staircase repair, refinishing, and high-durability polishing tailored for corporate offices across Olathe, KS. Working around your business hours to minimize downtime, our crew removes heavy foot-traffic scuffs, stabilizes loose components, and applies sleek protective finishes that restore executive appeal and workplace safety.",
            ],
          },
          {
            heading: "Skilled or Professional Staircase Repair Services",
            body: [
              "When stair components crack, loosen, or shift over time, precision workmanship makes all the difference. Imperial Hardwood Floors LLC brings years of hands-on carpentry expertise to resolve structural instability, broken spindles, uneven risers, and worn wooden treads. We diagnose the root cause of every issue rather than applying temporary patches, ensuring seamless color matching, rock-solid reinforcement, and clean execution that restores confidence on every single step.",
            ],
          },
          {
            heading:
              "Concrete Staircase Repair and Renovation Services Contractor Olathe KS",
            body: [
              "Cracked edges, spalling surfaces, and worn concrete steps create serious liability risks for commercial buildings and residential exteriors alike. Imperial Hardwood Floors LLC offers specialized structural patching, resurfacing, and aesthetic upgrades for aging concrete stairways throughout Olathe, KS. From leveling uneven treads to applying durable slip-resistant coatings or custom wood overlays, our team transforms deteriorated concrete stairs into safe, clean, and visually appealing architectural features.",
            ],
          },
        ],
      },
      faq: {
        eyebrow: "FAQs",
        title:
          "Have questions about our Olathe staircase repair and installation services?",
        description:
          "Straight answers about staircase repair, renovation, maintenance, and installation in Olathe, KS.",
        items: [
          {
            question:
              "How do I know if my staircase needs repair or full replacement?",
            answer:
              "Imperial Hardwood Floors LLC inspects structural integrity first. Minor squeaks, loose balusters, and worn treads are easily repaired, while severe stringer rot or code violations typically require full replacement.",
          },
          {
            question:
              "Can you match the stain and wood grain of my existing staircase?",
            answer:
              "Yes, our craftsmen custom-blend stains and source matching hardwood species to ensure newly installed treads, risers, and handrails blend seamlessly with your existing stairs and surrounding Olathe flooring finishes.",
          },
          {
            question:
              "How long does a typical staircase repair or installation project take?",
            answer:
              "Most minor structural repairs and tread replacements take one to two days, while custom staircase design, fabrication, and complete installations in Olathe generally require three to five business days.",
          },
          {
            question:
              "Do you offer staircase renovation services for commercial office buildings?",
            answer:
              "Absolutely. We provide after-hours commercial staircase repair, polishing, and structural upgrades for Olathe offices and retail spaces, minimizing workplace disruption while ensuring strict compliance with local building safety codes.",
          },
          {
            question:
              "How can you stop wooden stairs from squeaking and creaking?",
            answer:
              "We eliminate squeaks by securing loose treads to underlying stringers, applying structural construction adhesives, installing precision wood shims, and reinforcing weak joints from underneath or through discreet surface fasteners.",
          },
          {
            question:
              "What types of staircase materials do you repair and install?",
            answer:
              "Imperial Hardwood Floors LLC works with solid oak, maple, hickory, and pine staircases, alongside tile treads, laminate overlays, and concrete steps, delivering durable repairs and custom finishes across Olathe.",
          },
        ],
      },
    },
  },
  {
    slug: "custom-work",
    path: "Custom-Work-services-Olathe-KS",
    name: "Custom Work",
    shortName: "Custom",
    headline:
      "Your Trusted & Professional Residential or\nCommercial Building Custom Floor Installation\nServices Contractor Olathe KS",
    brandLine: "",
    summary:
      "Partner with Imperial Hardwood Floors LLC, your local and trusted office and home buildings custom floor installation repair contractor. We specialize in flawless new installs, tile upgrades, and certified and trusted skilled wooden or tiles custom floor repair or maintenance. Trust our professional and certified old or new custom floor repair contractor Olathe KS experts to restore or transform your surfaces today.",
    metaTitle: `Custom Flooring Installation & Design in Olathe, KS | ${site.businessName}`,
    metaDescription:
      "Enhance your property with custom flooring installation and design in Olathe, KS. Imperial Hardwood Floors LLC provides personalized flooring solutions and quality craftsmanship.",
    image: "/images/services/custom-work/05-plan-review.png",
    imageAlt:
      "Team reviewing blueprints and material samples for a custom flooring project",
    gallery: [
      {
        src: "/images/services/custom-work/01-site-coordination.jpg",
        alt: "Project coordinator directing custom job logistics on site",
      },
      {
        src: "/images/services/custom-work/02-blueprint-site.jpg",
        alt: "Supervisor reviewing blueprints on a custom construction project",
      },
      {
        src: "/images/services/custom-work/03-crew-setup.png",
        alt: "Crew preparing equipment and materials for a custom install",
      },
      {
        src: "/images/services/custom-work/04-workshop-craft.png",
        alt: "Craftsperson building custom woodwork details in the workshop",
      },
      {
        src: "/images/services/custom-work/05-plan-review.png",
        alt: "Design and site team reviewing plans for custom flooring work",
      },
      {
        src: "/images/services/custom-work/06-team-planning.jpg",
        alt: "Collaborative planning meeting for a custom flooring project",
      },
      {
        src: "/images/services/custom-work/07-client-consult.jpg",
        alt: "Custom project consultation with plans and on-site review",
      },
    ],
    intro: [
      "Choosing the right specialist determines the strength and style of your interior investment. Imperial Hardwood Floors LLC stands out as the best choice for commercial or residential building custom design floor install or replace services.",
      "From replacing worn office flooring to installing custom residential hardwoods, our skilled specialists deliver dependable workmanship, seamless finishing, and structural integrity on every job.",
    ],
    highlights: [
      {
        title: "New custom install",
        body: "Tailored wood, stone, and tile patterns from subfloor prep to final polish.",
      },
      {
        title: "Custom replacement",
        body: "Seamless tear-outs, subfloor leveling, and upgraded floors with minimal downtime.",
      },
      {
        title: "Floor repair",
        body: "Scratch, water stain, buckling, and cracked tile repairs blended into existing floors.",
      },
    ],
    process: [
      {
        title: "Inquiry",
        body: "Reach out today to discuss your custom flooring project details.",
      },
      {
        title: "Scope",
        body: "We assess your space to outline timelines, materials, and costs.",
      },
      {
        title: "Install",
        body: "Master craftsmanship delivers precise, durable, and seamless surface placement.",
      },
    ],
    faqs: [
      {
        question: "What custom flooring materials do you install in Olathe?",
        answer:
          "Imperial Hardwood Floors LLC installs premium hardwoods, custom ceramic and porcelain tiles, stone, and luxury resilient surfaces tailored to fit your specific residential or commercial design goals.",
      },
      {
        question: "How long does a custom floor replacement typically take?",
        answer:
          "Timeline depends on project scope, but most residential installations take 2 to 5 days, including subfloor preparation, precise material laying, and final protective coating applications.",
      },
      {
        question: "Do you handle both residential and commercial flooring projects?",
        answer:
          "Yes. We provide certified custom design installation, repair, and replacement services for single-family homes, multi-story residences, retail spaces, corporate offices, and local Olathe commercial buildings.",
      },
      {
        question: "Can you repair water damage or deep scratches on existing wood?",
        answer:
          "Absolutely. Our floor repair services address buckling, water stains, deep scratches, and loose planks, matching your original wood species and finish for a seamless visual blend.",
      },
      {
        question: "How do I prepare my space before the installation team arrives?",
        answer:
          "Clear the project area of all furniture, wall decor, and small items. Our team handles subfloor cleanup, leveling, and existing surface tear-outs before starting your new installation.",
      },
      {
        question: "How do I get a quote for my custom flooring project?",
        answer:
          "Contact Imperial Hardwood Floors LLC directly to schedule a free on-site consultation. We assess your space, outline design options, and provide a clear, detailed cost estimate.",
      },
    ],
    sectionOverrides: {
      about: {
        eyebrow: "About Us",
        heading:
          "Imperial Hardwood Floors LLC Best Choice for Commercial or Residential Building Custom Design Floor Install or Replace Services Contractor or Company Olathe KS",
        paragraphs: [
          "Choosing the right specialist determines the strength and style of your interior investment. Imperial Hardwood Floors LLC stands out as the best choice for commercial or residential building custom design floor install or replace services. As a top-rated custom floor installation contractor and agency in Olathe, KS, we combine master-level technique with premium materials to bring custom design concepts into reality.",
          "From replacing worn office flooring to installing custom residential hardwoods, our skilled specialists deliver dependable workmanship, seamless finishing, and structural integrity on every job. We focus on enhancing property aesthetics while providing surface solutions built for daily performance. Contact our local Olathe team today to book your consultation!",
        ],
      },
      orbitSteps: [
        {
          title: "Inquiry",
          content: "Reach out today to discuss your custom flooring project details.",
        },
        {
          title: "Scope",
          content: "We assess your space to outline timelines, materials, and costs.",
        },
        {
          title: "Layout",
          content:
            "Accurate floor planning ensures seamless alignment and perfect pattern design.",
        },
        {
          title: "Install",
          content:
            "Master craftsmanship delivers precise, durable, and seamless surface placement.",
        },
        {
          title: "Finish",
          content:
            "Professional sanding, staining, and sealing create long-lasting surface beauty.",
        },
        {
          title: "Handoff",
          content:
            "Final inspection guarantees flawless results before returning your space.",
        },
      ],
      services: {
        title:
          "Hire Now a Professional Custom Design Floor Installation Services Provider Olathe KS",
        items: [
          {
            label: "New Install",
            title: "New Custom Design Floor Installation Olathe KS",
            description:
              "Elevate your space with premium, tailored flooring designed for lasting beauty. Imperial Hardwood Floors LLC offers high-end new custom design floor installation in Olathe, KS, managing every step from subfloor prep to final polish. We expertly lay custom wood, stone, and tile patterns that reflect your unique style and withstand heavy daily foot traffic.",
          },
          {
            label: "Replacement",
            title: "Custom Floor Replacement Olathe KS",
            description:
              "Replace tired, worn-out surfaces with dynamic new materials tailored to your space. Our custom floor replacement services in Olathe, KS, deliver seamless tear-outs, proper subfloor leveling, and swift installation of upgraded floors. Imperial Hardwood Floors LLC ensures minimal downtime for your household or business while delivering a dramatic visual upgrade to your entire property.",
          },
          {
            label: "Repair",
            title: "Floor Repair Olathe KS",
            description:
              "Eliminate unsightly surface damage and structural imperfections with professional floor repair in Olathe, KS. Imperial Hardwood Floors LLC tackles deep scratches, water stains, buckling planks, and cracked tiles. We blend fresh materials seamlessly into your original flooring, renewing structural strength and restoring a uniform, pristine appearance throughout your home or office.",
          },
        ],
      },
      cta: {
        eyebrow: "Hire Now",
        heading:
          "Hire Now a Imperial Hardwood Floors LLC for Your Custom floor Installation Olathe KS",
        body: "Hire Imperial Hardwood Floors LLC for custom floor installation in Olathe, KS. We combine master craftsmanship with premium materials to deliver flawless, long-lasting surfaces for homes and businesses.",
      },
      serviceArea: {
        eyebrow: "Service Area",
        title:
          "Certified Or Trusted Residential or Commercial Buildings Custom Design Floor Installation Services Agency Olathe KS",
        intro:
          "Imperial Hardwood Floors LLC is a certified and trusted custom design floor installation services agency serving Olathe, KS. We provide tailored flooring solutions for residential and commercial properties, combining master craftsmanship with premium materials. Whether you are upgrading an office space or modernizing your home, our licensed contractors deliver flawless, durable installations. Elevate your property’s beauty, value, and functionality with our dependable, professional custom flooring services today.",
        sections: [
          {
            heading:
              "Full Home Custom Wooden Floor Installation Services Contractor or Company in Olathe KS",
            body: [
              "Transform your entire residence with a full home custom wooden floor installation contractor in Olathe, KS. Imperial Hardwood Floors LLC specializes in seamless, wall-to-wall hardwood installations tailored to your design preferences. From subfloor preparation to the final protective finish, our skilled team ensures structural integrity, precise pattern alignment, and long-lasting elegance throughout every room. Enhance your home’s character and market value with our expert residential wood flooring solutions.",
            ],
          },
          {
            heading: "New Custom Floor Installation Services Contractor or Agency",
            body: [
              "As a leading new custom floor installation services contractor and agency, we turn your interior design concepts into reality. Imperial Hardwood Floors LLC handles all types of new flooring projects, expertly laying premium hardwoods, custom tiles, and resilient surfaces. Our team follows rigorous standards to guarantee perfect alignment, smooth leveling, and exceptional durability, giving your residential or commercial space a flawless foundation built to withstand heavy daily use.",
            ],
          },
          {
            heading:
              "Offices Full Custom Design Floor Installation Services Contractor Olathe KS",
            body: [
              "Upgrade your business environment with an experienced offices full custom design floor installation services contractor in Olathe, KS. Imperial Hardwood Floors LLC designs and installs high-traffic commercial flooring that combines professional aesthetics with maximum durability. We work efficiently to minimize operational downtime, delivering sleek hardwood, tile, or composite floor systems tailored to your corporate brand image, employee comfort, and daily commercial foot traffic requirements.",
            ],
          },
          {
            heading: "Living or Bedroom Custom Floor Installation Services Contractor",
            body: [
              "Create cozy, sophisticated spaces with a specialized living or bedroom custom floor installation services contractor. Imperial Hardwood Floors LLC crafts customized flooring layouts designed for high comfort, style, and everyday durability. Whether you prefer rich hardwood tones for your living room or elegant, modern surface designs for master bedrooms, our precise installation techniques guarantee quiet, level, and beautifully finished surfaces that enhance your daily living experience.",
            ],
          },
          {
            heading: "Skilled or Professional Flooring Installation Services",
            body: [
              "Rely on skilled and professional flooring installation services for long-lasting, flawless results. Imperial Hardwood Floors LLC brings years of trade expertise, specialized equipment, and meticulous craftsmanship to every job site. We carefully manage subfloor leveling, moisture testing, precision cutting, and clean finishing across all material types. Our dedicated professionals ensure your project is completed on time, within budget, and to the absolute highest industry standards.",
            ],
          },
          {
            heading:
              "Kitchen or Guest Room Custom Design Floor Installation Services Contractor Olathe KS",
            body: [
              "Elevate high-utility and guest spaces with a custom design floor installation services contractor in Olathe, KS. Imperial Hardwood Floors LLC installs moisture-resistant, durable, and visually appealing flooring tailored for kitchens and guest rooms. We offer expertly laid tiles, sealed hardwoods, and luxury surfaces built to handle spills, foot traffic, and frequent use, ensuring your kitchen and guest accommodations remain gorgeous and easy to maintain for years.",
            ],
          },
        ],
      },
      faq: {
        eyebrow: "FAQs",
        title:
          "Find answers to common custom flooring installation and repair questions.",
        description:
          "Straight answers about custom flooring installation, repair, and replacement services in Olathe, KS.",
        items: [
          {
            question: "What custom flooring materials do you install in Olathe?",
            answer:
              "Imperial Hardwood Floors LLC installs premium hardwoods, custom ceramic and porcelain tiles, stone, and luxury resilient surfaces tailored to fit your specific residential or commercial design goals.",
          },
          {
            question: "How long does a custom floor replacement typically take?",
            answer:
              "Timeline depends on project scope, but most residential installations take 2 to 5 days, including subfloor preparation, precise material laying, and final protective coating applications.",
          },
          {
            question:
              "Do you handle both residential and commercial flooring projects?",
            answer:
              "Yes. We provide certified custom design installation, repair, and replacement services for single-family homes, multi-story residences, retail spaces, corporate offices, and local Olathe commercial buildings.",
          },
          {
            question:
              "Can you repair water damage or deep scratches on existing wood?",
            answer:
              "Absolutely. Our floor repair services address buckling, water stains, deep scratches, and loose planks, matching your original wood species and finish for a seamless visual blend.",
          },
          {
            question:
              "How do I prepare my space before the installation team arrives?",
            answer:
              "Clear the project area of all furniture, wall decor, and small items. Our team handles subfloor cleanup, leveling, and existing surface tear-outs before starting your new installation.",
          },
          {
            question: "How do I get a quote for my custom flooring project?",
            answer:
              "Contact Imperial Hardwood Floors LLC directly to schedule a free on-site consultation. We assess your space, outline design options, and provide a clear, detailed cost estimate.",
          },
        ],
      },
    },
  },
  {
    slug: "floor-repair",
    path: "Floor-Repair-services-Olathe-KS",
    name: "Floor Repair",
    shortName: "Repair",
    headline:
      "Your Trusted & Professional Residential or\nCommercial Buildings Floor Repair Services\nContractor Olathe KS",
    brandLine: "",
    summary:
      "Restore the beauty and strength of your property with Imperial Hardwood Floors LLC. As a certified and trusted skilled wooden or tiles floor repair or maintenance contractor or company Olathe KS, we deliver reliable solutions. Depend on our professional and certified old floor repair services contractor Olathe KS team—the top local and trusted office and home buildings floor repair contractor.",
    metaTitle: `Hardwood & Wood Floor Repair Services in Olathe, KS | ${site.businessName}`,
    metaDescription:
      "Restore your floors with professional hardwood and wood floor repair services in Olathe, KS. Imperial Hardwood Floors LLC delivers dependable flooring restoration and repair solutions.",
    image: "/images/services/floor-repair/01-parquet-repair.jpg",
    imageAlt:
      "Technician repairing a section of parquet wood flooring with tools on site",
    gallery: [
      {
        src: "/images/services/floor-repair/01-parquet-repair.jpg",
        alt: "Hands replacing damaged parquet blocks during a floor repair",
      },
      {
        src: "/images/services/floor-repair/02-sanding-prep.jpg",
        alt: "Worker preparing and sanding a wood floor during renovation repair",
      },
      {
        src: "/images/services/floor-repair/03-tile-repair.jpg",
        alt: "Contractor repairing and resetting floor tiles on a job site",
      },
      {
        src: "/images/services/floor-repair/04-prybar-repair.png",
        alt: "Technician prying and adjusting parquet flooring for repair",
      },
      {
        src: "/images/services/floor-repair/05-concrete-crack.jpg",
        alt: "Inspecting a cracked concrete floor surface before repair",
      },
      {
        src: "/images/services/floor-repair/06-site-assessment.png",
        alt: "Crew reviewing plans while assessing a floor repair project",
      },
      {
        src: "/images/services/floor-repair/07-slab-leveling.jpg",
        alt: "Concrete slab leveling and repair work on a residential driveway",
      },
    ],
    intro: [
      "When your hardwood floors suffer from scratches, moisture damage, or years of wear, Imperial Hardwood Floors LLC is the premier name to trust.",
      "Whether your space requires seamless board replacements, full structural restoration, or expert surface repairs, our skilled team delivers flawless craftsmanship every time.",
    ],
    highlights: [
      {
        title: "New floor repair",
        body: "Quick, precise patching for accidental damage, bad installation, or early wear.",
      },
      {
        title: "Floor replacement",
        body: "Clean tear-outs and premium hardwood or tile installs when repair is no longer enough.",
      },
      {
        title: "Floor repair",
        body: "Fix scratches, warping, squeaks, board separation, and structural defects.",
      },
    ],
    process: [
      {
        title: "Inquiry",
        body: "Contact our local Olathe team to request a free quote.",
      },
      {
        title: "Scope",
        body: "We assess damage to define exact project scope and pricing.",
      },
      {
        title: "Install",
        body: "Our experts expertly position and secure every new floor board.",
      },
    ],
    faqs: [
      {
        question: "What types of flooring repairs do you handle in Olathe, KS?",
        answer:
          "We repair hardwood, tile, and composite floors for homes and offices. Our team handles everything from minor surface scratches and loose boards to major structural and water damage issues.",
      },
      {
        question: "How long does a typical floor repair project take to complete?",
        answer:
          "Most standard repairs take between one to two days depending on damage severity. Larger structural work or custom staining projects may require additional curing time to ensure lasting results.",
      },
      {
        question: "Can you fix water-damaged or severely warped hardwood floorboards?",
        answer:
          "Yes, we specialize in water damage restoration. We inspect subfloors for hidden moisture, replace warped or cupped boards, and seamless match existing finishes to restore structural integrity.",
      },
      {
        question: "Do I need to move out during residential flooring repair services?",
        answer:
          "Most localized repairs allow you to stay home comfortable. For whole-house sanding or extensive refinishing, we may recommend limiting access to work areas until protective coatings fully cure.",
      },
      {
        question: "How do I get an accurate cost estimate for my project?",
        answer:
          "Contact Imperial Hardwood Floors LLC today for a free on-site consultation. We inspect your property, assess the required repair scope, and provide a clear, transparent pricing estimate.",
      },
      {
        question: "Do you offer flooring repair services for commercial office buildings?",
        answer:
          "Yes, we provide specialized commercial repair services across Olathe. We work around your operational hours to minimize workplace disruptions while keeping your commercial space safe and professional.",
      },
    ],
    sectionOverrides: {
      about: {
        eyebrow: "About Us",
        heading:
          "Imperial Hardwood Floors LLC Best Choice for Commercial or Residential Building Wood Floor Replace or Repair Services Contractor or Company Olathe KS",
        paragraphs: [
          "When your hardwood floors suffer from scratches, moisture damage, or years of wear, Imperial Hardwood Floors LLC is the premier name to trust. As a dedicated floor repair services contractor Olathe KS, we bring years of specialized experience to both residential homes and commercial properties across the area.",
          "Whether your space requires seamless board replacements, full structural restoration, or expert surface repairs, our skilled team delivers flawless craftsmanship every time. We combine advanced repair techniques with high-grade materials to enhance your property's value, structural integrity, and aesthetic appeal. Choose Olathe’s trusted specialists to revive your wooden floors with precision and long-lasting quality.",
        ],
      },
      orbitSteps: [
        {
          title: "Inquiry",
          content: "Contact our local Olathe team to request a free quote.",
        },
        {
          title: "Scope",
          content: "We assess damage to define exact project scope and pricing.",
        },
        {
          title: "Layout",
          content:
            "We precisely measure and plan your floor's complete structural layout.",
        },
        {
          title: "Install",
          content:
            "Our experts expertly position and secure every new floor board.",
        },
        {
          title: "Finish",
          content:
            "We sand, stain, and seal your floors for lasting protection.",
        },
        {
          title: "Handoff",
          content:
            "We conduct a final inspection and deliver your pristine property.",
        },
      ],
      services: {
        title:
          "Hire Now a Professional Residential or Commercial Floor Repair Services Provider Olathe KS",
        items: [
          {
            label: "New Repair",
            title: "New Floor Repair Olathe KS",
            description:
              "Even recently installed flooring can suffer from accidental damage, bad installation, or early wear. At Imperial Hardwood Floors LLC, we deliver quick, precise new floor repair services in Olathe, KS, seamless patching and restoring your surfaces to flawless condition.",
          },
          {
            label: "Replacement",
            title: "Floor Replacement Olathe KS",
            description:
              "When severe damage, rot, or heavy aging makes simple repairs impossible, full replacement is the smartest solution. Our Olathe, KS team removes old materials cleanly and installs premium hardwood or tile flooring designed for long-lasting durability and striking visual appeal.",
          },
          {
            label: "Repair",
            title: "Floor Repair Olathe KS",
            description:
              "Scratched, warped, or squeaky floors compromise your property’s safety and overall aesthetic value. We provide comprehensive floor repair in Olathe, KS, fixing surface blemishes, board separation, and structural defects for both residential and commercial spaces with expert local craftsmanship.",
          },
        ],
      },
      cta: {
        eyebrow: "Hire Now",
        heading:
          "Hire Now a Imperial Hardwood Floors LLC for Your Floor Repair or Maintenance Services Olathe KS",
        body: "Hire Imperial Hardwood Floors LLC for floor repair or maintenance services in Olathe, KS. Our certified technicians deliver reliable repairs and ongoing care to keep residential and commercial floors looking pristine.",
      },
      serviceArea: {
        eyebrow: "Service Area",
        title:
          "Certified Or Trusted Residential or Commercial Buildings Floor Repair Services Agency Olathe KS",
        intro:
          "Imperial Hardwood Floors LLC stands out as a certified and trusted floor repair services agency serving both residential and commercial buildings throughout Olathe, KS. Our experienced team addresses everything from minor cosmetic flaws to major structural issues with unmatched precision. We use high-grade materials and advanced restoration techniques to revive your property's flooring, ensuring long-lasting durability, enhanced aesthetic appeal, and complete satisfaction for every client.",
        sections: [
          {
            heading:
              "Full Home Wooden Floor Repair Services Contractor or Company in Olathe KS",
            body: [
              "Restoring hardwood throughout your entire residence requires seamless coordination and expert craftsmanship. As a premier full home wooden floor repair services contractor in Olathe, KS, Imperial Hardwood Floors LLC repairs damaged planks, fixes underlying subfloor issues, and addresses widespread wear across every room. We bring consistency, beauty, and structural balance back to your living space, ensuring every square foot of your home's flooring looks flawless.",
            ],
          },
          {
            heading: "Old or Used Floor Repair Services Contractor or Agency",
            body: [
              "Aging floors often develop scratches, fading, loose boards, and unsightly gaps over time. As a dedicated old or used floor repair services contractor, we specialize in carefully revitalizing weathered surfaces without sacrificing their original character. Our skilled technicians sand out blemishes, replace broken components, and apply durable protective finishes, breathing new life into old surfaces while extending the overall lifespan of your investment.",
            ],
          },
          {
            heading: "Offices Damage Floor Repair Services Contractor Olathe KS",
            body: [
              "Commercial environments require resilient flooring that can withstand heavy daily foot traffic and office equipment wear. As a leading office damage floor repair services contractor in Olathe, KS, we fix scuffs, deep gouges, board separation, and structural weakness quickly and efficiently. We work around your business operations to deliver fast, reliable repairs that minimize downtime while keeping your workplace professional, safe, and welcoming for employees and clients.",
            ],
          },
          {
            heading: "Living or Bedroom Old Floor Repair Services Contractor",
            body: [
              "Your living room and bedrooms deserve comfortable, visually appealing surfaces free of squeaks, splinters, or unsightly gaps. As a specialist living or bedroom old floor repair services contractor, Imperial Hardwood Floors LLC restores worn surfaces to create quiet, elegant, and pristine living spaces. We repair loose boards, match existing wood tones, and apply smooth finishes, transforming tired bedroom and living room floors back into beautiful household focal points.",
            ],
          },
          {
            heading: "Skilled or Professional Water Damage Floor Repair Services",
            body: [
              "Water spills, plumbing leaks, and high humidity can cause serious warping, buckling, and cupping in wood and composite flooring. Our skilled and professional water damage floor repair services target both surface damage and subfloor moisture issues. We thoroughly inspect affected areas, replace ruined materials, salvage restorable sections, and seal surfaces to protect against future moisture intrusion, restoring structural integrity and health to your property's floors.",
            ],
          },
          {
            heading:
              "Kitchen or Guest Room Floor Repair Services Contractor Olathe KS",
            body: [
              "High-traffic zones like kitchens and guest rooms frequently suffer from heavy wear, food spills, and dropped items. As an expert kitchen or guest room floor repair services contractor in Olathe, KS, we restore damaged tile and wooden floors to pristine condition. We repair cracked tiles, fix scratched hardwood, and re-seal surfaces to ensure your kitchen and guest areas remain durable, hygienic, and ready to impress visitors.",
            ],
          },
        ],
      },
      faq: {
        eyebrow: "FAQs",
        title: "Find quick answers to common Olathe floor repair questions.",
        description:
          "Straight answers about floor repair, replacement, and maintenance services in Olathe, KS.",
        items: [
          {
            question:
              "What types of flooring repairs do you handle in Olathe, KS?",
            answer:
              "We repair hardwood, tile, and composite floors for homes and offices. Our team handles everything from minor surface scratches and loose boards to major structural and water damage issues.",
          },
          {
            question:
              "How long does a typical floor repair project take to complete?",
            answer:
              "Most standard repairs take between one to two days depending on damage severity. Larger structural work or custom staining projects may require additional curing time to ensure lasting results.",
          },
          {
            question:
              "Can you fix water-damaged or severely warped hardwood floorboards?",
            answer:
              "Yes, we specialize in water damage restoration. We inspect subfloors for hidden moisture, replace warped or cupped boards, and seamless match existing finishes to restore structural integrity.",
          },
          {
            question:
              "Do I need to move out during residential flooring repair services?",
            answer:
              "Most localized repairs allow you to stay home comfortable. For whole-house sanding or extensive refinishing, we may recommend limiting access to work areas until protective coatings fully cure.",
          },
          {
            question: "How do I get an accurate cost estimate for my project?",
            answer:
              "Contact Imperial Hardwood Floors LLC today for a free on-site consultation. We inspect your property, assess the required repair scope, and provide a clear, transparent pricing estimate.",
          },
          {
            question:
              "Do you offer flooring repair services for commercial office buildings?",
            answer:
              "Yes, we provide specialized commercial repair services across Olathe. We work around your operational hours to minimize workplace disruptions while keeping your commercial space safe and professional.",
          },
        ],
      },
    },
  },
  {
    slug: "imperial-concrete-coating",
    path: "Imperial-Concrete-Coating-services-Olathe-KS",
    name: "Imperial Concrete Coating",
    shortName: "Concrete Coating",
    headline:
      "Your Trusted & Professional Residential or\nCommercial Building Concrete Coating & Repair\nRenovation & Installation Services Contractor Olathe KS",
    brandLine: "",
    summary:
      "Imperial Hardwood Floors LLC is your certified and trusted skilled concrete coating, repair, renovation & installation services contractor or company Olathe KS. We deliver precision upgrades for office and home buildings, plus old buildings wall restoration, ensuring durable, spotless surfaces that protect and elevate your property.",
    metaTitle: `Concrete Floor Coating Services in Olathe, KS | ${site.businessName}`,
    metaDescription:
      "Upgrade your concrete floors with professional coating and repair services in Olathe, KS. Imperial Hardwood Floors LLC provides durable concrete flooring solutions for your property.",
    image: "/images/services/imperial-concrete-coating/05-finished-driveway.png",
    imageAlt:
      "Residential driveway with a smooth light-gray Imperial concrete coating finish",
    gallery: [
      {
        src: "/images/services/imperial-concrete-coating/01-crew-application.png",
        alt: "Crew applying concrete coating indoors with a squeegee and equipment",
      },
      {
        src: "/images/services/imperial-concrete-coating/02-roller-coat.jpg",
        alt: "Close-up of a roller spreading gray concrete coating across a slab",
      },
      {
        src: "/images/services/imperial-concrete-coating/03-trowel-finish.jpg",
        alt: "Troweling a smooth light-gray coating onto a concrete floor",
      },
      {
        src: "/images/services/imperial-concrete-coating/04-squeegee-spread.png",
        alt: "Workers spreading glossy concrete coating across a large floor",
      },
      {
        src: "/images/services/imperial-concrete-coating/05-finished-driveway.png",
        alt: "Finished coated concrete driveway at a suburban home",
      },
      {
        src: "/images/services/imperial-concrete-coating/06-warehouse-roll.png",
        alt: "Rolling light-gray concrete coating on a large warehouse floor",
      },
      {
        src: "/images/services/imperial-concrete-coating/07-slab-finish.jpg",
        alt: "Crew leveling and finishing a fresh concrete slab surface",
      },
    ],
    intro: [
      "When your floors demand durability and visual appeal, Imperial Hardwood Floors LLC stands out as the premier concrete coating services for residential and commercial buildings contractor.",
      "Whether you are upgrading a residential garage, basement, or patio, or reinforcing an industrial warehouse, showroom, or retail space, our certified team delivers precision results.",
    ],
    highlights: [
      {
        title: "Renovation & resurfacing",
        body: "Affordable overlays that transform worn slabs without messy demolition.",
      },
      {
        title: "Commercial & industrial coatings",
        body: "Heavy-duty epoxy and polyaspartic finishes for warehouses and facilities.",
      },
      {
        title: "Maintenance & repair",
        body: "Protective upkeep and coating repairs that extend floor lifespan.",
      },
    ],
    process: [
      {
        title: "Inquiry",
        body: "Contact Imperial Hardwood Floors LLC today to discuss your concrete goals.",
      },
      {
        title: "Scope",
        body: "We inspect your property and define clear project timelines and costs.",
      },
      {
        title: "Install",
        body: "Certified technicians apply durable concrete coatings with precision and zero mess.",
      },
    ],
    faqs: [
      {
        question: "How long does concrete coating installation take in Olathe, KS?",
        answer:
          "Most residential garages and commercial concrete coating projects take just one to two days. Imperial Hardwood Floors LLC uses fast-curing polyaspartic and epoxy systems to minimize your property’s downtime.",
      },
      {
        question: "Can you apply concrete coatings over old or damaged floors?",
        answer:
          "Yes. Our skilled Olathe technicians grind away failing layers, repair deep cracks, and resurface pitted concrete before applying industrial coatings—delivering a seamless, durable finish without expensive slab replacement.",
      },
      {
        question:
          "Which concrete coating is best for commercial and industrial buildings?",
        answer:
          "Polyaspartic and heavy-duty epoxy coatings work best for warehouses, offices, and retail spaces. They resist chemicals, heavy machinery, abrasions, and daily foot traffic while maintaining a sleek, safe surface.",
      },
      {
        question: "How long do professional concrete floor coatings last?",
        answer:
          "With proper surface preparation and routine maintenance, commercial-grade concrete coatings from Imperial Hardwood Floors LLC last 15 to 20 years or more without peeling, yellowing, or hot-tire pickup.",
      },
      {
        question: "Are coated concrete floors slippery when wet?",
        answer:
          "No. We customize your residential or commercial floor coating with slip-resistant traction additives and textured flakes, ensuring maximum safety for families, employees, and customers even in wet conditions.",
      },
      {
        question:
          "How much does concrete floor renovation and coating cost in Olathe?",
        answer:
          "Project costs depend on square footage, concrete condition, and coating type. Contact Imperial Hardwood Floors LLC today for a free on-site inspection and transparent, affordable quote in Olathe, KS.",
      },
    ],
    sectionOverrides: {
      about: {
        eyebrow: "About Us",
        heading:
          "Imperial Hardwood Floors LLC Best Choice for Concrete Coating Services for Residential and Commercial Properties Contractor or Company Olathe KS",
        paragraphs: [
          "When your floors demand durability and visual appeal, Imperial Hardwood Floors LLC stands out as the premier concrete coating services for residential and commercial buildings contractor. We specialize in transforming worn, porous slabs into seamless, high-performance surfaces built to withstand heavy foot traffic, machinery, and daily wear.",
          "Whether you are upgrading a residential garage, basement, or patio, or reinforcing an industrial warehouse, showroom, or retail space, our certified team delivers precision results. Using commercial-grade epoxy, polyaspartic, and protective sealants, we ensure superior adhesion, chemical resistance, and easy maintenance. Partner with Olathe’s trusted coating specialists to protect your investment and elevate your property’s value today.",
        ],
      },
      orbitSteps: [
        {
          title: "Inquiry",
          content:
            "Contact Imperial Hardwood Floors LLC today to discuss your concrete goals.",
        },
        {
          title: "Scope",
          content:
            "We inspect your property and define clear project timelines and costs.",
        },
        {
          title: "Layout",
          content:
            "Our team maps surface prep, materials, and coatings for flawless alignment.",
        },
        {
          title: "Install",
          content:
            "Certified technicians apply durable concrete coatings with precision and zero mess.",
        },
        {
          title: "Finish",
          content:
            "We inspect every inch, sealing your floor for maximum lasting protection.",
        },
        {
          title: "Handoff",
          content:
            "Enjoy your transformed concrete surface backed by our reliable workmanship guarantee.",
        },
      ],
      services: {
        title:
          "Hire Now a Professional Custom Affordable Concrete Floor Renovation and Resurfacing Services Olathe KS",
        items: [
          {
            label: "Renovation",
            title:
              "Affordable Concrete Floor Renovation and Resurfacing Olathe KS",
            description:
              "Don't let pitted, discolored surfaces ruin your property's appeal or safety. Imperial Hardwood Floors LLC delivers old or used affordable concrete floor renovation and resurfacing Olathe KS homes and businesses rely on for seamless, cost-effective transformations. Instead of paying for messy demolition, our skilled team repairs structural flaws and applies high-strength, custom overlays engineered to resist heavy wear.",
          },
          {
            label: "Commercial",
            title:
              "Commercial and Industrial Concrete Floor Coating Services Olathe KS",
            description:
              "Protect high-traffic warehouses, showrooms, and facilities with seamless, heavy-duty epoxy and polyaspartic finishes. Imperial Hardwood Floors LLC delivers durable, chemical-resistant commercial and industrial concrete coatings built to last.",
          },
          {
            label: "Repair",
            title: "Concrete Repair and Renovation Services Olathe KS",
            description:
              "Cracked, uneven, or spalling concrete compromises both property safety and curb appeal. We fill deep cracks, level sunken slabs, resurface worn concrete, and apply protective finishes—turning deteriorated surfaces into smooth, resilient assets.",
          },
        ],
      },
      cta: {
        eyebrow: "Hire Now",
        heading:
          "Hire Now a Imperial Hardwood Floors LLC for Your Commercial and Industrial Concrete Floor Coating Services Olathe KS",
        body: "Hire Imperial Hardwood Floors LLC for commercial and industrial concrete floor coating services in Olathe, KS. Protect warehouses, showrooms, and facilities with seamless, heavy-duty epoxy and polyaspartic finishes built to last.",
      },
      serviceArea: {
        eyebrow: "Service Area",
        title:
          "Certified or Trusted Residential or Commercial Buildings Concrete Coating Maintenance and Protection Services Agency Olathe KS",
        intro:
          "Preserve your floor’s shine, strength, and slip resistance with Imperial Hardwood Floors LLC, the certified or trusted residential or commercial buildings concrete coating maintenance and protection services agency Olathe KS property owners rely on. Regular upkeep prevents peeling, staining, and costly structural damage across garages, warehouses, and retail spaces. Our specialists inspect, clean, and reseal surfaces using industrial-grade topcoats to maximize your investment’s lifespan and visual appeal.",
        sections: [
          {
            heading:
              "Reliable Concrete Coating Maintenance Services for Long-Lasting Safety Contractor or Company in Olathe KS",
            body: [
              "Worn, slick surfaces create serious slip hazards for families, staff, and customers. Imperial Hardwood Floors LLC operates as the reliable concrete coating maintenance services for long-lasting safety contractor or company in Olathe KS businesses and homeowners trust. We restore worn traction textures, fix minor surface abrasions, and apply protective topcoats that resist moisture, chemicals, and heavy foot traffic—keeping your residential and commercial floors safe, compliant, and spotless year-round.",
            ],
          },
          {
            heading: "Old or Used Concrete Floor Coating Contractor or Agency",
            body: [
              "Aging, faded coatings don’t require complete floor replacement to look brand new again. As a dedicated old or used concrete floor coating contractor or agency, Imperial Hardwood Floors LLC strips failing layers, repairs underlying cracks, and applies high-performance epoxy or polyaspartic finishes. We revitalize worn garages, basements, and commercial slabs across Olathe with seamless, durable surfaces engineered to handle daily wear while dramatically boosting your property’s value.",
            ],
          },
          {
            heading: "Offices Floor Concrete Coating Services Contractor Olathe KS",
            body: [
              "Elevate your workplace aesthetic with sleek, low-maintenance flooring built for modern business environments. Imperial Hardwood Floors LLC is the premier offices floor concrete coating services contractor Olathe KS companies choose for lobbies, hallways, and workspaces. Our dust-free installation minimizes operational downtime while delivering stain-resistant, polished, or decorative finishes. Impress clients and support daily staff foot traffic with durable office floors that clean effortlessly and look sharp.",
            ],
          },
          {
            heading: "Skilled or Professional Floor Coating Repair Services",
            body: [
              "Peeling, bubbling, or chipped coatings expose raw concrete to moisture and rapid deterioration. Imperial Hardwood Floors LLC provides skilled or professional floor coating repair services to restore structural integrity and seamless appearance fast. Our technicians diagnose adhesion failures, grind away damaged sections, patch underlying concrete flaws, and color-match fresh industrial topcoats—saving Olathe property owners from expensive full-floor replacements while ensuring long-term durability and protection.",
            ],
          },
          {
            heading: "Concrete Repair and Renovation Services Contractor Olathe KS",
            body: [
              "Cracked, uneven, or spalling concrete compromises both property safety and curb appeal. Imperial Hardwood Floors LLC stands out as the trusted concrete repair and renovation services contractor Olathe KS homeowners and facility managers count on for lasting structural restoration. We fill deep cracks, level sunken slabs, resurface worn concrete, and apply protective finishes—turning deteriorated indoor and outdoor surfaces into smooth, resilient assets built for decades.",
            ],
          },
        ],
      },
      faq: {
        eyebrow: "FAQs",
        title: "Explore answers to common questions about our concrete coating services.",
        description:
          "Straight answers about concrete coating, repair, renovation, and installation in Olathe, KS.",
        items: [
          {
            question:
              "How long does concrete coating installation take in Olathe, KS?",
            answer:
              "Most residential garages and commercial concrete coating projects take just one to two days. Imperial Hardwood Floors LLC uses fast-curing polyaspartic and epoxy systems to minimize your property’s downtime.",
          },
          {
            question:
              "Can you apply concrete coatings over old or damaged floors?",
            answer:
              "Yes. Our skilled Olathe technicians grind away failing layers, repair deep cracks, and resurface pitted concrete before applying industrial coatings—delivering a seamless, durable finish without expensive slab replacement.",
          },
          {
            question:
              "Which concrete coating is best for commercial and industrial buildings?",
            answer:
              "Polyaspartic and heavy-duty epoxy coatings work best for warehouses, offices, and retail spaces. They resist chemicals, heavy machinery, abrasions, and daily foot traffic while maintaining a sleek, safe surface.",
          },
          {
            question: "How long do professional concrete floor coatings last?",
            answer:
              "With proper surface preparation and routine maintenance, commercial-grade concrete coatings from Imperial Hardwood Floors LLC last 15 to 20 years or more without peeling, yellowing, or hot-tire pickup.",
          },
          {
            question: "Are coated concrete floors slippery when wet?",
            answer:
              "No. We customize your residential or commercial floor coating with slip-resistant traction additives and textured flakes, ensuring maximum safety for families, employees, and customers even in wet conditions.",
          },
          {
            question:
              "How much does concrete floor renovation and coating cost in Olathe?",
            answer:
              "Project costs depend on square footage, concrete condition, and coating type. Contact Imperial Hardwood Floors LLC today for a free on-site inspection and transparent, affordable quote in Olathe, KS.",
          },
        ],
      },
    },
  },
];

/** Look up by public URL path or legacy internal slug. */
export function getServiceBySlug(slug: string): ServicePage | undefined {
  return services.find(
    (service) => service.path === slug || service.slug === slug,
  );
}

export function getAllServicePaths(): string[] {
  return services.map((service) => service.path);
}

/** @deprecated Use getAllServicePaths for public URLs. */
export function getAllServiceSlugs(): string[] {
  return getAllServicePaths();
}

export function getServiceHref(service: ServicePage): string {
  return `/${service.path}`;
}
