import { ThemeProvider } from "styled-components";
import { Home } from "./pages/home/home";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <>

        <ThemeProvider theme={defaultTheme}>
          <Home />

          <GlobalStyle />
        </ThemeProvider>
    </>
  )
}