import Header from '../../components/header'
import { Form } from 'react-bootstrap';
import '../../assets/styles/style.css'
import '../../assets/styles/home.css'

function HOM1010() {
    return (
        <div>
            <Header></Header>

            <section className='Container'>
                <div class="input-group homInput">
                    <span class="input-group-text">
                        <img src={require('../../assets/img/search.svg').default}></img>
                    </span>
                    <input type="text" class="form-control" placeholder="내 주변 클라이밍장 찾기" aria-label="Input group example" />
                </div>

                <div className='search-filter'>
                    <div className='filter-option'>
                        <span className='option-loc'>현재 내 주변에서 찾기</span>
                        <span className='option-map'>지도로 찾기</span>
                    </div>

                    <hr className='divider' />

                    <div className='mt-3'>
                        <div className='mt-3'>
                            <h4>최근 검색</h4>
                            <ul className='search-list'>
                                <li><button className='btn-option'>강남역</button></li>
                                <li><button className='btn-option'>강남역</button></li>
                                <li><button className='btn-option'>강남역</button></li>
                            </ul>
                        </div>

                        <div className='mt-4'>
                            <h4>지역으로 찾기</h4>
                            <ul className='search-list'>
                                <li><button className='btn-option'>강남역</button></li>
                                <li><button className='btn-option'>강남역</button></li>
                                <li><button className='btn-option'>강남역</button></li>
                            </ul>
                        </div>

                        <div className='mt-4'>
                            <h4>역 주변으로 찾기</h4>
                            <ul className='search-list'>
                                <li><button className='btn-option'>강남역</button></li>
                                <li><button className='btn-option'>강남역</button></li>
                                <li><button className='btn-option'>강남역</button></li>
                            </ul>
                        </div>

                        <div class="search-actions mt-4">
                            <Form.Select aria-label="Default select example">
                                <option>1호선</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>

                            <Form.Select aria-label="Default select example">
                                <option>소요산역</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>

                            <button>검색</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HOM1010;
