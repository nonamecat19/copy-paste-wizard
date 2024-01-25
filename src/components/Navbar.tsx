import logo from '@/assets/logo.jpg'
import NavLink from '@/components/NavLink'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t } = useTranslation()
  return (
    <nav className="border-b px-4 border-zinc-w00 dark:border-zinc-800 h-14 flex justify-between items-center">
      <img alt="Logo" src={logo} className="h-10 rounded-lg" />

      <div className="flex gap-2">
        <NavLink to="/">{t('Home')}</NavLink>
        <NavLink to="/settings">{t('Settings')}</NavLink>
      </div>
    </nav>
  )
}
