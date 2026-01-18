import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Calendar } from '@/components/ui/calendar'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

export default function Audits() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">
        Auditorias & Achados
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Calendário de Auditorias</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border mx-auto"
            />
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Auditorias em Andamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  name: 'Auditoria Externa 2025',
                  scope: 'Demonstrações Financeiras',
                  status: 'Em Campo',
                  progress: 65,
                },
                {
                  name: 'Auditoria Interna TI',
                  scope: 'Segurança da Informação',
                  status: 'Planejamento',
                  progress: 10,
                },
              ].map((audit, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-2 border-b pb-4 last:border-0"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{audit.name}</h3>
                    <Badge>{audit.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{audit.scope}</p>
                  <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full transition-all"
                      style={{ width: `${audit.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-right text-muted-foreground">
                    {audit.progress}% concluído
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Log de Achados (Findings)</CardTitle>
          <CardDescription>
            Pontos de atenção identificados nas últimas auditorias.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground text-center py-8">
            Nenhum achado crítico pendente.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
