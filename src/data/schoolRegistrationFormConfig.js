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
            id: 'nombrePadre',
            label: 'Nombre y Apellido',
            type: 'text',
            required: true,
          },
          {
            id: 'cedulaPadre',
            label: 'Cédula de Identidad',
            type: 'number',
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
            id: 'profesionPadre',
            label: 'Profesión u Oficio',
            type: 'text',
            required: true,
          },
          {
            id: 'telefonoPadre',
            label: 'Teléfono',
            type: 'number',
            required: true,
          },
          { id: 'trabajoPadre', label: 'Lugar de Trabajo', type: 'text' },
          {
            id: 'tipoTrabajoPadre',
            label: 'Tipo',
            type: 'select',
            options: ['Privada', 'Pública', 'Independiente'],
          },
          {
            id: 'cargoPadre',
            label: 'Cargo en la empresa/institución',
            type: 'text',
          },
          {
            id: 'salarioPadre',
            label: 'Salario mensual (Bs.)',
            type: 'number',
          },
        ],
      },
      {
        fieldsetName: 'Madre',
        inputList: [
          {
            id: 'nombreMadre',
            label: 'Nombre y Apellido',
            type: 'text',
            required: true,
          },
          {
            id: 'cedulaMadre',
            label: 'Cédula de Identidad',
            type: 'number',
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
            id: 'profesionMadre',
            label: 'Profesión u Oficio',
            type: 'text',
            required: true,
          },
          {
            id: 'telefonoMadre',
            label: 'Teléfono',
            type: 'number',
            required: true,
          },
          { id: 'trabajoMadre', label: 'Lugar de Trabajo', type: 'text' },
          {
            id: 'tipoTrabajoMadre',
            label: 'Tipo',
            type: 'select',
            options: ['Privada', 'Pública', 'Independiente'],
          },
          {
            id: 'cargoMadre',
            label: 'Cargo en la empresa/institución',
            type: 'text',
          },
          {
            id: 'salarioMadre',
            label: 'Salario mensual (Bs.)',
            type: 'number',
          },
        ],
      },
      {
        fieldsetName:
          'Otro Representante (Cuando el representante no es uno de los padres)',
        inputList: [
          {
            id: 'nombreOtroRepresentante',
            label: 'Nombre y Apellido',
            type: 'text',
          },
          {
            id: 'parentescoOtroRepresentante',
            label: 'Indique el parentesco',
            type: 'select',
            options: [
              'Abuelo/a',
              'Tío/a',
              'Hermano/a',
              'Primo/a',
              'Cuñado/a',
              'Sobrino/a',
              'Representante Legal',
              'Otro',
            ],
          },

          {
            id: 'cedulaOtroRepresentante',
            label: 'Cédula de Identidad',
            type: 'number',
          },
          {
            id: 'instruccionOtroRepresentante',
            label: 'Grado de Instrucción',
            type: 'select',
            options: ['Primaria', 'Secundaria', 'Técnico', 'Universitario'],
          },
          {
            id: 'profesionOtroRepresentante',
            label: 'Profesión u Oficio',
            type: 'text',
            required: true,
          },
          {
            id: 'telefonoOtroRepresentante',
            label: 'Teléfono',
            type: 'number',
          },
          {
            id: 'trabajoOtroRepresentante',
            label: 'Lugar de Trabajo',
            type: 'text',
          },
          {
            id: 'tipoTrabajoOtroRepresentante',
            label: 'Tipo',
            type: 'select',
            options: ['Privada', 'Pública', 'Independiente'],
          },
          {
            id: 'cargoOtroRepresentante',
            label: 'Cargo en la empresa/institución',
            type: 'text',
          },
          {
            id: 'salarioOtroRepresentante',
            label: 'Salario mensual (Bs.)',
            type: 'number',
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
            label:
              '¿Con quienes vive? (Solo el parentesco en relación al estuadiante)',
            type: 'textarea',
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
            id: 'condicionesVivienda',
            label: 'Condiciones de la Vivienda',
            type: 'select',
            options: ['Óptima', 'Regular', 'Deteriorada'],
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
        fieldsetName: 'Economía Familiar (escribir un cero <0> si no aplica)',
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
            label: 'Presupuesto de Alimentación mensual (Bs.)',
            type: 'number',
            required: true,
          },
          {
            id: 'educacion',
            label: 'Presupuesto de Educación mensual (Bs.)',
            type: 'number',
            required: true,
          },
          {
            id: 'renta',
            label: 'Presupuesto de Alquiler (Bs.)',
            type: 'number',
            required: true,
          },
          {
            id: 'luz',
            label: 'Presupuesto de Luz (Bs.)',
            type: 'number',
            required: true,
          },
          {
            id: 'agua',
            label: 'Presupuesto de Agua (Bs.)',
            type: 'number',
            required: true,
          },
          {
            id: 'medicina',
            label: 'Presupuesto de Medicina mensual (Bs.)',
            type: 'number',
            required: true,
          },
          {
            id: 'ingresos',
            label: 'Total de ingresos mensuales (Bs.)',
            type: 'number',
            required: true,
          },
          {
            id: 'egresos',
            label: 'Total egresos mensuales  (Bs.)',
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
            type: 'textarea',
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
