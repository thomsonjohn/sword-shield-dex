import React from "react";
import { RouteComponentProps } from "@reach/router";

import swshList from "../../data/swsh";

const List = (props: RouteComponentProps) => {
  return (
    <div>
      {swshList &&
        swshList.map((species, index) => {
          return <p key={index}>{species.name}</p>;
        })}
    </div>
  );
};

export default List;
