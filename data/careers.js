export const jobOpenings = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote / New York",
    type: "Full-time",
    experience: "5+ years",
    salary: "$120k - $160k",
    description: "Join our engineering team to build cutting-edge solutions that impact millions of users worldwide.",
    requirements: [
      "5+ years of experience in software development",
      "Proficiency in React, Node.js, and modern web technologies",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong problem-solving and communication skills",
      "Bachelor's degree in Computer Science or related field"
    ],
    responsibilities: [
      "Design and develop scalable web applications",
      "Collaborate with cross-functional teams",
      "Mentor junior developers",
      "Participate in code reviews and technical discussions",
      "Contribute to architectural decisions"
    ],
    posted: "2024-01-15",
    featured: true
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "Design",
    location: "San Francisco / Remote",
    type: "Full-time",
    experience: "3+ years",
    salary: "$90k - $130k",
    description: "Create exceptional user experiences and beautiful interfaces for our digital products.",
    requirements: [
      "3+ years of UX/UI design experience",
      "Proficiency in Figma, Sketch, or Adobe Creative Suite",
      "Strong portfolio showcasing design process",
      "Understanding of user-centered design principles",
      "Experience with design systems and prototyping"
    ],
    responsibilities: [
      "Design user interfaces for web and mobile applications",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and design specifications",
      "Collaborate with developers and product managers",
      "Maintain and evolve design systems"
    ],
    posted: "2024-01-12",
    featured: true
  },
  {
    id: 3,
    title: "Product Manager",
    department: "Product",
    location: "Boston / Hybrid",
    type: "Full-time",
    experience: "4+ years",
    salary: "$110k - $150k",
    description: "Drive product strategy and execution for our innovative construction technology platform.",
    requirements: [
      "4+ years of product management experience",
      "Experience with agile development methodologies",
      "Strong analytical and data-driven decision making",
      "Excellent communication and leadership skills",
      "Background in B2B SaaS or construction industry preferred"
    ],
    responsibilities: [
      "Define product roadmap and strategy",
      "Work with engineering and design teams",
      "Analyze market trends and customer feedback",
      "Manage product launches and feature releases",
      "Collaborate with stakeholders across the organization"
    ],
    posted: "2024-01-10",
    featured: false
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    salary: "$100k - $140k",
    description: "Build and maintain our cloud infrastructure to support our growing platform.",
    requirements: [
      "3+ years of DevOps or infrastructure experience",
      "Expertise in AWS, Docker, and Kubernetes",
      "Experience with CI/CD pipelines and automation",
      "Knowledge of monitoring and logging tools",
      "Strong scripting skills (Python, Bash, etc.)"
    ],
    responsibilities: [
      "Manage cloud infrastructure and deployments",
      "Implement CI/CD pipelines and automation",
      "Monitor system performance and reliability",
      "Ensure security and compliance standards",
      "Collaborate with development teams"
    ],
    posted: "2024-01-08",
    featured: false
  },
  {
    id: 5,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Chicago / Remote",
    type: "Full-time",
    experience: "2+ years",
    salary: "$70k - $95k",
    description: "Drive growth through innovative marketing strategies and campaigns.",
    requirements: [
      "2+ years of digital marketing experience",
      "Experience with marketing automation tools",
      "Strong content creation and copywriting skills",
      "Knowledge of SEO, SEM, and social media marketing",
      "Analytics and data interpretation skills"
    ],
    responsibilities: [
      "Develop and execute marketing campaigns",
      "Create content for various marketing channels",
      "Manage social media presence and engagement",
      "Analyze campaign performance and ROI",
      "Collaborate with sales and product teams"
    ],
    posted: "2024-01-05",
    featured: false
  },
  {
    id: 6,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Austin / Hybrid",
    type: "Full-time",
    experience: "3+ years",
    salary: "$85k - $115k",
    description: "Ensure our customers achieve success with our platform and drive retention.",
    requirements: [
      "3+ years in customer success or account management",
      "Experience with SaaS platforms and CRM tools",
      "Strong relationship building and communication skills",
      "Problem-solving and project management abilities",
      "Construction or engineering industry knowledge preferred"
    ],
    responsibilities: [
      "Onboard new customers and ensure adoption",
      "Build strong relationships with key accounts",
      "Identify expansion and upselling opportunities",
      "Resolve customer issues and provide support",
      "Gather feedback for product improvement"
    ],
    posted: "2024-01-03",
    featured: false
  }
];

export const departments = [
  { name: "All Departments", value: "all", count: jobOpenings.length },
  { name: "Engineering", value: "engineering", count: jobOpenings.filter(job => job.department === "Engineering").length },
  { name: "Design", value: "design", count: jobOpenings.filter(job => job.department === "Design").length },
  { name: "Product", value: "product", count: jobOpenings.filter(job => job.department === "Product").length },
  { name: "Marketing", value: "marketing", count: jobOpenings.filter(job => job.department === "Marketing").length },
  { name: "Customer Success", value: "customer success", count: jobOpenings.filter(job => job.department === "Customer Success").length }
];

export const locations = [
  { name: "All Locations", value: "all" },
  { name: "Remote", value: "remote" },
  { name: "New York", value: "new york" },
  { name: "San Francisco", value: "san francisco" },
  { name: "Boston", value: "boston" },
  { name: "Chicago", value: "chicago" },
  { name: "Austin", value: "austin" }
];

export const jobTypes = [
  { name: "All Types", value: "all" },
  { name: "Full-time", value: "full-time" },
  { name: "Part-time", value: "part-time" },
  { name: "Contract", value: "contract" },
  { name: "Internship", value: "internship" }
];

export const companyValues = [
  {
    id: 1,
    icon: "fa-solid fa-lightbulb",
    title: "Innovation",
    description: "We push boundaries and embrace new technologies to solve complex construction challenges."
  },
  {
    id: 2,
    icon: "fa-solid fa-users",
    title: "Collaboration",
    description: "We believe great things happen when diverse minds work together towards a common goal."
  },
  {
    id: 3,
    icon: "fa-solid fa-target",
    title: "Excellence",
    description: "We strive for excellence in everything we do, from code quality to customer service."
  },
  {
    id: 4,
    icon: "fa-solid fa-heart",
    title: "Integrity",
    description: "We operate with honesty, transparency, and respect in all our interactions."
  },
  {
    id: 5,
    icon: "fa-solid fa-seedling",
    title: "Growth",
    description: "We invest in our people's development and encourage continuous learning and improvement."
  },
  {
    id: 6,
    icon: "fa-solid fa-globe",
    title: "Impact",
    description: "We're committed to making a positive impact on the construction industry and communities."
  }
];

export const benefits = [
  {
    id: 1,
    category: "Health & Wellness",
    icon: "fa-solid fa-heart-pulse",
    items: [
      "Comprehensive health, dental, and vision insurance",
      "Mental health support and counseling services",
      "Wellness stipend for gym memberships and fitness",
      "Annual health checkups and preventive care"
    ]
  },
  {
    id: 2,
    category: "Work-Life Balance",
    icon: "fa-solid fa-scale-balanced",
    items: [
      "Flexible work schedules and remote work options",
      "Unlimited PTO policy",
      "Sabbatical opportunities for long-term employees",
      "Family leave and parental support programs"
    ]
  },
  {
    id: 3,
    category: "Financial Benefits",
    icon: "fa-solid fa-piggy-bank",
    items: [
      "Competitive salary and performance bonuses",
      "Equity participation and stock options",
      "401(k) with company matching",
      "Professional development budget"
    ]
  },
  {
    id: 4,
    category: "Professional Growth",
    icon: "fa-solid fa-chart-line",
    items: [
      "Learning and development opportunities",
      "Conference attendance and training budget",
      "Mentorship programs and career coaching",
      "Internal mobility and promotion opportunities"
    ]
  },
  {
    id: 5,
    category: "Perks & Culture",
    icon: "fa-solid fa-gift",
    items: [
      "Modern office spaces and equipment",
      "Team building events and company retreats",
      "Free lunch and snacks in the office",
      "Employee recognition and rewards programs"
    ]
  },
  {
    id: 6,
    category: "Technology",
    icon: "fa-solid fa-laptop",
    items: [
      "Latest MacBook Pro or high-end PC setup",
      "Home office setup allowance",
      "Software licenses and tool subscriptions",
      "Tech upgrade budget every 2 years"
    ]
  }
];

export const employeeTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Senior Software Engineer",
    department: "Engineering",
    image: "/assets/img/team/01.jpg",
    quote: "The collaborative culture here is amazing. I've grown more in the past two years than I did in my previous five years combined. The team truly cares about innovation and quality.",
    rating: 5,
    tenure: "2 years"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Product Designer",
    department: "Design",
    image: "/assets/img/team/02.jpg",
    quote: "Working here has been a game-changer for my career. The company invests in our growth and gives us the freedom to explore creative solutions. Plus, the work-life balance is fantastic.",
    rating: 5,
    tenure: "1.5 years"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Product Manager",
    department: "Product",
    image: "/assets/img/team/03.jpg",
    quote: "I love how we're making a real impact in the construction industry. The leadership is supportive, and there's always room for new ideas. It's exciting to be part of this journey.",
    rating: 5,
    tenure: "3 years"
  },
  {
    id: 4,
    name: "David Kim",
    position: "DevOps Engineer",
    department: "Engineering",
    image: "/assets/img/team/04.jpg",
    quote: "The technical challenges here keep me engaged, and the team is incredibly talented. We use cutting-edge technologies and have the autonomy to implement best practices.",
    rating: 5,
    tenure: "2.5 years"
  }
];

export const applicationProcess = [
  {
    step: 1,
    title: "Apply Online",
    description: "Submit your application through our careers portal with your resume and cover letter.",
    icon: "fa-solid fa-file-arrow-up",
    duration: "5 minutes"
  },
  {
    step: 2,
    title: "Initial Screening",
    description: "Our recruiting team will review your application and may reach out for a brief phone conversation.",
    icon: "fa-solid fa-phone",
    duration: "1-2 days"
  },
  {
    step: 3,
    title: "Technical Assessment",
    description: "Complete a role-specific assessment or take-home project to showcase your skills.",
    icon: "fa-solid fa-code",
    duration: "3-5 days"
  },
  {
    step: 4,
    title: "Team Interviews",
    description: "Meet with team members and hiring managers through video or in-person interviews.",
    icon: "fa-solid fa-users",
    duration: "1 week"
  },
  {
    step: 5,
    title: "Final Decision",
    description: "We'll make our decision and extend an offer to the successful candidate.",
    icon: "fa-solid fa-handshake",
    duration: "2-3 days"
  }
];

export const companyStats = [
  {
    number: "500+",
    label: "Team Members",
    icon: "fa-solid fa-users"
  },
  {
    number: "50+",
    label: "Countries Served",
    icon: "fa-solid fa-globe"
  },
  {
    number: "98%",
    label: "Employee Satisfaction",
    icon: "fa-solid fa-heart"
  },
]; 