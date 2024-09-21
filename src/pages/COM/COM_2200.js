import Header from '../../components/header'
import Footer from '../../components/footer';
import '../../assets/styles/style.css'
import '../../assets/styles/com.css'

function COM2200() {
    return (
        <div>
            <Header></Header>

            <section className='Container'>
                <div className='com-head'>
                    <div>
                        <h3>파티 모집</h3>
                        <div className='com-path'>
                        커뮤니티 > 자유 게시판 > 새글등록
                        </div>
                    </div>

                    <div className='com-buttons'>
                        <button className='com-button-del'>작성 취소</button>
                        <button className='com-button'>저장</button>
                    </div>
                </div>

                <div className='com-write'>
                    <div className='form-group'>
                        <label htmlFor='category' className='form-label'>모집 상태</label>
                        <select id='category' className='form-select'>
                            <option value='info'>모집중</option>
                            <option value='question'>모집완료</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='title' className='form-label'>제목</label>
                        <input type='text' id='title' className='form-input' placeholder='제목을 입력하세요' />
                    </div>

                    <div className='form-group form-group-border'>
                        <div className='info-header'>
                            <span className='info-title'>파티 정보</span>
                        </div>

                        <div className='info-section'>
                            <label htmlFor='party-date' className='form-label'>
                                파티일시
                            </label>
                            <div className='info-date'>
                                <div>
                                    <input type='date' id='' className='form-input date-input' />
                                    <input type='date' id='' className='form-input date-input' />
                                    <label htmlFor='end-date-check' className='end-date-label'>
                                        <input type='checkbox' id='end-date-check' className='form-checkbox' />
                                        종료일
                                    </label>
                                </div>

                                <div className='mt-2'>
                                    <input type='time' id='' className='form-input date-input' />
                                    <input type='time' id='' className='form-input date-input' />
                                    <label htmlFor='end-date-check' className='end-date-label'>
                                        <input type='checkbox' id='end-date-check' className='form-checkbox' />
                                        종료시간
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='info-section'>
                            <label htmlFor='venue' className='form-label'>
                                장소
                            </label>
                            <input type='text' id='venue' className='form-input' placeholder='장소를 입력하세요' />
                        </div>

                        <div className='info-section'>
                            <label htmlFor='entry-fee' className='form-label'>
                                참가비
                            </label>
                            <div className='entry-fee-container'>
                                <input className='form-input fee-input' placeholder='0' />
                                <span className='currency-text'>원</span>
                            </div>
                        </div>
                    </div>

                    <div className='form-group'>
                        <textarea id='content' className='form-textarea' placeholder='내용을 입력하세요'></textarea>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='content' className='form-label'>
                            이미지 <span className='file-count'>(3/10)</span>
                        </label>
                        <button className='attach-button'>이미지 첨부하기</button>

                        <div className='image-container'>
                            <div className='image-wrapper'>
                                <img src={require('../../assets/img/recentcliming.jpg')} alt='첨부 이미지' className='uploaded-image' />
                                <button className='remove-button'></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default COM2200;
