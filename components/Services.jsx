import { FaTools, FaNetworkWired, FaDraftingCompass, FaLifeRing } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaTools />,
      title: "Professional Installation",
      text:
        "Complete setup for Analog, IP, and Wi-Fi systems. We ensure clean cabling, optimal camera positioning, and full system configuration including user training.",
    },
    {
      icon: <FaNetworkWired />,
      title: "Network & Structured Cabling",
      text:
        "Reliable LAN solutions for offices and buildings. We specialize in server rack organization, labeling, and structured cabling to keep your business connected.",
    },
    {
      icon: <FaDraftingCompass />,
      title: "Customized Security Planning",
      text:
        "Every site is unique. We provide free site inspections and consultation to design a cost-effective, tailor-made security plan that fits your specific needs.",
    },
    {
      icon: <FaLifeRing />,
      title: "Maintenance & Support",
      text:
        "We don't just install and leave. We offer fault detection, troubleshooting, camera upgrades, and Annual Maintenance Contracts (AMC) to keep your system running 24/7.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col items-center text-center h-full"
            >
              <div className="text-brandRed text-4xl mx-auto mb-4">{s.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}