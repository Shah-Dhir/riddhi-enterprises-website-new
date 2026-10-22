import { Link } from "react-router-dom";
import { CheckCircle2, FileDown, Layers, Ruler } from "lucide-react";
import { BUSINESS_INFO } from "../config/business";

export function CustomManufacturing() {
  return (
    <div className="w-full">
      <div className="bg-gray-900 py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Custom Manufacturing</h1>
          <p className="text-xl text-gray-400 max-w-2xl">Built to your drawing. Manufactured to your requirement.</p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">Engineered for Your Project</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Standard products don't always fit complex industrial installations. We specialize in manufacturing cable management solutions customized precisely to your project's technical specifications and drawings.
              </p>
              
              <div className="space-y-8 mt-10">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-10 w-10 bg-blue-50 text-brand-blue rounded flex items-center justify-center">
                      <Ruler className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Dimensional Customization</h3>
                    <p className="text-gray-600">Specific widths, heights, lengths, and thicknesses (e.g., 0.8mm to 3.00mm) according to load requirements.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-10 w-10 bg-blue-50 text-brand-blue rounded flex items-center justify-center">
                      <Layers className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Material & Finish</h3>
                    <p className="text-gray-600">Choose from Pre-Galvanized, Hot Dip Galvanized (HDG), Powder Coated, or Stainless Steel based on environmental conditions.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-10 w-10 bg-blue-50 text-brand-blue rounded flex items-center justify-center">
                      <FileDown className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Build from Drawing</h3>
                    <p className="text-gray-600">Send us your engineering drawings, and our fabrication team will manufacture exact matches for your site.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000&auto=format&fit=crop" 
                alt="Custom Fabrication" 
                className="w-full rounded-2xl shadow-xl border border-gray-100"
              />
              
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-2xl border border-gray-100 hidden md:block max-w-sm">
                <h4 className="font-bold text-gray-900 mb-2 font-heading text-lg">Send Your Requirement</h4>
                <p className="text-sm text-gray-600 mb-6">Our technical team evaluates drawings quickly to provide accurate pricing.</p>
                <Link to="/contact" className="block text-center bg-brand-blue text-white py-3 rounded font-bold text-sm hover:bg-blue-800 transition-colors">
                  CONTACT OUR TEAM
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
