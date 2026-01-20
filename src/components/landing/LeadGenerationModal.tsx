import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2, AlertCircle } from 'lucide-react'
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
import { insertLead } from '@/lib/supabase'

const formSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  company: z.string().min(2, 'Empresa é obrigatória'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  message: z.string().optional(),
})

interface LeadGenerationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LeadGenerationModal({
  open,
  onOpenChange,
}: LeadGenerationModalProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      await insertLead(values)

      toast({
        title: 'Solicitação enviada com sucesso!',
        description: 'Nossa equipe entrará em contato em breve.',
        className: 'bg-green-500 text-white border-none',
      })
      onOpenChange(false)
      form.reset()
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro ao enviar',
        description:
          'Ocorreu um problema ao salvar seus dados. Tente novamente.',
        action: <AlertCircle className="h-5 w-5" />,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 bg-transparent border-none shadow-none [&>button]:text-zinc-400 [&>button]:hover:text-white">
        {/* 
          Wrapper for visual styles and pulse animation.
          Separating this from DialogContent prevents animation conflicts (flickering).
        */}
        <div className="w-full h-full bg-zinc-950 border border-zinc-800 text-white animate-pulse-glow shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)] rounded-lg p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              Falar com Especialista
            </DialogTitle>
            <DialogDescription className="text-zinc-400">
              Preencha o formulário abaixo e nossa equipe entrará em contato
              para entender sua necessidade.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 mt-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-300">Nome</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Seu nome"
                          {...field}
                          disabled={isSubmitting}
                          className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-600 focus-visible:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-300">Empresa</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Sua empresa"
                          {...field}
                          disabled={isSubmitting}
                          className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-600 focus-visible:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-300">
                        Email Corporativo *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="nome@empresa.com"
                          {...field}
                          disabled={isSubmitting}
                          className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-600 focus-visible:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-300">
                        Telefone *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="(11) 99999-9999"
                          {...field}
                          disabled={isSubmitting}
                          className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-600 focus-visible:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-300">
                      Mensagem (Opcional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Conte-nos sobre sua necessidade..."
                        className="resize-none bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-600 focus-visible:ring-blue-500 min-h-[100px]"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-11 transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Solicitar Contato'
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
