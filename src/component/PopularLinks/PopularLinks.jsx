import { useState } from "react";
import { Copy, Check, QrCode, X, Eye } from "lucide-react";

const initialLinks = [
  {
    id: 1,
    shortUrl: "https://thetiny.site/gh-trends",
    originalUrl: "https://github.com/trending?since=daily&spoken_language_code=en",
    clicks: "15.8k",
  },
  {
    id: 2,
    shortUrl: "https://thetiny.site/react-19",
    originalUrl: "https://react.dev/blog/2024/04/25/react-19-upgrade-guide-release-notes",
    clicks: "12.4k",
  },
  {
    id: 3,
    shortUrl: "https://thetiny.site/figma-ui",
    originalUrl: "https://figma.com/community/file/128392019/design-system-complete-tokens",
    clicks: "10.1k",
  },
  {
    id: 4,
    shortUrl: "https://thetiny.site/mdn-web",
    originalUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference",
    clicks: "9.5k",
  },
  {
    id: 5,
    shortUrl: "https://thetiny.site/saas-launch",
    originalUrl: "https://producthunt.com/posts/saas-growth-marketing-automation-suite",
    clicks: "8.2k",
  },
];

export default function PopularLinks() {
  const [copiedId, setCopiedId] = useState(null);
  const [activeQr, setActiveQr] = useState(null);

  const handleCopy = (id, text) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Most Popular Links
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500">
            Check out the most clicked links on our platform
          </p>
        </div>

        {/* Links List Card */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs divide-y divide-slate-100">
          {initialLinks.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5 hover:bg-slate-50/70 transition-colors"
            >
              {/* Left Column: Short URL & Target URL */}
              <div className="min-w-0 flex-1">
                <a
                  href={item.shortUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm sm:text-base font-semibold text-[#5b21f0] hover:underline truncate"
                >
                  {item.shortUrl}
                </a>
                <p className="mt-1 text-xs text-slate-400 truncate max-w-sm sm:max-w-md lg:max-w-xl">
                  {item.originalUrl}
                </p>
              </div>

              {/* Right Column: Clicks & Actions */}
              <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100/80 px-2.5 py-1 rounded-full">
                  <Eye className="h-3.5 w-3.5 text-slate-400" />
                  {item.clicks} clicks
                </span>

                <button
                  type="button"
                  onClick={() => handleCopy(item.id, item.shortUrl)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition active:scale-95 ${
                    copiedId === item.id
                      ? "bg-emerald-600 text-white"
                      : "bg-[#5b21f0] text-white hover:bg-[#4a14d6]"
                  }`}
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="h-3.5 w-3.5" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" /> Copy
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveQr(item)}
                  title="View QR Code"
                  className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition"
                >
                  <QrCode className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* QR Code Modal */}
      {activeQr && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl text-center">
            <button
              type="button"
              onClick={() => setActiveQr(null)}
              className="absolute right-4 top-4 rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-lg font-bold text-slate-900">QR Code</h3>
            <p className="mt-1 text-xs text-slate-500 truncate">{activeQr.shortUrl}</p>

            {/* QR display box */}
            <div className="mx-auto my-6 flex h-48 w-48 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-inner">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
                  activeQr.shortUrl
                )}`}
                alt="QR Code"
                className="h-full w-full object-contain"
              />
            </div>

            <button
              type="button"
              onClick={() => setActiveQr(null)}
              className="w-full rounded-xl bg-[#5b21f0] py-2.5 text-sm font-semibold text-white hover:bg-[#4a14d6]"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

