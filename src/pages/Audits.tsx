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
import { FileCheck, Plus } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Audits() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <FileCheck className="h-8 w-8 text-warning" />
            {t('audits.title')}
          </h1>
          <p className="text-muted-foreground mt-1">{t('audits.subtitle')}</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> {t('audits.new_audit')}
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              {t('audits.in_progress')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              {t('audits.planned')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              {t('audits.completed')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('audits.recent')}</CardTitle>
          <CardDescription>{t('audits.recent_desc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('audits.table.code')}</TableHead>
                <TableHead>{t('audits.table.title')}</TableHead>
                <TableHead>{t('audits.table.scope')}</TableHead>
                <TableHead>{t('audits.table.period')}</TableHead>
                <TableHead>{t('audits.table.status')}</TableHead>
                <TableHead className="text-right">
                  {t('audits.table.findings')}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">AUD-24-01</TableCell>
                <TableCell>Auditoria de Segurança Cibernética</TableCell>
                <TableCell>TI / Segurança</TableCell>
                <TableCell>Jan/24 - Fev/24</TableCell>
                <TableCell>
                  <Badge className="bg-blue-500">Em Andamento</Badge>
                </TableCell>
                <TableCell className="text-right">--</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">AUD-23-15</TableCell>
                <TableCell>Revisão de Processos de RH</TableCell>
                <TableCell>Recursos Humanos</TableCell>
                <TableCell>Dez/23</TableCell>
                <TableCell>
                  <Badge variant="secondary">Concluída</Badge>
                </TableCell>
                <TableCell className="text-right text-red-500 font-bold">
                  3
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
