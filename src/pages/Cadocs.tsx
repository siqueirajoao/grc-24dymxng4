import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CalendarClock, CheckCircle, AlertTriangle } from 'lucide-react'

export default function Cadocs() {
  const reports = [
    {
      code: '2061',
      name: 'Demonstrativo de Limites Operacionais',
      deadline: '20/01/2026',
      status: 'Pendente',
      criticality: 'high',
    },
    {
      code: '4010',
      name: 'Dados Gerais de Riscos',
      deadline: '30/01/2026',
      status: 'Em Elaboração',
      criticality: 'medium',
    },
    {
      code: '5011',
      name: 'Balancete Patrimonial',
      deadline: '15/01/2026',
      status: 'Entregue',
      criticality: 'low',
    },
  ]

  return (
    <div className="py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">CADOCs & Reports</h1>
        <p className="text-muted-foreground">
          Gestão de entregas regulatórias (BACEN).
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reports.map((report) => (
          <Card
            key={report.code}
            className={
              report.criticality === 'high' && report.status !== 'Entregue'
                ? 'border-l-4 border-l-red-500'
                : ''
            }
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">CADOC {report.code}</CardTitle>
                  <CardDescription className="text-xs mt-1">
                    {report.name}
                  </CardDescription>
                </div>
                {report.status === 'Entregue' ? (
                  <CheckCircle className="text-green-500 h-5 w-5" />
                ) : (
                  <CalendarClock className="text-yellow-500 h-5 w-5" />
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Prazo: {report.deadline}
                </span>
                <Badge
                  variant={report.status === 'Entregue' ? 'default' : 'outline'}
                >
                  {report.status}
                </Badge>
              </div>
              {report.status !== 'Entregue' && (
                <Button className="w-full mt-4" variant="secondary" size="sm">
                  Atualizar Status
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
