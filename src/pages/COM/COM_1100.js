import Header from '../../components/header'
import Footer from '../../components/footer';
import { Popover, Overlay, Button } from 'react-bootstrap';
import '../../assets/styles/style.css'
import '../../assets/styles/com.css'
import * as util from '../../util';
import { useState, useEffect } from 'react';

function COM1100() {
    const navigation = util.useNavigation();
    const requestApi = util.useApi();
    const [showDetailPopover, setShowDetailPopover] = useState(false);  // 게시글 팝오버 상태
    const [showPopover, setShowPopover] = useState({});                 // 댓글별 팝오버 상태
    const [target, setTarget] = useState(null);

    const detailHandleClick = (event) => {
        setTarget(event.target);
        setShowDetailPopover(!showDetailPopover); // 게시물 세부 사항 팝오버 토글
    };

    const CommentHandleClick = (event, commentId) => {
        setTarget(event.target);
        setShowPopover(prev => ({
            ...prev,
            [commentId]: !prev[commentId] // 각 댓글별 팝오버 토글
        }));
    };

    const [isFavorite, setIsFavorite] = useState(false);
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const { postId } = util.useLocationParams();            //유틸리티 함수 사용
    const [communityList, setCommunityList] = useState([]); //자유게시판 상세내용
    const [commentList, setCommentList] = useState([]);     //자유게시판 댓글
    const [commentClick, setCommentClick] = useState({})    //수정 여부
    const [comment, setComment] = useState("");             //수정 댓글내용

    // 커뮤니티상세 (내용 댓글)
    const communityDetail = async () => {
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "get",
                url: "/api/climbing/community/detail/",
                params: {
                    postId: postId,
                },
                callback(res) {
                    setCommunityList(res.data.communityList[0]);
                    setCommentList(res.data.commentList);

                    const commentMap = res.data.commentList.reduce((acc, item) => {
                        acc[item.commentId] = false;
                        return acc;
                    }, {});

                    setCommentClick(commentMap);
                }
            });
        } catch (err) {
            console.error('Error during API request:', err);
        }
    };

    // 커뮤니티상세 글 삭제
    const communityDetailDelete = async () => {
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "DELETE",
                url: "/api/climbing/community/post/",
                params: {
                    postId: postId
                },
                callback(res) {
                    if (res.code == 200) {
                        alert("게시글 삭제됨 ㅋㅋㅅㄱ");
                        navigation.pageClose();
                    }
                }
            });
        } catch (err) {
            console.error('Error during API request:', err);
        }
    };

    //댓글 등록
    const commentsRegist = async () => {
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "POST",
                url: "/api/climbing/community/comment/",
                params: {
                    postId: communityList.postId,
                    userId: "1206",
                    comment: comment
                },
                callback(res) {
                    setShowPopover(false);
                    if (res.code == 200) {
                        alert("잘~ 등록되었씁니다");
                        communityDetail();
                    }
                }
            });
        } catch (err) {
            console.error('Error during API request:', err);
        }
    };

    //댓글 수정
    const commentsEdit = async (commentId) => {
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "PUT",
                url: "/api/climbing/community/comment/",
                params: {
                    commentId: commentId,
                    comment: comment
                },
                callback(res) {
                    setShowPopover(false);
                    if (res.code == 200) {
                        alert("잘~ 수정되었씁니다");
                        communityDetail();
                    }
                }
            });
        } catch (err) {
            console.error('Error during API request:', err);
        }
    };

    //댓글 삭제
    const commentsDelete = async (commentId) => {
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "DELETE",
                url: "/api/climbing/community/comment/",
                params: {
                    commentId: commentId,
                },
                callback(res) {
                    setShowPopover(false);
                    if (res.code == 200) {
                        alert("잘~ 삭제되었씁니다");
                        communityDetail();
                    }
                }
            });
        } catch (err) {
            console.error('Error during API request:', err);
        }
    };

    useEffect(() => {
        communityDetail();
    }, []);

    return (
        <div>
            <Header></Header>

            <section className='Container'>
                <div className="detail-container">
                    <span className='detail-category'>[{communityList.detailNm}]</span>
                    <div className="detail-header">
                        <h3 className="detail-title">{communityList.title}</h3>
                        <div className="more-button-container">
                            <Button variant="light" className='btnMore' onClick={detailHandleClick}>
                                <div className='iconMore'></div>
                            </Button>
                            <Overlay
                                show={showDetailPopover}
                                target={target}
                                placement="bottom"
                                rootClose
                                onHide={() => setShowDetailPopover(false)}
                            >
                                <Popover id="popover-basic">
                                    <Popover.Body>
                                        <Button variant="" className="w-100 mb-2" onClick={() => {
                                            navigation.pageOpen("/COM_1200", { communityList: communityList })
                                            setShowDetailPopover(false);
                                        }}>글수정</Button>

                                        <Button variant="" className="w-100" onClick={() => {
                                            communityDetailDelete();
                                            setShowDetailPopover(false);
                                        }}>글삭제</Button>
                                    </Popover.Body>
                                </Popover>
                            </Overlay>
                        </div>
                    </div>

                    <div className="detail-meta">
                        <span className="detail-date">{communityList.createDate}</span>
                        <span className="detail-author ms-3">작성자: {communityList.author}</span>
                    </div>

                    <div className='detail-contents'>
                        <p>{communityList.content}</p>
                    </div>
                </div>

                {/* <div className='form-group'>
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
                </div> */}

                <div className='form-group'>
                    <label htmlFor='content' className='form-label'>
                        이미지 <span className='file-count'>({(communityList.postImgUrl || []).length}/3)</span>
                    </label>
                    <div className='image-container'>
                        {
                            (communityList.postImgUrl || []).map((item, idx) => (
                                <div className='image-wrapper' key={idx}>
                                    <img src={item} alt='첨부 이미지' className='uploaded-image' />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="detail-comments-header">
                    <div className={`icon-text2 ${isFavorite ? 'favorite' : 'not-favorite'}`} onClick={toggleFavorite}>123</div>
                    <div className="icon-text comment-count">댓글
                        <span>{communityList.commentCnt}</span>
                    </div>
                </div>

                <div className="detail-comments">
                    <div className="comment-write">
                        <textarea id="" className="form-textarea" placeholder="내용을 입력하세요" onChange={(e) => { setComment(e.target.value) }}></textarea>
                        <button className="com-button mt-3" onClick={commentsRegist}>등록</button>
                    </div>

                    {
                        commentList.map((item, idx) => (
                            <div className="comment" key={idx} >
                                {/* 프로필 */}
                                <div className="comment-profile">
                                    <img src={require('../../assets/img/recentcliming.jpg')} alt="프로필" />
                                </div>
                                {/* //프로필 */}

                                {/* 댓글 관리 */}
                                <div className="more-button-contents">
                                    <Button
                                        variant="light"
                                        onClick={(event) => CommentHandleClick(event, item.commentId)}
                                        className='btnMore'
                                    >
                                        <div className='contentsicon'></div>
                                    </Button>
                                    <Overlay
                                        show={showPopover[item.commentId]} // 각 commentId에 맞는 Popover 상태 사용
                                        target={target}
                                        placement="bottom"
                                        rootClose
                                        onHide={() => setShowPopover(prev => ({ ...prev, [item.commentId]: false }))}
                                    >
                                        <Popover id="popover-basic">
                                            <Popover.Body>
                                                <Button variant="" className="w-100 mb-2"
                                                    onClick={() => setCommentClick(prev => ({ ...prev, [item.commentId]: true }))}>댓글 수정</Button>
                                                <Button variant="" className="w-100"
                                                    onClick={() => { commentsDelete(item.commentId) }} >댓글 삭제</Button>
                                            </Popover.Body>
                                        </Popover>
                                    </Overlay>
                                </div>
                                {/* //댓글 관리 */}

                                {/*  */}
                                <div className="comment-content">
                                    <div className="comment-header">
                                        <span className="comment-author">{item.userId}</span>
                                        {
                                            commentClick[item.commentId] == false ? <span className="comment-date">{item.updateDate.formattedDate("YYYY-MM-DD HH:MM")}</span> : ""
                                        }
                                    </div>

                                    {
                                        commentClick[item.commentId] == false ?
                                            <div className="comment-text" onChange={(e) => { setComment(e.target.value) }}>
                                                {item.comment}
                                            </div>
                                            :
                                            <div>
                                                <textarea id="" className="form-textarea mt-3" placeholder="내용을 입력하세요" defaultValue={item.comment}
                                                    onChange={(e) => { setComment(e.target.value) }}></textarea>
                                                <button className="com-button mt-3" onClick={() => { commentsEdit(item.commentId) }}>수정</button>
                                            </div>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default COM1100;
