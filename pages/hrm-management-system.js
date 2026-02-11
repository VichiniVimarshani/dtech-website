import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function HRMManagementSystem() {
    return (
        <>
            <Head>
                <title>HR Management System | Complete Workforce & Payroll Automation</title>
                <meta
                    name="description"
                    content="Centralize employee information, automate attendance and payroll operations, and streamline HR workflows with our HR Management System."
                />
                <meta name="keywords" content="HRMS, Payroll Automation, Attendance Management, Employee Self-Service, HR Software Sri Lanka" />
                <link rel="canonical" href="https://dtechsolutions.lk/hrm-management-system" />
            </Head>

            <Navbar />

            {/* Hero Section */}
            <section
                className="relative pt-32 pb-20 bg-gray-900 bg-cover bg-center"
                style={{ backgroundImage: "url('/hrms 1.png')" }} // Reusing a professional hero image
            >
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">HR Management System</h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                        A Complete Workforce, Attendance & Payroll Automation Platform
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-brandRed text-white font-semibold rounded-full hover:bg-red-700 transition shadow-lg"
                        >
                            Request a Demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-brandRed pl-4">Introduction</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our HR Management System is a web-based enterprise solution designed to centralize employee information,
                                automate attendance and payroll operations, and streamline HR workflows.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                The system integrates biometric devices, mobile attendance, payroll automation, statutory compliance,
                                and employee self-service into a single secure platform. It enables organizations to manage the complete
                                employee lifecycle while providing management with real-time workforce visibility and employees with
                                direct access to their own HR services.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-2xl shadow-inner">
                            <h3 className="text-xl font-bold mb-4 text-brandRed">What It Does For You</h3>
                            <ul className="space-y-3">
                                {[
                                    "Automates manual HR, attendance, and payroll tasks",
                                    "Centralizes employee data in one secure system",
                                    "Ensures statutory compliance (EPF, ETF, APIT)",
                                    "Reduces payroll errors with system-driven processing",
                                    "Provides real-time workforce insights",
                                    "Enables employee self-service",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-brandRed mt-1">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Modules Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Modules</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive modules designed to handle every aspect of Human Resource Management.
                    </p>
                </div>
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Employee Management", icon: "👤" },
                        { title: "Attendance Management", icon: "🕒" },
                        { title: "Leave Management", icon: "📅" },
                        { title: "Payroll & Financials", icon: "💰" },
                        { title: "Loan & Advance", icon: "🏦" },
                        { title: "Performance Management", icon: "📈" },
                        { title: "Asset Management", icon: "💻" },
                        { title: "Self-Service Portal", icon: "📱" },
                    ].map((module, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center border border-gray-100">
                            <div className="text-4xl mb-4">{module.icon}</div>
                            <h3 className="font-bold text-gray-800">{module.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Main Features & Panels */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* HR Panel */}
                        <div className="bg-gray-950 text-white p-10 rounded-3xl shadow-xl">
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 bg-brandRed rounded flex items-center justify-center text-sm">HR</span>
                                HR Panel Capabilities
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "Maintain complete employee profiles & documents",
                                    "Configure shifts, departments, and leave types",
                                    "Sync biometric and mobile attendance records",
                                    "Process payroll with automated calculations",
                                    "Generate payslips, letters, and payroll reports",
                                    "Manage loans, advances, and asset allocation",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <span className="text-brandRed text-lg">●</span>
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Employee Panel */}
                        <div className="bg-brandRed text-white p-10 rounded-3xl shadow-xl">
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 bg-white text-brandRed rounded flex items-center justify-center text-sm">ESS</span>
                                Employee Self-Service (ESS)
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "View attendance status and history",
                                    "Apply for leave, overtime, and corrections",
                                    "Download payslips and HR letters online",
                                    "View loan balances and salary history",
                                    "Track assigned goals and update progress",
                                    "Accept company assets digitally",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <span className="text-white opacity-60 text-lg">●</span>
                                        <span className="text-white/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12">Technology Stack</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {[
                            { name: "React", label: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                            { name: "Node.js", label: "Backend API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                            { name: "MySQL", label: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                            { name: "Flutter", label: "Mobile App", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
                            { name: "DigitalOcean", label: "Hosting", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" },
                            { name: "NGINX", label: "Deployment", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
                        ].map((tech, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center p-4 mb-4 hover:shadow-md transition-shadow">
                                    <img src={tech.icon} alt={tech.name} className="max-w-full max-h-full object-contain" />
                                </div>
                                <span className="font-bold text-gray-900">{tech.name}</span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest">{tech.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subcription & Delivered Solution */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-gray-100 rounded-3xl p-10 md:p-16 text-center">
                        <h2 className="text-3xl font-bold mb-6">Delivered Solution</h2>
                        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                            You receive a complete HR automation platform including Web-based System, ESS Portal, Mobile App, and Secure Cloud Deployment.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                            {[
                                "Biometric Device Integration",
                                "Payroll Automation Engine",
                                "Bank Transfer Export",
                                "Reporting Dashboards",
                                "User Training & Documentation",
                                "Technical Support",
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                                    <span className="text-green-500 font-bold">✓</span>
                                    <span className="font-medium text-gray-800">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Quick Links */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Is this a cloud-based system?", a: "Yes. The system is deployed on secure cloud infrastructure with automated backups." },
                            { q: "Does it support biometric attendance?", a: "Yes. Fingerprint and face recognition devices are supported with automatic data synchronization." },
                            { q: "Can employees access payslips online?", a: "Yes. Payslips are generated automatically and available through the Employee Portal." },
                            { q: "Does it support local payroll compliance?", a: "Yes. EPF, ETF, APIT and payroll rules are automated." },
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-lg mb-2 text-gray-900">{faq.q}</h3>
                                <p className="text-gray-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Footer Section */}
            <section className="py-20 bg-brandRed text-white text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-6">Ready to Automate Your HR?</h2>
                    <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        Contact us today for a free demonstration and customized solution for your organization.
                    </p>
                    <Link
                        href="/contact"
                        className="px-10 py-4 bg-white text-brandRed font-bold rounded-full hover:bg-gray-100 transition shadow-2xl"
                    >
                        Request a Free Demo
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
