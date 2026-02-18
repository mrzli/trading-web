import { HomePage } from '@/app/pages/home-page'
import { SettingsPage } from '@/app/pages/settings-page'
import { NavLink, Route, Routes } from 'react-router-dom'

export function App() {
  return (
    <main className="mx-auto grid min-h-screen w-full max-w-2xl gap-6 px-6 py-12">
      <nav className="flex items-center gap-4 border-b pb-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'font-semibold text-foreground' : 'text-muted-foreground'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? 'font-semibold text-foreground' : 'text-muted-foreground'
          }
        >
          Settings
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </main>
  )
}
