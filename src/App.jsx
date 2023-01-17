import React, { useState } from "react";

import { MainContent, SideBar } from "./components";

import "./styles/main.sass";
import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <h1>Marcelo Bracet</h1>
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
