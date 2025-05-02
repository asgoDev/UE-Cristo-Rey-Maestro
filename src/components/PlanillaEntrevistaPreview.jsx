import AppSectionLayout from '../AppSectionLayout'
import { PDFViewer } from '@react-pdf/renderer'
import PlanillaEntrevista, { DownloadPdf } from './PlanillaEntrevista'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

function PlanillaEntrevistaPreview() {
  const { formData } = useContext(GlobalContext)
  return (
    <AppSectionLayout title={'Planilla de Entrevista'}>
      <p>
        Esta es la planilla debe ser impresa en una sola hoja por ambas caras.
      </p>
      <br />
      <PDFViewer style={{ width: '100%', height: '90vh' }}>
        <PlanillaEntrevista data={formData} />
      </PDFViewer>
      <DownloadPdf data={formData} />
    </AppSectionLayout>
  )
}

export default PlanillaEntrevistaPreview
