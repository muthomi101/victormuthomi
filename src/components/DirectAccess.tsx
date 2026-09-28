import {
  LuGithub,
  LuMail,
  LuMessageSquare,
  LuBookOpen,
  LuArrowUpRight,
} from "react-icons/lu";

export function DirectAccess() {
  const links = [
    {
      name: "GitHub",
      value: "@muthomi101",
      href: "https://github.com/muthomi101",
      icon: LuGithub,
    },
    {
      name: "Email",
      value: "victormuthomi101@gmail.com",
      href: "mailto:victormuthomi101@gmail.com",
      icon: LuMail,
    },
    {
      name: "Signal",
      value: "+254 710 210 258",
      href: "https://signal.me/#p/+254710210258",
      icon: LuMessageSquare,
    },
    {
      name: "Knowledge Base",
      value: "Articles & TDDs",
      href: "https://alcodist-hub.vercel.app/blogs",
      icon: LuBookOpen,
    },
  ];

  return (
    <section className="space-y-4 font-mono">
      <div className="space-y-1">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-200 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E0234E]"></span>
          Direct Access
        </h2>
        <p className="text-xs text-zinc-500">
          Open for backend systems, architecture discussions, and engineering
          challenges.
        </p>
      </div>

      {/* 2 columns gives each card ample horizontal width for long emails */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group relative z-10 hover:z-30 p-4 rounded-xl bg-[#111116] border border-zinc-800/80 hover:border-zinc-700 hover:bg-[#16161c] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[#E0234E] shrink-0 group-hover:border-zinc-700 transition-colors">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">
                    {link.name}
                  </p>
                  <p className="text-xs text-zinc-500">{link.value}</p>
                </div>
              </div>
              <LuArrowUpRight
                size={16}
                className="text-zinc-600 group-hover:text-zinc-300 transition-colors shrink-0 ml-4"
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}
