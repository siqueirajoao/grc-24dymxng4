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
  regulationTitle?: string
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
    subtitle: 'ENTERPRISE RISK MANAGEMENT',
    description:
      'Estrutura completa para identificação e mitigação de riscos (RCSA), alinhada às melhores práticas globais.',
    features: [
      'Matrizes de Risco Dinâmicas',
      'Heatmaps Interativos',
      'Monitoramento de KRIs',
      'Tratamento de Riscos',
    ],
    regulation: ['COSO ERM', 'Boas Práticas'],
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
    subtitle: 'INTERNAL CONTROLS',
    description:
      'Fortaleça a primeira e segunda linhas de defesa com testes de controles, planos de ação e certificações periódicas.',
    features: [
      'Biblioteca de Controles',
      'Gestão de Evidências',
      'Workflow de Testes',
      'Mapeamento de Riscos',
    ],
    regulation: ['COSO ICIF', 'ISO 27001'],
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
    subtitle: 'INTERNAL AUDIT',
    description:
      'Digitalize o ciclo de auditoria, do planejamento anual ao follow-up dos apontamentos, com trilhas imutáveis.',
    features: [
      'Planejamento de Auditorias',
      'Relatórios Automáticos',
      'Follow-up de Requerimentos',
      'Tratamento de Apontamentos',
    ],
    regulation: [],
    icon: FileCheck,
    color: 'text-amber-500',
    borderColor: 'border-amber-500/50',
    bg: 'bg-amber-950/30',
    glow: 'shadow-amber-500/20',
    relatedIds: ['risks', 'controls'],
  },
  {
    id: 'policies',
    title: 'Políticas',
    subtitle: 'POLICY MANAGEMENT',
    description:
      'Ciclo de vida completo das políticas corporativas: criação, revisão, aprovação e publicação com controle de versão.',
    features: [
      'Workflow de Aprovação',
      'Controle de Versão',
      'Portal de Políticas',
      'Acompanhamento de Adesão',
    ],
    regulation: ['Compliance', 'ESG'],
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
    subtitle: 'REGULATORY COMPLIANCE',
    description:
      'Gestão automatizada do inventário regulatório, com captura de normas e controle de prazos de obrigações.',
    features: [
      'Feed Regulatório',
      'Obrigações e Prazos',
      'Inventário de Normas',
      'Gestão de Ofícios',
    ],
    regulation: ['Banco Central', 'CVM', 'Receita Federal', 'Planalto'],
    regulationTitle: 'Reguladores',
    icon: BookOpen,
    color: 'text-blue-500',
    borderColor: 'border-blue-500/50',
    bg: 'bg-blue-950/30',
    glow: 'shadow-blue-500/20',
    relatedIds: ['risks', 'cadocs', 'policies'],
  },
  {
    id: 'cadocs',
    title: 'Reportes',
    subtitle: 'REGULATORY REPORTING',
    description:
      'Automação e validação de relatórios regulatórios complexos, com integração de dados e validação de regras.',
    features: [
      'Validador de Arquivos',
      'Geração de Layouts',
      'Calendário Regulatório',
      'Gestão de Versões',
    ],
    regulation: ['Obrigações Regulatórias', 'Fisco', 'Layouts'],
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
    subtitle: 'DATA PRIVACY',
    description:
      'Garanta a conformidade total com a LGPD através de ferramentas especializadas para proteção de dados pessoais.',
    features: [
      'Relatório de Impacto (RIPD)',
      'Mapeamento de Processos',
      'Gestão de Relatórios',
    ],
    regulation: ['Lei 13.709 (LGPD)', 'ANPD'],
    icon: Lock,
    color: 'text-purple-500',
    borderColor: 'border-purple-500/50',
    bg: 'bg-purple-950/30',
    glow: 'shadow-purple-500/20',
    relatedIds: ['third-party', 'bia'],
  },
  {
    id: 'third-party',
    title: 'Gestão de Terceiros',
    subtitle: 'VENDOR RISK',
    description:
      'Monitoramento e controle de riscos de fornecedores e parceiros, com acompanhamento de prazos de due diligence e contratos.',
    features: [
      'Avaliação de Riscos',
      'Monitoramento Contínuo',
      'Contratos e SLAs',
      'Controle de Diligências',
    ],
    regulation: ['Integridade de Terceiros', 'Due Diligence'],
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
    subtitle: 'BUSINESS CONTINUITY',
    description:
      'Identificação de processos críticos e visão geral das atividades essenciais ao negócio.',
    features: ['Análise de Impacto (BIA)', 'Gestão de Crises'],
    regulation: ['ISO 22301', 'Resiliência Operacional'],
    icon: Activity,
    color: 'text-rose-500',
    borderColor: 'border-rose-500/50',
    bg: 'bg-rose-950/30',
    glow: 'shadow-rose-500/20',
    relatedIds: ['risks', 'third-party'],
  },
]
