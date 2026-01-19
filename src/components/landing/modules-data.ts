import {
  ShieldAlert,
  ShieldCheck,
  FileCheck,
  BookOpen,
  Lock,
  Users,
  ScrollText,
  FileSpreadsheet,
  Activity,
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
  // Orbit 1 (Core Governance)
  {
    id: 'risks',
    title: 'Gestão de Riscos',
    subtitle: 'Risk Management',
    description:
      'Estrutura completa para identificação e mitigação de riscos (RCSA), alinhada às melhores práticas de Basileia e ISO 31000.',
    features: [
      'Matrizes de Risco (5x5) Dinâmicas',
      'Heatmaps Interativos',
      'Monitoramento de KRIs',
      'Gestão de Incidentes e Perdas',
    ],
    regulation: ['Resolução 4.557', 'Basileia III', 'ISO 31000'],
    icon: ShieldAlert,
    color: 'text-red-500',
    borderColor: 'border-red-500/50',
    bg: 'bg-red-950/30',
    glow: 'shadow-red-500/20',
    relatedIds: ['controls', 'regulatory', 'third-party'],
  },
  {
    id: 'controls',
    title: 'Controles Internos',
    subtitle: 'Internal Controls',
    description:
      'Fortaleça a primeira e segunda linhas de defesa com testes de controles, planos de ação e certificações periódicas.',
    features: [
      'Biblioteca de Controles',
      'Workflow de Testes',
      'Planos de Remediação',
      'Certificação SOX',
    ],
    regulation: ['COSO 2013', 'SOX', 'Resolução 4.968'],
    icon: ShieldCheck,
    color: 'text-emerald-500',
    borderColor: 'border-emerald-500/50',
    bg: 'bg-emerald-950/30',
    glow: 'shadow-emerald-500/20',
    relatedIds: ['risks', 'audit', 'policies'],
  },
  {
    id: 'audit',
    title: 'Auditoria Interna',
    subtitle: 'Audit Management',
    description:
      'Digitalize o ciclo de auditoria, do planejamento anual ao follow-up dos apontamentos, com trilhas imutáveis.',
    features: [
      'Universe & Planejamento',
      'Papéis de Trabalho Digitais',
      'Relatórios Automáticos',
      'Follow-up de Apontamentos',
    ],
    regulation: ['IPPF (IIA)', 'Resolução 4.879', 'CVM'],
    icon: FileCheck,
    color: 'text-amber-500',
    borderColor: 'border-amber-500/50',
    bg: 'bg-amber-950/30',
    glow: 'shadow-amber-500/20',
    relatedIds: ['risks', 'controls'],
  },
  // Orbit 2 (Regulation & Governance)
  {
    id: 'policies',
    title: 'Políticas',
    subtitle: 'Policy Management',
    description:
      'Ciclo de vida completo das políticas corporativas: criação, revisão, aprovação e publicação com controle de versão.',
    features: [
      'Workflow de Aprovação',
      'Controle de Versão',
      'Portal de Políticas',
      'Attestation de Leitura',
    ],
    regulation: ['ISO 9001', 'Governança Corporativa'],
    icon: ScrollText,
    color: 'text-cyan-500',
    borderColor: 'border-cyan-500/50',
    bg: 'bg-cyan-950/30',
    glow: 'shadow-cyan-500/20',
    relatedIds: ['regulatory', 'controls'],
  },
  {
    id: 'regulatory',
    title: 'Regulatório',
    subtitle: 'Regulatory Compliance',
    description:
      'Gestão automatizada do inventário regulatório, com captura de normas e controle de prazos de obrigações.',
    features: [
      'Feed Regulatório (IA)',
      'Obrigações e Prazos',
      'Inventário de Normas',
      'Gestão de Ofícios',
    ],
    regulation: ['BACEN', 'CVM', 'ANBIMA'],
    icon: BookOpen,
    color: 'text-blue-500',
    borderColor: 'border-blue-500/50',
    bg: 'bg-blue-950/30',
    glow: 'shadow-blue-500/20',
    relatedIds: ['risks', 'cadocs', 'policies'],
  },
  {
    id: 'cadocs',
    title: 'CADOCs',
    subtitle: 'Regulatory Reporting',
    description:
      'Automação e validação da geração de arquivos XML para remessa de informações ao Banco Central (CADOCs).',
    features: [
      'Validador de XML',
      'Geração 2061/4010/5011',
      'Calendário Regulatório',
      'Gestão de Versões',
    ],
    regulation: ['Circular 3.644', 'Leiautes BACEN'],
    icon: FileSpreadsheet,
    color: 'text-indigo-500',
    borderColor: 'border-indigo-500/50',
    bg: 'bg-indigo-950/30',
    glow: 'shadow-indigo-500/20',
    relatedIds: ['regulatory', 'risks'],
  },
  {
    id: 'lgpd',
    title: 'Proteção de Dados',
    subtitle: 'Data Privacy',
    description:
      'Conformidade total com a LGPD através de mapeamento de dados (ROPA), gestão de consentimento e portal do titular.',
    features: [
      'Data Mapping (ROPA)',
      'Avaliação de Impacto (DPIA)',
      'Portal do Titular',
      'Gestão de Cookies',
    ],
    regulation: ['Lei 13.709 (LGPD)', 'GDPR', 'ANPD'],
    icon: Lock,
    color: 'text-purple-500',
    borderColor: 'border-purple-500/50',
    bg: 'bg-purple-950/30',
    glow: 'shadow-purple-500/20',
    relatedIds: ['third-party', 'bia'],
  },
  // Orbit 3 (Support & Resilience)
  {
    id: 'third-party',
    title: 'Gestão de Terceiros',
    subtitle: 'Vendor Risk',
    description:
      'Avaliação e monitoramento contínuo de riscos de fornecedores e parceiros, integrando Due Diligence e contratos.',
    features: [
      'Due Diligence & KYP',
      'Avaliação de Riscos',
      'Monitoramento Contínuo',
      'Contratos & SLAs',
    ],
    regulation: ['Resolução 4.658', 'Resolução BCB 85'],
    icon: Users,
    color: 'text-pink-500',
    borderColor: 'border-pink-500/50',
    bg: 'bg-pink-950/30',
    glow: 'shadow-pink-500/20',
    relatedIds: ['risks', 'lgpd'],
  },
  {
    id: 'bia',
    title: 'BIA & Continuidade',
    subtitle: 'Business Continuity',
    description:
      'Análise de Impacto no Negócio (BIA) e Planos de Continuidade de Negócios (PCN) para garantir resiliência operacional.',
    features: [
      'Análise de Impacto (BIA)',
      'Planos de Continuidade (PCN)',
      'Testes de Recuperação',
      'Gestão de Crises',
    ],
    regulation: ['Resolução 4.557', 'ISO 22301'],
    icon: Activity,
    color: 'text-rose-500',
    borderColor: 'border-rose-500/50',
    bg: 'bg-rose-950/30',
    glow: 'shadow-rose-500/20',
    relatedIds: ['risks', 'third-party'],
  },
]
