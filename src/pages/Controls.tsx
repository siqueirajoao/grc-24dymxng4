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
import { ShieldCheck, Plus, Search } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface Control {
  id: string
  name: string
  type: 'Preventivo' | 'Detectivo' | 'Corretivo'
  frequency: 'Diário' | 'Semanal' | 'Mensal' | 'Anual'
  effectiveness: 'Efetivo' | 'Inefetivo' | 'Não Testado'
  owner: string
}

const initialControls: Control[] = [
  {
    id: 'CTRL-001',
    name: 'Revisão de Acessos',
    type: 'Preventivo',
    frequency: 'Mensal',
    effectiveness: 'Efetivo',
    owner: 'Equipe de TI',
  },
  {
    id: 'CTRL-002',
    name: 'Backup de Dados',
    type: 'Corretivo',
    frequency: 'Diário',
    effectiveness: 'Efetivo',
    owner: 'Infraestrutura',
  },
  {
    id: 'CTRL-003',
    name: 'Monitoramento de Logs',
    type: 'Detectivo',
    frequency: 'Diário',
    effectiveness: 'Inefetivo',
    owner: 'SOC',
  },
]

export default function Controls() {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState('')

  const getEffectivenessColor = (status: string) => {
    switch (status) {
      case 'Efetivo':
        return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
      case 'Inefetivo':
        return 'bg-red-500/10 text-red-500 border-red-500/20'
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-primary" />
            {t('controls.title')}
          </h1>
          <p className="text-muted-foreground mt-1">{t('controls.subtitle')}</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> {t('controls.new_control')}
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t('controls.search_placeholder')}
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('controls.library')}</CardTitle>
          <CardDescription>{t('controls.library_desc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">
                  {t('controls.table.id')}
                </TableHead>
                <TableHead>{t('controls.table.name')}</TableHead>
                <TableHead>{t('controls.table.type')}</TableHead>
                <TableHead>{t('controls.table.frequency')}</TableHead>
                <TableHead>{t('controls.table.owner')}</TableHead>
                <TableHead>{t('controls.table.effectiveness')}</TableHead>
                <TableHead className="text-right">
                  {t('common.actions')}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {initialControls.map((control) => (
                <TableRow key={control.id}>
                  <TableCell className="font-medium">{control.id}</TableCell>
                  <TableCell>{control.name}</TableCell>
                  <TableCell>{control.type}</TableCell>
                  <TableCell>{control.frequency}</TableCell>
                  <TableCell>{control.owner}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={getEffectivenessColor(control.effectiveness)}
                    >
                      {control.effectiveness}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      {t('controls.table.test')}
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
