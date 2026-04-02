
"use client";
import Image from "next/image"
import { useEffect, useState } from "react";

const Experience = () => {
    const [experienceData, setExperienceData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setExperienceData(data?.experienceData)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Experience</p>
                        </div>
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16 ">
                            {experienceData?.map((value: any, index: any) => {
                                return (
                                    <div key={index} className="relative flex gap-8 border-dashed border-b border-primary/10 last:border-b-0 pb-10 pt-12 first:pt-0 last:pb-0">
                                        <div className="flex flex-col items-center absolute left-0 top-0 bottom-0 w-12 z-10">
                                            <div className="w-4 h-4 bg-primary rounded-full border-4 border-white z-20"></div>
                                            <div className="w-px bg-primary/30 flex-1 mt-2"></div>
                                        </div>
                                        <div className="flex-1 ml-12">
                                            <div className="flex items-center gap-3 mb-4">
                                                <Image src={value?.icon} alt="icon" width={32} height={19} unoptimized />
                                                <h5 className="text-xl font-semibold text-primary dark:text-white">{value?.role}</h5>
                                            </div>
                                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                                <div className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-2 min-w-[140px]">
                                                    <p className="text-primary dark:text-white font-medium text-sm">{value?.startYear} - {value?.endYear}</p>
                                                </div>
                                                <div className="flex items-center gap-2 text-primary/70 dark:text-white/70">
                                                    <p className="text-sm dark:text-white">{value?.location}</p>
                                                </div>
                                            </div>

                                            <ul className="space-y-3">
                                                {value?.bulletPoints?.map((point: any, i: any) => (
                                                    <li key={i} className="flex items-start gap-3 text-base text-secondary">
                                                        <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                                                        <span className="dark:text-white">{point}</span>
                                                    </li>
                                                ))}

                                            </ul>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Experience