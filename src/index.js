import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './Home';
import Homet from './Homet';

import { FormProvider } from "./formContext/form.context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormProvider>
      <App />  
      <Home/>
        <Homet/>  
    </FormProvider>
  </React.StrictMode>
);
