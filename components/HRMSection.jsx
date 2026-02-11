import Link from "next/link";

export default function HRMSection() {
    const features = [
        { title: "Employee Information Management", desc: "Centralize all employee data and documents securely." },
        { title: "Attendance & Leave Management", desc: "Sync biometric data and manage leave requests effortlessly." },
        { title: "Payroll & Salary Processing", desc: "Automate EPF, ETF, and APIT calculations with precision." },
        { title: "Performance Tracking", desc: "Set goals and monitor workforce KPIs in real-time." },
        { title: "Secure Cloud-Based Access", desc: "Access your HR operations from anywhere, anytime." },
    ];

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    {/* Accent decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brandRed/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                    <div className="grid lg:grid-cols-2 items-center">
                        {/* Left side: Visual/Image */}
                        <div className="relative h-full min-h-[400px] bg-gray-900 overflow-hidden">
                            <img
                                src="/hrms.png" // Reusing a professional background
                                alt="HR Management System"
                                className="absolute inset-0 w-full h-full object-cover opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                            <div className="absolute inset-x-8 bottom-12">
                                <span className="inline-block px-3 py-1 bg-brandRed text-white text-xs font-bold uppercase tracking-widest rounded-md mb-4 leading-none">
                                    Digital Solutions
                                </span>
                                <h2 className="text-3xl font-bold text-white mb-4">
                                    HR Management System (HRMS)
                                </h2>
                                <p className="text-gray-300 leading-relaxed max-w-md">
                                    A complete workforce automation platform designed to streamline your business operations and empower your employees.
                                </p>
                            </div>
                        </div>

                        {/* Right side: Content */}
                        <div className="p-8 md:p-12 lg:p-16">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-brandRed pl-4">
                                Automate with HRMS
                            </h3>

                            <div className="grid gap-6 mb-10">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brandRed/10 flex items-center justify-center text-brandRed mt-1">
                                            <svg
                                                className="w-4 h-4"
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
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100">
                                <Link
                                    href="/hrm-management-system"
                                    className="px-8 py-3 bg-brandRed text-white font-semibold rounded-full hover:bg-blue-600 transition shadow-lg shadow-brandRed/20"
                                >
                                    Find more details
                                </Link>
                                <Link
                                    href="/contact"
                                    className="px-8 py-3 bg-blue-800 text-white font-semibold rounded-full hover:bg-brandRed transition border border-gray-200"
                                >
                                    Request a Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
