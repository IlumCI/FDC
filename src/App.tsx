import { useEffect } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { useStartup } from './store/useStartup'
import { Home } from './pages/Home'
import { LessonPage } from './pages/LessonPage'
import { Settings } from './pages/Settings'
import { StartupDoc } from './pages/StartupDoc'

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-1.5 rounded-lg text-sm font-medium transition ${
          isActive ? 'bg-accent text-ink' : 'text-muted hover:text-fg hover:bg-panel2'
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default function App() {
  const init = useStartup((s) => s.init)
  const loaded = useStartup((s) => s.loaded)

  useEffect(() => {
    init()
  }, [init])

  return (
    <div className="min-h-full flex flex-col">
      <header className="sticky top-0 z-10 bg-ink/90 backdrop-blur border-b border-line">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <NavLink to="/" className="flex items-center gap-2 mr-auto">
            <img src="/favicon.svg" alt="" className="w-7 h-7" />
            <div>
              <div className="font-bold leading-tight">FDC</div>
              <div className="text-[10px] text-muted leading-tight">Five Degrees Celsius</div>
            </div>
          </NavLink>
          <NavItem to="/">Course</NavItem>
          <NavItem to="/startup">My company</NavItem>
          <NavItem to="/settings">Settings</NavItem>
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-6">
        {!loaded ? (
          <div className="text-muted text-sm">Loading your company…</div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lesson/:id" element={<LessonPage />} />
            <Route path="/startup" element={<StartupDoc />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </main>

      <footer className="border-t border-line">
        <div className="max-w-4xl mx-auto px-4 py-4 text-xs text-muted">
          FDC — compile a company, one lesson at a time. Local-first &amp; offline. Your data never leaves this device.
        </div>
      </footer>
    </div>
  )
}
