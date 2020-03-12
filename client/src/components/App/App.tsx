import React from "react";
import "./App.scss";
import Search from "../Search/Search";
import Card from "../Card/Card";

function App() {
  return (
    <div className="App">
      <div className="App__title"> 🏕️</div>
      <div className="App__content">
        <div className="App__search">
          <Card>
            <Search />
          </Card>
        </div>
        <div className="App__results">
          <Card>
            <div className="Results">
              <div className="Result__item">1</div>
              <div className="Result__item">2</div>
              <div className="Result__item">3</div>
              <div className="Result__item">4</div>
              <div className="Result__item">5</div>
              <div className="Result__item">6</div>
              <div className="Result__item">7</div>
              <div className="Result__item">8</div>
              <div className="Result__item">9</div>
              <div className="Result__item">10</div>
            </div>
            {/* <Results /> */}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
