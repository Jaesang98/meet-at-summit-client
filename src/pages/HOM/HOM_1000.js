import Header from '../../components/header'
import Footer from '../../components/footer';
import { Card, Col, Row } from 'react-bootstrap';
import '../../assets/styles/style.css'
import '../../assets/styles/home.css'
import * as util from '../../util';
import { useState, useEffect } from 'react';
import { setUserInfo } from '../../store';
import { useDispatch } from 'react-redux';

function HOM1000() {
    const navigation = util.useNavigation();
    const requestApi = util.useApi();

    const [recentGymList, setRecentGymList] = useState([]);             //최근 본 클라이밍장
    const [newOpenGymList, setNewOpenGymList] = useState([]);           //새로오픈 클라이밍장
    const [locationGymList, setLocationGymList] = useState([]);         //내 주변 클라이밍장
    const [communityList, setCommunityList] = useState([]);             //커뮤니티 원본
    const [communityListFilter, setCommunityListFilter] = useState([]); //커뮤니티 필터링
    const [communityCategory, setCommunityCategory] = useState("0");    //커뮤니티 구분 =>  0:전체 1:자유 2:파티
    const [mainImage, setMainImage] = useState("");                     //클라이밍장 정보 이미지

    const code = new URL(window.location.href).searchParams.get("code");
    const state = new URL(window.location.href).searchParams.get("state");
    const dispatch = useDispatch();

    //카카오 토큰
    const KakaoAccessToken = async (code) => {
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "get",
                url: "/api/climbing/auth/kakaotoken",
                params: {
                    code: code
                },
                callback(res) {
                    kakaoUserInfo(res.access_token);
                }
            });
        } catch (err) {
            console.error('Error during API request:', err);
        }

        // try {
        //     await requestApi.NetWork({
        //         getYn: false,
        //         method: "POST",
        //         url: "https://kauth.kakao.com/oauth/token",
        //         params: {
        //             grant_type: 'authorization_code',
        //             client_id: '83190cb35a9f7a2d08b27d403091e18b',
        //             redirect_uri: 'http://localhost:3000/meet_at_summit',
        //             code: code
        //         },
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded'
        //         },
        //         callback(res) {
        //             console.log(res)
        //             dispatch(setUserInfo({ userId: '1206', name: '남재상', kakaoToken: res.access_token }));
        //         }
        //     });
        // } catch (err) {
        //     console.error('Error during API request:', err);
        // }
    };

    //카카오 유저정보
    const kakaoUserInfo = async (token) => {
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "POST",
                url: "https://kapi.kakao.com/v2/user/me",
                params: {},
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                callback(res) {
                    console.log(res)
                }
            });
        } catch (err) {
            console.error('Error during API request:', err);
        }
    };

    //네이버 토큰
    const NaverAcessToken = async (code, state) => {
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "get",
                url: "/api/climbing/auth/navertoken",
                params: {
                    code: code,
                    state: state,
                },
                callback(res) {
                    NaverUserInfo(res.access_token)
                    console.log(res.access_token)
                }
            });
        } catch (err) {
            console.error('Error during API request:', err);
        }


        // try {
        //     await requestApi.NetWork({
        //         getYn: false,
        //         method: "POST",
        //         url: "https://nid.naver.com/oauth2.0/token",
        //         params: {
        //             grant_type: 'authorization_code',
        //             client_id: 'Y_6oPTvx2tHAMxOesxq0',
        //             client_secret: '3kv77Fxi4b',
        //             code: code,
        //             state: '0ucbn7uz94y',
        //         },
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded'
        //         },
        //         callback(res) {
        //             dispatch(setUserInfo({ userId: '1206', name: '남재상', naverToken: res.access_token }));
        //         }
        //     });
        // } catch (err) {
        //     console.error('Error during API request:', err);
        // }
    };

    const NaverUserInfo = async (token) => {
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "get",
                url: "/api/climbing/auth/naverinfo",
                params: {
                    token : token
                },
                callback(res) {
                    console.log(res)
                }
            });
        } catch (err) {
            console.error('Error during API request:', err);
        }


        // try {
        //     await requestApi.NetWork({
        //         getYn: false,
        //         method: "get",
        //         url: "https://openapi.naver.com/v1/nid/me",
        //         params: {},
        //         headers: {
        //             "Authorization": `Bearer ${token}`
        //         },
        //         callback(res) {
        //             console.log(res)
        //         }
        //     });
        // } catch (err) {
        //     console.error('Error during API request:', err);
        // }
    };

    useEffect(() => {
        if (code && state) {
            NaverAcessToken(code, state);
        }
        else{
            KakaoAccessToken(code);
        }
    }, [code, state]);

    //카테고리 구분
    const categoryChange = (category => {
        setCommunityCategory(category);
    })

    //클라이밍장 정보 가져오기
    const climInfo = async () => {
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "get",
                url: "/api/climbing/main/",
                params: {
                    userId: '1206'
                },
                callback(res) {
                    setRecentGymList(res.data.recentGymList);
                    setNewOpenGymList(res.data.newOpenGymList);
                    setLocationGymList(res.data.locationGymList);
                    setCommunityList(res.data.communityList);
                    setCommunityListFilter(res.data.communityList);
                    setMainImage(res.data.mainImage);

                }
            });
        } catch (err) {
            console.error('Error during API request:', err);
        }
    };

    //서버정보 호출
    useEffect(() => {
        climInfo();
    }, []);

    //카테고리 변경 시 필터링 
    useEffect(() => {
        if (communityCategory == "0") {
            setCommunityListFilter(communityList);
        }
        else {
            const filtered = communityList.filter(
                item => item.communityCategory == communityCategory
            );
            setCommunityListFilter(filtered);
        }
    }, [communityCategory, setCommunityCategory])

    return (
        <div>
            <Header></Header>
            <section className='Container'>
                <div className="input-group homInput" onClick={() => { navigation.pageOpen('/HOM_1010') }}>
                    <span className="input-group-text" id="basic-addon1">
                        <img src={require('../../assets/img/search.svg').default}></img>
                    </span>
                    <input type="text" className="form-control" placeholder="내 주변 클라이밍장 찾기" aria-label="Input group example" aria-describedby="basic-addon1" />
                </div>

                <div className='mt-4'>
                    <h3 className='cardTitle'>최근 본 클라이밍장</h3>
                    <Row xs={0} md={3} className="g-4 cardGroup">
                        {recentGymList.map((card, idx) => (
                            <Col key={idx}>
                                <Card style={{ height: '650px' }} onClick={() => { navigation.pageOpen('/SRC_1100') }}>
                                    <Card.Img variant="top" src={card.imgUrl} className='cardImg' />
                                    <Card.Body>
                                        <Card.Title>{card.gymName}</Card.Title>
                                        <Card.Text className='mt-3'>
                                            {card.newOpenYn == "Y" ? <span className='hom-open'>새로오픈</span> : null}
                                            {card.has_event == "Y" ? <span className='hom-event'> 이벤트</span> : null}
                                        </Card.Text>
                                        <Card.Text className='cardText'>
                                            <img src={require('../../assets/img/star.svg').default}></img>
                                            <span className='cardGrade'>
                                                <strong>{card.rating}</strong>
                                                <span> ({card.ratingTotalCnt})</span>
                                            </span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>


                <div className='climing-list'>
                    <div className='clim-open'>
                        <h3>새로 오픈했어요!</h3>

                        {
                            newOpenGymList.map((item, idx) => (
                                <div className="card mb-3" key={idx} onClick={() => { navigation.pageOpen("/SRC_1100") }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={item.imgUrl} className="img-fluid rounded-start clim-img" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.gymName}</h5>
                                                <p className="card-text">{item.content}</p>
                                                <p className="card-text">
                                                    <small className="text-body-secondary">
                                                        <img src={require('../../assets/img/star.svg').default} alt="star" />
                                                        <span className='cardGrade'>
                                                            <strong>{item.rating}</strong>
                                                            <span> ({item.ratingTotalCnt} )</span>
                                                        </span>
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className='clim-closest'>
                        <h3>내 주변 클라이밍장</h3>

                        {
                            locationGymList.map((item, idx) => (
                                <div className="card mb-3" key={idx} onClick={() => { navigation.pageOpen("/SRC_1100") }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={item.imgUrl} className="img-fluid rounded-start clim-img" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.gymName}</h5>
                                                <p className="card-text">{item.content}</p>
                                                <p className="card-text">
                                                    <small className="text-body-secondary">
                                                        <img src={require('../../assets/img/star.svg').default}></img>
                                                        <span className='cardGrade'>
                                                            <strong>{item.rating}</strong>
                                                            <span> ({item.ratingTotalCnt} )</span>
                                                        </span>
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='clim-bottom my-4'>
                    <div className="container clim-commu">
                        <h4>커뮤니티</h4>

                        <ul className="nav nav-tabs">
                            <li className="nav-item" role="presentation">
                                <button className={`nav-link ${communityCategory == "0" ? "active" : ""}`} onClick={() => { categoryChange("0") }}>전체</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className={`nav-link ${communityCategory == "1" ? "active" : ""}`} onClick={() => { categoryChange("1") }}>자유게시판</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className={`nav-link ${communityCategory == "2" ? "active" : ""}`} onClick={() => { categoryChange("2") }}>파티게시판</button>
                            </li>
                        </ul>

                        <ul className="list-group list-group-flush hom-list">
                            {
                                communityListFilter.map((item, idx) => (
                                    <li className="list-group-item d-flex justify-content-between align-items-center" key={idx}>
                                        <span>{item.title}</span>
                                        <span className='clim-comuDt'>{item.createDate.formattedDate("YYYY-MM-DD")}</span>
                                    </li>
                                ))
                            }

                            <div className='nodata' style={{ display: 'none' }}>게시물이 없습니다</div>
                        </ul>
                    </div>
                    <div className='clim-info'>
                        <h4>클라이밍장 정보</h4>
                        <img src={mainImage}
                            alt="클라이밍 정보" className="img-fluid"></img>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default HOM1000;
