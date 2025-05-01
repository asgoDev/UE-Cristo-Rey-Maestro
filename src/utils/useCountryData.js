import { useEffect, useState } from "react";
import { countriesList } from "../data/countriesJson";
import { venezuelaJson } from "../data/venezuelaJson";

export const useCountryData = () => {
  const [countryData, setCountryData] = useState({
    root: countriesList,
    country: {},
    state: {},
    municipality: {},
    parish: {},
  });
  const [isVenezuela, setIsVenezuela] = useState(false);

  useEffect(() => {
    if (Object.keys(countryData.country).length != 0)
      return setIsVenezuela(!isVenezuela);
    if (isVenezuela) setIsVenezuela(!isVenezuela);
  }, [countryData.country]);

  const setCountry = (data) => {
    setCountryData((prevState) => {
      return {
        ...prevState,
        country: data,
        state: {},
        municipality: {},
        parish: {},
      };
    });
  };

  const setState = (data) => {
    setCountryData((prevState) => {
      return { ...prevState, state: data, municipality: {}, parish: {} };
    });
  };

  const setMunicipality = (data) => {
    setCountryData((prevState) => {
      return { ...prevState, municipality: data, parish: {} };
    });
  };

  const setParish = (data) => {
    setCountryData((prevState) => {
      return { ...prevState, parish: data };
    });
  };

  const countryController = (entryState) => {
    if (entryState != "Venezuela") return setCountry({});
    setCountry({
      fullArray: venezuelaJson,
      options: venezuelaJson.map((item) => item.estado),
    });
  };

  const stateController = (entryState) => {
    if (!entryState) return setState({});
    let id = countryData.country.options.indexOf(entryState);
    let munis = countryData.country.fullArray[id].municipios;
    setState({
      fullArray: munis,
      options: munis.map((item) => item.municipio),
    });
  };

  const municipalityController = (entryState) => {
    if (!entryState) return setMunicipality({});
    let id = countryData.state.options.indexOf(entryState);
    let parish = countryData.state.fullArray[id].parroquias;
    setMunicipality({
      fullArray: parish,
      options: parish.map((item) => item),
    });
  };

  const parishController = (entryState) => {
    if (!entryState) return;
    setParish(entryState);
  };

  return [
    countryData,
    countryController,
    stateController,
    municipalityController,
    parishController,
    isVenezuela,
  ];
};
