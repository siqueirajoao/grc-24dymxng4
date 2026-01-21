import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { FileCheck, Plus } from 'lucide-react'

export default function Audits() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <FileCheck className="h-8 w-8 text-warning" />
            Auditoria Interna
          </h1>
          <p className="text-muted-foreground mt-1">
            Planejamento e execução de trabalhos de auditoria.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Nova Auditoria
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Em Andamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Planejadas (Q1)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Concluídas (Ano)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Auditorias Recentes</CardTitle>
          <CardDescription>
            Acompanhamento dos trabalhos de auditoria.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Título</TableHead>
                <TableHead>Escopo</TableHead>
                <TableHead>Período</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Apontamentos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">AUD-24-01</TableCell>
                <TableCell>Auditoria de Segurança Cibernética</TableCell>
                <TableCell>TI / Segurança</TableCell>
                <TableCell>Jan/24 - Fev/24</TableCell>
                <TableCell>
                  <Badge className="bg-blue-500">Em Andamento</Badge>
                </TableCell>
                <TableCell className="text-right">--</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">AUD-23-15</TableCell>
                <TableCell>Revisão de Processos de RH</TableCell>
                <TableCell>Recursos Humanos</TableCell>
                <TableCell>Dez/23</TableCell>
                <TableCell>
                  <Badge variant="secondary">Concluída</Badge>
                </TableCell>
                <TableCell className="text-right text-red-500 font-bold">
                  3
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
