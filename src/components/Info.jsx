import AppSectionLayout from "../AppSectionLayout";
import "../styles/info.css";

function Info() {
  return (
    <AppSectionLayout title="Acerca de SICADMIL">
      <div className="info-container">
        {/* <p>El Sistema de Captación y Administración Militar ó, tambien conocido como SICADMIL por sus siglas, es un proyecto desarrollado por el Ing. Aquiles Gonzalez, quien presta servicio militar en la Circunscripción Militar del Estado Falcón, bajo el mando del Coronel Ricardo Fernandez.</p>
      <br />
      <p>Este proyecto nace en con el objetivo de modernizar los procesos que se realizan en dicha institución, de entre los cuales se encuentra la emisión del carnet militar. Dicho carnet está ligado al llenado de la planilla de Registro para la Defensa Integral de Persona Natural, que puede ser descargado en formato word desde internet y que por la cantidad de datos que solicita puede puede resultar confuso y abrumador, además de los problemas de consistencia que trae consigo suministrar al usuario un formato totalmente editable.</p>
      <br />
      <p>Este proyecto nace en con el objetivo de modernizar los procesos que se realizan en dicha institución, de entre los cuales se encuentra la emisión del carnet militar. Dicho carnet está ligado al llenado de la planilla de Registro para la Defensa Integral de Persona Natural, que puede ser descargado en formato word desde internet y que por la cantidad de datos que solicita puede puede resultar confuso y abrumador, además de los problemas de consistencia que trae consigo suministrar al usuario un formato totalmente editable.</p> */}

        <h2>Origen</h2>
        <p>
          El Sistema de Captación y Administración Militar (SICADMIL),
          desarrollado por el Ing. Aquiles Gonzalez, es una iniciativa surgida
          en la Circunscripción Militar del Estado Falcón, bajo la supervisión
          del Coronel Ricardo Fernandez.
        </p>
        <br />

        <h2>Propósito</h2>
        <p>
          SICADMIL tiene como propósito principal modernizar los procesos
          administrativos en la institución militar, con un enfoque inicial en
          la emisión del carnet militar. Este proyecto surge como respuesta a la
          necesidad de simplificar y mejorar la experiencia de llenado de la
          planilla de Registro para la Defensa Integral de Persona Natural.
        </p>
        <br />

        <h2>Desafíos</h2>
        <p>
          El proceso actual de llenado de la planilla en formato Word puede
          resultar confuso y abrumador para los usuarios, debido a la cantidad
          de datos solicitados y la complejidad del formato editable. Esto puede
          generar problemas de consistencia y dificultades en la gestión de la
          información.
        </p>
        <br />

        <h2>Alcances</h2>
        <p>
          SICADMIL busca ofrecer una solución integral para agilizar y optimizar
          la captación y administración de nuevas tropas, contribuyendo así al
          fortalecimiento de la Defensa Nacional y garantizando la integridad de
          nuestra Fuerza Armada Nacional Bolivariana.
        </p>
        <br />

        <h2>Misión y Visión</h2>
        <p>
          La misión de SICADMIL es proporcionar una plataforma eficiente y fácil
          de usar que simplifique los procesos administrativos en el ámbito
          militar, mientras que la visión es convertirse en un referente en la
          modernización y optimización de los sistemas de gestión militar a
          nivel nacional.
        </p>
        <br />

        <p>¡Gracias por tu interés en SICADMIL!</p>
      </div>
    </AppSectionLayout>
  );
}

export default Info;
