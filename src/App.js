import React from "react";
import Footer from "./Componets/Footer";
import Header from "./Componets/Header";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={""}>
        <Routes>
          {routes.map((el, index) => (
            <Route key={index} {...el} />
          ))}
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}
export default App;
