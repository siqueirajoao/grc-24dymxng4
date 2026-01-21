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
import { Activity, Plus } from 'lucide-react'

export default function Bia() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Activity className="h-8 w-8 text-rose-500" />
            Continuidade de Negócios (BIA)
          </h1>
          <p className="text-muted-foreground mt-1">
            Análise de impacto e planos de continuidade.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Nova Análise
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Processos Críticos</CardTitle>
          <CardDescription>
            Análise de Impacto no Negócio (BIA) e RTO/RPO.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Processo</TableHead>
                <TableHead>Departamento</TableHead>
                <TableHead>Impacto Financeiro</TableHead>
                <TableHead>Impacto Imagem</TableHead>
                <TableHead>RTO (Meta)</TableHead>
                <TableHead>RPO (Meta)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  Processamento de Pagamentos
                </TableCell>
                <TableCell>Operações</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="text-red-500 border-red-500"
                  >
                    Crítico
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="text-red-500 border-red-500"
                  >
                    Alto
                  </Badge>
                </TableCell>
                <TableCell>2 horas</TableCell>
                <TableCell>15 min</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Atendimento ao Cliente
                </TableCell>
                <TableCell>CS</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="text-yellow-500 border-yellow-500"
                  >
                    Médio
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="text-red-500 border-red-500"
                  >
                    Alto
                  </Badge>
                </TableCell>
                <TableCell>4 horas</TableCell>
                <TableCell>1 hora</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
