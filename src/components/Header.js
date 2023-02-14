import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Col, Form, Row  } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = props => {
  return (
    <header>
    <Navbar
      style={{
        background: '#2B426D',
        border: '0',
        color: '#00000'
      }}
      className='navbar navbar-expand-lg navbar-dark'
      collapseOnSelect
    >
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Binary City</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='navbar-nav ml-auto'>


        <Col>
      <Form.Group controlId='name'>
                <Form.Control
                style={{borderRadius: '40px' ,borderColor: '#4E6E8D '}}
                 className='form-control-sm mt-2'
                  type='search'
                ></Form.Control>
        </Form.Group>
      </Col>
     
          <LinkContainer to='/'>
                <Nav.Link href='/'>
                  <i className='p-1 fas fa-user'></i>Dashboard
                </Nav.Link>
              </LinkContainer>

         
              <NavDropdown title='Clients' id='client'>
                <LinkContainer to='/client/create'>
                  <NavDropdown.Item >Add Client</NavDropdown.Item>
                </LinkContainer>

               <LinkContainer to='/client/view'>
               <NavDropdown.Item >View Clients</NavDropdown.Item>
               </LinkContainer>

               
               <LinkContainer to='/link/contact'>
               <NavDropdown.Item >Link To Contact</NavDropdown.Item>
               </LinkContainer>

               <LinkContainer to='/unlink/contact'>
               <NavDropdown.Item >UnLink To Contact</NavDropdown.Item>
               </LinkContainer>
               
              </NavDropdown>


              
      
             
          
              <NavDropdown title='Contacts' id='contact'>
                <LinkContainer to='/contact/create'>
                  <NavDropdown.Item>Add Contacts</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/contact/view'>
                  <NavDropdown.Item>View Contacts</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to='/unlink/client'>
                  <NavDropdown.Item>UnLink To Client</NavDropdown.Item>
                </LinkContainer>
        
              </NavDropdown>
    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  )
}
export default Header