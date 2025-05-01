import { useContext } from "react";
import { ComplexInputContext } from "../context/ComplexInputContext";
import "../styles/complex-input.css";
import Input from "./Input";
import Select from "./Select";
import Radio from "./Radio";
import InputFile from "./InputFile";

function ComplexInput() {
  const { inputConfig, inputState } = useContext(ComplexInputContext);
  const { required, title, id, type, label } = inputConfig;
  const [inputValue] = inputState;

  const chooseElement = () => {
    if (type == "select") return <Select />;
    if (type == "radio") return <Radio />;
    if (type == "file") return <InputFile />;
    return <Input />;
  };

  return (
    <label
      className={`complex-input-label ${required && "required"}`}
      title={title}
      htmlFor={id}
    >
      <span
        className={`complex-input-label__title ${
          (inputValue ||
            type == "date" ||
            type == "select" ||
            type == "radio") &&
          "t-translate-0"
        }`}
      >
        {label}
      </span>
      {chooseElement()}
    </label>
  );
}

export default ComplexInput;
