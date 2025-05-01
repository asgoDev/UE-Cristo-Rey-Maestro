import { createContext, useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const ComplexInputContext = createContext();

// const validateInputs = (value) => {
//   return value;
// };

function ComplexInputContextProvider({ children, inputConfig }) {
  const [inputValue, setInputValue] = useState("");
  const { requiredInputs, setRequiredInputs, formData } =
    useContext(GlobalContext);
  const { required, id } = inputConfig;

  useEffect(() => {
    if (Object.keys(formData).length != 0)
      setInputValue(formData[id])
  }, []);

  // si el input es requerido, añade la referencia del input a un array
  // utilizado para verificar si todos los capos requeridos fueron llenados.
  useEffect(() => {
    if (required) {
      setRequiredInputs((prevState) => {
        let objeto = { ...requiredInputs };
        objeto[id] = inputValue;
        return { ...prevState, ...objeto };
      });
    }
  }, [inputValue]);

  const setInputStyle = () => {
    if (required && !inputValue) return "invalid-input";
    return;
  };

  const contextValue = {
    inputConfig,
    inputState: [inputValue, setInputValue],
    styles: () => setInputStyle(),
  };

  return (
    <ComplexInputContext.Provider value={contextValue}>
      {children}
    </ComplexInputContext.Provider>
  );
}

export default ComplexInputContextProvider;
