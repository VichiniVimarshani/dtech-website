import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mlgwryeg");
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

      <div className="min-h-screen bg-gray-50 font-sans text-slate-800">

        {/* Header with Background Image */}
        <div
          className="relative bg-gray-900 bg-cover bg-center py-28 mb-12"
          style={{ backgroundImage: "url('/hero-8.png')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Have questions about our CCTV or networking solutions? We're here to help. Reach out to us directly or fill out the form below.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-12">


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

              {state.succeeded ? (
                <div className="text-center py-12 animate-fadeIn">
                  <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thanks for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
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
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                      placeholder="john@example.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Address (Requested Field) */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-slate-700 mb-2">Your Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                      placeholder="City / Area"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message or Comment</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-500 text-white font-bold py-4 rounded-xl transition transform hover:-translate-y-1 shadow-lg shadow-slate-900/20"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
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
              )}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}