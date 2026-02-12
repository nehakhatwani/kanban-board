import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Board from "../pages/Board";

export default function Router() {
  const isAuthenticated = localStorage.getItem("auth") === "true";

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={isAuthenticated ? "/board" : "/login"} />}
        />

        <Route path="/login" element={<Login />} />

        <Route
          path="/board"
          element={
            isAuthenticated ? <Board /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
