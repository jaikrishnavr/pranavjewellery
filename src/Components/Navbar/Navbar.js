import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import pranavlogo from '../../Assets/Brandlogo.png';

function Navbarmenu() {
  return (
    /*<Navbar expand="lg" className="bg-body-tertiary">*/
    <Navbar expand="lg"  style={{backgroundColor:"#fae7a5"}}>
      <Container fluid>
        <Navbar.Brand href="/home">

<img src={pranavlogo}></img>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#action2">About us</Nav.Link>
            <Nav.Link href="#action2">Chit Enquiry</Nav.Link>
            <NavDropdown title="Store Location" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Chennai</NavDropdown.Item>
        
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Coimbatore</NavDropdown.Item>
        
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action3">Erode</NavDropdown.Item>
        
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action3">Kumbakonam</NavDropdown.Item>
        
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action3">Madurai</NavDropdown.Item>
        
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action3">Nagercoil</NavDropdown.Item>
        
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action3">Trichy</NavDropdown.Item>
        
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Pondicherry</NavDropdown.Item>
    
    </NavDropdown>

    <NavDropdown title="Collections" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Gold</NavDropdown.Item>
        
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Diamond</NavDropdown.Item>
    </NavDropdown>

          </Nav>
          <Form className="d-flex justify-content-center px-5" >
         { /* social media handel */}
      

         <a href="https://www.facebook.com/pranavjewellers " className='m-2' >
      <i className="bi bi-facebook"></i>
    </a>

    <a href="https://www.instagram.com/pranav_jewellers " className="m-2">
      <i className="bi bi-instagram" style={{color:"brown"}} ></i>
    </a>

    <a href="https://www.youtube.com/channel/UC6yMl68n_R60QfWgPBBuqvQ" className="m-2">
      <i className="bi bi-youtube text-danger"></i>
    </a>

    <a href="https://twitter.com/JewelleryPranav" className="m-2">
      <i className="bi bi-twitter"></i>
    </a>


        
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarmenu;