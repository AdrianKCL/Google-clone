import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Home />
        <Routes>
          <Route path="/search" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
