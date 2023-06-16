import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackToTopButton, Footer, Navbar } from "./containers";
import { About, Contact, Home, NoPage, Post01, Post02 } from "./components";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post1" element={<Post01 />} />
          <Route path="/post2" element={<Post02 />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <BackToTopButton />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
