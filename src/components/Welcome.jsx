import React from 'react'
import AppSectionLayout from '../AppSectionLayout'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <AppSectionLayout title={'Bienvenido'}>
      <p>
        Acabas de entrar al portal Web de la{' '}
        <strong>U. E. Cristo, Rey y Maestro</strong>.
      </p>
      <br />
      <p>
        En este sitio podras obtener la <strong>Planilla de Entrevista</strong>{' '}
        para poder continuar con el proceso de seleccion de su representado solo
        si ya pasó el proceso de selección. Por favor, abstenerse de llenar el
        formulario si no ha sido seleccionado.
      </p>
      <br />

      <br />
      <p>Haga click en el botón de abajo para comenzar.</p>
      <Link to="/UE-Cristo-Rey-Maestro/formulario-entrevista">
        Ir al Formulario
      </Link>
    </AppSectionLayout>
  )
}

export default Welcome
