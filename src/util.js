import { useNavigate } from 'react-router-dom';

//페이지 이동
export function useNavigation() {
    const navigate = useNavigate();

    return {
        //화면열기
        pageOpen: (path, params) => {
            navigate(path, { state: params });
        },

        //화면닫기
        pageClose: () => { 
            navigate(-1) ;
        },

        //화면교체
        pageReplace: (path, params) => {
            navigate(path, { replace: true, state: params });
        },

        //홈으로 이동
        pageHome: () => {
            navigate('/');
        },
    };
}

// 다른 유틸리티 함수들
export function formatDate(date) {

}