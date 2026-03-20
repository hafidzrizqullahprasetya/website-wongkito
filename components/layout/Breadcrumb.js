import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <section className="relative overflow-hidden !bg-wk-maroon py-14 md:py-12 ">
            
            {/* Background Image with optimized opacity */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 grayscale"
                style={{ backgroundImage: "url('https://placehold.co/1920x600/3d0e0e/white?text=Banner+Asli+Wong+Kito')" }}
            />
            
            {/* Darker Gradient Overlay for maximum text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-wk-dark-maroon/100 via-wk-dark-maroon/90 to-wk-dark-maroon/20" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    
                    {/* Breadcrumb Navigation - with Flex Wrap for mobile safety */}
                    <nav className="flex flex-wrap items-center gap-x-2.5 gap-y-2 mb-6 sm:mb-8">
                        <Link href="/" className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] !text-white/40 hover:!text-wk-gold transition-colors">
                            Home
                        </Link>
                        <i className="fal fa-chevron-right text-[8px] !text-wk-gold/40" />
                        <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] !text-wk-gold">
                            {breadcrumbTitle}
                        </span>
                    </nav>

                    {/* Responsive Title: 3xl to 6xl */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black !text-white leading-[1.1] uppercase tracking-tighter mb-6 pt-2">
                        {breadcrumbTitle}
                    </h1>

                    {/* Decorative Accent */}
                    <div className="relative">
                        <span className="block h-1.5 w-24 !bg-wk-gold rounded-full" />
                    </div>

                </div>
            </div>

            {/* Decorative Blur Effect for Premium Feel */}
            <div className="absolute -bottom-20 -right-20 w-96 h-96 !bg-wk-gold/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-80 h-80 !bg-wk-maroon/50 rounded-full blur-[80px] pointer-events-none" />

        </section>
    )
}
