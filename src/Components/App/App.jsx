import { Route, Routes } from "react-router-dom";
import AboutPage from "../../Pages/AboutPage/AboutPage";
import ArticlesPage from "../../Pages/ArticlesPage/ArticlesPage";
import CompaniesPage from "../../Pages/CompaniesPage/CompaniesPage";
import HomePage from "../../Pages/HomePage/HomePage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
