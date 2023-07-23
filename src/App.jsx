import React, { Component } from "react";
import "./App.css";
import Router from "./router";
import MainLayout from "./components/MainLayout";
const App = ()=> {
    return (
      <MainLayout>
        <Router />
      </MainLayout>
    
    );
  }
export default App
