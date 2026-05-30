import { PortfolioCMS } from "../types";

export const defaultPortfolioData: PortfolioCMS = {
  personalInfo: {
    name: "Jainil Darji",
    title: "Creative Graphic Designer",
    subtitle: "Visual Storyteller & Digital Solutions Creator",
    bio: "As a highly driven visual designer and modern content creator, I blend traditional layout guidelines with cutting-edge digital software to design high-converting, striking outputs. Specializing in branding development, social media campaigns, print collateral, packing design, and generative visual workflows.",
    whatsappNumber: "919000000000",
    email: "jainildarji2709@gmail.com",
    linkedinUrl: "https://linkedin.com/in/jainil-darji",
    behanceUrl: "https://behance.net/jainildarji",
    instagramUrl: "https://instagram.com/jainil_design_creatives",
    githubUrl: "https://github.com/jainil-darji",
    yearsOfExperience: "Practical freelance and rich agency labs background",
    completedProjectsCount: 5,
    happyClientsCount: 18,
    location: "Gandhinagar & Ahmedabad, Gujarat, India (Available globally for remote freelance)",
    resumeDetails: {
      aboutSummary: "Detail-oriented Graphic Designer with practical expertise in translating brand objectives into visual masterpiece assets. Highly skilled in CorelDRAW, Adobe Illustrator, and Photoshop, running optimized project streams with pristine technical precision.",
      education: [
        {
          degree: "Electrical Engineering",
          institution: "Gujarat Technological University",
          year: "2025 - Present"
        },
        {
          degree: "Graphics Designing Course",
          institution: "Arena Animation & Creative Arts Institute",
          year: "2025 (2 Months Experience)"
        }
      ],
      certifications: [
        "Adobe Certified Professional in Graphic Design & Illustration",
        "CorelDRAW Design Excellence Practitioner Module",
        "Social Media Branding Masterclass by HubSpot"
      ]
    }
  },
  skills: [
    { id: "s1", name: "CorelDRAW", category: "Design Software", level: 95, projectsCount: 15 },
    { id: "s2", name: "Adobe Photoshop", category: "Design Software", level: 92, projectsCount: 24 },
    { id: "s3", name: "Adobe Illustrator", category: "Design Software", level: 90, projectsCount: 18 },
    { id: "s4", name: "Social Media Design", category: "Core Strengths", level: 94, projectsCount: 30 },
    { id: "s5", name: "Packaging Design", category: "Core Strengths", level: 85, projectsCount: 8 },
    { id: "s6", name: "Print Media & Layouts", category: "Core Strengths", level: 90, projectsCount: 12 },
    { id: "s7", name: "Logo & Brand Identity", category: "Core Strengths", level: 91, projectsCount: 10 }
  ],
  services: [
    {
      id: "srv1",
      title: "Social Media Posts & Campaigns",
      icon: "Megaphone",
      description: "Eye-catching custom-designed posts, high-fidelity Instagram Reels covers, and YouTube Thumbnails built to stop-the-scroll and skyrocket engagements.",
      startingPrice: "₹499 / $15",
      deliveryTime: "24-48 Hours",
      deliverables: ["High-Res Source Templates", "JPG/PNG outputs suitable for all social platforms", "Editable master Canva/PSD template"]
    },
    // {
    //   id: "srv2",
    //   title: "Product Packaging Design",
    //   icon: "Box",
    //   description: "Stunning full-bleed product packaging, creative label typography, 3D mockups, and retail-ready folding dielines structured strictly per client product scale.",
    //   startingPrice: "₹2,999 / $99",
    //   deliveryTime: "3-5 Days",
    //   deliverables: ["Print-Ready PDF with bleed", "CorelDRAW/Illustrator source dielines", "True-to-life 3D digital product renders"]
    // },
    // {
    //   id: "srv3",
    //   title: "Corporate Identity & Logos",
    //   icon: "Sparkles",
    //   description: "Iconic, memorable custom logos with complete brand guideline rulebooks, custom typography settings, and primary color palette selection.",
    //   startingPrice: "₹1,999 / $65",
    //   deliveryTime: "3 Days",
    //   deliverables: ["Vector Formats (AI, EPS, SVG, PDF)", "Corporate Brand Guidelines manual", "Light/Dark/Monochrome alternatives"]
    // },
    // {
    //   id: "srv4",
    //   title: "Print Media & Advertising Collaterals",
    //   icon: "Layers",
    //   description: "Premium tri-fold brochures, sales flyers, custom catalog listings, visiting cards, and exhibition marketing banners configured perfectly with professional print grids.",
    //   startingPrice: "₹999 / $35",
    //   deliveryTime: "48 Hours",
    //   deliverables: ["Pre-flight ready CMYK files", "Die-cut guides if applicable", "Original fully organized PSD/CDR files"]
    // }
  ],
  projects: [
    {
      id: "proj1",
      title: "Digital Marketing Agency Seminar Banner",
      category: "Social Media",
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      description: "Corporate dark teal seminar flyer featuring visual guidelines, customized photo frame layer masks, bulleted detail sections, and bold registration CTAs.",
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Corporate Branding Layouts"],
      clientName: "Apex Marketing Summit Inc.",
      feedback: "Jainil delivered an exceptional seminar banner with perfect layout alignment and colors that boosted our sign-up conversion rate by 45%!",
      beforeImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      afterImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      caseStudy: {
        objective: "Design a high-impact social media promotional seminar card that establishes visual authority for professional speaker panels.",
        process: [
          "Curating deep emerald green color overlays on corporate agency grids.",
          "Masking focus speaker imagery on custom diagonal layered blocks.",
          "Placing typographic nodes under Space Grotesk display guidelines."
        ],
        toolsUsed: ["Adobe Photoshop CC", "Adobe Illustrator"],
        result: "Created a modern corporate seminar graphic template suited for global agencies.",
        gallery: [
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80"
        ]
      }
    },
    {
      id: "proj2",
      title: "Modern Digital Marketing Agency Flyer",
      category: "Social Media",
      thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80",
      description: "Dual-tone deep blue and warm orange agency promotional card. Set up with circular swoosh backdrops, custom contact rails, and eye-appealing layout structures.",
      tools: ["Adobe Photoshop", "CorelDRAW Vector Engine"],
      clientName: "Quantum Digital Labs",
      feedback: "The high contrast between corporate blue and active orange yields instant mobile scrolling retention. Beautiful vector lines and perfect print metrics.",
      beforeImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80",
      afterImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80",
      caseStudy: {
        objective: "Build a solid social marketing asset representing team reliability and business scaling solutions.",
        process: [
          "Drafting circular swoosh overlay lines with vector precision in CorelDRAW.",
          "Isolating master corporate employee headshots using photoshop advanced path selection.",
          "Placing visual contact badges utilizing lucide-like vector vectors."
        ],
        toolsUsed: ["CorelDRAW 2026", "Adobe Photoshop"],
        result: "Constructed a pristine corporate flyer design suitable for digital ad banners or printed hand leaflets.",
        gallery: [
          "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80"
        ]
      }
    },
    {
      id: "proj3",
      title: "Explore Dream Destination Campaign",
      category: "Social Media",
      thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80",
      description: "Niche travel agency promotional graphic featuring dynamic overlapping rounded custom photo frames, a bright yellow action border, and highlighted budget tags.",
      tools: ["Adobe Illustrator", "Photoshop Composition Layouts"],
      clientName: "Voyager Expeditions Ltd.",
      feedback: "Outstanding multi-image nesting! The overlapping visual flyer layouts made customers instantly register for our summer packages.",
      beforeImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80",
      afterImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80",
      caseStudy: {
        objective: "Formulate a fresh tourist booklet and flyer presenting scenic hotspots securely on a clean layout canvas.",
        process: [
          "Constructing triple-curved vector picture masks in Adobe Illustrator.",
          "Balancing warm golden borders and dark blue contrast backgrounds.",
          "Setting up readable bullet details for lodging and meals listings."
        ],
        toolsUsed: ["Adobe Illustrator CC", "Adobe Photoshop CC"],
        result: "An adventure-packed travel campaign ready for brochure prints and social network banners.",
        gallery: [
          "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80"
        ]
      }
    },
    {
      id: "proj4",
      title: "Real Estate Semicircle Grid Flyer",
      category: "Print Media",
      thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
      description: "Sophisticated home for sale print brochure displaying interior designs in a beautiful right semicircle segmentation. Composed with classic serif typography and maroon accents.",
      tools: ["CorelDRAW Custom Grids", "Print Layout alignment"],
      clientName: "Signature Realtor Group",
      feedback: "The semicircle portfolio wheel layout is unique and extremely creative. Gained immediate buyer signups on first distribution.",
      beforeImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
      afterImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
      caseStudy: {
        objective: "Establish an elegant real estate marketing layout that groups multiple interior layouts into a single artistic focal structure.",
        process: [
          "Drafting perfect segment grids using modular circular paths in CorelDRAW.",
          "Masking individual room photography (kitchen, dining, bedroom) into corresponding visual slots.",
          "Positioning serif titles with comfortable tracking."
        ],
        toolsUsed: ["CorelDRAW", "Adobe Photoshop Design Engine"],
        result: "Gained an exquisite print-ready brochure layout that can be sent straight to laser print offsets.",
        gallery: [
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80"
        ]
      }
    },
    {
      id: "proj5",
      title: "Luxury Home Stacked Property Catalog",
      category: "Print Media",
      thumbnail: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
      description: "High-end real estate listing brochure built on a dark royal blue theme. Employs gold borders, crisp listing statistics boxes, and triple horizontal panels for pristine luxury interior representation.",
      tools: ["Adobe Illustrator", "Typography & Grid Systems"],
      clientName: "Prestige Property Devs",
      feedback: "The golden-accented layout looks exceptionally luxurious. All margins, bleed lines, and safe areas were impeccably configured for high-end laser printing.",
      beforeImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
      afterImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
      caseStudy: {
        objective: "Design a high-converting property sale pamphlet combining detailed floor stats and visual luxury.",
        process: [
          "Setting up dual vertical columns using golden-ratio margin offsets.",
          "Arranging three rounded panels with clean white margins to split living, kitchen, and bathroom interiors.",
          "Inserting vector checkmark elements and bright price callout circles."
        ],
        toolsUsed: ["Adobe Illustrator CC", "Adobe Photoshop"],
        result: "A stunning luxury real estate catalogue perfectly styled under CMYK print specifications.",
        gallery: [
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80"
        ]
      }
    }
  ],
  testimonials: [],
  blogPosts: [
    {
      id: "blog1",
      title: "Mastering vector nodes alignment in CorelDRAW for flawless digital-to-print offsets",
      category: "Print Design Tips",
      readTime: "5 min read",
      date: "May 20, 2026",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      summary: "An in-depth guide regarding printer layout dielines, keeping crop alignments exact, and handling vector node cleanup to save print processing errors.",
      content: "### Flawless Print Preparation: Why Vector Nodes Matter\n\nMany beginner designers draft gorgeous layouts, only to realize that their printing press produces blurry lines, jagged cuts, or misaligned margins. Most printing issues trace back to dirty node structures inside software like CorelDRAW and Adobe Illustrator.\n\n#### 1. Close Your Paths Tight\n\nEnsure every vector shape has a fully closed path. An open node layout creates unpredictable fill instructions in CMYK printing plates. Press drivers might render them as raw black edges or miss them altogether under high-speed mechanical cycles.\n\n```text\nRule of thumb: Always use the Auto-Close tool in CorelDRAW before saving print archives.\n```\n\n#### 2. Configure Proper Bleed Margins\n\nAlways extend your design's backgrounds exactly 3mm (or 0.125 inches) beyond the final trim lines. Mechanical cutters slide ever so slightly, and missing bleed boundaries causes awkward thin white margins on actual product packaging corners.\n\n#### 3. RGB to CMYK Conversions\n\nNever send RGB files to an offset printer! Always convert your document profile early. Watch for rich-black values (typically C:60, M:40, Y:40, K:100) to ensure deep dark solids instead of a muddy gray registration output.",
      tags: ["CorelDRAW", "Print Media", "Dielines", "Packaging Production"]
    },
    {
      id: "blog2",
      title: "Unlocking fast workflows: How to combine layouts with custom graphic details in Photoshop",
      category: "Design Tips",
      readTime: "7 min read",
      date: "April 14, 2026",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
      summary: "A practical breakdown of content generation and the precision layer masking needed to construct elite multi-resolution marketing banners.",
      content: "### The Creative Partnership: Flat Formats + Human Editing\n\nLearn how to bridge the gap and prepare beautiful promotional fliers:\n\n#### 1. Start with Precise Ratios\n\nRequest your aspect ratios early to prevent awkward stretches. Choose softbox lighting layouts or flat graphic formats to align closely with brand guidelines.\n\n#### 2. Isolation and Grid Alignment\n\nOnce you choose the base layout, import it into Photoshop. Use standard masking brushes, pen selections, and Subject Selection to isolate the elements and wipe off awkward background visual clutter.\n\n#### 3. Keep Text Elements Custom and Vector\n\nAlways place typography manually in Illustrator or CorelDRAW using professional font weights. Never rely on automatic text embedding. Crisp vector typography is non-negotiable for legible billboard branding or tiny features lists.",
      tags: ["Adobe Photoshop", "Illustrator CC", "Content Automation"]
    },
    {
      id: "blog3",
      title: "Creating high-fidelity 3D product mockups directly from flat flat layout dielines",
      category: "Product Packaging",
      readTime: "4 min read",
      date: "March 29, 2026",
      image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&auto=format&fit=crop&q=80",
      summary: "Understand the visual principles of mapping flat design sheets onto 3D packaging grids to win immediate approval.",
      content: "### Transforming Flat Work to Real 3D Prototypes\n\nProduct managers struggle to visualize 2D layouts. Presenting a flat dieline map makes standard feedback cycles long and frustrating. This guide explains how mapping software converts flat designs into spectacular 3D packaging previews.\n\n#### 1. Establish True Perspective Lines\n\nWhen displaying mockups, use accurate lighting and realistic shadow planes. This highlights the weight and material of the package—matte, glossy, or kraft finish.\n\n#### 2. Correct Dieline Boundaries\n\nAvoid stretching labels over folds or seams. Treat each panel separately and align design elements with safe margins to ensure perfect geometric continuity.",
      tags: ["Packaging", "3D Mockup", "CorelDRAW", "Retail Design"]
    }
  ]
};
