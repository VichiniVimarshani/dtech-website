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
            full={full}
            items={[
              { label: "Analog HD & IP Camera Systems", img: "/product/image 1.png" },
              { label: "NVR & DVR Recording Systems", img: "/product/image 2.png" },
              { label: "ColorVu (Full Color Night Vision)", img: "/product/image 3.png" },
              { label: "AcuSense (Smart AI Detection)", img: "/product/image 4.png" },
              { label: "Commercial & Enterprise-grade Solutions", img: "/product/image 5.png" },
            ]}
          />

          {/* Category 2: Imou */}
          <Card
            title="Smart Home Security (Imou)"
            audience="Apartments, Small Offices, Smart Homes"
            image="/wifi camera.png"
            full={full}
            items={[
              { label: "Wi-Fi Indoor & Outdoor Cameras", img: "/product/image 6.png" },
              { label: "Smart AI Human Detection", img: "/product/image 7.png" },
              { label: "Two-way Audio Talk", img: "/product/image 8.png" },
              { label: "Mobile App Monitoring: Easy remote viewing via smartphone.", img: "/product/image 9.png" },
            ]}
          />

          {/* Category 3: Accessories & Networking */}
          <Card
            title="Essential Accessories & Networking Hardware"
            audience="All Installations"
            image="/assesories.png"
            full={full}
            items={[
              { label: "Surveillance Grade Hard Disks", img: "/product/image 10.png" },
              { label: "CCTV Power Supplies & Adapters", img: "/product/image 11.png" },
              { label: "Network Switches, Racks & Server Cabinets", img: "/product/image 12.png" },
              { label: "High-quality CAT6 / CAT5e Cabling", img: "/product/image 13.png" },
              { label: "Heavy-duty Camera Mounts & Housings", img: "/product/image 14.png" }
            ]}
          />
        </div>

        {!full && (
          <div className="text-center mt-12">
            <a href="/products-services" className="inline-block px-8 py-3 bg-brandRed text-white font-semibold rounded-full hover:bg-red-700 transition shadow-md">
              View All Products & Services
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Visit the Products & Services page for the complete breakdown and images.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function Card({ label, title, audience, items, image, description, buttons, full }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      {image && (
        <div className="h-48 w-full bg-gray-100 flex items-center justify-center p-4">
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/400x200?text=HRM+System'; }} // Fallback for image
          />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        {label && (
          <span className="text-xs font-bold text-brandRed uppercase tracking-wider mb-2 block">{label}</span>
        )}
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        {audience && (
          <p className="text-sm text-gray-500 mb-4">
            <span className="font-semibold text-gray-600">Target Users:</span> {audience}
          </p>
        )}

        {description && (
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            {description}
          </p>
        )}

        {full && items[0]?.img ? (
          <div className="grid grid-cols-2 gap-4 mt-auto">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-3 border border-gray-100 rounded-lg hover:shadow-md transition bg-gray-50">
                <div className="w-full aspect-square bg-white rounded-md flex items-center justify-center mb-3 p-2">
                  <img src={item.img} alt="" className="max-w-full max-h-full object-contain" />
                </div>
                <span className="text-sm font-semibold text-gray-800 leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        ) : (
          <ul className="space-y-2 text-gray-700 flex-1 mb-8">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span className="text-sm">{item.label}</span>
              </li>
            ))}
          </ul>
        )}

        {buttons && (
          <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-gray-100">
            {buttons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.href}
                className={`text-center py-2.5 rounded-md text-sm font-semibold transition ${btn.primary
                  ? "bg-brandRed text-white hover:bg-red-700 shadow-sm"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200"
                  }`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
