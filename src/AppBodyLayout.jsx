import './styles/app-body-layout.css'
import AppHeader from './components/AppHeader'
import { Link } from 'react-router-dom'

function AppBodyLayout({ children }) {
  return (
    <div className="general-container">
      <AppHeader />
      <div className="app-content">{children}</div>
      <footer className="app-footer">
        <p>
          Desarrollado por <a href="https://wa.me/qr/SXKVSGQOPIHFN1">AsgoDev</a>
        </p>
      </footer>
    </div>
  )
}

export default AppBodyLayout
