import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import '../assets/styles/header.css';
import LOGIN from '../components/login';
import * as util from '../util';
import { useState, useEffect } from 'react';

function Header() {
    //로그인 모달창 열기
    const [showModal, setShowModal] = useState(false);
    const navigation = util.useNavigation();
    const requestApi = util.useApi();

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary headerContain">
                <Container>
                    <Navbar.Brand className='logo' onClick={()=>{navigation.pageHome()}}>정상에서 만나요</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto headNavar">
                            <Nav.Link className='headLink' onClick={()=>{navigation.pageOpen('/')}}>클라이밍 정보</Nav.Link>
                            <Nav.Link className='headLink' onClick={()=>{navigation.pageOpen('/SRC_1000')}}>클라이밍장 찾기</Nav.Link>
                            <Nav.Link className='headLink' onClick={()=>{navigation.pageOpen('/COM_1000')}}>커뮤니티</Nav.Link>
                            <Nav.Link className='headLink' onClick={()=>{alert("준비중입니다")}}>준비중이에요!</Nav.Link>
                        </Nav>
                        <Button className='headBtn' onClick={() => {setShowModal(true)}}>로그인</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <LOGIN show={showModal} handleClose={handleClose}></LOGIN>
        </>
    );
}

export default Header;
