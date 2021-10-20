import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Route path='/' exact>
        <Header />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
