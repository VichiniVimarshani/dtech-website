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
      <section className="pt-24 pb-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Products & Services</h1>
          <p className="text-gray-600 mt-2">
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