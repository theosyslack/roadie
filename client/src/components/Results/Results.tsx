import React from "react";
import Card from "components/Card/Card";
import Result from "components/Result/Result";
import { ResultsData } from "../../types";
import { useStore, useDispatch } from "react-redux";

function Results() {
  const store = useStore();
  const { results } = store.getState();
  return results.length === 0 ? (
    <></>
  ) : (
    <div className="App__results">
      <Card>
        <div className="Results">
          {results.map(result => (
            <Result key={result.id} {...result} />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Results;
