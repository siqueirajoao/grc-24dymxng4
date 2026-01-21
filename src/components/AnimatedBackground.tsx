export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px] animate-pulse-slow [animation-delay:2s]" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
    </div>
  )
}
