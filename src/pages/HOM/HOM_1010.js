import Header from '../../components/header'
import { Form } from 'react-bootstrap';
import '../../assets/styles/style.css'
import '../../assets/styles/home.css'
import * as util from '../../util';
import { useState, useEffect } from 'react';

function HOM1010() {
    const navigation = util.useNavigation();
    const requestApi = util.useApi();

    const [climSearchVal, setClimSearchVal] = useState(''); 
    const [lines, setLines] = useState([]);     
    const [selectedLine, setSelectedLine] = useState('');
    const [stations, setStations] = useState([]);
    const [filteredStations, setFilteredStations] = useState([]);
    const [selStation, setSelStation] = useState('');


    //지하철 노선 및 역 정보
    const getSubwayLineInfo = async () => {
        const KEY = "754745534f736b613735785a587a71"
        const TYPE = "json"
        const SERVICE = "SearchSTNBySubwayLineInfo"
        const START_INDEX = 1
        const END_INDEX = 1000
        try {
            await requestApi.NetWork({
                getYn: false,
                method: "get",
                url: `http://openapi.seoul.go.kr:8088/${KEY}/${TYPE}/${SERVICE}/${START_INDEX}/${END_INDEX}`,
                params: {},
                callback(res) {
                    const data = res.SearchSTNBySubwayLineInfo.row;
                    const lineSet = new Set(data.map(station => station.LINE_NUM));
                    const lineArray = Array.from(lineSet);
                    setLines(lineArray);
                    setStations(data);
                }
            });
        } catch (err) {
            console.error('Error during API request:', err);
        }
    };

    // 선택한 호선에 따른 역 필터링
    useEffect(() => {
        if (selectedLine) {
            const filtered = stations.filter(station => station.LINE_NUM === selectedLine);
            setFilteredStations(filtered);
        } else {
            setFilteredStations([]);
        }
    }, [selectedLine, stations]);

    // 서버정보 호출
    useEffect(() => {
        getSubwayLineInfo();
    }, []);

    return (
        <div>
            <Header></Header>

            <section className='Container'>
                <div className="input-group homInput">
                    <span className="input-group-text">
                        <img src={require('../../assets/img/search.svg').default}></img>
                    </span>
                    <input type="text" className="form-control" placeholder="내 주변 클라이밍장 찾기" onChange={(e)=> {setClimSearchVal(e.target.value)}}/>
                </div>

                <div className='search-filter'>
                    <div className='hom-filter-option'>
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

                        <div className="search-actions mt-4">
                            <Form.Select aria-label="Select subway line" onChange={(e) => setSelectedLine(e.target.value)}>
                                <option value="">호선 선택</option>
                                {lines.map((line, idx) => (
                                    <option key={idx} value={line} >{line}</option>
                                ))}
                            </Form.Select>

                            <Form.Select aria-label="Select station" onChange={(e) => setSelStation(e.target.value)}>
                                <option value="">역 선택</option>
                                {filteredStations.map((station) => (
                                    <option key={station.STATION_CD} value={station.STATION_CD}>
                                        {station.STATION_NM}
                                    </option>
                                ))}
                            </Form.Select>

                            <button onClick={() => {
                                navigation.pageOpen('/SRC_1000', {
                                    "selectedLine": selectedLine,
                                    "selStation": selStation,
                                    "climSearchVal" : climSearchVal
                                })
                            }}>검색</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HOM1010;
