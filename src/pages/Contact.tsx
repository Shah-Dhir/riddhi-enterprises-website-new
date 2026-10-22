import { useState, type FormEvent } from "react";
import { BUSINESS_INFO } from "../config/business";
import { Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    // In a real app, this would submit to the Google Apps Script URL
    // const form = e.currentTarget;
    // const formData = new FormData(form);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
                     className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold transition-colors"
                   >
                     <MessageSquare className="h-5 w-5 mr-2" /> Chat on WhatsApp
                   </a>
                </div>
             </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-xl border border-gray-200 shadow-sm">
             <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Send an Enquiry</h2>
             
             {submitStatus === "success" ? (
               <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center h-full flex flex-col items-center justify-center min-h-[300px]">
                 <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                   <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                 </div>
                 <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                 <p>Thank you for contacting Riddhi Enterprises. Our team will review your requirement and contact you shortly.</p>
                 <button onClick={() => setSubmitStatus("idle")} className="mt-6 text-brand-blue font-semibold hover:underline">Send another enquiry</button>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid md:grid-cols-2 gap-6">
                   <div>
                     <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                     <input required type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" />
                   </div>
                   <div>
                     <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                     <input type="text" id="company" name="company" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" />
                   </div>
                 </div>
                 
                 <div className="grid md:grid-cols-2 gap-6">
                   <div>
                     <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                     <input required type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" />
                   </div>
                   <div>
                     <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                     <input required type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" />
                   </div>
                 </div>
                 
                 <div>
                   <label htmlFor="product" className="block text-sm font-semibold text-gray-700 mb-2">Product of Interest</label>
                   <select id="product" name="product" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-white">
                     <option value="">Select a product...</option>
                     <option value="Perforated Cable Tray">Perforated Cable Tray</option>
                     <option value="Ladder Tray">Ladder Tray</option>
                     <option value="Custom Requirement">Custom Requirement</option>
                     <option value="Other">Other Product</option>
                   </select>
                 </div>
                 
                 <div>
                   <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message / Requirement *</label>
                   <textarea required id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all resize-none"></textarea>
                 </div>
                 
                 {submitStatus === "error" && (
                   <p className="text-red-600 text-sm font-medium">There was an error sending your message. Please try again or contact us directly.</p>
                 )}
                 
                 <button 
                   type="submit" 
                   disabled={isSubmitting}
                   className="w-full bg-brand-blue hover:bg-blue-800 text-white font-bold py-4 rounded-lg transition-colors disabled:opacity-70 flex justify-center items-center"
                 >
                   {isSubmitting ? "SENDING..." : "SUBMIT ENQUIRY"}
                 </button>
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
