import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { useFela } from "react-fela";

import { Theme } from "../../Theme";
import ListItem from "../ListItem";
import swshList from "../../data/swsh";
import makeStyles from "./List.styles";

interface Props {
  path: RouteComponentProps;
}

const List: FC<Props> = () => {
  const { css, renderer, theme } = useFela<Theme>();
  const styles = makeStyles({
    theme,
    renderer
  });

  return (
    <div className={css(styles.listWrapper)}>
      {swshList &&
        swshList.map((species, index) => {
          return <ListItem species={species} key={index} />;
        })}
    </div>
  );
};

export default List;
