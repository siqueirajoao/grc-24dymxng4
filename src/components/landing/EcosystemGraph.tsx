export function EcosystemGraph() {
  return (
    <section className="py-24 bg-black relative overflow-hidden flex items-center justify-center">
      <div className="container px-4 text-center">
        <div className="relative inline-block">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border border-blue-500/20 flex items-center justify-center animate-pulse-glow bg-blue-900/5">
            <div className="text-center">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">
                360°
              </h3>
              <p className="text-blue-400 font-medium">Visão Holística</p>
            </div>
          </div>

          {/* Orbiting Elements (Simulated with simple positioning for now) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 border border-zinc-800 p-3 rounded-xl shadow-xl">
            <span className="text-sm font-bold text-white">Riscos</span>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-zinc-900 border border-zinc-800 p-3 rounded-xl shadow-xl">
            <span className="text-sm font-bold text-white">Controles</span>
          </div>
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 border border-zinc-800 p-3 rounded-xl shadow-xl">
            <span className="text-sm font-bold text-white">Auditoria</span>
          </div>
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-zinc-900 border border-zinc-800 p-3 rounded-xl shadow-xl">
            <span className="text-sm font-bold text-white">Compliance</span>
          </div>
        </div>

        <p className="mt-12 text-gray-400 max-w-2xl mx-auto">
          Conecte pontos de dados isolados para formar uma imagem coesa da saúde
          da sua organização.
        </p>
      </div>
    </section>
  )
}
