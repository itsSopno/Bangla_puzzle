const stats = [
  { value: "100K+", label: "Links Created" },
  { value: "1M+", label: "Total Clicks" },
  { value: "180+", label: "Countries" },
  { value: "99.9%", label: "Uptime" },
];

const LockIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path strokeLinecap="round" d="M8 11V7a4 4 0 118 0v4" />
  </svg>
);

const TrendIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M15 7h6v6" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function Hero() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="bg-gradient-to-b from-[#f4f5fb] to-[#f8f9fc] px-4 pb-16 pt-12 sm:pb-24 sm:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-[#5b21f0]">
            <TrendIcon />
            Trusted by thousands of users
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-black sm:text-6xl">
            Shorten Your URL
            <span className="block text-[#5b21f0]">in seconds</span>
          </h1>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-xl text-base text-gray-500 sm:text-lg">
            Create short, memorable links that you can share anywhere. Track every click with
            powerful analytics.
          </p>
        </div>

        {/* Login card */}
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-gray-200 bg-white px-6 py-10 text-center shadow-xl shadow-violet-100/60 sm:px-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-[#5b21f0]">
            <LockIcon className="h-7 w-7" />
          </div>

          <h2 className="mt-6 text-xl font-bold text-black sm:text-2xl">Login to make your URL short</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-gray-500 sm:text-base">
            Sign in or create a free account to start shortening links, generating QR codes, and
            tracking every click in real time.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/login"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#5b21f0] px-6 py-3.5 font-semibold text-white transition hover:bg-[#4a14d6]"
            >
              <LockIcon className="h-4 w-4" />
              Login to Make URL
            </a>
            <a
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#5b21f0] bg-white px-6 py-3.5 font-semibold text-[#5b21f0] transition hover:bg-violet-50"
            >
              Sign Up Free
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ===== Stats band ===== */}
      <section className="bg-[#5b21f0] px-6 py-12 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div className="text-center" key={s.label}>
              <div className="text-3xl font-extrabold sm:text-5xl">{s.value}</div>
              <div className="mt-2 text-sm text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}