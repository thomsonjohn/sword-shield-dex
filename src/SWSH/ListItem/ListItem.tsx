import React, { FC } from "react";
import { Link } from "@reach/router";
import { useFela } from "react-fela";

import { Theme } from "../../Theme";
import makeStyles from "./ListItem.styles";

interface Props {
  species: any;
}

const ListItem: FC<Props> = ({ species }) => {
  const { css, renderer, theme } = useFela<Theme>();
  const styles = makeStyles({
    theme,
    renderer
  });

  return (
    <Link to={`${species.name}`} className={css(styles.link)}>
      {species.name}
    </Link>
  );
};

export default ListItem;
