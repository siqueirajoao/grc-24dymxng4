import { Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'

export default function Layout() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Outlet />
      <Toaster />
      <Sonner />
    </div>
  )
}
