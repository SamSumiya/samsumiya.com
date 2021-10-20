import Footer from "./components/Footer";
import Header from "./components/Header";
import About from './display/About'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Contact from "./display/Contact";


function App() {
  return (
    <Router>
      <Route exact path="/">
        <Header />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
