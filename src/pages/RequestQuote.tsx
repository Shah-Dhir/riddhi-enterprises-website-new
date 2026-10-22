import { useState, type FormEvent } from "react";
import { useLocation, Link } from "react-router-dom";
import { generateWhatsAppLink, BUSINESS_INFO } from "../config/business";
import { FileUp, MessageSquare } from "lucide-react";

export function RequestQuote() {
  const location = useLocation();
  const preSelectedProduct = location.state?.product || "";
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    // Google Apps Script integration point
    // const form = e.currentTarget;
    // const formData = new FormData(form);
    // fetch(BUSINESS_INFO.appsScriptUrl, { method: 'POST', body: formData })
    
    try {
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
    <div className="w-full bg-gray-50 pb-24">
      <div className="bg-gray-900 py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Request a Quotation</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Tell us what you need. We'll help you specify the right solution.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          
          <div className="p-8 border-b border-gray-100 bg-blue-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
             <div>
                <h2 className="text-lg font-bold text-gray-900">Your enquiry is handled directly by our technical team.</h2>
                <p className="text-sm text-gray-600">We typically respond to detailed enquiries within 2-4 hours.</p>
             </div>
             <a 
                href={generateWhatsAppLink("Hello Riddhi Enterprises, I need a quotation for")}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center justify-center bg-white border border-gray-300 hover:border-brand-blue text-gray-900 px-6 py-2.5 rounded-full font-bold text-sm transition-colors shadow-sm"
             >
                <MessageSquare className="h-4 w-4 mr-2 text-green-600" /> WhatsApp Instead
             </a>
          </div>

          <div className="p-8 md:p-12">
            {submitStatus === "success" ? (
               <div className="text-center py-12">
                 <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                   <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Requirement Submitted Successfully</h3>
                 <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">Thank you for considering Riddhi Enterprises. Our technical team will review your specifications and contact you shortly with quotation details.</p>
                 <Link to="/" className="text-brand-blue font-bold hover:underline">Return to Home</Link>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Contact Details */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">1. Contact Details</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input required type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company / Organization *</label>
                      <input required type="text" id="company" name="company" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                      <input required type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input required type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" />
                    </div>
                  </div>
                </div>

                {/* Product Requirements */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">2. Product Requirements</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="product" className="block text-sm font-semibold text-gray-700 mb-2">Primary Product *</label>
                      <select required id="product" name="product" defaultValue={preSelectedProduct} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-white">
                        <option value="">Select a product...</option>
                        <option value="Perforated Cable Tray">Perforated Cable Tray</option>
                        <option value="Ladder Tray">Ladder Tray</option>
                        <option value="Cable Trunking">Cable Trunking</option>
                        <option value="Strut Channel">Strut Channel</option>
                        <option value="Custom Manufacturing">Custom Manufacturing / Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700 mb-2">Estimated Quantity (Meters/Nos)</label>
                      <input type="text" id="quantity" name="quantity" placeholder="e.g. 500 Meters" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                     <div>
                        <label htmlFor="material" className="block text-sm font-semibold text-gray-700 mb-2">Material</label>
                        <select id="material" name="material" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-white text-sm">
                           <option value="">Not Sure</option>
                           <option value="Pre-Galvanized">Pre-Galvanized</option>
                           <option value="Mild Steel (MS)">Mild Steel (MS)</option>
                           <option value="Stainless Steel (SS)">Stainless Steel (SS)</option>
                           <option value="Aluminum">Aluminum</option>
                        </select>
                     </div>
                     <div>
                        <label htmlFor="finish" className="block text-sm font-semibold text-gray-700 mb-2">Finish</label>
                        <select id="finish" name="finish" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-white text-sm">
                           <option value="">Not Sure</option>
                           <option value="HDG (Hot Dip Galvanized)">HDG</option>
                           <option value="Powder Coated">Powder Coated</option>
                           <option value="Painted">Painted</option>
                        </select>
                     </div>
                     <div>
                        <label htmlFor="thickness" className="block text-sm font-semibold text-gray-700 mb-2">Thickness (mm)</label>
                        <input type="text" id="thickness" name="thickness" placeholder="e.g. 2.0" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-sm" />
                     </div>
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">3. Additional Details</h3>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Project Details & Specific Requirements *</label>
                    <textarea required id="message" name="message" rows={4} placeholder="Please provide details about width, height, or any special requirements..." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all resize-none"></textarea>
                  </div>
                  
                  <div className="p-6 bg-gray-50 border border-gray-200 border-dashed rounded-lg flex flex-col items-center justify-center text-center">
                     <FileUp className="h-8 w-8 text-gray-400 mb-3" />
                     <p className="text-sm font-semibold text-gray-700 mb-1">Have a drawing or BOQ?</p>
                     <p className="text-xs text-gray-500 mb-4">Upload feature requires backend integration. For now, please mention it in the message above and we will ask for it via email.</p>
                     {/* <input type="file" className="hidden" id="fileUpload" />
                     <label htmlFor="fileUpload" className="cursor-pointer bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-semibold hover:bg-gray-50">Select File</label> */}
                  </div>
                </div>
                
                {submitStatus === "error" && (
                  <p className="text-red-600 text-sm font-medium">There was an error submitting your requirement. Please try again or WhatsApp us directly.</p>
                )}

                <div className="pt-6 border-t border-gray-100">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto md:px-12 bg-brand-blue hover:bg-blue-800 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-brand-blue/30 disabled:opacity-70 flex justify-center items-center text-lg"
                  >
                    {isSubmitting ? "SUBMITTING..." : "SUBMIT REQUIREMENT"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
