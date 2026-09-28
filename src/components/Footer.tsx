export function Footer() {
  return (
    <footer className="pt-12 pb-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-zinc-600 text-[11px] gap-4 px-2 font-mono">
      <div className="flex items-center gap-3">
        <span className="text-zinc-400 font-semibold">Victor Muthomi</span>
        <span>Alcodist</span>
      </div>

      <p>&copy; {new Date().getFullYear()} All rights reserved.</p>

      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Systems Normal</span>
      </div>
    </footer>
  );
}
