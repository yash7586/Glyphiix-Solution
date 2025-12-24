import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type Page = "home" | "services" | "about" | "work" | "contact";

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", page: "home" as Page },
    { name: "Services", page: "services" as Page },
    { name: "Work", page: "work" as Page },
    { name: "About", page: "about" as Page },
    { name: "Contact", page: "contact" as Page },
  ];

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md
        ${
          isScrolled
            ? "bg-white/80 border-b border-white/30 shadow-md"
            : "bg-white/30"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO + BRAND */}
           <button
  onClick={() => handleNavigation("home")}
  className="flex items-center gap-3 h-full flex-shrink-0"
>
  {/* LOGO FIXED FOR WHITESPACE ISSUE */}
  <div className="h-10 w-10 flex items-center justify-center overflow-hidden">
    <img
      src="/GLYPHIIX.svg"
      alt="Glyphiix Logo"
      className="h-full w-full object-contain"
    />
  </div>

  <span className="text-2xl font-bold tracking-tight hidden sm:block">
   
  </span>
</button>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigation(item.page)}
                className={`relative py-2 transition-colors ${
                  currentPage === item.page
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {item.name}
                {currentPage === item.page && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex">
            <a
              href="https://calendly.com/abhishekrajput807668/client-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              Get Started
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-xl border-t"
          >
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigation(item.page)}
                  className="block w-full text-left px-4 py-3 rounded-md hover:bg-gray-100"
                >
                  {item.name}
                </button>
              ))}

              <a
                href="https://calendly.com/abhishekrajput807668/client-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-4 py-3 bg-black text-white rounded-md mt-4"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}