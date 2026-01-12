import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import BrandPartners from "../components/BrandPartners";
import ProductRange from "../components/ProductRange";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import AboutShort from "../components/AboutShort";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dtech Solutions | Authorized Hikvision Installer & CCTV Services in Negombo</title>
        <meta
          name="description"
          content="Protect your home and business with Dtech Solutions. We provide genuine Hikvision CCTV, Imou smart cameras, and professional network cabling in Negombo. Call 077 706 0211."
        />
        <meta
          name="keywords"
          content="CCTV Installation Negombo, Hikvision Sri Lanka, Security Camera System, Network Cabling Services, Imou Smart Cameras, CCTV Maintenance, Home Security Systems"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dtechsolutions.lk/" />
      </Head>

      <Navbar />
      <HeroSlider />

      <BrandPartners />
      <ProductRange />
      <Services />
      <WhyChoose />
      <AboutShort />
      <Footer />
    </>
  );
}