import React from 'react'
import AppSectionLayout from '../AppSectionLayout'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <AppSectionLayout title={'Bienvenido'}>
      <p>
        Acabas de ingresar al portal Web de la{' '}
        <strong>U.E. Colegio "Cristo, Rey y Maestro"</strong>.
      </p>
      <br />
      <p>
        En este sitio podras obtener la <strong>Planilla de Entrevista</strong>{' '}
        la cual deberá llenar correctamente siguiendo cada paso e imprimir por
        ambos lados, la misma tendrá que consignar al colegio en la fecha
        asignada. Por favor abstenerse de llenar el cuestionario si no ha sido
        pre-seleccionado.
      </p>
      <br />

      <br />
      <p>Haga click en el botón de abajo para comenzar.</p>
      <Link
        className="single-button"
        to="/UE-Cristo-Rey-Maestro/formulario-entrevista"
      >
        Ir al Formulario
      </Link>
    </AppSectionLayout>
  )
}

export default Welcome
