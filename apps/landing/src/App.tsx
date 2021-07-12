import React from "react";
import "./App.css";
import { Header, Thing, Sidebar, Card } from "@seob/ds";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Thing />
      <Card />
    </div>
  );
}

export default App;
