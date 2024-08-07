import Header from '../../components/header'
import Footer from '../../components/footer';
import '../../assets/styles/style.css'
import '../../assets/styles/myp.css'

function MYP1100() {
    return (
        <div>
            <Header></Header>

            <section className='Container'>
                <div className='com-head'>
                    <div>
                        <h3>예약내역 상세</h3>
                        <div className='com-path'>
                        마이페이지 > 예약내역 > 예약내역 상세
                        </div>
                    </div>
                </div>

                <div className='reservation-info'>
                    <div className='reservation-details'>
                        <div className='reservation-date'>
                            2024.05.18 (토)
                        </div>
                        <div className='reservation-number'>
                            예약번호 : <span>2135651564651</span>
                        </div>
                    </div>
                    <button className='btn-cancel'>
                        예약 취소
                    </button>
                </div>

                <div className='custom-reservation-info'>
                    <div className='custom-reservation-date'>예약 상품 및 이용 정보</div>
                    <div className='custom-reservation-border'>
                        <div className='custom-reservation-image-container'>
                            <img src={require('../../assets/img/recentcliming.jpg')} alt='예약 이미지' className='custom-reservation-image' />
                        </div>
                        <div className='custom-reservation-details'>
                            <h4 className='custom-reservation-title'>더클라임 클라이밍 짐앤샵 양재점</h4>
                            <p className='custom-reservation-time'>주말 오후 이용권 (13:00 ~ 21:00)</p>
                            <strong className='custom-reservation-price'>25,000원</strong>
                        </div>
                    </div>
                </div>

                <div className='custom-reservation-info'>
                    <div className='custom-reservation-date'>예약자 정보</div>
                    <div className='custom-reservation-border2'>
                        <div className='custom-user-info'>
                            <h3>이용자 정보</h3>
                            <div>이름 <span>홍길동</span></div>
                            <div>휴대폰 번호 <span>010-1234-5678</span></div>
                            <hr />
                        </div>

                        <div className='custom-payment-info'>
                            <h3>결제 금액</h3>
                            <div>상품 금액 <span>25,000원</span></div>
                            <hr />
                            <div>총 결제 금액 <span>25,000원</span></div>
                            <div>결제 수단 <span>신용카드</span></div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default MYP1100;