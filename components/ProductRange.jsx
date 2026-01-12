import { FaToolbox } from "react-icons/fa";

export default function ProductRange({ full = false }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Product Range</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card
            title="Professional Surveillance (Hikvision)"
            audience="Commercial, Enterprise, Warehouses, Large Homes"
            items={[
              "Analog HD & IP Camera Systems",
              "NVR & DVR Recording Systems",
              "ColorVu (Full Color Night Vision)",
              "AcuSense (Smart AI Detection)",
              "Commercial & Enterprise-grade Solutions",
            ]}
            showAll
          />

          <Card
            title="Smart Home Security (Imou)"
            audience="Apartments, Small Offices, Smart Homes"
            items={[
              "Wi-Fi Indoor & Outdoor Cameras",
              "Smart AI Human Detection",
              "Two-way Audio Talk",
              "Mobile App Monitoring: Easy remote viewing via smartphone.",
            ]}
            showAll
          />

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <FaToolbox className="text-3xl text-brandRed" />
              <h3 className="font-bold text-xl">Essential Accessories & Networking Hardware</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Surveillance Grade Hard Disks</li>
              <li>• CCTV Power Supplies & Adapters</li>
              <li>• Network Switches, Racks & Server Cabinets</li>
              <li>• High-quality CAT6 / CAT5e Cabling</li>
              <li>• Heavy-duty Camera Mounts & Housings</li>
            </ul>

            {!full && (
              <p className="text-sm text-gray-500 mt-4">
                Visit the Products & Services page for the complete breakdown.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, audience, items, showAll }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">
        <span className="font-semibold text-gray-600">Target Audience:</span> {audience}
      </p>
      <ul className="space-y-2 text-gray-700">
        {items.map((i) => (
          <li key={i}>• {i}</li>
        ))}
      </ul>
    </div>
  );
}