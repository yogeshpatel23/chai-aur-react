import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// const ThemeProvider = ({ children }) => {
//   return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
// };

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
