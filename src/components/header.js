import {Container, Nav, Navbar, Button} from 'react-bootstrap';
import '../assets/styles/header.css';

function header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary headerContain">
            <Container>
                <Navbar.Brand href="#home" className='logo'>정상에서 만나요</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto headNavar">
                        <Nav.Link href="#home" className='headLink'>클라이밍 정보</Nav.Link>
                        <Nav.Link href="#link" className='headLink'>클라이밍장 찾기</Nav.Link>
                        <Nav.Link href="#link" className='headLink'>커뮤니티</Nav.Link>
                        <Nav.Link href="#link" className='headLink'>고객센터</Nav.Link>
                    </Nav>
                    <Button className='headBtn'>로그인</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default header;
