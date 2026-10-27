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
  /** Areas named in the footer. Primary focus of this page remains Olathe. */
  servingAreas: [
    "Olathe, KS",
    "Overland Park, KS",
    "Lenexa, KS",
    "Shawnee, KS",
  ] as const,
  /**
   * Public profile URLs for Organization/LocalBusiness sameAs (social schema).
   * Add Facebook, Instagram, Google Business, Yelp, etc. when available.
   */
  socialProfiles: [] as readonly string[],
  /** Static for Cache Components / prerender — update yearly. */
  copyrightYear: 2026,
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact Us", href: "#contact" },
] as const;

export const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Service Area", href: "#service-area" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact Us", href: "#contact" },
] as const;

export const heroContent = {
  eyebrow: "Imperial Hardwood Floors LLC",
  /** Primary H1 — one service, one location */
  headline: "Floor Installation in Olathe, KS",
  brandLine: "Hardwood Floors, Installed Right.",
  supporting:
    "Professional hardwood floor installation for homes across Olathe and nearby Johnson County. Request a clear estimate from Imperial Hardwood Floors LLC.",
  primaryCta: { label: "Request an Estimate", href: "#contact" },
  secondaryCta: { label: "About Us", href: "#about" },
} as const;

export const aboutContent = {
  eyebrow: "About Us",
  heading: "Hardwood Floors Built for Everyday Living.",
  paragraphs: [
    "A great hardwood floor starts with careful install work—accurate layout, clean cuts, proper fastening, and transitions that look intentional from room to room.",
    "Imperial Hardwood Floors LLC installs hardwood floors for homeowners in Olathe, Kansas. We keep the process practical: scope the rooms, confirm the product and prep, then install with clean workmanship and clear communication.",
  ],
  cta: { label: "Request an Estimate", href: "#contact" },
  image: {
    src: "/images/hero/floor-detail.jpg",
    alt: "Wide-plank hardwood flooring installed through a residential hallway",
  },
} as const;

export const servicesContent = {
  eyebrow: "Floor Installation",
  title: "Hardwood Floor Installation in Olathe",
  description:
    "Focused hardwood floor installation for new homes, replacements, and remodel projects. Scope is confirmed during project discussion so every estimate matches the rooms and work you need.",
  items: [
    {
      title: "New Hardwood Installation",
      body: "Full hardwood floor installation for new construction and empty rooms—from layout and starting lines through fastening and finish-ready surfaces.",
      image: "/images/hero/floor-hero.jpg",
      alt: "Dark hardwood flooring installed in a finished bedroom",
    },
    {
      title: "Floor Replacement",
      body: "Remove the old surface and install new hardwood with careful attention to thresholds, baseboards, and transitions between rooms.",
      image: "/images/hero/floor-planks.jpg",
      alt: "Light hardwood flooring spanning an open living and dining space",
    },
    {
      title: "Remodel & Room Installs",
      body: "Hardwood installation for remodeled kitchens, living rooms, hallways, and expanded living space that needs to match or renew the rest of the home.",
      image: "/images/hero/floor-living.jpg",
      alt: "Hardwood flooring in a remodeled residential living space",
    },
  ],
} as const;

export const serviceAreaContent = {
  eyebrow: "Service Area",
  title: "Floor Installation in Olathe, KS",
  intro:
    "Imperial Hardwood Floors LLC focuses this page on hardwood floor installation for homeowners in Olathe, Kansas. If you need new floors, a replacement, or install work as part of a remodel, this is where that conversation starts.",
  sections: [
    {
      heading: "One trade, one local focus",
      body: [
        "This page is written for hardwood floor installation in Olathe—not every flooring product and not every city at once. That focus keeps the message honest: the work is install, the geography is local, and the next step is a clear estimate conversation about your rooms and timeline.",
        "Olathe homes range from newer builds to established neighborhoods across Johnson County. Install decisions here are practical—subfloor condition, moisture, transitions, furniture moves, and living around an active job all belong in the plan before boards go down.",
      ],
    },
    {
      heading: "New hardwood floors in Olathe",
      body: [
        "New hardwood needs careful layout, acclimation awareness, and solid fastening so the floor looks even and stays quiet underfoot. From starting lines to doorways and transitions, the goal is a clean install that holds up to daily living.",
        "When you request an estimate, share room sizes or a rough floor plan, product preferences, preferred timing, and access details. Scope is confirmed in discussion. Timelines depend on material readiness, site conditions, and how install fits into the rest of your project.",
      ],
      subheadings: [
        {
          title: "What a clean install protects",
          body: [
            "Good install work protects both the look of the floor and everyday comfort. Transitions, expansion gaps, and fastening all work better when the plan is clear up front. That is the standard Imperial Hardwood Floors LLC brings to hardwood installation in the Olathe area.",
          ],
        },
      ],
    },
    {
      heading: "Replacing existing floors",
      body: [
        "Replacement installs are often more involved than empty-room jobs because thresholds, baseboards, and adjacent surfaces set real constraints. Matching elevations and protecting doorways matters when the finished floor has to feel continuous—not patched in.",
        "An estimate conversation usually covers tear-out needs, temporary protection, sequencing around occupied living space, and how the new floor hands off to trim. Bring product samples or links if you have them; a short room list still works early on.",
      ],
    },
    {
      heading: "Remodels and expanded living space",
      body: [
        "Remodel installs can mean matching an existing hardwood look, continuing a pattern into a new room, or starting fresh after a kitchen or living-area update. These jobs reward careful measuring because the existing home sets the rules.",
        "We keep the conversation on scope: what product is going in, how it meets existing floors, what prep is needed, and how the finished floor should leave the space ready for trim and living. No inflated claims—just a practical path from inquiry to scoped estimate.",
      ],
      subheadings: [
        {
          title: "When to start the estimate talk",
          body: [
            "If you are choosing hardwood for a remodel, replacement, or new living space, clarify install scope before the product is ordered. Starting early helps avoid mid-project surprises and keeps expectations aligned with the space and timeline.",
          ],
        },
      ],
    },
    {
      heading: "Local context: homes, schedules, and sequencing",
      body: [
        "Kansas climate and Olathe’s housing mix influence how hardwood installs should be planned. Humidity, access in finished homes, and family schedules can all affect when install starts and how the site stays organized. Those realities belong in the estimate conversation.",
        "This page is for floor installation in Olathe. Nearby communities may be discussed case by case. Until separate location pages are published, the commitment on this site stays specific.",
      ],
    },
    {
      heading: "Working with product choices and other trades",
      body: [
        "Floor installation rarely happens alone. Product lead times, trim work, painters, and furniture moves all need windows. A useful install partner keeps communication practical: what is locked, what is still open, and what the floor must accommodate next.",
        "Bring questions about transitions, underlayment, moisture, and site logistics early. The clearer those details are, the cleaner the estimate and the smoother the handoff once installation is complete.",
      ],
    },
    {
      heading: "How to start an estimate",
      body: [
        "Use the contact form on this page or email Imperial Hardwood Floors. Include a short project description, your Olathe location or neighborhood, preferred timing, and any product preferences or photos. You will get a conversation focused on scope—not pressure.",
        "After the scope is understood, you receive an estimate tied to the discussed work. Scheduling depends on project readiness and material timing: clarify the work, price the work, then plan the calendar.",
      ],
    },
  ],
  note: "Other nearby communities may be covered on separate location pages when those pages are published.",
  cta: { label: "Request an Estimate", href: "#contact" },
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
  cta: { label: "Talk About Your Project", href: "#contact" },
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
  title: "Questions About Floor Installation",
  description:
    "Straight answers about hardwood floor installation in Olathe—scope, estimates, and what to share before we talk.",
  image: {
    src: "/images/hero/floor-room.jpg",
    alt: "Hardwood flooring in a residential interior",
    caption: "Floor installation · Olathe",
  },
  items: [
    {
      question: "What floor installation work do you focus on?",
      answer:
        "This page covers hardwood floor installation for new installs, replacements, and remodel projects in the Olathe area. Specific scope is confirmed during project discussion.",
    },
    {
      question: "How do I request an estimate?",
      answer:
        "Use the estimate form on this page or email Imperial Hardwood Floors. Include a short project description, location in Olathe, and any product preferences or photos you can share.",
    },
    {
      question: "What should I prepare before we talk?",
      answer:
        "Helpful details include project address, rooms involved, approximate square footage, product preferences, and preferred timing. Photos are useful when available, but early conversations can start without a full material selection.",
    },
    {
      question: "How is scheduling handled?",
      answer:
        "Scheduling depends on project scope, site readiness, and material timing. Timeline expectations are discussed after the scope is understood—not before.",
    },
    {
      question: "Do you serve areas outside Olathe?",
      answer:
        "This page is focused on Olathe, KS. If you are elsewhere, contact us and we can tell you whether the project can be considered or whether a different location page applies.",
    },
    {
      question: "Will I get a fixed price on first contact?",
      answer:
        "Estimates are based on discussed scope. Early outreach helps start the conversation; a meaningful estimate follows once the installation work is clearly defined.",
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
