import Head from "next/head";
import Navbar from "../components/Navbar";
import BrandPartners from "../components/BrandPartners";
import ProductRange from "../components/ProductRange";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Footer from "../components/Footer";

export default function ProductsServices() {
  return (
    <>
      <Head>
        <title>CCTV Installation & Network Solutions | Hikvision & Imou Sri Lanka</title>
        <meta
          name="description"
          content="Expert CCTV installation, repair, and structured cabling services. Authorized partners for Hikvision and Imou security products. Commercial and residential solutions available."
        />
        <meta
          name="keywords"
          content="CCTV Installation Negombo, Hikvision Sri Lanka, Security Camera System, Network Cabling Services, Imou Smart Cameras, CCTV Maintenance, Home Security Systems"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dtechsolutions.lk/products-services" />
      </Head>

      <Navbar />

      {/* page header spacing for fixed navbar */}
      <section
        className="relative pt-32 pb-20 bg-gray-900 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-5.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white">Products & Services</h1>
          <p className="text-gray-200 mt-2 max-w-2xl mx-auto">
            Professional Hikvision surveillance and Imou smart home security — clearly separated and easy to compare.
          </p>
        </div>
      </section>

      <BrandPartners />
      <ProductRange full />
      <Services />
      <WhyChoose />
      <Footer />
    </>
  );
}