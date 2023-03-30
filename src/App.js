import "./App.css";
import "./index.css";
import { Home } from "./screens/Home";
import { Contact } from "./screens/Contact";
import { Movies } from "./screens/Movies";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="contact" element={<Contact />} />
            <Route path="movies" element={<Movies />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
