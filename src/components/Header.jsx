import logo from '../assets/logos/WhiteTextOnlyLogo-sample.png';

export default function Header() {
    return (
        <header
            style={{ backgroundColor: 'var(--brand-text)', color: 'var(--brand-background)' }}
            className="py-4 sticky top-0 z-50 shadow-lg"
        >
            <div className="max-w-7xl mx-auto px-6 w-full flex items-center">
                <a href="/" aria-label="Go to UniMart home" className="flex items-center">
                    <img
                        src={logo}
                        alt="UniMart"
                        className="h-10 md:h-12"
                    />
                </a>
            </div>
        </header>
    );
}