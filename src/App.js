import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Replace with your component
import { Pg1 } from './form/pg1.form'; // Replace with your component
import Homet from './Homet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path='/pg1.form'>{Pg1}</Route>
        <Route path="./Homet" component={Homet} />
      </Routes>
    </Router>
  );
}

export default App;
