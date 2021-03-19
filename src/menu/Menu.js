import Vending from '../vending/Vending'
import Product from '../product/Product'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Container } from 'react-bootstrap'

function Menu () {
  return (
    <div className='App'>
      <Router>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
          <Navbar.Brand href='/vendings'>Punto de venta - Vending</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='/vendings'>Vendings</Nav.Link>
            <Nav.Link href='/products'>Productos</Nav.Link>
          </Nav>
        </Navbar>

        <Container fluid>
          <Switch>
            <Route path='/vendings'>
              <Vending />
            </Route>
            <Route path='/products'>
              <Product />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  )
}

export default Menu
