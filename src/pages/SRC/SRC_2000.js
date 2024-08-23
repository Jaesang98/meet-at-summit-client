/* global naver */
import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import { Card, Col, Row, Offcanvas } from 'react-bootstrap';
import '../../assets/styles/style.css';
import '../../assets/styles/src.css';
import * as util from '../../util';
import styled from 'styled-components';

function SRC2000() {
    const navigation = util.useNavigation();
    const requestApi = util.useApi();

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [climbingGyms, setClimbingGyms] = useState([]);

    useEffect(() => {
        const initMap = () => {
            if (window.naver && window.naver.maps) {
                const mapOption = {
                    center: new naver.maps.LatLng(
                        location.latitude || 37.5139, // 기본 좌표: 학동역
                        location.longitude || 127.0201
                    ),
                    zoom: 17,
                    minZoom: 15,
                    maxZoom: 30,
                    tileDuration: 300,
                    baseTileOpacity: 1,
                    background: 'white',
                    tileSpare: 7,
                };

                const map = new naver.maps.Map('map', mapOption);

                // 마커 추가
                climbingGyms.forEach((position) => {
                    const mapx = parseFloat(position.mapx) / 1e7;
                    const mapy = parseFloat(position.mapy) / 1e7;
                    const marker = new naver.maps.Marker({
                        position: new naver.maps.LatLng(mapy, mapx),
                        map: map,
                        title: position.title
                    });

                    // InfoWindow의 HTML 내용
                    const infoWindowContent = `
                        <div class="card" style="width: 18rem;">
                            <img id="infoWindowImage_${position.title.replace(/\s+/g, '')}" style="width: 100%; height: auto; max-width: 300px;" src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220814_2%2F1660464965154yEvzV_JPEG%2FKakaoTalk_20220814_170616533.jpg" class="card-img-top" alt="Climbing Gym"/>
                            <div class="card-body">
                                <h5 class="card-title">${position.title}</h5>
                                <p class="card-text">
                                    <span>새로오픈</span>
                                    <span> 이벤트</span>
                                </p>
                                <p class="card-text">
                                    <span>★</span>
                                    <strong>4.5</strong>
                                    <span>(1,071)</span>
                                </p>
                            </div>
                        </div>`;

                    const infoWindow = new naver.maps.InfoWindow({
                        content: infoWindowContent,
                        disableAutoPan: false
                    });

                    //마커 클릭 이벤트
                    naver.maps.Event.addListener(marker, 'click', () => {
                        infoWindow.open(map, marker);

                        setTimeout(() => {
                            const image = document.getElementById(`infoWindowImage_${position.title.replace(/\s+/g, '')}`);
                            if (image) {
                                image.addEventListener('click', () => {
                                    navigation.pageOpen("/SRC_1100")
                                });
                            }
                        }, 100);
                    });
                })
            }
        };

        if (window.naver) {
            initMap();
        } else {
            const script = document.createElement('script');
            script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_MAP_CLIENT_KEY}`;
            script.onload = initMap;
            document.head.appendChild(script);
        }
    }, [location, climbingGyms]); // location이 변경될 때마다 실행

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (err) => {
                    console.log(err.message);
                }
            );
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    }, []);

    return (
        <div>
            <Header></Header>
            <SideInfo show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} climbingGyms={climbingGyms} setClimbingGyms={setClimbingGyms} location={location}></SideInfo>
            <NaverMap id="map" />
        </div>
    );
}

// 네이버맵
const NaverMap = styled.div`
  height: 100vh;
`;

// 사이드 지도정보
function SideInfo({ show, setShow, handleClose, handleShow, climbingGyms, setClimbingGyms, location }) {
    const navigation = util.useNavigation();
    const requestApi = util.useApi();
    const [searchValue, setSearchValue] = useState();

    // 네이버 검색 결과 가져오기
    const naverSearch = async () => {
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "get",
                url: "https://openapi.map.naver.com/v1/search/local.json",
                params: {
                    query: searchValue + "클라이밍",
                    display: 5,
                    coordinate: `${location.latitude},${location.longitude}`,
                    radius: 3000,
                },
                headers: {
                    'X-Naver-Client-Id': process.env.REACT_APP_NAVER_CLIENT_ID2,
                    'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_CLIENT_SECRET2
                },
                callback(res) {
                    setClimbingGyms(res.items)

                }
            });
        } catch (err) {
            console.error('Error during API request:', err);
        }
    };

    // useEffect(() => {
    //     naverSearch();
    // }, []);

    const activeEnter = (e) => {
        naverSearch();
    }

    return (
        <>
            <button
                onClick={show ? handleClose : handleShow}
                className={`mapSideControl ${show ? 'open' : 'closed'}`}
            ></button>

            <Offcanvas show={show} onHide={handleClose} backdrop={false} className="mapSideBar" style={{ width: '600px' }}>
                <Offcanvas.Header>
                    <Offcanvas.Title style={{ color: "#5200DF", fontWeight: "700" }}>정상에서 만나요</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="offcanvas-body">
                    <section className='Container'>
                        <div className="input-group homInput">
                            <span className="input-group-text" id="basic-addon1" onClick={(e) => { activeEnter(e) }}>
                                <img src={require('../../assets/img/search.svg').default} alt="Search Icon"></img>
                            </span>
                            <input type="text" className="form-control" placeholder="역 이름을 적어주세요"
                                onChange={(e) => { setSearchValue(e.target.value) }} />
                        </div>

                        <div className="wrapper">
                            <ul className="tabs-box">
                                <li className="tab active">새로 오픈</li>
                                <li className="tab">이벤트</li>
                                <li className="tab">이용권</li>
                                <li className="tab">예약가능</li>
                            </ul>
                        </div>

                        <div className="dropdown_header">
                            <span className="item-count">17</span><strong>건</strong>
                            <div className="dropdown">
                                <select className="custom-select">
                                    <option>추천순</option>
                                    <option>날짜순</option>
                                    <option>기타</option>
                                </select>
                            </div>
                        </div>

                        <div>

                            <Row xs={1} md={1} className="g-4 cardGroup">
                                {climbingGyms.map((gym, idx) => (
                                    <Col key={idx}>
                                        <Card>
                                            <Card.Img variant="top" src={require('../../assets/img/recentcliming.jpg')} className='cardimg' />
                                            <Card.Body>
                                                <Card.Title>{gym.title}</Card.Title>
                                                <Card.Text>
                                                    <span>새로오픈</span>
                                                    <span> 이벤트</span>
                                                </Card.Text>
                                                <Card.Text>
                                                    <img src={require('../../assets/img/star.svg').default} alt="Star Rating"></img>
                                                    <span className="cardGrade">
                                                        <strong>4.5</strong>
                                                        <span>(1,071)</span>
                                                    </span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </section>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SRC2000;
