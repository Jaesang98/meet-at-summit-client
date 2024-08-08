import { useState, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

// 서버통신
export function useApi() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const NetWork = useCallback(async ({
        getYn = false,
        method = 'get',
        url,
        body = {},
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
                    data: body
                });

                // getYn이 true이고 첫 번째 요청이 성공적이면 GET 요청 수행
                if (getYn && response.data) {
                    response = await axios.get(url);
                }
            } else {
                // method가 'get'인 경우
                response = await axios.get(url, { params: body });
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

//nice 본인인증
export function useNiceAuth() {
    const clientId = 'skawotkd12@naver.com'; // 네이버 개발자 센터에서 발급받은 Client ID
    const redirectURI = encodeURIComponent('http://localhost:3000/auth/callback'); // 인증 후 리디렉션할 URL
    const state = 'YOUR_RANDOM_STATE'; // CSRF 보호를 위한 랜덤 문자열

    const openNIDPopup = useCallback(() => {
        const authUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectURI}&state=${state}`;
        const width = 450;
        const height = 600;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);

        window.open(authUrl, 'NIDAuthPopup', `width=${width},height=${height},top=${top},left=${left}`);
    }, [clientId, redirectURI, state]);

    return { openNIDPopup };
}