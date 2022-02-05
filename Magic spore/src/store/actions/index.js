// import EuropeWest from "../../API's/EuropeWest";

// export const login = (values) => {
//   return async (dispatch) => {
//     dispatch({
//       type: "LoginErrors",
//       payload: null,
//     });
//     try {
//       const response = await EuropeWest.post("/admin/login", {
//         ...values,
//       });
//       console.log(response);
//       let data = response.data;
//       if (data.success) {
//         dispatch({
//           type: "isLogin",
//           payload: true,
//         });
//         // getting data
//         dispatch({
//           type: "LoginResponse",
//           payload: data,
//         });
//       }
//       return data;
//     } catch (error) {
//       let data = error.response.data;
//       // getting errors
//       dispatch({
//         type: "LoginErrors",
//         payload: data,
//       });
//       return data;
//     }
//   };
// };
export const SetWallet = (values) => {
  return async (dispatch) => {
    dispatch({
      type: "wallet",
      payload: values,
    });
  };
};
export const signOut = () => {
  return {
    type: "isLogin",
    payload: false,
  };
};
