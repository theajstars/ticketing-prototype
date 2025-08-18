import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import LoginPage from "./pages/Login";
import StartPage from "./pages/Start";
import TransactionReceipt from "./pages/TransactionReceipt";
import "./App.css";

const theme = createTheme({
  primaryColor: "blue",
  fontFamily: "Inter, system-ui, sans-serif",
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/start" element={<StartPage />} />
            <Route path="/receipt" element={<TransactionReceipt />} />
          </Routes>
        </div>
      </Router>
    </MantineProvider>
  );
}

export default App;
