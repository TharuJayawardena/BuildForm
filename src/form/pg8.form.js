import React, { useContext } from "react";
import FormContext from "../formContext/form.context";
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export const Pg8 = () => {
  const {
    email,
    setEmail,
    
  } = useContext(FormContext);

  return (
    <FormControl>

    <div className="mb-3">
      <FormLabel id="demo-radio-buttons-group-label"><h4>What is your current annual compensation? (Optional)</h4></FormLabel>
      <p>Disclaimer: The information provided regarding salary will be kept confidential and will not be used as a determining factor for acceptance into the bootcamp. It will be used exclusively for career advancement guidance.</p>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="a"
        name="radio-buttons-group"
      />
      <FormControlLabel value="a" control={<Radio />} label="A
I accept" /><br />
      <FormControlLabel value="b" control={<Radio />} label=" B I don’t accept

" /><br />
    </div>

  </FormControl>
  );
};
