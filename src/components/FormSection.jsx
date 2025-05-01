import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ComplexInput from "./ComplexInput";
import ComplexInputContextProvider from "../context/ComplexInputContext";
import CountryLocationInputs from "./CountryLocationInputs";

const getInputList = (inputList) => {
  return inputList.map((inputConfig, i) => {
    if (inputConfig.type == "location") return <CountryLocationInputs content={inputConfig.content} key={i} />;
    return (
      <ComplexInputContextProvider inputConfig={inputConfig} key={i}>
        <ComplexInput />
      </ComplexInputContextProvider>
    );
  });
};

const FormFieldset = ({ fieldsetConfigData }) => {
  const { fieldsetName, inputList } = fieldsetConfigData;

  return (
    <fieldset className="form__fieldset">
      <legend className="form__legend">{fieldsetName}</legend>
      {getInputList(inputList)}
    </fieldset>
  );
};

const FormSection = ({ sectionConfigData, formScrollController, index }) => {
  let { isAllInputOk } = useContext(GlobalContext);
  const { id, title, config, submit } = sectionConfigData;

  return (
    <section
      id={id}
      className={`form__section ${
        formScrollController == index + 1 && "form__section--onfocus"
      }`}
    >
      <h2 className="form__subtitle">{title}</h2>
      {config.map((fieldsetConfig, i) => {
        return <FormFieldset key={i} fieldsetConfigData={fieldsetConfig} />;
      })}
      <p className="form__advise">
        Todos los campos marcados con asterisco (
        <span className="form__advise-span">*</span>) son obligatorios
      </p>
      {submit && (
        <input
          className="form__submit"
          type="submit"
          value={submit.value}
          disabled={!isAllInputOk}
        />
      )}
    </section>
  );
};

export default FormSection;
