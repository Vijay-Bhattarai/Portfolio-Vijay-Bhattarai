import { NextResponse } from "next/server";

const experienceData = [
    {
icon: "/images/icon/founder.png",
        role: "Co-Founder & Sales Manager",
        company: "Seto Pixel",
        location: "Kupondole Central Lalitpur",
        startYear: "27 April 2025",
        endYear: "Jan 19 2026",
        bulletPoints: [
            "Co-founded the company and managed overall business operations and growth strategy.",
            "Lead sales, client acquisition, lead management, and CRM systems.",
            "Managed client onboarding, task coordination, delivery tracking, and relationship management.",
            "Worked on in-house products, including CRM platforms and automation tools.",
            "Designed and optimized sales workflows and automation processes.",
            "Conducted hiring, interviews, onboarding, and performance evaluations.",
            "Collaborated closely with tech and product teams.",
            "Took full responsibility for co-founder-level decision-making and execution."
        ]
    },
    {
        icon: "/images/icon/digital marketing.png",
        role: "Digital Marketing & CRM Specialist",
        company: "CodAvatar (KrispCall)",
        location: "Kathmandu/Singapore",
        startYear: "July 25, 2024",
        endYear: "Feb 29, 2025",
        bulletPoints: [
            "Managed email marketing campaigns using SendGrid, Twilio SendGrid, and ConvertKit.",
            "Handled reputation management across G2, Trustpilot, RRM, optimizing 100+ CRM platforms.",
            "Improved review generation, brand credibility, and online presence.",
            "Analyzed marketing performance and optimized campaign effectiveness.",
            "Managed social media engagement on Reddit and LinkedIn.",
            "Worked closely with CRM and sales teams to improve conversion and lead quality.",
            "Supported marketing initiatives for KrispCall (VoIP service)."
        ]
    },
    {
        icon: "/images/icon/computer s teacher.png",
        role: "Computer Science Teacher",
        company: "Sunsari Crystal Academy",
        location: "Itahari, Sunsari, Nepal",
        startYear: "Nov, 2022",
        endYear: "March, 2023",
        bulletPoints: [
            "Taught Computer Science to students, covering programming, algorithms, and basic IT concepts.",
            "Assisted students with homework, assignments, and understanding of technical subjects.",
            "Developed lesson plans and guided students to improve problem-solving and coding skills."
        ]
    },
    {
        icon: "/images/icon/jr developer.png",
        role: "Junior Frontend Developer (React Intern)",
        company: "Hunchha Digital Agency",
        location: "Itahari-8, Nepal",
        startYear: "Nov, 2022",
        endYear: "March, 2023",
        bulletPoints: [
            "Started as React.js Intern gaining hands-on experience in real-world projects.",
            "Progressed to Junior Frontend Developer - developed responsive UIs, improved frontend performance.",
            "Built backend logic and APIs using Node.js.",
            "Contributed to multiple client projects managing tasks and delivery.",
            "Designed wireframes, user flows, modern interfaces focusing on usability and UX.",
            "Collaborated in agile team environment to deliver projects on time.",
            "Gained hands-on experience in project handling, delivery, cross-team coordination."
        ]
    }
];

const educationData = [
    {
        date: "2018 - 2023",
        title: "Koshi Saint James College, Itahari, Nepal",
        subtitle: "Bachelor in Computer Application (BCA), Tribhuvan University, Nepal | CGPA: 3.03/4.0"
    },
    {
        date: "2017 - 2018",
        title: "City Secondary School, Biratnagar, Nepal",
        subtitle: "Grade 11 & 12 | CGPA: 2.00"
    },
    {
        date: "2016",
        title: "Gaukhuri U Ma Vi, Morahang, Nepal",
        subtitle: "Grade 10 | CGPA: 2.40"
    }
];

const projectOverview = {
    caseStudies: [
        { 
            name: "AlterEgo - ChatGPT (Blog)", 
            url: "https://medium.com/@bijaysetopixel0705/alterego-chatgpt-the-future-of-thought-powered-ai-devices-526c6659652e" 
        }
    ],
    sideProjects: []
};

export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};
