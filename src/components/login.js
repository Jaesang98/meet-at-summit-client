import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/log.css';

function LOGIN({ show, handleClose }) {
    return (
        <div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="">로그인</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>아이디</Form.Label>
                            <Form.Control type="email" placeholder="아이디 입력" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password" placeholder="비밀번호 입력" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="로그인 상태 유지" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100 mb-3 btn_Login">
                            로그인
                        </Button>
                        <div className="text-center mb-3">
                            <hr className="login-divider" />
                            <span>또는</span>
                            <hr className="login-divider" />
                        </div>
                        <Button variant="outline-success" type="button" className="w-100 mb-3 d-flex align-items-center justify-content-center">
                            <img src={require('../assets/img/naver.ico')} alt="네이버" className="social-icon" />
                            네이버로 로그인
                        </Button>
                        <Button variant="outline-warning" type="button" className="w-100 mb-3 d-flex align-items-center justify-content-center">
                            <img src={require('../assets/img/kakao.png')} alt="카카오" className="social-icon" />
                            카카오로 로그인
                        </Button>
                        <div className="text-center mb-3">
                            <a href="#!">아이디 찾기</a> | <a href="#!">비밀번호 찾기</a>
                        </div>
                        <div className="text-center">
                            <span>아직 회원이 아니신가요?</span> <a href="#!">회원가입</a>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default LOGIN;