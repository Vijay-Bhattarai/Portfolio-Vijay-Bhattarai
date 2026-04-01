import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
    const servicesBedge = [
"React.js",
"Python",
"Node.js",
"Django",
"Laravel / PHP",
"Firebase",
"MySQL",
"Git & GitHub",
"CRM Automation",
"Email Marketing",
"UI/UX Design",
"WordPress",
"AI & ML",
"Automation",
"Digital Marketing"
    ];
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">About Me</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">Hi, I'm <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">Bijay Bhattarai</span> — Tech & Digital Professional with 6+ years of experience.</h2>
                            <h5 className="text-secondary font-normal">🚀 AI Engineer | Automation & CRM Systems Specialist | Digital Marketing Executive | Sales Manager & Tech Co-Founder</h5>
                            <p className="text-secondary font-normal">I am a Tech & Digital Professional with 6+ years of experience across web development, CRM systems, automation, digital marketing, and business leadership. Currently advancing toward AI Engineering career with Python, AI projects, and automation.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">Core Skills</p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {servicesBedge?.map((value, index) => {
                                    return (
                                        <Badge variant={"outline"} key={index} className="py-1.5 px-3 rounded-lg">
                                            <p className="text-xs sm:text-sm font-medium text-primary">{value}</p>
                                        </Badge>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
