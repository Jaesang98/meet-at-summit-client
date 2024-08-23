import Header from '../../components/header'
import Footer from '../../components/footer';
import { Card, Col, Row } from 'react-bootstrap';
import '../../assets/styles/style.css';
import '../../assets/styles/src.css';
import * as util from '../../util';
import { useState, useEffect } from 'react';

function SRC1000() {
    const navigation = util.useNavigation();
    const requestApi = util.useApi();
    const { selectedLine, selStation, climSearchVal } = util.useLocationParams();  //지하철 역 정보
    const [gymList, setGymList] = useState([]);                     //클라이밍장 리스트

    //클라이밍장 검색결과
    const climSearch = async () => {
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "get",
                url: "/api/climbing/search/",
                params: {
                    searchValue: "3gym"
                },
                callback(res) {
                    setGymList(res.data.gymList);
                }
            });
        } catch (err) {
            console.error('Error during API request:', err);
        }
    };

    //서버정보 호출
    useEffect(() => {
        climSearch();
    }, []);

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
                        <li className="tab">이용권</li>
                        <li className="tab">예약가능</li>
                    </ul>

                    <div className='filter-option'>
                        <span className='option-map' onClick={()=> {navigation.pageOpen('/SRC_2000')}}>지도로 찾기</span>
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
                        {gymList.map((item, idx) => (
                            <Col key={idx} onClick={()=> {navigation.pageOpen("/SRC_1100")}}>
                                <Card>
                                    <Card.Img variant="top" src={item.imgUrl} className='src-cardImg'/>
                                    <Card.Body>
                                        <Card.Title>{item.gymName}</Card.Title>
                                        <Card.Text>
                                            {
                                                item.newOpenYn == "Y" ? <span className='src-open'>새로오픈</span> : ""
                                            }
                                        </Card.Text>
                                        <Card.Text className='cardTextSrc'>
                                            <img src={require('../../assets/img/star.svg').default}></img>
                                            <span className="cardGrade">
                                                <strong>{item.rating}</strong>
                                                <span> ({item.ratingTotalCnt})</span>
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
