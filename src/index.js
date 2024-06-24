import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagination from "./Components/Pagination/Pagination";
import Counter from "./Components/Counter";
import ProgrammingComponent from "./Components/Programming Multiverse/ProgrammingComponent";
import Anagram from "./Components/Anagram";
import ImageGallery from "./Components/ImageGallery";
import BackgroundChanger from "./Components/BackgroundChanger";
import LightDarkMode from "./Components/LightDarkMode";
import WordCount from "./Components/WordCount";
import ExpenseTracker from "./Components/ExpenseTracker";
import Accordian from "./Components/Accordian/Accordian";
import Navbar from "./Components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Programming" element={<ProgrammingComponent />} />
        <Route path="/Anagram" element={<Anagram />} />
        <Route path="/Image-Gallery" element={<ImageGallery />} />
        <Route path="/Accordian" element={<Accordian />} />
        <Route path="/BackgroundChanger" element={<BackgroundChanger />} />
        <Route path="/LightDarkMode" element={<LightDarkMode />} />
        <Route path="/Pagination" element={<Pagination />} />
        <Route path="/WordCount" element={<WordCount />} />
        <Route path="/ExpenseTracker" element={<ExpenseTracker />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
