import React from "react";

import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import About from "./Layouts/About";
import Experience from "./Layouts/Experience";
import Work from "./Layouts/Work";
import Contact from "./Layouts/Contact";

function App() {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Experience />
      {/* <Work /> */}
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
