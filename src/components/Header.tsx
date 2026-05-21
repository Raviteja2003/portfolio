import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { Download, Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

interface MenuItem {
  name: string;
  to: string;
  offset: number;
}

const menuItems: MenuItem[] = [
  { name: "About", to: "about", offset: -20 },
  { name: "Projects", to: "projects", offset: -20 },
  { name: "Skills", to: "skills", offset: -70 },
  { name: "Experience", to: "experience", offset: -70 },
  { name: "Contact", to: "contact", offset: -40 },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg  border-orange-200"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Left */}
          <div className="flex-shrink-0">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-20}
              className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text md:text-3xl lg:text-4xl cursor-pointer transition-all duration-300 hover:from-blue-600 hover:to-indigo-600"
              aria-label="Go to home section"
            >
              Ravi Teja
            </ScrollLink>
          </div>

          {/* Desktop Navigation Center (hidden on mobile) */}
          <div className="hidden lg:flex flex-1 justify-center space-x-8">
            {menuItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={item.offset}
                className="text-base font-semibold text-gray-700 transition-all duration-300 hover:text-blue-500 hover:underline hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`Go to ${item.name} section`}
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>

          {/* Resume Button Right (hidden on mobile) */}
          <div className="hidden lg:flex flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="px-6 text-blue-600 bg-transparent border-2 border-blue-500 transition-all duration-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:shadow-lg hover:scale-105 focus:ring-2 focus:ring-blue-500"
              asChild
            >
              <a
                href="/Tadikonda_Ravi_Teja_Resume.pdf"
                download="Tadikonda Ravi Teja Resume.pdf"
                className="flex items-center gap-2"
                aria-label="Download resume"
              >
                <Download size={16} />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-500 hover:bg-blue-100/50 focus:ring-2 focus:ring-blue-500"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={item.offset}
                onClick={closeMenu}
                className="block px-3 py-3 text-base font-bold text-gray-700 rounded-md transition-all duration-300 hover:text-blue-500 hover:bg-blue-100/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`Go to ${item.name} section`}
              >
                {item.name}
              </ScrollLink>
            ))}
            <div className="pt-4">
              <Button
                variant="outline"
                className="w-full px-6 text-blue-600 bg-transparent border-2 border-blue-500 transition-all duration-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:shadow-lg hover:scale-105 focus:ring-2 focus:ring-blue-500"
                asChild
              >
                <a
                  href="/Tadikonda_Ravi_Teja_Resume.pdf"
                  download="Tadikonda Ravi Teja Resume.pdf"
                  className="flex items-center justify-center gap-2"
                  aria-label="Download resume"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
