import { Star } from "lucide-react";

const reviews = [
  {
    quote: "This tool changed the way we share marketing campaigns. The analytics are crystal clear and lightning fast!",
    author: "Sarah Jenkins",
    role: "Head of Marketing at CloudFlow",
    rating: 5,
  },
  {
    quote: "Switching to this platform cut our link redirect latency by 60%. Custom domain setup took literally two minutes.",
    author: "Alex Morgan",
    role: "Senior Growth Lead at DevScale",
    rating: 5,
  },
  {
    quote: "The QR code generator and real-time click tracking give us instant feedback on every newsletter we send.",
    author: "Elena Rostova",
    role: "Product Designer & Creator",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-[#fbfcff] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="mx-auto max-w-6xl text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[#5b21f0]">
          TESTIMONIALS
        </span>
        <h2 className="mt-3 text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
          Loved by 80,000+ users worldwide.
        </h2>

        {/* Reviews Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <div
              key={r.author}
              className={`rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white p-7 text-left shadow-xs transition hover:shadow-md ${
                i === 0 ? "border-violet-200 ring-1 ring-violet-100" : ""
              }`}
            >
              {/* Star Rating */}
              <div className="flex gap-1 text-[#5b21f0]">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-[#5b21f0]" />
                ))}
              </div>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700">
                "{r.quote}"
              </p>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <h4 className="text-sm font-bold text-slate-900">{r.author}</h4>
                <p className="text-xs text-slate-500">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

