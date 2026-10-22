import { Link } from "react-router-dom";
import { PRODUCTS } from "../config/business";
import { ArrowRight } from "lucide-react";

export function Products() {
  return (
    <div className="w-full">
      <div className="bg-gray-900 py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our Products</h1>
          <p className="text-xl text-gray-400 max-w-2xl">Engineered metal cable support systems for safe, organized and reliable cable routing.</p>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col">
                <div className="h-56 overflow-hidden relative">
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-brand-blue text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-widest shadow-sm">
                      {product.badge}
                    </div>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold font-heading text-gray-900 mb-3">{product.name}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{product.description}</p>
                  <Link 
                    to={`/products/${product.id}`}
                    className="inline-flex items-center text-brand-blue font-bold text-sm uppercase tracking-wider hover:text-blue-800 transition-colors mt-auto"
                  >
                    View Specifications <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-20 bg-white border-t border-gray-200 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Need a custom dimension?</h2>
          <p className="text-gray-600 mb-10 text-lg">We manufacture customized products according to customer drawings and specific project requirements.</p>
          <Link to="/custom-manufacturing" className="inline-flex bg-brand-blue text-white px-8 py-4 rounded font-bold text-sm hover:bg-blue-800 transition-colors">
            CUSTOM MANUFACTURING
          </Link>
        </div>
      </div>
    </div>
  );
}
