import "./App.css";
import { MyButton } from "./components/MyButton/MyButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello SSC!</p>
        <div className="App-section">

          <MyButton>So</MyButton>
          <MyButton>Many</MyButton>
          <MyButton>Buttons</MyButton>

        </div>
      </header>
    </div>
  );
}

export default App;
