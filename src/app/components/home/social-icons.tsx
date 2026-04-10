"use client"
import Image from "next/image"
import Link from "next/link";

const socialIcons = [
  {
    img: "/images/icon/twitter-icon.svg",
    href: "https://x.com/vhattarai_0",
    icon: "twitter"
  },
  {
    img: "/images/icon/LinkedIn-Icon-Logo.wine.svg",
    href: "https://www.linkedin.com/in/bijaybhattarai-815a841a5/",
    icon: "linkedin"
  },
  {
    img: "/images/icon/github-image.png",
    href: "https://github.com/Vijay-Bhattarai",
    icon: "github"
  }
];

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-4">
      {socialIcons.map((icon, index) => (
        <Link 
          key={index}
          href={icon.href}
          className="group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-12 h-12 rounded-full shadow-lg group-hover:shadow-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-white/50 dark:border-slate-700/50 flex items-center justify-center hover:scale-110 transition-all duration-300 hover:-translate-y-1">
            <Image 
              src={icon.img} 
              alt={icon.icon} 
              width={24} 
              height={24} 
              className="w-6 h-6 object-contain brightness-0 invert dark:invert-0 drop-shadow-sm" 
              unoptimized 
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;

