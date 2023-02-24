import axios from "axios";
import Cookie from "js-cookie";

// 객체 만들기
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  withCredentials: true, // 서로 다른 도메인 요청일 때도 credential 데이터를 담아보내겠다 + 쿠키 데이터 담아서 보내겠다.
});

// myinfo 에서 data 가져오기
export const getUserInfo = () =>
  instance.get("users/myinfo").then((response) => response.data);

// 로그인
// export const login = ({ username, password }) => {
//   instance.post(
//     "users/login",
//     { username, password },
//     {
//       headers: {
//         "X-CSRFToken": Cookie.get("csrftoken") || "",
//       },
//     }
//   );
// };

// // 가입
// export const signup = ({ username, password, email }) => {
//   instance
//     .post(
//       "users/signup",
//       { username, password, email },
//       {
//         headers: {
//           "X-CSRFToken": Cookie.get("csrftoken") || "",
//         },
//       }
//     )
//     .then((response) => response.data);
// };

// // 로그아웃
// export const logout = () => {
//   instance
//     .post("users/logout", "", {
//       headers: {
//         "X-CSRFToken": Cookie.get("csrftoken") || "",
//       },
//     })
//     .then((response) => response.data);
// };

// // 전체 피드
export const getAllFeeds = () =>
  instance.get(`feeds/`).then((response) => response.data);

// // 유저 프로필 피드
// // /users/:username

// // export async function getAllFeeds() {
// //     const res = await fetch(`${BASE_URL}/feeds`)
// //     const json = await res.json();
// //     return json;
// // }

// // export async function getAllFeeds = () => {
// //     const res = await instance.get(`feeds`)
// //     return res.data;
// // };

// // 유저 프로필 화면
// export const getUserProfileFeeds = () => {};
