import Navbar from "./Navbar";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About";

function App() {
  let component;
  console.log(window.location);
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/pricing":
      component = <Pricing />;
      break;
    case "/about":
      component = <About />;
      break;
  }
  return (
    <>
      <Navbar />
      <div className="container">
        {component}
      </div>      
    </>
  );
}

export default App;
