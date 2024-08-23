import Header from '../../components/header'
import Footer from '../../components/footer';
import '../../assets/styles/style.css'
import '../../assets/styles/com.css'
import * as util from '../../util';
import { useState, useEffect, useRef } from 'react';

function COM1200() {
    const navigation = util.useNavigation();
    const requestApi = util.useApi();

    const [detailCategoryList, setDetailCategoryList] = useState([]);   // 카테고리 리스트
    const { communityList } = util.useLocationParams();                 // 상세 게시글
    const [selCategory, setSelCategory] = useState("1");
    const [selTitle, setSelTitle] = useState();
    const [selContent, setSelContent] = useState();
    const fileInputRef = useRef(null);                                  //인풋 요소
    const [selImage, setSelImage] = useState([]);                       //이미지 파일

    // 카테고리 가져오기
    const communityCategoryList = async () => {
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "get",
                url: "/api/climbing/community/detailcategory/",
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

    // 이미지 업로드
    const ImageUpload = (e) => {
        if (selImage.length == 3) {
            alert("이미지 그만 담으셈")
        }
        else {
            let file = e.target.files[0];

            // 파일 정보 출력
            // console.log('파일 이름:', file.name);
            // console.log('파일 크기:', file.size, 'bytes');
            // console.log('파일 타입:', file.type);

            // 파일 미리보기 URL 생성 (선택적)
            const previewURL = URL.createObjectURL(file);
            let selImageCp = [...selImage];
            selImageCp.push(previewURL);

            setSelImage(selImageCp);
            e.target.value = '';
        }
    }

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
                url: "/api/climbing/community/post/",
                params: {
                    detailCategory: selCategory,
                    title: selTitle,
                    content: selContent,
                    userId: "1206",
                    postImgUrl  : selImage
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
                url: "/api/climbing/community/post/",
                params: {
                    detailCategory: selCategory,
                    title: selTitle,
                    content: selContent,
                    postId: communityList.postId,
                    postImgUrl  : selImage
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
            setSelTitle(communityList.title);
            setSelContent(communityList.content);
            setSelImage(communityList.postImgUrl);
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

                    {/* <div className='form-group'>
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
                    </div> */}

                    <div className='form-group'>
                        <label htmlFor='content' className='form-label'>
                            이미지 <span className='file-count'>({selImage.length}/3)</span>
                        </label>
                        <button className='attach-button' onClick={() => { fileInputRef.current.click(); }}>이미지 첨부하기</button>
                        <input
                            type='file'
                            ref={fileInputRef}
                            onChange={ImageUpload}
                            accept='image/*'
                            style={{ display: 'none' }}
                        />

                        <div className='image-container'>
                            {
                                selImage.map((img, idx) => (
                                    <div className='image-wrapper' key={idx}>
                                        <img src={img} alt='첨부 이미지' className='uploaded-image' />
                                        <button className='remove-button' onClick={() => {
                                            let selImageCP = [...selImage];
                                            selImageCP.splice(idx, 1);
                                            setSelImage(selImageCP)
                                        }}></button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default COM1200;
