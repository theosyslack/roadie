import React from "react";
import Card from "components/Card/Card";
import Result from "components/Result/Result";
import { ResultsData } from "../../types";
import { useSelector } from "react-redux";
import getFacilitiesStatus from "store/selectors/getFacilitiesStatus";
import getFacilities from "store/selectors/getFacilities";
import { FACILITIES_STATUSES } from "store/actions/updateFacilitiesStatus";

import "./Results.scss";

function Results() {
  const status = useSelector(getFacilitiesStatus);
  const facilities = [];

  console.log(status);

  if (status === FACILITIES_STATUSES[0]) return null;
  if (status === FACILITIES_STATUSES[1]) return <ResultsPending />;
  if (status === FACILITIES_STATUSES[2]) return <ResultsSuccess />;
  if (status === FACILITIES_STATUSES[3]) return <ResultsFailure />;
}

function ResultsPending() {
  return (
    <div className="App__results Results Results--is-pending">
      <Card>
        <div className="Results__pending">Pending...</div>
      </Card>
    </div>
  );
}

function ResultsSuccess() {
  const facilities = useSelector(getFacilities);

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

function ResultsFailure() {
  return (
    <div className="App__results Results Results--is-failure">
      <Card>
        <div className="Results__failure">
          Something went wrong. Please try again later.
        </div>
      </Card>
    </div>
  );
}

export default Results;
