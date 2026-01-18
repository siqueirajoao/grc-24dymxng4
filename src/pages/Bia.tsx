import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

export default function Bia() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">BIA & Continuidade</h1>
      <p className="text-muted-foreground">
        Análise de Impacto no Negócio (Business Impact Analysis).
      </p>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Processo Crítico</TableHead>
              <TableHead>RTO (Meta de Tempo)</TableHead>
              <TableHead>RPO (Meta de Ponto)</TableHead>
              <TableHead>Impacto Financeiro</TableHead>
              <TableHead>Impacto Regulatório</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                Processamento de TED/DOC
              </TableCell>
              <TableCell>
                <Badge>1 hora</Badge>
              </TableCell>
              <TableCell>
                <Badge>0 min (Sync)</Badge>
              </TableCell>
              <TableCell className="text-red-600 font-bold">Alto</TableCell>
              <TableCell className="text-red-600 font-bold">Alto</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Atendimento SAC</TableCell>
              <TableCell>
                <Badge variant="outline">24 horas</Badge>
              </TableCell>
              <TableCell>
                <Badge variant="outline">24 horas</Badge>
              </TableCell>
              <TableCell className="text-yellow-600">Médio</TableCell>
              <TableCell className="text-green-600">Baixo</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
