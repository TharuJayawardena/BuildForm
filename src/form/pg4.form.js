import React, { useContext, useState, render, props } from "react";
import FormContext from "../formContext/form.context";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


export class Pg4 extends React.Component {
  constructor(props){
    super(props);
    this.state = { phone: "" };
  }
  render(){
    return (
      <form>
        <div className="mb-3">
          <h4>What is your phone number?</h4>
          <label for="exampleInputEmail1" className="form-label">
            This is how we'll contact you.
          </label>
          <PhoneInput
            className="number"
            country={"us"} v
            value={this.state.phone}
            onChange={(phone) =>
              this.setState({ phone })
            }
          />
        </div>

      </form>
    );
  }
};

