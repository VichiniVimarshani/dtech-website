export default function WhyChoose() {
  const advantages = [
    {
      title: "Authorized Installer",
      desc: "Certified experts in Hikvision systems.",
    },
    {
      title: "Genuine Products",
      desc: "100% original equipment with warranty assurance.",
    },
    {
      title: "Professional Team",
      desc: "Experienced technicians who prioritize neatness and safety.",
    },
    {
      title: "After-Sales Support",
      desc: "We are just a phone call away when you need us.",
    },
  ];

  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Highlighted Section */}
        <div className="rounded-2xl bg-gradient-to-br from-blue-950 via-blue-900 to-brandRed p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 opacity-20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
              The Dtech Advantage
            </h2>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {advantages.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-900/50">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}