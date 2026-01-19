import {
  ShieldAlert,
  ShieldCheck,
  FileCheck,
  BookOpen,
  Lock,
  Users,
  LucideIcon,
} from 'lucide-react'

export interface ModuleData {
  id: string
  title: string
  subtitle: string
  description: string
  features: string[]
  regulation: string[]
  icon: LucideIcon
  color: string
  borderColor: string
  bg: string
  glow: string
  relatedIds: string[]
}

export const modules: ModuleData[] = [
  {
    id: 'risks',
    title: 'Gestão de Riscos',
    subtitle: 'Risk Management',
    description:
      'Identifique, avalie e mitigue riscos corporativos com matrizes dinâmicas 5x5 e heatmaps inteligentes.',
    features: [
      'Matrizes de Risco (RCSA) Dinâmicas',
      'Monitoramento de KRIs em Tempo Real',
      'Cálculo Automatizado de Capital',
      'Gestão Integrada de Perdas',
    ],
    regulation: ['BACEN 4.557', 'Basileia III', 'ISO 31000'],
    icon: ShieldAlert,
    color: 'text-red-400',
    borderColor: 'border-red-400',
    bg: 'bg-red-500/10',
    glow: 'shadow-red-500/20',
    relatedIds: ['controls', 'audit', 'regulatory'],
  },
  {
    id: 'controls',
    title: 'Controles Internos',
    subtitle: 'Internal Controls',
    description:
      'Assegure a eficiência operacional com um catálogo de controles preventivos e detectivos integrados.',
    features: [
      'Biblioteca de Controles Inteligente',
      'Workflow de Testes e Remediação',
      'Certificação SOX Automatizada',
      'Rastreabilidade Total de Mudanças',
    ],
    regulation: ['COSO 2013', 'SOX', 'ISO 37301'],
    icon: ShieldCheck,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-400',
    bg: 'bg-emerald-500/10',
    glow: 'shadow-emerald-500/20',
    relatedIds: ['risks', 'audit', 'regulatory'],
  },
  {
    id: 'audit',
    title: 'Auditoria Interna',
    subtitle: 'Internal Audit',
    description:
      'Digitalize o ciclo de auditoria, do planejamento anual ao follow-up, eliminando planilhas manuais.',
    features: [
      'Planejamento Baseado em Risco',
      'Papéis de Trabalho Digitais',
      'Geração Automática de Relatórios',
      'Follow-up Contínuo de Apontamentos',
    ],
    regulation: ['IPPF (IIA)', 'Res. CMN 4.879'],
    icon: FileCheck,
    color: 'text-amber-400',
    borderColor: 'border-amber-400',
    bg: 'bg-amber-500/10',
    glow: 'shadow-amber-500/20',
    relatedIds: ['risks', 'controls'],
  },
  {
    id: 'regulatory',
    title: 'Compliance & CADOCs',
    subtitle: 'Regulatory Compliance',
    description:
      'Automação para captura de normas e geração de arquivos regulatórios BACEN e CVM.',
    features: [
      'Feed Regulatório com IA',
      'Geração Automática de CADOCs',
      'Controle de Prazos e Obrigações',
      'Inventário de Normas Atualizado',
    ],
    regulation: ['BACEN', 'CVM', 'ANBIMA'],
    icon: BookOpen,
    color: 'text-blue-400',
    borderColor: 'border-blue-400',
    bg: 'bg-blue-500/10',
    glow: 'shadow-blue-500/20',
    relatedIds: ['risks', 'controls', 'lgpd'],
  },
  {
    id: 'lgpd',
    title: 'LGPD & Privacidade',
    subtitle: 'Data Privacy',
    description:
      'Gestão completa do ciclo de vida dos dados pessoais, garantindo conformidade com a LGPD e GDPR.',
    features: [
      'Data Mapping (ROPA) Automatizado',
      'Avaliação de Impacto (DPIA)',
      'Portal do Titular Self-Service',
      'Gestão de Incidentes de Privacidade',
    ],
    regulation: ['Lei 13.709 (LGPD)', 'GDPR'],
    icon: Lock,
    color: 'text-purple-400',
    borderColor: 'border-purple-400',
    bg: 'bg-purple-500/10',
    glow: 'shadow-purple-500/20',
    relatedIds: ['regulatory', 'third-party'],
  },
  {
    id: 'third-party',
    title: 'Gestão de Terceiros',
    subtitle: 'Third Party Risk',
    description:
      'Monitore riscos na cadeia de suprimentos com due diligence e avaliação contínua de fornecedores.',
    features: [
      'Due Diligence Automatizado',
      'Score de Risco de Fornecedores',
      'Monitoramento Contínuo',
      'Gestão do Ciclo de Vida de Contratos',
    ],
    regulation: ['Res. CMN 4.658', 'Res. BCB 85'],
    icon: Users,
    color: 'text-pink-400',
    borderColor: 'border-pink-400',
    bg: 'bg-pink-500/10',
    glow: 'shadow-pink-500/20',
    relatedIds: ['risks', 'lgpd'],
  },
]
