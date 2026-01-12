import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";

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

      <section className="pt-24 pb-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-gray-600 mt-2">Professional CCTV & Networking Solutions in Negombo</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Address:</strong>
              <br />
              119/23A, Thaladuwa Road, Negombo
            </p>
            <p>
              <strong>Phone:</strong>
              <br />
              <a href="tel:0777060211" className="text-brandRed font-semibold">
                077 706 0211
              </a>
            </p>
            <p>
              <strong>Email:</strong>
              <br />
              <a href="mailto:dtechsolutions@outlook.com" className="text-brandRed font-semibold">
                dtechsolutions@outlook.com
              </a>
            </p>

            <a
              href="https://wa.me/94777060211"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-md shadow transition"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>

            <p className="text-sm text-gray-500">
              Tip: Embed your Google Business Profile map here (helps Local SEO for “CCTV near me”).
            </p>
          </div>

          <iframe
            className="w-full h-80 rounded-lg shadow"
            src="https://maps.google.com/maps?q=119/23A%20Thaladuwa%20Road%20Negombo&t=&z=15&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}