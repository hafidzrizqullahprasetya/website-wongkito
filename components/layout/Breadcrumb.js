import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <section className="relative overflow-hidden !bg-wk-maroon py-16 md:py-20">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 grayscale"
                style={{ backgroundImage: "url('https://placehold.co/1920x600/3d0e0e/white?text=Banner+Background')" }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-wk-dark-maroon/95 via-wk-dark-maroon/70 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl">
                    {/* Breadcrumb trail */}
                    <div className="flex items-center gap-2 mb-5">
                        <Link href="/" className="text-xs font-bold uppercase tracking-widest !text-white/50 hover:opacity-70 transition-opacity">
                            Home
                        </Link>
                        <i className="fal fa-chevron-right text-[9px] !text-wk-gold/60" />
                        <span className="text-xs font-bold uppercase tracking-widest !text-wk-gold">
                            {breadcrumbTitle}
                        </span>
                    </div>

                    {/* Page title */}
                    <h1 className="text-4xl md:text-5xl font-black !text-white leading-tight uppercase tracking-tight">
                        {breadcrumbTitle}
                    </h1>
                    {/* Gold underline accent */}
                    <span className="block h-1 w-20 !bg-wk-gold mt-5 rounded-full" />
                </div>
            </div>

            {/* Decorative blur circle */}
            <div className="absolute -bottom-10 -right-10 w-72 h-72 !bg-wk-gold/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    )
}
