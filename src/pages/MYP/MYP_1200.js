import Header from '../../components/header';
import Footer from '../../components/footer';
import '../../assets/styles/style.css';
import '../../assets/styles/myp.css';

function MYP1200() {
    return (
        <div>
            <Header />

            <section className='Container'>
                <div className='com-head'>
                    <div>
                        <h3>내 정보 수정</h3>
                        <div className='com-path'>
                            마이페이지 > 내 정보 수정
                        </div>
                    </div>
                </div>

                <div className='form-section mt-3'>
                    {/* 아이디 입력 필드 */}
                    <div className='input-group'>
                        <label htmlFor=''>아이디</label>
                        <input type='text' id='' className='input-field' />
                    </div>

                    {/* 비밀번호 재설정 */}
                    <div className='password-reset'>
                        <h4>비밀번호 재설정</h4>
                        <button className='auth-button'>본인 인증하기</button>
                    </div>

                    {/* disabled */}
                    <div className='status-inputs'>
                        <div className='input-group'>
                            <input type='text' placeholder='현재 비밀번호' className='input-field' disabled />
                        </div>
                        <div className='input-group'>
                            <input type='text' placeholder='새 비밀번호' className='input-field' disabled />
                        </div>
                        <div className='input-group'>
                            <input type='text' placeholder='새 비밀번호 확인' className='input-field' disabled />
                        </div>

                        <div className='warning-txt mt-2'>
                            <span>* 영문,슷자,특수 문자를 사용하여 8~16자 이하로 입력하세요</span>
                        </div>

                        <div className='warning-txt mt-2'>
                            <span>* 영문,슷자,특수 문자를 사용하여 8~16자 이하로 입력하세요</span>
                        </div>

                        <div className='warning-txt mt-2'>
                            <span>* 영문,슷자,특수 문자를 사용하여 8~16자 이하로 입력하세요</span>
                        </div>
                    </div>

                    <div className='input-group mt-3'>
                        <label htmlFor=''>이름</label>
                        <input type='text' placeholder='홍길동' id='' className='input-name' />
                        <div className='gender-group mt-2'>
                            <label>
                                <input type='radio' name='gender' value='male' />남
                            </label>
                            <label>
                                <input type='radio' name='gender' value='female' />여
                            </label>
                        </div>
                    </div>

                    <div className="input-group-phone mt-3">
                        <label for="phone-number">휴대폰 번호</label>
                        <div className="phone-inputs">
                            <input type="text" className="input-field" placeholder="000" />
                            <input type="text" className="input-field" placeholder="0000" />
                            <input type="text" className="input-field" placeholder="0000" />
                        </div>
                    </div>

                    <div className='input-group mt-3'>
                        <label htmlFor=''>이메일</label>
                        <input type='text' placeholder='example@example.com' id='' className='input-field' />
                    </div>

                    <div className='input-group mt-3'>
                        <label htmlFor=''>닉네임</label>
                        <input type='text' placeholder='홍길동' id='' className='input-field' />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default MYP1200;