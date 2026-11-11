import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "FREE",
    price: "$0",
    period: "/month",
    description: "Great for individuals starting out",
    featured: false,
    buttonText: "Get Started Free",
    buttonHref: "#signup",
    features: [
      "Up to 100 links/month",
      "Basic click analytics",
      "Standard QR codes",
      "48-hour data history",
      "Community support",
    ],
  },
  {
    name: "PRO",
    price: "$9",
    period: "/month",
    description: "For creators, freelancers & power users",
    featured: true,
    buttonText: "Get Started Now",
    buttonHref: "#signup",
    features: [
      "Unlimited short links",
      "Detailed geo analytics",
      "Custom branded domains",
      "Dynamic QR codes",
      "30-day data history",
      "UTM builder included",
      "Priority 24/7 support",
    ],
  },
  {
    name: "ENTERPRISE",
    price: "$29",
    period: "/month",
    description: "For teams and growing businesses",
    featured: false,
    buttonText: "Get Enterprise",
    buttonHref: "#signup",
    features: [
      "Everything in Pro",
      "Team access (up to 10)",
      "Developer API access",
      "1-year data history",
      "Custom branded domain SSL",
      "Advanced fraud protection",
      "Dedicated support manager",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[#5b21f0]">
          PRICING
        </span>
        <h2 className="mt-3 text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
          Simple, transparent pricing.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
          Start free and scale as you grow. No hidden fees, cancel anytime.
        </p>

        {/* 3 Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-3xl p-8 text-left transition-all ${
                plan.featured
                  ? "bg-[#5b21f0] text-white shadow-2xl shadow-violet-600/30 scale-100 lg:-translate-y-2 lg:scale-105 z-10"
                  : "border border-slate-200 bg-white text-slate-900 shadow-xs hover:border-slate-300"
              }`}
            >
              <div>
                <span
                  className={`inline-block text-xs font-bold uppercase tracking-wider ${
                    plan.featured ? "text-violet-200" : "text-slate-500"
                  }`}
                >
                  {plan.name}
                </span>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black tracking-tight">
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      plan.featured ? "text-violet-200" : "text-slate-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <p
                  className={`mt-3 text-xs sm:text-sm ${
                    plan.featured ? "text-violet-100" : "text-slate-500"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Features List */}
                <ul className="mt-8 space-y-3.5 border-t border-slate-100 pt-6">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-xs sm:text-sm">
                      <div
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                          plan.featured
                            ? "bg-white/20 text-white"
                            : "bg-violet-100 text-[#5b21f0]"
                        }`}
                      >
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span className={plan.featured ? "text-white" : "text-slate-700"}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4">
                <a
                  href={plan.buttonHref}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition active:scale-95 ${
                    plan.featured
                      ? "bg-white text-[#5b21f0] shadow-sm hover:bg-violet-50"
                      : "bg-[#5b21f0] text-white hover:bg-[#4a14d6]"
                  }`}
                >
                  {plan.buttonText}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

