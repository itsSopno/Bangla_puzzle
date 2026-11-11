import { Check, BarChart2 } from "lucide-react";

export default function Growth() {
  return (
    <section id="features" className="bg-[#fcfcff] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5b21f0]">
              FEATURE
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Unlock powerful tools for serious growth.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              Scale your reach with AI-driven link analytics, customized branded domains, real-time geolocation tracking, and deep insights to maximize conversion.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Real-time analytics dashboard",
                "Custom branded short domains",
                "Advanced QR code customization",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-100 text-[#5b21f0]">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Purple Card Graphic */}
          <div className="relative">
            <div className="rounded-3xl bg-[#5b21f0] p-7 sm:p-9 text-white shadow-2xl shadow-violet-600/30">
              <div className="flex items-center justify-between border-b border-violet-400/40 pb-5">
                <div className="flex items-center gap-2">
                  <BarChart2 className="h-5 w-5 text-violet-200" />
                  <span className="text-sm font-semibold tracking-wide">
                    Link Analytics Dashboard
                  </span>
                </div>
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div className="mt-6 space-y-6">
                {/* Metric 1 */}
                <div className="flex items-baseline justify-between">
                  <span className="text-xs sm:text-sm text-violet-200">
                    Clicks in last 24 hours
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    1,428
                  </span>
                </div>

                {/* Metric 2 */}
                <div>
                  <div className="flex items-baseline justify-between text-xs sm:text-sm">
                    <span className="text-violet-200">Top country: United States</span>
                    <span className="font-bold text-white">74%</span>
                  </div>
                  <div className="mt-2 h-2.5 w-full rounded-full bg-violet-400/30 overflow-hidden">
                    <div className="h-full rounded-full bg-white transition-all duration-500 w-[74%]" />
                  </div>
                </div>

                {/* Metric 3 */}
                <div>
                  <div className="flex items-baseline justify-between text-xs sm:text-sm">
                    <span className="text-violet-200">Device: Mobile vs Desktop</span>
                    <span className="font-bold text-white">68% / 32%</span>
                  </div>
                  <div className="mt-2 h-2.5 w-full rounded-full bg-violet-400/30 overflow-hidden">
                    <div className="h-full rounded-full bg-violet-200 transition-all duration-500 w-[68%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

