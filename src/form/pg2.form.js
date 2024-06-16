import React, { useContext } from "react";
import FormContext from "../formContext/form.context";

export const Pg2 = () => {
  const {
    email,
    setEmail,
    
  } = useContext(FormContext);

  return (
    <form>
      <div className="mb-3">
      <h4>What is your email address?</h4>
        <label for="exampleInputEmail1" className="form-label">
          This is how we'll contact you.
        </label>
        <input placeholder="name@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      
    </form>
  );
};
