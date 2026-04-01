import Image from "next/image"

const AnnouncementBar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 overflow-hidden py-2">

                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center text-white text-sm font-medium">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnnouncementBar

