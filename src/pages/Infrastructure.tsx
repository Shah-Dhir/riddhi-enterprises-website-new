import { BUSINESS_INFO } from "../config/business";
import { Link } from "react-router-dom";

export function Infrastructure() {
  const processes = [
    { name: "Material Preparation", desc: "Selecting and preparing high-grade steel sheets based on project specifications." },
    { name: "Sheet Metal Fabrication", desc: "Precision cutting and punching for perforated trays and accessories." },
    { name: "Forming & Bending", desc: "Using advanced press brakes to form the structural profiles of the trays." },
    { name: "Welding", desc: "Robust welding for ladder trays and customized structural components." },
    { name: "Finishing", desc: "Applying Hot Dip Galvanization (HDG), powder coating, or other protective finishes." },
    { name: "Quality Inspection", desc: "Final checks for dimensions, coating thickness, and structural integrity." },
    { name: "Packing & Dispatch", desc: "Secure packaging for safe transport to project sites across India." }
  ];

  return (
    <div className="w-full">
      <div className="bg-gray-900 py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Infrastructure & Manufacturing</h1>
          <p className="text-xl text-gray-400 max-w-2xl">Modern fabrication capabilities located in Palghar, Maharashtra.</p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
             <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1565157147775-dbf263884144?q=80&w=1000&auto=format&fit=crop" 
                  alt="Manufacturing Facility" 
                  className="w-full rounded-2xl shadow-xl border border-gray-100"
                />
             </div>
             
             <div>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Our Manufacturing Facility</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Located at JP Colaco Industrial Estate in Vasai East, Palghar, our manufacturing infrastructure is equipped to handle large-scale production of cable management systems.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We control the entire fabrication process in-house, allowing us to maintain strict quality standards, accommodate custom dimensional requirements, and meet demanding project deadlines.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                   <p className="text-sm font-semibold text-gray-500 uppercase mb-2">Factory Address</p>
                   <p className="text-gray-900 font-medium">{BUSINESS_INFO.factoryAddress}</p>
                </div>
             </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">Manufacturing Process</h2>
             
             <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                {processes.map((process, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                     <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-blue text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <span className="text-sm font-bold">{index + 1}</span>
                     </div>
                     <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all">
                        <h3 className="font-bold text-gray-900 text-lg mb-2">{process.name}</h3>
                        <p className="text-sm text-gray-600">{process.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
      
      <div className="py-20 bg-gray-50 border-t border-gray-200 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Need custom fabrication for your project?</h2>
          <Link to="/contact" className="inline-flex bg-brand-blue text-white px-8 py-4 rounded font-bold text-sm hover:bg-blue-800 transition-colors mt-4">
            CONTACT OUR TEAM
          </Link>
        </div>
      </div>
    </div>
  );
}
