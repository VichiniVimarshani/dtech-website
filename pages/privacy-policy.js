import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Privacy Policy | DTech Solution</title>
                <meta name="description" content="Privacy Policy for DTech Solution. Learn how we collect, use, and protect your data." />
            </Head>

            <Navbar />

            <section className="pt-32 pb-20 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
                    <p className="text-gray-300">Effective Date: February 9, 2026</p>
                </div>
            </section>

            <section className="py-16 bg-white text-gray-800">
                <div className="max-w-4xl mx-auto px-6 space-y-8">
                    <p>
                        At DTech Solution (“we”, “us”, “our”), your privacy matters. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data when you interact with our website.
                    </p>

                    <h2 className="text-2xl font-bold">1. Information We Collect</h2>

                    <h3 className="text-xl font-semibold mt-4">Automatically Collected Data</h3>
                    <p>When you visit our site, we may automatically collect:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Browser type and version</li>
                        <li>Device type and operating system</li>
                        <li>Pages visited and time spent</li>
                        <li>IP address and geolocation data (approximate)</li>
                        <li>Analytics data via third-party tools</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-4">User-Submitted Data</h3>
                    <p>You may choose to provide personal information when you:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Subscribe to a newsletter</li>
                        <li>Submit a contact form</li>
                        <li>Sign up for alerts</li>
                    </ul>
                    <p>Such data may include:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Messages or feedback</li>
                    </ul>

                    <h2 className="text-2xl font-bold">2. How We Use Your Data</h2>
                    <p>We may use collected information to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Improve website performance and user experience</li>
                        <li>Respond to your requests and inquiries</li>
                        <li>Send newsletters or updates (only with consent)</li>
                        <li>Analyze site usage trends</li>
                    </ul>

                    <h2 className="text-2xl font-bold">3. Cookies & Tracking</h2>
                    <p>We use cookies and similar tracking tools to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Enhance site performance</li>
                        <li>Remember your preferences</li>
                        <li>Provide analytics</li>
                    </ul>
                    <p>You can disable cookies in your browser settings, but this may affect site functionality.</p>

                    <h2 className="text-2xl font-bold">4. Disclosure to Third Parties</h2>
                    <p>We don’t sell personal data. We may share information with:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Service providers (e.g., analytics, hosting)</li>
                        <li>Legal authorities if required by law</li>
                    </ul>

                    <h2 className="text-2xl font-bold">5. Your Rights</h2>
                    <p>Depending on your location, you may have rights to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Access, correct, or delete your data</li>
                        <li>Restrict or object to data processing</li>
                        <li>Withdraw consent at any time</li>
                    </ul>

                    <h2 className="text-2xl font-bold">6. Updates to This Policy</h2>
                    <p>We may update this Privacy Policy from time to time. Changes become effective when posted on this page.</p>

                </div>
            </section>

            <Footer />
        </>
    );
}
