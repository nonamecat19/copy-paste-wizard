import { Link, useLocation } from 'react-router-dom'
import { Button } from '@ui'
import { PropsWithRequiredChildren } from '@/types'

interface IProps extends PropsWithRequiredChildren {
  to: string
}

export function NavLink({ to, children }: IProps) {
  const { pathname } = useLocation()

  return (
    <Link to={to}>
      <Button variant={to === pathname ? 'default' : 'outline'}>
        {children}
      </Button>
    </Link>
  )
}
