import AnnouncementBar from "./announcementBar"
import ThemeToggle from "@/components/theme-toggle"

const Header = () => {
    return (
        <header className="relative z-40">
            <AnnouncementBar/>
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div>
        </header>
    )
}

export default Header
