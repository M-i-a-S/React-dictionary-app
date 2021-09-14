import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <a href="https://github.com/M-i-a-S/dictionary-app">Coded </a>by Mia
          Stajić
        </footer>
      </div>
    </div>
  );
}
