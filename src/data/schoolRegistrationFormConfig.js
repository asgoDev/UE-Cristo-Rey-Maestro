const schoolRegistrationFormConfig = [
  {
    id: 'student-info-section',
    title: '1.- Información del Estudiante',
    config: [
      {
        fieldsetName: 'Datos Personales',
        inputList: [
          { id: 'nombres', label: 'Nombres', type: 'text', required: true },
          { id: 'apellidos', label: 'Apellidos', type: 'text', required: true },
          {
            id: 'fechaNacimiento',
            label: 'Fecha de Nacimiento',
            type: 'date',
            required: true,
          },
          {
            id: 'edad',
            label: 'Edad',
            type: 'number',
            min: 3,
            max: 18,
            required: true,
          },
          {
            id: 'sexo',
            label: 'Sexo',
            type: 'radio',
            options: ['Masculino', 'Femenino'],
            required: true,
          },
          // {
          //   type: "location",
          //   content: [
          //     { id: "paisNacimiento", label: "País de Nacimiento", required: true },
          //     { id: "estadoNacimiento", label: "Estado de Nacimiento", required: true }
          //   ]
          // },
          {
            id: 'telefonoRepresentante',
            label: 'Teléfono del Representante',
            type: 'tel',
            required: true,
          },
        ],
      },
      {
        fieldsetName: 'Datos Escolares',
        inputList: [
          {
            id: 'cedulaEscolar',
            label: 'Cédula Escolar',
            type: 'number',
            required: true,
          },
          {
            id: 'gradoCursar',
            label: 'Grado a Cursar',
            type: 'select',
            options: ['1ro', '2do', '3ro', '4to', '5to', '6to'],
            required: true,
          },
          {
            id: 'institucionProcedencia',
            label: 'Institución de Procedencia',
            type: 'text',
            required: true,
          },
          {
            id: 'dependenciaEconomica',
            label: 'Dependencia Económica',
            type: 'select',
            options: ['Ambos padres', 'Padre', 'Madre', 'Hermanos', 'Otros'],
            required: true,
          },
        ],
      },
      {
        fieldsetName: 'Tallas',
        inputList: [
          { id: 'tallaCamisa', label: 'Camisa', type: 'text' },
          { id: 'tallaPantalon', label: 'Pantalón', type: 'text' },
          { id: 'tallaCalzado', label: 'Calzado', type: 'number' },
        ],
      },
      {
        fieldsetName: 'Información Médica',
        inputList: [
          { id: 'peso', label: 'Peso (kg)', type: 'number', min: 10, max: 100 },
          {
            id: 'tipoSangre',
            label: 'Tipo de Sangre',
            type: 'select',
            options: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
          },
          {
            id: 'alergico',
            label: 'Alérgico',
            type: 'radio',
            options: ['Sí', 'No'],
            required: true,
          },
          {
            id: 'alergicoA',
            label: 'Alérgico a:',
            type: 'text',
            showIf: { field: 'alergico', value: 'Sí' },
          },
          {
            id: 'discapacidad',
            label: 'Discapacidad',
            type: 'select',
            options: [
              'Visual',
              'Auditiva',
              'Lenguaje',
              'Intelectual',
              'Física',
              'Motriz',
              'Ninguna',
            ],
          },
          {
            id: 'discapacidadEspecial',
            label: 'Especifique discapacidad:',
            type: 'text',
          },
          {
            id: 'informeMedico',
            label: 'Informe Médico',
            type: 'radio',
            options: ['Sí', 'No'],
            required: true,
          },
          { id: 'medicoTratante', label: 'Médico Tratante', type: 'text' },
          {
            id: 'tomaMedicamento',
            label: 'Toma algún medicamento',
            type: 'text',
          },
        ],
      },
    ],
  },
  {
    id: 'representative-info-section',
    title: '2.- Datos del Representante',
    config: [
      {
        fieldsetName: 'Padre',
        inputList: [
          {
            id: 'cedulaPadre',
            label: 'Cédula de Identidad',
            type: 'number',
            required: true,
          },
          {
            id: 'nombrePadre',
            label: 'Nombres y Apellidos',
            type: 'text',
            required: true,
          },
          {
            id: 'instruccionPadre',
            label: 'Grado de Instrucción',
            type: 'select',
            options: ['Primaria', 'Secundaria', 'Técnico', 'Universitario'],
            required: true,
          },
          {
            id: 'telefonoPadre',
            label: 'Teléfono',
            type: 'tel',
            required: true,
          },
          { id: 'trabajoPadre', label: 'Lugar de Trabajo', type: 'text' },
          {
            id: 'tipoTrabajoPadre',
            label: 'Tipo',
            type: 'select',
            options: ['Privada', 'Pública', 'Independiente'],
          },
        ],
      },
      {
        fieldsetName: 'Madre',
        inputList: [
          {
            id: 'cedulaMadre',
            label: 'Cédula de Identidad',
            type: 'number',
            required: true,
          },
          {
            id: 'nombreMadre',
            label: 'Nombres y Apellidos',
            type: 'text',
            required: true,
          },
          {
            id: 'instruccionMadre',
            label: 'Grado de Instrucción',
            type: 'select',
            options: ['Primaria', 'Secundaria', 'Técnico', 'Universitario'],
            required: true,
          },
          {
            id: 'telefonoMadre',
            label: 'Teléfono',
            type: 'tel',
            required: true,
          },
          { id: 'trabajoMadre', label: 'Lugar de Trabajo', type: 'text' },
          {
            id: 'tipoTrabajoMadre',
            label: 'Tipo',
            type: 'select',
            options: ['Privada', 'Pública', 'Independiente'],
          },
        ],
      },
    ],
  },
  {
    id: 'residence-info-section',
    title: '3.- Información de Residencia',
    config: [
      {
        fieldsetName: 'Datos de Vivienda',
        inputList: [
          {
            id: 'direccion',
            label: 'Dirección de Habitación',
            type: 'text',
            required: true,
          },
          {
            id: 'convivencia',
            label: 'Con quién vive',
            type: 'select',
            options: ['Padres', 'Madre', 'Padre', 'Abuelos', 'Tíos', 'Otros'],
          },
          {
            id: 'tipoVivienda',
            label: 'Tipo de Vivienda',
            type: 'select',
            options: ['Rancho', 'Casa', 'Quinta', 'Apartamento', 'Otro'],
          },
          {
            id: 'tenenciaVivienda',
            label: 'Tenencia',
            type: 'select',
            options: ['Propia', 'Alquilada', 'Al cuido', 'Pagando'],
          },
          {
            id: 'servicios',
            label: 'Servicios Básicos',
            type: 'checkbox',
            options: [
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
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'expenses-section',
    title: '4.- Gastos Mensuales',
    config: [
      {
        fieldsetName: 'Economía Familiar',
        inputList: [
          {
            id: 'alimentacion',
            label: 'Alimentación',
            type: 'number',
            prefix: '$',
          },
          { id: 'educacion', label: 'Educación', type: 'number', prefix: '$' },
          { id: 'renta', label: 'Renta', type: 'number', prefix: '$' },
          { id: 'luz', label: 'Luz', type: 'number', prefix: '$' },
          { id: 'agua', label: 'Agua', type: 'number', prefix: '$' },
          { id: 'medicina', label: 'Medicina', type: 'number', prefix: '$' },
          {
            id: 'ingresos',
            label: 'Total Ingresos',
            type: 'number',
            prefix: '$',
            required: true,
          },
          {
            id: 'egresos',
            label: 'Total Egresos',
            type: 'number',
            prefix: '$',
            required: true,
          },
        ],
      },
    ],
  },
  {
    id: 'motivation-section',
    title: '5.- Razón de Elección',
    config: [
      {
        fieldsetName: 'Motivación',
        inputList: [
          {
            id: 'razonEleccion',
            label:
              "¿Por qué desea que su representado estudie en la U.E. Colegio 'Cristo, Rey y Maestro'?",

            maxLength: 500,
            required: true,
          },
        ],
      },
    ],
    submit: {
      value: 'Generar planilla',
    },
  },
]

export default schoolRegistrationFormConfig
