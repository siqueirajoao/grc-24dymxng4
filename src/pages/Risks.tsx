import { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { ShieldAlert, Plus, Search, Filter } from 'lucide-react'

interface Risk {
  id: string
  title: string
  category: string
  probability: 'Baixa' | 'Média' | 'Alta'
  impact: 'Baixo' | 'Médio' | 'Alto'
  status: 'Mitigado' | 'Em Análise' | 'Aceito'
}

const initialRisks: Risk[] = [
  {
    id: 'RISK-001',
    title: 'Vazamento de Dados de Clientes',
    category: 'Segurança da Informação',
    probability: 'Média',
    impact: 'Alto',
    status: 'Em Análise',
  },
  {
    id: 'RISK-002',
    title: 'Indisponibilidade do Sistema Core',
    category: 'Operacional',
    probability: 'Baixa',
    impact: 'Alto',
    status: 'Mitigado',
  },
  {
    id: 'RISK-003',
    title: 'Alteração na Regulação do Setor',
    category: 'Compliance',
    probability: 'Alta',
    impact: 'Médio',
    status: 'Em Análise',
  },
  {
    id: 'RISK-004',
    title: 'Falha em Fornecedor Crítico',
    category: 'Terceiros',
    probability: 'Média',
    impact: 'Alto',
    status: 'Mitigado',
  },
]

export default function Risks() {
  const [searchTerm, setSearchTerm] = useState('')
  const risks = initialRisks.filter(
    (risk) =>
      risk.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      risk.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Alto':
        return 'bg-red-500/10 text-red-500 border-red-500/20'
      case 'Médio':
        return 'bg-amber-500/10 text-amber-500 border-amber-500/20'
      case 'Baixo':
        return 'bg-green-500/10 text-green-500 border-green-500/20'
      default:
        return ''
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <ShieldAlert className="h-8 w-8 text-destructive" />
            Gestão de Riscos
          </h1>
          <p className="text-muted-foreground mt-1">
            Identifique, avalie e monitore os riscos corporativos.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Novo Risco
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar riscos..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Inventário de Riscos</CardTitle>
          <CardDescription>
            Lista completa de riscos identificados e seus status.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Título</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Probabilidade</TableHead>
                <TableHead>Impacto</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {risks.map((risk) => (
                <TableRow key={risk.id}>
                  <TableCell className="font-medium">{risk.id}</TableCell>
                  <TableCell>{risk.title}</TableCell>
                  <TableCell>{risk.category}</TableCell>
                  <TableCell>{risk.probability}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={getImpactColor(risk.impact)}
                    >
                      {risk.impact}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{risk.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Detalhes
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
