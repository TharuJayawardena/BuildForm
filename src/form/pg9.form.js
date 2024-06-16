import React, { useContext } from "react";
import FormContext from "../formContext/form.context";

export const Pg9 = () => {
  const {
    email,
    setEmail,
    
  } = useContext(FormContext);

  return (
    <form>
      <div className="mb-3">
      <h4>LinkedIn URL (optional)</h4>
        <label for="exampleInputEmail1" className="form-label">
        Here's a sniper link to make your life easy - linkedin.com (It'll open in a new tab) 🚀
        </label>
        <input placeholder="Type Your answer Here..."
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
