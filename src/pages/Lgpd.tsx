import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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

export default function Lgpd() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">LGPD & Privacidade</h1>

      <Tabs defaultValue="ropa">
        <TabsList>
          <TabsTrigger value="ropa">ROPA (Registro de Operações)</TabsTrigger>
          <TabsTrigger value="ripd">RIPD (Impacto)</TabsTrigger>
          <TabsTrigger value="requests">Titulares (DSAR)</TabsTrigger>
        </TabsList>

        <TabsContent value="ropa" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Inventário de Dados Pessoais</CardTitle>
              <CardDescription>
                Mapeamento de processos que tratam dados pessoais.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Processo</TableHead>
                    <TableHead>Área</TableHead>
                    <TableHead>Dados Tratados</TableHead>
                    <TableHead>Base Legal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Abertura de Conta Digital</TableCell>
                    <TableCell>Onboarding</TableCell>
                    <TableCell>Nome, CPF, Biometria, Endereço</TableCell>
                    <TableCell>Execução de Contrato</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Campanha de Marketing Email</TableCell>
                    <TableCell>Marketing</TableCell>
                    <TableCell>Nome, Email</TableCell>
                    <TableCell>Legítimo Interesse</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ripd" className="mt-4">
          <div className="p-10 text-center text-muted-foreground bg-muted/20 rounded-lg border border-dashed">
            Selecione um processo do ROPA para iniciar a avaliação de impacto
            (DPIA).
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
