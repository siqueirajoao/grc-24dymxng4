import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FileText, Eye, CheckCircle } from 'lucide-react'

export default function Policies() {
  return (
    <div className="py-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Políticas & Normas
          </h1>
          <p className="text-muted-foreground">
            Biblioteca corporativa e monitoramento regulatório.
          </p>
        </div>
        <Button>Nova Política</Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Feed Regulatório (BACEN/CVM)</CardTitle>
            <CardDescription>Últimas atualizações monitoradas.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                id: 'Res. 4982',
                organ: 'BACEN',
                title: 'Novos requisitos de capital...',
                date: '18 Jan',
                status: 'Em Análise',
              },
              {
                id: 'Inst. 600',
                organ: 'CVM',
                title: 'Ofertas públicas de distribuição...',
                date: '15 Jan',
                status: 'Aplicável',
              },
            ].map((norm, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 border rounded-lg bg-background hover:bg-muted/50 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{norm.organ}</Badge>
                    <span className="font-medium text-sm">{norm.id}</span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {norm.title}
                  </p>
                </div>
                <div className="text-right">
                  <Badge
                    variant={
                      norm.status === 'Aplicável' ? 'default' : 'secondary'
                    }
                    className="text-[10px]"
                  >
                    {norm.status}
                  </Badge>
                  <div className="text-[10px] text-muted-foreground mt-1">
                    {norm.date}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Políticas Internas</CardTitle>
            <CardDescription>Documentos mais acessados.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead className="text-right">Versão</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { name: 'Política de Segurança da Informação', ver: '2.1' },
                  { name: 'Código de Ética e Conduta', ver: '1.0' },
                  { name: 'Política de PLD/FT', ver: '3.4' },
                ].map((pol, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium text-sm flex items-center gap-2">
                      <FileText className="h-4 w-4 text-blue-500" />
                      {pol.name}
                    </TableCell>
                    <TableCell className="text-right">{pol.ver}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
