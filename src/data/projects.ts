export type Stat = {
  label: string
  value: string
}

export type Project = {
  slug: string
  name: string
  tagline: string
  description: string
  image: string
  year: string
  stats: Stat[] | null
  link: string | null
}

export const projects: Project[] = [
  {
    slug: 'myummah',
    name: 'MyUmmah',
    tagline: 'A Muslim super-app built for Uganda.',
    description:
      'MyUmmah is a Muslim super-app built for Uganda. It brings together the Islamic services you need in one place — pay your Zakat to local mosques digitally, arrange Aqiqah or Udhiyya sacrifices, sponsor Iftar meals for Muslims breaking their fast during Ramadan, and connect with verified Hajj and Umrah service providers. Everything in one app, designed for Muslims here at home.',
    image: '/images/myummah-img.png',
    year: '2026 to Present',
    stats: null,
    link: 'https://myummah.co/',
  },
  {
    slug: 'kawa',
    name: 'Kawa',
    tagline: 'A coffee marketplace connecting the entire coffee industry.',
    description:
      'Kawa is a coffee marketplace that connects people across the coffee industry — including farmers, suppliers, companies, and cafés — with those who need coffee. It serves as a central platform for sourcing, selling, and connecting around coffee.',
    image: '/images/kawa-img.png',
    year: '2025 to Present',
    stats: null,
    link: 'https://kawacoffee.app/',
  },
  {
    slug: 'microbizz',
    name: 'MicroBizz',
    tagline: 'Receipts and invoices made simple for small businesses.',
    description:
      'MicroBizz is a lightweight invoicing and receipt tool built for freelancers and small business owners in Uganda. It lets you create professional invoices, track payments, and manage clients — all without the complexity of enterprise software. Built to work even on low-bandwidth connections.',
    image: '/images/microbizz.png',
    year: '2024',
    stats: null,
    link: 'https://microbizz.vercel.app/',
  },
  {
    slug: 'mvp-starter-kit',
    name: 'MVP Starter Kit',
    tagline: 'A production-ready starter kit for fast product launches.',
    description:
      'The MVP Starter Kit was created for participants of the Black CS Success Summit. It provides a pre-configured Next.js + Supabase + Tailwind setup with authentication, database, and deployment ready out of the box — so developers can focus on building their product instead of boilerplate.',
    image: '/images/mvpstarter.png',
    year: '2024',
    stats: null,
    link: 'https://mvpstarter-kit.vercel.app',
  },
]
