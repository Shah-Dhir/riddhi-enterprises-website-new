import { useParams, Link, Navigate } from "react-router-dom";
import { PRODUCTS, generateWhatsAppLink } from "../config/business";
import { CheckCircle2, ChevronRight, Download } from "lucide-react";

export function ProductDetail() {
  const { productId } = useParams();
  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="w-full bg-gray-50 pb-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center text-sm">
          <Link to="/" className="text-gray-500 hover:text-brand-blue">Home</Link>
          <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
          <Link to="/products" className="text-gray-500 hover:text-brand-blue">Products</Link>
          <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
          <span className="text-gray-900 font-semibold">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Product Image */}
            <div className="relative h-96 lg:h-auto bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
              <img 
                src={product.image} 
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full max-h-[500px] object-contain transition-transform duration-300 hover:scale-105"
              />
              {product.badge && (
                <div className="absolute top-6 left-6 z-10 bg-gray-900 text-white text-xs font-bold px-4 py-2 rounded uppercase tracking-widest shadow-sm">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{product.description}</p>

              <div className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4 border-b border-gray-100 pb-2">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <Link 
                  to="/contact" 
                  state={{ product: product.name }}
                  className="flex-1 flex justify-center items-center bg-brand-blue hover:bg-blue-800 text-white py-4 px-6 rounded font-bold text-sm tracking-wide transition-colors"
                >
                  CONTACT US ABOUT THIS
                </Link>
                <a 
                  href={generateWhatsAppLink(`Hello Riddhi Enterprises, I am interested in your ${product.name}. Please share technical specifications and details.`)}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-900 py-4 px-6 rounded font-bold text-sm tracking-wide transition-all"
                >
                  WHATSAPP US
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Applications */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
             <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">Typical Applications</h3>
             <ul className="space-y-3">
                {product.applications.map((app, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <div className="h-2 w-2 rounded-full bg-brand-blue mr-3"></div>
                    <span>{app}</span>
                  </li>
                ))}
             </ul>
          </div>

          {/* Technical Specs Placeholder */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
             <div className="flex justify-between items-end mb-6 border-b border-gray-100 pb-4">
                <h3 className="text-xl font-heading font-bold text-gray-900">Technical Specifications</h3>
                <span className="text-xs font-semibold text-gray-500 uppercase">Standard Range</span>
             </div>
             
             <div className="overflow-x-auto">
               <table className="w-full text-left text-sm text-gray-600">
                 <tbody className="divide-y divide-gray-100">
                   <tr>
                     <th className="py-3 font-semibold text-gray-900 w-1/3">Material</th>
                     <td className="py-3">Mild Steel, Pre-Galvanized Steel, Stainless Steel</td>
                   </tr>
                   <tr>
                     <th className="py-3 font-semibold text-gray-900">Finish</th>
                     <td className="py-3">Hot Dip Galvanized (HDG), Powder Coated, Painted</td>
                   </tr>
                   <tr>
                     <th className="py-3 font-semibold text-gray-900">Thickness</th>
                     <td className="py-3">0.8mm to 3.00mm <span className="text-gray-400 italic">(Available as per project requirement)</span></td>
                   </tr>
                   <tr>
                     <th className="py-3 font-semibold text-gray-900">Length</th>
                     <td className="py-3">Standard 2500 mm / 3000 mm</td>
                   </tr>
                 </tbody>
               </table>
             </div>

             <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-5 flex items-start">
                <div className="mr-4 text-brand-blue mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-blue mb-1">Custom Dimensions Available</h4>
                  <p className="text-sm text-gray-700">We manufacture customized products according to customer drawings. Confirm final specifications with our technical team.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
