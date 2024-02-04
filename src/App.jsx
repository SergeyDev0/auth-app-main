import React from "react";
import { observer, useLocalStore } from "mobx-react-lite";
import axios from "axios";
import Auth from "./pages/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import authStore from "./store/authenticateStore";

const App = observer(() => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    function isValidatedToken() {
      const token = localStorage.getItem("access_token");
      if (token) {
        axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(response => {
          setIsAuthenticated(!!response.data);
        })
        .catch(error => {
          setIsAuthenticated(false);
        });
      } else {
        setIsAuthenticated(false);
      }
    }

    isValidatedToken();
  }, [authStore.isAuth]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {isAuthenticated ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<Auth />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
});

export default App;
