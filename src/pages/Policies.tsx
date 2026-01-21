import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ScrollText, Upload } from 'lucide-react'

export default function Policies() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <ScrollText className="h-8 w-8 text-cyan-500" />
            Políticas Corporativas
          </h1>
          <p className="text-muted-foreground mt-1">
            Gestão do ciclo de vida de políticas e normas.
          </p>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" /> Publicar Política
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card
            key={i}
            className="hover:shadow-md transition-shadow cursor-pointer"
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <ScrollText className="w-8 h-8 text-cyan-500 mb-2" />
                <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                  v1.2
                </span>
              </div>
              <CardTitle className="text-lg">
                Política de Segurança da Informação
              </CardTitle>
              <CardDescription>Última revisão: 15/01/2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Estabelece diretrizes para proteção dos ativos de informação da
                empresa.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Visualizar
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
