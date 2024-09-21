import Header from '../../components/header'
import Footer from '../../components/footer';
import '../../assets/styles/style.css'
import '../../assets/styles/com.css'

function COM1200() {
    return (
        <div>
            <Header></Header>

            <section className='Container'>
                <div className='com-head'>
                    <div>
                        <h3>새 글 등록</h3>
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
                        <label htmlFor='category' className='form-label'>카테고리</label>
                        <select id='category' className='form-select'>
                            <option value='info'>정보</option>
                            <option value='question'>질문</option>
                            <option value='discussion'>토론</option>
                            <option value='other'>기타</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='title' className='form-label'>제목</label>
                        <input type='text' id='title' className='form-input' placeholder='제목을 입력하세요' />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='content' className='form-label'>내용</label>
                        <textarea id='content' className='form-textarea' placeholder='내용을 입력하세요'></textarea>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='attachment' className='form-label'>첨부파일</label>
                        <button className='attach-button'>파일 첨부하기</button>
                        <div className='attachment-info'>
                            <span>(3/</span>
                            <span>10)</span>
                        </div>
                        <div className='attachment-note'>
                            파일당 50MB까지 첨부 가능합니다.
                        </div>
                        <div className='attachment-list'>
                            <span className='com-file'>첨부파일명_첨부1.png</span>
                            <span className='com-file'>첨부파일명_첨부1.png</span>
                            <span className='com-file'>첨부파일명_첨부1.png</span>
                            <span className='com-file'>첨부파일명_첨부1.png</span>
                            <span className='com-file'>첨부파일명_첨부1.png</span>
                            <span className='com-file'>첨부파일명_첨부1.png</span>
                            <span className='com-file'>첨부파일명_첨부1.png</span>
                            <span className='com-file'>첨부파일명_첨부1.png</span>
                        </div>
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

export default COM1200;
