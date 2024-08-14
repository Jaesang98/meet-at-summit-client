import Header from '../../components/header'
import Footer from '../../components/footer';
import '../../assets/styles/style.css'
import '../../assets/styles/com.css'
import * as util from '../../util';
import { useState, useEffect } from 'react';

function COM1300() {
    const navigation = util.useNavigation();
    const requestApi = util.useApi();

    const [detailCategoryList, setDetailCategoryList] = useState([]);   // 카테고리 리스트
    const { communityList } = util.useLocationParams();                 // 상세 게시글
    const [selCategory, setSelCategory] = useState();
    const [selTitle, setSelTitle] = useState();
    const [selContent, setSelContent] = useState();

    // 카테고리 가져오기
    const communityCategoryList = async () => {
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "get",
                url: "http://192.168.5.220:9091/api/climbing/community/detailcategory/",
                params: {
                    communityCategory: 1,
                },
                callback(res) {
                    setDetailCategoryList(res.data.detailCategoryList);

                }
            });
        } catch (err) {
            console.error('Error during API request:', err);
        }
    };

    //작성취소
    const communityDetailCancel = () => {
        alert("작성취소 comfirm은 곧 만들어짐 일단 취소누른순간 초기화 ㅋㅋ ㅅㄱ");
        navigation.pageClose();

    }

    //작성
    const communityDetailSave = async () => {
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "POST",
                url: "http://192.168.5.220:9091/api/climbing/community/post/",
                params: {
                    detailCategory: selCategory,
                    title: selTitle,
                    content: selContent,
                    userId: 1206,
                },
                callback(res) {
                    if (res.code == 200) {
                        alert("저장됨 ㅋㅋ 빼도박도못함");
                        navigation.pageClose();
                    }
                }
            });
        } catch (err) {
            console.error('Error during API request:', err);
        }
    };

    //수정
    const communityDetailReSave = async () => {
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "PUT",
                url: "http://192.168.5.220:9091/api/climbing/community/post/",
                params: {
                    detailCategory: selCategory,
                    title: selTitle,
                    content: selContent,
                    postId: communityList.postId,
                },
                callback(res) {
                    if (res.code == 200) {
                        alert("저장됨 ㅋㅋ 빼도박도못함");
                        navigation.pageClose();
                    }
                }
            });
        } catch (err) {
            console.error('Error during API request:', err);
        }
    };

    //서버정보 호출 => 카테고리 선택
    useEffect(() => {
        communityCategoryList();
        if (communityList) {
            setSelCategory(communityList.detailCategory);
        }
    }, []);


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
                        <button className='com-button-del'
                            onClick={() => { communityDetailCancel() }}>
                            작성 취소</button>
                            {
                                !communityList ?
                                <button className='com-button' onClick={communityDetailSave}>저장</button> :
                                <button className='com-button' onClick={communityDetailReSave}>수정</button> 
                            }
                    </div>
                </div>

                <div className='com-write'>
                    <div className='form-group'>
                        <label htmlFor='category' className='form-label'>카테고리</label>
                        <select id='category' className='form-select' value={selCategory} onChange={(e) => { setSelCategory(e.target.value) }}>
                            {
                                detailCategoryList.map((item, idx) => (
                                    <option value={item.detailCategory} key={idx}>{item.detailNm}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='title' className='form-label'>제목</label>
                        {
                            !communityList ?
                                <input type='text' id='title' className='form-input' placeholder='제목을 입력하세요'
                                    onChange={(e) => { setSelTitle(e.target.value) }} /> :

                                <input type='text' id='title' className='form-input' placeholder=''
                                    defaultValue={communityList.title}
                                    onChange={(e) => { setSelTitle(e.target.value) }} />
                        }
                    </div>

                    <div className='form-group'>
                        <label htmlFor='content' className='form-label'>내용</label>
                        {
                            !communityList ?
                                <textarea id='content' className='form-textarea' placeholder='내용을 입력하세요'
                                    onChange={(e) => { setSelContent(e.target.value) }}></textarea> :

                                <textarea id='content' className='form-textarea' placeholder='내용을 입력하세요'
                                    defaultValue={communityList.content}
                                    onChange={(e) => { setSelContent(e.target.value) }}></textarea>
                        }
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

export default COM1300;
