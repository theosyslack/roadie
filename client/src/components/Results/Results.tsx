import React from "react";
import Card from "components/Card/Card";
import Result from "components/Result/Result";
import { ResultsData } from "../../types";
import { useSelector } from "react-redux";
import getFacilitiesStatus from "store/selectors/getFacilitiesStatus";
import getFacilities from "store/selectors/getFacilities";
import getSearch from "store/selectors/getSearch";
import { FACILITIES_STATUSES } from "store/actions/updateFacilitiesStatus";

import "./Results.scss";

function Results() {
  const status = useSelector(getFacilitiesStatus);
  console.log(status);

  if (status === FACILITIES_STATUSES[0]) return null;
  if (status === FACILITIES_STATUSES[1]) return <ResultsPending />;
  if (status === FACILITIES_STATUSES[2]) return <ResultsSuccess />;
  if (status === FACILITIES_STATUSES[3]) return <ResultsFailure />;
}

function ResultsPending() {
  const facilities = useSelector(getFacilities);

  return facilities.length === 0 ? (
    <ResultsSuccess />
  ) : (
    <div className="App__results Results Results--is-pending">
      <Card>
        <div className="Results__title">Pending...</div>
      </Card>
    </div>
  );
}

function ResultsSuccess() {
  const facilities = useSelector(getFacilities);
  const search = useSelector(getSearch);

  return facilities.length === 0 ? (
    <div className="App__results Results">
      <Card>
        <div className="Results__title">No Results for "{search}".</div>
      </Card>
    </div>
  ) : (
    <div className="App__results Results">
      <Card className="Results__card">
        {search && <div className="Results__title">Results for "{search}"</div>}
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
