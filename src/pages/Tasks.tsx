import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckSquare } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'

export default function Tasks() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <CheckSquare className="h-8 w-8 text-primary" />
          Minhas Tarefas
        </h1>
        <p className="text-muted-foreground">
          Acompanhe suas pendências e planos de ação.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tarefas Pendentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <Checkbox id={`task-${i}`} className="mt-1" />
                <div className="space-y-1">
                  <label
                    htmlFor={`task-${i}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    Revisar evidências do controle de backup
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Vencimento: Amanhã às 18:00
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded dark:bg-red-900 dark:text-red-200">
                      Alta Prioridade
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-200">
                      Controles
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
