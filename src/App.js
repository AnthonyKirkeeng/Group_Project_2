import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListPetsComponent from "./component/pets/ListPetsComponent";
import AddPetsComponent from "./component/pets/AddPetsComponent";
import EditPetsComponent from "./component/pets/EditPetsComponent";

function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h1 className="text-center" style={style}> Pet Symptoms Tracker </h1>
                  <Switch>
                      <Route path="/" exact component={ListPetsComponent} />
                      <Route path="/pets" component={ListPetsComponent} />
                      <Route path="/add-pets" component={AddPetsComponent} />
                      <Route path="/edit-pets" component={EditPetsComponent} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    fontFamily: 'Roboto',
    color: 'black',
    margin: '20px'
}

export default App;
