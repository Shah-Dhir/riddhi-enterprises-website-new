import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Factory, Zap, ShieldCheck, Clock, Settings, MapPin, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { BUSINESS_INFO, PRODUCTS, generateWhatsAppLink } from "../config/business";
import { cn } from "../lib/utils";

const HERO_SLIDES = [
  {
    image: "/images/hero-slide-1.jpg",
    badge: `Precision Fabrication • Est. ${BUSINESS_INFO.established}`,
    title: "Precision Cable Management Systems Built for Demanding Projects",
    description: `Since ${BUSINESS_INFO.established}, Riddhi Enterprises has been manufacturing reliable metal cable management solutions for contractors, EPC companies, builders, OEMs and infrastructure projects across India.`
  },
  {
    image: "/images/hero-slide-2.jpg",
    badge: "Complete Range • Certified Metal Trays & Trunking",
    title: "Engineered Cable Trays, Ducts & Trunking Fabricated to Specification",
    description: "Specialized manufacturing of perforated trays, ladder systems, wire mesh baskets, and enclosed cable trunking in customized gauges and finishes."
  },
  {
    image: "/images/hero-slide-3.jpg",
    badge: "Heavy Industrial Infrastructure • PAN-India Delivery",
    title: "Heavy-Duty Cable Support for Power Plants, Metros & Refineries",
    description: "High load-bearing capacity and superior corrosion resistance engineered for heavy electrical cabling in complex architectural and industrial facilities."
  }
];

export function Home() {
  const featuredProducts = PRODUCTS.slice(0, 2); // Perforated and Ladder Tray
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500); // Rotates every 4.5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };
  
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION WITH ROTATING IMAGES */}
      <section className="relative bg-gray-950 text-white min-h-[85vh] lg:min-h-[88vh] flex items-center pt-16 lg:pt-0 overflow-hidden group">
        {/* Rotating Background Images */}
        <div className="absolute inset-0 z-0">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              )}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className={cn(
                  "w-full h-full object-cover object-center transition-transform duration-10000 ease-out",
                  index === currentSlide ? "scale-105" : "scale-100"
                )}
              />
              {/* Darkening gradient overlay for high legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/40"></div>
              <div className="absolute inset-0 bg-black/25"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-6 border border-white/20 transition-all">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wider text-blue-100 uppercase">
                {HERO_SLIDES[currentSlide].badge}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.15] mb-6 text-white min-h-[140px] md:min-h-[180px] flex items-center">
              {HERO_SLIDES[currentSlide].title}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light min-h-[60px]">
              {HERO_SLIDES[currentSlide].description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/quote" 
                className="w-full sm:w-auto inline-flex justify-center items-center bg-brand-blue hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-brand-blue/30"
              >
                REQUEST A QUOTE
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsappClean}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-md font-bold text-sm tracking-wide transition-all border border-gray-200"
              >
                WHATSAPP US
              </a>
              <Link 
                to="/products" 
                className="hidden md:inline-flex justify-center items-center bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-md font-semibold text-sm tracking-wide transition-all border border-white/30 backdrop-blur-sm"
              >
                EXPLORE PRODUCTS
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel Controls (Next/Prev Arrows) */}
        <div className="absolute bottom-6 right-4 md:right-8 z-20 flex items-center space-x-2">
          <button
            id="hero-prev-slide-btn"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white border border-white/15 backdrop-blur-md transition-all hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            id="hero-next-slide-btn"
            onClick={nextSlide}
            aria-label="Next slide"
            className="p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white border border-white/15 backdrop-blur-md transition-all hover:scale-105"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-brand-blue text-white py-8 border-y border-blue-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-blue-800/50">
            <div className="px-4">
              <p className="text-3xl font-bold font-heading mb-1">{BUSINESS_INFO.established}</p>
              <p className="text-xs font-semibold tracking-wider text-blue-200 uppercase">Established</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-bold font-heading mb-1">PAN India</p>
              <p className="text-xs font-semibold tracking-wider text-blue-200 uppercase">Supply & Service</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-bold font-heading mb-1">Custom</p>
              <p className="text-xs font-semibold tracking-wider text-blue-200 uppercase">Manufacturing</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-bold font-heading mb-1">Fast</p>
              <p className="text-xs font-semibold tracking-wider text-blue-200 uppercase">Enquiry Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS (Perforated & Ladder) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Cable Management Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Engineered metal cable support systems for safe, organized and reliable cable routing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-64 md:h-80 overflow-hidden bg-gray-100">
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-gray-900 text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-widest shadow-sm">
                      {product.badge}
                    </div>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 text-2xl font-bold font-heading text-white">
                    {product.name}
                  </h3>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-gray-600 mb-8 leading-relaxed text-[15px]">
                    {product.description}
                  </p>
                  
                  <div className="mb-8 flex-grow">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4 border-b border-gray-100 pb-2">Key Benefits</h4>
                    <ul className="space-y-3">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-brand-blue mr-3 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-100 mt-auto">
                    <Link 
                      to={`/products/${product.id}`}
                      className="flex-1 flex justify-center items-center bg-gray-900 hover:bg-black text-white py-3 px-4 rounded font-semibold text-sm transition-colors"
                    >
                      View Details
                    </Link>
                    <Link 
                      to="/quote"
                      className="flex-1 flex justify-center items-center bg-brand-blue/10 hover:bg-brand-blue hover:text-white text-brand-blue py-3 px-4 rounded font-semibold text-sm transition-colors"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/products"
              className="inline-flex items-center justify-center border border-gray-300 bg-white hover:bg-gray-50 text-gray-900 px-8 py-3.5 rounded-md font-bold text-sm tracking-wide transition-all"
            >
              VIEW ALL PRODUCTS <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DEDICATED PERFORATED CABLE TRAY HIGHLIGHT SECTION */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="bg-gradient-to-tr from-gray-100 to-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-brand-blue text-white text-[11px] font-bold px-3.5 py-1.5 rounded uppercase tracking-wider shadow">
                  MOST REQUESTED • SPECIALIST PRODUCT
                </div>
                <img 
                  src={PRODUCTS[0].image} 
                  alt="Perforated Cable Tray - Riddhi Enterprises" 
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] md:h-[440px] object-contain rounded-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-500 font-medium px-2">
                <span>Precision punched pattern</span>
                <span>•</span>
                <span>Return flange rigidity</span>
                <span>•</span>
                <span>Up to 3.0 mm thickness</span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6">
              <div className="inline-block bg-blue-50 text-brand-blue font-bold text-xs uppercase px-3 py-1.5 rounded-md mb-4 tracking-wider">
                Priority Engineering Product
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                Perforated Cable Trays Engineered for Reliable Cable Management
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Riddhi Enterprises manufactures premium-grade perforated cable trays engineered for critical industrial and infrastructure electrical installations. Featuring precision ventilation slots to eliminate cable overheating and provide structured, secure cable routing.
              </p>

              {/* Technical Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8 bg-gray-50 p-5 rounded-xl border border-gray-200/80">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Materials</p>
                  <p className="text-sm font-bold text-gray-900">Pre-Galvanized, Mild Steel, Stainless Steel</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Finishes</p>
                  <p className="text-sm font-bold text-gray-900">HDG (Hot Dip Galvanized), Powder Coated</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Thickness Range</p>
                  <p className="text-sm font-bold text-gray-900">1.2 mm to 3.0 mm (Custom as per spec)</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Standard Lengths</p>
                  <p className="text-sm font-bold text-gray-900">2500 mm / 3000 mm</p>
                </div>
              </div>

              {/* Key Benefits List */}
              <ul className="space-y-2.5 mb-8">
                {[
                  "Superior natural air ventilation prevents cable overheating under heavy electrical loads",
                  "Continuous slotted pattern allows effortless cable tie-offs, drop-outs, and inspections",
                  "Formed return flanges deliver enhanced deflection resistance and long-span rigidity",
                  "Manufactured to exact project drawings and custom dimension requirements"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-brand-blue mr-3 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                <Link 
                  to="/quote" 
                  state={{ product: "Perforated Cable Tray" }}
                  className="flex-1 inline-flex justify-center items-center bg-brand-blue hover:bg-blue-700 text-white py-3.5 px-6 rounded-md font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-brand-blue/20"
                >
                  Get Perforated Cable Tray Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a 
                  href={generateWhatsAppLink("Hello Riddhi Enterprises, I am interested in your Perforated Cable Tray. Please share specifications and quotation details.")}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex justify-center items-center bg-white hover:bg-green-50 text-gray-900 hover:text-green-700 border-2 border-gray-200 hover:border-green-500 py-3.5 px-6 rounded-md font-bold text-sm tracking-wide transition-all"
                >
                  <MessageSquare className="h-4 w-4 mr-2 text-green-600" />
                  WhatsApp About This Product
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM MANUFACTURING BANNER */}
      <section className="bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-blue mix-blend-multiply opacity-50"></div>
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4ce5eb3e212?q=80&w=2000&auto=format&fit=crop" 
            alt="Custom Metal Fabrication" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-blue bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm mb-6 inline-block">Specialized Capability</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                Built to Your Drawing.<br />
                Manufactured to Your Requirement.
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
                We manufacture customized cable trays according to your drawings, specific dimensions, thickness, material, and project requirements.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Custom Width, Height & Thickness', 'Specific Material & Finish Options', 'Project-Specific Accessories'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mr-3" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/custom-manufacturing" className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-md font-bold text-sm transition-colors">
                  Learn More
                </Link>
                <Link to="/quote" className="bg-brand-blue text-white hover:bg-blue-700 px-6 py-3 rounded-md font-bold text-sm transition-colors">
                  Send Your Drawing
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="absolute -inset-4 border-2 border-dashed border-white/20 rounded-lg animate-[spin_60s_linear_infinite]"></div>
              <img 
                src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=800&auto=format&fit=crop" 
                alt="Engineering Drawing" 
                className="w-full h-[400px] object-cover rounded-lg shadow-2xl relative z-10 grayscale opacity-80 mix-blend-luminosity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY RIDDHI ENTERPRISES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Choose Riddhi Enterprises
            </h2>
            <p className="text-gray-600">
              A commitment to engineering precision, reliable manufacturing, and long-term business partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Quality-Focused", desc: "Products manufactured with strict attention to dimensional consistency and material requirements." },
              { icon: Settings, title: "Customized Solutions", desc: "Products developed precisely according to customer drawings and specific project requirements." },
              { icon: Zap, title: "Technical Understanding", desc: "Solutions designed around practical cable routing and real-world support requirements." },
              { icon: Factory, title: "Established Since 2005", desc: "A long-standing, stable manufacturing presence you can rely on for long-term projects." },
              { icon: Clock, title: "Responsive Handling", desc: "Our internal team follows up on qualified enquiries quickly to keep your project moving." },
              { icon: MapPin, title: "PAN India Service", desc: "Serving customers, contractors, and infrastructure projects across all of India." }
            ].map((feature, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-xl hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300 bg-gray-50/50 hover:bg-white group">
                <div className="h-12 w-12 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gray-50 border-t border-gray-200 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Ready to discuss your project requirements?</h2>
          <p className="text-gray-600 mb-10 text-lg">Our technical team is ready to evaluate your drawings and provide an accurate quotation.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/quote" className="w-full sm:w-auto bg-brand-blue text-white px-8 py-4 rounded font-bold text-sm hover:bg-blue-800 transition-colors">
              REQUEST A QUOTE
            </Link>
            <a href={`https://wa.me/${BUSINESS_INFO.whatsappClean}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white border border-gray-300 text-gray-900 px-8 py-4 rounded font-bold text-sm hover:bg-gray-50 transition-colors">
              WHATSAPP OUR TEAM
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
