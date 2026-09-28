export function Philosophy() {
  const items = [
    {
      tag: "As Above, So Below",
      desc: "My internal habits are clean because it dictates the systems I build.",
    },
    {
      tag: "The Choice",
      desc: "A conscious choice I made as a boy, and I've never looked back. This is my lifelong vocation.",
    },
    {
      tag: "Self-Taught",
      desc: "Everything I know comes from endless hours of building, breaking, failing, and figuring it out until the problem is solved.",
    },
    {
      tag: "The Method",
      desc: "Just-in-time learning and full-picture awareness. I don't memorize stacks; I learn what's needed to solve the problem at hand.",
    },
    {
      tag: "My Experience",
      desc: "A collection of lessons gathered from solving real problems and living life.",
    },
  ];

  return (
    <section className="space-y-8">
      {/* Section Header with Blinking Cursor */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 font-mono">
          <span>Philosophy</span>
          <span className="inline-block w-2 h-5 bg-zinc-400 animate-pulse"></span>
        </h2>
        <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
          Core Principles & Approach
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={item.tag}
            className={`bg-[#101014] border border-zinc-800/80 p-6 rounded-2xl space-y-3 transition-all duration-300 hover:border-zinc-700 hover:bg-[#131318] ${
              index === items.length - 1 ? "md:col-span-2" : ""
            }`}
          >
            <div className="text-xs uppercase tracking-widest font-semibold font-mono text-[#E0234E]">
              {item.tag}
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed font-mono">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* High-Impact Statement */}
      <div className="bg-[#101014] border-l-2 border-l-[#E0234E] border-y border-r border-zinc-800/80 p-6 md:p-8 rounded-r-2xl rounded-l-sm transition-all duration-300 hover:border-zinc-700">
        <p className="text-base md:text-lg text-white font-mono font-bold leading-relaxed tracking-tight">
          &ldquo;The best way to know what I can do isn&apos;t a
          resume—it&apos;s giving me a real problem and seeing how I solve
          it.&rdquo;
        </p>
      </div>
    </section>
  );
}
