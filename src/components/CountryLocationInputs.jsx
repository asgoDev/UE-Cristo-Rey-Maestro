import { useCountryData } from "../utils/useCountryData";
import LocationSelect from "./LocationSelect";

const CountryLocationInputs = ({ content }) => {
  const [countryConfig, stateConfig, municipalityConfig, parishConfig] =
    content;
  const [
    countryData,
    countryController,
    stateController,
    municipalityController,
    parishController,
    isVenezuela,
  ] = useCountryData();

  return (
    <>
      <LocationSelect
        inputConfig={countryConfig}
        options={countryData.root}
        callback={countryController}
        start="Venezuela"
      />
      <LocationSelect
        inputConfig={stateConfig}
        options={countryData.country.options}
        callback={stateController}
        changeToInput={isVenezuela}
      />
      <LocationSelect
        inputConfig={municipalityConfig}
        options={countryData.state.options}
        callback={municipalityController}
        changeToInput={isVenezuela}
      />
      <LocationSelect
        inputConfig={parishConfig}
        options={countryData.municipality.options}
        callback={parishController}
        changeToInput={isVenezuela}
      />
    </>
  );
};

export default CountryLocationInputs;
