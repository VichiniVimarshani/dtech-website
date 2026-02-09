import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-12">

          {/* Column 1: Brand & Socials */}
          <div className="lg:pr-8">
            <Link href="/" className="inline-block mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Dtech Solutions
              </h3>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Dtech Solutions provides professional surveillance and smart home security systems for businesses and homes island-wide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-8">
              <SocialLink href="https://www.facebook.com/" icon={<FaFacebookF />} />
              <SocialLink href="https://wa.me/94777060211" icon={<FaWhatsapp />} />
            </div>

            {/* Reviews / Trust */}
            <div className="text-sm">
              <p className="text-gray-400 mb-2">See our growing community on</p>
              <div className="flex items-center gap-3">
                <img
                  src="/dtech.jpeg"
                  alt="D-Tech Solutions"
                  className="h-10 w-auto bg-white/10 p-1 rounded"
                />
              </div>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="text-gray-500 uppercase text-xs tracking-wider font-semibold mb-6">Products</h4>
            <ul className="space-y-4 text-sm">
              <li><FooterLink href="/products-services">Hikvision Surveillance</FooterLink></li>
              <li><FooterLink href="/products-services">Imou Smart Home</FooterLink></li>
              <li><FooterLink href="/products-services">Networking Hardware</FooterLink></li>
              <li><FooterLink href="/products-services">Access Control</FooterLink></li>
              <li><FooterLink href="/products-services">Alarm Systems</FooterLink></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-gray-500 uppercase text-xs tracking-wider font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><FooterLink href="/index">Home</FooterLink></li>
              <li><FooterLink href="/about">About Us</FooterLink></li>
              <li><FooterLink href="/contact">Contact Us</FooterLink></li>
              <li><FooterLink href="/products-services">Our Services</FooterLink></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="text-gray-500 uppercase text-xs tracking-wider font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><FooterLink href="/#why-choose">Why Choose Us</FooterLink></li>
              <li><FooterLink href="/#brand-partners">Brand Partners</FooterLink></li>
              <li><FooterLink href="/about">Our Expertise</FooterLink></li>
              <li><FooterLink href="/contact">Support Center</FooterLink></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Dtech Solutions. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/vulnerability-report" className="hover:text-white transition">Report a Vulnerability</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Components
function FooterLink({ href, children }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition duration-200 block">
      {children}
    </Link>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300"
    >
      {icon}
    </a>
  );
}