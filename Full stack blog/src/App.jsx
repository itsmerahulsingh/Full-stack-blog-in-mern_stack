import "./App.css";
import Header from "./Components/Header";
import Layout from "./Components/Layout";
import Myname from "./Components/Myname";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />

          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/Register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
