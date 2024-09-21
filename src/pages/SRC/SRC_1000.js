import Header from '../../components/header'
import Footer from '../../components/footer';
import { Card, Col, Row } from 'react-bootstrap';
import '../../assets/styles/style.css';
import '../../assets/styles/src.css';

function SRC1000() {
    return (
        <div>
            <Header></Header>

            <section className='Container'>
                <div className="input-group homInput">
                    <span className="input-group-text" id="basic-addon1">
                        <img src={require('../../assets/img/search.svg').default}></img>
                    </span>
                    <input type="text" className="form-control" placeholder="내 주변 클라이밍장 찾기" aria-label="Input group example" aria-describedby="basic-addon1" />
                </div>

                <div className="wrapper">
                    <ul className="tabs-box">
                        <li className="tab active">새로 오픈</li>
                        <li className="tab">이벤트</li>
                        <li className="tab">이용권</li>
                        <li className="tab">예약가능</li>
                    </ul>

                    <div className='filter-option'>
                        <span className='option-map'>지도로 찾기</span>
                    </div>
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
                    <Row xs={1} md={4} className="g-4 cardGroup">
                        {Array.from({ length: 6 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card>
                                    <Card.Img variant="top" src={require('../../assets/img/recentcliming.jpg')} className='src-cardImg' />
                                    <Card.Body>
                                        <Card.Title>더클라임 클라이밍 짐앤샵 양재점</Card.Title>
                                        <Card.Text>
                                            <span className='src-open'>새로오픈</span>
                                        </Card.Text>
                                        <Card.Text className='cardTextSrc'>
                                            <img src={require('../../assets/img/star.svg').default}></img>
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

            <Footer></Footer>
        </div>
    );
}

export default SRC1000;
