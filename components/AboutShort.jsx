export default function AboutShort() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">About Dtech Solutions</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Based in Negombo, Dtech Solutions is a premier provider of security and networking infrastructure. As an
          Authorized Hikvision Installer, we specialize in bridging the gap between advanced technology and user-friendly
          security. Whether it's a smart home setup or a complex enterprise network, our mission is simple: to help you
          Protect, Connect, and Innovate with confidence.
        </p>
        <a href="/about" className="inline-block px-8 py-3 bg-brandRed text-white font-semibold rounded-full hover:bg-blue-700 transition shadow-md">
          For More Information
        </a>
      </div>
    </section>
  );
}