import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { BUSINESS_INFO, PRODUCTS } from "../config/business";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-[6px] border-brand-blue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-heading text-2xl font-bold text-white tracking-tight leading-none block">
                RIDDHI
              </span>
              <span className="text-xs font-semibold text-gray-400 tracking-[0.2em] mt-1 block">ENTERPRISES</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Manufacturer of Cable Trays, Ladder Trays & Electrical Cable Support Systems for industrial, commercial, and infrastructure projects across India.
            </p>
            <div className="flex flex-col space-y-3">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                <Phone className="h-4 w-4 mr-3 text-brand-blue flex-shrink-0" />
                {BUSINESS_INFO.phone}
              </a>
              <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center text-sm text-gray-300 hover:text-white transition-colors break-all">
                <Mail className="h-4 w-4 mr-3 text-brand-blue flex-shrink-0" />
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Products', 'Industries', 'Custom Manufacturing', 'Quality', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 text-sm hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-50" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Products</h3>
            <ul className="space-y-3">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <Link 
                    to={`/products/${product.id}`}
                    className="text-gray-400 text-sm hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-50" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Addresses */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Locations</h3>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Office</p>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-3 text-brand-blue flex-shrink-0 mt-0.5" />
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {BUSINESS_INFO.officeAddress}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Factory</p>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-3 text-brand-blue flex-shrink-0 mt-0.5" />
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {BUSINESS_INFO.factoryAddress}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/contact" className="text-xs text-gray-400 hover:text-white uppercase tracking-wider font-semibold">
              Contact Us
            </Link>
            <span className="text-gray-700">|</span>
            <a href={`https://wa.me/${BUSINESS_INFO.whatsappClean}`} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-white uppercase tracking-wider font-semibold">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
