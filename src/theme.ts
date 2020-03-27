import { Theme } from "@theme-ui/css";

export const colors = {
  text: "#333",
  background: "#fefeff",
  primary: "hsl(208,80%,40%)",
  primary_disabled: "hsl(208, 31%, 50%)",
  primary_focus: "hsl(208,80%,25%,1)",
  primary_active: "hsl(208,80%,20%,1)",
  secondary: "hsl(20,80%,40%)",
  secondary_disabled: "hsl(20, 31%, 50%)",
  secondary_focus: "hsl(20,80%,25%,1)",
  secondary_active: "hsl(20,80%,20%,1)",
  neutral: "hsl(0,0%,40%,1)",
  neutral_disabled: "hsl(0,0%,60%,1)",
  neutral_focus: "hsl(0,0%,30%,1)",
  neutral_active: "hsl(0,0%,20%,1)"
};

export const theme: Theme = {
  fonts: {
    body: "Open Sans, sans-serif",
    raised: "Oswald, sans-serif;"
  },
  fontWeights: {
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700
  },
  sizes: {
    4: "24rem",
    5: "32rem",
    6: "56rem",
    7: "64rem",
    8: "72rem",
    9: "80rem"
  },
  borders: {
    light: "1px solid",
    transparent: "1px solid transparent"
  },
  fontSizes: {
    xxs: "0.5rem",
    xs: "0.725rem",
    s: "0.875rem",
    m: "1rem",
    l: "1.25rem",
    xl: "1.5rem",
    xxl: "2rem",
    xxxl: "3rem",
    xxxxl: "4rem"
  },
  colors,
  buttons: {
    sizes: {
      s: {
        fontSize: "s",
        px: 2,
        py: 1
      },
      m: {
        fontSize: "m",
        px: 3,
        py: 2
      },
      l: {
        fontSize: "xl",
        px: 3,
        py: 2
      }
    },
    fill: {
      cursor: "pointer",
      color: "background",
      border: "light",
      borderColor: "__color",
      bg: "__color",
      "&:hover,&:focus": {
        bg: "__color_focus",
        border: "light",
        borderColor: "__color_focus"
      },
      "&:active": {
        bg: "__color_active",
        borderColor: "__color_active"
      },
      "&:disabled": {
        bg: "__color_disabled",
        borderColor: "__color_disabled",
        cursor: "not-allowed"
      }
    },
    outline: {
      border: "light",
      borderColor: "__color",
      color: "__color",
      cursor: "pointer",
      bg: "background",
      "&:hover,&:focus": {
        color: "__color_focus",
        borderColor: "__color_focus"
      },
      "&:active": {
        color: "__color_active",
        borderColor: "__color_active"
      },
      "&:disabled": {
        cursor: "not-allowed"
      }
    },
    minimal: {
      border: "transparent",
      color: "__color",
      cursor: "pointer",
      bg: "background",
      "&:hover,&:focus": {
        color: "__color_focus"
      },
      "&:active": {
        color: "__color_active"
      },
      "&:disabled": {
        cursor: "not-allowed"
      }
    }
  }
};
