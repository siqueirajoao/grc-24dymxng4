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

export function AppSidebar() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const items = [
    {
      label: 'Executivo',
      items: [
        { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard }, // Updated URL
        { title: 'Minhas Tarefas', url: '/tasks', icon: ListTodo },
      ],
    },
    {
      label: 'Core GRC',
      items: [
        { title: 'Gestão de Riscos', url: '/risks', icon: ShieldAlert },
        { title: 'Controles Internos', url: '/controls', icon: ShieldCheck },
        { title: 'Auditorias & Achados', url: '/audits', icon: FileCheck },
      ],
    },
    {
      label: 'Regulatório',
      items: [
        { title: 'Políticas & Normas', url: '/policies', icon: BookOpen },
        { title: 'CADOCs & Reports', url: '/cadocs', icon: FileText },
      ],
    },
    {
      label: 'Especializado',
      items: [
        { title: 'LGPD & Privacidade', url: '/lgpd', icon: Lock },
        { title: 'Gestão de Terceiros', url: '/third-party', icon: Users },
        { title: 'BIA & Continuidade', url: '/bia', icon: Activity },
      ],
    },
    {
      label: 'Sistema',
      items: [{ title: 'Administração', url: '/admin', icon: Settings }],
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
                  Configurações
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
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
