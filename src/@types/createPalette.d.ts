import { Theme, ThemeOptions } from '@mui/material';

declare module '@mui/material/styles' {
  export interface Theme {
    palette: {
      common: { black: string; white: string };
      default: {
        light: string;
        main: string;
        contrastText: string;
      };
      primary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
        contrastText: string;
      };
      secondary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
        contrastText: string;
      };
      info: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
        contrastText: string;
      };
      success: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
        contrastText: string;
      };
      warning: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
        contrastText: string;
      };
      error: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
        contrastText: string;
      };
      grey: {
        '0': string;
        '100': string;
        '200': string;
        '300': string;
        '400': string;
        '500': string;
        '600': string;
        '700': string;
        '800': string;
        '900': string;
        '5008': string;
        '50012': string;
        '50016': string;
        '50024': string;
        '50032': string;
        '50048': string;
        '50056': string;
        '50080': string;
      };
      gradients: { primary: string; info: string; success: string; warning: string; error: string };
      chart: { violet: string[]; blue: string[]; green: string[]; yellow: string[]; red: string[] };
      divider: string;
      text: { primary: string; secondary: string; disabled: string };
      background: { paper: string; default: string; neutral: string };
      action: {
        active: string;
        hover: string;
        selected: string;
        disabled: string;
        disabledBackground: string;
        focus: string;
        hoverOpacity: number;
        disabledOpacity: number;
      };
    };
    shape: { borderRadius: number };
    typography: {
      fontFamily: string;
      fontWeightRegular: number;
      fontWeightMedium: number;
      fontWeightBold: number;
      pxToRem: (value: number) => string;
      h1: {
        '@media (min-width:600px)': { fontSize: string };
        '@media (min-width:900px)': { fontSize: string };
        '@media (min-width:1200px)': { fontSize: string };
        fontWeight: number;
        lineHeight: number;
        fontSize: string;
      };
      h2: {
        '@media (min-width:600px)': { fontSize: string };
        '@media (min-width:900px)': { fontSize: string };
        '@media (min-width:1200px)': { fontSize: string };
        fontWeight: number;
        lineHeight: number;
        fontSize: string;
      };
      h3: {
        '@media (min-width:600px)': { fontSize: string };
        '@media (min-width:900px)': { fontSize: string };
        '@media (min-width:1200px)': { fontSize: string };
        fontWeight: number;
        lineHeight: number;
        fontSize: string;
      };
      h4: {
        '@media (min-width:600px)': { fontSize: string };
        '@media (min-width:900px)': { fontSize: string };
        '@media (min-width:1200px)': { fontSize: string };
        fontWeight: number;
        lineHeight: number;
        fontSize: string;
      };
      h5: {
        '@media (min-width:600px)': { fontSize: string };
        '@media (min-width:900px)': { fontSize: string };
        '@media (min-width:1200px)': { fontSize: string };
        fontWeight: number;
        lineHeight: number;
        fontSize: string;
      };
      h6: {
        '@media (min-width:600px)': { fontSize: string };
        '@media (min-width:900px)': { fontSize: string };
        '@media (min-width:1200px)': { fontSize: string };
        fontWeight: number;
        lineHeight: number;
        fontSize: string;
      };
      subtitle1: { fontWeight: number; lineHeight: number; fontSize: string };
      subtitle2: { fontWeight: number; lineHeight: number; fontSize: string };
      body1: { lineHeight: number; fontSize: string };
      body2: { lineHeight: number; fontSize: string };
      caption: { lineHeight: number; fontSize: string };
      overline: {
        fontWeight: number;
        lineHeight: number;
        fontSize: string;
        letterSpacing: number;
        textTransform: string;
      };
      button: { fontWeight: number; lineHeight: number; fontSize: string; textTransform: string };
    };
    shadows: string[];
    customShadows: {
      z1: string;
      z8: string;
      z12: string;
      z16: string;
      z20: string;
      z24: string;
      primary: string;
      secondary: string;
      info: string;
      success: string;
      warning: string;
      error: string;
    };
  }

  export function createTheme(options?: ThemeOptions | ITheme, ...args: object[]): Theme;
}
