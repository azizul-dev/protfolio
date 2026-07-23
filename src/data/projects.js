export const projects = [
  {
    id: 0,
    slug: "pantrypilot",
    title: "PantryPilot",
    subtitle: "AI-Powered Recipe Platform",
    category: "AI Platform / SaaS",
    description:
      "A full-stack AI-powered recipe platform where users can discover recipes, generate recipe descriptions using Google Gemini, receive ingredient-based cooking suggestions, manage recipes and blog posts, maintain a wishlist, and interact through ratings and reviews.",
    tags: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Framer Motion",
      "Axios",
      "NextAuth",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Google Gemini API"
    ],
    image: "/images/projects/pantrypilot.png",
    live: "https://pantrypilot-client.vercel.app/",
    github: "https://github.com/azizul-dev/pantrypilot-client",
    heroTagline:
      "Revolutionizing home cooking with Google Gemini AI for smart recipe suggestions, dynamic description generation, and interactive meal planning.",
    overview: {
      purpose:
        "PantryPilot was built to solve everyday meal prep indecision and eliminate food waste by empowering users to generate creative, personalized recipes directly from ingredients already in their pantry.",
      goal:
        "Deliver a high-performance, full-stack application leveraging generative AI APIs with robust caching, real-time wishlist state synchronization, dynamic server-side filtering, and an engaging responsive user experience.",
      targetUsers:
        "Home chefs, culinary enthusiasts, food bloggers, and busy individuals seeking effortless meal planning and AI-assisted cooking inspiration.",
      mainFunctionality:
        "AI Recipe Suggester based on available ingredients, AI Description Generator powered by Google Gemini API, multi-facet recipe exploration with real-time search, category filtering, wishlist tracking, blog publishing, and user ratings/reviews."
    },
    features: [
      {
        title: "AI Recipe Suggester",
        description:
          "Input custom ingredients and receive instant, personalized recipe recommendations curated by Google Gemini API.",
        icon: "auto_awesome"
      },
      {
        title: "AI Description Generator",
        description:
          "Automatically craft rich, mouthwatering recipe narratives and step-by-step culinary guides with generative AI.",
        icon: "description"
      },
      {
        title: "Dynamic Search & Multi-Filter",
        description:
          "Seamlessly filter recipes by cooking time, meal category, dietary restrictions, and ingredient combinations.",
        icon: "filter_list"
      },
      {
        title: "Instant Wishlist Sync",
        description:
          "Save favorite recipes with optimistic UI updates and TanStack Query cache invalidation across all user sessions.",
        icon: "bookmark"
      },
      {
        title: "Recipe CRUD & Community Hub",
        description:
          "Full custom recipe creation, blog publishing platform, interactive star ratings, and community reviews.",
        icon: "restaurant_menu"
      },
      {
        title: "Secure Dual Auth & API Architecture",
        description:
          "NextAuth authentication integrated with custom JWT tokens, HTTPOnly security, and protected REST APIs.",
        icon: "security"
      }
    ],
    techStack: {
      frontend: [
        "Next.js (App Router)",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "TanStack Query",
        "Axios",
        "NextAuth.js"
      ],
      backend: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "Mongoose ORM",
        "JWT Authentication",
        "bcrypt encryption"
      ],
      database: ["MongoDB Atlas"],
      authentication: ["NextAuth", "JWT with HTTPOnly Cookies"],
      deployment: [
        "Frontend: Vercel",
        "Backend: Vercel Serverless Functions"
      ],
      aiApis: ["Google Gemini 1.5 Flash API"]
    },
    challenges: [
      {
        title: "Google Gemini Response Normalization",
        problem:
          "Google Gemini API occasionally returned inconsistent response structures or markdown formatting wrappers around JSON outputs, causing client-side parsing exceptions.",
        why:
          "Generative AI model outputs fluctuate based on prompt phrasing, temperature settings, and raw string responses without rigid JSON mode enforcement.",
        debug:
          "Captured raw HTTP response payloads using network interceptors, logged edge-case outputs, and tested multi-stage regex extraction patterns.",
        solution:
          "Implemented a normalization utility layer with strict TypeScript interfaces, regex sanitization, and fallback default values before injecting AI data into application state."
      },
      {
        title: "Wishlist State Synchronization Across Pages",
        problem:
          "Adding or removing items from the wishlist produced stale UI state when navigating between recipe detail pages and the user dashboard after auth transitions.",
        why:
          "Independent component local states and standard HTTP response caching caused out-of-sync UI instances across different route segments.",
        debug:
          "Traced state updates using React Query DevTools and identified missing cache invalidation calls on mutation callbacks.",
        solution:
          "Configured TanStack Query optimistic updates paired with query key invalidation (`queryClient.invalidateQueries(['wishlist'])`) for instant feedback and server sync."
      },
      {
        title: "Multi-Facet Server-Side Filtering & Pagination",
        problem:
          "Combining category filters, search keywords, sorting criteria, and pagination resulted in lost query parameters when changing pages.",
        why:
          "URL query parameters were being replaced rather than merged when UI controls updated state independently.",
        debug:
          "Logged URL search parameter mutations during complex multi-select interactions and audited MongoDB aggregation pipelines.",
        solution:
          "Created a centralized custom hook for URL query parameter serialization using `useSearchParams` and `usePathname`, ensuring multi-filter persistence."
      }
    ],
    lessonsLearned: [
      "Standardizing LLM outputs with strict runtime schema validation prevents client crashes.",
      "TanStack Query optimistic UI patterns drastically elevate user perception of application speed.",
      "Declarative URL state management is key for shareable, bookmarkable search results.",
      "Decoupling Express controllers from third-party AI APIs ensures modular testability."
    ],
    futureImprovements: [
      {
        title: "Pantry Photo OCR Scanning",
        description: "Scan fridge/pantry photos using computer vision to auto-fill ingredients list."
      },
      {
        title: "Automated Nutritional Breakdown",
        description: "Calculate calories, macro-nutrients, and dietary tags for AI-generated recipes."
      },
      {
        title: "PDF Meal Plan Export",
        description: "Generate downloadable weekly grocery shopping lists and scheduled meal plans."
      }
    ],
    screenshots: [
      "/images/projects/pantrypilot.png",
      "/images/projects/pantrypilot.png"
    ]
  },
  {
    id: 1,
    slug: "inksphere",
    title: "InkSphere",
    subtitle: "Ebook Sharing Platform",
    category: "Ebook Platform / SaaS",
    description:
      "A premium full-stack Ebook Sharing Platform where readers can discover, purchase, and read ebooks while writers publish and manage content. Features Stripe payments, role-based dashboards, reading analytics, bookmarks, and reading progress.",
    tags: ["Next.js 15", "Express.js", "MongoDB", "Better Auth", "Stripe"],
    image: "/images/projects/inksphere.png",
    live: "https://inksphere-two.vercel.app/",
    github: "https://github.com/azizul-dev/inksphere",
    heroTagline:
      "A complete digital publishing and reading ecosystem with Stripe payment integration, reader engagement analytics, and role-based access controls.",
    overview: {
      purpose:
        "InkSphere bridges the gap between independent authors and passionate readers by offering a seamless self-publishing pipeline paired with an interactive web-based PDF reader.",
      goal:
        "Build a scalable digital commerce platform with secure transaction processing, author revenue tracking, reader progress persistence, and role-restricted dashboard views.",
      targetUsers:
        "Independent writers publishing original work, digital book buyers, and avid readers seeking an uncluttered web reading experience.",
      mainFunctionality:
        "Stripe checkout integration, Better Auth authentication, interactive PDF ebook reader, reader/writer/admin dashboards, revenue analytics, book tagging, and bookmark management."
    },
    features: [
      {
        title: "Stripe Monetization & Checkout",
        description:
          "Secure single-click ebook purchases with Stripe Webhooks handling automated library access granting.",
        icon: "payments"
      },
      {
        title: "Role-Based Dashboards",
        description:
          "Tailored interfaces for Readers (library, bookmarks), Writers (publishing, sales analytics), and Admins (user management).",
        icon: "dashboard"
      },
      {
        title: "Interactive Web Ebook Reader",
        description:
          "Custom PDF viewing interface with chapter navigation, auto-saved reading progress, and night mode reading.",
        icon: "menu_book"
      },
      {
        title: "Writer Sales Analytics",
        description:
          "Real-time revenue graphs, purchase conversion statistics, and reader engagement metrics powered by Recharts.",
        icon: "analytics"
      }
    ],
    techStack: {
      frontend: ["Next.js 15", "React 19", "Tailwind CSS", "Framer Motion", "Recharts"],
      backend: ["Node.js", "Express.js", "Mongoose ORM", "Stripe SDK", "Better Auth"],
      database: ["MongoDB Atlas"],
      authentication: ["Better Auth", "Role-Based Access Control (RBAC)"],
      deployment: ["Vercel"]
    },
    challenges: [
      {
        title: "Stripe Webhook Event Processing & Idempotency",
        problem:
          "Intermittent duplicate webhook deliveries from Stripe triggered duplicate purchase order records and double library access entries.",
        why:
          "Stripe re-sends webhook events if an endpoint response takes longer than 3 seconds due to network jitter or database connection latency.",
        debug:
          "Logged webhook payload delivery IDs (`evt_xxx`) and audited Mongoose save operations under high concurrency tests.",
        solution:
          "Implemented an idempotent webhook handler using MongoDB unique event indexes and database transactions to ensure events are processed exactly once."
      },
      {
        title: "Better Auth Cookie Security & Cross-Domain Sessions",
        problem:
          "Authentication session cookies were dropped in Safari and mobile browsers when making cross-origin requests between Next.js frontend and Express backend API.",
        why:
          "Strict SameSite cookie policies block third-party cookies across different subdomains without explicit credential settings.",
        debug:
          "Inspected network headers in Safari Web Inspector and monitored cookie set headers across auth routes.",
        solution:
          "Configured `SameSite=Lax` with `credentials: include` in Axios request instances and aligned domain origins in production CORS configuration."
      },
      {
        title: "Large PDF Reader Rendering & Memory Optimization",
        problem:
          "Rendering 500+ page ebook PDFs caused mobile browser crashes due to excessive canvas memory footprint.",
        why:
          "Rendering every PDF page into the DOM simultaneously overwhelms browser GPU memory.",
        debug:
          "Profiled heap memory allocations in Chrome DevTools Performance tab during continuous page scrolling.",
        solution:
          "Built a virtualized page rendering viewport that unmounts offscreen pages and dynamically renders only visible PDF pages."
      }
    ],
    lessonsLearned: [
      "Idempotent design patterns in financial webhooks are non-negotiable for payment integrity.",
      "Virtualized rendering is essential when dealing with heavy canvas-based documents.",
      "Strict CORS and cookie attributes must be established early in decoupled full-stack projects."
    ],
    futureImprovements: [
      {
        title: "Offline Reading PWA",
        description: "Enable Progressive Web App caching for offline ebook reading."
      },
      {
        title: "Audiobook Sync",
        description: "Integrate text-to-speech audio player synced with reading cursor."
      }
    ],
    screenshots: [
      "/images/projects/inksphere.png"
    ]
  },
  {
    id: 2,
    slug: "inventra",
    title: "Inventra",
    subtitle: "Inventory & Billing System",
    category: "SaaS / Enterprise",
    description:
      "A modern full-stack Inventory & Billing Management System featuring inventory tracking, customer management, invoice generation, billing history, analytics dashboard, JWT authentication, and role-based access control.",
    tags: ["Next.js 16", "Express.js", "MongoDB", "Better Auth"],
    image: "/images/projects/inventra.png",
    live: "https://inventra-sandy.vercel.app/",
    github: "https://github.com/azizul-dev/inventra",
    heroTagline:
      "Streamlining small business operations with real-time stock deduction, dynamic PDF billing invoices, customer credit tracking, and executive dashboards.",
    overview: {
      purpose:
        "Inventra simplifies retail and warehouse management by providing real-time stock updates, automated tax invoice calculations, and detailed financial reporting.",
      goal:
        "Deliver an enterprise-grade billing system with zero stock calculation errors, instant PDF export, customer account balances, and security compliance.",
      targetUsers:
        "Store managers, warehouse administrators, sales personnel, and accounting teams requiring fast billing and accurate inventory logs.",
      mainFunctionality:
        "Stock level management, automated purchase order invoices, PDF generator, customer balance ledgers, inventory low-stock alerts, and analytical revenue insights."
    },
    features: [
      {
        title: "Automated Stock Deduction",
        description:
          "Real-time atomic stock adjustments upon checkout preventing over-selling across sales channels.",
        icon: "inventory_2"
      },
      {
        title: "Dynamic PDF Invoice Generator",
        description:
          "Generate professional printable and downloadable PDF receipts with custom company branding and QR verification.",
        icon: "receipt_long"
      },
      {
        title: "Low-Stock Alert Center",
        description:
          "Automated threshold notifications highlighting products requiring immediate re-ordering.",
        icon: "warning"
      },
      {
        title: "Customer Credit Ledger",
        description:
          "Track customer transaction history, pending balances, credit limits, and payment logs.",
        icon: "account_balance"
      }
    ],
    techStack: {
      frontend: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "React PDF"],
      backend: ["Node.js", "Express.js", "MongoDB", "Mongoose ORM"],
      database: ["MongoDB Atlas"],
      authentication: ["Better Auth", "JWT Session Management"],
      deployment: ["Vercel"]
    },
    challenges: [
      {
        title: "Concurrent Stock Deduction Race Conditions",
        problem:
          "Simultaneous invoice checkouts for the last remaining stock items resulted in negative inventory quantities.",
        why:
          "Non-atomic read-then-write database operations allowed multiple requests to pass stock checks concurrently.",
        debug:
          "Simulated concurrent API requests using Apache Bench and monitored inventory count mutations.",
        solution:
          "Refactored stock updates to use Mongoose atomic operations (`$inc: { quantity: -amount }`) with conditional query filters (`quantity: { $gte: amount }`)."
      },
      {
        title: "PDF Invoice Hydration & SSR Mismatch",
        problem:
          "Generating PDF documents on the server produced hydration errors due to browser font and date formatting differences.",
        why:
          "Client-side canvas rendering dependencies failed when executed during Next.js Server Side Rendering (SSR).",
        debug:
          "Audited server build logs and dynamic import boundaries for PDF generation modules.",
        solution:
          "Isolated PDF rendering into client-only dynamic imports (`next/dynamic` with `ssr: false`), preventing server evaluation."
      },
      {
        title: "MongoDB Aggregation Pipeline Optimization for Dashboard Analytics",
        problem:
          "Loading the financial analytics dashboard caused noticeable latency on large sales datasets.",
        why:
          "Unindexed aggregation stages performed full collection scans for group-by calculations.",
        debug:
          "Analyzed execution stats using MongoDB `.explain('executionStats')` on aggregation queries.",
        solution:
          "Added compound indexes on `date` and `branchId` fields and placed `$match` filters at the absolute beginning of the pipeline."
      }
    ],
    lessonsLearned: [
      "Atomic database updates are crucial for transactional inventory integrity.",
      "Heavy client-side libraries like PDF generators must be dynamically imported to maintain SSR speed.",
      "MongoDB `.explain()` is invaluable for diagnosing aggregation bottlenecks."
    ],
    futureImprovements: [
      {
        title: "Barcode Scanner Hardware Support",
        description: "Integrate WebUSB / Bluetooth barcode scanner listeners for rapid point-of-sale scanning."
      },
      {
        title: "Multi-Warehouse Transfer",
        description: "Enable stock transfer requests and tracking across multiple physical store locations."
      }
    ],
    screenshots: [
      "/images/projects/inventra.png"
    ]
  },
  {
    id: 3,
    slug: "adoptpet",
    title: "AdoptPet",
    subtitle: "Adoption Platform",
    category: "Adoption / Social Impact",
    description:
      "A premium full-stack Pet Adoption Platform featuring JWT Authentication with HTTPOnly cookies, a responsive dashboard, advanced search/filters, and a secure adoption request system.",
    tags: ["Next.js 16", "Express.js", "MongoDB", "JWT Auth"],
    image: "/images/projects/pet-adoption.png",
    live: "https://assignment-9-beta.vercel.app/",
    github: "https://github.com/azizul-dev/assignment-9",
    heroTagline:
      "Connecting shelter pets with loving families through seamless adoption application workflows, pet profile management, and real-time status updates.",
    overview: {
      purpose:
        "AdoptPet streamlines pet adoption by giving rescue shelters an intuitive platform to showcase animals and review prospective adopters efficiently.",
      goal:
        "Build an accessible, secure platform with HTTPOnly JWT auth, image optimization, multi-criteria pet filtering, and real-time application tracking.",
      targetUsers:
        "Pet rescue organizations, shelters, potential pet adopters, and animal welfare volunteers.",
      mainFunctionality:
        "Pet listing catalog with age/breed/size filters, adoption request form submission, shelter manager dashboard, application status updates, and user profile management."
    },
    features: [
      {
        title: "HTTPOnly Cookie JWT Security",
        description:
          "Secure session management storing access tokens in HTTPOnly, SameSite cookies to protect against XSS attacks.",
        icon: "lock"
      },
      {
        title: "Multi-Criteria Filter System",
        description:
          "Filter available pets instantly by species, age, gender, coat color, and shelter location.",
        icon: "pets"
      },
      {
        title: "Adoption Application Tracking",
        description:
          "Track submitted applications in real-time with status updates (Pending, Under Review, Approved, Rejected).",
        icon: "assignment"
      },
      {
        title: "Shelter Management Portal",
        description:
          "Shelter admins can create pet profiles, upload gallery photos, and approve adoption requests effortlessly.",
        icon: "admin_panel_settings"
      }
    ],
    techStack: {
      frontend: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "Axios"],
      backend: ["Node.js", "Express.js", "Mongoose ORM", "jsonwebtoken", "Cloudinary"],
      database: ["MongoDB Atlas"],
      authentication: ["JWT with HTTPOnly Cookies"],
      deployment: ["Vercel"]
    },
    challenges: [
      {
        title: "JWT Auth Persistence Across Page Refreshes",
        problem:
          "User authentication state was lost on hard page refreshes when using standard memory state without cookie auto-refresh.",
        why:
          "Client-side React state resets on page reloads if access tokens aren't silently re-verified with HTTPOnly cookies.",
        debug:
          "Monitored network auth headers and browser cookie store during hard refreshes.",
        solution:
          "Implemented an initial auth check custom hook (`useAuthCheck`) running on mount to silently request session validation from `/api/auth/me`."
      },
      {
        title: "High-Resolution Image Upload & Payload Constraints",
        problem:
          "Users uploading uncompressed photos from smartphones triggered HTTP 413 Payload Too Large errors on serverless routes.",
        why:
          "Raw camera photos (10MB+) exceed serverless payload limits and degrade mobile loading speeds.",
        debug:
          "Monitored network upload sizes and Vercel serverless request execution logs.",
        solution:
          "Added client-side canvas photo compression reducing images below 1MB prior to Cloudinary API upload."
      },
      {
        title: "Adoption Status Machine Integrity",
        problem:
          "Invalid status updates could be sent directly via API requests (e.g., reverting Approved status to Pending).",
        why:
          "Express API controllers accepted raw status strings without validating allowed state transitions.",
        debug:
          "Tested API endpoints with unexpected payload mutations via Postman.",
        solution:
          "Built a state transition validator module enforcing valid status progression paths."
      }
    ],
    lessonsLearned: [
      "HTTPOnly cookies offer superior XSS protection compared to localStorage for auth tokens.",
      "Client-side image compression saves bandwidth and ensures fast server uploads.",
      "State machine validation on the backend protects business logic integrity."
    ],
    futureImprovements: [
      {
        title: "Interactive Shelter Map",
        description: "Integrate Mapbox / Google Maps to display nearby adoption centers."
      },
      {
        title: "Pet Matchmaker Quiz",
        description: "Build an interactive questionnaire recommending ideal pets based on user lifestyle."
      }
    ],
    screenshots: [
      "/images/projects/pet-adoption.png",
      "/images/projects/pet-adoption-platform.png"
    ]
  },
  {
    id: 4,
    slug: "skillsphere",
    title: "SkillSphere",
    subtitle: "Learning Platform",
    category: "Education / EdTech",
    description:
      "A modern fully responsive online learning platform where users can browse courses, authenticate with Google, track progress, and manage their profile.",
    tags: ["Next.js 15", "Better Auth", "MongoDB", "Tailwind CSS"],
    image: "/images/projects/skillsphere.png",
    live: "https://assignment-8-eta-two.vercel.app",
    github: "https://github.com/azizul-dev",
    heroTagline:
      "Empowering self-paced learning with interactive video progress tracking, course categories, Google single sign-on, and responsive course dashboards.",
    overview: {
      purpose:
        "SkillSphere offers an intuitive, accessible online learning hub where students can master tech skills through structured course materials and track progress visually.",
      goal:
        "Provide a slick, distraction-free educational platform with seamless OAuth login, lesson completion tracking, and responsive layout performance.",
      targetUsers:
        "Students, developers, career switchers, and lifelong learners looking for structured skill acquisition.",
      mainFunctionality:
        "Course catalog browsing, video lesson player, course enrollment, completion progress bars, Google OAuth login, and user profile management."
    },
    features: [
      {
        title: "Google OAuth Authentication",
        description:
          "Instant single sign-on using Google OAuth via Better Auth for effortless user onboarding.",
        icon: "login"
      },
      {
        title: "Interactive Course Tracker",
        description:
          "Visual completion indicators, lesson checklists, and persistent progress bars for every enrolled course.",
        icon: "school"
      },
      {
        title: "Curated Skill Categories",
        description:
          "Explore web development, UI design, backend engineering, and cloud topics with tag-based filtering.",
        icon: "category"
      },
      {
        title: "Responsive Video Player Interface",
        description:
          "Optimized video layout with collapsible lesson sidebars for comfortable mobile and desktop learning.",
        icon: "play_circle"
      }
    ],
    techStack: {
      frontend: ["Next.js 15", "React 19", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express.js", "Better Auth SDK"],
      database: ["MongoDB Atlas"],
      authentication: ["Better Auth", "Google OAuth 2.0"],
      deployment: ["Vercel"]
    },
    challenges: [
      {
        title: "Google OAuth Callback Redirect Loops in Production",
        problem:
          "Google OAuth authentication failed with redirect URI mismatches on production Vercel deployments.",
        why:
          "Mismatch between dynamic Vercel preview URLs and hardcoded OAuth callback environment variables.",
        debug:
          "Examined browser network redirect headers and Vercel environment variable configs.",
        solution:
          "Configured canonical domain resolution in Better Auth settings and updated Google Cloud Console redirect URIs."
      },
      {
        title: "Video Progress Persistence Optimization",
        problem:
          "Sending frequent progress update requests while watching video lessons caused API rate limiting.",
        why:
          "Updating database records every second during video playback generated excessive HTTP traffic.",
        debug:
          "Inspected Network tab request count during continuous video playback.",
        solution:
          "Created a debounced progress hook saving updates to `localStorage` and syncing with backend every 15 seconds or on pause."
      },
      {
        title: "Dynamic Responsive Course Cards Grid",
        problem:
          "Course title length variations caused uneven card heights and broken grid alignment on tablet viewports.",
        why:
          "Standard flex containers without fixed line-clamping and flex-grow constraints collapse unevenly.",
        debug:
          "Tested course catalog rendering with long multi-line titles across viewports.",
        solution:
          "Applied CSS `@supports (display: grid)` with uniform grid rows and line-clamp typography rules."
      }
    ],
    lessonsLearned: [
      "OAuth environments require explicit canonical domain configurations for multi-environment deployments.",
      "Debouncing client state updates reduces backend database operations exponentially.",
      "CSS line-clamping and grid auto-fit maintain layout visual harmony."
    ],
    futureImprovements: [
      {
        title: "Downloadable Certificate Generation",
        description: "Automatically generate downloadable PDF certificates of completion upon finishing courses."
      },
      {
        title: "Quiz & Assignment Module",
        description: "Interactive knowledge check quizzes at the end of each lesson section."
      }
    ],
    screenshots: [
      "/images/projects/skillsphere.png"
    ]
  },
  {
    id: 5,
    slug: "keen-keeper",
    title: "Keen Keeper",
    subtitle: "Relationship Tool",
    category: "Productivity / Personal CRM",
    description:
      "A smart relationship management tool to keep track of friends, personal interactions, key dates, and stay connected with intelligent tracking.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/keen-keeper.png",
    live: "https://assignment-7-swart-one.vercel.app/",
    github: "https://github.com/azizul-dev",
    heroTagline:
      "Never forget important personal interactions, birthdays, or follow-ups with an intuitive personal relationship CRM.",
    overview: {
      purpose:
        "Keen Keeper helps users maintain meaningful personal and professional relationships by organizing interaction notes, important dates, and follow-up reminders.",
      goal:
        "Create a fluid, delightful personal management app with interactive card animations, drag-and-drop prioritization, and local data persistence.",
      targetUsers:
        "Busy professionals, networkers, and individuals committed to nurturing friendships and professional connections.",
      mainFunctionality:
        "Contact directory, interaction timeline logging, birthday countdowns, follow-up reminders, tag grouping, and search."
    },
    features: [
      {
        title: "Interaction History Logs",
        description:
          "Record meeting summaries, shared memories, and follow-up topics for every person in your network.",
        icon: "history_edu"
      },
      {
        title: "Birthday & Anniversary Alerts",
        description:
          "Visual countdown widgets highlighting upcoming milestones so you never miss a celebration.",
        icon: "cake"
      },
      {
        title: "Custom Contact Tagging",
        description:
          "Organize connections by custom tags like Close Friends, Colleagues, Mentors, or Family.",
        icon: "label"
      },
      {
        title: "Interactive Card Motion",
        description:
          "Smooth drag-and-drop contact reordering and interactive swipe cards powered by Framer Motion.",
        icon: "touch_app"
      }
    ],
    techStack: {
      frontend: ["Next.js", "React 19", "Tailwind CSS", "Framer Motion"],
      backend: ["Local State & LocalStorage Persistence"],
      database: ["IndexedDB / Local Storage"],
      authentication: ["Client-Side Session"],
      deployment: ["Vercel"]
    },
    challenges: [
      {
        title: "Framer Motion Touch Gesture & Scroll Conflict",
        problem:
          "Dragging contact cards vertically on mobile screens prevented normal page scrolling.",
        why:
          "Framer Motion drag event listeners captured touchstart events globally on the card container.",
        debug:
          "Tested touch scroll behaviors on physical mobile devices across card lists.",
        solution:
          "Scoped drag gesture controls to explicit drag handles (`dragListener={false}`) while leaving card bodies scrollable."
      },
      {
        title: "Multi-Tab LocalStorage State Synchronization",
        problem:
          "Updating contact details in one browser tab left open tabs displaying outdated information.",
        why:
          "Browser tabs maintain independent React state instances unless explicitly notified of storage changes.",
        debug:
          "Opened parallel browser tabs and tested contact edits.",
        solution:
          "Added a global `window.addEventListener('storage', ...)` listener syncing local state across tabs seamlessly."
      },
      {
        title: "Timezone Offset in Date Countdowns",
        problem:
          "Birthday countdown numbers shifted by 1 day depending on user local timezone offsets.",
        why:
          "Parsing dates without explicit local time parsing converted midnight dates to UTC.",
        debug:
          "Tested date calculation outputs across different timezone configurations.",
        solution:
          "Built a timezone-neutral ISO date utility normalizing birthdates relative to user local calendar dates."
      }
    ],
    lessonsLearned: [
      "Gesture controls on mobile must be carefully isolated from standard scroll gestures.",
      "The browser Storage API event listener provides instant multi-tab state synchronization.",
      "Always normalize date math to avoid midnight timezone shifting."
    ],
    futureImprovements: [
      {
        title: "Cloud Backup & Cross-Device Sync",
        description: "Add optional end-to-end encrypted cloud storage sync for contacts."
      },
      {
        title: "Automated Follow-up Email Prompts",
        description: "Schedule automated reminder notifications for staying in touch with key contacts."
      }
    ],
    screenshots: [
      "/images/projects/keen-keeper.png"
    ]
  },
  {
    id: 6,
    slug: "erpflow",
    title: "ERPFlow",
    subtitle: "Mini ERP System",
    category: "ERP / Enterprise",
    description:
      "A modern full-stack ERP System for managing products, customers, suppliers, purchases, and sales. Features JWT authentication, inventory tracking, auto stock updates, PDF invoices, and analytics with Recharts.",
    tags: ["React 19", "Node.js", "Express.js", "MongoDB", "JWT", "Recharts"],
    image: "/images/projects/erpflow.png",
    live: "https://erpflow-beige.vercel.app/dashboard",
    github: "https://github.com/azizul-dev/erpflow",
    heroTagline:
      "An end-to-end enterprise resource planning system for tracking supply chain logistics, sales performance, automated stock adjustments, and financial reports.",
    overview: {
      purpose:
        "ERPFlow brings enterprise-grade resource planning tools to growing businesses, centralizing product inventories, supplier procurement, and customer sales.",
      goal:
        "Deliver a complete MERN stack ERP solution with instant analytics, transactional inventory updates, multi-user role management, and PDF reporting.",
      targetUsers:
        "Wholesalers, distributors, retail business owners, supply chain managers, and sales accountants.",
      mainFunctionality:
        "Products CRUD, supplier management, purchase orders, sales transactions, automated stock rebalancing, financial charts with Recharts, and downloadable PDF invoices."
    },
    features: [
      {
        title: "Supply Chain & Supplier Management",
        description:
          "Manage supplier profiles, purchase order history, item cost tracking, and lead times.",
        icon: "local_shipping"
      },
      {
        title: "Automated Sales & Stock Sync",
        description:
          "Sales receipts automatically deduct product stock while purchase orders increment inventory atomically.",
        icon: "sync_alt"
      },
      {
        title: "Recharts Business Analytics",
        description:
          "Visualize monthly revenue, profit margins, top-selling products, and inventory valuation.",
        icon: "bar_chart"
      },
      {
        title: "PDF Invoice & Purchase Orders",
        description:
          "Generate printable client invoices and official supplier purchase orders in one click.",
        icon: "picture_as_pdf"
      }
    ],
    techStack: {
      frontend: ["React 19", "Vite", "Tailwind CSS", "Framer Motion", "Recharts"],
      backend: ["Node.js", "Express.js", "Mongoose ORM", "jsonwebtoken"],
      database: ["MongoDB Atlas"],
      authentication: ["JWT with LocalStorage / Header Bearer"],
      deployment: ["Vercel"]
    },
    challenges: [
      {
        title: "Recharts Responsive Container Layout Jitter",
        problem:
          "Recharts analytics graphs broke flex container widths and caused layout overflow during window resizing.",
        why:
          "Recharts `<ResponsiveContainer>` measures parent dimensions dynamically and fails when parent container size is unconstrained.",
        debug:
          "Inspected DOM element width mutations during browser window resizing.",
        solution:
          "Wrapped chart elements inside fixed-aspect-ratio containers (`aspect-[16/9]`) with CSS `min-w-0` grid constraints."
      },
      {
        title: "Deeply Nested Mongoose Population Query Latency",
        problem:
          "Fetching sales orders with populated product, customer, and supplier details caused slow API response times.",
        why:
          "Sequential nested Mongoose `.populate()` calls perform multiple roundtrip database queries.",
        debug:
          "Profiled Express API route response latency and database execution logs.",
        solution:
          "Refactored complex queries to use MongoDB `$lookup` aggregation pipelines, performing single-query joins."
      },
      {
        title: "Expired JWT Session Handling in Single-Page App",
        problem:
          "Expired JWT tokens resulted in broken form submissions without informing the user to re-login.",
        why:
          "401 Unauthorized API responses were not caught globally by Axios instances.",
        debug:
          "Audited browser console logs during expired token API interactions.",
        solution:
          "Added an Axios response interceptor that automatically opens an authentication session modal on receiving 401 statuses."
      }
    ],
    lessonsLearned: [
      "MongoDB aggregation pipelines are vastly superior to nested `.populate()` calls for complex relational data.",
      "Global API response interceptors simplify authentication error handling across single-page apps.",
      "Recharts requires explicit parent dimension constraints to prevent layout reflows."
    ],
    futureImprovements: [
      {
        title: "Multi-Currency & Tax Rate Rules",
        description: "Support international currencies with automated exchange rates and regional tax rules."
      },
      {
        title: "Role-Based Audit Logging",
        description: "Maintain a complete audit log of all inventory modifications by employee users."
      }
    ],
    screenshots: [
      "/images/projects/erpflow.png"
    ]
  },
  {
    id: 7,
    slug: "digitools",
    title: "DigiTools",
    subtitle: "Digital Assets Platform",
    category: "Productivity / Design Assets",
    description:
      "A versatile digital asset platform for designers and developers to manage, discover, and organize resources efficiently.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/digitools.png",
    live: "https://demo-assignment-gamma.vercel.app/",
    github: "https://github.com/azizul-dev",
    heroTagline:
      "Empowering creators with a curated ecosystem of UI components, code snippets, design templates, and digital asset management tools.",
    overview: {
      purpose:
        "DigiTools organizes developer and designer resources into an accessible, searchable repository for daily productivity.",
      goal:
        "Deliver a fast, fluid web application with instant client-side asset filtering, categorization tags, and resource previews.",
      targetUsers:
        "UI/UX designers, frontend developers, content creators, and digital product managers.",
      mainFunctionality:
        "Asset collection catalog, keyword tag filtering, instant search, resource preview modal, bookmarks, and asset submission."
    },
    features: [
      {
        title: "Instant Asset Search",
        description:
          "Lightning-fast client search filtering resources instantly by name, file format, or category tag.",
        icon: "search"
      },
      {
        title: "Resource Collection Bookmarks",
        description:
          "Save essential design kits and code templates into personalized favorite collections.",
        icon: "folder_special"
      },
      {
        title: "Interactive Asset Preview",
        description:
          "Inspect asset previews, code snippets, file dimensions, and compatibility details before downloading.",
        icon: "preview"
      },
      {
        title: "Clean Category Navigation",
        description:
          "Navigate effortlessly between Icons, UI Kits, 3D Assets, Fonts, and React Component Libraries.",
        icon: "dashboard_customize"
      }
    ],
    techStack: {
      frontend: ["React 19", "JavaScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js API Services"],
      database: ["MongoDB Atlas"],
      authentication: ["Custom Auth Headers"],
      deployment: ["Vercel"]
    },
    challenges: [
      {
        title: "Real-Time Client Filtering Lag on Large Asset Datasets",
        problem:
          "Filtering through 1000+ asset tags on every keystroke created input lag on low-power devices.",
        why:
          "Un-debounced array filter operations executed heavy regex comparisons on main UI thread.",
        debug:
          "Monitored JavaScript execution frame rates in Chrome Performance panel during fast typing.",
        solution:
          "Implemented a debounced search hook (`useDebounce`) delaying filter evaluations until typing pauses for 150ms."
      },
      {
        title: "Dark/Light Theme Flash of Unstyled Content (FOUC)",
        problem:
          "Initial page load flashed a bright white background for dark mode users before React mounted.",
        why:
          "Theme state was read from local storage inside client-side `useEffect` after initial DOM render.",
        debug:
          "Observed DOM render timeline during hard refreshes.",
        solution:
          "Injected an inline script tag into `html <head>` reading theme preference and applying the `.dark` class before DOM paint."
      },
      {
        title: "Asset Card Aspect Ratio Distortions",
        problem:
          "Asset thumbnail images with varying aspect ratios distorted card heights in equal-height CSS grids.",
        why:
          "Images scaled without explicit aspect-ratio constraints or object-fit rules.",
        debug:
          "Tested image rendering with mixed portrait and landscape graphics.",
        solution:
          "Applied CSS `aspect-video` and `object-cover` classes to ensure uniform thumbnail bounding boxes."
      }
    ],
    lessonsLearned: [
      "Debouncing search inputs prevents UI thread locking during client-side dataset queries.",
      "Executing theme script tags in `<head>` eliminates dark mode FOUC completely.",
      "Aspect ratio utilities maintain visual uniformity in image-heavy gallery layouts."
    ],
    futureImprovements: [
      {
        title: "Direct Code Snippet Copy",
        description: "One-click copyable code snippets with syntax highlighting."
      },
      {
        title: "Community Asset Upload",
        description: "Allow verified creators to upload and sell digital design assets directly."
      }
    ],
    screenshots: [
      "/images/projects/digitools.png"
    ]
  },
  {
    id: 8,
    slug: "cinetrack",
    title: "CineTrack",
    subtitle: "Movie Discovery",
    category: "Entertainment / API Integration",
    description:
      "Discover your next favorite movie using real-time data from TMDB with a premium interface, trending titles, trailers, and personal watchlist.",
    tags: ["React", "TMDB API", "Axios", "Framer Motion"],
    image: "/images/projects/cinetrack.png",
    live: "https://cinetrack-az0.netlify.app/",
    github: "https://github.com/azizul-dev",
    heroTagline:
      "Explore trending movies, watch HD video trailers, discover cast biographies, and curate your personal movie watchlist using real-time TMDB data.",
    overview: {
      purpose:
        "CineTrack offers movie fans an immersive, responsive movie discovery platform powered by live data from The Movie Database (TMDB) API.",
      goal:
        "Build a rich entertainment application with instant search, video modal playback, rating indicators, and smooth animation transitions.",
      targetUsers:
        "Cinephiles, movie lovers, and casual viewers looking for movie recommendations and trailer previews.",
      mainFunctionality:
        "Trending movies carousel, genre filtering, live search bar, movie details page, cast list, video trailer modal, and personal watchlist."
    },
    features: [
      {
        title: "TMDB Live Data Integration",
        description:
          "Real-time access to popular movies, top-rated titles, upcoming releases, and detailed cast metadata.",
        icon: "movie"
      },
      {
        title: "HD Video Trailer Modal",
        description:
          "Watch embedded YouTube trailers directly within an animated lightbox overlay.",
        icon: "smart_display"
      },
      {
        title: "Personal Watchlist Management",
        description:
          "Add movies to your personal watchlist saved directly in local storage for quick offline access.",
        icon: "playlist_add"
      },
      {
        title: "Cast & Recommendation Feed",
        description:
          "Explore cast profiles and receive smart movie recommendations based on current selection.",
        icon: "groups"
      }
    ],
    techStack: {
      frontend: ["React 19", "JavaScript", "Tailwind CSS", "Framer Motion", "Axios"],
      backend: ["TMDB REST API v3 Integration"],
      database: ["LocalStorage Watchlist Storage"],
      authentication: ["Client-Side Preferences"],
      deployment: ["Netlify"]
    },
    challenges: [
      {
        title: "TMDB API Rate Limiting & Broken Poster Fallbacks",
        problem:
          "Rapid pagination and missing image paths in API responses resulted in broken image icons.",
        why:
          "Some TMDB records return null poster paths or trigger HTTP 429 rate limit responses on high traffic.",
        debug:
          "Logged API response payloads and network error status codes during continuous scrolling.",
        solution:
          "Created an image helper utility returning custom fallback poster graphics whenever poster paths evaluate to null."
      },
      {
        title: "Modal Video Trailer Autoplay Mobile Restrictions",
        problem:
          "Trailer videos failed to auto-play when opening the trailer modal on iOS Safari and mobile browsers.",
        why:
          "Mobile OS security policies block unmuted video autoplay without explicit user gesture triggers.",
        debug:
          "Tested iframe embed parameters on Safari iOS.",
        solution:
          "Configured video iframe embeds with `autoplay=1&mute=1` parameters and added explicit tap-to-play overlays."
      },
      {
        title: "Infinite Scroll Memory Management",
        problem:
          "Scrolling through 10+ pages of movie posters slowed down mobile browser frame rates.",
        why:
          "Accumulating thousands of high-res image elements in the DOM consumes excessive memory.",
        debug:
          "Monitored DOM node count in Chrome DevTools Elements panel.",
        solution:
          "Implemented list virtualization rendering only currently visible viewport movie cards."
      }
    ],
    lessonsLearned: [
      "Always provide robust fallback images for third-party API data feeds.",
      "Mobile browsers enforce strict autoplay audio rules requiring muted initial states.",
      "DOM node count management is critical for smooth mobile scrolling performance."
    ],
    futureImprovements: [
      {
        title: "TV Series & Season Exploration",
        description: "Expand catalog to support multi-season TV shows and episode guides."
      },
      {
        title: "User Reviews & Community Rating",
        description: "Allow registered users to publish custom movie reviews and star ratings."
      }
    ],
    screenshots: [
      "/images/projects/cinetrack.png"
    ]
  },
  {
    id: 9,
    slug: "ph-play-store",
    title: "PH Play Store",
    subtitle: "App Distribution",
    category: "Platform / Mobile Ecosystem",
    description:
      "An innovative app distribution platform built with Next.js App Router for high performance, app categorization, preview cards, and installation stats.",
    tags: ["Next.js App Router", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/playstore.png",
    live: "https://ph-play-store-next.vercel.app/",
    github: "https://github.com/azizul-dev",
    heroTagline:
      "Discover, preview, and download mobile applications with a sleek app store dashboard built on Next.js App Router.",
    overview: {
      purpose:
        "PH Play Store provides an app showcase environment where users can explore mobile software, view screenshots, read reviews, and track download counts.",
      goal:
        "Deliver a modern app store web experience with fast server-side rendering, categorization filters, app detail views, and responsive preview cards.",
      targetUsers:
        "Mobile app users, developers seeking distribution showcases, and tech enthusiasts.",
      mainFunctionality:
        "Featured apps hero slider, category browsing (Games, Productivity, Social, Tools), app detail pages, rating summaries, and download metrics."
    },
    features: [
      {
        title: "App Category Navigation",
        description:
          "Filter application listings instantly by categories with smooth layout transitions.",
        icon: "apps"
      },
      {
        title: "Interactive App Detail View",
        description:
          "Comprehensive app pages featuring screenshot carousels, version history, developer info, and user reviews.",
        icon: "touch_app"
      },
      {
        title: "Download Counter & Rating Highlights",
        description:
          "Visual download count badges and star rating breakdowns for every listed application.",
        icon: "star"
      },
      {
        title: "App Search & Trending Badges",
        description:
          "Real-time search bar with instant suggestions highlighting top trending apps.",
        icon: "trending_up"
      }
    ],
    techStack: {
      frontend: ["Next.js 15 (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Next.js Server Actions & API Routes"],
      database: ["MongoDB / JSON Data Store"],
      authentication: ["Session-based Auth"],
      deployment: ["Vercel"]
    },
    challenges: [
      {
        title: "Next.js Server-Side Cache Invalidation for Download Stats",
        problem:
          "App download counts appeared static due to Next.js route caching in production builds.",
        why:
          "Next.js App Router statically caches fetch requests by default unless revalidation is specified.",
        debug:
          "Monitored API fetch response headers in production build environments.",
        solution:
          "Configured `revalidate: 60` on dynamic app routes and used `revalidatePath` in download server actions."
      },
      {
        title: "Mobile Touch Gallery Swipe Gesture Sensitivity",
        problem:
          "Horizontal dragging on screenshot galleries triggered accidental vertical page scrolls.",
        why:
          "Touch move event listeners failed to distinguish horizontal swipe intention from vertical document scrolling.",
        debug:
          "Tested gallery touch swipe interactions on iOS and Android devices.",
        solution:
          "Used Framer Motion `drag=\"x\"` with explicit `dragConstraints={{ left: -width, right: 0 }}` and touch-action CSS rules."
      },
      {
        title: "Cross-Browser Flex & Grid Layout Alignment",
        problem:
          "App thumbnail grid cards misaligned on older Safari versions.",
        why:
          "Legacy WebKit flexbox rendering handled gap utilities differently without explicit vendor prefixing.",
        debug:
          "Tested layout rendering on Safari 14 browser simulators.",
        solution:
          "Configured Autoprefixer in PostCSS pipeline and added fallback margin-based spacing for flex containers."
      }
    ],
    lessonsLearned: [
      "Next.js App Router cache settings must be explicitly defined for frequently updated metric data.",
      "Framer Motion drag constraints provide superior touch control compared to raw touch handlers.",
      "PostCSS Autoprefixer is essential for maintaining cross-browser flexbox compatibility."
    ],
    futureImprovements: [
      {
        title: "Developer Portal Uploads",
        description: "Build an author dashboard for developers to submit and manage APK applications."
      },
      {
        title: "Direct In-Browser App Previews",
        description: "Integrate WebAssembly emulators for running app previews directly in the browser."
      }
    ],
    screenshots: [
      "/images/projects/playstore.png"
    ]
  }
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug.toLowerCase() === slug.toLowerCase()) || null;
}

export function getRelatedProjects(currentSlug, limit = 3) {
  return projects.filter((p) => p.slug.toLowerCase() !== currentSlug.toLowerCase()).slice(0, limit);
}
