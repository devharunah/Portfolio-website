import type { SiteContent } from "@/lib/types";
import { bullets, h2, p } from "./portable-text";

/**
 * Fallback content. The site renders this when Sanity isn't configured, and
 * `npm run seed` writes it into Sanity once. After seeding, edit content in /studio.
 *
 * Rules (DESIGN.md "Copy"): first person, specific, no invented numbers, no em dashes.
 */
export const siteContent: SiteContent = {
  profile: {
    name: "Kakooza Harunah",
    role: "Full-stack developer",
    tagline:
      "I build and ship web and mobile platforms end to end, from the data model and APIs to payments, real-time features and deployment.",
    location: "Kampala, Uganda",
    status: "Open to remote roles and relocation",
    bio: [
      p(
        "I'm a full-stack developer in Kampala. I build production systems for US clients at [Aaron Douglas LLC](https://aarondouglas.us/) and run live products for Ugandan users, where most of what I ship moves money over MTN and Airtel Mobile Money.",
      ),
      p(
        "I co-founded [MyUmmah](https://myummah.co/) and lead its technology. I care about the unglamorous parts: queries that make a page load in under two seconds instead of five, webhooks that can't be forged or replayed, and CI that catches problems before a client does.",
      ),
      p(
        "My stack is TypeScript end to end (React, Next.js, Node, React Native), with Python when a problem needs machine learning. I speak at Kampala developer meetups, build at hackathons, and use Claude Code every day.",
      ),
    ],
    skills: [
      { label: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
      { label: "Backend", items: ["Node.js", "Express", "REST", "tRPC", "Laravel (PHP)", "WebSockets"] },
      { label: "Mobile", items: ["React Native", "Expo", "Kotlin (Android)"] },
      { label: "Data & AI", items: ["PostgreSQL", "Supabase", "Firebase", "Redis", "Python (image classification)"] },
      { label: "Payments", items: ["Stripe", "MTN Mobile Money", "Airtel Money"] },
      { label: "Delivery", items: ["CI/CD", "Unit & E2E testing", "Docker", "Vercel", "Linux", "Grafana", "Claude Code"] },
    ],
    photo: {
      src: "/images/about-me-1.jpeg",
      alt: "Portrait of Harunah in a white shirt, arms folded, standing in a bright office",
      width: 810,
      height: 873,
    },
    email: "kakoozaharunah93@gmail.com",
    resumeUrl: null,
    socials: [
      { label: "GitHub", href: "https://github.com/devharunah" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/kakooza-harunah-701882350/" },
      { label: "Instagram", href: "https://www.instagram.com/kakooza_harunah/" },
    ],
  },

  projects: [
    {
      slug: "myummah",
      title: "MyUmmah",
      tagline: "Donations and fundraising for Muslim communities in Uganda.",
      period: "2025 – Present",
      role: "Co-founder & CTO",
      category: "fintech",
      featured: true,
      order: 1,
      problem:
        "Mosques and community causes in Uganda raise money in cash and WhatsApp groups, with no record donors can trust. MyUmmah lets anyone run a campaign, take donations and Zakat over Mobile Money, and get paid out.",
      impact: [
        "Public site, fundraiser dashboard and a separate operations console in one pnpm workspace",
        "Mobile Money collections and payouts through Nylon Pay, reconciled from webhooks",
        "Express API on Render with Supabase Postgres and auth behind it",
      ],
      stack: ["Next.js", "TypeScript", "Express", "Supabase", "Tailwind CSS", "Mobile Money"],
      cover: {
        src: "/images/myummah-img.png",
        alt: "MyUmmah home page showing fundraising campaigns",
        width: 1887,
        height: 912,
      },
      gallery: [],
      liveUrl: "https://myummah.co/",
      repoUrl: null,
      body: [
        h2("Problem"),
        p(
          "Giving is a big part of Muslim community life in Uganda, but most of it happens in cash or through WhatsApp group treasurers. Donors can't see where money went, and organisers spend their time chasing contributions instead of running the cause.",
        ),
        h2("What I built"),
        p(
          "MyUmmah started as a Muslim super-app and has narrowed into a donations and fundraising platform. A fundraiser creates a campaign, donors pay with MTN or Airtel Mobile Money, and the platform pays the fundraiser out. Zakat has its own flow so it can be routed to verified recipients.",
        ),
        ...bullets([
          "apps/web: the public site and the fundraiser's dashboard, deployed to myummah.co.",
          "apps/ops: an operations console on its own domain for the team.",
          "backend: an Express API deployed separately on Render.",
          "packages/ui and packages/core: the shared design system and the plumbing (Supabase clients, API fetcher, formatting) both apps use.",
        ]),
        h2("Key decisions"),
        p(
          "Money state only changes in the payment-provider webhook, never in the request that started the payment. That keeps donations and payouts correct when a phone loses signal halfway through a Mobile Money prompt, and makes retries safe.",
        ),
      ],
    },
    {
      slug: "tiplink",
      title: "TipLink",
      tagline: "A link-in-bio tip jar for Ugandan creators, paid with Mobile Money.",
      period: "2026",
      role: "Solo engineer",
      category: "creator",
      featured: true,
      order: 2,
      problem:
        "Ugandan creators can't use Buy Me a Coffee or Patreon because their fans pay with Mobile Money, not cards. TipLink gives every creator a page at /@username where fans tip in a few taps.",
      impact: [
        "Custodial balances: each tip's net accrues to the creator, who withdraws on demand",
        "Withdrawals are batched to spread the provider's flat per-payout fee",
        "Next.js web app, Express API and an Expo creator app sharing one fee formula",
      ],
      stack: ["Next.js", "Node.js", "PostgreSQL", "Supabase", "Expo", "Zod", "Turborepo"],
      cover: null,
      gallery: [],
      liveUrl: "https://tiplink.site",
      repoUrl: "https://github.com/devharunah/KawaTip",
      body: [
        h2("Problem"),
        p(
          "Creators in Uganda have audiences that want to support them, but the global tipping tools assume a card. Here, people pay with MTN and Airtel Mobile Money.",
        ),
        h2("How it works"),
        p(
          "A fan opens tiplink.site/@username, picks an amount and approves a Mobile Money prompt through Nylon Pay. The tip's net amount goes to the creator's balance. Creators use the mobile app to manage their profile and campaigns, get notified on each tip, and cash out when they choose.",
        ),
        h2("Architecture"),
        ...bullets([
          "apps/web (Next.js): the public tip page, the creator web dashboard and the Nylon Pay webhook, the only place a tip's or withdrawal's money state changes.",
          "apps/backend (Express): the API the mobile app talks to. The mobile app holds no database credentials.",
          "apps/mobile (Expo): the creator-only app.",
          "packages/money: fee and withdrawal formulas shared by web and backend, so they can never compute a split differently.",
          "packages/payments: a PaymentProvider interface, the Nylon adapter, HMAC signature checks and failure classification.",
          "packages/api-contract: Zod schemas for every backend route, used to validate on the server and to type the mobile client.",
        ]),
        h2("Key decisions"),
        p(
          "Payouts carry a flat fee per transfer, so paying out every tip immediately would eat small creators' earnings. Holding balances and letting creators withdraw in batches keeps more money with them, at the cost of making the platform custodial, which is why all money movement is confined to one webhook and covered by invariants.",
        ),
      ],
    },
    {
      slug: "kawascan",
      title: "KawaScan",
      tagline: "Photograph a coffee leaf, get the disease and the lowest-chemical treatment.",
      period: "2026",
      role: "ML and full-stack",
      category: "ml",
      featured: true,
      order: 3,
      problem:
        "Coffee farmers in Uganda often can't tell leaf rust from cercospora, so they guess, do nothing, or spray expensive chemicals blindly. KawaScan names the disease from a photo and recommends the gentlest treatment first.",
      impact: [
        "MobileNetV3-Small fine-tuned in Python on a Kaggle coffee-leaf dataset",
        "Classes: healthy, rust, cercospora, leaf miner and phoma",
        "Exported to ONNX and served from a Python service behind a mobile app",
      ],
      stack: ["Python", "PyTorch", "ONNX Runtime", "FastAPI", "Expo", "Supabase"],
      cover: null,
      gallery: [],
      liveUrl: null,
      repoUrl: "https://github.com/devharunah/KawaScan",
      body: [
        h2("Problem"),
        p(
          "My family farms coffee in Nakaseke. Coffee leaf rust, cercospora and other diseases do most of the damage, and most farmers can't reliably tell them apart. Agronomists can't reach every village, so treatment ends up being a guess.",
        ),
        h2("The model"),
        p(
          "I trained an image classifier with transfer learning from MobileNetV3-Small, chosen because it is small and fast enough to run on a free CPU instance today and on-device later. Training ran on a free Kaggle GPU using a public coffee-leaf dataset with healthy, rust, cercospora, miner and phoma classes.",
        ),
        p(
          "The model is exported to ONNX so inference doesn't need a deep-learning framework at runtime. Preprocessing at inference matches training exactly; a normalisation mismatch there is the most common way to ship a model that quietly gets everything wrong.",
        ),
        h2("From prediction to advice"),
        p(
          "A diagnosis on its own isn't useful to a farmer. Each class maps to a curated treatment drawn from Ugandan agricultural guidance, ordered so cultural steps come before chemicals.",
        ),
        h2("What's next"),
        p(
          "Berry borer lives inside the berry, so a leaf dataset can't detect it. That needs its own images, and possibly a few-shot approach. I also want to fine-tune on photos taken in Ugandan fields rather than lab-style backgrounds.",
        ),
      ],
    },
    {
      slug: "virtu-store",
      title: "VIRTU.STORE",
      tagline: "A walk-in 3D phone shop in the browser, set in a Kampala arcade.",
      period: "2026",
      role: "Solo engineer and 3D",
      category: "3d",
      featured: true,
      order: 4,
      problem:
        "A demo of how far a web store can go: walk a character into a 3D Kampala phone shop, pick up any phone, spin it, choose storage and colour, and check out with a simulated Mobile Money flow.",
      impact: [
        "Third-person movement with physics (WASD on desktop, joystick on phones)",
        "Phone models and the shop scene generated by Blender Python scripts",
        "Bag, checkout and a mock approve-on-your-phone Mobile Money step",
      ],
      stack: ["Next.js", "Three.js", "React Three Fiber", "Rapier", "WebGL", "Blender"],
      cover: {
        src: "/images/virtu-store.jpg",
        alt: "VIRTU.STORE: five phone models standing in the 3D showroom",
        width: 1200,
        height: 630,
      },
      gallery: [],
      liveUrl: null,
      repoUrl: "https://github.com/devharunah/virtu-store",
      body: [
        h2("Why"),
        p(
          "I wanted to see whether a store could feel like walking into a shop rather than scrolling a grid, and whether it could still run on the mid-range phones most Ugandan shoppers use.",
        ),
        h2("The journey"),
        ...bullets([
          "Enter the store and walk with WASD or arrows (Shift to run, Space to jump), or the on-screen joystick on phones.",
          "Walk up to a phone and press E, tap the prompt or click it to inspect it in 360°: spin, zoom, pick colour and storage, watch the price update.",
          "Add to bag, adjust storage or quantity, then check out with a name, a Ugandan phone number, a delivery area and a payment method.",
          "A mock 'approve on your phone' step stands in for Mobile Money. No real payment is taken.",
        ]),
        h2("How it's built"),
        p(
          "React Three Fiber renders the scene, Rapier handles physics and character collisions. The shop layout lives in a JSON file that a Blender script turns into the arcade: glass counters, a shutter, a mobile money desk and baked lighting. Phones are built procedurally in Blender too. Textures, lighting and the character are CC0 assets.",
        ),
        p(
          "Add ?debug to the store URL to draw the physics colliders and expose renderer stats, which is how I kept draw calls in check on low-end devices.",
        ),
      ],
    },
    {
      slug: "kawa",
      title: "Kawa",
      tagline: "A coffee marketplace: web storefront and Android app on one backend.",
      period: "2025 – Present",
      role: "Software developer",
      category: "web",
      featured: false,
      order: 5,
      problem:
        "A central place for Uganda's coffee trade to source, sell and connect. The web storefront and the Android app share one backend; real-time delivery tracking is in progress.",
      impact: [],
      stack: ["Next.js", "Kotlin", "Supabase"],
      cover: {
        src: "/images/kawa-img.png",
        alt: "Kawa coffee marketplace home page",
        width: 1901,
        height: 871,
      },
      gallery: [],
      liveUrl: "https://kawacoffee.app/",
      repoUrl: null,
      body: [],
    },
    {
      slug: "microbizz",
      title: "MicroBizz",
      tagline: "Invoices and receipts for small businesses, built for low bandwidth.",
      period: "2024",
      role: "Solo engineer",
      category: "web",
      featured: false,
      order: 7,
      problem:
        "Invoices, receipts and payment tracking for freelancers and small shops, with APIs and a responsive interface that updates in real time over WebSockets.",
      impact: [],
      stack: ["Next.js", "Node.js", "PostgreSQL", "WebSockets"],
      cover: {
        src: "/images/microbizz.png",
        alt: "MicroBizz invoice dashboard",
        width: 1882,
        height: 857,
      },
      gallery: [],
      liveUrl: "https://microbizz.vercel.app/",
      repoUrl: null,
      body: [],
    },
    {
      slug: "yonja",
      title: "Yonja",
      tagline: "Report a waste spot, prove it was cleaned, see the results live on a map.",
      period: "2026",
      role: "Hackathon team",
      category: "web",
      featured: false,
      order: 6,
      problem:
        "Built with a team at the Pre-DevFest Hackathon Kampala. Residents report waste spots on Uganda's National Cleaning Days and prove the clean-up with before and after photos that Gemini checks.",
      impact: [],
      stack: ["Next.js", "Firestore", "Gemini", "Google Maps"],
      cover: null,
      gallery: [],
      liveUrl: null,
      repoUrl: "https://github.com/kintu-labs/yonja",
      body: [],
    },
    {
      slug: "mvp-starter-kit",
      title: "MVP Starter Kit",
      tagline: "Next.js, Supabase and Tailwind with auth and deployment ready.",
      period: "2024",
      role: "Author",
      category: "web",
      featured: false,
      order: 8,
      problem:
        "Made for participants of the Black CS Success Summit so they could spend their time on the product, not the boilerplate.",
      impact: [],
      stack: ["Next.js", "Supabase", "Tailwind CSS"],
      cover: {
        src: "/images/mvpstarter.png",
        alt: "MVP Starter Kit landing page",
        width: 1886,
        height: 868,
      },
      gallery: [],
      liveUrl: "https://mvpstarter-kit.vercel.app",
      repoUrl: null,
      body: [],
    },
  ],

  experience: [
    {
      id: "aaron-douglas",
      role: "Software Developer",
      company: "Aaron Douglas LLC",
      url: "https://aarondouglas.us/",
      period: "Feb 2025 – Present",
      order: 1,
      summary: "Remote, Chicago. I build production platforms for US clients, from empty repository to launch.",
      highlights: [
        "Built four client platforms from scratch, including a Next.js admin dashboard, Express API and Expo app in a pnpm/Turborepo monorepo for a child-welfare visitation platform.",
        "Cut First Contentful Paint from 5.2s to 3.3s, then under 2s, by tracing slow loads to badly written database queries and rewriting them.",
        "Built Stripe payments for a nonprofit's learning platform on Supabase: row-level security, server-side pricing, and idempotent webhooks verified against forged and replayed events.",
        "Set up CI on every pull request (typecheck, lint, unit, build, E2E, secret scanning), cutting deployment time by about 70%.",
        "Set up Grafana dashboards for the golden signals (latency, error rate, throughput) on production apps.",
        "Audited a client portal and filed 37 prioritised issues, including a verified authentication exploit; wrote ADRs and runbooks for non-technical staff.",
      ],
      stack: ["Next.js", "Express", "Expo", "Supabase", "Stripe", "Grafana", "Turborepo"],
    },
    {
      id: "myummah",
      role: "Co-founder & CTO",
      company: "MyUmmah",
      url: "https://myummah.co/",
      period: "2025 – Present",
      order: 2,
      summary: "Kampala. I co-founded the company and lead its technology.",
      highlights: [
        "Led the pivot from a Muslim services super-app to a donations and fundraising platform.",
        "Designed the core data model and backend architecture of the Next.js web app.",
        "Implemented Mobile Money payments so Ugandans can donate and pay from their phones.",
      ],
      stack: ["Next.js", "Express", "Supabase", "Mobile Money"],
    },
    {
      id: "intelliprocess",
      role: "Backend Developer (Contract)",
      company: "IntelliProcess",
      url: null,
      period: "Mar 2026 – May 2026",
      order: 3,
      summary: "Remote, Germany. Backend work for an international team.",
      highlights: [
        "Built Laravel/PHP backend features.",
        "Designed the architecture and validation logic for a product license server.",
      ],
      stack: ["Laravel", "PHP"],
    },
  ],

  talks: [
    {
      id: "jskla-ai",
      title: "From prompting to building: how developers can use AI to ship faster",
      event: "JS Kampala (JSKLA) meetup",
      date: "2026",
      summary: "A talk for Kampala's JavaScript community on moving from chatting with AI to building and shipping with it.",
      url: null,
      photo: null,
    },
    {
      id: "devfest-mbarara",
      title: "You don't need the Python backend: shipping AI apps with Next.js and the AI SDK",
      event: "DevFest Mbarara, GDG Cloud Mbarara",
      date: "2026",
      summary:
        "A live demo of an AI document summariser built in four steps (text generation, streaming, structured output, chat) with no separate Python service and the API key kept on the server.",
      url: "https://github.com/devharunah/devfest-ai-summarizer",
      photo: {
        src: "/images/devfest-mbarara-podium.jpg",
        alt: "Harunah presenting at DevFest Mbarara beside a Google Developer Group banner",
        width: 1080,
        height: 720,
      },
    },
    {
      id: "pre-devfest-hackathon",
      title: "Built Yonja with a team of developers",
      event: "Pre-DevFest Hackathon Kampala",
      date: "2026",
      summary: "A clean-up reporting app for Uganda's National Cleaning Days, with Gemini checking before and after photos.",
      url: "https://github.com/kintu-labs/yonja",
      photo: null,
    },
  ],
};
