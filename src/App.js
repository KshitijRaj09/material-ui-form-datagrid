import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Employees from "./components/Employees";
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9c27b0",
      light: "#af52bf",
      dark: "#6d1b7b",
    },
    secondary: {
      main: "#14a37f",
      dark: "#14a37f",
      light: "#4aedc4",
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route exact path="/" component={Counter} />
          <Route exact path="/employees" component={Employees} />
          <Redirect to="/" />
        </Switch>
      </ThemeProvider>
      <CssBaseline />
    </BrowserRouter>
  );
}

export default App;
