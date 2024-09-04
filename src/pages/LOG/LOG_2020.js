import Header from '../../components/header'
import Footer from '../../components/footer'
import '../../assets/styles/style.css'
import '../../assets/styles/log.css'
import * as util from '../../util';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../store';

function LOG2020() {
    const navigation = util.useNavigation();
    const requestApi = util.useApi();
    const dispatch = useDispatch();

    const [userId, setUserId] = useState("");
    const [passwd, setPasswd] = useState("");
    const [passwdConfirm, setPasswdConfirm] = useState("");
    const [name, setName] = useState("");

    //클라이밍장 정보 가져오기
    const userSign = async () => {
        if (userId == "" || passwd == "" || passwdConfirm == "" || name == "") {
            alert('안적은거 있음')
        }
        else if (passwd != passwdConfirm || util.passwordRegex(passwd) == false) {
            alert("패스워드 제대로 적으셈")
        }
        else {
            try {
                await requestApi.NetWork({
                    getYn: false,
                    method: "POST",
                    url: "/api/climbing/auth/signup",
                    params: {
                        userId: userId,
                        passwd: passwd,
                        name: name
                    },
                    callback(res) {
                        dispatch(setUserInfo({ userId: userId, name: name }));

                        navigation.pageOpen('/LOG_2030', {
                            name: name
                        });


                    }
                });
            } catch (err) {
                alert("이미 있는 아이디임")
            }
        }
    };

    return (
        <div>
            {/* <Header></Header> */}

            <section className='Container'>
                <div className='agreement-area'>
                    <div>
                        <h3>회원가입</h3>

                        <div className="stepper-wrapper">
                            <div className="stepper-item completed">
                                <div className="step-counter">1</div>
                                <div className="step-name">약관동의</div>
                            </div>
                            <div className="stepper-item completed">
                                <div className="step-counter">2</div>
                                <div className="step-name">본인인증</div>
                            </div>
                            <div className="stepper-item completed">
                                <div className="step-counter">3</div>
                                <div className="step-name">가입정보입력</div>
                            </div>
                            <div className="stepper-item">
                                <div className="step-counter">4</div>
                                <div className="step-name">가입완료</div>
                            </div>
                        </div>
                    </div>

                    <div className='border-full sign-area'>
                        <div className='mt-3 ms-3'>
                            <h4>아이디</h4>
                            <input className='sign-inp' placeholder='아이디' onChange={(e) => { setUserId(e.target.value) }}></input>
                        </div>

                        <div className='mt-4 ms-3'>
                            <h4>비밀번호</h4>
                            <input className='sign-inp' type='password' placeholder='비밀번호' onChange={(e) => { setPasswd(e.target.value); }}></input>
                            <input className='sign-inp' type='password' placeholder='비밀번호 확인' onChange={(e) => { setPasswdConfirm(e.target.value) }}></input>
                        </div>

                        {
                            passwd != passwdConfirm ?
                                <div className='warning-txt mt-2'>
                                    <span>* 비밀번호를 다시 확인해주세요</span>
                                </div> :
                                ""
                        }

                        {
                            !util.passwordRegex(passwd) ?
                                <div className='warning-txt mt-2'>
                                    <span>* 영문,슷자,특수 문자를 사용하여 8~16자 이하로 입력하세요</span>
                                </div> :
                                ""
                        }

                        <div className='mt-4 ms-3'>
                            <h4>이름</h4>
                            <div className='name-input-group'>
                                <input className='sign-inp' placeholder='이름을 입력해주세요' onChange={(e) => { setName(e.target.value) }}></input>
                                {/* <div className='gender-radio-group'>
                                    <label>
                                        <input type='radio' name='' value='' />
                                        남
                                    </label>
                                    <label>
                                        <input type='radio' name='' value='' />
                                        여
                                    </label>
                                </div> */}
                            </div>
                        </div>

                        {/* <div className='mt-4 ms-3'>
                            <h4>휴대폰번호</h4>
                            <input placeholder='010'></input>
                            <input className='ms-3' placeholder='1234'></input>
                            <input className='ms-3' placeholder='5678'></input>
                        </div>

                        <div className='mt-4 ms-3'>
                            <h4>이메일</h4>
                            <input className='sign-inp' placeholder='example@example'></input>
                        </div>

                        <div className='mt-4 ms-3'>
                            <h4>닉네임</h4>
                            <input className='sign-inp' placeholder='사용하실 닉네임을 입력해주세요'></input>
                        </div> */}
                    </div>

                    <button className='signup-button mt-3' onClick={userSign}>가입하기</button>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default LOG2020;
