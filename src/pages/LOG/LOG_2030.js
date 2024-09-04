import Header from '../../components/header'
import Footer from '../../components/footer'
import '../../assets/styles/style.css'
import '../../assets/styles/log.css'
import * as util from '../../util';

function LOG2030() {
    const navigation = util.useNavigation();
    const { name } = util.useLocationParams();            //유틸리티 함수 사용

    console.log(name)
    
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
                            <div className="stepper-item completed">
                                <div className="step-counter">4</div>
                                <div className="step-name">가입완료</div>
                            </div>
                        </div>
                    </div>

                    <div className='sign-complete'>
                        <div>
                            <img src={require('../../assets/img/sign-complete.png')}></img>
                        </div>

                        <div className='mt-3'>
                            <span><strong>{name}님!</strong> 가입을 축하드려요!</span>
                            <p>지금 로그인하고 다양한 클라이밍 정보와 파티를 찾아보세요!</p>
                        </div>
                    </div>

                    <button className='signup-button mt-3' onClick={()=> {navigation.pageOpen('/')}}>시작하기</button>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default LOG2030;
