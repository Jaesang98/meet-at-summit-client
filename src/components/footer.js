import { Container, Row, Col, Nav } from 'react-bootstrap';
import '../assets/styles/footer.css'

function footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="footer-left">
                            <h1 className="footer-logo">정상에서 만나요</h1>
                            <p>주소: 서울특별시 강남구 테헤란로 123</p>
                            <p>전화번호: 02-1234-5678</p>
                            <p>출처: www.example.com</p>
                        </div>
                    </Col>
                    <Col md={6} className="footer-right">
                        <Nav className="footer-nav">
                            <Nav.Link href="#terms">이용약관</Nav.Link>
                            <Nav.Link href="#privacy">개인정보처리방침</Nav.Link>
                            <Nav.Link href="#support">고객센터</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default footer;
