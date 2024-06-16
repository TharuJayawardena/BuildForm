import React, { useContext } from "react";
import FormContext from "../formContext/form.context";
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export const Pg6 = () => {
  const {
    email,
    setEmail,
    
  } = useContext(FormContext);

  return (
    <FormControl>

    <div className="mb-3">
    <FormLabel id="demo-radio-buttons-group-label"><h4>How would you describe your current level of coding experience?</h4></FormLabel>
    
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="a"
      name="radio-buttons-group"
    />
    <FormControlLabel  value="a" control={<Radio />} label="A
No experience (I have never programmed before.)" />
    <FormControlLabel  value="b" control={<Radio />} label="B
Beginner (I have played with some introductory coding lessons and tutorials.)" />
    <FormControlLabel  value="c" control={<Radio />} label="C
Intermediate (I have completed some coding classes or tutorials" />
    <FormControlLabel  value="d" control={<Radio />} label="D
Advanced (I can build applications.)" />
    <FormControlLabel  value="e" control={<Radio />} label="E
Professional (I am an experienced software engineer.)" />
    </div>
    
    </FormControl>
  );
};
