import "./App.css";
import Header from "./Components/Header/Header";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Problems from "./Pages/Problems/Problems";
import Problem from "./Components/Problems/Problem/Problem";
import { AuthContext } from "./helpers/AuthContext";
import UpdateProblem from "./Components/Users/User/ProfileUserTable/UpdateProblem";
import { GlobalStyles } from "./Theme/GlobalStyles";
import { darkTheme, lightTheme } from "./Theme/Theme";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./Theme/UseDarkMode";
import { ProblemsContext } from "./helpers/ProblemsContext";
import { OneProblemContext } from "./helpers/OneProblemContext";
import { GetAuthState, GetAllProblems, GetAnswers } from "./API/API";
import { SolvedProblemsContext } from "./helpers/SolvedProblemsContext";
import Admin from "./Pages/Admin/Admin";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const [problemState, setProblemState] = useState([]);
  const [oneProblemState, setOneProblemState] = useState({});
  const [solvedProblemsState, setSolvedProblemsState] = useState([]);
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });
  let id;

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAuthState(true);
    }
    GetAuthState()
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
          id = response.data.id;
        }
      })
      .then(() => GetAnswers(id))
      .then((response) => setSolvedProblemsState(response))
      .then(() => GetAllProblems())
      .then((response) => setProblemState(response));
  }, []);
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <SolvedProblemsContext.Provider
        value={{ solvedProblemsState, setSolvedProblemsState }}
      >
        <ProblemsContext.Provider value={{ problemState, setProblemState }}>
          <AuthContext.Provider value={{ authState, setAuthState }}>
            <OneProblemContext.Provider
              value={{ oneProblemState, setOneProblemState }}
            >
              <BrowserRouter>
                <Header theme={theme} themeToggler={themeToggler} />
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/problems" component={Problems} />
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/problems/:id" component={Problem} />
                <Route exact path="/profile/:id" component={UpdateProblem} />
              </BrowserRouter>
            </OneProblemContext.Provider>
          </AuthContext.Provider>
        </ProblemsContext.Provider>
      </SolvedProblemsContext.Provider>
    </ThemeProvider>
  );
}

export default App;
