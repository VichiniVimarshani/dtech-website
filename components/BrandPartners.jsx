export default function BrandPartners() {
  return (
    <section id="brand-partners" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Authorized Brand Partners</h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Dtech Solutions is an Authorized Hikvision Installer. We supply and install genuine products adhering to
          strict manufacturer standards for reliability, performance, and warranty assurance.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          <img src="/hikvision-logo.png" alt="Hikvision Logo" className="h-14 sm:h-16" />
          <img src="/imou-logo.png" alt="Imou Logo" className="h-14 sm:h-16" />
        </div>
      </div>
    </section>
  );
}