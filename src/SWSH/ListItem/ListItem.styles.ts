import { IRenderer, IStyle } from "fela";

import { Theme } from "../../Theme";

interface Style {
  link: IStyle;
}

interface StyleProps {
  renderer: IRenderer;
  theme: Theme;
}

const makeStyles = ({ renderer, theme }: StyleProps): Style => {
  return {
    link: {
      color: theme.color.primary
    }
  };
};

export default makeStyles;
