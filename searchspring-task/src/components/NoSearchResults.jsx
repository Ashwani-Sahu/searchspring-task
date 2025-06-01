import React from "react";
import "./NoSearchResults.css";
import noResultsFoundImage from "../assets/no-results-found.png";
import { NO_SERACH_RESULT_MESSAGE, NO_SERACH_RESULTS } from "../utils/appUtils";

const NoSearchResults = ({ query }) => {
  return (
    <div className="no-result">
      {!!query?.length && (
        <p>
          You searched for <span>{query}</span>
        </p>
      )}
      <img src={noResultsFoundImage} alt="No results" loading="lazy" />
      <div>{NO_SERACH_RESULTS}</div>
      <p>{NO_SERACH_RESULT_MESSAGE}</p>
    </div>
  );
};

export default NoSearchResults;
