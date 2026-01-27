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
    icon: ShieldAlert,
    color: 'text-red-500',
    borderColor: 'border-red-500/50',
    bg: 'bg-red-950/30',
    glow: 'shadow-red-500/20',
    relatedIds: ['controls', 'regulatory', 'third-party'],
  },
  {
    id: 'controls',
    icon: ShieldCheck,
    color: 'text-emerald-500',
    borderColor: 'border-emerald-500/50',
    bg: 'bg-emerald-950/30',
    glow: 'shadow-emerald-500/20',
    relatedIds: ['risks', 'audit', 'policies'],
  },
  {
    id: 'audit',
    icon: FileCheck,
    color: 'text-amber-500',
    borderColor: 'border-amber-500/50',
    bg: 'bg-amber-950/30',
    glow: 'shadow-amber-500/20',
    relatedIds: ['risks', 'controls'],
  },
  {
    id: 'policies',
    icon: ScrollText,
    color: 'text-cyan-500',
    borderColor: 'border-cyan-500/50',
    bg: 'bg-cyan-950/30',
    glow: 'shadow-cyan-500/20',
    relatedIds: ['regulatory', 'controls'],
  },
  {
    id: 'regulatory',
    icon: BookOpen,
    color: 'text-blue-500',
    borderColor: 'border-blue-500/50',
    bg: 'bg-blue-950/30',
    glow: 'shadow-blue-500/20',
    relatedIds: ['risks', 'cadocs', 'policies'],
  },
  {
    id: 'cadocs',
    icon: FileSpreadsheet,
    color: 'text-indigo-500',
    borderColor: 'border-indigo-500/50',
    bg: 'bg-indigo-950/30',
    glow: 'shadow-indigo-500/20',
    relatedIds: ['regulatory', 'risks'],
  },
  {
    id: 'lgpd',
    icon: Lock,
    color: 'text-purple-500',
    borderColor: 'border-purple-500/50',
    bg: 'bg-purple-950/30',
    glow: 'shadow-purple-500/20',
    relatedIds: ['third-party', 'bia'],
  },
  {
    id: 'third-party',
    icon: Users,
    color: 'text-pink-500',
    borderColor: 'border-pink-500/50',
    bg: 'bg-pink-950/30',
    glow: 'shadow-pink-500/20',
    relatedIds: ['risks', 'lgpd'],
  },
  {
    id: 'bia',
    icon: Activity,
    color: 'text-rose-500',
    borderColor: 'border-rose-500/50',
    bg: 'bg-rose-950/30',
    glow: 'shadow-rose-500/20',
    relatedIds: ['risks', 'third-party'],
  },
]
