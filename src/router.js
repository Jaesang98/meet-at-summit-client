import { Route, Routes } from 'react-router-dom';

// 각 화면 컴포넌트를 screenId 기반으로 임포트합니다
import HEADER from './components/header'; // 헤더
import FOOTER from './components/footer'; // 푸터
import LOGIN from './components/login'; // 로그인 팝업
import HOM_1000 from './pages/HOM/HOM_1000'; // 홈
import HOM_1010 from './pages/HOM/HOM_1010'; // 홈 검색
import LOG_2010 from './pages/LOG/LOG_2010'; // 로그인-약관동의
import LOG_2020 from './pages/LOG/LOG_2020'; // 로그인-가입정보 입력
import LOG_2030 from './pages/LOG/LOG_2030'; // 로그인-가입완료
import COM_1000 from './pages/COM/COM_1000'; // 커뮤니티
import COM_1100 from './pages/COM/COM_1100'; // 커뮤니티-자유게시판 (상세)
import COM_1200 from './pages/COM/COM_1200'; // 커뮤니티-파티모집 (상세)
import COM_1300 from './pages/COM/COM_1300'; // 커뮤니티-새글등록
import COM_1400 from './pages/COM/COM_1400'; // 커뮤니티-파티모집
import SRC_1000 from './pages/SRC/SRC_1000'; // 클라이밍장 찾기
import SRC_1100 from './pages/SRC/SRC_1100'; // 클라이밍장 찾기 상세
import SRC_2000 from './pages/SRC/SRC_2000'; // 클라이밍장 찾기(지도)
import MYP_1000 from './pages/MYP/MYP_1000'; // 마이페이지
import MYP_1100 from './pages/MYP/MYP_1100'; // 마이페이지 - 예약내역상세
import MYP_1200 from './pages/MYP/MYP_1200'; // 마이페이지 - 내정보수정

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HOM_1000 />} />
      <Route path="/LOGIN" element={<LOGIN />} />
      <Route path="/HEADER" element={<HEADER />} />
      <Route path="/FOOTER" element={<FOOTER />} />
      {/* <Route path="/HOM_1000" element={<HOM_1000 />} /> */}
      <Route path="/HOM_1010" element={<HOM_1010 />} />
      <Route path="/LOG_2010" element={<LOG_2010 />} />
      <Route path="/LOG_2020" element={<LOG_2020 />} />
      <Route path="/LOG_2030" element={<LOG_2030 />} />
      <Route path="/COM_1000" element={<COM_1000 />} />
      <Route path="/COM_1100" element={<COM_1100 />} />
      <Route path="/COM_1200" element={<COM_1200 />} />
      <Route path="/COM_1300" element={<COM_1300 />} />
      <Route path="/COM_1400" element={<COM_1400 />} />
      <Route path="/SRC_1000" element={<SRC_1000 />} />
      <Route path="/SRC_1100" element={<SRC_1100 />} />
      <Route path="/SRC_2000" element={<SRC_2000 />} />
      <Route path="/MYP_1000" element={<MYP_1000 />} />
      <Route path="/MYP_1100" element={<MYP_1100 />} />
      <Route path="/MYP_1200" element={<MYP_1200 />} />
    </Routes>
  );
};

export default Router;
