import "./App.css";

import React, { useState } from "react";
import { Pg1 } from "./form/pg1.form";
import { Pg2 } from "./form/pg2.form";
import { Pg3 } from "./form/pg3.form";
import { Pg4 } from "./form/pg4.form";
import { Pg5 } from "./form/pg5.form";
import { Pg6 } from "./form/pg6.form";
import { Pg7 } from "./form/pg7.form";
import { Pg8 } from "./form/pg8.form";
import { Pg9 } from "./form/pg9.form";



function Homet() {
  const [pgNo, setPgNo] = useState(1);

  return (
    <div className="container mt-5">

      <div>
        
        <p>Page {pgNo} / 9 </p>
        {pgNo == 1 ? <Pg1 /> : pgNo == 2 ? <Pg2 /> : pgNo == 3 ? <Pg3 /> : pgNo == 4 ? <Pg4 /> : pgNo == 5 ? <Pg5 /> : pgNo == 6 ? <Pg6 /> : pgNo == 7 ? <Pg7 /> : pgNo == 8 ? <Pg8 /> : <Pg9 />}
        <center>
          {pgNo > 1 && (
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                let pg = pgNo;
                setPgNo(pg - 1);
              }}
            >
              Back
            </button>
          )}
          {pgNo < 9 && (
            <button
              className="btn btn-primary mx-4"
              type="button"
              onClick={() => {
                let pg = pgNo;
                setPgNo(pg + 1);
              }}
            >
              Next
            </button>
          )}
        </center>
      </div>
    </div>
  );
}

export default Homet;
