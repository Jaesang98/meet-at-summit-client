import Header from '../../components/header'
import { Card, Col, Row, Offcanvas } from 'react-bootstrap';
import '../../assets/styles/style.css';
import '../../assets/styles/src.css';
import { useState } from 'react';

function SRC2000() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Header></Header>

            <button
                onClick={show ? handleClose : handleShow}
                className={`mapSideControl ${show ? 'open' : 'closed'}`}
            ></button>

            <Offcanvas show={show} onHide={handleClose} backdrop={false} className="mapSideBar" style={{width : '600px'}}>
                <Offcanvas.Header>
                    <Offcanvas.Title style={{color : "#5200DF", fontWeight : "700"}}>정상에서 만나요</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="offcanvas-body">
                    <section className='Container'>
                        <div className="input-group homInput">
                            <span className="input-group-text" id="basic-addon1">
                                <img src={require('../../assets/img/search.svg').default}></img>
                            </span>
                            <input type="text" className="form-control" placeholder="지역, 키워드, 클라이밍장 이름으로 찾기" aria-label="Input group example" aria-describedby="basic-addon1" />
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
                                {Array.from({ length: 6 }).map((_, idx) => (
                                    <Col key={idx}>
                                        <Card>
                                            <Card.Img variant="top" src={require('../../assets/img/recentcliming.jpg')} className='cardimg'/>
                                            <Card.Body>
                                                <Card.Title>더클라임 클라이밍 짐앤샵 양재점</Card.Title>
                                                <Card.Text>
                                                    <span>새로오픈</span>
                                                    <span> 이벤트</span>
                                                </Card.Text>
                                                <Card.Text>
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
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default SRC2000;
