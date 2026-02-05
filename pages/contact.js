import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Dtech Solutions | CCTV & Hikvision Installer in Negombo</title>
        <meta
          name="description"
          content="Contact Dtech Solutions for CCTV installation, Hikvision & Imou security systems, and network cabling services in Negombo."
        />
        <link rel="canonical" href="https://dtechsolutions.lk/contact" />
      </Head>

      <Navbar />

      <div className="min-h-screen bg-gray-50 pt-24 pb-12 font-sans text-slate-800">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get in Touch</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Have questions about our CCTV or networking solutions? We're here to help. Reach out to us directly or fill out the form below.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left Column: Contact Info & Map */}
            <div className="space-y-8">
              <div className="grid gap-6">

                {/* Address Card */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4 hover:shadow-md transition duration-300">
                  <div className="bg-blue-50 p-3 rounded-full text-blue-600 shrink-0">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <p className="text-slate-600 leading-relaxed">
                      119/23A, Thaladuwa Road,<br /> Negombo, Sri Lanka
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <a href="tel:0777060211" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4 hover:shadow-md transition duration-300 group">
                  <div className="bg-blue-50 p-3 rounded-full text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-slate-600 group-hover:text-blue-600 transition">077 706 0211</p>
                    <p className="text-sm text-slate-500 mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </a>

                {/* Email Card */}
                <a href="mailto:dtechsolutions@outlook.com" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4 hover:shadow-md transition duration-300 group">
                  <div className="bg-blue-50 p-3 rounded-full text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-slate-600 group-hover:text-blue-600 transition break-all">dtechsolutions@outlook.com</p>
                  </div>
                </a>
              </div>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-64">
                <iframe
                  className="w-full h-full"
                  src="https://maps.google.com/maps?q=119/23A%20Thaladuwa%20Road%20Negombo&t=&z=15&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Address (Requested Field) */}
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-slate-700 mb-2">Your Address</label>
                  <input
                    type="text"
                    id="address"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="City / Area"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message or Comment</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition transform hover:-translate-y-1 shadow-lg shadow-slate-900/20"
                >
                  Send Message
                </button>

                <div className="text-center pt-4">
                  <p className="text-sm text-slate-500">Or chat deeply directly on</p>
                  <a
                    href="https://wa.me/94777060211"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 mt-2"
                  >
                    <FaWhatsapp className="text-lg" /> WhatsApp
                  </a>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}