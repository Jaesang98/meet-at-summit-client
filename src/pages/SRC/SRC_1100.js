import Header from '../../components/header'
import Footer from '../../components/footer';
import '../../assets/styles/style.css';
import '../../assets/styles/src.css';
import { useState } from 'react';

function SRC1100() {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div>
            <Header></Header>

            <section className='Container'>
                <div className="input-group homInput">
                    <span className="input-group-text" id="basic-addon1">
                        <img src={require('../../assets/img/search.svg').default}></img>
                    </span>
                    <input type="text" className="form-control" placeholder="내 주변 클라이밍장 찾기" aria-label="Input group example" aria-describedby="basic-addon1" />
                </div>

                <div className='clim-detail'>
                    <h4>더클라임 클라이밍 짐엔샵 양재점</h4>
                    <div className='actions'>
                        <span className={isFavorite ? 'favorite' : 'not-favorite'} onClick={toggleFavorite}>즐겨찾기</span>
                        <span className="clim-share">공유하기</span>
                    </div>
                </div>

                <div className='clim-detailImg'>
                    <img className='detail-mainImg' src={require('../../assets/img/recentcliming.jpg')} alt=""></img>
                    <div className='detail-subImg-container'>
                        <img className='detail-subImg' src={require('../../assets/img/recentcliming.jpg')} alt=""></img>
                        <img className='detail-subImg' src={require('../../assets/img/recentcliming.jpg')} alt=""></img>
                    </div>
                </div>

                <div className='clim-detailArea'>
                    <div className='detail-info'>
                        <div className="review-container">
                            <img src={require('../../assets/img/star.svg').default} alt="Star Rating" className="review-icon" />
                            <div className="review-info">
                                <strong>4.5</strong>
                                <span>리뷰보기</span>
                                <span>(1,071)</span>
                            </div>
                        </div>

                        <div className='mt-3'>
                            <div className='detail-address'>서울 강남구 남부순환로 2615 지하1층</div>
                            <div className='ms-4'>양재역 4번 출구에서 128m (3초선 양재역 4번 출구에서 직진 - 도보 2분거리)</div>
                        </div>

                        <hr></hr>

                        <div className="detail-info-container">
                            <div className="detail-hours">
                                <span className="detail-hours-label">영업시간</span>
                                <div className="detail-hours-info">
                                    <div>평일 06:00 ~ 24:00</div>
                                    <div>주말(공휴일) 06:00 ~ 24:00</div>
                                </div>
                            </div>
                            <div className="detail-contact">연락처 02-576-8821</div>
                        </div>

                        <hr></hr>
                    </div>

                    <div className='border-full detail-visit'>
                        <div className='visit-item'>
                            <label htmlFor="reservation-date">예약 날짜</label>
                            <input type="date" id="reservation-date" name="reservation-date" />
                        </div>
                        <div className='visit-item'>
                            <label htmlFor="number-of-people">인원</label>
                            <select id="number-of-people" name="number-of-people">
                                <option value="1">1명</option>
                                <option value="2">2명</option>
                                <option value="3">3명</option>
                                <option value="4">4명</option>
                                <option value="5">5명</option>
                                <option value="6">6명</option>
                            </select>
                        </div>
                        <button className='reserve-button'>예약하기</button>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default SRC1100;
