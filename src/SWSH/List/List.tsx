import React from "react";
import { RouteComponentProps } from "@reach/router";

import ListItem from "../ListItem";

import swshList from "../../data/swsh";

const List = (props: RouteComponentProps) => {
  return (
    <div>
      {swshList &&
        swshList.map((species, index) => {
          return <ListItem species={species} key={index} />;
        })}
    </div>
  );
};

export default List;
