import React from "react";
import "./App.scss";
import Search from "../Search/Search";
import Card from "../Card/Card";
import Result from "../Result/Result";
import RawResults from "../../store/default/facilities.json";
import { transformRawResultDataToResultData } from "../../transform/transformRawResultDataToResultData";

const { RECDATA } = RawResults;

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
              {RECDATA.map((rawResult: RawResultData) => {
                const resultData = transformRawResultDataToResultData(
                  rawResult
                );
                return <Result key={resultData.id} {...resultData} />;
              })}
            </div>
            {/* <Results /> */}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
