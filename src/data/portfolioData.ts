export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  image: string;
  description: string;
}

export interface ClientBrand {
  id: string;
  name: string;
  subtitle: string;
  industry: string;
  location: string;
  initials: string;
  handle?: string;
  services: string[];
}

export const PROFILE_DATA = {
  name: "Mohamed Imtiaz",
  role: "Digital Marketer | Graphic Designer | Social Media Manager",
  tagline: "Let's Create. Market. Grow.",
  location: "Muscat, Sultanate of Oman",
  email: "mohamedimtiazmsmax@gmail.com",
  phone: "+968 9243 4052",
  whatsappUrl: "https://wa.me/96892434052",
  linkedinUrl: "https://www.linkedin.com/in/imtiaz007?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  instagramUrl: "https://instagram.com",
  tiktokUrl: "https://tiktok.com",
  headshot: "/images/imtiyaz.png",
  resumeUrl: "/Mohamed_Imtiaz_Resume.pdf",

  about:
    "I am Mohamed Imtiaz, a creative and results-driven Digital Marketer with a strong background in Graphic Design, Video Editing, Social Media Management, and Performance Marketing. Currently based in Oman, I work at MS Max handling digital marketing and campaign initiatives. I believe successful marketing connects creativity with strategy, consistency, and a deep understanding of the audience.",

  whyWorkWithMe: [
    {
      title: "Strategy + Creative Integration",
      description: "Combining high-converting ad visuals, brand design, and video reels with data-driven audience targeting.",
    },
    {
      title: "Regional GCC & Oman Market Depth",
      description: "Hands-on experience crafting campaigns tailored to Oman and GCC consumer behavior and regional trends.",
    },
    {
      title: "Measurable Growth & ROI Focus",
      description: "Delivering performance Meta ads, corporate PR visibility, and structured retainer account management.",
    },
  ],

  education: [
    {
      title: "Bachelor of Business Administration (BBA)",
      institution: "E.G.S. Pillay Arts and Science College",
      badge: "Degree",
    },
    {
      title: "Professional Course in Animation, Graphic Design & Video Editing",
      institution: "FGI Media Solution (1-Year Program)",
      badge: "Diploma",
    },
    {
      title: "Certified Digital Marketer",
      institution: "HubSpot Academy Certification",
      badge: "Certified",
    },
  ],

  workExperience: [
    {
      period: "Current",
      role: "Digital Marketing & Accounts",
      company: "MS Max (Oman)",
      details: "Leading performance marketing, Meta ad campaigns, brand identity, and client accounts.",
    },
    {
      period: "1 Year",
      role: "Graphic Designer & Digital Marketing",
      company: "Spark Digitech Solutions",
      details: "Created marketing collateral, brand guidelines, social media feeds, and promo videos.",
    },
  ],

  services: [
    {
      number: "01",
      title: "Performance Marketing & Ads",
      description: "High-converting Meta & Google ad campaigns engineered for reach, click-through rate, and lead generation.",
      tags: ["Meta Ads", "Campaign Strategy", "A/B Testing", "ROI Focus"],
    },
    {
      number: "02",
      title: "Social Media Management",
      description: "End-to-end feed curation, content calendars, audience engagement, and strategic brand positioning.",
      tags: ["Content Strategy", "Feed Planning", "Community Reach", "Analytics"],
    },
    {
      number: "03",
      title: "Graphic Design & Brand Identity",
      description: "Polished promotional collateral, brand guidelines, event banners, and corporate graphics.",
      tags: ["Photoshop", "Illustrator", "Brand Visuals", "Marketing Creatives"],
    },
    {
      number: "04",
      title: "Video Editing & Motion Reels",
      description: "Dynamic video promos, short-form reels, and motion graphic assets built to captivate audiences on social platforms.",
      tags: ["Premiere Pro", "After Effects", "CapCut", "Reels & Promo"],
    },
  ],

  tools: [
    { name: "Photoshop", abbr: "Ps", textColor: "text-[#31a8ff]", borderColor: "border-[#001e36]", bg: "bg-[#001e36]/80" },
    { name: "Illustrator", abbr: "Ai", textColor: "text-[#ff9a00]", borderColor: "border-[#331c00]", bg: "bg-[#331c00]/80" },
    { name: "Premiere Pro", abbr: "Pr", textColor: "text-[#ea77ff]", borderColor: "border-[#2b0036]", bg: "bg-[#2b0036]/80" },
    { name: "After Effects", abbr: "Ae", textColor: "text-[#9999ff]", borderColor: "border-[#1b103b]", bg: "bg-[#1b103b]/80" },
  ],

  secondaryTools: [
    { name: "Canva", label: "Canva", color: "text-cyan-400" },
    { name: "CapCut", label: "CapCut", color: "text-white" },
    { name: "Meta Business Suite", label: "Meta Business Suite", color: "text-blue-400" },
    { name: "TikTok Marketing", label: "TikTok Marketing", color: "text-pink-400" },
    { name: "AI Content Creation", label: "AI Content Creation", color: "text-emerald-400" },
    { name: "Google Ads", label: "Google Ads", color: "text-amber-400" },
    { name: "HubSpot", label: "HubSpot", color: "text-orange-400" },
  ],

  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/imtiaz007?utm_source=share_via&utm_content=profile&utm_medium=member_ios", icon: "linkedin" },
    { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
    { name: "WhatsApp", url: "https://wa.me/96892434052", icon: "whatsapp" },
    { name: "Email", url: "mailto:mohamedimtiazmsmax@gmail.com", icon: "mail" },
  ],
};

// Verified Real Campaign Projects by Mohamed Imtiaz
export const CAMPAIGN_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "MS Max Performance Marketing & Brand Graphics",
    category: "Corporate Feed & Ad Campaign",
    client: "MS Max (Oman)",
    year: "2024",
    image: "/images/IMG_2126.PNG",
    description: "High-converting social ad creative designed for MS Max agency campaigns in Oman.",
  },
  {
    id: "proj-2",
    title: "Festive & Commercial Marketing Banner",
    category: "Promotional Collateral",
    client: "MS Max (Oman)",
    year: "2024",
    image: "/images/IMG_2127.JPG.jpeg",
    description: "Special event promotional banner featuring modern typography and corporate color palette.",
  },
  {
    id: "proj-3",
    title: "Gadgets Oman Tech Campaign & Social Reel",
    category: "Retail Tech Ad",
    client: "Gadgets Oman (@gadjetsoman)",
    year: "2024",
    image: "/images/Insta_Saver_@gadjetsoman_dp_HD.jpg.jpeg",
    description: "Electronics product launch creative engineered to drive high engagement on Instagram & TikTok.",
  },
  {
    id: "proj-4",
    title: "Corporate CSR Drive & Health Poster",
    category: "Event Campaign Poster",
    client: "MS Max (Oman)",
    year: "2024",
    image: "/images/6.png",
    description: "Comprehensive marketing poster designed for public relations and corporate event visibility.",
  },
  {
    id: "proj-5",
    title: "Spark Digitech Marketing Banner",
    category: "Agency Marketing Creative",
    client: "Spark Digitech Solutions",
    year: "2024",
    image: "/images/649148396_18574668541046628_1579470127578140101_n.jpg.jpeg",
    description: "Editorial digital banner crafted for agency client outreach and brand awareness.",
  },
  {
    id: "proj-6",
    title: "Smoko Eats F&B Social Media & Promo",
    category: "Food & Beverage Campaign",
    client: "Smoko Eats (@smoko_eats)",
    year: "2024",
    image: "/images/Insta_Saver_@smoko_eats_dp_HD.jpg.jpeg",
    description: "Vibrant F&B marketing graphic focused on menu promotion and consumer engagement.",
  },
  {
    id: "proj-7",
    title: "Oman Regional Digital Ad Graphic",
    category: "Performance Meta Ad",
    client: "MS Max (Oman)",
    year: "2024",
    image: "/images/WhatsApp Image 2026-09-03 at 3.27.31 PM.jpeg",
    description: "Targeted digital marketing asset created for regional Oman campaigns.",
  },
];

// Verified Client Brands
export const CLIENT_BRANDS: ClientBrand[] = [
  {
    id: "cb-1",
    name: "MS Max",
    subtitle: "Digital Marketing & Agency Operations",
    industry: "Marketing & Advertising",
    location: "Sultanate of Oman",
    initials: "MS",
    services: ["Performance Ads", "Social Media Strategy", "Account Management"],
  },
  {
    id: "cb-2",
    name: "Spark Digitech Solutions",
    subtitle: "Graphic Design & Digital Marketing",
    industry: "Creative & Digital Agency",
    location: "Oman & Regional GCC",
    initials: "SD",
    services: ["Brand Identity", "Motion Graphics", "Campaign Design"],
  },
  {
    id: "cb-3",
    name: "Gadgets Oman",
    subtitle: "Tech & Electronics Campaigns",
    industry: "Retail & Consumer Electronics",
    location: "Muscat, Oman",
    initials: "GO",
    handle: "@gadjetsoman",
    services: ["Product Social Ads", "Promo Video Reels", "Brand Awareness"],
  },
  {
    id: "cb-4",
    name: "Smoko Eats",
    subtitle: "F&B Social Media & Promotions",
    industry: "Food & Beverage / Dining",
    location: "Muscat, Oman",
    initials: "SE",
    handle: "@smoko_eats",
    services: ["Menu Design", "Social Feed Management", "Event Campaigns"],
  },
];
