import { useState, useCallback } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

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
            navigate(-1);
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

// 파라미터 추출 유틸리티 함수
export function useLocationParams() {
    const location = useLocation();
    return location.state || {};
}

// 서버통신
export function useApi() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const NetWork = useCallback(async ({
        getYn = false,
        method = 'get',
        url,
        params = {},
        callback
    }) => {
        setLoading(true);
        setError(null);

        try {
            let response;

            // 첫 번째 요청 (POST, PUT, DELETE, 또는 GET)
            if (method !== 'get') {
                response = await axios({
                    method,
                    url,
                    data: params
                });

                // getYn이 true이고 첫 번째 요청이 성공적이면 GET 요청 수행
                if (getYn && response.data) {
                    response = await axios.get(url);
                }
            } else {
                // method가 'get'인 경우
                response = await axios.get(url, { params: params });
            }

            // 콜백 함수 호출
            if (callback && typeof callback === 'function') {
                callback(response.data);
            }

            return response.data;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        loading,
        error,
        NetWork
    };
}

// 날짜변환
String.prototype.formattedDate = function(formatString = 'YYYY-MM-DD') {
    // 입력된 문자열에서 숫자만 추출
    const numericDate = this.replace(/\D/g, '');
    let dateFormat;

    switch(numericDate.length) {
        case 8: // YYYYMMDD
            dateFormat = 'YYYYMMDD';
            break;
        case 12: // YYYYMMDDHHMM
            dateFormat = 'YYYYMMDDHHmm';
            break;
        case 14: // YYYYMMDDHHMMSS
            dateFormat = 'YYYYMMDDHHmmss';
            break;
        default:
            // 다른 형식의 경우 자동 파싱 시도
            return moment(this).format(formatString);
    }

    // 지정된 형식으로 파싱 및 포맷
    const parsedDate = moment(numericDate, dateFormat);
    
    if (!parsedDate.isValid()) {
        console.error('Invalid date format');
        return 'Invalid Date';
    }

    return parsedDate.format(formatString);
};

//세자리 수 마다 컴마 넣기
export function addComma(value) {
    console.log(value)
    value = value.replace(/,/g, '');
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//컴마 제거
export function removeComma(value) {
    return value.replace(/,/g, '');
}