import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Circle } from 'lucide-react'

export default function Tasks() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Minhas Tarefas</h1>

      <div className="space-y-4 max-w-3xl">
        {[
          {
            title: 'Aprovar Evidência de Controle CT-02',
            due: 'Hoje',
            type: 'Controle',
          },
          {
            title: 'Revisar Risco R-003 (Segurança)',
            due: 'Amanhã',
            type: 'Risco',
          },
          {
            title: 'Preencher Questionário de Due Diligence',
            due: '22/01',
            type: 'Terceiros',
          },
        ].map((task, i) => (
          <Card
            key={i}
            className="hover:bg-muted/50 transition-colors cursor-pointer group"
          >
            <CardContent className="p-4 flex items-center gap-4">
              <Circle className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              <div className="flex-1">
                <h4 className="font-semibold">{task.title}</h4>
                <div className="flex gap-2 text-xs text-muted-foreground mt-1">
                  <span>Vence: {task.due}</span>
                  <span>•</span>
                  <span>{task.type}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
