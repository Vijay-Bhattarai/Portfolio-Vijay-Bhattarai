import ThemeToggle from "../../../../components/theme-toggle"

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-primary/10">
            <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-7 py-2">
                <div />
                <ThemeToggle />
            </div>
        </header>
    )
}

export default Header
