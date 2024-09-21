import Header from '../../components/header'
import Footer from '../../components/footer';
import '../../assets/styles/style.css'
import '../../assets/styles/com.css'

function COM1000() {
    return (
        <div>
            <Header></Header>

            <section className='Container'>
                <div className='com-head'>
                    <h3 className='commu-log'>커뮤니티</h3>
                    <div className="input-group">
                        <span className="input-group-text">
                            <img src={require('../../assets/img/search.svg').default} alt="Search" />
                        </span>
                        <input type="text" className="form-control" placeholder="글, 제목, 내용, 작성자로 검색" />
                    </div>
                </div>

                <ul className="com-main">
                    <li className="com-tab-item com-active">자유 게시판</li>
                    <li className="com-tab-item">파티 모집</li>
                </ul>

                <div className="hom-wrapper">
                    <ul className="hom-tabs-box">
                        <li className="hom-tab">
                            <input type="checkbox" id="tab1" className="checkbox" />
                            <label htmlFor="tab1" className="hom-tab-label">전체</label>
                        </li>
                        <li className="hom-tab">
                            <input type="checkbox" id="tab2" className="checkbox" />
                            <label htmlFor="tab2" className="hom-tab-label">정보</label>
                        </li>
                        <li className="hom-tab">
                            <input type="checkbox" id="tab3" className="checkbox" />
                            <label htmlFor="tab3" className="hom-tab-label">질문</label>
                        </li>
                        <li className="hom-tab">
                            <input type="checkbox" id="tab4" className="checkbox" />
                            <label htmlFor="tab4" className="hom-tab-label">잡담</label>
                        </li>
                        <li className="hom-tab">
                            <input type="checkbox" id="tab5" className="checkbox" />
                            <label htmlFor="tab5" className="hom-tab-label">시사/이슈</label>
                        </li>
                        <li className="hom-tab">
                            <input type="checkbox" id="tab6" className="checkbox" />
                            <label htmlFor="tab6" className="hom-tab-label">기타</label>
                        </li>
                    </ul>
                    <button className='com-button'>새 글 등록</button>
                </div>

                <ul className="list-group list-group-flush">
                    {/* {자유게시판} */}
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="list-item-left">
                            <span className="list-item-category">[정보]</span>
                            <span className="list-item-title">첫 번째 글 입니다</span>
                        </div>
                        <div className="list-item-right">
                            <span className="list-item-comments">10</span>
                            <span className="list-item-author">작성자: 임채성</span>
                            <span className="clim-comuDt">2024.06.23</span>
                        </div>
                    </li>
                    {/* {자유게시판} */}

                    {/* {파티모집} */}
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
                    {/* {파티모집} */}
                </ul>

                <div class="pagination">
                    <a href="#">&laquo;</a>
                    <a href="#">1</a>
                    <a href="#" class="active">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">&raquo;</a>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default COM1000;
