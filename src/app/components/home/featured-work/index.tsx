"use client";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";

interface FeatureWorkItem {
    title: string;
    description: string;
    roles: string[];
    image: string;
    company: string;
    companyLink: string;
}

const FeaturedWork = () => {
    const [featureWork, setFeatureWork] = useState<FeatureWorkItem[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/featured-work')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setFeatureWork(data?.featureWork)
            } catch (error) {
                console.error('Error fetching featured work:', error)
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
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Featured work</p>
                            <Link href="/cv/vijay-bhattarai.pdf" target="_blank" download="Vijay-Bhattarai-CV.pdf" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold py-3 px-5 rounded-full bg-gradient-to-r from-violet-500 to-orange-500 hover:from-violet-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                                📄 Download & View My CV
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
                        {featureWork?.map((value, index) => {
                            const isRightCol = index % 2 === 1;

                            return (
                                <div
                                    key={index}
                                    className={`group flex flex-col gap-2 p-4 sm:p-6 ${isRightCol ? 'md:border-l md:border-primary/10' : ''}`}
                                >
                                    <Link href="#" className="w-full h-64 overflow-hidden rounded-lg relative">
                                        <Image
                                            src={value?.image}
                                            alt="Project"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
                                        />
                                    </Link>
                                    <div className="flex flex-col gap-1 px-1 hidden">
                                        <Link href="#" className="hover:text-primary transition-colors"><h4 className="text-sm font-medium leading-tight">{value?.title}</h4></Link>
                                        <p className="text-xs text-secondary">{value?.roles?.join(', ')}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedWork;

