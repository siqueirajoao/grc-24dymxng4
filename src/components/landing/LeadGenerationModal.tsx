import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2 } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { createLead } from '@/services/leads'

const formSchema = z.object({
  name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Digite um e-mail válido'),
  phone: z.string().min(8, 'Digite um telefone válido'),
  company: z.string().optional(),
  message: z.string().optional(),
})

interface LeadGenerationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LeadGenerationModal({
  isOpen,
  onClose,
}: LeadGenerationModalProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    const { error } = await createLead(values)
    setLoading(false)

    if (error) {
      toast({
        title: 'Erro ao enviar',
        description: 'Ocorreu um erro ao enviar seus dados. Tente novamente.',
        variant: 'destructive',
      })
    } else {
      toast({
        title: 'Sucesso!',
        description: 'Recebemos seu contato. Retornaremos em breve.',
      })
      form.reset()
      onClose()
    }
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  const inputClasses =
    'bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-500 focus-visible:ring-blue-500/20 focus-visible:border-blue-500 hover:border-zinc-700 transition-colors'
  const labelClasses = 'text-zinc-300 font-medium'

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="dark sm:max-w-[500px] bg-zinc-950 border-zinc-800 text-zinc-100 shadow-2xl p-0 overflow-hidden gap-0">
        <div className="p-6">
          <DialogHeader className="mb-6 space-y-3">
            <DialogTitle className="text-2xl font-bold text-white tracking-tight">
              Fale com um Especialista
            </DialogTitle>
            <DialogDescription className="text-zinc-400 text-base leading-relaxed">
              Preencha o formulário abaixo para agendar uma demonstração ou
              tirar suas dúvidas sobre a plataforma Lawyn.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClasses}>
                      Nome Completo *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Seu nome"
                        className={inputClasses}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelClasses}>
                        E-mail Corporativo *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="seu@empresa.com"
                          className={inputClasses}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelClasses}>Telefone *</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="(11) 99999-9999"
                          className={inputClasses}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClasses}>Empresa</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nome da sua empresa"
                        className={inputClasses}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClasses}>
                      Mensagem (Opcional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Conte-nos sobre suas necessidades..."
                        className={`resize-none min-h-[100px] ${inputClasses}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold h-11 text-base shadow-lg shadow-blue-900/20 border-0 transition-all hover:scale-[1.02]"
                  disabled={loading}
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Enviar Solicitação
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <div className="bg-zinc-900/50 px-6 py-4 border-t border-zinc-800/50">
          <p className="text-xs text-zinc-500 text-center">
            Seus dados estão seguros e serão processados de acordo com nossa{' '}
            <span className="text-zinc-400 hover:text-blue-400 cursor-pointer transition-colors">
              Política de Privacidade
            </span>
            .
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
