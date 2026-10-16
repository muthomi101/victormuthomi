export function Projects() {
  const projects = [
    {
      id: "01",
      name: "MoJobs Engine",
      subtitle: "FINANCIAL MONOLITH & PAYMENT WEBHOOKS",
      stack: "Python / Django / PostgreSQL / Docker",
      description:
        "A high-integrity backend handling marketplace transactions, custom fee structures, and secure mobile money payment flows.",
      highlights: [
        "Exact-precision financial calculations using Python Decimal to eliminate floating-point rounding errors.",
        "M-Pesa STK Push payment webhooks with signature verification and idempotent payload processing.",
        "Modular monolith design with Role-Based Access Control (RBAC) across multi-tiered user roles.",
      ],
      backendRepo: "https://github.com/muthomi101/mojobs-backend",
      clientRepo: "https://github.com/Victormuthomi/MOjobs-frontend",
      liveUrl: "https://mojobs.vercel.app/",
    },
    {
      id: "02",
      name: "Rotaflow API",
      subtitle: "ALGORITHMIC WORKFORCE SCHEDULING",
      stack: "Node.js / Express / PostgreSQL / Docker",
      description:
        "An automated REST API engine designed to calculate and generate complex 4-week cyclical shift rotations for multi-role worker fleets.",
      highlights: [
        "Custom workforce rotation algorithm enforcing strict 3:1 work-to-rest cyclical shift schedules.",
        "Stateless JWT authentication paired with role-based route middleware guards.",
        "Complex relational database constraint handling and time-bound state management.",
      ],
      backendRepo: "https://github.com/muthomi101/rotaflow-backend",
      clientRepo: "https://github.com/Victormuthomi/rotaflow-frontend",
      liveUrl: "https://rotaflow-frontend.vercel.app/",
    },
    {
      id: "03",
      name: "Alcodist Hub Backend",
      subtitle: "HIGH-PERFORMANCE CLEAN ARCHITECTURE",
      stack: "Go (Golang) / Gin / MongoDB / CI/CD",
      description:
        "A concurrent Go REST API built following strict Clean Architecture principles, automated testing pipelines, and NoSQL aggregation.",
      highlights: [
        "Idiomatic Go Clean Architecture separating cmd/, internal/ (handlers, services, repositories), and api/.",
        "MongoDB Atlas integration using official Go BSON drivers with context execution timeouts.",
        "Automated unit and integration test execution (go test) wired into GitHub Actions CI pipelines.",
      ],
      backendRepo: "https://github.com/muthomi101/alcodist-hub-backend",
      clientRepo: "https://github.com/muthomi101/alcodist-hub",
      liveUrl: "https://alcodist-hub.vercel.app/",
    },
  ];

  return (
    <section className="space-y-8 font-mono">
      {/* Section Header with Blinking Cursor */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <span>Featured Systems</span>
          <span className="inline-block w-2 h-5 bg-zinc-400 animate-pulse"></span>
        </h2>
        <p className="text-xs text-zinc-500 uppercase tracking-widest">
          Production-Grade Systems & Architectures
        </p>
      </div>

      {/* Systems Container (Matching Core Mechanics Table Style) */}
      <div className="rounded-2xl border border-zinc-800/80 overflow-hidden bg-[#09090e] shadow-2xl divide-y divide-zinc-800/80">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 md:p-8 space-y-6 transition-colors hover:bg-[#111116] group"
          >
            {/* Header / ID & Stack */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/60 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-[#E0234E]">
                  {project.id}
                </span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">
                  {project.subtitle}
                </span>
              </div>
              <span className="text-xs text-zinc-400 bg-zinc-900 border border-zinc-800/80 px-2.5 py-1 rounded-md">
                {project.stack}
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white tracking-wide uppercase group-hover:text-[#E0234E] transition-colors">
                {project.name}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Core Architectural Highlights */}
            <div className="space-y-2 bg-[#050508] border border-zinc-800/60 rounded-xl p-4 text-xs">
              <span className="text-[#E0234E] font-semibold text-[10px] tracking-wider uppercase block mb-1">
                // Architectural Mechanics
              </span>
              <ul className="space-y-1.5 text-zinc-300 list-disc list-inside marker:text-[#E0234E]">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="leading-relaxed">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs">
              <div className="flex items-center gap-4">
                <a
                  href={project.backendRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-[#E0234E] transition-colors font-semibold"
                >
                  [Backend Repo]
                </a>
                <a
                  href={project.clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  [Client Repo]
                </a>
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E0234E] hover:underline font-semibold flex items-center gap-1 group/link"
              >
                <span>Live System Preview</span>
                <span className="transition-transform group-hover/link:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
