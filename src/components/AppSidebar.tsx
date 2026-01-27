import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarFooter,
} from '@/components/ui/sidebar'
import {
  LayoutDashboard,
  ListTodo,
  ShieldAlert,
  ShieldCheck,
  FileCheck,
  BookOpen,
  FileText,
  Lock,
  Users,
  Activity,
  Settings,
  Building2,
  LogOut,
  User,
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'

export function AppSidebar() {
  const location = useLocation()
  const { t } = useTranslation()

  const isActive = (path: string) => location.pathname === path

  const items = [
    {
      label: t('sidebar.executive'),
      items: [
        {
          title: t('sidebar.dashboard'),
          url: '/dashboard',
          icon: LayoutDashboard,
        },
        { title: t('sidebar.my_tasks'), url: '/tasks', icon: ListTodo },
      ],
    },
    {
      label: t('sidebar.core_grc'),
      items: [
        {
          title: t('sidebar.risk_management'),
          url: '/risks',
          icon: ShieldAlert,
        },
        {
          title: t('sidebar.internal_controls'),
          url: '/controls',
          icon: ShieldCheck,
        },
        {
          title: t('sidebar.audits_findings'),
          url: '/audits',
          icon: FileCheck,
        },
      ],
    },
    {
      label: t('sidebar.regulatory'),
      items: [
        {
          title: t('sidebar.policies_norms'),
          url: '/policies',
          icon: BookOpen,
        },
        { title: t('sidebar.cadocs_reports'), url: '/cadocs', icon: FileText },
      ],
    },
    {
      label: t('sidebar.specialized'),
      items: [
        { title: t('sidebar.lgpd_privacy'), url: '/lgpd', icon: Lock },
        {
          title: t('sidebar.third_party'),
          url: '/third-party',
          icon: Users,
        },
        { title: t('sidebar.bia_continuity'), url: '/bia', icon: Activity },
      ],
    },
    {
      label: t('sidebar.system'),
      items: [
        { title: t('sidebar.administration'), url: '/admin', icon: Settings },
      ],
    },
  ]

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Building2 className="h-5 w-5" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
            <span className="truncate font-semibold">Lawyn GRC</span>
            <span className="truncate text-xs">Financial Suite</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {items.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive(item.url)}
                      tooltip={item.title}
                    >
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="group-data-[collapsible=icon]:hidden px-2 mb-2">
              <LanguageSwitcher />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage
                      src="https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1"
                      alt="User"
                    />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                    <span className="truncate font-semibold">
                      Carlos Nogueira
                    </span>
                    <span className="truncate text-xs">Chief Risk Officer</span>
                  </div>
                  <User className="ml-auto size-4 group-data-[collapsible=icon]:hidden" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  {t('sidebar.settings')}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  {t('sidebar.logout')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
