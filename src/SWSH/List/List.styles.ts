import { IRenderer, IStyle } from "fela";

import { Theme } from "../../Theme";

interface Style {
  listWrapper: IStyle;
}

interface StyleProps {
  renderer: IRenderer;
  theme: Theme;
}

const makeStyles = ({ renderer, theme }: StyleProps): Style => {
  return {
    listWrapper: {
      display: "flex",
      flexDirection: "column",
      color: theme.color.primary
    }
  };
};

export default makeStyles;
