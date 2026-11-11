import { Lock, ArrowRight, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f9ff] via-[#f5f7fd] to-[#eff2fc] px-4 pt-12 pb-20 sm:pt-16 sm:pb-28">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-violet-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/90 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#5b21f0] shadow-xs">
          <TrendingUp className="h-4 w-4" />
          <span>Trusted by thousands of users</span>
        </div>

        {/* Main Title */}
        <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.15]">
          Shorten Your URL
          <span className="block text-[#5b21f0]">in seconds</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-lg text-slate-600 font-normal leading-relaxed">
          Transform long, clumsy links into sleek, powerful URLs in seconds.
          Track every click with real-time analytics and detailed insights.
        </p>

        {/* White Card Box */}
        <div className="mx-auto mt-10 max-w-xl rounded-2xl sm:rounded-3xl border border-slate-100 bg-white p-7 sm:p-10 text-center shadow-xl shadow-violet-900/5">
          {/* Lock Icon Circle */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-100/80 text-[#5b21f0]">
            <Lock className="h-7 w-7" />
          </div>

          <h2 className="mt-5 text-xl sm:text-2xl font-bold text-slate-900">
            Login to make your URL short
          </h2>

          <p className="mx-auto mt-3 max-w-md text-xs sm:text-sm leading-relaxed text-slate-500">
            Sign in or create a free account to start shortening links, generating QR codes, and tracking every click in real time.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#login"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#5b21f0] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-violet-600/20 transition hover:bg-[#4a14d6] active:scale-95"
            >
              <Lock className="h-4 w-4" />
              Login to Make URL
            </a>
            <a
              href="#signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#5b21f0] bg-white px-6 py-3 text-sm font-semibold text-[#5b21f0] transition hover:bg-violet-50 active:scale-95"
            >
              Sign Up Free
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
