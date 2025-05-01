import './styles/App.css'
import AppBodyLayout from './AppBodyLayout'
import FormularioEntrevista from './components/FormularioEntrevista'
import { Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import DocPreView from './components/DocPreView'
import Info from './components/Info'

function App() {
  return (
    <AppBodyLayout>
      <Routes>
        <Route path="UE-Cristo-Rey-Maestro" element={<Welcome />} />
        <Route
          path="/UE-Cristo-Rey-Maestro/formulario-entrevista"
          element={<FormularioEntrevista />}
        />
        <Route path="*" element={<Welcome />} />
      </Routes>
    </AppBodyLayout>
  )
}

export default App
