import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { logo2 } from '../assets';

const Header = () => {
  return (
    <Navbar expand='md' bg='danger' data-bs-theme="dark">
      <Container>
        <Navbar.Brand href='/'>
          <img
            alt=''
            src={logo2}
            width={200}
            className='d-inline-block align-top'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <Nav.Link href='#home' className='text-white'>Home</Nav.Link>
            <Nav.Link href='#link' className='text-white'>Summer Pack</Nav.Link>
            <Nav.Link href='#link' className='text-white'>About</Nav.Link>
            <Nav.Link href='#link' className='text-white'>Register</Nav.Link>
            <Nav.Link href='#link' className='text-white'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
