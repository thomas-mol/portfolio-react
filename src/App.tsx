import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/organisms/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <main className="content">
          <Routes>
            <Route index element={<HomePage />} path="/" />
            <Route element={<AboutPage />} path="/about" />
            <Route element={<ProjectsPage />} path="/projects" />
            <Route element={<ProjectDetailPage />} path="/projects/:id" />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
