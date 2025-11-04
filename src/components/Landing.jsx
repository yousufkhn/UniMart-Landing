export default function Landing() {
    return (
        <section className="min-h-screen flex items-center" style={{ background: 'var(--color-peppercorn)' }}>
            <div className="max-w-7xl mx-auto px-6 py-20 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div className="space-y-6">
                        <div className="inline-block">
                            <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: 'rgba(246, 134, 52, 0.2)', color: 'var(--color-lpu-orange)' }}>
                                🎓 Built for LPU Campus
                            </span>
                        </div>
                        
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight" style={{ color: 'var(--color-feta)' }}>
                            Your Campus <span style={{ color: 'var(--color-lpu-orange)' }}>Marketplace</span>
                        </h1>
                        
                        <p className="text-xl leading-relaxed" style={{ color: '#AAAAAA' }}>
                            Buy and sell second-hand products within the LPU community. 
                            From textbooks to gadgets, bikes to hostel essentials — 
                            declutter your space and save money, all in one place.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg mt-1" style={{ backgroundColor: 'rgba(246, 134, 52, 0.2)' }}>
                                    <svg className="w-5 h-5" style={{ color: 'var(--color-lpu-orange)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold" style={{ color: 'var(--color-feta)' }}>Quick Google Sign-In</h3>
                                    <p style={{ color: '#AAAAAA' }}>No passwords to remember. Just login and start trading.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg mt-1" style={{ backgroundColor: 'rgba(246, 134, 52, 0.2)' }}>
                                    <svg className="w-5 h-5" style={{ color: 'var(--color-lpu-orange)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold" style={{ color: 'var(--color-feta)' }}>Smart Categorization</h3>
                                    <p style={{ color: '#AAAAAA' }}>AI-powered product classification for easy browsing.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg mt-1" style={{ backgroundColor: 'rgba(246, 134, 52, 0.2)' }}>
                                    <svg className="w-5 h-5" style={{ color: 'var(--color-lpu-orange)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold" style={{ color: 'var(--color-feta)' }}>Campus-Only Community</h3>
                                    <p style={{ color: '#AAAAAA' }}>Trade safely with verified LPU students and staff.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button className="px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg" style={{ backgroundColor: 'var(--color-lpu-orange)', color: 'var(--color-feta)' }}>
                                Get Started
                            </button>
                            <button className="border-2 px-8 py-4 rounded-lg font-semibold transition-all" style={{ borderColor: '#555', color: 'var(--color-feta)' }}>
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right: Visual/Illustration */}
                    <div className="relative">
                        <div className="rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300" style={{ background: 'linear-gradient(to bottom right, var(--color-lpu-orange), #E67A2E)' }}>
                            <div className="rounded-2xl p-8 transform -rotate-3" style={{ backgroundColor: '#1E1E1E' }}>
                                <div className="space-y-6">
                                    {/* Mock Product Card */}
                                    <div className="rounded-xl p-4 border" style={{ backgroundColor: '#3A3A3A', borderColor: '#4A4A4A' }}>
                                        <div className="h-32 rounded-lg mb-3" style={{ background: 'linear-gradient(to bottom right, #555, #333)' }}></div>
                                        <div className="h-4 rounded w-3/4 mb-2" style={{ backgroundColor: '#666' }}></div>
                                        <div className="h-3 rounded w-1/2" style={{ backgroundColor: '#555' }}></div>
                                    </div>
                                    
                                    {/* Mock Stats */}
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="rounded-lg p-3 text-center" style={{ backgroundColor: 'rgba(246, 134, 52, 0.2)' }}>
                                            <div className="text-2xl font-bold" style={{ color: 'var(--color-lpu-orange)' }}>1.2k+</div>
                                            <div className="text-xs" style={{ color: '#AAAAAA' }}>Products</div>
                                        </div>
                                        <div className="rounded-lg p-3 text-center" style={{ backgroundColor: 'rgba(246, 134, 52, 0.2)' }}>
                                            <div className="text-2xl font-bold" style={{ color: 'var(--color-lpu-orange)' }}>500+</div>
                                            <div className="text-xs" style={{ color: '#AAAAAA' }}>Users</div>
                                        </div>
                                        <div className="rounded-lg p-3 text-center" style={{ backgroundColor: 'rgba(246, 134, 52, 0.2)' }}>
                                            <div className="text-2xl font-bold" style={{ color: 'var(--color-lpu-orange)' }}>4.8★</div>
                                            <div className="text-xs" style={{ color: '#AAAAAA' }}>Rating</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}