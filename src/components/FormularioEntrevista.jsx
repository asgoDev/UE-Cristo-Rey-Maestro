import { useContext, useEffect, useState } from 'react'
import AppSectionLayout from '../AppSectionLayout'
import '../styles/inscripcion-militar-generator.css'
import { GlobalContext } from '../context/GlobalContext'
import { useNavigate } from 'react-router-dom'

import FormSection from './FormSection'
import schoolRegistrationFormConfig from '../data/schoolRegistrationFormConfig'

function FormularioEntrevista() {
  let { formData, setFormData } = useContext(GlobalContext)
  const [formStep, setFormStep] = useState('1')
  const navigate = useNavigate()

  useEffect(() => {
    // const elementoDestino = document.getElementById('student-info-section')
    // elementoDestino.scrollIntoView()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const formDataObject = {}
    for (let [key, value] of data.entries()) {
      if (key == 'picture' && formData['picture'] && value.size == 0) {
        formDataObject[key] = formData['picture']
        continue // evita cambiar la imagen en formData si no se ha añadido una nueva en en InputFile
      }
      formDataObject[key] = value
    }
    setFormData(formDataObject)
    console.log(formDataObject)

    navigate('/UE-Cristo-Rey-Maestro/planilla-entrevista')
  }

  const handleSteps = (e) => {
    setFormStep(e.target.innerText)
  }

  return (
    <AppSectionLayout title={'Formulario de Entrevista'}>
      <form className="form" action="#" onSubmit={handleSubmit}>
        <div className="form__section-container">
          {schoolRegistrationFormConfig.map((section, i) => (
            <FormSection
              sectionConfigData={section}
              formScrollController={formStep}
              index={i}
              key={i}
            />
          ))}
        </div>
      </form>
      <div className="form__navigation">
        <a
          href={`#student-info-section`}
          className={`form-step--first ${
            formStep == '1' && 'form-step--selected'
          }`}
          onClick={handleSteps}
        >
          1
        </a>
        <a
          href={`#representative-info-section`}
          className={`${formStep == '2' && 'form-step--selected'}`}
          onClick={handleSteps}
        >
          2
        </a>
        <a
          href={`#residence-info-section`}
          className={`${formStep == '3' && 'form-step--selected'}`}
          onClick={handleSteps}
        >
          3
        </a>
        <a
          href={`#expenses-section`}
          className={`${formStep == '4' && 'form-step--selected'}`}
          onClick={handleSteps}
        >
          4
        </a>
        <a
          href={`#motivation-section`}
          className={`${formStep == '5' && 'form-step--selected'}`}
          onClick={handleSteps}
        >
          5
        </a>
      </div>
    </AppSectionLayout>
  )
}

export default FormularioEntrevista
