import Link from "next/link";

export default function Blog1() {
    const blogPosts = [
        {
            date: '21 Maret 2026',
            category: 'Berita',
            title: 'Rahasia Cuko Pempek yang Kental dan Pedas Mantap',
            img: '/assets/img/blog/blog-01.jpg',
            href: '/blog-details'
        },
        {
            date: '18 Maret 2026',
            category: 'Resep',
            title: 'Cara Simpan Pempek Frozen Agar Tetap Fresh dan Enak',
            img: '/assets/img/blog/blog-02.jpg',
            href: '/blog-details'
        },
        {
            date: '15 Maret 2026',
            category: 'Event',
            title: 'Wong Kito Kini Hadir di Jakarta Food Festival 2026',
            img: '/assets/img/blog/blog-03.jpg',
            href: '/blog-details'
        }
    ];

    return (
        <>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Blog main content */}
                        <div className="lg:w-2/3">
                            <div className="mb-10">
                                <span className="inline-block px-3 py-1 rounded-md !bg-wk-maroon text-[10px] font-black !text-wk-gold uppercase tracking-[0.3em] mb-3">
                                    Berita Terbaru
                                </span>
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <h2 className="text-3xl font-black !text-wk-dark-maroon uppercase tracking-tight">
                                            Kabar Wong Kito
                                        </h2>
                                        <div className="w-16 h-1.5 !bg-wk-gold rounded-full mt-4" />
                                    </div>
                                    <Link href="/blog" className="hidden sm:flex items-center text-sm font-bold !text-wk-gold hover:opacity-70 transition-opacity uppercase tracking-widest whitespace-nowrap">
                                        Lihat Semua <i className="fal fa-long-arrow-right ml-2" />
                                    </Link>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {blogPosts.map((post, i) => (
                                    <div key={i} className="group">
                                        <div className="relative overflow-hidden aspect-[4/3] rounded-xl mb-4">
                                            <Link href={post.href}>
                                                <img 
                                                    src={post.img} 
                                                    alt={post.title} 
                                                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300" 
                                                />
                                            </Link>
                                            <div className="absolute top-4 left-4 !bg-wk-maroon !text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                                                {post.category}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <span className="text-xs font-bold !text-wk-gold flex items-center">
                                                <i className="fal fa-calendar-alt mr-2" /> {post.date}
                                            </span>
                                            <h4 className="text-lg font-bold !text-wk-dark-maroon leading-snug group-hover:!text-wk-gold transition-colors duration-300">
                                                <Link href={post.href}>
                                                    {post.title}
                                                </Link>
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar / Newsletter */}
                        <div className="lg:w-1/3">
                            <div className="!bg-wk-maroon p-10 rounded-2xl relative overflow-hidden h-full flex flex-col justify-center text-center">
                                {/* Decorative circle */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 !bg-wk-gold/10 rounded-full blur-3xl text-sm" />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 !bg-wk-gold/10 rounded-full blur-3xl pointer-events-none" />
                                
                                <div className="relative z-10">
                                    <span className="inline-block px-4 py-1 !bg-wk-gold/20 !text-wk-gold rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                                        Newsletter
                                    </span>
                                    <h3 className="text-2xl font-black !text-white mb-4 leading-tight uppercase tracking-tight">
                                        Dapatkan Info Promo Terkini!
                                    </h3>
                                    <p className="!text-wk-beige/80 text-sm mb-10 leading-relaxed font-medium">
                                        Jangan sampai ketinggalan info diskon, hampers lebaran, dan menu spesial dari kami.
                                    </p>
                                    
                                    <form className="space-y-4">
                                        <div className="relative">
                                            <span className="absolute left-5 top-1/2 -translate-y-1/2 !text-wk-gold pointer-events-none">
                                                <i className="fal fa-envelope" />
                                            </span>
                                            <input 
                                                type="email" 
                                                placeholder="Email Anda" 
                                                className="w-full !bg-white/5 border border-wk-gold/20 !text-white text-sm rounded-full pl-12 pr-6 py-4 focus:outline-none focus:border-wk-gold transition-colors placeholder-wk-beige/30"
                                            />
                                        </div>
                                        <button className="w-full !bg-wk-gold !text-wk-dark-maroon font-black py-4 rounded-full uppercase tracking-widest text-sm hover:opacity-90 transition-opacity mt-4 flex items-center justify-center group-button">
                                            Daftar Sekarang <i className="fal fa-paper-plane ml-3 group-button-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </form>
                                    <p className="mt-8 text-[10px] !text-wk-beige/40 italic">
                                        *Kami menjamin data Anda aman dan tidak disalahgunakan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
