import "./App.css";
import React from "react";
import Header from "./components/header/Header.js";
import LeftPane from "./components/leftPane/LeftPane";
import NewsFeed from "./components/newsFeed/NewsFeed";
import RightPane from "./components/rightPane/RightPane";
import Login from "./components/login/Login";

function App() {
  const user = "user";

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app-body-container">
            <div className="app-body">
              <LeftPane />
              <NewsFeed />
              <RightPane />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
