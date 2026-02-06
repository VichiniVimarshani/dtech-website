import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About Dtech Solutions | Authorized Hikvision Installer in Negombo</title>
        <meta
          name="description"
          content="Learn about Dtech Solutions in Negombo — an Authorized Hikvision Installer providing genuine security products, Imou smart home devices, and structured cabling."
        />
        <link rel="canonical" href="https://dtechsolutions.lk/about" />
      </Head>

      <Navbar />

      {/* Header with Image */}
      <section
        className="relative pt-32 pb-20 bg-gray-900 bg-cover bg-center mb-12"
        style={{ backgroundImage: "url('/hero-7.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Who We Are</h1>
          <p className="text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Dtech Solutions was founded with a clear vision: to provide reliable, genuine, and high-quality security
            solutions to homes and businesses in Negombo and beyond. We understand that security is not just about
            installing cameras; it’s about peace of mind.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-3">Our Expertise</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We are proud to be an Authorized Hikvision Installer, a title that reflects our commitment to manufacturer
            standards and genuine product quality. From crystal-clear Hikvision surveillance systems to flexible Imou
            smart home devices and structured network cabling, we handle the technical details so you can focus on what
            matters most.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Our Promise</h2>
          <p className="text-gray-700 leading-relaxed">
            We don't believe in "install and forget." Our reputation is built on neat craftsmanship, transparent pricing,
            and dependable after-sales support. When you choose Dtech Solutions, you choose a partner dedicated to your
            safety.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}