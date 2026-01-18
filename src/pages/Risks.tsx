import { useState } from 'react'
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Plus, Search, FileDown, Upload, MoreHorizontal } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Textarea } from '@/components/ui/textarea'

export default function Risks() {
  const [risks, setRisks] = useState([
    {
      id: 'R-001',
      category: 'Crédito',
      description: 'Inadimplência Carteira PJ',
      probability: 'Alta',
      impact: 'Alto',
      status: 'Identificado',
    },
    {
      id: 'R-002',
      category: 'Operacional',
      description: 'Falha no sistema de pagamentos',
      probability: 'Média',
      impact: 'Crítico',
      status: 'Mitigado',
    },
    {
      id: 'R-003',
      category: 'Segurança',
      description: 'Vazamento de dados LGPD',
      probability: 'Baixa',
      impact: 'Crítico',
      status: 'Avaliado',
    },
    {
      id: 'R-004',
      category: 'Mercado',
      description: 'Oscilação Cambial > 10%',
      probability: 'Alta',
      impact: 'Médio',
      status: 'Aceito',
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Identificado':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200'
      case 'Avaliado':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200'
      case 'Mitigado':
        return 'bg-green-100 text-green-800 hover:bg-green-200'
      case 'Aceito':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6 py-6 animate-slide-up">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Gestão de Riscos
          </h1>
          <p className="text-muted-foreground">
            Inventário, avaliação e tratamento de riscos.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" /> Importar CSV
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Novo Risco
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Registrar Novo Risco</DialogTitle>
                <DialogDescription>
                  Preencha os detalhes do risco identificado para avaliação.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="category" className="text-right">
                    Categoria
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="credit">Risco de Crédito</SelectItem>
                      <SelectItem value="market">Risco de Mercado</SelectItem>
                      <SelectItem value="op">Risco Operacional</SelectItem>
                      <SelectItem value="image">Risco de Imagem</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="desc" className="text-right">
                    Descrição
                  </Label>
                  <Textarea
                    id="desc"
                    className="col-span-3"
                    placeholder="Descreva o evento de risco..."
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right">Probabilidade</Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Muito Baixa</SelectItem>
                      <SelectItem value="2">Baixa</SelectItem>
                      <SelectItem value="3">Média</SelectItem>
                      <SelectItem value="4">Alta</SelectItem>
                      <SelectItem value="5">Muito Alta</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right">Impacto</Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Insignificante</SelectItem>
                      <SelectItem value="2">Menor</SelectItem>
                      <SelectItem value="3">Moderado</SelectItem>
                      <SelectItem value="4">Maior</SelectItem>
                      <SelectItem value="5">Catastrófico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Salvar Risco</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle>Inventário de Riscos</CardTitle>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Filtrar riscos..."
                className="pl-8 w-[250px]"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Probabilidade</TableHead>
                <TableHead>Impacto</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {risks.map((risk) => (
                <TableRow
                  key={risk.id}
                  className="cursor-pointer hover:bg-muted/50"
                >
                  <TableCell className="font-medium">{risk.id}</TableCell>
                  <TableCell>{risk.category}</TableCell>
                  <TableCell>{risk.description}</TableCell>
                  <TableCell>{risk.probability}</TableCell>
                  <TableCell>{risk.impact}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={getStatusBadge(risk.status)}
                    >
                      {risk.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuItem>Editar Detalhes</DropdownMenuItem>
                        <DropdownMenuItem>Vincular Controle</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          Arquivar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
