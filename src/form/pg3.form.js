//import React, { useContext } from "react";
//import FormContext from "../formContext/form.context";
import React, { CountrySelect, useContext, useEffect, useState } from "react";
import Select from "react-select";


//   const {
//     email,
//     setEmail,
    
//   } = useContext(FormContext);

  export const Pg3 = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({});
  
    useEffect(() => {
      fetch(
        "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
      )
        .then((response) => response.json())
        .then((data) => {
          setCountries(data.countries);
          setSelectedCountry(data.userSelectValue);
        });
    }, []);  
  return (
    <form>
      <div className="mb-3">
      <h4>Which country you are from? 🏡🏡🏡</h4>
        
      <Select
      options={countries}
      value={selectedCountry}
      onChange={(selectedOption) => setSelectedCountry(selectedOption)}
    />
      </div>
      
    </form>
  );

};
