import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { cn } from "../lib/utils";
import { BUSINESS_INFO, generateWhatsAppLink } from "../config/business";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Industries", path: "/industries" },
  { name: "Custom Mfg", path: "/custom-manufacturing" },
  { name: "Quality", path: "/quality" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className="font-heading text-2xl font-bold text-brand-blue tracking-tight leading-none">
            RIDDHI
          </span>
          <span className="text-xs font-semibold text-gray-500 tracking-[0.2em] mt-1">ENTERPRISES</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-brand-blue",
                location.pathname === link.path ? "text-brand-blue" : "text-gray-600"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors"
          >
            <Phone className="h-4 w-4 mr-1.5 text-brand-blue" />
            {BUSINESS_INFO.phone}
          </a>
          <a
            href={generateWhatsAppLink("Hello Riddhi Enterprises")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-md text-sm font-bold shadow-sm transition-colors"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-600 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl overflow-y-auto max-h-[calc(100vh-72px)]">
          <div className="flex flex-col p-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "block py-3 px-4 text-base font-semibold rounded-md",
                  location.pathname === link.path ? "bg-blue-50 text-brand-blue" : "text-gray-800 hover:bg-gray-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-gray-100 flex flex-col space-y-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center w-full py-3 px-4 border border-gray-200 rounded-md text-gray-700 font-medium"
              >
                <Phone className="h-4 w-4 mr-2" /> Call Us
              </a>
              <a
                href={generateWhatsAppLink("Hello Riddhi Enterprises")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-green-600 text-white py-3 px-4 rounded-md font-bold shadow-sm"
              >
                <MessageSquare className="h-4 w-4 mr-2" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
