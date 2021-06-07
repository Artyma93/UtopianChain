
// import { makeVar } from "@apollo/client";
import { createMuiTheme } from "@material-ui/core";

// const themeObject = {
//   palette: {
//     type: "dark",
//     // type: "light",
//   },
// };

export const darkThemeObject = {
  palette: {
    type: "light",
  },
};

// export const lightThemeObject = {
//   palette: {
//     type: "light",
//   },
// };

//   export const useThemeMode = () => {
//     const [theme, setTheme] = useState(themeObject);

//     const {
//       palette: { type },
//     } = theme;

//     const toggleThemeMode = () => {
//       const updateTheme = {
//         ...theme,
//         palette: {
//           ...theme.palette,
//           type: type === "light" ? "dark" : "light",
//         },
//       };

//       setTheme(updateTheme);
//     };

//     return [theme, toggleThemeMode];
//   };

// //   export const [theme, toggleThemeMode] = useThemeMode();

// export let themeConfigForMakeVar = createMuiTheme(themeObject);
export let darkThemeConfigForMakeVar = createMuiTheme(darkThemeObject);
// export let lightThemeConfigForMakeVar = createMuiTheme(lightThemeObject);

// export let varThemeConfig = makeVar(themeConfigForMakeVar);
// export let themeConfig = varThemeConfig();

// export const toggleTheme = () => {
//   const toggleThemeMode = () => {
//     const updateTheme = {
//       ...theme,
//       palette: {
//         ...theme.palette,
//         type: type === "light" ? "dark" : "light",
//       },
//     };
//   };
// };

// export const toggleDarkTheme = (varThemeConfig) => {
//   varThemeConfig(darkThemeConfigForMakeVar);
//   // themeConfig = varThemeConfig();
// };

// export const toggleLightTheme = (varThemeConfig) => {
//   varThemeConfig(lightThemeConfigForMakeVar);
//   // themeConfig = varThemeConfig();
// };

// export const toggleLightTheme2 = () => {
//   varThemeConfig(lightThemeConfigForMakeVar);
//   // themeConfig = varThemeConfig();
// };

// let isDarkTheme = true;
// export const toggleTheme = () => {
//   isDarkTheme = !isDarkTheme;

//   if (isDarkTheme) {
//     varThemeConfig(lightThemeConfigForMakeVar);
//   } else {
//     varThemeConfig(darkThemeConfigForMakeVar);
//   }
// };
