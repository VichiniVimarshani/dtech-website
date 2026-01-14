import { FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Company Info & Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Dtech Solutions
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for professional surveillance and smart home security solutions.
            </p>
            
            {/* Contact Info with Icons */}
            <div className="space-y-4">
              <a 
                href="https://maps.google.com/maps?q=119/23A%20Thaladuwa%20Road%20Negombo" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-300 hover:text-white transition group"
              >
                <div className="mt-1 p-2 rounded-lg bg-red-600/20 group-hover:bg-red-600/30 transition">
                  <FaMapMarkerAlt className="text-red-500 text-lg" />
                </div>
                <span className="flex-1">119/23A, Thaladuwa Road, Negombo</span>
              </a>
              
              <a 
                href="tel:0777060211" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition group"
              >
                <div className="p-2 rounded-lg bg-blue-600/20 group-hover:bg-blue-600/30 transition">
                  <FaPhone className="text-blue-400 text-lg" />
                </div>
                <span>077 706 0211</span>
              </a>
              
              <a 
                href="mailto:dtechsolutions@outlook.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition group"
              >
                <div className="p-2 rounded-lg bg-green-600/20 group-hover:bg-green-600/30 transition">
                  <FaEnvelope className="text-green-400 text-lg" />
                </div>
                <span>dtechsolutions@outlook.com</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="https://wa.me/94777060211"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <nav className="space-y-3">
              <Link 
                href="/" 
                className="block text-gray-400 hover:text-white transition hover:translate-x-2 duration-300 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 transition"></span>
                <span>Home</span>
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-400 hover:text-white transition hover:translate-x-2 duration-300 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 transition"></span>
                <span>About Us</span>
              </Link>
              <Link 
                href="/products-services" 
                className="block text-gray-400 hover:text-white transition hover:translate-x-2 duration-300 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 transition"></span>
                <span>Products & Services</span>
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-400 hover:text-white transition hover:translate-x-2 duration-300 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 transition"></span>
                <span>Contact Us</span>
              </Link>
            </nav>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Find Us</h4>
            <div className="w-full">
              <iframe
                className="w-full h-64 rounded-lg border-2 border-gray-700 hover:border-red-500 transition"
                src="https://maps.google.com/maps?q=119/23A%20Thaladuwa%20Road%20Negombo&t=&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Dtech Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              Made by
              <a
                href="https://www.imaginxmedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition"
              >
              ImginX Media
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}