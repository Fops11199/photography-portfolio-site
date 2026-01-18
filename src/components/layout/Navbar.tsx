import { Link, useLocation } from 'wouter';

const Navbar = () => {
    const [location] = useLocation();

    const navItems = [
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 bg-gradient-to-b from-primary/80 to-transparent backdrop-blur-sm">
            <Link href="/">
                <h1 className="text-2xl font-bold font-serif text-accent-gold cursor-pointer tracking-wider">LUMOS</h1>
            </Link>
            
            <div className="space-x-8">
                {navItems.map((item) => (
                    <Link key={item.name} href={item.path}>
                        <span className={`cursor-pointer transition-colors duration-300 ${
                            location === item.path 
                                ? 'text-accent-gold border-b border-accent-gold' 
                                : 'text-white hover:text-accent-gold'
                        }`}>
                            {item.name}
                        </span>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
