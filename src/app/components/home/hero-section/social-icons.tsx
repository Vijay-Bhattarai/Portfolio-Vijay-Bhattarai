'use client'

import Image from "next/image"
import Link from "next/link";

const socialIcons = [
  {

    img: "/images/icon/twitter-icon.svg",

    href: "https://x.com/vhattarai_0",
    icon: "X"
  },
  {
    img: "/images/icon/LinkedIn-Icon-Logo.wine.svg",
    href: "https://www.linkedin.com/in/bijaybhattarai-815a841a5/",
    icon: "LinkedIn"
  },
  {
    img: "/images/icon/github-image.png",
    href: "https://github.com/Vijay-Bhattarai",
    icon: "GitHub"
  }
];

const SocialIcons = () => {
  return (
    <div className="flex flex-row items-center gap-3 min-h-[56px]">
      {socialIcons.map((icon, index) => (
        <Link 
          key={index}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          <div className="relative w-14 h-14 rounded-full shadow-lg hover:shadow-2xl bg-gradient-to-br from-white/95 to-gray-50 dark:from-slate-800/95 dark:to-slate-900/95 border border-primary/20 flex items-center justify-center hover:scale-[1.05] hover:rotate-3 transition-all duration-300 group hover:shadow-primary/20">
            <Image 
              src={icon.img} 
              alt={icon.icon}
              width={32} 
              height={32}
              className="w-8 h-8 object-contain brightness-0 invert dark:invert-0 drop-shadow-md group-hover:scale-110" 
              unoptimized 
              priority={index === 0}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
