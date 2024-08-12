import Header from '../../components/header'
import Footer from '../../components/footer';
import { Card, Col, Row } from 'react-bootstrap';
import '../../assets/styles/style.css'
import '../../assets/styles/home.css'
import * as util from '../../util';
import { useState, useEffect } from 'react';

function HOM1000() {
    const navigation = util.useNavigation();
    const requestApi = util.useApi();

    const [recentGymList, setRecentGymList] = useState([]);             //최근 본 클라이밍장
    const [newOpenGymList, setNewOpenGymList] = useState([]);           //새로오픈 클라이밍장
    const [locationGymList, setLocationGymList] = useState([]);         //내 주변 클라이밍장
    const [communityList, setCommunityList] = useState([]);             //커뮤니티 원본
    const [communityListFilter, setCommunityListFilter] = useState([]); //커뮤니티 필터링
    const [communityCategory, setCommunityCategory] = useState("0");    //커뮤니티 구분 =>  0:전체 1:자유 2:파티

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
                url: "http://192.168.5.220:9091/api/climbing/main/",
                params: {
                    userId: '4'
                },
                callback(res) {
                    setRecentGymList(res.data.recentGymList);
                    setNewOpenGymList(res.data.newOpenGymList);
                    setLocationGymList(res.data.locationGymList);
                    setCommunityList(res.data.communityList);
                    setCommunityListFilter(res.data.communityList);

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
    },[communityCategory, setCommunityCategory])

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
                                <div className="card mb-3" key={idx} onClick={()=>{navigation.pageOpen("/SRC_1100")}}>
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
                                <div className="card mb-3" key={idx} onClick={()=>{navigation.pageOpen("/SRC_1100")}}>
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
                        <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDAxMjVfMjk3%2FMDAxNzA2MTE0NTU4MjA4.9Dzsia52FCyhFrVVZ5_yLSjapvV49PIu8Q7v1u_741kg.a5ICI6jMP-QL9miGyTUGjF4qhts13ZetfycsSd-QbPsg.JPEG%2F20240115_152119.jpg.jpg%3Ftype%3Dw1500_60_sharpen" 
                        alt="클라이밍 정보" className="img-fluid"></img>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default HOM1000;
