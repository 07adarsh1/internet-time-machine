export function DialUpSimulator() {
  return (
    <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/60 p-4 text-sm text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
      <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cyan-300">
        <span className="h-2 w-2 rounded-full bg-cyan-400" />
        Connection
      </div>
      <div className="space-y-2 text-cyan-100/80">
        <div className="h-2 w-full rounded-full bg-slate-700">
          <div className="h-full w-2/3 rounded-full bg-cyan-400" />
        </div>
        <p>Establishing link to the future...</p>
      </div>
    </div>
  );
}
