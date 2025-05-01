import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const checkImportantInput = (inputsObj) => {
  if (!inputsObj) return;
  let values = Object.values(inputsObj);
  return values.every((element) => element);
};

function GlobalContextProvider(props) {
  const [requiredInputs, setRequiredInputs] = useState({});
  const [isAllInputOk, setIsAllInputOk] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setIsAllInputOk(checkImportantInput(requiredInputs));
  }, [requiredInputs]);

  return (
    <GlobalContext.Provider
      value={{
        requiredInputs,
        setRequiredInputs,
        isAllInputOk,
        formData,
        setFormData,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
