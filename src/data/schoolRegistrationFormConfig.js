const schoolRegistrationFormConfig = [
  {
    id: 'student-info-section',
    title: '1.- Información del Estudiante',
    config: [
      {
        fieldsetName: 'Datos Personales del Estudiante',
        inputList: [
          {
            id: 'nombres',
            label: 'Nombres del Estudiante',
            type: 'text',
            required: true,
          },
          {
            id: 'apellidos',
            label: 'Apellidos del Estudiante',
            type: 'text',
            required: true,
          },
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
        ],
      },
      {
        fieldsetName: 'Lugar de nacimiento del estudiante',
        inputList: [
          {
            type: 'location',
            content: [
              {
                id: 'paisNacimiento',
                label: 'País',
                type: '',
                title: 'Indique país de nacimiento',
                required: true,
              },
              {
                id: 'estadoNacimiento',
                label: 'Estado',
                type: '',
                title: 'Indique estado del país donde nació',
                required: true,
              },
              {
                id: 'municipioNacimiento',
                label: 'Municipio',
                type: '',
                title: ' Indique municipio del estado.',
                required: true,
              },
              {
                id: 'parroquiaNacimiento',
                label: 'Parroquia',
                type: '',
                title:
                  'Indique parroquia del municipio en que nació / o lo que aplica en el país de nacimiento.',
                required: true,
              },
            ],
          },
          {
            id: 'ciudadNacimiento',
            label: 'Ciudad de Nacimiento',
            type: 'text',
            required: true,
          },
        ],
      },
      {
        fieldsetName: 'Datos Escolares del Estudiante',
        inputList: [
          {
            id: 'cedulaEscolar',
            label: 'Cédula Escolar',
            type: 'number',
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
        ],
      },
      {
        fieldsetName: 'Tallas del Estudiante',
        inputList: [
          { id: 'tallaCamisa', label: 'Camisa', type: 'text', required: true },
          {
            id: 'tallaPantalon',
            label: 'Pantalón',
            type: 'text',
            required: true,
          },
          {
            id: 'tallaCalzado',
            label: 'Calzado',
            type: 'number',
            required: true,
          },
        ],
      },
      {
        fieldsetName: 'Información Médica del Estudiante',
        inputList: [
          {
            id: 'peso',
            label: 'Peso (kg)',
            type: 'number',
            min: 10,
            max: 100,
            required: true,
          },
          {
            id: 'tipoSangre',
            label: 'Tipo de Sangre',
            type: 'select',
            options: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            required: true,
          },
          {
            id: 'alergico',
            label: '¿El estudiante es alérgico?',
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
            label: '¿Posee alguna discapacidad?',
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
            required: true,
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
            label: 'Medicamento recetado',
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
            required: true,
          },
          {
            id: 'tipoVivienda',
            label: 'Tipo de Vivienda',
            type: 'select',
            options: ['Rancho', 'Casa', 'Quinta', 'Apartamento', 'Otro'],
            required: true,
          },
          {
            id: 'tenenciaVivienda',
            label: 'Tenencia',
            type: 'select',
            options: ['Propia', 'Alquilada', 'Al cuido', 'Pagando'],
            required: true,
          },
          {
            id: 'servicios',
            label: 'Servicios Básicos',
            type: 'checkbox',
            required: true,
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
            id: 'dependenciaEconomica',
            label: 'Dependencia Económica',
            type: 'select',
            options: [
              'Ambos padres',
              'Padre',
              'Madre',
              'Hermanos',
              'Tios',
              'Abuelos',
              'Otros',
            ],
            required: true,
          },
          {
            id: 'alimentacion',
            label: 'Presupuesto de Alimentación (Bs. D)',
            type: 'number',
            required: true,
          },
          {
            id: 'educacion',
            label: 'Presupuesto de Educación (Bs. D)',
            type: 'number',
            required: true,
          },
          {
            id: 'renta',
            label: 'Presupuesto de Renta (Bs. D)',
            type: 'number',
            required: true,
          },
          {
            id: 'luz',
            label: 'Presupuesto de Luz (Bs. D)',
            type: 'number',
            required: true,
          },
          {
            id: 'agua',
            label: 'Presupuesto de Agua (Bs. D)',
            type: 'number',
            required: true,
          },
          {
            id: 'medicina',
            label: 'Presupuesto de Medicina (Bs. D)',
            type: 'number',
            required: true,
          },
          {
            id: 'ingresos',
            label: 'Total Ingresos (Bs. D)',
            type: 'number',
            required: true,
          },
          {
            id: 'egresos',
            label: 'Total Egresos (Bs. D)',
            type: 'number',
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
