import { ShieldCheck, Target, Search, FileSignature } from "lucide-react";
import { Link } from "react-router-dom";

export function Quality() {
  return (
    <div className="w-full">
      <div className="bg-gray-900 py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Quality & Certifications</h1>
          <p className="text-xl text-gray-400 max-w-2xl">Quality you can specify. Performance you can trust.</p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Our Quality Commitment</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                In critical infrastructure and industrial projects, failure is not an option. We manufacture our cable management systems with a strict focus on dimensional accuracy, material integrity, and long-term durability.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every batch undergoes thorough inspection to ensure it meets the technical specifications required by our clients and their engineering consultants.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Target, title: "Dimensional Accuracy", desc: "Precise manufacturing to ensure perfect fit during installation." },
                { icon: ShieldCheck, title: "Material Quality", desc: "Using high-grade steel for maximum load-bearing capacity." },
                { icon: Search, title: "Surface Finish", desc: "Rigorous checks on galvanization and coating thickness." },
                { icon: FileSignature, title: "Test Certificates", desc: "Provided for specific projects upon request." }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <item.icon className="h-8 w-8 text-brand-blue mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-blue rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl font-heading font-bold text-white mb-6">Certifications</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
               We maintain rigorous internal quality standards. Specific industry certifications and compliance documentation are available for major projects.
            </p>
            
            <div className="inline-block bg-white/10 border border-white/20 px-8 py-4 rounded-lg backdrop-blur-sm">
               <p className="text-white font-semibold italic">[ADD SPECIFIC CERTIFICATIONS HERE]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
