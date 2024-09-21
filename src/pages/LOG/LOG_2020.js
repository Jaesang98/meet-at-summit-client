import Header from '../../components/header'
import Footer from '../../components/footer'
import '../../assets/styles/style.css'
import '../../assets/styles/log.css'

function LOG2020() {
    return (
        <div>
            <Header></Header>

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
                            <input className='sign-inp' placeholder='아이디'></input>
                        </div>

                        <div className='mt-4 ms-3'>
                            <h4>비밀번호</h4>
                            <input className='sign-inp' placeholder='비밀번호'></input>
                            <input className='sign-inp' placeholder='비밀번호 확인'></input>
                        </div>

                        <div className='warning-txt mt-2'>
                            <span>* 영문,슷자,특수 문자를 사용하여 8~16자 이하로 입력하세요</span>
                        </div>

                        <div className='mt-4 ms-3'>
                            <h4>이름</h4>
                            <div className='name-input-group'>
                                <input className='sign-inp' placeholder='이름을 입력해주세요'></input>
                                <div className='gender-radio-group'>
                                    <label>
                                        <input type='radio' name='' value='' />
                                        남
                                    </label>
                                    <label>
                                        <input type='radio' name='' value='' />
                                        여
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='mt-4 ms-3'>
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
                        </div>
                    </div>

                    <button className='signup-button mt-3'>가입하기</button>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default LOG2020;
