import {
  ShieldAlert,
  ShieldCheck,
  FileCheck,
  ScrollText,
  Clock,
  ArrowUpRight,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CountUp } from '@/components/CountUp'
import { RiskMatrix } from '@/components/RiskMatrix'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts'
import { Link } from 'react-router-dom'

const complianceData = [
  { name: 'Riscos', score: 85, fill: 'hsl(var(--destructive))' },
  { name: 'Controles', score: 92, fill: 'hsl(var(--primary))' },
  { name: 'Auditoria', score: 78, fill: 'hsl(var(--warning))' },
  { name: 'Políticas', score: 95, fill: 'hsl(var(--success))' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Visão geral da conformidade e riscos da organização.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Riscos Altos</CardTitle>
            <ShieldAlert className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <CountUp end={12} />
            </div>
            <p className="text-xs text-muted-foreground">
              +2 desde o último mês
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Controles Efetivos
            </CardTitle>
            <ShieldCheck className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <CountUp end={89} suffix="%" />
            </div>
            <p className="text-xs text-muted-foreground">+5% de melhoria</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Auditorias Abertas
            </CardTitle>
            <FileCheck className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <CountUp end={3} />
            </div>
            <p className="text-xs text-muted-foreground">
              1 planejada para esta semana
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Políticas a Revisar
            </CardTitle>
            <ScrollText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <CountUp end={7} />
            </div>
            <p className="text-xs text-muted-foreground">2 vencem em breve</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>Conformidade por Módulo</CardTitle>
            <CardDescription>
              Status de conformidade em relação aos objetivos definidos.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ChartContainer config={{}} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={complianceData}>
                  <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="score"
                    fill="currentColor"
                    radius={[4, 4, 0, 0]}
                    className="fill-primary"
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3 hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>Matriz de Riscos</CardTitle>
            <CardDescription>
              Distribuição dos riscos identificados por probabilidade e impacto.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RiskMatrix />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  user: 'Ana Silva',
                  action: 'aprovou o controle',
                  target: 'Backup Diário',
                  time: '2 horas atrás',
                },
                {
                  user: 'Carlos Souza',
                  action: 'atualizou o risco',
                  target: 'Vazamento de Dados',
                  time: '5 horas atrás',
                },
                {
                  user: 'Mariana Costa',
                  action: 'publicou a política',
                  target: 'Segurança da Informação',
                  time: 'Ontem',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b last:border-0 pb-2 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                      {item.user.charAt(0)}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">{item.user}</span>{' '}
                      {item.action}{' '}
                      <span className="font-medium text-foreground">
                        {item.target}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button
              variant="outline"
              className="w-full justify-between"
              asChild
            >
              <Link to="/risks">
                Novo Risco <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-between"
              asChild
            >
              <Link to="/controls">
                Testar Controle <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-between"
              asChild
            >
              <Link to="/audits">
                Iniciar Auditoria <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
