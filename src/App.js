import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Users from './Users';


function App() {
  return (
    <>
      <Router>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link ><Link to="/">Home</Link></Nav.Link>
              <Nav.Link ><Link to="/about">About</Link></Nav.Link>
              <Nav.Link ><Link to="/users">Users</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/users" component={Users}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;
