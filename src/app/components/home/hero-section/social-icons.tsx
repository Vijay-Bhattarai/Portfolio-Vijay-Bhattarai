"use client"
import Image from "next/image"
import Link from "next/link";

interface SocialIcon {
  img: string;
  href: string;
  icon: string;
}

const socialIcons: SocialIcon[] = [
  {
    img: "/images/icon/X_icon.svg.png",
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
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, iconName: string) => {
    const target = e.currentTarget as HTMLImageElement;
    target.style.display = 'none';
    target.parentElement!.innerHTML = iconName;
  };

  return (
    <div className="flex flex-row items-center gap-2 min-h-[40px]">
      {socialIcons.map((value, index) => (
        <Link 
          key={index} 
          href={value.href} 
          className="flex items-center justify-center p-2 hover:bg-primary/10 border border-primary/20 hover:border-primary/50 rounded-full hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm overflow-hidden border border-white/50 dark:border-slate-800/50">
            <Image 
              src={value.img} 
              alt={value.icon} 
              width={24} 
              height={24} 
              className="w-5 h-5 object-contain drop-shadow-sm" 
              unoptimized 
              onError={(e) => handleImageError(e, value.icon)}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;

