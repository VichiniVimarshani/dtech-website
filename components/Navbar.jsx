import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/products-services", label: "Products & Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);
    router.events?.on("routeChangeStart", close);
    return () => router.events?.off("routeChangeStart", close);
  }, [router.events]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => (document.documentElement.style.overflow = "");
  }, [open]);

  const headerClass =
    "fixed top-0 left-0 w-full z-[60] transition-all duration-300 " +
    (scrolled
      ? "bg-white/95 backdrop-blur shadow-md text-gray-900"
      : "bg-transparent text-white");

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link href="/" className="text-xl sm:text-2xl font-bold tracking-wide select-none">
          Dtech<span className="text-brandRed">Solutions</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          {LINKS.map((l) => (
            <NavLink
              key={l.href}
              href={l.href}
              label={l.label}
              activePath={router.pathname}
              scrolled={scrolled}
            />
          ))}

          {/* Sticky CTA only AFTER scroll */}
          <a
            href="/contact"
            className={`ml-2 transition-all duration-300 ${
              scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <span className="inline-flex items-center bg-brandRed hover:bg-red-700 text-white px-5 py-2 rounded-md shadow transition">
              Request a Site Visit
            </span>
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-brandRed/70"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="text-2xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-[55] transition ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 right-0 z-[56] h-[100dvh] w-[86%] max-w-sm
                    transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}
                    ${scrolled ? "bg-white text-gray-900" : "bg-gray-950 text-white"} shadow-2xl`}
      >
        <div className="px-6 pt-20 pb-8 space-y-2">
          {LINKS.map((l) => (
            <MobileNavLink key={l.href} href={l.href} label={l.label} activePath={router.pathname} />
          ))}

          <a
            href="/contact"
            className={`block pt-4 transition-all duration-300 ${
              scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <span className="block bg-brandRed hover:bg-red-700 text-white text-center py-3 rounded-md shadow transition">
              Request a Site Visit
            </span>
          </a>

          <div className={`pt-6 text-sm ${scrolled ? "text-gray-600" : "text-gray-300"}`}>
            <p className="font-semibold">
              Call:{" "}
              <a className="text-brandRed" href="tel:0777060211">
                077 706 0211
              </a>
            </p>
            <p>
              Email:{" "}
              <a className="text-brandRed" href="mailto:dtechsolutions@outlook.com">
                dtechsolutions@outlook.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, label, activePath, scrolled }) {
  const isActive = activePath === href;

  return (
    <Link
      href={href}
      className={[
        "relative inline-block transition-colors duration-200",
        isActive ? (scrolled ? "text-brandRed" : "text-white") : "",
        scrolled ? "hover:text-brandRed" : "hover:text-white/90",
        "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-brandRed after:transition-all after:duration-300 after:ease-out",
        isActive ? "after:w-full" : "after:w-0 hover:after:w-full",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ href, label, activePath }) {
  const isActive = activePath === href;
  return (
    <Link
      href={href}
      className={[
        "block py-3 px-4 rounded-lg transition text-base",
        isActive ? "bg-brandRed text-white" : "hover:bg-white/10",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}