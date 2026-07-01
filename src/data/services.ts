export const serviceLinks = [
    {
        id: "website-development",
        title: "Website Development",
        navTitle: "Web Development",
        subtitle: "Blazing fast, scalable, and conversion-focused websites.",
        description:
            "We design and build polished websites that are fast, responsive, easy to manage, and shaped around real business goals.",
        overview:
            "A website should do more than look good. We build digital experiences that explain your offer clearly, guide visitors toward action, and give your team a reliable foundation for growth.",
        outcomes: ["Responsive UI/UX", "CMS-ready content", "Technical SEO", "Performance optimization"],
        deliverables: [
            "Discovery and content structure",
            "Responsive interface design",
            "Astro, React, or Next.js development",
            "CMS and form integration",
            "SEO metadata and analytics setup",
            "Launch support and QA",
        ],
        stack: ["Astro", "React", "Next.js", "Tailwind CSS", "Headless CMS"],
        color: "from-blue-500 to-cyan-400",
    },
    {
        id: "app-development",
        title: "App Development",
        navTitle: "App Development",
        subtitle: "Product-grade mobile and web apps for modern teams.",
        description:
            "We create intuitive applications with clean flows, secure integrations, and scalable architecture for long-term use.",
        overview:
            "From MVPs to internal tools, we turn product ideas into usable applications with clear interfaces, dependable data flows, and launch-ready engineering.",
        outcomes: ["Product planning", "UX flows", "API integration", "Launch support"],
        deliverables: [
            "Feature planning and user journeys",
            "Wireframes and clickable prototypes",
            "Frontend application development",
            "Backend/API integration",
            "Authentication and role handling",
            "Testing, deployment, and handover",
        ],
        stack: ["React", "Next.js", "React Native", "Flutter", "Node.js"],
        color: "from-indigo-500 to-violet-400",
    },
    {
        id: "social-media-marketing",
        title: "Social Media Marketing",
        navTitle: "Social Media",
        subtitle: "Content systems that build trust and audience momentum.",
        description:
            "We plan, design, and manage social content that gives your brand a consistent voice and measurable engagement.",
        overview:
            "Social growth works best when it is structured. We build content calendars, creative directions, and reporting loops that help your brand show up consistently.",
        outcomes: ["Content calendar", "Creative direction", "Campaign management", "Insights"],
        deliverables: [
            "Brand and competitor audit",
            "Content strategy and monthly calendar",
            "Post concepts, captions, and creative briefs",
            "Campaign execution support",
            "Engagement and growth tracking",
            "Monthly performance reporting",
        ],
        stack: ["Instagram", "LinkedIn", "TikTok", "Meta Business Suite", "Canva"],
        color: "from-pink-500 to-rose-400",
    },
    {
        id: "seo",
        title: "Search Engine Optimization",
        navTitle: "SEO",
        subtitle: "Organic visibility built on technical and content foundations.",
        description:
            "We improve search presence through keyword strategy, technical fixes, on-page structure, and content planning.",
        overview:
            "SEO is a long-term growth channel. We help your site become easier to discover, easier to crawl, and more useful for the people searching for your services.",
        outcomes: ["Keyword research", "On-page setup", "Core Web Vitals", "Ranking reports"],
        deliverables: [
            "Keyword and competitor research",
            "Technical SEO audit",
            "Metadata and heading structure",
            "Internal linking recommendations",
            "Content plan and topic clusters",
            "Search performance reporting",
        ],
        stack: ["Google Search Console", "Google Analytics", "Ahrefs", "SEMrush", "Screaming Frog"],
        color: "from-emerald-500 to-teal-400",
    },
    {
        id: "sem",
        title: "Search Engine Marketing",
        navTitle: "SEM / Paid Search",
        subtitle: "Paid search campaigns built for qualified leads.",
        description:
            "We create and optimize PPC campaigns that target the right intent, reduce waste, and improve conversion tracking.",
        overview:
            "Paid search can create fast visibility when the setup is precise. We align keywords, ad copy, landing pages, and tracking around measurable campaign performance.",
        outcomes: ["Campaign setup", "Ad copy", "Landing pages", "Conversion tracking"],
        deliverables: [
            "Market and keyword analysis",
            "Campaign and ad group structure",
            "Ad copywriting",
            "Landing page recommendations",
            "Conversion tracking setup",
            "Optimization and reporting",
        ],
        stack: ["Google Ads", "Microsoft Ads", "Google Analytics", "Tag Manager", "Looker Studio"],
        color: "from-orange-500 to-amber-400",
    },
    {
        id: "email-marketing",
        title: "Email Marketing",
        navTitle: "Email Marketing",
        subtitle: "Automated email journeys that nurture and convert.",
        description:
            "We design email systems that segment audiences, automate follow-ups, and keep your brand present after first contact.",
        overview:
            "Email remains one of the strongest owned channels. We create campaigns and automations that move people from interest to repeat action with useful, timely messaging.",
        outcomes: ["List strategy", "Segmentation", "Automation", "Performance reports"],
        deliverables: [
            "List and audience strategy",
            "Email template design",
            "Welcome and nurture automations",
            "Segmentation setup",
            "A/B testing plan",
            "Open, click, and conversion reports",
        ],
        stack: ["Mailchimp", "Klaviyo", "HubSpot", "ActiveCampaign", "Brevo"],
        color: "from-yellow-400 to-lime-400",
    },
];

export const getServiceHref = (id: string) => `/services/${id}`;
