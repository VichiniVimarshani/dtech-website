import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-14">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 items-start">
        <div>
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="text-gray-300">119/23A, Thaladuwa Road, Negombo</p>
          <p className="text-gray-300 mt-2">
            Phone:{" "}
            <a href="tel:0777060211" className="text-white underline underline-offset-4">
              077 706 0211
            </a>
          </p>
          <p className="text-gray-300">
            Email:{" "}
            <a href="mailto:dtechsolutions@outlook.com" className="text-white underline underline-offset-4">
              dtechsolutions@outlook.com
            </a>
          </p>

          <div className="flex items-center gap-4 mt-6">
            {/* Replace # with your real Facebook page URL when ready */}
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/94777060211"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="w-full">
          <iframe
            className="w-full h-72 rounded-lg"
            src="https://maps.google.com/maps?q=119/23A%20Thaladuwa%20Road%20Negombo&t=&z=15&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 px-6">
        © {new Date().getFullYear()} Dtech Solutions. All rights reserved.
      </div>
    </footer>
  );
}