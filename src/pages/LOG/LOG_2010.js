import Header from '../../components/header'
import Footer from '../../components/footer'
import '../../assets/styles/style.css'
import '../../assets/styles/log.css'
import { useNavigation, useApi, useNiceAuth } from '../../util';
import { useState } from 'react';

function LOG2010() {
    const { openNIDPopup } = useNiceAuth();
    
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
                            <div className="stepper-item active">
                                <div className="step-counter">2</div>
                                <div className="step-name">본인인증</div>
                            </div>
                            <div className="stepper-item active">
                                <div className="step-counter">3</div>
                                <div className="step-name">가입정보입력</div>
                            </div>
                            <div className="stepper-item">
                                <div className="step-counter">4</div>
                                <div className="step-name">가입완료</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='border-full check-all'>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" />
                                <label className="form-check-label">
                                    <strong>전체동의</strong>
                                    (선택 포함)
                                </label>
                            </div>
                        </div>

                        <div className='border-full check-list mt-3'>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" />
                                <label className="form-check-label">
                                    만 14세 이상 이용, 서비스 이용약관, 개인정보 수집 및 이용동의 (필수)
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" />
                                <label className="form-check-label">
                                    개인정보 수집 및 이용동의 (필수)
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" />
                                <label className="form-check-label">
                                    마케팅 정보 수신 동의 (선택)
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" />
                                <label className="form-check-label">
                                    위치 정보 이용약관 동의 (선택)
                                </label>
                            </div>
                        </div>
                    </div>

                    <button className='signup-button mt-3' onClick={openNIDPopup}>동의하고 가입하기</button>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default LOG2010;
