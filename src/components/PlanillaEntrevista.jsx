import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFDownloadLink,
} from '@react-pdf/renderer'

import logo from '../assets/insignia cristo rey.png'
import { newDate } from '../utils/newDate'

// Estilos
const styles = StyleSheet.create({
  page: {
    paddingTop: 90,
    paddingBottom: 40,
    paddingHorizontal: 50,
    fontSize: 10,
    textTransform: 'uppercase',
  },
  section: { marginBottom: 15 },
  sectionTitle: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: { borderWidth: 1, borderColor: '#000', padding: '10px 14px' },

  fieldset: {
    marginBottom: 10,
  },
  fieldsetTitle: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: 5,
    textDecoration: 'underline',
  },
  fieldsetContent: {
    display: 'flex',
    flexDirection: 'row',
    gap: '.3rem .5rem',
    flexWrap: 'wrap',
    padding: '0 10px',
  },
  text: { fontSize: '1rem' },
  check: { fontSize: '1rem', marginBottom: 5 },
  value: { textTransform: 'uppercase' },
  label: { fontWeight: 'bold', textTransform: 'uppercase' },
  image: {
    height: 50,
    width: 50,
  },
})

const PageTemplate = ({ children, pageNumber }) => (
  <Page size="A4" style={styles.page}>
    <Header />
    {children}
    <Footer pageNumber={pageNumber} />
  </Page>
)

const Header = () => (
  <View
    style={{
      position: 'absolute',
      top: 10,
      left: 0,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 50px',
      //   borderBottom: '1px solid #000',
    }}
  >
    <Image style={styles.image} src={logo} />
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        fontSize: '1rem',
        fontWeight: 'bold',
      }}
    >
      <Text>Cuestionario Socioeconómico</Text>
      <Text
        style={{
          borderLeft: '1px solid #000',
          paddingLeft: 10,
        }}
      >
        2025-2026
      </Text>
    </View>
  </View>
)

const Footer = ({ pageNumber }) => (
  <View
    style={{
      position: 'absolute',
      bottom: 10,
      left: 0,
      padding: '10px 50px',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '1rem',
    }}
  >
    <Text
      style={{
        textAlign: 'Right',
        borderTop: '1px solid #000',
        paddingTop: 10,
        paddingBottom: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        // fontSize: '1rem',
        flexGrow: 1,
      }}
    >
      Educando para transformar
    </Text>
    <Text
      style={{
        // fontSize: 12,
        paddingTop: 10,
        paddingBottom: 30,
        borderTop: '1px solid #000',
      }}
    >
      {pageNumber}
    </Text>
  </View>
)

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionContent}>{children}</View>
  </View>
)

const Fieldset = ({ title, children }) => (
  <View style={styles.fieldset}>
    {title && <Text style={styles.fieldsetTitle}>{title}</Text>}
    <View style={styles.fieldsetContent}>{children}</View>
  </View>
)

const Item = ({ label, value }) => (
  <Text style={styles.text}>
    <Text style={styles.label}>{label}: </Text>
    <Text style={styles.value}>{value ? value : '_____________'}</Text>
  </Text>
)
const ItemCheck = ({ label, value }) => (
  <Text style={styles.check}>
    <Text style={styles.label}>{label}: </Text>
    <Text style={styles.value}>{value ? value : '_____________'}</Text>
  </Text>
)
const servicesList = (services) => {
  const servicesArray = [
    'Agua',
    'Luz',
    'Gas',
    'Aseo',
    'Internet',
    'Computadora',
    'TV',
    'Nevera',
    'Lavadora',
    'Aire acondicionado',
  ]
  if (Array.isArray(services)) {
    return servicesArray.map((serviceLabel, i) => (
      <ItemCheck
        key={i}
        label={serviceLabel}
        value={services.includes(serviceLabel) ? 'Sí   ' : 'No   '}
      />
    ))
  }
  return <Text style={styles.value}>{services}</Text>
}

// Documento PDF
const PlanillaEntrevista = ({ data = {} }) => (
  <Document>
    <PageTemplate pageNumber={1}>
      {/* Información del Estudiante */}
      <Text
        style={{
          fontWeight: 'bold',
          marginBottom: 5,
          fontSize: '1.2rem',
          textAlign: 'center',
          textDecoration: 'underline',
        }}
      >
        Planilla de Entrevista
      </Text>
      <Text
        style={{
          textAlign: 'right',
          fontSize: '10px',
          marginRight: 50,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        Nro de Control:
      </Text>
      <Section title="1. Información del Estudiante">
        <Fieldset title="Datos Personales">
          <Item label="Nombres" value={data.nombres} />
          <Item label="Apellidos" value={data.apellidos} />
          <Item
            label="Fecha de nacimiento"
            value={newDate().formatDate(data.fechaNacimiento)}
          />
          <Item label="Edad" value={data.edad} />
          <Item label="Sexo" value={data.sexo} />
          <Item
            label="Lugar de Nacimiento"
            value={`${data.ciudadNacimiento}, parroquia ${data.parroquiaNacimiento}, municipio ${data.municipioNacimiento}, estado ${data.estadoNacimiento}. ${data.paisNacimiento}`}
          />
        </Fieldset>

        <Fieldset title="Datos Escolares">
          <Item label="Cédula Escolar" value={data.cedulaEscolar} />
          <Item label="Grado a cursar" value={data.gradoCursar} />
          <Item
            label="Institución de procedencia"
            value={data.institucionProcedencia}
          />
        </Fieldset>

        <Fieldset title="Información Médica">
          <Item label="Peso" value={`${data.peso} kg`} />
          <Item label="Tipo de sangre" value={data.tipoSangre} />
          <Item label="Alérgico" value={data.alergico} />
          {data.alergico == 'Sí' && (
            <Item label="Alérgico a" value={data.alergicoA} />
          )}
          <Item label="Discapacidad" value={data.discapacidad} />
          {data.discapacidad !== 'Ninguna' && (
            <Item
              label="Especifique discapacidad"
              value={data.discapacidadEspecial}
            />
          )}
          <Item label="Informe médico" value={data.informeMedico} />
          {(data.discapacidad !== 'Ninguna' ||
            data.alergico == 'Sí' ||
            data.informeMedico == 'Sí') && (
            <Item label="Médico tratante" value={data.medicoTratante} />
          )}
          <Item
            label="Toma algún medicamento"
            value={data.tomaMedicamento || 'no'}
          />
        </Fieldset>
        <Fieldset title="Tallas">
          <Item label="Camisa" value={data.tallaCamisa} />
          <Item label="Pantalón" value={data.tallaPantalon} />
          <Item label="Calzado" value={data.tallaCalzado} />
        </Fieldset>
      </Section>
      {/* Datos del Representante */}
      <Section title="2. Datos del Representante">
        <Fieldset title="Padre">
          <Item label="Nombre y Apellido" value={data.nombrePadre} />
          <Item label="Cédula" value={data.cedulaPadre} />
          <Item label="Teléfono" value={data.telefonoPadre} />
          <Item label="Correo Electrónico" value={data.correoPadre} />
          <Item label="Grado de instrucción" value={data.instruccionPadre} />
          <Item label="Profesión" value={data.profesionPadre} />
          <Item label="Lugar de trabajo" value={data.trabajoPadre || 'No'} />
          <Item label="Tipo" value={data.tipoTrabajoPadre || 'No aplica'} />
          <Item
            label="Cargo"
            value={data.cargoPadre || '_____________________'}
          />
          <Item
            label="
          Salario Mensual"
            value={data.salarioPadre || '_____________'}
          />
        </Fieldset>
        <Fieldset title="Madre">
          <Item label="Nombre y Apellido" value={data.nombreMadre} />
          <Item label="Cédula" value={data.cedulaMadre} />
          <Item label="Teléfono" value={data.telefonoMadre} />
          <Item label="Correo Electrónico" value={data.correoMadre} />
          <Item label="Grado de instrucción" value={data.instruccionMadre} />
          <Item label="Profesión" value={data.profesionMadre} />

          <Item label="Lugar de trabajo" value={data.trabajoMadre || 'No'} />
          <Item label="Tipo" value={data.tipoTrabajoMadre || 'No aplica'} />
          <Item
            label="Cargo"
            value={data.cargoMadre || '_____________________'}
          />
          <Item
            label="Salario Mensual"
            value={data.salarioMadre || '_____________'}
          />
        </Fieldset>

        {(data.parentescoOtroRepresentante ||
          data.cedulaOtroRepresentante ||
          data.nombreOtroRepresentante) && (
          <Fieldset title="Otro Representante">
            <Item
              label="Nombre y Apellido"
              value={data.nombreOtroRepresentante}
            />
            <Item label="Parentesco" value={data.parentescoOtroRepresentante} />
            <Item label="Cédula" value={data.cedulaOtroRepresentante} />
            <Item label="Teléfono" value={data.telefonoOtroRepresentante} />
            <Item
              label="Correo Electrónico"
              value={data.correoOtroRepresentante}
            />
            <Item
              label="Grado de instrucción"
              value={data.instruccionOtroRepresentante}
            />

            <Item label="Profesión" value={data.profesionOtroRepresentante} />
            <Item
              label="Lugar de trabajo"
              value={data.trabajoOtroRepresentante || 'No'}
            />
            <Item
              label="Tipo"
              value={data.tipoTrabajoOtroRepresentante || 'No aplica'}
            />
            <Item
              label="Cargo"
              value={data.cargoOtroRepresentante || '_____________________'}
            />
            <Item
              label="Salario Mensual"
              value={data.salarioOtroRepresentante || '_____________'}
            />
          </Fieldset>
        )}
      </Section>
    </PageTemplate>

    <PageTemplate pageNumber={2}>
      {/* Información de Residencia */}
      <Section title="3. Información de Residencia">
        <Fieldset title="Datos de Vivienda">
          <Item label="Dirección" value={data.direccion} />
          <Item label="Con quién vive" value={data.convivencia} />
          <Item label="Tipo de vivienda" value={data.tipoVivienda} />
          <Item label="Tenencia de la vivienda" value={data.tenenciaVivienda} />
          <Item
            label="Condiciones de la vivienda"
            value={data.condicionesVivienda}
          />
          <Text style={styles.text}>
            <Text style={styles.label}>Servicios Publicos: </Text>
            {servicesList(data.servicios)}
          </Text>
        </Fieldset>
      </Section>
      {/* Gastos Mensuales */}
      <Section title="4. Gastos Mensuales">
        <Fieldset title="Economía Familiar">
          <Item
            label="Dependencia económica"
            value={data.dependenciaEconomica}
          />
          <Item label="Alimentación" value={`${data.alimentacion} Bs. D`} />
          <Item label="Educación" value={`${data.educacion} Bs. D`} />
          <Item label="Renta" value={`${data.renta} Bs. D`} />
          <Item label="Luz" value={`${data.luz} Bs. D`} />
          <Item label="Agua" value={`${data.agua} Bs. D`} />
          <Item label="Medicina" value={`${data.medicina} Bs. D`} />
          <Item label="Total Ingresos" value={`${data.ingresos} Bs. D`} />
          <Item label="Total Egresos" value={`${data.egresos} Bs. D`} />
        </Fieldset>
      </Section>

      {/* Motivo de Inscripción */}
      <Section title="5. Motivo de Inscripción">
        <Fieldset title="Motivación">
          <Item label="Razón de elección" value={data.razonEleccion} />
        </Fieldset>
      </Section>

      <View
        style={{
          fontSize: '.7rem',
          display: 'flex',
          gap: 8,
          textAlign: 'left',
          position: 'absolute',
          bottom: 192,
          left: 50,
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: '.8rem' }}>
          Entrevistador
        </Text>
        <Text>Nombre y Apellido:</Text>
        <Text>__________________________________________________</Text>
        <Text>Cargo:</Text>
        <Text>
          {' '}
          <Text>__________________________________________________</Text>
        </Text>
        <Text>Firma:</Text>
        <Text>
          {' '}
          <Text>__________________________________________________</Text>
        </Text>
      </View>
      <View
        style={{
          fontSize: '.7rem',
          display: 'flex',
          gap: 8,
          textAlign: 'right',
          position: 'absolute',
          bottom: 95,
          right: 50,
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: '.8rem' }}>
          Representante
        </Text>
        <Text>C.I.:</Text>
        <Text>__________________________________________________</Text>
        <Text>Nombre y Apellido:</Text>
        <Text>
          {' '}
          <Text>__________________________________________________</Text>
        </Text>
        <Text>Firma:</Text>
        <Text>
          {' '}
          <Text>__________________________________________________</Text>
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
            justifyContent: 'space-evenly',
          }}
        >
          <Text
            style={{
              borderBottom: 1,
              borderRight: 1,
              borderColor: '#000',
              height: '9rem',
              paddingRight: 7,
            }}
          >
            Pulgar izquierdo
          </Text>
          <Text
            style={{
              borderBottom: 1,
              borderRight: 1,
              borderColor: '#000',
              height: '9rem',
              paddingRight: 7,
            }}
          >
            pulgar derecho
          </Text>
        </View>
      </View>
      <View style={{ position: 'absolute', bottom: 80, left: 50 }}>
        <Text>{`Coro, ${newDate().todayLong()}`}</Text>
      </View>
    </PageTemplate>
  </Document>
)

// Botón para descargar el PDF
export const DownloadPdf = ({ data = {} }) => (
  <button className="single-button">
    <PDFDownloadLink
      document={<PlanillaEntrevista data={data} />}
      fileName="Planilla-de-Entrevista.pdf"
      style={{ color: 'white', textDecoration: 'none' }}
    >
      {({ loading }) => (loading ? 'Generando PDF...' : 'Descargar PDF')}
    </PDFDownloadLink>
  </button>
)

export default PlanillaEntrevista
