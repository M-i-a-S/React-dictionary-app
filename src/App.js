import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="book" />
        </main>
        <footer className="App-footer">
          <div className="Coder">
            <a
              href="https://github.com/M-i-a-S/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              Coded{" "}
            </a>
            by Mia Stajić
          </div>
          <br />
          <div className="Background-image">
            Background image by{" "}
            <a
              href="https://www.freepik.com/rawpixel-com"
              target="_blank"
              rel="noreferrer"
            >
              rawpixel.com
            </a>
          </div>
        </footer>

        <small></small>
      </div>
    </div>
  );
}
