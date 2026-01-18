import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [location] = useLocation();

  const navItems = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 shadow-2xl"
      >
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 bg-accent-orange flex items-center justify-center rounded-full mr-4 cursor-pointer"
          >
            <span className="text-white font-serif font-bold text-xs tracking-tighter">LM</span>
          </motion.div>
        </Link>

        <ul className="flex items-center">
          {navItems.map((item) => {
            const isActive = location === item.path;
            return (
              <li key={item.name} className="relative">
                <Link href={item.path}>
                  <span className={`px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors duration-300 cursor-pointer block ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}>
                    {item.name}
                  </span>
                </Link>
                {isActive && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-4 right-4 h-[2px] bg-accent-orange shadow-[0_0_10px_#FF5C00]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;

