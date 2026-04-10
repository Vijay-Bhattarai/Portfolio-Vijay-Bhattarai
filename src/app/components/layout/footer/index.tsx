import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-[var(--background)] border-t border-primary/10">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="max-w-3xl mx-auto py-8 md:py-12">
                        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 md:gap-12 text-center md:text-left">
                            <div className="flex flex-col items-center md:items-start gap-2">
                                <Link href="/" className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                    Vijay Bhattarai
                                </Link>
                                <p className="text-sm text-secondary dark:text-gray-400 max-w-md">
                                    Building amazing digital experiences with passion and creativity.
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Link href="https://github.com/Vijay-Bhattarai" aria-label="GitHub">
                                    <Github className="w-5 h-5 hover:text-primary dark:hover:text-primary transition-colors" />
                                </Link>
                                <Link href="https://linkedin.com/in/bijaybhattarai-815a841a5" aria-label="LinkedIn">
                                    <Linkedin className="w-5 h-5 hover:text-primary dark:hover:text-primary transition-colors" />
                                </Link>
                                <Link href="https://x.com/vhattarai_0" aria-label="Twitter">
                                    <Twitter className="w-5 h-5 hover:text-primary dark:hover:text-primary transition-colors" />
                                </Link>
                            </div>
                        </div>
                        <div className="pt-8 mt-8 border-t border-primary/10">
                            <p className="text-xs text-secondary dark:text-gray-400 text-center">
                                2026 © Designed by <span className="font-semibold hover:text-primary dark:hover:text-primary transition-colors">Vijay-Bhattarai</span> — All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
