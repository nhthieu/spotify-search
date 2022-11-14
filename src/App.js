import React, { useEffect } from "react";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import { store } from "./redux/store";
import "./App.css"

export default function App() {
  useEffect(() => {
    document.title = "Album Finder";
  }, []);

  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Content />
      </div>
    </Provider>
  )
}