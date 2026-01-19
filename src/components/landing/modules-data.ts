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
    subtitle: 'Enterprise Risk Management',
    description:
      'Estrutura completa para identificação, avaliação e mitigação de riscos corporativos. Utilize matrizes dinâmicas 5x5 e heatmaps interativos para priorizar o que realmente importa.',
    features: [
      'Matrizes de Risco (RCSA)',
      'Indicadores (KRIs)',
      'Cálculo de Capital',
      'Gestão de Perdas',
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
    subtitle: 'Internal Controls System',
    description:
      'Garanta a efetividade operacional com um catálogo robusto de controles preventivos e detectivos. Monitore testes de desenho (TDE) e efetividade (TOE) em tempo real.',
    features: [
      'Biblioteca de Controles',
      'Workflow de Remediação',
      'Certificação SOX',
      'Rastreabilidade',
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
    subtitle: 'Internal Audit Management',
    description:
      'Digitalize todo o ciclo de auditoria, do planejamento anual ao follow-up dos planos de ação. Elimine planilhas e centralize papéis de trabalho.',
    features: [
      'Planejamento de Risco',
      'Papéis de Trabalho',
      'Relatórios Automáticos',
      'Follow-up Contínuo',
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
      'Automação inteligente para captura de normas e geração de arquivos regulatórios. Mantenha-se em conformidade com as exigências do BACEN e CVM.',
    features: [
      'Feed Regulatório IA',
      'Geração de CADOCs',
      'Controle de Prazos',
      'Inventário de Normas',
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
      'Gestão completa do ciclo de vida dos dados pessoais. Mapeie processos (ROPA), avalie riscos (DPIA) e atenda aos direitos dos titulares com agilidade.',
    features: [
      'Data Mapping (ROPA)',
      'Avaliação de Impacto',
      'Portal do Titular',
      'Gestão de Incidentes',
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
    subtitle: 'Third Party Risk (TPR)',
    description:
      'Avalie e monitore riscos na sua cadeia de suprimentos. Due diligence, onboarding e monitoramento contínuo de fornecedores críticos.',
    features: [
      'Due Diligence',
      'Score de Fornecedores',
      'Monitoramento',
      'Gestão de Contratos',
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
