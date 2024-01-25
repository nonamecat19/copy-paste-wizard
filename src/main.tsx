import ReactDOM from 'react-dom/client'
import './styles/styles.css'
import Providers from '@/Providers'
import Router from '@/routes/Router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Providers>
    <Router />
  </Providers>
)
