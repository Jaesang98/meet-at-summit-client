import Header from '../../components/header'
import Footer from '../../components/footer';
import '../../assets/styles/style.css'
import '../../assets/styles/com.css'
import * as util from '../../util';
import { useState, useEffect } from 'react';

function COM1000() {
    const navigation = util.useNavigation();
    const requestApi = util.useApi();

    //게시글 리스트
    const [originCommuList, setOriginCommuList] = useState([]);         // 게시글 리스트 원본
    const [communityList, setCommunityList] = useState([]);             // 자유게시판 리스트
    const [partyList, setPartyList] = useState([]);                     // 파티게시판 리스트

    // 검색 필터링
    const [searchCondition, setSearchCondition] = useState("제목");      // 검색구분값
    const [searchValue, setSearchValue] = useState("");                 // 검색내용
    const [communityCategory, setCommunityCategory] = useState("1");    // 탭 구분값
    const [detailCategoryList, setDetailCategoryList] = useState([]);   // 카테고리 리스트
    const [detailCategory, setDetailCategory] = useState("ALL");        // 카테고리 키값
    const [offset, setOffset] = useState(0);                            // 페이지 번호
    const [totalPage, setTotalPage] = useState(0);                      // 페이지 총 개수
    const [limit, setLimit] = useState(10);                             // 한 페이지 최대 목록 수
    const [pages, setPages] = useState([]);                             // 페이지 버튼 배열
    const [currentPageRange, setCurrentPageRange] = useState({ start: 0, end: 10 }); // 현재 페이지 범위


    //선택한 카테고리 리스트
    function categoryControl(detailCategory) {
        //전체를 선택한 경우
        // if (categoryFk === "ALL") {
        //     pushCategory = ["ALL"]
        //     setDetailCategory([categoryFk]);
        // }
        // else {
        //     //전체 외 다른 카테고리 체크시 전체 체크 풀림
        //     if (pushCategory.includes("ALL")) {
        //         pushCategory = pushCategory.filter(e => e !== "ALL");
        //     }

        //     //체크했던 카테고리 한번 더 체크 시 체크풀림
        //     if (pushCategory.includes(categoryFk)) {
        //         pushCategory = pushCategory.filter(e => e !== categoryFk);

        //         //아무것도 체크 안했을 경우 전체체크
        //         if (pushCategory.length === 0) {
        //             setDetailCategory(["ALL"]);
        //         }
        //         else {
        //             pushCategory = [...new Set(pushCategory)];
        //             setDetailCategory(pushCategory);
        //         }
        //     }
        //     else {
        //         pushCategory.push(categoryFk);
        //         pushCategory = [...new Set(pushCategory)];

        //         //전부다 체크 될 경우 전체체크
        //         if (pushCategory.length === category.length - 1) {
        //             setDetailCategory(["ALL"]);
        //         } 
        //         else {
        //             setDetailCategory(pushCategory);
        //         }
        //     }
        // }

        //선택한 카테고리에 따라 리스트 필터
        if (communityCategory == "1") {
            if (detailCategory == "ALL") {
                setCommunityList(originCommuList);
            }
            else {
                const filteredData = originCommuList.filter(item => [detailCategory].includes(item.detailCategory.toString()));
                setCommunityList(filteredData);
            }
        }
        else {
            if (detailCategory == "ALL") {
                setPartyList(originCommuList);
            }
            else {
                const filteredData = originCommuList.filter(item => [detailCategory].includes(item.detailCategory.toString()));
                setPartyList(filteredData);
            }
        }
        setDetailCategory(detailCategory);
    }

    // 카테고리 가져오기
    const communityCategoryList = async () => {
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "get",
                url: "http://192.168.5.220:9091/api/climbing/community/detailcategory/",
                params: {
                    communityCategory: communityCategory,
                },
                callback(res) {
                    // 카테고리에 전체 추가
                    const detailCategoryListUpdate = res.data.detailCategoryList.slice();
                    detailCategoryListUpdate.unshift({
                        "detailCategory": "ALL",
                        "detailNm": "전체"
                    });
                    setDetailCategoryList(detailCategoryListUpdate);
                }
            });
        } catch (err) {
            console.error('Error during API request:', err);
        }
    };

    // 게시글 정보 가져오기
    const communityInfo = async () => {
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "get",
                url: "http://192.168.5.220:9091/api/climbing/community/",
                params: {
                    searchCondition: searchCondition,
                    searchValue: searchValue,
                    detailCategory: detailCategory,
                    communityCategory: communityCategory,
                    offset: offset * limit,
                    limit: limit,
                },
                callback(res) {
                    //원본, 자유게시판, 파티모집
                    setOriginCommuList(res.data.communityList);
                    setCommunityList(res.data.communityList.filter(item => item.communityCategory === "1"));
                    setPartyList(res.data.communityList.filter(item => item.communityCategory === "2"));

                    //페이지 번호 
                    const totalCnt = Number(res.data.totalCnt);         //리스트 총 개수
                    const totalPages = Math.ceil(totalCnt / limit);     //페이지 개수
                    setTotalPage(totalPages);
                    setPages(Array.from({ length: totalPages }, (_, idx) => idx));
                }
            });
        } catch (err) {
            console.error('Error during API request:', err);
        }
    };

    //서버정보 호출 => 탭 이동, 카테고리 선택, 페이지네이션 이동, 
    useEffect(() => {
        communityInfo();
    }, [communityCategory, detailCategory, offset]);

    //카테고리 호출
    useEffect(() => {
        communityCategoryList();
    }, [communityCategory]);

    // 페이지 범위 업데이트
    useEffect(() => {
        const newStart = Math.floor(offset / 10) * 10;
        const newEnd = Math.min(newStart + 10, totalPage);
        setCurrentPageRange({ start: newStart, end: newEnd });
    }, [offset, totalPage]);

    return (
        <div>
            <Header />

            <section className='Container'>
                <div className='com-head'>
                    <h3 className='commu-log'>커뮤니티</h3>
                    <div className="input-group">
                        <select className="form-select me-4" onChange={(event) => { setSearchCondition(event.target.value) }}>
                            <option value="제목">제목</option>
                            <option value="작성자">작성자</option>
                        </select>
                        <span className="input-group-text">
                            <img src={require('../../assets/img/search.svg').default} alt="Search" />
                        </span>
                        <input type="text" className="form-control" placeholder="제목, 작성자로 검색" onChange={(event) => { setSearchValue(event.target.value) }} />
                        <button className="com-button" onClick={communityInfo}>검색</button>
                    </div>
                </div>

                <ul className="com-main">
                    <li className={`com-tab-item ${communityCategory === "1" ? "com-active" : ""}`} onClick={() => { setCommunityCategory("1"); setDetailCategory("ALL") }}>자유 게시판</li>
                    <li className={`com-tab-item ${communityCategory === "2" ? "com-active" : ""}`} onClick={() => { setCommunityCategory("2"); setDetailCategory("ALL") }}>파티 모집</li>
                </ul>

                <div className="hom-wrapper">
                    <ul className="hom-tabs-box">
                        {
                            detailCategoryList.map((item, idx) => (
                                <li className="hom-tab" key={idx}>
                                    <input type="checkbox" className="checkbox" id={`category-${idx}`}
                                        checked={detailCategory.includes(item.detailCategory)}
                                        onChange={() => { categoryControl(item.detailCategory) }} />
                                    <label className="hom-tab-label" htmlFor={`category-${idx}`}>{item.detailNm}</label>
                                </li>
                            ))
                        }
                    </ul>
                    {
                        communityCategory == "1" ?
                            <button className='com-button' onClick={() => { navigation.pageOpen('/COM_1300') }}>새 글 등록</button> :
                            <button className='com-button' onClick={() => { navigation.pageOpen('/COM_1400') }}>파티 모집</button>
                    }
                </div>

                <ul className="list-group list-group-flush">
                    {/* {자유게시판} */}
                    {
                        communityCategory === "1" && communityList.length > 0 ?
                            communityList.map((item, idx) => (
                                <li className="list-group-item d-flex justify-content-between align-items-center" key={idx}
                                    onClick={() => { navigation.pageOpen('/COM_1100', { postId: item.postId }) }}>
                                    <div className="list-item-left">
                                        <span className="list-item-category">[{item.detailNm}]</span>
                                        <span className="list-item-title">{item.title}</span>
                                    </div>
                                    <div className="list-item-right">
                                        <span className="list-item-comments">{item.commentCnt}</span>
                                        <span className="list-item-author">작성자: {item.author}</span>
                                        <span className="clim-comuDt">{item.createDate.formattedDate("YYYY.MM.DD")}</span>
                                    </div>
                                </li>
                            ))
                            : ""
                    }

                    {/* {자유게시판} */}

                    {/* {파티모집} */}
                    {
                        communityCategory === "2" && partyList.length > 0 ?
                            partyList.map((item, idx) => (
                                <li className="list-group-item d-flex justify-content-between align-items-center" key={idx}
                                    onClick={() => { navigation.pageOpen('/COM_1200', { postId: item.postId }) }}>
                                    <div className="list-item-left">
                                        <span className={item.detailCategory == "1" ? "list-item-recruiting" : "list-item-completed"}>[{item.detailNm}]</span>
                                        <span className="list-item-title">{item.title}</span>
                                    </div>
                                    <div className="list-item-right">
                                        <span className="list-item-partycomments">참여<span className="party-number">{item.commentCnt}</span></span>
                                        <span className="list-item-author">작성자: {item.author}</span>
                                        <span className="clim-comuDt">{item.createDate.formattedDate("YYYY.MM.DD")}</span>
                                    </div>
                                </li>
                            ))
                            : ""
                    }
                    <div className='nodata' style={{ display: 'none' }}>데이터가 없습니다</div>
                    {/* {파티모집} */}
                </ul>

                <div className="pagination">
                    <a
                        className="pagination-link"
                        onClick={(e) => {
                            e.preventDefault();
                            if (currentPageRange.start > 0) {
                                const newStart = Math.max(currentPageRange.start - 10, 0);
                                const newEnd = Math.min(newStart + 10, totalPage);
                                setCurrentPageRange({ start: newStart, end: newEnd });
                                setOffset(newStart);
                            }
                        }}
                    >
                        &laquo; 이전
                    </a>
                    {pages.slice(currentPageRange.start, currentPageRange.end).map((page) => (
                        <a
                            key={page}
                            className={`pagination-link ${offset == page ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setOffset(page);
                            }}
                        >
                            {page + 1}
                        </a>
                    ))}
                    <a
                        className="pagination-link"
                        onClick={(e) => {
                            e.preventDefault();
                            if (currentPageRange.end < totalPage) {
                                const newStart = Math.min(currentPageRange.start + 10, totalPage - 1);
                                const newEnd = Math.min(newStart + 10, totalPage);
                                setCurrentPageRange({ start: newStart, end: newEnd });
                                setOffset(newStart);
                            }
                        }}
                    >
                        다음 &raquo;
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default COM1000;