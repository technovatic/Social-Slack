import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./Login";
import Spinner from "react-spinkit";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2584/2584687.png"
            alt=""
          />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContent>
      </AppLoading>
    );
  }
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody className="app_body">
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <Chat
                      sidebarOpen={sidebarOpen}
                      setSidebarOpen={setSidebarOpen}
                    />
                  }
                />
                {/* Chat */}
              </Routes>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;
const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 30px;
    margin-bottom: 40px;
  }
`;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
`;
