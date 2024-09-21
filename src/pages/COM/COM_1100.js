import Header from '../../components/header'
import Footer from '../../components/footer';
import { Popover, Overlay, Button } from 'react-bootstrap';
import '../../assets/styles/style.css'
import '../../assets/styles/com.css'
import { useState } from 'react';

function COM1100() {
    const [showPopover, setShowPopover] = useState(false);
    const [target, setTarget] = useState(null);

    const handleClick = (event) => {
        setTarget(event.target);
        setShowPopover(!showPopover);
    };

    const handleEdit = () => {
        setShowPopover(false);
        // 글 수정 로직을 여기에 추가하세요.
        alert('글 수정 기능이 필요합니다.');
    };

    const handleDelete = () => {
        setShowPopover(false);
        // 글 삭제 로직을 여기에 추가하세요.
        alert('글 삭제 기능이 필요합니다.');
    };

    const [isFavorite, setIsFavorite] = useState(false);
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div>
            <Header></Header>

            <section className='Container'>
                <div className="detail-container">
                    <span className='detail-category'>[모집중]</span>
                    <div className="detail-header">
                        <h3 className="detail-title">성수동 클라이밍장 추천 받습니다!!</h3>
                        <div className="more-button-container">
                            <Button variant="light" onClick={handleClick} className='btnMore'>
                                <div className='iconMore'></div>
                            </Button>
                            <Overlay
                                show={showPopover}
                                target={target}
                                placement="bottom"
                                rootClose
                                onHide={() => setShowPopover(false)}
                            >
                                <Popover id="popover-basic">
                                    <Popover.Body>
                                        <Button variant="" onClick={handleEdit} className="w-100 mb-2">글수정</Button>
                                        <Button variant="" onClick={handleDelete} className="w-100">글삭제</Button>
                                    </Popover.Body>
                                </Popover>
                            </Overlay>
                        </div>
                    </div>

                    <div className="detail-meta">
                        <span className="detail-date">2024.06.12 12:59</span>
                        <span className="detail-author ms-3">작성자: 임채성왕자</span>
                    </div>

                    <div className='detail-contents'>
                        <p>성수동에 괜찮은 클라이밍 센터 있을까요???
                            아니면 근처 강남까지도 좋습니다!!
                            추천 부탁드려요~~
                        </p>
                    </div>
                </div>

                <div className='form-group'>
                    <label htmlFor='attachment' className='form-label'>첨부파일</label>
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

                <div className="detail-comments-header">
                    <div className={`icon-text2 ${isFavorite ? 'favorite' : 'not-favorite'}`} onClick={toggleFavorite}>123</div>
                    <div className="icon-text comment-count">댓글
                        <span>45</span>
                    </div>
                </div>

                <div className="detail-comments">
                    <div className="comment-write">
                        <textarea id="" className="form-textarea" placeholder="내용을 입력하세요"></textarea>
                        <button className="com-button mt-3">등록</button>
                    </div>

                    <div className="comment">
                        <div className="comment-profile">
                            <img src={require('../../assets/img/recentcliming.jpg')} alt="프로필" />
                        </div>
                        <div className="more-button-contents">
                            <Button variant="light" onClick={handleClick} className='btnMore'>
                                <div className='contentsicon'></div>
                            </Button>
                            <Overlay
                                show={showPopover}
                                target={target}
                                placement="bottom"
                                rootClose
                                onHide={() => setShowPopover(false)}
                            >
                                <Popover id="popover-basic">
                                    <Popover.Body>
                                        <Button variant="" onClick={handleEdit} className="w-100 mb-2">댓글 수정</Button>
                                        <Button variant="" onClick={handleDelete} className="w-100">댓글 삭제</Button>
                                    </Popover.Body>
                                </Popover>
                            </Overlay>
                        </div>
                        <div className="comment-content">
                            <div className="comment-header">
                                <span className="comment-author">임채성왕자</span>
                                <span className="comment-date">2024.06.12 13:00</span>
                            </div>
                            <div className="comment-text">
                                저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다!
                            </div>
                        </div>
                    </div>

                    <div className="comment">
                        <div className="comment-profile">
                            <img src={require('../../assets/img/recentcliming.jpg')} alt="프로필" />
                        </div>
                        <div className="more-button-contents">
                            <Button variant="light" onClick={handleClick} className='btnMore'>
                                <div className='contentsicon'></div>
                            </Button>
                            <Overlay
                                show={showPopover}
                                target={target}
                                placement="bottom"
                                rootClose
                                onHide={() => setShowPopover(false)}
                            >
                                <Popover id="popover-basic">
                                    <Popover.Body>
                                        <Button variant="" onClick={handleEdit} className="w-100 mb-2">댓글 수정</Button>
                                        <Button variant="" onClick={handleDelete} className="w-100">댓글 삭제</Button>
                                    </Popover.Body>
                                </Popover>
                            </Overlay>
                        </div>
                        <div className="comment-content">
                            <div className="comment-header">
                                <span className="comment-author">임채성왕자</span>
                                <span className="comment-date">2024.06.12 13:00</span>
                            </div>
                            <div className="comment-text">
                                저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다!
                            </div>
                        </div>
                    </div>

                    <div className="comment">
                        <div className="comment-profile">
                            <img src={require('../../assets/img/recentcliming.jpg')} alt="프로필" />
                        </div>
                        <div className="more-button-contents">
                            <Button variant="light" onClick={handleClick} className='btnMore'>
                                <div className='contentsicon'></div>
                            </Button>
                            <Overlay
                                show={showPopover}
                                target={target}
                                placement="bottom"
                                rootClose
                                onHide={() => setShowPopover(false)}
                            >
                                <Popover id="popover-basic" className="custom-popover">
                                    <Popover.Body>
                                        <Button variant="" onClick={handleEdit} className="w-100 mb-2">댓글 수정</Button>
                                        <Button variant="" onClick={handleDelete} className="w-100">댓글 삭제</Button>
                                    </Popover.Body>
                                </Popover>
                            </Overlay>
                        </div>
                        <div className="comment-content">
                            <div className="comment-header">
                                <span className="comment-author">임채성왕자</span>
                                <span className="comment-date">2024.06.12 13:00</span>
                            </div>
                            <div className="comment-text">
                                저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다! 저는 너무 귀엽습니다!
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default COM1100;
