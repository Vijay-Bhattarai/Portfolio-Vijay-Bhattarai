import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SocialIcons from "./social-icons";

const HeroSection = () => {
    return (
        <section>
            <div className="container">
                <div className="">
                    <div className="w-full h-72">
                        <Image src="/images/hero-sec/banner-bg-img.png" alt="banner-img" width={1080} height={267} className="w-full h-full object-cover" priority />
                    </div>
                    <div className="border-x border-primary/10">
                        <div className="relative flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between max-w-3xl mx-auto gap-6 sm:gap-3 px-4 sm:px-7 pt-16 sm:pt-22 pb-6 sm:pb-12">
                            <div className="absolute top-0 transform -translate-y-1/2 z-10">
                                <Image src="/images/hero-sec/profile.jpg" alt="user-img" width={145} height={145} className="w-[120px] h-[120px] sm:w-[145px] sm:h-[145px] border-4 border-white rounded-full shadow-lg" priority />
                                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-ping" />
                            </div>
                            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center sm:items-start">
                                <h1>Bijay Bhattarai</h1>
                                <p className="text-violet-700 dark:text-white font-normal break-words md:whitespace-nowrap">🚀 AI Engineer | Automation & CRM Systems Specialist</p>
                                <div className="flex items-center gap-2">
                                    <p className="text-primary"> 📍Kathmandu, Nepal</p>
                                </div>
                                <p className="text-primary text-sm">📫 bijaybhattrarai5544@gmail.com</p>
                                <p className="text-primary text-sm">📱 9844638143</p>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <SocialIcons />
                                <Button asChild className="h-auto rounded-full p-0.5!">
                                    <Link
                                        href="mailto:bijaybhattrarai5544@gmail.com"
                                        className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)]"
                                    >
                                        <span className="flex items-center gap-3 bg-primary hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] py-2.5 px-5 rounded-full transition-all duration-200">
                                            <Image
                                                src="/images/icon/spark-icon.svg"
                                                alt="spark-icon"
                                                width={14}
                                                height={14}
                                                className="brightness-0 invert w-3.5 h-3.5"
                                                unoptimized
                                            />
                                            <span className="text-sm sm:text-base font-semibold text-white">Contact Me</span>
                                        </span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

