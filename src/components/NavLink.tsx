import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.tsx'
import { PropsWithRequiredChildren } from '@/types/global.types.ts'

interface IProps extends PropsWithRequiredChildren {
  to: string
}

export default function NavLink({ to, children }: IProps) {
  const { pathname } = useLocation()

  return (
    <Link to={to}>
      <Button variant={to === pathname ? 'default' : 'outline'}>
        {children}
      </Button>
    </Link>
  )
}
