const stats = [
  { value: "100K+", label: "Links Created" },
  { value: "1M+", label: "Total Clicks" },
  { value: "180+", label: "Countries" },
  { value: "99.9%", label: "Uptime" },
];

export default function Stats() {
  return (
    <section className="bg-[#5b21f0] px-4 py-12 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl">
              {s.value}
            </div>
            <div className="mt-1.5 text-sm text-white/90">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}