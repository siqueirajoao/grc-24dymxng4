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
import { useTranslation } from 'react-i18next'

export default function Bia() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Activity className="h-8 w-8 text-rose-500" />
            {t('bia.title')}
          </h1>
          <p className="text-muted-foreground mt-1">{t('bia.subtitle')}</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> {t('bia.new_analysis')}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('bia.critical_processes')}</CardTitle>
          <CardDescription>{t('bia.critical_processes_desc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('bia.table.process')}</TableHead>
                <TableHead>{t('bia.table.department')}</TableHead>
                <TableHead>{t('bia.table.financial_impact')}</TableHead>
                <TableHead>{t('bia.table.image_impact')}</TableHead>
                <TableHead>{t('bia.table.rto')}</TableHead>
                <TableHead>{t('bia.table.rpo')}</TableHead>
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
