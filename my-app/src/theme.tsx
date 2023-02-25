import { createTheme, ThemeOptions } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    myVariant: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  myVariant: React.CSSProperties;
}

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {


    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  typography: {
    myVariant: {
      color: orange[500],
    },
  } as ExtendedTypographyOptions,
} as ThemeOptions);

export default theme;
