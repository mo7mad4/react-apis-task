import React, { Component } from "react";
import "./App.css";
import Router from "./router";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <MainLayout>
        <Router />
      </MainLayout>
    
    );
  }
}
