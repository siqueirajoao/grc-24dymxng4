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
import { Users, FileText } from 'lucide-react'

export default function ThirdParty() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Users className="h-8 w-8 text-pink-500" />
            Gestão de Terceiros
          </h1>
          <p className="text-muted-foreground mt-1">
            Due diligence, contratos e riscos de fornecedores.
          </p>
        </div>
        <Button>Novo Fornecedor</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Fornecedores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Críticos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Due Diligence Pendente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">5</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Contratos a Vencer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Fornecedores Críticos</CardTitle>
          <CardDescription>
            Monitoramento de riscos e conformidade de parceiros estratégicos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fornecedor</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Risco</TableHead>
                <TableHead>Status Due Diligence</TableHead>
                <TableHead>Última Avaliação</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  TechSolutions S.A.
                </TableCell>
                <TableCell>Tecnologia / Cloud</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="text-red-500 border-red-500"
                  >
                    Alto
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className="bg-green-500">Aprovado</Badge>
                </TableCell>
                <TableCell>10/10/2023</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <FileText className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Logística Express</TableCell>
                <TableCell>Serviços Gerais</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="text-yellow-500 border-yellow-500"
                  >
                    Médio
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className="bg-yellow-500">Em Renovação</Badge>
                </TableCell>
                <TableCell>15/01/2023</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <FileText className="w-4 h-4" />
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
