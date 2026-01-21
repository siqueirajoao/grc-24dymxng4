export function ComplianceSection() {
  const regulations = [
    'BACEN',
    'CVM',
    'LGPD',
    'SOX',
    'ISO 27001',
    'ISO 31000',
    'COSO',
    'PCI-DSS',
  ]

  return (
    <section id="compliance" className="py-20 bg-black overflow-hidden">
      <div className="container px-4 mb-8 text-center">
        <h3 className="text-xl font-semibold text-gray-500 uppercase tracking-widest">
          Em conformidade com os principais frameworks
        </h3>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
          {[...regulations, ...regulations, ...regulations].map((reg, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-bold text-zinc-800 hover:text-zinc-600 transition-colors cursor-default"
            >
              {reg}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
