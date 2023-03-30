import "./App.css";
import "./index.css";
import { Home } from "./screens/Home";
import { Contact } from "./screens/Contact";
import { Movies } from "./screens/Movies";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";


function App() {
  return (
    <div className="background">
      <BurgerMenu /> 
      <Home /> 
      <Movies />
      <Contact />
      <Footer />
    </div>
    
    
    
    
  );
}

export default App;
