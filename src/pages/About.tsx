import { BUSINESS_INFO } from "../config/business";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function About() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-gray-900 py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">About Riddhi Enterprises</h1>
          <p className="text-xl text-gray-400 max-w-2xl">Manufacturing excellence in cable management since {BUSINESS_INFO.established}.</p>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Our Legacy</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Established in {BUSINESS_INFO.established}, Riddhi Enterprises has grown to become a trusted manufacturer of metal cable management solutions. We specialize in cable trays, ladder trays, raceway systems, and electrical support structures designed for industrial, commercial, and infrastructure projects.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Based in Mumbai with our manufacturing facility in Palghar, we serve a wide spectrum of clients across India, ensuring that their critical infrastructure is supported by robust, precisely engineered products.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Who We Work With</h3>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {['Electrical Contractors', 'EPC Companies', 'Builders', 'Project Developers', 'OEMs', 'Industrial Companies'].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-brand-blue mr-2" />
                    <span className="font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" 
                alt="Industrial Facility" 
                className="w-full rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-blue p-8 rounded-xl text-white shadow-2xl hidden md:block">
                <p className="text-5xl font-heading font-bold mb-2">{new Date().getFullYear() - BUSINESS_INFO.established}+</p>
                <p className="text-sm font-semibold uppercase tracking-wider">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Company Timeline */}
      <div className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 text-center">Company Timeline</h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-16 text-base">
            A journey of sustained growth, infrastructure investments, and engineering dedication.
          </p>
          
          <div className="relative border-l-2 border-brand-blue/30 pl-8 ml-4 md:ml-0 md:pl-0 md:border-none space-y-12 md:space-y-16">
            {/* Desktop center vertical line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-brand-blue/20" />

            {/* 2008: Foundation */}
            <div className="relative md:grid md:grid-cols-5 md:items-center">
              <div className="hidden md:block col-span-2 text-right pr-12">
                <h3 className="text-xl font-bold text-gray-900">Foundation</h3>
                <p className="text-gray-500 text-sm mt-1">The journey began</p>
              </div>
              <div className="absolute -left-[41px] top-1 md:static md:col-span-1 flex justify-center z-10">
                <div className="h-6 w-6 rounded-full bg-brand-blue border-4 border-white shadow-md"></div>
              </div>
              <div className="md:col-span-2 md:pl-12">
                <div className="md:hidden mb-1">
                  <span className="text-brand-blue font-bold text-lg mr-2">2008</span>
                  <span className="font-bold text-gray-900 text-lg">– Foundation</span>
                </div>
                <span className="hidden md:block text-brand-blue font-bold text-lg mb-1">{BUSINESS_INFO.established}</span>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Riddhi Enterprises was established with a focus on delivering quality metal electrical support systems to the local market.
                </p>
              </div>
            </div>

            {/* 2014: Facility Upgrade */}
            <div className="relative md:grid md:grid-cols-5 md:items-center">
              <div className="hidden md:block col-span-2 text-right pr-12">
                <span className="text-brand-blue font-bold text-lg mb-1 block">2014</span>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Upgraded workshop machinery to handle high-volume custom metal fabrication and panel support framing.
                </p>
              </div>
              <div className="absolute -left-[41px] top-1 md:static md:col-span-1 flex justify-center z-10">
                <div className="h-6 w-6 rounded-full bg-brand-blue border-4 border-white shadow-md"></div>
              </div>
              <div className="md:col-span-2 md:pl-12">
                <div className="md:hidden mb-1">
                  <span className="text-brand-blue font-bold text-lg mr-2">2014</span>
                  <span className="font-bold text-gray-900 text-lg">– Facility Upgrade</span>
                </div>
                <div className="hidden md:block">
                  <h3 className="text-xl font-bold text-gray-900">Facility Upgrade</h3>
                  <p className="text-gray-500 text-sm mt-1">High-Volume Custom Metal Fabrication</p>
                </div>
                <p className="md:hidden text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                  Upgraded workshop machinery to handle high-volume custom metal fabrication and panel support framing.
                </p>
              </div>
            </div>

            {/* 2020: Market Expansion */}
            <div className="relative md:grid md:grid-cols-5 md:items-center">
              <div className="hidden md:block col-span-2 text-right pr-12">
                <h3 className="text-xl font-bold text-gray-900">Market Expansion</h3>
                <p className="text-gray-500 text-sm mt-1">Infrastructure & Commercial Hubs</p>
              </div>
              <div className="absolute -left-[41px] top-1 md:static md:col-span-1 flex justify-center z-10">
                <div className="h-6 w-6 rounded-full bg-brand-blue border-4 border-white shadow-md"></div>
              </div>
              <div className="md:col-span-2 md:pl-12">
                <div className="md:hidden mb-1">
                  <span className="text-brand-blue font-bold text-lg mr-2">2020</span>
                  <span className="font-bold text-gray-900 text-lg">– Market Expansion</span>
                </div>
                <span className="hidden md:block text-brand-blue font-bold text-lg mb-1">2020</span>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Broadened supplier networks to supply mega infrastructure projects, manufacturing units, and commercial hubs.
                </p>
              </div>
            </div>

            {/* 2026: Digital Integration */}
            <div className="relative md:grid md:grid-cols-5 md:items-center">
              <div className="hidden md:block col-span-2 text-right pr-12">
                <span className="text-brand-blue font-bold text-lg mb-1 block">2026</span>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Launched direct online client engagement and interactive product showcase (<a href="https://www.riddhienterprisess.in" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-medium underline hover:text-blue-800">www.riddhienterprisess.in</a>).
                </p>
              </div>
              <div className="absolute -left-[41px] top-1 md:static md:col-span-1 flex justify-center z-10">
                <div className="h-6 w-6 rounded-full bg-brand-blue border-4 border-white shadow-md"></div>
              </div>
              <div className="md:col-span-2 md:pl-12">
                <div className="md:hidden mb-1">
                  <span className="text-brand-blue font-bold text-lg mr-2">2026</span>
                  <span className="font-bold text-gray-900 text-lg">– Digital Integration</span>
                </div>
                <div className="hidden md:block">
                  <h3 className="text-xl font-bold text-gray-900">Digital Integration</h3>
                  <p className="text-gray-500 text-sm mt-1">Interactive Product Showcase & Online Engagement</p>
                </div>
                <p className="md:hidden text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                  Launched direct online client engagement and interactive product showcase (<a href="https://www.riddhienterprisess.in" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-medium underline hover:text-blue-800">www.riddhienterprisess.in</a>).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-20 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Partner With Us</h2>
          <p className="text-gray-600 mb-10 text-lg">Looking for a reliable manufacturing partner for your next infrastructure project?</p>
          <Link to="/contact" className="inline-flex bg-brand-blue text-white px-8 py-4 rounded font-bold text-sm hover:bg-blue-800 transition-colors">
            CONTACT OUR TEAM
          </Link>
        </div>
      </div>
    </div>
  );
}
