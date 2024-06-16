import React, { useContext } from "react";
import FormContext from "../formContext/form.context";

export const Pg1 = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName
  } = useContext(FormContext);

  return (
    <form>
      <div className="mb-3">
        <h4>
Before we start, what is your name?</h4>
        <label htmlFor="exampleInputEmail1" className="form-label">
          FirstName
        </label>
        <input placeholder="Jane"
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          LastName
        </label>
        <input placeholder="Smith"
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
    </form>
  );
};
