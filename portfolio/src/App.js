import Footer from './components/Footer';
import Header from './components/Header';
import About from './display/About';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Contact from './display/Contact';
import Portfolios from './display/Portfolios';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        </Switch>
        <Portfolios />
        {/* <Route exact path="/footer"> */}
        {/* </Route> */}
        <Footer />
    </Router>
  );
}

export default App;
