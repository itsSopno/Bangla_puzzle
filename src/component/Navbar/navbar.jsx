import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#features" },
  { label: "Blog", href: "#pricing" },
  { label: "Terms", href: "#reviews" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a
          href="#"
          className="text-base font-extrabold tracking-[0.25em] text-slate-900 transition hover:opacity-80"
        >
          THETINY.SITE
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#login"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-xs transition hover:bg-slate-50 hover:border-slate-300"
          >
            Log In
          </a>
          <a
            href="#signup"
            className="rounded-xl bg-[#5b21f0] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4d19d6] active:scale-95"
          >
            Get Started Free
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 shadow-lg lg:hidden">
          <div className="flex flex-col space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-slate-700 hover:text-[#5b21f0]"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-slate-100">
              <a
                href="#login"
                onClick={() => setOpen(false)}
                className="w-full rounded-lg border border-slate-200 py-2.5 text-center text-sm font-semibold text-slate-800"
              >
                Log In
              </a>
              <a
                href="#signup"
                onClick={() => setOpen(false)}
                className="w-full rounded-xl bg-[#5b21f0] py-2.5 text-center text-sm font-semibold text-white shadow-sm"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
