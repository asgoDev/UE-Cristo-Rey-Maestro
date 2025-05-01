import { useContext } from "react";
import { ComplexInputContext } from "../context/ComplexInputContext";
import "../styles/select.css";

function Select() {
  const { inputConfig, inputState, styles } = useContext(ComplexInputContext);
  const { id, options } = inputConfig;
  const [value, setValue] = inputState;

  const inputControl = (e) => {
    let newValue = e.target.value;
    if (!newValue) return;
    setValue(newValue);
  };

  return (
    <select
      className={`complex-input__select ${!value && "gray"} ${styles()}` }
      name={id}
      id={id}
      value={value}
      onChange={inputControl}
    >
      <option key={0} value="">
        Seleccione
      </option>
      {options.map((option, i) => (
        <option key={i + 1} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
