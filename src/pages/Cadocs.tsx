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
import { BookOpen, Download } from 'lucide-react'

export default function Cadocs() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-blue-500" />
            Regulatório e CADOCs
          </h1>
          <p className="text-muted-foreground mt-1">
            Gestão de obrigações regulatórias e envio de documentos.
          </p>
        </div>
        <Button>Gerar Remessa</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Calendário de Obrigações</CardTitle>
          <CardDescription>Próximas entregas regulatórias.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Documento</TableHead>
                <TableHead>Regulador</TableHead>
                <TableHead>Prazo</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">CADOC 2061</TableCell>
                <TableCell>BACEN</TableCell>
                <TableCell className="text-red-500 font-bold">Hoje</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="text-yellow-500 border-yellow-500"
                  >
                    Pendente
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Download className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">DRLO</TableCell>
                <TableCell>BACEN</TableCell>
                <TableCell>31/01/2024</TableCell>
                <TableCell>
                  <Badge variant="outline">Em Elaboração</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Download className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
