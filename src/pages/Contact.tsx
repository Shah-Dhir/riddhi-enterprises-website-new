import { useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { BUSINESS_INFO, PRODUCTS, generateWhatsAppLink } from "../config/business";
import { Mail, Phone, MapPin, MessageSquare, Clock, CheckCircle2 } from "lucide-react";

export function Contact() {
  const location = useLocation();
  const prefilledProduct = (location.state as { product?: string } | null)?.product || "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [selectedProduct, setSelectedProduct] = useState(prefilledProduct);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    company: string;
    phone: string;
    email: string;
    product: string;
    message: string;
    url: string;
  } | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const product = String(formData.get("product") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const lines = [
      "📋 *New Enquiry - Riddhi Enterprises*",
      "",
      `👤 *Name:* ${name}`,
      company ? `🏢 *Company:* ${company}` : null,
      `📞 *Phone:* ${phone}`,
      `✉️ *Email:* ${email}`,
      product ? `📦 *Product:* ${product}` : null,
      "",
      "💬 *Requirement / Message:*",
      message,
      "",
      "---",
      "Sent via Riddhi Enterprises Website"
    ]
      .filter((line) => line !== null)
      .join("\n");

    const whatsappUrl = generateWhatsAppLink(lines);

    setSubmittedData({
      name,
      company,
      phone,
      email,
      product,
      message,
      url: whatsappUrl,
    });

    // Attempt to open WhatsApp directly
    try {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } catch {
      // Browser popup blocker might intervene; the success UI provides direct button
    }

    setSubmitStatus("success");
    setIsSubmitting(false);
    form.reset();
  };

  return (
    <div className="w-full bg-gray-50">
      <div className="bg-gray-900 py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Contact Riddhi Enterprises</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Get in touch with our team for enquiries, technical details, and project quotations.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
             <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                   <div className="flex items-start">
                      <div className="h-10 w-10 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center shrink-0 mr-4">
                         <Phone className="h-5 w-5" />
                      </div>
                      <div>
                         <p className="text-sm font-semibold text-gray-500 uppercase">Phone / WhatsApp</p>
                         <a href={`tel:${BUSINESS_INFO.phone}`} className="text-lg font-bold text-gray-900 hover:text-brand-blue transition-colors block mt-1">
                            {BUSINESS_INFO.phone}
                         </a>
                      </div>
                   </div>
                   
                   <div className="flex items-start">
                      <div className="h-10 w-10 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center shrink-0 mr-4">
                         <Mail className="h-5 w-5" />
                      </div>
                      <div>
                         <p className="text-sm font-semibold text-gray-500 uppercase">Email</p>
                         <a href={`mailto:${BUSINESS_INFO.email}`} className="text-gray-900 font-medium hover:text-brand-blue transition-colors block mt-1 break-all">
                            {BUSINESS_INFO.email}
                         </a>
                      </div>
                   </div>
                   
                   <div className="flex items-start">
                      <div className="h-10 w-10 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center shrink-0 mr-4">
                         <Clock className="h-5 w-5" />
                      </div>
                      <div>
                         <p className="text-sm font-semibold text-gray-500 uppercase">Business Hours</p>
                         <p className="text-gray-900 font-medium mt-1">{BUSINESS_INFO.businessHours}</p>
                      </div>
                   </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-100">
                   <a 
                     href={`https://wa.me/${BUSINESS_INFO.whatsappClean}`} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold transition-colors shadow-sm"
                   >
                     <MessageSquare className="h-5 w-5 mr-2" /> Chat on WhatsApp
                   </a>
                </div>
             </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-xl border border-gray-200 shadow-sm">
             <div className="flex items-center justify-between mb-6">
               <div>
                 <h2 className="text-2xl font-heading font-bold text-gray-900">Send an Enquiry</h2>
                 <p className="text-sm text-gray-500 mt-1">Submit your requirement to connect immediately with our team on WhatsApp.</p>
               </div>
               <div className="hidden sm:flex items-center bg-green-50 border border-green-200 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                 <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                 WhatsApp Connected
               </div>
             </div>
             
             {submitStatus === "success" && submittedData ? (
               <div className="bg-green-50/70 border border-green-200 rounded-xl p-8 text-center flex flex-col items-center justify-center min-h-[380px]">
                 <div className="h-16 w-16 bg-green-500 text-white rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-500/20">
                   <CheckCircle2 className="h-9 w-9" />
                 </div>
                 <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">Enquiry Sent to WhatsApp!</h3>
                 <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
                   Your enquiry details have been prepared and WhatsApp opened. If the WhatsApp window did not open automatically, please click below:
                 </p>
                 
                 <div className="bg-white border border-green-200 rounded-lg p-5 text-left w-full max-w-md mb-6 shadow-sm text-sm space-y-2 text-gray-700">
                   <div className="flex justify-between border-b border-gray-100 pb-1.5">
                     <span className="text-gray-500 font-medium">Name:</span>
                     <span className="font-semibold text-gray-900">{submittedData.name}</span>
                   </div>
                   {submittedData.company && (
                     <div className="flex justify-between border-b border-gray-100 pb-1.5">
                       <span className="text-gray-500 font-medium">Company:</span>
                       <span className="font-semibold text-gray-900">{submittedData.company}</span>
                     </div>
                   )}
                   <div className="flex justify-between border-b border-gray-100 pb-1.5">
                     <span className="text-gray-500 font-medium">Phone:</span>
                     <span className="font-semibold text-gray-900">{submittedData.phone}</span>
                   </div>
                   <div className="flex justify-between border-b border-gray-100 pb-1.5">
                     <span className="text-gray-500 font-medium">Email:</span>
                     <span className="font-semibold text-gray-900">{submittedData.email}</span>
                   </div>
                   {submittedData.product && (
                     <div className="flex justify-between border-b border-gray-100 pb-1.5">
                       <span className="text-gray-500 font-medium">Product:</span>
                       <span className="font-semibold text-gray-900">{submittedData.product}</span>
                     </div>
                   )}
                   <div className="pt-2 text-xs text-gray-600">
                     <span className="font-semibold text-gray-800 block mb-1">Requirement:</span>
                     <p className="bg-gray-50 p-2.5 rounded border border-gray-100 italic">{submittedData.message}</p>
                   </div>
                 </div>

                 <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                   <a
                     href={submittedData.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex-1 inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-lg font-bold text-sm shadow-md transition-colors"
                   >
                     <MessageSquare className="h-4 w-4 mr-2" />
                     Open WhatsApp Chat
                   </a>
                   <button 
                     type="button"
                     onClick={() => {
                       setSubmitStatus("idle");
                       setSubmittedData(null);
                     }}
                     className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3.5 rounded-lg font-semibold text-sm transition-colors"
                   >
                     Send Another Enquiry
                   </button>
                 </div>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid md:grid-cols-2 gap-6">
                   <div>
                     <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                     <input required type="text" id="name" name="name" placeholder="e.g. Rajesh Kumar" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" />
                   </div>
                   <div>
                     <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                     <input type="text" id="company" name="company" placeholder="e.g. Acme Infra Ltd." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" />
                   </div>
                 </div>
                 
                 <div className="grid md:grid-cols-2 gap-6">
                   <div>
                     <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone / WhatsApp Number *</label>
                     <input required type="tel" id="phone" name="phone" placeholder="e.g. +91 98765 43210" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" />
                   </div>
                   <div>
                     <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                     <input required type="email" id="email" name="email" placeholder="e.g. name@company.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" />
                   </div>
                 </div>
                 
                 <div>
                   <label htmlFor="product" className="block text-sm font-semibold text-gray-700 mb-2">Product of Interest</label>
                   <select 
                     id="product" 
                     name="product" 
                     value={selectedProduct}
                     onChange={(e) => setSelectedProduct(e.target.value)}
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-white"
                   >
                     <option value="">Select a product...</option>
                     {PRODUCTS.map((prod) => (
                       <option key={prod.id} value={prod.name}>
                         {prod.name}
                       </option>
                     ))}
                     <option value="Custom Requirement">Custom Requirement / Fabrication</option>
                     <option value="Other">Other Product</option>
                   </select>
                 </div>
                 
                 <div>
                   <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message / Requirement *</label>
                   <textarea 
                     required 
                     id="message" 
                     name="message" 
                     rows={4} 
                     placeholder="Please specify thickness, finish (HDG, GI, Powder Coated), dimensions, quantity, or project requirements..."
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all resize-none"
                   ></textarea>
                 </div>
                 
                 {submitStatus === "error" && (
                   <p className="text-red-600 text-sm font-medium">There was an error sending your message. Please try again or contact us directly on WhatsApp.</p>
                 )}
                 
                 <div>
                   <button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-md hover:shadow-green-600/30 disabled:opacity-70 flex justify-center items-center text-base"
                   >
                     <MessageSquare className="h-5 w-5 mr-2" />
                     {isSubmitting ? "PREPARING WHATSAPP..." : "SEND ENQUIRY ON WHATSAPP"}
                   </button>
                   <p className="text-xs text-center text-gray-500 mt-2.5 flex items-center justify-center">
                     <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                     Your enquiry will open directly in WhatsApp ({BUSINESS_INFO.phone}) for immediate response
                   </p>
                 </div>
               </form>
             )}
          </div>
          
        </div>
      </div>
      
      {/* Maps */}
      <div className="bg-white py-20 border-t border-gray-200">
         <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">Our Locations</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
                  <div className="p-6 bg-gray-50 border-b border-gray-200 flex-grow">
                     <h3 className="font-bold text-lg mb-2 flex items-center text-gray-900">
                        <MapPin className="h-5 w-5 mr-2 text-brand-blue" />
                        Office
                     </h3>
                     <p className="text-gray-600 mb-4">{BUSINESS_INFO.officeAddress}</p>
                  </div>
                  <div className="bg-gray-200 h-64 w-full relative flex items-center justify-center">
                     {/* Google Maps Embed Placeholder */}
                     <span className="text-gray-500 font-medium">[Office Map Placeholder]</span>
                     <a href={BUSINESS_INFO.googleMaps.office} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/40 transition-opacity">
                        <span className="bg-white text-gray-900 px-6 py-3 rounded font-bold">Get Directions</span>
                     </a>
                  </div>
               </div>
               
               <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
                  <div className="p-6 bg-gray-50 border-b border-gray-200 flex-grow">
                     <h3 className="font-bold text-lg mb-2 flex items-center text-gray-900">
                        <MapPin className="h-5 w-5 mr-2 text-brand-blue" />
                        Factory
                     </h3>
                     <p className="text-gray-600 mb-4">{BUSINESS_INFO.factoryAddress}</p>
                  </div>
                  <div className="bg-gray-200 h-64 w-full relative flex items-center justify-center">
                     {/* Google Maps Embed Placeholder */}
                     <span className="text-gray-500 font-medium">[Factory Map Placeholder]</span>
                     <a href={BUSINESS_INFO.googleMaps.factory} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/40 transition-opacity">
                        <span className="bg-white text-gray-900 px-6 py-3 rounded font-bold">Get Directions</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
