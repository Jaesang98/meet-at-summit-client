import Header from '../../components/header'
import Footer from '../../components/footer';
import { Card, Col, Row } from 'react-bootstrap';
import '../../assets/styles/style.css'
import '../../assets/styles/home.css'
import { useNavigation, useApi } from '../../util';
import { useState, useEffect } from 'react';

function HOM1000() {
    const navigation = useNavigation();
    const requestApi = useApi();

    //최근 본 클라이밍장
    const [recentGymList, setRecentGymList] = useState([]);
    const recentClimInfo = async () => {
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "get",
                url: "http://192.168.5.220:9091/api/climbing/main/",
                body: {
                    userId : '4'
                },
                callback(res) {
                    setRecentGymList(res.data.recentGymList);
                    
                }
            });
        } catch (err) {
            console.error('Error during API request:', err);
        }
    };

    const [cardData, setCardData] = useState([
        {
            "title": "Magic Garden",
            "image_url": "https://picsum.photos/400/500",
            "is_open": "Y",
            "has_event": "N",
            "rating": 4.8,
            "favorites_count": 1200
        },
        {
            "title": "Space Exploration",
            "image_url": "https://picsum.photos/seed/picsum/400/500",
            "is_open": "N",
            "has_event": "Y",
            "rating": 4.3,
            "favorites_count": 850
        },
        {
            "title": "Pirate's Treasure",
            "image_url": "https://picsum.photos/id/237/400/500",
            "is_open": "Y",
            "has_event": "Y",
            "rating": 4.6,
            "favorites_count": 1025
        }
    ]);

    useEffect(() => {
        recentClimInfo();
    }, []);

    return (
        <div>
            <Header></Header>

            <section className='Container'>
                <div className="input-group homInput" onClick={()=> {navigation.pageOpen('/HOM_1010')}}>
                    <span className="input-group-text" id="basic-addon1">
                        <img src={require('../../assets/img/search.svg').default}></img>
                    </span>
                    <input type="text" className="form-control" placeholder="내 주변 클라이밍장 찾기" aria-label="Input group example" aria-describedby="basic-addon1" />
                </div>

                <div className='mt-4'>
                    <h3>최근 본 클라이밍장</h3>
                    <Row xs={0} md={3} className="g-4 cardGroup">
                        {recentGymList.map((card, idx) => (
                            <Col key={idx}>
                                <Card onClick={() => { navigation.pageOpen('/SRC_1100') }}>
                                    <Card.Img variant="top" src={card.image_url} />
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
                                                <span> ({card.favorites_count})</span>
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
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4" onClick={()=> {recentClimInfo()}}>
                                    <img src={require('../../assets/img/recentcliming.jpg')} className="img-fluid rounded-start clim-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">더클라임 클라이밍 짐앤샵 양재점</h5>
                                        <p className="card-text">This is a wider card with supportr.</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                <img src={require('../../assets/img/star.svg').default}></img>
                                                <span className='cardGrade'>
                                                    <strong>4.5</strong>
                                                    <span>(1,071)</span>
                                                </span>
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={require('../../assets/img/recentcliming.jpg')} className="img-fluid rounded-start clim-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">더클라임 클라이밍 짐앤샵 양재점</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                <img src={require('../../assets/img/star.svg').default}></img>
                                                <span className='cardGrade'>
                                                    <strong>4.5</strong>
                                                    <span>(1,071)</span>
                                                </span>
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='clim-closest'>
                        <h3>내 주변 클라이밍장</h3>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={require('../../assets/img/recentcliming.jpg')} className="img-fluid rounded-start clim-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">더클라임 클라이밍 짐앤샵 양재점</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                <img src={require('../../assets/img/star.svg').default}></img>
                                                <span className='cardGrade'>
                                                    <strong>4.5</strong>
                                                    <span>(1,071)</span>
                                                </span>
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={require('../../assets/img/recentcliming.jpg')} className="img-fluid rounded-start clim-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">더클라임 클라이밍 짐앤샵 양재점</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                <img src={require('../../assets/img/star.svg').default}></img>
                                                <span className='cardGrade'>
                                                    <strong>4.5</strong>
                                                    <span>(1,071)</span>
                                                </span>
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='clim-bottom my-4'>
                    <div className="container clim-commu">
                        <h4>커뮤니티</h4>

                        <ul className="nav nav-tabs">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" type="button">전체</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" type="button">자유 게시판</button>
                            </li>
                            <li className="nav-item" role="presentation">
                            <button className="nav-link" type="button">파티 모집</button>
                            </li>
                        </ul>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span>첫 번째 글</span>
                                <span className='clim-comuDt'>2024.06.23</span>
                            </li>
                            <div className='nodata' style={{display: 'none'}}>게시물이 없습니다</div>
                        </ul>
                    </div>
                    <div className='clim-info'>
                        <h4>클라이밍장 정보</h4>
                        <img src={require('../../assets/img/recentcliming.jpg')} alt="클라이밍 정보" className="img-fluid"></img>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default HOM1000;
