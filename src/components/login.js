import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/log.css';
import { useNavigation, useApi } from '../util';
import { useState } from 'react';
import { setUserInfo } from '../store';
import { useDispatch } from 'react-redux';

function LOGIN({ show, handleClose }) {
    const navigation = useNavigation();
    const requestApi = useApi();
    const dispatch = useDispatch();

    //일반 로그인
    const [userId, setuserId] = useState("");
    const [userPw, setuserPw] = useState("");
    const userLogin = async () => {
        if (userId == "" || userPw == "") {
            alert("아이디나 비밀번호 똑바로 쓰셈")
        }
        else {
            try {
                await requestApi.NetWork({
                    getYn: false,
                    method: "POST",
                    url: "/api/climbing/auth/login",
                    params: {
                        userId: userId,
                        passwd: userPw
                    },
                    callback(res) {
                        dispatch(setUserInfo({ userId: res.data.userId, name: res.data.name }));
                        window.location.reload();
                    }
                });
            } catch (err) {
                console.error('Error during API request:', err);
            }
        }
    }

    // 네이버 로그인 정보
    const NAVER_CLIENT_ID = "Y_6oPTvx2tHAMxOesxq0"
    const STATE = '0ucbn7uz94y' // 임의
    const REDIRECT_URI = "http://localhost:3000/meet_at_summit"
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;
    const NaverLogin = () => {
        window.location.href = NAVER_AUTH_URL;
    };

    // 카카오 로그인 정보
    const Rest_api_key = '83190cb35a9f7a2d08b27d403091e18b' //REST API KEY
    const redirect_uri = 'http://localhost:3000/meet_at_summit' //Redirect URI
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`    // oauth 요청 URL
    const KakaoLogin = () => {
        window.location.href = kakaoURL;
    }

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
                            <Form.Control placeholder="아이디 입력" onChange={(e) => { setuserId(e.target.value) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password" placeholder="비밀번호 입력" onChange={(e) => { setuserPw(e.target.value) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="로그인 상태 유지" />
                        </Form.Group>
                        <Button variant="primary" className="w-100 mb-3 btn_Login" onClick={userLogin}>
                            로그인
                        </Button>
                        <div className="text-center mb-3">
                            <hr className="login-divider" />
                            <span>또는</span>
                            <hr className="login-divider" />
                        </div>
                        <Button variant="outline-success" type="button" className="w-100 mb-3 d-flex align-items-center justify-content-center"
                            onClick={NaverLogin}>
                            <img src={require('../assets/img/naver.ico')} alt="네이버" className="social-icon" />
                            네이버로 로그인
                        </Button>
                        <Button variant="outline-warning" type="button" className="w-100 mb-3 d-flex align-items-center justify-content-center"
                            onClick={KakaoLogin}>
                            <img src={require('../assets/img/kakao.png')} alt="카카오" className="social-icon" />
                            카카오로 로그인
                        </Button>
                        <div className="text-center mb-3">
                            <a href="#!">아이디 찾기</a> | <a href="#!">비밀번호 찾기</a>
                        </div>
                        <div className="text-center">
                            <span>아직 회원이 아니신가요?</span><a href='' onClick={() => { navigation.pageOpen('/LOG_2010') }}> 회원가입</a>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default LOGIN;