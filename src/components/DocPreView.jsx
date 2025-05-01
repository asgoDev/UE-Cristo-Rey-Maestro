import { useNavigate } from "react-router-dom";
import AppSectionLayout from "../AppSectionLayout";
import "../styles/doc-preview.css";
import Planilla from "./Planilla";
import print from "../assets/icons/print.png";
import pencil from "../assets/icons/edit2.png";

function DocPreView() {
  const navigate = useNavigate();
 
  const handlePrintBtn = () => {
    window.print();
  };

  const handleEditBtn = () => {
    navigate("/SICADMIL/inscripcion-militar-form");
  };

  return (
    <AppSectionLayout>
      <div className="doc-container">
        <Planilla />
      </div>
      <div className="doc-preview__btns-container">
        <button className="doc-preview__btn" onClick={handlePrintBtn} title="Imprimir">
          <img src={print} alt="" />
        </button>
        {/* falta crear funcion de editar */}
        <button className="doc-preview__btn" onClick={handleEditBtn} title="Editar">
          <img src={pencil} alt="" />
        </button>
      </div>
    </AppSectionLayout>
  );
}

export default DocPreView;
