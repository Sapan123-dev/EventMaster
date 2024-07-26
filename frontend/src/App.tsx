import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import MainLayout from "./components/layout/MainLayout";
import AppRoutes from "./routes/route";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
  );
};

export default App;
