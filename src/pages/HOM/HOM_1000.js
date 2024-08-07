import Header from '../../components/header'
import Footer from '../../components/footer';
import { Card, Col, Row } from 'react-bootstrap';
import '../../assets/styles/style.css'
import '../../assets/styles/home.css'

function HOM1000() {
    return (
        <div>
            <Header></Header>

            <section className='Container'>
                <div class="input-group homInput">
                    <span class="input-group-text" id="basic-addon1">
                        <img src={require('../../assets/img/search.svg').default}></img>
                    </span>
                    <input type="text" class="form-control" placeholder="내 주변 클라이밍장 찾기" aria-label="Input group example" aria-describedby="basic-addon1" />
                </div>

                <div className='mt-4'>
                    <h3>최근 본 클라이밍장</h3>
                    <Row xs={1} md={3} className="g-4 cardGroup">
                        {/* {cardData.map((card, idx) => ( */}
                        {Array.from({ length: 3 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card>
                                    <Card.Img variant="top" src={require('../../assets/img/recentcliming.jpg')} />
                                    <Card.Body>
                                        <Card.Title>더클라임 클라이밍 짐앤샵 양재점</Card.Title>
                                        <Card.Text>
                                            <span>새로오픈</span>
                                            <span> 이벤트</span>
                                        </Card.Text>
                                        <Card.Text>
                                            <img src={require('../../assets/img/star.svg').default}></img>
                                            <span className='cardGrade'>
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


                <div className='climing-list'>
                    <div className='clim-open'>
                        <h3>새로 오픈했어요!</h3>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
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

                        <ul className="nav nav-tabs" id="categoryTabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="category1-tab" data-bs-toggle="tab" data-bs-target="#category1" type="button" role="tab" aria-controls="category1" aria-selected="true">카테고리 1</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="category2-tab" data-bs-toggle="tab" data-bs-target="#category2" type="button" role="tab" aria-controls="category2" aria-selected="false">카테고리 2</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="category3-tab" data-bs-toggle="tab" data-bs-target="#category3" type="button" role="tab" aria-controls="category3" aria-selected="false">카테고리 3</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="categoryTabsContent">
                            <div className="tab-pane fade show active" id="category1" role="tabpanel" aria-labelledby="category1-tab">
                            </div>
                            <div className="tab-pane fade" id="category2" role="tabpanel" aria-labelledby="category2-tab">
                            </div>
                            <div className="tab-pane fade" id="category3" role="tabpanel" aria-labelledby="category3-tab">
                            </div>
                        </div>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                첫 번째 글
                                <span className='clim-comuDt'>2024.06.23</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                두 번째 글
                                <span className='clim-comuDt'>2024.06.23</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                세 번째 글
                                <span className='clim-comuDt'>2024.06.23</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                네 번째 글
                                <span className='clim-comuDt'>2024.06.23</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                다섯 번째 글
                                <span className='clim-comuDt'>2024.06.23</span>
                            </li>
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
