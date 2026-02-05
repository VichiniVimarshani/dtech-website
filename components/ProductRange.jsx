export default function ProductRange({ full = false }) {
  // Determine if we are on the homepage to show the title differently or not
  // But for now, we just stick to the design.

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Product Range</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Category 1: Hikvision */}
          <Card
            title="Professional Surveillance (Hikvision)"
            audience="Commercial, Enterprise, Warehouses, Large Homes"
            image="/analog camera.png"
            items={[
              "Analog HD & IP Camera Systems",
              "NVR & DVR Recording Systems",
              "ColorVu (Full Color Night Vision)",
              "AcuSense (Smart AI Detection)",
              "Commercial & Enterprise-grade Solutions",
            ]}
            showAll
          />

          {/* Category 2: Imou */}
          <Card
            title="Smart Home Security (Imou)"
            audience="Apartments, Small Offices, Smart Homes"
            image="/wifi camera.png"
            items={[
              "Wi-Fi Indoor & Outdoor Cameras",
              "Smart AI Human Detection",
              "Two-way Audio Talk",
              "Mobile App Monitoring: Easy remote viewing via smartphone.",
            ]}
            showAll
          />

          {/* Category 3: Accessories & Networking */}
          <Card
            title="Essential Accessories & Networking Hardware"
            audience="All Installations"
            image="/assesories.png" // Placeholder until generated or provided
            items={[
              "Surveillance Grade Hard Disks",
              "CCTV Power Supplies & Adapters",
              "Network Switches, Racks & Server Cabinets",
              "High-quality CAT6 / CAT5e Cabling",
              "Heavy-duty Camera Mounts & Housings"
            ]}
            showAll={!full}
          />
        </div>

        {!full && (
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Visit the Products & Services page for the complete breakdown.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function Card({ title, audience, items, image, showAll }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col h-full">
      {image && (
        <div className="h-48 w-full bg-gray-100 flex items-center justify-center p-4">
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        {audience && (
          <p className="text-sm text-gray-500 mb-4">
            <span className="font-semibold text-gray-600">Target Audience:</span> {audience}
          </p>
        )}
        <ul className="space-y-2 text-gray-700 flex-1">
          {items.map((i) => (
            <li key={i}>• {i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}