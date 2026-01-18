import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { FileCheck, Upload, CheckCircle2, XCircle, Clock } from 'lucide-react'

export default function Controls() {
  const controls = [
    {
      code: 'CT-01',
      name: 'Revisão de Acessos Semestral',
      type: 'Detectivo',
      frequency: 'Semestral',
      effectiveness: 'Efetivo',
    },
    {
      code: 'CT-02',
      name: 'Bloqueio Automático de USB',
      type: 'Preventivo',
      frequency: 'Contínuo',
      effectiveness: 'Efetivo',
    },
    {
      code: 'CT-03',
      name: 'Conciliação Bancária Diária',
      type: 'Detectivo',
      frequency: 'Diário',
      effectiveness: 'Parcial',
    },
  ]

  return (
    <div className="py-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Controles Internos
          </h1>
          <p className="text-muted-foreground">
            Catálogo de controles e gestão de evidências.
          </p>
        </div>
        <Button>Novo Controle</Button>
      </div>

      <Tabs defaultValue="catalog" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="catalog">Catálogo de Controles</TabsTrigger>
          <TabsTrigger value="evidence">Gestão de Evidências</TabsTrigger>
        </TabsList>

        <TabsContent value="catalog" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {controls.map((control) => (
              <Card key={control.code}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-semibold">
                    {control.code}
                  </CardTitle>
                  <Badge
                    variant={
                      control.type === 'Preventivo' ? 'default' : 'secondary'
                    }
                  >
                    {control.type}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium mt-2">{control.name}</p>
                  <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
                    <span>Freq: {control.frequency}</span>
                    <span
                      className={
                        control.effectiveness === 'Efetivo'
                          ? 'text-green-600 flex items-center gap-1'
                          : 'text-yellow-600 flex items-center gap-1'
                      }
                    >
                      {control.effectiveness === 'Efetivo' ? (
                        <CheckCircle2 className="w-3 h-3" />
                      ) : (
                        <Clock className="w-3 h-3" />
                      )}
                      {control.effectiveness}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="evidence" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Evidências Pendentes</CardTitle>
              <CardDescription>
                Upload e aprovação de evidências de execução de controles.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 flex items-center justify-between bg-muted/30">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <FileCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Conciliação Bancária - Jan/2026
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Responsável: Equipe Financeira • Vence hoje
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Upload className="h-4 w-4" /> Enviar Evidência
                  </Button>
                </div>
                {/* More items */}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
