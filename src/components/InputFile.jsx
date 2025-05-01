import { useContext } from "react";
import { ComplexInputContext } from "../context/ComplexInputContext";
import "../styles/input-file.css";
import camera from "../assets/camera.png";

function InputFile() {
  const { inputConfig, inputState } = useContext(ComplexInputContext);
  const { id, type, label } = inputConfig;
  const [value, setValue] = inputState;

  const inputControl = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="label__input-container">
      <input
        className="input-file"
        id={id}
        name={id}
        type={type}
        accept="image/*"
        placeholder={label}
        onChange={inputControl}
        title={`${"Tome una fotografía desde su celular o seleccione de su galeria"}`}
      />
      <div className="label__input-container-mask">
        {/* <img src={value ? URL.createObjectURL(value) : ''} alt="" style={{width: '50px',height: '50px', position: 'absolute', left: '0',zIndex:'10'}} /> */}

        <span className="input-file__fake-btn">
          {value ? "foto.jpg" : "Cargar imagen..."}
        </span>
        <img className="input-file__img" src={camera} alt="" />
      </div>
    </div>
  );
}

export default InputFile;
