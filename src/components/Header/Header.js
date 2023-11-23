//Import BootStrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import './style.css';

import logo from '../../img/logo_ghibli.png'


function Header() {

    return  <>

      <Navbar className="navbar">
        <Navbar.Brand href="#home">
          <Link to='/'><img src={logo} className="headerLogo" alt='logo'/></Link>
        </Navbar.Brand>

        <Nav className='link'>
        <Nav.Item>
          <Link to='/' className='accueil'> Accueil </Link>
        </Nav.Item>

        <Nav.Item>
          <Link to='/films' className='films'>Films</Link>
        </Nav.Item>
      </Nav>
    </Navbar>
    </>
    
  }

  export default Header;