import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { TotalContainer, GlobalStyle, stylesThemes } from "./theme";
import Home from './components/Home';

function App() {
  const theme = stylesThemes;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <TotalContainer id="outContainer">
          <Switch>
            <Route path="/" component={Home}/>
          </Switch>
        </TotalContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
