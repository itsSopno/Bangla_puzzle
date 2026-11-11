const stats = [
  { value: "100K+", label: "Links Created" },
  { value: "1M+", label: "Total Clicks" },
  { value: "180+", label: "Countries" },
  { value: "99.9%", label: "Uptime" },
];

export default function Stats() {
  return (
    <section className="bg-[#5b21f0] py-10 sm:py-12 px-4 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8 text-center">
          {stats.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <span className="text-3xl sm:text-5xl font-black tracking-tight">
                {item.value}
              </span>
              <span className="mt-2 text-xs sm:text-sm font-medium text-violet-100/90">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

