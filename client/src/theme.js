// color design tokens export
export const colorTokens = {
    grey: {
      0: "#6D6D6D", //white
      10: "#F5F5F5",
      50: "#E7B5AC", //Gray94 color
      100: "#E0E0E0", //Gray88 color
      200: "#C2C2C2", //Gray76 color
      300: "#FFFFFF", //Gray64 color
      400: "#FFFFFF", //Gray52 color
      500: "#E7B5AC", //Gray40 color
      600: "#4D4D4D", //Gray30 color
      700: "#333333", //Gray20 color
      800: "#1A1A1A", //Gray10 color
      900: "#0A0A0A", //Gray4 color
      1000: "#000000", //black
    },
    primary: {
      50: "#FFF1EC",  
      100: "#FEE9E1",       
      200: "#FFE0CB",       
      300: "#FFD4B7",           
      400: "#FFC8AE",          
      500: "#E7B5AC",         
      600: "#F6B697",         
      700: "#FFC1A4",         
      800: "#FDD8C5D",       
      900: "#C27F58",         
    },
  };
  
  // material UI theme settings
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                dark: colorTokens.primary[200],
                main: colorTokens.primary[500],
                light: colorTokens.primary[800],
              },
              neutral: {
                dark: colorTokens.grey[100],
                main: colorTokens.grey[200],
                mediumMain: colorTokens.grey[300],
                medium: colorTokens.grey[400],
                light: colorTokens.grey[700],
              },
              background: {
                default: colorTokens.grey[900],
                alt: colorTokens.grey[800],
              },
            }
          : {
              // palette values for light mode
              primary: {
                dark: colorTokens.primary[700],
                main: colorTokens.primary[500],
                light: colorTokens.primary[50],
              },
              neutral: {
                dark: colorTokens.grey[700],
                main: colorTokens.grey[500],
                mediumMain: colorTokens.grey[400],
                medium: colorTokens.grey[300],
                light: colorTokens.grey[50],
              },
              background: {
                default: colorTokens.grey[10],
                alt: colorTokens.grey[0],
              },
            }),
      },
      typography: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };