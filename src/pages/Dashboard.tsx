import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { RiskMatrix } from '@/components/RiskMatrix'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { AlertCircle, Download, TrendingUp } from 'lucide-react'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart'
import {
  Cell,
  Pie,
  PieChart,
  XAxis,
  YAxis,
  Line,
  LineChart,
  CartesianGrid,
} from 'recharts'

export default function Dashboard() {
  // Mock Data
  const kpis = [
    { label: 'Riscos Críticos', value: 12, change: '+2', status: 'critical' },
    { label: 'Controles Ativos', value: 145, change: '+5', status: 'success' },
    { label: 'Auditorias em Curso', value: 3, change: '0', status: 'warning' },
    { label: 'CADOCs Pendentes', value: 2, change: '-1', status: 'warning' },
    {
      label: 'Score Compliance',
      value: '87%',
      change: '+2%',
      status: 'success',
    },
  ]

  const risksByCategory = [
    { name: 'Crédito', value: 400, fill: 'var(--color-credit)' },
    { name: 'Mercado', value: 300, fill: 'var(--color-market)' },
    { name: 'Liquidez', value: 300, fill: 'var(--color-liquidity)' },
    { name: 'Operacional', value: 200, fill: 'var(--color-operational)' },
    { name: 'Legal', value: 100, fill: 'var(--color-legal)' },
  ]

  const complianceData = [
    { month: 'Jan', score: 65 },
    { month: 'Fev', score: 70 },
    { month: 'Mar', score: 68 },
    { month: 'Abr', score: 75 },
    { month: 'Mai', score: 82 },
    { month: 'Jun', score: 87 },
  ]

  const chartConfig = {
    credit: { label: 'Crédito', color: 'hsl(var(--chart-1))' },
    market: { label: 'Mercado', color: 'hsl(var(--chart-2))' },
    liquidity: { label: 'Liquidez', color: 'hsl(var(--chart-3))' },
    operational: { label: 'Operacional', color: 'hsl(var(--chart-4))' },
    legal: { label: 'Legal', color: 'hsl(var(--chart-5))' },
  }

  return (
    <div className="space-y-6 animate-fade-in py-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Executive Dashboard
          </h1>
          <p className="text-muted-foreground">
            Visão consolidada da saúde institucional.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Unidade de Negócio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as Unidades</SelectItem>
              <SelectItem value="sp">Matriz SP</SelectItem>
              <SelectItem value="rj">Filial RJ</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Exportar PDF
          </Button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {kpis.map((kpi, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.label}</CardTitle>
              {kpi.status === 'critical' ? (
                <AlertCircle className="h-4 w-4 text-red-500" />
              ) : (
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className="text-xs text-muted-foreground">
                <span
                  className={
                    kpi.change.startsWith('+')
                      ? 'text-green-600'
                      : 'text-red-600'
                  }
                >
                  {kpi.change}
                </span>{' '}
                desde o último mês
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Risk Matrix */}
        <Card className="col-span-1 lg:col-span-1">
          <CardHeader>
            <CardTitle>Matriz de Riscos</CardTitle>
            <CardDescription>
              Mapa de calor Probabilidade x Impacto
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <RiskMatrix />
          </CardContent>
        </Card>

        {/* Dynamic Charts */}
        <Card className="col-span-1 lg:col-span-1">
          <CardHeader>
            <CardTitle>Riscos por Categoria</CardTitle>
            <CardDescription>
              Distribuição do inventário de riscos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <Pie
                  data={risksByCategory}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  {risksByCategory.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={Object.values(chartConfig)[index]?.color}
                    />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <ChartLegend
                  content={<ChartLegendContent nameKey="name" />}
                  className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Compliance Trend */}
        <Card className="col-span-1 lg:col-span-1">
          <CardHeader>
            <CardTitle>Maturidade de Compliance</CardTitle>
            <CardDescription>Evolução nos últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                score: { label: 'Score', color: 'hsl(var(--primary))' },
              }}
              className="h-[250px] w-full"
            >
              <LineChart
                data={complianceData}
                margin={{ left: 12, right: 12, top: 20, bottom: 20 }}
              >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  domain={[0, 100]}
                  hide
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="var(--color-score)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Alerts Panel */}
      <Card className="border-l-4 border-l-yellow-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-yellow-600" />
            Alertas Prioritários
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: '3 Novos Normativos do BACEN',
                desc: 'Resolução 4.982 impacta processo de crédito.',
                time: '2 horas atrás',
              },
              {
                title: 'CADOC 4010 Atrasado',
                desc: 'Prazo finalizado ontem. Requer ação imediata.',
                time: '1 dia atrás',
              },
              {
                title: 'Achado Crítico na Auditoria TI',
                desc: 'Ausência de MFA em contas de serviço.',
                time: '3 dias atrás',
              },
            ].map((alert, i) => (
              <div
                key={i}
                className="flex items-start justify-between border-b last:border-0 pb-4 last:pb-0"
              >
                <div>
                  <h4 className="font-semibold text-sm">{alert.title}</h4>
                  <p className="text-sm text-muted-foreground">{alert.desc}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {alert.time}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
