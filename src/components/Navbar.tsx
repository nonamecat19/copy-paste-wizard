import logo from '@/assets/logo.jpg'
import NavLink from '@/components/NavLink.tsx'

export default function Navbar() {
  return (
    <nav className="border-b px-4 border-zinc-800 h-14 flex justify-between items-center">
      <img alt="Logo" src={logo} className="h-12" />

      <div className="flex gap-2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  )
}
