import { Link } from "react-router-dom";
import { ArrowRight, Activity, Building2, Flame, Droplet, Factory, Zap } from "lucide-react";

export function Industries() {
  const industries = [
    { name: "Petroleum & Oil and Gas", icon: Flame, description: "Heavy-duty ladder trays and robust support structures designed for extreme environments and high cable loads." },
    { name: "Heavy Engineering", icon: Factory, description: "Customized cable management systems built to support complex industrial machinery and manufacturing floors." },
    { name: "Pharmaceuticals", icon: Activity, description: "Clean, enclosed trunking and corrosion-resistant stainless steel solutions for hygienic environments." },
    { name: "Commercial Infrastructure", icon: Building2, description: "Aesthetic and space-efficient perforated trays and raceways for organized building management systems." },
    { name: "Chemical Plants", icon: Droplet, description: "Specialized protective coatings and HDG finishes to withstand corrosive industrial atmospheres." },
    { name: "Power & EPC", icon: Zap, description: "Reliable, high-capacity cable routing systems for power generation facilities and substations." }
  ];

  return (
    <div className="w-full">
      <div className="bg-gray-900 py-20 border-t border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1504917595217-d4ce5eb3e212?q=80&w=2000&auto=format&fit=crop" alt="Industrial Background" className="w-full h-full object-cover mix-blend-luminosity" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Industries We Serve</h1>
          <p className="text-xl text-gray-400 max-w-2xl">Cable management systems designed for critical installations across diverse sectors.</p>
        </div>
      </div>

      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all group">
                <div className="h-14 w-14 bg-gray-50 text-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <ind.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{ind.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{ind.description}</p>
                <Link to="/products" className="inline-flex items-center text-sm font-bold text-brand-blue uppercase tracking-wider group-hover:text-blue-800 transition-colors">
                  View Suitable Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
