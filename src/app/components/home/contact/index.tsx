import Link from "next/link";
import { Button } from "@/components/ui/button";

const Contact = () => {
    return (
        <section className="bg-primary/5">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="max-w-3xl mx-auto py-11 md:py-20">
                        <div className="text-center">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">Let's work together</h2>
                            <p className="text-secondary mb-8 max-w-md mx-auto">Ready to bring your next project to life? Reach out and let's create something amazing together.</p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-8">
                                <Button asChild className="h-12 px-8 rounded-full bg-gradient-to-r from-violet-500 to-orange-500 hover:from-violet-600 hover:to-orange-600 text-white">
                                    <Link href="mailto:bijaybhattrarai5544@gmail.com">📫 Send Email</Link>
                                </Button>
                                <div className="flex items-center gap-2 text-primary text-lg">
                                    <span>📱 9844638143</span>
                                    <span>📫 bijaybhattrarai5544@gmail.com</span>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground">Prefer other ways? DM me on LinkedIn, Twitter, or social platforms above.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
