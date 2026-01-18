import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export default function Admin() {
  return (
    <div className="py-6 space-y-8 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Administração</h1>
        <p className="text-muted-foreground">
          Configurações globais do sistema Lawyn GRC.
        </p>
      </div>

      <div className="space-y-6 border rounded-lg p-6 bg-card">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base">Modo Manutenção</Label>
            <p className="text-sm text-muted-foreground">
              Suspende o acesso para usuários não-admin.
            </p>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base">MFA Obrigatório</Label>
            <p className="text-sm text-muted-foreground">
              Exige autenticação de dois fatores para todos.
            </p>
          </div>
          <Switch defaultChecked />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Configuração de Email (SMTP)</h2>
        <div className="grid gap-2">
          <Label>Servidor SMTP</Label>
          <Input placeholder="smtp.lawyn.com" />
        </div>
        <Button>Salvar Configurações</Button>
      </div>
    </div>
  )
}
