import { cn } from '@/lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface RiskMatrixProps {
  onCellClick?: (impact: number, probability: number) => void
}

export function RiskMatrix({ onCellClick }: RiskMatrixProps) {
  // 5x5 Matrix
  // Rows: Probability (5=Very High, 1=Very Low) - Rendered Top to Bottom as 5 -> 1
  // Cols: Impact (1=Very Low, 5=Very High) - Rendered Left to Right as 1 -> 5

  const rows = [5, 4, 3, 2, 1]
  const cols = [1, 2, 3, 4, 5]

  const getRiskColor = (prob: number, imp: number) => {
    const score = prob * imp
    if (score >= 20) return 'bg-red-600 hover:bg-red-500' // Critical
    if (score >= 12) return 'bg-orange-500 hover:bg-orange-400' // High
    if (score >= 6) return 'bg-yellow-400 hover:bg-yellow-300' // Medium
    return 'bg-emerald-500 hover:bg-emerald-400' // Low
  }

  const getRiskCount = (prob: number, imp: number) => {
    // Mock random count seeded by coordinates
    return Math.floor((prob * imp * 37) % 15)
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex">
        <div className="flex flex-col justify-between pr-2 py-6 text-xs font-medium text-muted-foreground h-[250px]">
          <span>V. Alta</span>
          <span>Alta</span>
          <span>Média</span>
          <span>Baixa</span>
          <span>V. Baixa</span>
        </div>
        <div className="grid grid-cols-5 gap-1 w-full h-[250px]">
          {rows.map((prob) =>
            cols.map((imp) => (
              <TooltipProvider key={`${prob}-${imp}`}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => onCellClick?.(imp, prob)}
                      className={cn(
                        'w-full h-full rounded-sm transition-all duration-200 border border-transparent hover:border-white hover:scale-105 shadow-sm flex items-center justify-center text-white font-bold text-sm',
                        getRiskColor(prob, imp),
                      )}
                    >
                      {getRiskCount(prob, imp)}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Probabilidade: {prob} | Impacto: {imp}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {getRiskCount(prob, imp)} Riscos identificados
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )),
          )}
        </div>
      </div>
      <div className="flex justify-between pl-12 text-xs font-medium text-muted-foreground w-full">
        <span>V. Baixo</span>
        <span>Baixo</span>
        <span>Médio</span>
        <span>Alto</span>
        <span>V. Alto</span>
      </div>
      <div className="text-center text-xs text-muted-foreground mt-1 font-semibold uppercase tracking-wider">
        Impacto
      </div>
      <div className="absolute -left-8 top-1/2 -rotate-90 text-xs text-muted-foreground font-semibold uppercase tracking-wider origin-center hidden sm:block">
        Probabilidade
      </div>
    </div>
  )
}
