export function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-fade-in relative">
      {/* Subtle ambient background glow */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>

      {/* Identity & Positioning */}
      <div className="lg:col-span-7 space-y-6 relative z-10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>BACKEND SOFTWARE ENGINEER</span>
          </div>

          {/* Animated Name */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-shimmer">
            Victor Muthomi
          </h1>

          <p className="text-lg text-zinc-400 font-mono flex items-center gap-2">
            <span>Alcodist</span>
            <span className="inline-block w-2 h-4 bg-zinc-400 animate-pulse"></span>
          </p>
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed max-w-xl font-mono">
          An enthusiastic engineer who loves taking on messy real world
          challenges and writing code to solve them. Driven by genuine curiosity
          and a relentless drive to build things that matter.
        </p>
      </div>

      {/* Colorful Terminal / Code Preview Card */}
      <div className="lg:col-span-5 bg-[#09090e] border border-zinc-800 rounded-2xl p-5 font-mono text-xs shadow-2xl relative z-10 transition-all duration-300 hover:border-zinc-700 group">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800 text-zinc-500">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block opacity-90 shadow-sm shadow-red-500/50"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block opacity-90 shadow-sm shadow-yellow-500/50"></span>
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block opacity-90 shadow-sm shadow-green-500/50"></span>
            <span className="text-zinc-300 ml-1 font-semibold">
              kernel.config.ts
            </span>
          </span>
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
            TS
          </span>
        </div>
        <div className="space-y-1 text-zinc-300 overflow-x-auto leading-relaxed">
          <p>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-yellow-300">solver</span> = &#123;
          </p>
          <p className="pl-4">
            name:{" "}
            <span className="text-emerald-400">&apos;Victor Muthomi&apos;</span>
            ,
          </p>
          <p className="pl-4">
            mindset:{" "}
            <span className="text-emerald-400">
              &apos;Enthusiastic problem solver&apos;
            </span>
            ,
          </p>
          <p className="pl-4">
            medium:{" "}
            <span className="text-emerald-400">&apos;Code & logic&apos;</span>
          </p>
          <p>&#125;;</p>
        </div>
      </div>
    </section>
  );
}
