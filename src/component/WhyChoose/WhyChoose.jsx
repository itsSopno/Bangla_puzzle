import { Zap, BarChart3, Globe, QrCode, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Redirect URLs in less than 10ms with our low-latency global edge network.",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Track click sources, countries, browsers, operating systems, and UTM parameters.",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "High reliability with redundant servers distributed across 180+ countries.",
  },
  {
    icon: QrCode,
    title: "QR Codes",
    description: "Generate and download custom high-resolution QR codes for any link in one click.",
  },
  {
    icon: Shield,
    title: "Secure",
    description: "Enterprise-grade encryption, automated spam/phishing shields, and safe browsing.",
  },
  {
    icon: Clock,
    title: "Real-time Control",
    description: "Update destination URLs instantly anytime without changing the shared link.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
          Why Choose Our Platform?
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
          The all-in-one link management toolkit designed for modern creators.
        </p>

        {/* 6 Feature Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white p-7 text-left shadow-xs transition hover:border-violet-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-[#5b21f0]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

