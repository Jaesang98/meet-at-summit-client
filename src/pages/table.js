import React from 'react';
import Routers from '../router';
import { Link } from 'react-router-dom';

function DataTable() {
    const data = [
        // component
        { screenName: '로그인 팝업', screenId: 'login', date: '2024-08-06', link: '/login' },
        { screenName: '헤더', screenId: 'header', date: '2024-08-06', link: '/header' },
        { screenName: '푸터', screenId: 'footer', date: '2024-08-06', link: '/footer' },

        // 로그인
        { screenName: '로그인-약관동의', screenId: 'LOG_2010', date: '2024-08-06', link: '/LOG_2010' },
        { screenName: '로그인-가입정보 입력', screenId: 'LOG_2020', date: '2024-08-06', link: '/LOG_2020' },
        { screenName: '로그인-가입완료', screenId: 'LOG_2030', date: '2024-08-06', link: '/LOG_2030' },

        // 홈
        { screenName: '홈', screenId: 'HOM_1000', date: '2024-08-06', link: '/HOM_1000' },
        { screenName: '홈 검색', screenId: 'HOM_1010', date: '2024-08-06', link: '/HOM_1010' },

        // 커뮤니티
        { screenName: '커뮤니티', screenId: 'COM_1000', date: '2024-08-06', link: '/COM_1000' },
        { screenName: '커뮤니티-자유게시판 (상세)', screenId: 'COM_1100', date: '2024-08-06', link: '/COM_1100' },
        { screenName: '커뮤니티-파티모집 (상세)', screenId: 'COM_2100', date: '2024-08-06', link: '/COM_2100' },
        { screenName: '커뮤니티-새글등록', screenId: 'COM_1200', date: '2024-08-06', link: '/COM_1200' },
        { screenName: '커뮤니티-파티모집', screenId: 'COM_2200', date: '2024-08-06', link: '/COM_2200' },

        // 클라이밍장 찾기
        { screenName: '클라이밍장 찾기', screenId: 'SRC_1000', date: '2024-08-06', link: '/SRC_1000' },
        { screenName: '클라이밍장 찾기 상세', screenId: 'SRC_1100', date: '2024-08-06', link: '/SRC_1100' },
        { screenName: '클라이밍장 찾기(지도)', screenId: 'SRC_2000', date: '2024-08-06', link: '/SRC_2000' },

        // 마이페이지
        { screenName: '마이페이지', screenId: 'MYP_1000', date: '2024-08-06', link: '/MYP_1000' },
        { screenName: '마이페이지 - 예약내역상세', screenId: 'MYP_1100', date: '2024-08-06', link: '/MYP_1100' },
        { screenName: '마이페이지 - 내정보수정', screenId: 'MYP_1200', date: '2024-08-06', link: '/MYP_1200' },
    ];

    return (
        <div className="container mt-5">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>화면명</th>
                        <th>화면 아이디</th>
                        <th>날짜</th>
                        <th>링크</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.screenName}</td>
                            <td>{item.screenId}</td>
                            <td>{item.date}</td>
                            <td>
                                <Link to={item.link}>
                                    페이지로 이동
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
