import NavBar from "./components/NavBar/NavBar";
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UploadPage from "./pages/HomePage/UploadPage/UploadPage";
import HomePage from "./pages/HomePage/HomePage/HomePage";
import NotFound from "./pages/NotFound"
// import { BrowserRouter } from "react-router-dom";

function App() {




  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:videoId" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
