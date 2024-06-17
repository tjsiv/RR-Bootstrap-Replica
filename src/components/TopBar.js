import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

export default function TopBar() {
    return (
        <div>
            <Container>
                <Navbar bg="light" expand="md" >
                    <Container>
                        <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home"><img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" /> </Navbar.Brand>

                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">                    
                            <Nav style={{padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder", display: "flex" }} >
                                <Nav.Link style={{color: "#343538", fontFamily: "Helvetica"}} href="#LogIn">Log In</Nav.Link>
                                <Button variant="success" style={{fontSize: "16px", marginLeft: "8px", borderRadius: "20px", backgroundColor: "#108910"}}>Sign Up</Button>{' '}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                    
                </Navbar>
            </Container>
            
        </div>
    )
}