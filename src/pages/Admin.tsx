import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Settings, Users, Database } from 'lucide-react'

export default function Admin() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Settings className="h-8 w-8 text-primary" />
          Administração
        </h1>
        <p className="text-muted-foreground">
          Configurações do sistema, usuários e auditoria de logs.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:bg-accent/50 cursor-pointer transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" /> Usuários e Acessos
            </CardTitle>
            <CardDescription>
              Gerenciar usuários, grupos e permissões.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="secondary" className="w-full">
              Gerenciar
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:bg-accent/50 cursor-pointer transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" /> Logs de Auditoria
            </CardTitle>
            <CardDescription>
              Visualizar trilha de auditoria do sistema.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="secondary" className="w-full">
              Visualizar Logs
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:bg-accent/50 cursor-pointer transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" /> Configurações Gerais
            </CardTitle>
            <CardDescription>Parâmetros globais do sistema.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="secondary" className="w-full">
              Configurar
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
