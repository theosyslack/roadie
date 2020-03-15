import React from "react";
import Card from "components/Card/Card";
import Result from "components/Result/Result";
import { ResultsData } from "../../types";
import { useSelector } from "react-redux";

import "./Results.scss"

function Results() {
  const facilities = useSelector(({facilities}) => facilities);

  return facilities.length === 0 ? (
    <div className="App__results Results">
      <Card>
        <div className="Results__none">No Results</div>
      </Card>
    </div>
  ) : (
    <div className="App__results Results">
      <Card className="Results__card">
          {facilities.map(result => (
            <Result key={result.id} {...result} />
          ))}
      </Card>
    </div>
  );
}

export default Results;
