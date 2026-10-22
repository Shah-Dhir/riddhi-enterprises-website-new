/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { ScrollToTop } from "./components/ScrollToTop";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Industries } from "./pages/Industries";
import { CustomManufacturing } from "./pages/CustomManufacturing";
import { Quality } from "./pages/Quality";
import { Infrastructure } from "./pages/Infrastructure";
import { Contact } from "./pages/Contact";
import { RequestQuote } from "./pages/RequestQuote";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans bg-gray-50">
        <Header />
        <main className="flex-grow pt-[72px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/custom-manufacturing" element={<CustomManufacturing />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<RequestQuote />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
