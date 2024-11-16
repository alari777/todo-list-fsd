import { type CssVarsThemeOptions, type Shadows } from '@mui/material';
import {
  amber,
  amberDark,
  crimson,
  crimsonDark,
  green,
  greenDark,
  red,
  redDark,
  sky,
  skyDark,
  slate,
  slateDark,
} from '@radix-ui/colors';
import Color from 'color';
import localFont from 'next/font/local';

declare module '@mui/material/styles/createPalette' {
  export interface Palette {
    one: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
      11: string;
      12: string;
    };
    slate: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
      11: string;
      12: string;
    };
  }
  export interface PaletteOptions {
    one: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
      11: string;
      12: string;
    };
    slate: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
      11: string;
      12: string;
    };
  }
}

declare module '@mui/material/styles/createTypography' {
  export interface FontStyle {
    fontWeightSemiBold: NonNullable<React.CSSProperties['fontWeight']>;
  }
}

export const themeOptions: CssVarsThemeOptions = {
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#175EEB',
          contrastText: Color(slateDark.slate12).hex(),
        } /* {
                    50: "#F5F9FF",
                    100: "#EDF3FE",
                    200: "#E2EBFD",
                    300: "#D0DFFB",
                    400: "#BBD0F9",
                    500: "#9DBBF7",
                    600: "#739EF3",
                    700: "#175EEB",
                    800: "#1554D1",
                    900: "#1247B3",
                }, */,
        secondary: {
          light: Color(crimson.crimson8).hex(),
          main: Color(crimson.crimson9).hex(),
          dark: Color(crimson.crimson10).hex(),
          contrastText: Color(slateDark.slate12).hex(),
        },
        error: {
          light: Color(red.red8).hex(),
          main: Color(red.red9).hex(),
          dark: Color(red.red10).hex(),
          contrastText: Color(slateDark.slate12).hex(),
        },
        warning: {
          light: Color(amber.amber8).hex(),
          main: Color(amber.amber9).hex(),
          dark: Color(amber.amber10).hex(),
          contrastText: Color(slateDark.slate12).hex(),
        },
        info: {
          light: Color(sky.sky8).hex(),
          main: Color(sky.sky9).hex(),
          dark: Color(sky.sky10).hex(),
          contrastText: Color(slate.slate12).hex(),
        },
        success: {
          light: Color(green.green8).hex(),
          main: Color(green.green9).hex(),
          dark: Color(green.green10).hex(),
          contrastText: Color(slateDark.slate12).hex(),
        },
        grey: {
          50: Color(slate.slate1).hex(),
          100: Color(slate.slate2).hex(),
          200: Color(slate.slate3).hex(),
          300: Color(slate.slate5).hex(),
          400: Color(slate.slate7).hex(),
          500: Color(slate.slate9).hex(),
          600: Color(slate.slate10).hex(),
          700: Color(slate.slate11).hex(),
          800: Color(slateDark.slate8).hex(),
          900: Color(slate.slate12).hex(),
          A100: Color(slate.slate2).hex(),
          A200: Color(slate.slate3).hex(),
          A400: Color(slate.slate7).hex(),
          A700: Color(slate.slate11).hex(),
        },
        one: {
          1: '#FCFDFF',
          2: '#F5F9FF',
          3: '#EDF3FE',
          4: '#E2EBFD',
          5: '#D0DFFB',
          6: '#BBD0F9',
          7: '#9DBBF7',
          8: '#739EF3',
          9: '#175EEB',
          10: '#1554D1',
          11: '#1247B3',
          12: '#081F4D',
        },
        slate: {
          1: Color(slate.slate1).hex(),
          2: Color(slate.slate2).hex(),
          3: Color(slate.slate3).hex(),
          4: Color(slate.slate4).hex(),
          5: Color(slate.slate5).hex(),
          6: Color(slate.slate6).hex(),
          7: Color(slate.slate7).hex(),
          8: Color(slate.slate8).hex(),
          9: Color(slate.slate9).hex(),
          10: Color(slate.slate10).hex(),
          11: Color(slate.slate11).hex(),
          12: Color(slate.slate12).hex(),
        },

        text: {
          primary: Color(slate.slate12).hex(),
          secondary: Color(slate.slate11).hex(),
          disabled: Color(slate.slate11).alpha(0.38).toString(),
        },
        divider: Color(slate.slate7).hex(),
        background: {
          paper: Color(slate.slate2).hex(),
          /* default: Color(slate.slate1).hex(), */
          default: '#FFFFFF',
        },
        action: {
          active: Color(slate.slate12).alpha(0.54).rgb().toString(),
          hover: Color(slate.slate12).alpha(0.04).rgb().toString(),
          hoverOpacity: 0.04,
          selected: Color(slate.slate12).alpha(0.08).rgb().toString(),
          selectedOpacity: 0.08,
          disabled: Color(slate.slate11).alpha(0.26).rgb().toString(),
          disabledBackground: Color(slate.slate11).alpha(0.12).rgb().toString(),
          disabledOpacity: 0.38,
          focus: Color(slate.slate12).alpha(0.12).rgb().toString(),
          focusOpacity: 0.126,
          activatedOpacity: 0.126,
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#175EEB',
          contrastText: '#FFFFFF',
        } /* {
                    50: "#70A0FF",
                    100: "#3C76E8",
                    200: "#175EEB",
                    300: "#0F4ABF",
                    400: "#1C408A",
                    500: "#1A3873",
                    600: "#1A3263",
                    700: "#1C2F57",
                    800: "#182540",
                    900: "#0D1421",
                }, */,
        secondary: {
          light: Color(crimsonDark.crimson10).hex(),
          main: Color(crimsonDark.crimson9).hex(),
          dark: Color(crimsonDark.crimson8).hex(),
          contrastText: Color(slateDark.slate12).hex(),
        },
        error: {
          light: Color(redDark.red10).hex(),
          main: Color(redDark.red9).hex(),
          dark: Color(redDark.red8).hex(),
          contrastText: Color(slateDark.slate12).hex(),
        },
        warning: {
          light: Color(amberDark.amber10).hex(),
          main: Color(amberDark.amber9).hex(),
          dark: Color(amberDark.amber8).hex(),
          contrastText: Color(slateDark.slate12).hex(),
        },
        info: {
          light: Color(skyDark.sky10).hex(),
          main: Color(skyDark.sky9).hex(),
          dark: Color(skyDark.sky8).hex(),
          contrastText: Color(slate.slate12).hex(),
        },
        success: {
          light: Color(greenDark.green10).hex(),
          main: Color(greenDark.green9).hex(),
          dark: Color(greenDark.green8).hex(),
          contrastText: Color(slateDark.slate12).hex(),
        },
        grey: {
          50: Color(slateDark.slate12).hex(),
          100: Color(slate.slate7).hex(),
          200: Color(slate.slate8).hex(),
          300: Color(slateDark.slate11).hex(),
          400: Color(slateDark.slate10).hex(),
          500: Color(slateDark.slate9).hex(),
          600: Color(slateDark.slate7).hex(),
          700: Color(slateDark.slate5).hex(),
          800: Color(slateDark.slate3).hex(),
          900: Color(slate.slate1).hex(),
          A100: Color(slate.slate7).hex(),
          A200: Color(slate.slate8).hex(),
          A400: Color(slateDark.slate10).hex(),
          A700: Color(slateDark.slate5).hex(),
        },
        one: {
          1: '#0D1421',
          2: '#0E182E',
          3: '#182540',
          4: '#1C2F57',
          5: '#1A3263',
          6: '#1A3873',
          7: '#1C408A',
          8: '#0F4ABF',
          9: '#175EEB',
          10: '#3C76E8',
          11: '#70A0FF',
          12: '#EDF2FC',
        },
        slate: {
          1: Color(slateDark.slate1).hex(),
          2: Color(slateDark.slate2).hex(),
          3: Color(slateDark.slate3).hex(),
          4: Color(slateDark.slate4).hex(),
          5: Color(slateDark.slate5).hex(),
          6: Color(slateDark.slate6).hex(),
          7: Color(slateDark.slate7).hex(),
          8: Color(slateDark.slate8).hex(),
          9: Color(slateDark.slate9).hex(),
          10: Color(slateDark.slate10).hex(),
          11: Color(slateDark.slate11).hex(),
          12: Color(slateDark.slate12).hex(),
        },
        text: {
          primary: Color(slateDark.slate12).hex(),
          secondary: Color(slateDark.slate11).hex(),
          disabled: Color(slate.slate11).alpha(0.5).toString(),
        },
        divider: Color(slateDark.slate7).hex(),
        background: {
          paper: Color(slateDark.slate2).hex(),
          default: Color(slateDark.slate1).hex(),
        },
        action: {
          active: Color(slateDark.slate12).hex(),
          hover: Color(slateDark.slate12).alpha(0.08).rgb().toString(),
          hoverOpacity: 0.08,
          selected: Color(slateDark.slate12).alpha(0.16).rgb().toString(),
          selectedOpacity: 0.16,
          disabled: Color(slateDark.slate11).alpha(0.3).rgb().toString(),
          disabledBackground: Color(slateDark.slate11)
            .alpha(0.12)
            .rgb()
            .toString(),
          disabledOpacity: 0.38,
          focus: Color(slateDark.slate12).alpha(0.12).rgb().toString(),
          focusOpacity: 0.12,
          activatedOpacity: 0.24,
        },
      },
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
                :root {
                    --font-inter: "Inter";
                }
                @supports (font-variation-settings: normal) {
                    :root {
                        --font-inter: "Inter Variable";
                    }
                }
            `,
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
        }),
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        inheritViewBox: true,
      },
    },
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
  ].map((shadow) =>
    shadow
      .replace(
        'rgba(0,0,0,0.2)',
        Color(slate.slate12).alpha(0.2).rgb().toString()
      )
      .replace(
        'rgba(0,0,0,0.14)',
        Color(slate.slate12).alpha(0.14).rgb().toString()
      )
      .replace(
        'rgba(0,0,0,0.12)',
        Color(slate.slate12).alpha(0.12).rgb().toString()
      )
  ) as Shadows,
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  typography: {
    fontWeightSemiBold: 600,
    button: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      textTransform: 'none',
    },
  },
};
