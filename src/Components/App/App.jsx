import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../../Pages/AboutPage/AboutPage";
import ArticlesPage from "../../Pages/ArticlesPage/ArticlesPage";
import CompaniesPage from "../../Pages/CompaniesPage/CompaniesPage";
import HomePage from "../../Pages/HomePage/HomePage";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import SingleArticlePage from "../../Pages/SingleArticlePage/SingleArticlePage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OrderModal from "../OrderModal/OrderModal";

function App() {
  const [modal, setModal] = useState(false);

  const modalToggle = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      {modal && <OrderModal modalToggle={modalToggle} />}
      <Header modalToggle={modalToggle} />

      <Routes>
        <Route path="/book" element={<HomePage modalToggle={modalToggle} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:id" element={<SingleArticlePage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
