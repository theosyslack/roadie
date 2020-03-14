import React from "react";
import Card from "components/Card/Card";
import Result from "components/Result/Result";
import { ResultsData } from "../../types";
import { useSelector } from "react-redux";

function Results() {
  const facilities = useSelector(({facilities}) => facilities);

  return facilities.length === 0 ? (
    <div className="App__results">
      <Card>
        No Results
      </Card>
    </div>
  ) : (
    <div className="App__results">
      <Card>
        <div className="Results">
          {facilities.map(result => (
            <Result key={result.id} {...result} />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Results;
