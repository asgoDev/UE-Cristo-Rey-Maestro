import escudo from "../assets/escudo.png";
import escudo2 from "../assets/escudo2.png";
import scisors from "../assets/scisors.png";
import { useContext, useEffect, useState } from "react";
import { newDate } from "../utils/newDate";
import { GlobalContext } from "../context/GlobalContext";
import "../styles/planilla.css";

function Planilla() {
  const { isAllInputsOk, formData } = useContext(GlobalContext);
  const [date, setDate] = useState("hoy");

  useEffect(() => {
    setDate(newDate().todayShort());
  }, []);

  const yesNoCheckboxGenerator = (value) => {
    let options = ["si", "no"];
    return options.map((option, i) => (
      <span key={i}>
        {option}{" "}
        <span
          className={`fake-check ${value == option && "fake-check--checked"}`}
        ></span>{" "}
      </span>
    ));
  };

  const setMilitarInfo = (array) => {
    const militarInfo = [
      {
        tag: "militar profesional",
        source: formData.militaryProfessionalStatus,
      },
      { tag: "miliciano", source: formData.militiaRank },
      { tag: "reservista", source: formData.militaryServiceStatus },
      {
        tag: "ninguna",
        source: !(
          formData.militaryServiceStatus ||
          formData.militaryProfessionalStatus ||
          formData.militiaRank
        ),
      },
    ];

    return militarInfo.map((item, i) => (
      <p key={i} className="card__item">
        {item.tag}:{" "}
        <span
          className={`fake-check ${item.source ? "fake-check--checked" : null}`}
        ></span>
      </p>
    ));
  };

  return (
    <div className="page">
      <header className="page-header">
        <img className="page-header__img bigger-img" src={escudo} alt="" />
        <p className="page-header__text fs-8 ">
          REPÚBLICA BOLIVARIANA DE VENEZUELA
          <br /> MINISTERIO DEL PODER POPULAR PARA LA DEFENSA
          <br /> VICEMINISTERIO DE SERVICIOS PARA LA DEFENSA
          <br /> SECRETARIA PERMANENTE DE REGISTRO Y ALISTAMIENTO PARA LA
          DEFENSA INTEGRAL DE LA NACIÓN
        </p>
        <img className="page-header__img bigger-img" src={escudo2} alt="" />
      </header>
      <h2 className="page-title fs-9">
        REGISTRO PARA LA DEFENSA INTEGRAL DE PERSONA NATURAL
      </h2>
      <p className="page-date fs-8 bolder">FECHA EMISIÓN: {date}</p>
      <div className="table">
        <div className="table-title span-8">1. INFORMACIÓN PERSONAL</div>
        <div className="table-title span-4 border-left">NRO. REGISTRO</div>
        <span className="table-cell span-2">C.I: {formData.ci}</span>
        <span className="table-cell span-5">
          APELLIDOS: {formData.lastname}
        </span>
        <span className="table-cell span-5">NOMBRES: {formData.name}</span>
        <span className="table-cell span-2">SEXO: {formData.sex}</span>
        <span className="table-cell span-4">
          FECHA DE NACIMIENTO: {newDate(formData.birthdate).toLong()}
        </span>
        <span className="table-cell span-3">RIF: {formData.rif}</span>
        <span className="table-cell span-3">
          EDO. CIVIL: {formData.edoCivil}
        </span>
        <span className="table-cell span-5">
          VENEZOLANO POR: {formData.nacionalidad}
        </span>
        <span className="table-cell span-4">
          NRO. GACETA: {formData.nroGaceta}
        </span>
        <span className="table-cell span-2">
          FECHA: {newDate(formData.fechaGaceta).toLong()}
        </span>
        <span className="table-cell table-subtitle">Lugar de nacimiento:</span>
        <span className="table-cell span-3">
          pais: {formData.paisNacimiento}
        </span>
        <span className="table-cell span-3">
          estado: {formData.estadoNacimiento}
        </span>
        <span className="table-cell span-3">
          municipio: {formData.municipioNacimiento}
        </span>
        <span className="table-cell span-3">
          parroquia: {formData.parroquiaNacimiento}
        </span>
        <span className="table-cell table-subtitle">
          Dirección domiciliaria:{" "}
        </span>
        <span className="table-cell span-3">
          pais: {formData.paisDomicilio}
        </span>
        <span className="table-cell span-3">
          estado: {formData.estadoDomicilio}
        </span>
        <span className="table-cell span-3">
          municipio: {formData.municipioDomicilio}
        </span>
        <span className="table-cell span-3">
          parroquia: {formData.parroquiaDomicilio}
        </span>
        <span className="table-cell span-6">Vía: {formData.viaDomicilio}</span>
        <span className="table-cell span-6">
          Área: {formData.areaDomicilio}
        </span>
        <span className="table-cell span-6">
          Tipo Inmueble: {formData.tipoInmueble}
        </span>
        <span className="table-cell span-6">
          Nro. Inmueble: {formData.nroInmueble}
        </span>
        <span className="table-cell span-4">
          Teléfono móvil: {formData.numeroMovil}
        </span>
        <span className="table-cell span-4">
          Teléfono habitación: {formData.telefonoHabitacion}
        </span>
        <span className="table-cell span-4">
          Teléfono oficina: {formData.telefonoOficina}
        </span>
        <span className="table-cell span-6">
          correo electrónico: {formData.correoElectronico}
        </span>
        <span className="table-cell span-6">
          grupo sanguíneo: {formData.grupoSanguineo}
        </span>
        <span className="table-cell span-2">
          hijos: {yesNoCheckboxGenerator(formData.hijos)}
        </span>
        <span className="table-cell span-2">
          elegible: {yesNoCheckboxGenerator(formData.elegible)}
        </span>
        <span className="table-cell span-8">causa: {formData.causa}</span>
        <div className="table-title span-12">
          2. INFORMACIÓN socio-económica
        </div>
        <span className="table-cell span-5">
          grado de instrucción: {formData.educationLevel}
        </span>
        <span className="table-cell span-5">
          estudia: {yesNoCheckboxGenerator(formData.isStudying)}
        </span>
        <span className="table-cell span-5">
          tipo de estudio: {formData.studyType}
        </span>
        <span className="table-cell span-7">
          especialidad: {formData.specialization}
        </span>
        <span className="table-cell span-3">
          Institución: {formData.institution}
        </span>
        <span className="table-cell span-9">
          nombre del instituto: {formData.instituteName}
        </span>
        <span className="table-cell span-3">
          trabaja: {yesNoCheckboxGenerator(formData.isWorking)}
        </span>
        <span className="table-cell span-4">
          ocupación u oficio: {formData.occupation}
        </span>
        <span className="table-cell span-5">empresa: {formData.company}</span>
        <span className="table-cell table-subtitle">dirección empresa: </span>
        <span className="table-cell span-6">
          pais: {formData.companyCountry}
        </span>
        <span className="table-cell span-6">
          estado: {formData.companyState}
        </span>
        <span className="table-cell span-6">
          municipio: {formData.companyMunicipality}
        </span>
        <span className="table-cell span-6">
          parroquia: {formData.companyParish}
        </span>
        <span className="table-cell span-6">
          teléfono: {formData.companyPhone}
        </span>
        <div className="table-title span-12">3. información militar</div>
        <span className="table-cell table-subtitle">
          instrucción Premilitar:{" "}
          {yesNoCheckboxGenerator(formData.preMilitaryTraining)}
        </span>
        <span className="table-cell span-12">
          Nombre del instituto: {formData.militaryInstituteName}
        </span>
        <span className="table-cell table-subtitle">
          servicio militar: (solo para ser llenado por tropa alistada y reserva
          militar)
        </span>
        <span className="table-cell span-4">
          situación actual: {formData.militaryServiceStatus}
        </span>
        <span className="table-cell span-4">
          componente: {formData.militaryServiceComponent}
        </span>
        <span className="table-cell span-4">
          unidad: {formData.militaryServiceUnit}
        </span>
        <span className="table-cell span-6">
          área de desempeño: {formData.performanceArea}
        </span>
        <span className="table-cell span-6">
          especialidad: {formData.militarySpecialization}
        </span>
        <span className="table-cell span-4">
          fecha de ingreso: {newDate(formData.militaryEntryDate).toLong()}
        </span>
        <span className="table-cell span-4">
          fecha de egreso: {newDate(formData.militaryExitDate).toLong()}
        </span>
        <span className="table-cell span-4">
          jerarquía: {formData.militaryRank}
        </span>
        <span className="table-cell table-subtitle">
          profesional militar: (solo para ser llenado por profesionales
          militares y reserva activa)
        </span>
        <span className="table-cell span-4">
          situación actual: {formData.militaryProfessionalStatus}
        </span>
        <span className="table-cell span-4">
          componente: {formData.militaryProfessionalComponent}
        </span>
        <span className="table-cell span-4">
          categoría: {formData.militaryProfessionalCategory}
        </span>
        <span className="table-cell span-6">
          especialidad: {formData.professionalSpecialization}
        </span>
        <span className="table-cell span-6">
          grado: {formData.militaryProfessionalGrade}
        </span>
        <span className="table-cell span-4">
          fecha de ingreso: {newDate(formData.professionalEntryDate).toLong()}
        </span>
        <span className="table-cell span-4">
          fecha de egreso: {newDate(formData.professionalExitDate).toLong()}
        </span>
        <span className="table-cell table-subtitle">
          milicia bolivariana: (solo para ser llenado por ciudadanos de
          categoría de milicia)
        </span>
        <span className="table-cell span-12">
          grado/jerarquía: {formData.militiaRank}
        </span>
        <span className="table-cell span-12">
          área de defensa integral: {formData.integralDefenseArea}
        </span>
        <span className="table-cell span-12">
          cuerpo combatiente: {formData.combatantCorps}
        </span>
        <span className="table-cell span-12">
          batallón de milicia: {formData.militiaBattalion}
        </span>
        <span className="table-cell span-12">
          fecha de ingreso: {newDate(formData.militiaEntryDate).toLong()}
        </span>
      </div>
      <div className="line-container">
        <img src={scisors} alt="" />
        <hr className="cutting-line" />
      </div>
      <div className="card">
        <div className="card-a">
          <div className="page-header">
            <img className="page-header__img" src={escudo} alt="" />
            <p className="page-header__text fs-6 ">
              REPÚBLICA BOLIVARIANA DE VENEZUELA
              <br /> MINISTERIO DEL PODER POPULAR PARA LA DEFENSA
              <br /> VICEMINISTERIO DE SERVICIOS PARA LA DEFENSA
              <br /> SECRETARIA PERMANENTE DE REGISTRO Y ALISTAMIENTO <br />
              PARA LA DEFENSA INTEGRAL DE LA NACIÓN
            </p>
            <img className="page-header__img" src={escudo2} alt="" />
          </div>
          <h6 className="card__title fs-8">
            CARNET DE REGISTRO PARA LA DEFENSA INTEGRAL
            {/* REGISTRO PARA LA DEFENSA INTEGRAL DE PERSONA NATURAL */}
          </h6>
          <div className="card__content-container">
            <div className="card__principal-data">
              <p className="card__subtitle">Datos personales:</p>
              <p className="card__item">APELLIDOS: {formData.lastname}</p>
              <p className="card__item">NOMBRES: {formData.name}</p>
              <p className="card__item">cédula: {formData.ci}</p>
              <p className="card__subtitle margin-top">
                Dirección domiciliaria:
              </p>
              <p className="card__item">pais: {formData.paisDomicilio}</p>
              <p className="card__item">estado: {formData.estadoDomicilio}</p>
              <p className="card__item">
                municipio: {formData.municipioDomicilio}
              </p>
              <p className="card__item">
                parroquia: {formData.parroquiaDomicilio}
              </p>
            </div>
            <div
              className={`card__picture ${
                formData.picture?.size == 0 || !formData.picture
                  ? "card__picture--empty"
                  : ""
              }`}
            >
              {formData.picture && (
                <img src={URL.createObjectURL(formData.picture)} alt=" " />
              )}
            </div>
          </div>
        </div>
        <div className="card-b border-left">
          <p className="card__subtitle">Información socioeconómica:</p>
          <p className="card__item">
            grado de instrucción: {formData.educationLevel}
          </p>
          <p className="card__item">ocupación: {formData.occupation}</p>
          <p className="card__item">empresa: {formData.company}</p>
          <div className="card-b__militar-info">
            <p className="card__subtitle margin-top">Información Militar:</p>
            {setMilitarInfo()}
          </div>
          <p className="card__subtitle card-b__warning margin-top">
            este carnet solo será válido con sello <br /> húmedo y número de
            registro.
          </p>
          <p className="card-b__card-description">fecha emisión: {date} </p>
          <p className="card-b__card-description">nro. registro:</p>
        </div>
      </div>
      <div className="line-container">
        <img src={scisors} alt="" />
        <hr className="cutting-line" />
      </div>
    </div>
  );
}

export default Planilla;
