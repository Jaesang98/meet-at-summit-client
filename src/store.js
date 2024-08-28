import { configureStore, createSlice } from '@reduxjs/toolkit';

// userSlice 정의
const userInfo = createSlice({
    name: 'userInfo', // 슬라이스의 이름
    initialState: {
        userId: '',  // 초기 상태
        name: '',
        kakaoToken: '',
        naverToken: '',
    },
    reducers: {
        setUserInfo: (state, action) => {
            state.userId = action.payload.userId; // 상태 업데이트
            state.name = action.payload.name;
            state.kakaoToken = action.payload.kakaoToken;
            state.naverToken = action.payload.naverToken
        },
        clearUserInfo: (state) => {
            state.userId = '';  // 상태 초기화
            state.name = '';
            state.kakaoToken = '';
            state.naverToken = '';
        }
    }
});

// 액션 생성자와 리듀서 추출
export const { setUserInfo, clearUserInfo } = userInfo.actions;

// 스토어 설정
const store = configureStore({
    reducer: {
        userInfo: userInfo.reducer // 리듀서 등록
    }
});

export default store;
