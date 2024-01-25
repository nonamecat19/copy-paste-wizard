import logo from '@/assets/logo.jpg'
import NavLink from '@/components/NavLink'

export default function Navbar() {
  return (
    <nav className="border-b px-4 border-zinc-w00 dark:border-zinc-800 h-14 flex justify-between items-center">
      <img alt="Logo" src={logo} className="h-10 rounded-lg" />

      <div className="flex gap-2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  )
}
