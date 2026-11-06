import { site } from "@/content/site";

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
      "Professional floor installation for homes in Olathe—new rooms, replacements, and remodel projects scoped before the work starts.",
    metaTitle: `Floor Installation in ${location} | ${site.businessName}`,
    metaDescription: `Floor installation in ${location}. Accurate layout, clean fastening, and clear estimates from ${site.businessName}. Call ${site.phone}.`,
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
      "Floor installation in Olathe starts with the rooms, the product, and the condition of the space—not a one-size quote. Imperial Hardwood Floors LLC focuses on careful layout, clean cuts, and fastening that keeps the surface even under everyday living.",
      "Whether you are finishing a new build, replacing worn flooring, or refreshing rooms during a remodel, we confirm scope before pricing so the estimate matches the work your home actually needs.",
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
    headline: `Hardwood Floors in ${location}`,
    brandLine: "Natural wood. Precise install.",
    summary:
      "Hardwood flooring for Olathe homes—solid or engineered options installed with attention to grain, gaps, and room-to-room transitions.",
    metaTitle: `Hardwood Floors in ${location} | ${site.businessName}`,
    metaDescription: `Hardwood floors in ${location}. Professional hardwood installation for new rooms, replacements, and remodeled living spaces. Call ${site.phone}.`,
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
      "Hardwood floors bring warmth and lasting character to Olathe homes when they are installed with care. Layout direction, expansion awareness, and clean fastening protect both the look and the longevity of the wood.",
      "Imperial Hardwood Floors LLC helps homeowners choose and install hardwood that fits the rooms, the traffic, and the finish goals—without inflated claims or rush pricing.",
    ],
    highlights: [
      {
        title: "Solid & engineered",
        body: "Install guidance based on the product you select and the conditions of your subfloor and rooms.",
      },
      {
        title: "Open layouts",
        body: "Consistent runs through living areas, hallways, and connected rooms for a cohesive hardwood look.",
      },
      {
        title: "Transitions that belong",
        body: "Doorways, thresholds, and meeting points planned so the hardwood feels intentional—not patched in.",
      },
    ],
    process: [
      {
        title: "Product & rooms",
        body: "Share species preferences, grade, and which rooms are in scope—or ask for practical guidance.",
      },
      {
        title: "Site check",
        body: "We talk through subfloor, moisture, and acclimation so the hardwood is set up to perform.",
      },
      {
        title: "Install",
        body: "Precise layout and fastening with a clean handoff for trim and living.",
      },
    ],
    faqs: [
      {
        question: "Do you install both solid and engineered hardwood?",
        answer:
          "Yes. The right choice depends on the space, subfloor, and product. We confirm that during the estimate conversation.",
      },
      {
        question: "Can hardwood match existing floors in another room?",
        answer:
          "Often we can get close with species, width, and finish direction. Bring photos or samples when you request an estimate.",
      },
    ],
  },
  {
    slug: "laminate",
    path: "Laminate-services-Olathe-KS",
    name: "Laminate",
    shortName: "Laminate",
    headline: `Laminate Flooring in ${location}`,
    brandLine: "Durable style. Clean install.",
    summary:
      "Laminate flooring installation in Olathe for homes that want a hardwearing surface with a polished wood-look finish.",
    metaTitle: `Laminate Flooring in ${location} | ${site.businessName}`,
    metaDescription: `Laminate flooring installation in ${location}. Clean layout, proper underlayment, and careful transitions. Call ${site.phone}.`,
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
      "Laminate is a practical choice for Olathe homeowners who want a durable, wood-look surface with straightforward maintenance. A clean install still matters—underlayment, expansion, and transitions decide how the floor looks and feels day to day.",
      "Imperial Hardwood Floors LLC installs laminate with the same attention we bring to hardwood: accurate layout, careful cuts, and a finish that lines up at doorways and room edges.",
    ],
    highlights: [
      {
        title: "Underlayment done right",
        body: "Proper underlayment and expansion planning so the laminate stays quiet and stable.",
      },
      {
        title: "Busy rooms",
        body: "A strong option for hallways, living spaces, and high-traffic areas when product and install align.",
      },
      {
        title: "Neat transitions",
        body: "Clean meeting points at stairs, tile, and adjacent rooms so the install looks finished.",
      },
    ],
    process: [
      {
        title: "Choose the product",
        body: "Share the laminate line you like—or ask what works for the rooms and traffic you expect.",
      },
      {
        title: "Prep the space",
        body: "We confirm subfloor readiness, underlayment, and sequencing around furniture and access.",
      },
      {
        title: "Install",
        body: "Click-lock or glue systems installed to manufacturer guidance with clean edges and transitions.",
      },
    ],
    faqs: [
      {
        question: "Is laminate a good fit for every room?",
        answer:
          "It depends on moisture and traffic. Kitchens, baths, and basements need product-specific guidance—we cover that in the estimate talk.",
      },
      {
        question: "Can laminate replace carpet room by room?",
        answer:
          "Yes. Many Olathe projects replace carpet in living areas and hallways. Share room sizes and photos to start.",
      },
    ],
  },
  {
    slug: "staircase",
    path: "Staircase-services-Olathe-KS",
    name: "Staircase",
    shortName: "Stairs",
    headline: `Staircase Flooring in ${location}`,
    brandLine: "Stairs that match the floor.",
    summary:
      "Staircase flooring and tread work in Olathe so stairs connect cleanly with hardwood, laminate, or related floor finishes.",
    metaTitle: `Staircase Flooring in ${location} | ${site.businessName}`,
    metaDescription: `Staircase flooring in ${location}. Treads, risers, and transitions that match your main floor install. Call ${site.phone}.`,
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
      "Stairs are where a flooring project can look unfinished if treads, risers, and transitions are treated as an afterthought. In Olathe homes, we plan staircase work with the same product language as the main floor whenever the project calls for it.",
      "Imperial Hardwood Floors LLC scopes stair installs carefully—nosings, rises, and landings—so the climb feels solid and the finish matches the rooms above and below.",
    ],
    highlights: [
      {
        title: "Matching runs",
        body: "Coordinate stair finishes with hardwood or laminate on the main level for a continuous look.",
      },
      {
        title: "Safe, solid feel",
        body: "Secure fastening and clean nosings so stairs feel stable underfoot.",
      },
      {
        title: "Landings & returns",
        body: "Attention to landings and returns where the stair meets hallways and rooms.",
      },
    ],
    process: [
      {
        title: "Measure the stair",
        body: "Share photos, tread count, and whether you want a full match to an existing or new floor.",
      },
      {
        title: "Confirm details",
        body: "We discuss nosings, risers, and how the stair meets the upper and lower floors.",
      },
      {
        title: "Install",
        body: "Careful stair work sequenced with the rest of the flooring project when needed.",
      },
    ],
    faqs: [
      {
        question: "Can you refinish or cover existing stair treads?",
        answer:
          "Often yes, depending on condition and the product you want. Photos help us tell you what is realistic before estimating.",
      },
      {
        question: "Do stairs need to be done with the main floor?",
        answer:
          "Not always, but matching is easier when both are planned together. We can scope stairs alone or as part of a larger install.",
      },
    ],
  },
  {
    slug: "custom-work",
    path: "Custom-Work-services-Olathe-KS",
    name: "Custom Work",
    shortName: "Custom",
    headline: `Custom Flooring Work in ${location}`,
    brandLine: "Detail work. Intentional finish.",
    summary:
      "Custom flooring details in Olathe—borders, pattern work, transitions, and special layouts that go beyond a straight install.",
    metaTitle: `Custom Flooring Work in ${location} | ${site.businessName}`,
    metaDescription: `Custom flooring work in ${location}. Borders, patterns, and special transitions for residential projects. Call ${site.phone}.`,
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
      "Some Olathe projects need more than a standard run of planks. Custom work covers borders, feature patterns, tricky transitions, and layouts that follow the architecture of the home.",
      "Imperial Hardwood Floors LLC approaches custom flooring as craftsmanship with a clear scope: what is decorative, what is structural to the layout, and how the finished detail should read in the room.",
    ],
    highlights: [
      {
        title: "Borders & accents",
        body: "Feature borders and accent inlays planned to the room geometry.",
      },
      {
        title: "Pattern layouts",
        body: "Herringbone, diagonals, and other layouts where the design needs precise measuring.",
      },
      {
        title: "Complex transitions",
        body: "Custom meeting points between materials, elevations, or remodeled openings.",
      },
    ],
    process: [
      {
        title: "Define the detail",
        body: "Share sketches, inspiration photos, or a description of the custom look you want.",
      },
      {
        title: "Scope the craft",
        body: "We break the work into measurable pieces so the estimate stays honest.",
      },
      {
        title: "Build the detail",
        body: "Install with careful measuring so the custom element lands clean in the finished room.",
      },
    ],
    faqs: [
      {
        question: "What counts as custom flooring work?",
        answer:
          "Anything beyond a standard straight install—borders, patterns, medallions, or complex material transitions. We clarify that in discussion.",
      },
      {
        question: "Do I need drawings before requesting an estimate?",
        answer:
          "Helpful but not required. Photos and a clear description of the rooms and look are enough to start.",
      },
    ],
  },
  {
    slug: "floor-repair",
    path: "Floor-Repair-services-Olathe-KS",
    name: "Floor Repair",
    shortName: "Repair",
    headline: `Floor Repair in ${location}`,
    brandLine: "Fix what is failing. Keep what still works.",
    summary:
      "Floor repair in Olathe for damaged boards, loose areas, transition issues, and localized problems that do not need a full replacement.",
    metaTitle: `Floor Repair in ${location} | ${site.businessName}`,
    metaDescription: `Floor repair in ${location}. Fix damaged boards, loose sections, and transition problems without a full replace when possible. Call ${site.phone}.`,
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
      "Not every floor problem needs a full tear-out. Floor repair in Olathe can mean replacing damaged boards, tightening loose sections, correcting transitions, or addressing wear in high-traffic paths.",
      "Imperial Hardwood Floors LLC assesses what can be repaired cleanly versus when replacement is the better long-term choice—and we say so directly.",
    ],
    highlights: [
      {
        title: "Board replacement",
        body: "Remove and replace damaged boards where a match is realistic and the surrounding floor is sound.",
      },
      {
        title: "Loose or noisy areas",
        body: "Address fastening and movement issues that show up as squeaks or lift.",
      },
      {
        title: "Honest scope",
        body: "Clear advice when a repair will blend well—and when a larger replace makes more sense.",
      },
    ],
    process: [
      {
        title: "Show the problem",
        body: "Send photos of the damage, note the rooms, and describe when the issue started.",
      },
      {
        title: "Assess options",
        body: "We determine repair vs replace and what a blended fix can realistically look like.",
      },
      {
        title: "Repair",
        body: "Targeted work with a clean finish so the repaired area is ready for daily use.",
      },
    ],
    faqs: [
      {
        question: "Can repairs match my existing hardwood color?",
        answer:
          "Often closely, depending on age, finish, and species. Photos help set expectations before we estimate.",
      },
      {
        question: "When is full replacement better than repair?",
        answer:
          "When damage is widespread, the finish is failing across rooms, or matching is no longer practical. We will tell you which path fits.",
      },
    ],
  },
  {
    slug: "imperial-concrete-coating",
    path: "Imperial-Concrete-Coating-services-Olathe-KS",
    name: "Imperial Concrete Coating",
    shortName: "Concrete Coating",
    headline: `Imperial Concrete Coating in ${location}`,
    brandLine: "Durable coatings for concrete surfaces.",
    summary:
      "Imperial concrete coating for Olathe properties—protective, cleanable finishes for garage, basement, and other concrete surfaces.",
    metaTitle: `Imperial Concrete Coating in ${location} | ${site.businessName}`,
    metaDescription: `Imperial concrete coating in ${location}. Protective coatings for garages, basements, and concrete surfaces. Call ${site.phone}.`,
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
      "Concrete coatings turn utilitarian slabs into cleanable, protected surfaces for garages, basements, and similar spaces in Olathe. Imperial Concrete Coating focuses on prep and application so the finish bonds well and holds up to use.",
      "Imperial Hardwood Floors LLC includes concrete coating as a dedicated service for homeowners who want a tougher, easier-to-maintain concrete surface—not a one-coat cover-up over poor prep.",
    ],
    highlights: [
      {
        title: "Surface prep first",
        body: "Clean, profiled concrete is the foundation of a coating that lasts.",
      },
      {
        title: "Garages & basements",
        body: "Common Olathe applications where durability and cleanability matter most.",
      },
      {
        title: "Clear project scope",
        body: "Square footage, condition, and finish goals discussed before the estimate.",
      },
    ],
    process: [
      {
        title: "Describe the slab",
        body: "Share location (garage, basement, other), approximate size, and current condition photos.",
      },
      {
        title: "Plan prep & coat",
        body: "We outline prep needs, coating system, and downtime so expectations stay realistic.",
      },
      {
        title: "Apply & cure",
        body: "Coating applied to the agreed scope with guidance on cure time before heavy use.",
      },
    ],
    faqs: [
      {
        question: "Which spaces are a good fit for concrete coating?",
        answer:
          "Garages, basements, and other concrete slabs where you want protection and easier cleaning. We confirm suitability from photos and site details.",
      },
      {
        question: "How long before I can use the space again?",
        answer:
          "Cure times depend on the system and conditions. Timeline expectations are part of the estimate conversation.",
      },
    ],
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
