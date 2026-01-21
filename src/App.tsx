import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/providers/AuthProvider'
import Layout from '@/components/Layout'
import Index from '@/pages/Index'
import Dashboard from '@/pages/Dashboard'
import Admin from '@/pages/Admin'
import Audits from '@/pages/Audits'
import Bia from '@/pages/Bia'
import Cadocs from '@/pages/Cadocs'
import Controls from '@/pages/Controls'
import Lgpd from '@/pages/Lgpd'
import Policies from '@/pages/Policies'
import Risks from '@/pages/Risks'
import Tasks from '@/pages/Tasks'
import TermsOfUse from '@/pages/TermsOfUse'
import ThirdParty from '@/pages/ThirdParty'
import NotFound from '@/pages/NotFound'

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/audits" element={<Audits />} />
          <Route path="/bia" element={<Bia />} />
          <Route path="/cadocs" element={<Cadocs />} />
          <Route path="/controls" element={<Controls />} />
          <Route path="/lgpd" element={<Lgpd />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/risks" element={<Risks />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/third-party" element={<ThirdParty />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
)

export default App
