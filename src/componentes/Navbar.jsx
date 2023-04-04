import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from '../assets/images/logo.png'

import './Navbar.css'

function Navbar() {
  return (
    <Container>
        <Row className='mt-3 text-center'>
          <Col md-auto><img src={logo} alt='logo'/></Col>
          <Col xs={0} md-auto className='square border-end'>Features</Col>
          <Col xs={2} className='square border-end'>Plans and Pricing</Col>
          <Col xs={0} className='square border-end'>Blog</Col>
          <Col xs={0} >Resources</Col>
          <Col xs={2}></Col>
          <Col xs={0}>Sign up</Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Login
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
    </Container>
  )
}

export default Navbar