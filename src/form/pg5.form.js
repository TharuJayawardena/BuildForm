import React, { useContext } from "react";
//import FormContext from "../formContext/form.context";
import { CFormCheck } from '@coreui/react'
import { Form, Row, Col } from 'react-bootstrap';
export const Pg5 = () => {
  
  return (
    <Form>
      <div className="mb-3">
      <h4>What languages and frameworks are you familiar with?</h4>
        <label for="exampleInputEmail1" className="form-label">
        Select all the languages you know.
        </label>
        <p>Choose as many as you like</p>
  
<CFormCheck inline id="inlineCheckbox1" value="option1" label="A
Solidity"/>

<CFormCheck inline id="inlineCheckbox2" value="option2" label="B
Rust"/>
<CFormCheck inline id="inlineCheckbox1" value="option1" label="C
Node.js"/> <br/>

<CFormCheck inline id="inlineCheckbox2" value="option2" label="D
Typescript"/>



<CFormCheck inline id="inlineCheckbox1" value="option1" label="E
Javascript"/>
<CFormCheck inline id="inlineCheckbox2" value="option2" label="F
C"/> <br/>
<CFormCheck inline id="inlineCheckbox1" value="option1" label="G
C++"/>
<CFormCheck inline id="inlineCheckbox2" value="option2" label="H
C#"/>
<CFormCheck inline id="inlineCheckbox1" value="option1" label="I
SQL"/><br/>
<CFormCheck inline id="inlineCheckbox1" value="option1" label="J
Python"/>
<CFormCheck inline id="inlineCheckbox2" value="option2" label="K
Assembly Language"/>
<CFormCheck inline id="inlineCheckbox1" value="option1" label="L
Haskell"/><br/>
<CFormCheck inline id="inlineCheckbox1" value="option1" label="M
R"/>
<CFormCheck inline id="inlineCheckbox2" value="option2" label="N
.NET"/>
<CFormCheck inline id="inlineCheckbox1" value="option1" label="O
Other"/>
</div>
      
    </Form>
  );
};
