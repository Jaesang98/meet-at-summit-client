import Header from '../../components/header'
import Footer from '../../components/footer';
import '../../assets/styles/style.css'
import '../../assets/styles/com.css'
import * as util from '../../util';
import { useState, useEffect, useRef } from 'react';

function COM2200() {
    const navigation = util.useNavigation();
    const requestApi = util.useApi();

    const { communityList } = util.useLocationParams();                 // 상세 게시글
    const [detailCategoryList, setDetailCategoryList] = useState([]);   // 카테고리 리스트
    const [detailFormat, setDetailFormat] = useState({})                // 수정 및 작성한 상세 게시글
    const fileInputRef = useRef(null);                                  //인풋 요소
    const [selImage, setSelImage] = useState([]);                       //이미지 파일

    // 상세 수정
    const detailChange = (event, field) => {
        let newValue = event.target.value;
        if (field == "selEntryFee") {
            newValue = newValue.replace(/[^0-9]/g, '');     //처음에 ,문자를 제거
            newValue = util.addComma(newValue);             //컴마추가
        }

        setDetailFormat(prev => ({
            ...prev,
            [field]: newValue
        }));
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

    // 카테고리 가져오기
    const communityCategoryList = async () => {
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "get",
                url: "/api/climbing/community/detailcategory/",
                params: {
                    communityCategory: 2,
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
                url: "/api/climbing/community/partypost/",
                params: {
                    detailCategory: detailFormat.selCategory,                   //카테고리
                    title: detailFormat.selTitle,                               //타이틀
                    content: detailFormat.selContent,                           //내용
                    userId: "1206",                                             //아이디
                    partyStartDate: detailFormat.selStartDay,                   //시작일자
                    partyStartTime: detailFormat.selStartTime,                  //시작시간
                    partyEndDate: detailFormat.selEndDay,                       //종료일자
                    partyEndTime: detailFormat.selEndTime,                      //종료시간
                    partyLocation: detailFormat.selLocation,                    //위치
                    partyEntryFee: util.removeComma(detailFormat.selEntryFee),  //가격
                    postImgUrl  : selImage                                      //업로드 이미지
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
                url: "/api/climbing/community/partypost/",
                params: {
                    detailCategory: detailFormat.selCategory,                   //카테고리
                    title: detailFormat.selTitle,                               //타이틀
                    content: detailFormat.selContent,                           //내용
                    postId: communityList.postId,                               //게시물 아이디
                    partyStartDate: detailFormat.selStartDay,                   //시작일자
                    partyStartTime: detailFormat.selStartTime,                  //시작시간
                    partyEndDate: detailFormat.selEndDay,                       //종료일자
                    partyEndTime: detailFormat.selEndTime,                      //종료시간
                    partyLocation: detailFormat.selLocation,                    //위치
                    partyEntryFee: util.removeComma(detailFormat.selEntryFee),  //가격
                    postImgUrl  : selImage                                      //업로드 이미지
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
        let obj = {
            selCategory: "1",
            selTitle: "",
            selContent: "",
            selStartDay: "",
            selStartTime: "",
            selEndDay: "",
            selEndTime: "",
            selLocation: "",
            selEntryFee: "",
        }

        if (communityList) {
            obj = {
                selCategory: communityList.detailCategory,
                selTitle: communityList.title,
                selContent: communityList.content,
                selStartDay: communityList.partyStartDate,
                selStartTime: communityList.partyStartTime,
                selEndDay: communityList.partyEndDate,
                selEndTime: communityList.partyEndTime,
                selLocation: communityList.partyLocation,
                selEntryFee: communityList.partyEntryFee,
            }
            setSelImage(communityList.postImgUrl);
        }

        setDetailFormat(obj);
    }, []);
    return (
        <div>
            <Header></Header>

            <section className='Container'>
                <div className='com-head'>
                    <div>
                        <h3>파티 모집</h3>
                        <div className='com-path'>
                        커뮤니티 > 파티모집 > 새글등록
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
                        <label htmlFor='category' className='form-label'>모집 상태</label>
                        <select id='category' className='form-select' value={detailFormat.selCategory} onChange={(e) => { detailChange(e, 'selCategory') }}>
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
                                    onChange={(e) => { detailChange(e, 'selTitle') }} /> :

                                <input type='text' id='title' className='form-input' placeholder=''
                                    defaultValue={communityList.title}
                                    onChange={(e) => { detailChange(e, 'selTitle') }} />
                        }
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
                                    {
                                        !communityList ?
                                            <input type='date' id='' className='form-input date-input' onChange={(e) => { detailChange(e, 'selStartDay') }} /> :
                                            <input type='date' id='' className='form-input date-input'
                                                defaultValue={communityList.partyStartDate}
                                                onChange={(e) => { detailChange(e, 'selStartDay') }} />

                                    }
                                    {
                                        !communityList ?
                                            <input type='date' id='' className='form-input date-input' onChange={(e) => { detailChange(e, 'selEndDay') }} /> :
                                            <input type='date' id='' className='form-input date-input'
                                                defaultValue={communityList.partyEndDate}
                                                onChange={(e) => { detailChange(e, 'selEndDay') }} />

                                    }
                                    <label htmlFor='end-date-check' className='end-date-label'>
                                        <input type='checkbox' id='end-date-check' className='form-checkbox' />
                                        종료일
                                    </label>
                                </div>

                                <div className='mt-2'>
                                    {
                                        !communityList ?
                                            <input type='time' id='' className='form-input date-input' onChange={(e) => { detailChange(e, 'selStartTime') }} /> :
                                            <input type='time' id='' className='form-input date-input'
                                                defaultValue={communityList.partyStartTime}
                                                onChange={(e) => { detailChange(e, 'selStartTime') }} />
                                    }

                                    {
                                        !communityList ?
                                            <input type='time' id='' className='form-input date-input' onChange={(e) => { detailChange(e, 'selEndTime') }} /> :
                                            <input type='time' id='' className='form-input date-input'
                                                defaultValue={communityList.partyEndTime}
                                                onChange={(e) => { detailChange(e, 'selEndTime') }} />
                                    }

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
                            {
                                !communityList ?
                                    <input type='text' id='venue' className='form-input' placeholder='장소를 입력하세요'
                                        onChange={(e) => { detailChange(e, 'selLocation') }} /> :
                                    <input type='text' id='venue' className='form-input'
                                        onChange={(e) => { detailChange(e, 'selLocation') }}
                                        defaultValue={communityList.partyLocation} />
                            }
                        </div>

                        <div className='info-section'>
                            <label htmlFor='entry-fee' className='form-label'>
                                참가비
                            </label>
                            <div className='entry-fee-container'>
                                {
                                    !communityList ?
                                        <input className='form-input fee-input' placeholder='0'
                                            value={detailFormat.selEntryFee}
                                            onChange={(e) => { detailChange(e, 'selEntryFee') }} /> :
                                        <input className='form-input fee-input'
                                            onChange={(e) => { detailChange(e, 'selEntryFee') }}
                                            value={detailFormat.selEntryFee}
                                            defaultValue={communityList.partyEntryFee} />
                                }
                                <span className='currency-text'>원</span>
                            </div>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='content' className='form-label'>내용</label>
                        {
                            !communityList ?
                                <textarea id='content' className='form-textarea' placeholder='내용을 입력하세요'
                                    onChange={(e) => { detailChange(e, 'selContent') }}></textarea> :

                                <textarea id='content' className='form-textarea' placeholder='내용을 입력하세요'
                                    defaultValue={communityList.content}
                                    onChange={(e) => { detailChange(e, 'selContent') }}></textarea>
                        }
                    </div>

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

export default COM2200;
