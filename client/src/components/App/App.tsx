import React, { useEffect } from "react";
import "./App.scss";
import Search from "../Search/Search";
import Card from "../Card/Card";
import Results from "../Results/Results";
import { useDispatch } from "react-redux";
import getFacilities from "api/getFacilities";

function App({ results = [] }) {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="App__title"> 🏕️</div>
      <div className="App__content">
        <div className="App__search">
          <Card>
            <Search />
          </Card>
        </div>
        <Results />
      </div>
    </div>
  );
}

export default App;
