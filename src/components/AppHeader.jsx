import insignia from '../assets/insignia cristo rey.png'

import bnaval from '../assets/bnaval.jpg'
import '../styles/app-header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function AppHeader() {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheck = () => {
    setIsChecked(!isChecked)
  }

  return (
    <header className="app-header">
      <div className="app-header__img-container">
        <div className="app-header__left-panel">
          <img
            className="app-header__img app-header__img--mindeftext"
            src={insignia}
            alt="mindef"
          />
        </div>
        <div className="app-header__title-container">
          <span className="app-header__title">
            U. E Colegio Cristo, Rey y Maestro
          </span>
          <span className="app-header__title-span">
            Educando para transformar
          </span>
        </div>
      </div>
      {/* <nav className="app-header__nav">
        <label className="header__ico-menu-label" htmlFor="header__menu-btn">
          <div className={`hamburger ${isChecked ? 'is-active' : ''}`}>
            <div className="_layer -top"></div>
            <div className="_layer -mid"></div>
            <div className="_layer -bottom"></div>
          </div>
        </label>
        <input
          className="header__menu-toggle"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheck}
          id="header__menu-btn"
        />
        <ul className="app-header__ul">
          <li className="app-header__li" onClick={handleCheck}>
            <Link to="/SICADMIL">Inicio</Link>
          </li>
          <li className="app-header__li" onClick={handleCheck}>
            <Link to="/SICADMIL/inscripcion-militar-form">
              Planilla de Incripción Militar
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  )
}

export default AppHeader
