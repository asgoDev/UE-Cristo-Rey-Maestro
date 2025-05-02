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

// Estilos
const styles = StyleSheet.create({
  page: {
    paddingTop: 100,
    paddingBottom: 40,
    paddingHorizontal: 50,
    fontSize: 14,
  },
  section: { marginBottom: 15 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', marginBottom: 10 },
  sectionContent: { borderWidth: 1, borderColor: '#000', padding: '10px 14px' },

  fieldset: {
    marginBottom: 10,
  },
  fieldsetTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  fieldsetContent: {
    display: 'flex',
    flexDirection: 'row',
    gap: '.3rem .5rem',
    flexWrap: 'wrap',
    padding: '0 10px',
  },
  text: { fontSize: 12 },
  value: { textTransform: 'capitalize' },
  label: { fontWeight: 'bold' },
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
        fontSize: 12,
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
        fontSize: 12,
        flexGrow: 1,
      }}
    >
      Educando para transformar
    </Text>
    <Text
      style={{
        fontSize: 12,
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
    <Text style={styles.value}>{value ? value : '____'}</Text>
  </Text>
)

// Documento PDF
const PlanillaEntrevista = ({ data = {} }) => (
  <Document>
    <PageTemplate pageNumber={1}>
      {/* Información del Estudiante */}
      <Section title="1. Información del Estudiante">
        <Fieldset title="Datos Personales">
          <Item label="Nombres" value={data.nombres} />
          <Item label="Apellidos" value={data.apellidos} />
          <Item label="Fecha de nacimiento" value={data.fechaNacimiento} />
          <Item label="Edad" value={data.edad} />
          <Item label="Sexo" value={data.sexo} />
          <Item
            label="Teléfono del representante"
            value={data.telefonoRepresentante}
          />
        </Fieldset>

        <Fieldset title="Datos Escolares">
          <Item label="Cédula Escolar" value={data.cedulaEscolar} />
          <Item label="Grado a cursar" value={data.gradoCursar} />
          <Item
            label="Institución de procedencia"
            value={data.institucionProcedencia}
          />
          <Item
            label="Dependencia económica"
            value={data.dependenciaEconomica}
          />
        </Fieldset>

        <Fieldset title="Tallas">
          <Item label="Camisa" value={data.tallaCamisa} />
          <Item label="Pantalón" value={data.tallaPantalon} />
          <Item label="Calzado" value={data.tallaCalzado} />
        </Fieldset>

        <Fieldset title="Información Médica">
          <Item label="Peso" value={data.peso} />
          <Item label="Tipo de sangre" value={data.tipoSangre} />
          <Item label="Alérgico" value={data.alergico} />
          <Item label="Alérgico a" value={data.alergicoA} />
          <Item label="Discapacidad" value={data.discapacidad} />
          <Item
            label="Especifique discapacidad"
            value={data.discapacidadEspecial}
          />
          <Item label="Informe médico" value={data.informeMedico} />
          <Item label="Médico tratante" value={data.medicoTratante} />
          <Item label="Toma algún medicamento" value={data.tomaMedicamento} />
        </Fieldset>
      </Section>
      {/* Datos del Representante */}
      <Section title="2. Datos del Representante">
        <Fieldset title="Padre">
          <Item label="Cédula" value={data.cedulaPadre} />
          <Item label="Nombre" value={data.nombrePadre} />
          <Item label="Grado de instrucción" value={data.instruccionPadre} />
          <Item label="Teléfono" value={data.telefonoPadre} />
          <Item label="Lugar de trabajo" value={data.trabajoPadre} />
          <Item label="Tipo" value={data.tipoTrabajoPadre} />
        </Fieldset>
        <Fieldset title="Madre">
          <Item label="Cédula" value={data.cedulaMadre} />
          <Item label="Nombre" value={data.nombreMadre} />
          <Item label="Grado de instrucción" value={data.instruccionMadre} />
          <Item label="Teléfono" value={data.telefonoMadre} />
          <Item label="Lugar de trabajo" value={data.trabajoMadre} />
          <Item label="Tipo" value={data.tipoTrabajoMadre} />
        </Fieldset>
      </Section>

      {/* Información de Residencia */}
      <Section title="3. Información de Residencia">
        <Fieldset title="Datos de Vivienda">
          <Item label="Dirección" value={data.direccion} />
          <Item label="Con quién vive" value={data.convivencia} />
          <Item label="Tipo de vivienda" value={data.tipoVivienda} />
          <Item label="Tenencia de vivienda" value={data.tenenciaVivienda} />
          <Item label="Servicios básicos" value={data.servicios} />
        </Fieldset>
      </Section>
    </PageTemplate>

    <PageTemplate pageNumber={2}>
      {/* Gastos Mensuales */}
      <Section title="4. Gastos Mensuales">
        <Fieldset title="Economía Familiar">
          <Item label="Alimentación" value={data.alimentacion} />
          <Item label="Educación" value={data.educacion} />
          <Item label="Renta" value={data.renta} />
          <Item label="Luz" value={data.luz} />
          <Item label="Agua" value={data.agua} />
          <Item label="Medicina" value={data.medicina} />
          <Item label="Total Ingresos" value={data.ingresos} />
          <Item label="Total Egresos" value={data.egresos} />
        </Fieldset>
      </Section>

      {/* Motivo de Inscripción */}
      <Section title="5. Motivo de Inscripción">
        <Fieldset title="Motivación">
          <Item label="Razón de elección" value={data.razonEleccion} />
        </Fieldset>
      </Section>
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
