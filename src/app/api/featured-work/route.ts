import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "Branding + Web Design for Cleaning Services",
        description: "Developed a modern brand identity and a responsive web experience tailored for a professional cleaning company, focused on clarity and usability.",
        roles: ["UX Designer", "Framer Designer"],
        image: "/images/feature-work/portfolio 1.png",
        company: "Cleaning Co",
        companyLink: "#"
    },
    {
        title: "Brand Identity for a Health Care Company",
        description: "Created a distinctive visual identity and design language to build trust and empathy for a forward-thinking health care provider.",
        roles: ["UX Designer", "Framer Designer"],
        image: "/images/feature-work/portfolio 2.png",
        company: "HealthCare Inc",
        companyLink: "#"
    },
    {
        title: "E-commerce Platform Development",
        description: "Built a scalable e-commerce solution with modern UI/UX and optimized performance for high-traffic retail operations.",
        roles: ["Full Stack Developer", "React Developer"],
        image: "/images/feature-work/portfolio 3.png",
        company: "Retail Solutions",
        companyLink: "#"
    },
    {
        title: "Mobile App UI/UX Design",
        description: "Designed intuitive mobile app interfaces focusing on user engagement and seamless cross-platform experience.",
        roles: ["UI/UX Designer", "Mobile Designer"],
        image: "/images/feature-work/portfolio 4.png",
        company: "Mobile Innovations",
        companyLink: "#"
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};

