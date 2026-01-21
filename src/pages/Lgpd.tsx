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
import { Lock, FileSearch, UserCheck } from 'lucide-react'

export default function Lgpd() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Lock className="h-8 w-8 text-purple-500" />
            Proteção de Dados (LGPD)
          </h1>
          <p className="text-muted-foreground mt-1">
            Gestão de privacidade, titulares e incidentes de dados.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Novo ROPA</Button>
          <Button>Novo Pedido Titular</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pedidos de Titulares
            </CardTitle>
            <UserCheck className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">
              3 pendentes de resposta
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Inventário de Dados
            </CardTitle>
            <FileSearch className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">Processos mapeados</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Incidentes</CardTitle>
            <Lock className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Últimos 30 dias</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Solicitações de Titulares Recentes</CardTitle>
          <CardDescription>
            Acompanhamento de prazos legais (15 dias).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Protocolo</TableHead>
                <TableHead>Titular</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Data Solicitação</TableHead>
                <TableHead>Prazo</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">REQ-2024-051</TableCell>
                <TableCell>João da Silva</TableCell>
                <TableCell>Acesso aos Dados</TableCell>
                <TableCell>20/01/2024</TableCell>
                <TableCell>04/02/2024</TableCell>
                <TableCell>
                  <Badge className="bg-yellow-500">Em Análise</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Responder
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">REQ-2024-048</TableCell>
                <TableCell>Maria Oliveira</TableCell>
                <TableCell>Exclusão</TableCell>
                <TableCell>18/01/2024</TableCell>
                <TableCell>02/02/2024</TableCell>
                <TableCell>
                  <Badge className="bg-blue-500">Processando</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Responder
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
