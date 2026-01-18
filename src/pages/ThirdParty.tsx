import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ShieldCheck, AlertTriangle } from 'lucide-react'

export default function ThirdParty() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Gestão de Terceiros</h1>
      <p className="text-muted-foreground">
        Due diligence e monitoramento de riscos de fornecedores.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            name: 'TechServ Solutions LTDA',
            cnpj: '12.345.678/0001-90',
            risk: 'Baixo',
            status: 'Homologado',
            nextReview: '10/06/2026',
          },
          {
            name: 'DataCloud Services',
            cnpj: '98.765.432/0001-10',
            risk: 'Alto',
            status: 'Em Análise',
            nextReview: 'Imediato',
          },
          {
            name: 'Limpeza & Conservação Corp',
            cnpj: '11.222.333/0001-44',
            risk: 'Baixo',
            status: 'Homologado',
            nextReview: '12/12/2026',
          },
        ].map((vendor, i) => (
          <Card key={i}>
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <Badge variant="outline">{vendor.cnpj}</Badge>
                {vendor.risk === 'Alto' ? (
                  <Badge variant="destructive">Risco Alto</Badge>
                ) : (
                  <Badge className="bg-emerald-500 hover:bg-emerald-600">
                    Risco Baixo
                  </Badge>
                )}
              </div>
              <CardTitle className="mt-2 text-lg">{vendor.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mt-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="font-medium">{vendor.status}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    Próxima Revisão:
                  </span>
                  <span className="font-medium">{vendor.nextReview}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
