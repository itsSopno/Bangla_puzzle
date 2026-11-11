import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Terms", href: "/terms" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Esc chaple menu bondho
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Desktop size e gele mobile menu bondho
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="text-sm font-semibold tracking-[0.3em] text-black sm:text-base">
          THETINY.SITE
        </a>

        {/* Desktop links (center) */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-gray-600 transition hover:text-black">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop buttons (right) */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/login"
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition hover:bg-gray-50"
          >
            Log In
          </a>
          <a
            href="/register"
            className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-700"
          >
            Get Started Free
          </a>
        </div>

        {/* Hamburger / X (mobile + tablet) */}
        <button
          type="button"
          className="p-2 text-black lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-gray-200 bg-white px-6 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg text-black"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-3">
            <a
              href="/login"
              className="rounded-lg border border-gray-200 bg-white py-3 text-center font-medium text-black shadow-sm"
            >
              Log In
            </a>
            <a
              href="/register"
              className="rounded-lg bg-purple-600 py-3 text-center font-semibold text-white"
            >
              Get Started Free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}