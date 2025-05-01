import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "../styles/location-select.css";

import ComplexInput from "./ComplexInput";
import ComplexInputContextProvider from "../context/ComplexInputContext";

const LocationSelect = ({
  inputConfig,
  options,
  callback,
  changeToInput = true,
  start,
}) => {
  const { requiredInputs, setRequiredInputs, formData } =
    useContext(GlobalContext);

  const [value, setValue] = useState(changeToInput ? start : "");

  const { id, title, required, label } = inputConfig;

  const handleChange = (e) => {
    let newValue = e.target.value;
    setValue(newValue);
    callback(newValue);
  };

  const setInputStyle = () => {
    if (required && !value) return "invalid-input";
    return;
  };

  useEffect(() => {
    setValue("");
  }, [options]);

  useEffect(() => {
    if (Object.keys(formData).length != 0) {
      // callback(formData[id]);
      setValue(formData[id]);
    }
    if (start && Object.keys(formData).length == 0) {
      setValue(start);
      callback(start);
    }
  }, []);

  useEffect(() => {
    if (required) {
      setRequiredInputs((prevState) => {
        let objeto = { ...requiredInputs };
        objeto[id] = value;
        return { ...prevState, ...objeto };
      });
    }
  }, [value]);

  return changeToInput ? (
    <label
      className={`complex-input-label ${
        required && "required"
      } location-select__label`}
      title={title}
      htmlFor={id}
    >
      <span className={`complex-input-label__title t-translate-0`}>
        {label}
      </span>
      <select
        name={id}
        id={id}
        value={value}
        onChange={handleChange}
        className={setInputStyle()}
      >
        <option key={0} value="">
          Seleccione
        </option>
        {options &&
          options.map((option, i) => {
            return (
              <option key={i + 1} value={option}>
                {option}
              </option>
            );
          })}
      </select>
    </label>
  ) : (
    <ComplexInputContextProvider inputConfig={inputConfig}>
      <ComplexInput />
    </ComplexInputContextProvider>
  );
};

export default LocationSelect;
