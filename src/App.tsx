import "./App.css";
import { CountdownBanner } from "../lib/main.ts";

function App() {
  return (
    <div className="w-screen bg-white">
      <CountdownBanner linkIn={"https://www.google.co.uk"} />
    </div>
  );
}

export default App;
