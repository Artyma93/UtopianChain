// import React, { useState, useEffect } from "react";

// const themeObject = {
//     palette: {
//       type: "dark",
//       // type: "light",
//     },
//   };

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

//   export const [theme, toggleThemeMode] = useThemeMode();

//   export let themeConfig = createMuiTheme(theme);