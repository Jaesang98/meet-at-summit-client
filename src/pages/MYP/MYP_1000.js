import Header from '../../components/header'
import Footer from '../../components/footer';
import '../../assets/styles/style.css'
import '../../assets/styles/myp.css'

function MYP1000() {
    return (
        <div>
            <Header></Header>

            <section className='Container'>
                <div>
                    <h3 className='page-title'>마이페이지</h3>
                    <div className='profile-container'>
                        <div className='profile-image-container'>
                            <img src={require('../../assets/img/recentcliming.jpg')} alt='프로필 이미지' className='profile-image' />
                        </div>
                        <div className='profile-info'>
                            <h2 className='profile-name'>홍길동</h2>
                            <div className='profile-buttons'>
                                <button className='btn btn-change-photo'>사진 변경</button>
                                <button className='btn btn-edit-info'>내 정보 수정</button>
                            </div>
                        </div>
                    </div>
                </div>


                <ul className="myp-main mt-3">
                    <li className="myp-tab-item myp-active">예약내역</li>
                    <li className="myp-tab-item">파티 참가/모집 내역</li>
                </ul>

                <div className='filter-container'>
                    <select className='filter-select'>
                        <option value='recent'>최근 3개월</option>
                        <option value='last-6-months'>최근 6개월</option>
                        <option value='last-year'>지난 1년</option>
                    </select>

                    <div className="dropdown_header">
                        <div className="dropdown">
                            <select className="custom-select">
                                <option>최신순</option>
                                <option>날짜순</option>
                                <option>기타</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div className='reservation-container'>
                    <div className='reservation-info'>
                        <div className='reservation-image-container'>
                            <div className='reservation-date'>2024.05.18 (토)</div>
                            <img src={require('../../assets/img/recentcliming.jpg')} alt='예약 이미지' className='reservation-image' />
                        </div>
                        <div className='reservation-details'>
                            <div className='reservation-number'>
                                예약번호 :
                                <span>240518123648671</span>
                            </div>
                            <h4 className='reservation-title'>
                                <a href='https://example.com' target='_blank' rel='noopener noreferrer'>더클라임 클라이밍 짐앤샵 양재점</a>
                            </h4>
                            <p className='reservation-time'>주말 오후 이용권 (13:00 ~ 21:00)</p>
                            <button className='btn btn-write-review'>리뷰 작성</button>
                        </div>
                    </div>

                    <div className='reservation-info'>
                        <div className='reservation-image-container'>
                            <div className='reservation-date'>2024.05.18 (토)</div>
                            <img src={require('../../assets/img/recentcliming.jpg')} alt='예약 이미지' className='reservation-image' />
                        </div>
                        <div className='reservation-details'>
                            <div className='reservation-number'>
                                예약번호 :
                                <span>240518123648671</span>
                            </div>
                            <h4 className='reservation-title'>
                                <a href='https://example.com' target='_blank' rel='noopener noreferrer'>더클라임 클라이밍 짐앤샵 양재점</a>
                            </h4>
                            <p className='reservation-time'>주말 오후 이용권 (13:00 ~ 21:00)</p>
                            <button className='btn btn-write-review'>리뷰 작성</button>
                        </div>
                    </div>

                    <div className='reservation-info'>
                        <div className='reservation-image-container'>
                            <div className='reservation-date'>2024.05.18 (토)</div>
                            <img src={require('../../assets/img/recentcliming.jpg')} alt='예약 이미지' className='reservation-image' />
                        </div>
                        <div className='reservation-details'>
                            <div className='reservation-number'>
                                예약번호 :
                                <span>240518123648671</span>
                            </div>
                            <h4 className='reservation-title'>
                                <a href='https://example.com' target='_blank' rel='noopener noreferrer'>더클라임 클라이밍 짐앤샵 양재점</a>
                            </h4>
                            <p className='reservation-time'>주말 오후 이용권 (13:00 ~ 21:00)</p>
                            <button className='btn btn-write-review'>리뷰 작성</button>
                        </div>
                    </div>

                    <div className='reservation-info'>
                        <div className='reservation-image-container'>
                            <div className='reservation-date'>2024.05.18 (토)</div>
                            <img src={require('../../assets/img/recentcliming.jpg')} alt='예약 이미지' className='reservation-image' />
                        </div>
                        <div className='reservation-details'>
                            <div className='reservation-number'>
                                예약번호 :
                                <span>240518123648671</span>
                            </div>
                            <h4 className='reservation-title'>
                                <a href='https://example.com' target='_blank' rel='noopener noreferrer'>더클라임 클라이밍 짐앤샵 양재점</a>
                            </h4>
                            <p className='reservation-time'>주말 오후 이용권 (13:00 ~ 21:00)</p>
                            <button className='btn btn-write-review'>리뷰 작성</button>
                        </div>
                    </div>
                </div>

                {/* 파티 참가/ 모집내역 */}
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="list-item-left">
                            <span className="list-item-recruiting">[모집중]</span>
                            <span className="list-item-title">첫 번째 글 입니다</span>
                        </div>
                        <div className="list-item-right">
                        <span className="list-item-partycomments">참여<span className="party-number">10</span></span>
                            <span className="list-item-author">작성자: 임채성</span>
                            <span className="clim-comuDt">2024.06.23</span>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="list-item-left">
                            <span className="list-item-completed">[모집완료]</span>
                            <span className="list-item-title">첫 번째 글 입니다</span>
                        </div>
                        <div className="list-item-right">
                        <span className="list-item-partycomments">참여<span className="party-number">10</span></span>
                            <span className="list-item-author">작성자: 임채성</span>
                            <span className="clim-comuDt">2024.06.23</span>
                        </div>
                    </li>
                </ul>
                {/* 파티 참가/ 모집내역 */}
            </section>

            <Footer></Footer>
        </div>
    );
}

export default MYP1000;