import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_SERVER_URL;

// 사용자 정의 구성을 사용하는 axios 인스턴스 생성
export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 토큰을 담아 통신하는 axios 인스턴스 생성
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 추가
axiosPrivate.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('token'));

    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);
