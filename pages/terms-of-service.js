import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfService() {
    return (
        <>
            <Head>
                <title>Terms of Service | DTech Solution</title>
                <meta name="description" content="Terms of Service for DTech Solution." />
            </Head>

            <Navbar />

            <section className="pt-32 pb-20 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
                    <p className="text-gray-300">Effective Date: February 9, 2026</p>
                </div>
            </section>

            <section className="py-16 bg-white text-gray-800">
                <div className="max-w-4xl mx-auto px-6 space-y-8">

                    <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using this website, you agree to these Terms of Service. If you do not agree, please do not use the site.
                    </p>

                    <h2 className="text-2xl font-bold">2. Use of the Site</h2>
                    <p>You agree to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Use the site only for lawful purposes</li>
                        <li>Provide accurate information when communicating with us</li>
                        <li>Not attempt to disrupt or compromise site security</li>
                    </ul>

                    <h2 className="text-2xl font-bold">3. Intellectual Property</h2>
                    <p>
                        All content on this site (text, images, design) is owned or licensed by DTech Solution. You may not reuse or redistribute without permission.
                    </p>

                    <h2 className="text-2xl font-bold">4. Limitation of Liability</h2>
                    <p>
                        To the fullest extent permitted by law, DTech Solution is not liable for damages arising from use of the site.
                    </p>

                    <h2 className="text-2xl font-bold">5. Links to External Sites</h2>
                    <p>
                        We may link to third-party sites. We are not responsible for their content or policies.
                    </p>

                    <h2 className="text-2xl font-bold">6. Termination</h2>
                    <p>
                        We may suspend or terminate access at any time, for any reason, without notice.
                    </p>

                    <h2 className="text-2xl font-bold">7. Governing Law</h2>
                    <p>
                        These terms are governed by the laws of Sri Lanka.
                    </p>

                </div>
            </section>

            <Footer />
        </>
    );
}
