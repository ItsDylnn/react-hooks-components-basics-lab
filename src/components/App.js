import React from "react";

function App() {
  return (
    <div className="App">
      {/* ✅ nav element */}
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
      </nav>

      {/* ✅ elements with id="home" and id="about" */}
      <main>
        <section id="home">
          <h1>Welcome Home</h1>
        </section>
        <section id="about">
          <h2>About Us</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
