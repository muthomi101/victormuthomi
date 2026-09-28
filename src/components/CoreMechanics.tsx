export function CoreMechanics() {
  const rows = [
    [
      {
        title: "Business Logic & Data Modeling",
        desc: "Turning real-world rules into clean logic. I take messy requirements and structure data properly from the ground up.",
      },
      {
        title: "Concurrency & Safety",
        desc: "Handling multiple requests and race conditions without breaking a sweat. State integrity under heavy load is non-negotiable.",
      },
    ],
    [
      {
        title: "Resilience",
        desc: "Building systems that take hits and recover gracefully instead of cascading into total failure.",
      },
      {
        title: "Testing",
        desc: "Writing tests not for arbitrary metrics, but to lock down behavior so code holds up under real-world conditions.",
      },
    ],
    [
      {
        title: "Pragmatism & Simplicity",
        desc: "No over-engineering or framework worship. I pick the most direct, practical tool to solve the problem and keep it moving.",
      },
      {
        title: "Debugging",
        desc: "Tracing execution straight to the source. I don't guess bugs; I find absolute truth in the code.",
      },
    ],
  ];

  return (
    <section className="space-y-8">
      {/* Section Header with Blinking Cursor */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 font-mono">
          <span>Core Mechanics</span>
          <span className="inline-block w-2 h-5 bg-zinc-400 animate-pulse"></span>
        </h2>
        <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
          How I Operate & Build Systems
        </p>
      </div>

      {/* 3x2 Table Container (3 Rows, 2 Columns) with Rounded Edges and Borders */}
      <div className="rounded-2xl border border-zinc-800/80 overflow-hidden bg-[#09090e] shadow-2xl">
        <table className="w-full border-collapse font-mono text-left">
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={
                  rowIndex !== rows.length - 1
                    ? "border-b border-zinc-800/80"
                    : ""
                }
              >
                {row.map((item, colIndex) => {
                  const globalIndex = rowIndex * 2 + colIndex + 1;
                  return (
                    <td
                      key={item.title}
                      className={`p-6 md:p-8 align-top transition-colors hover:bg-[#111116] group w-1/2 ${
                        colIndex !== row.length - 1
                          ? "border-r border-zinc-800/80"
                          : ""
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-[#E0234E] font-semibold">
                            0{globalIndex}
                          </span>
                        </div>
                        <h3 className="text-sm font-semibold text-white tracking-wide uppercase group-hover:text-[#E0234E] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
