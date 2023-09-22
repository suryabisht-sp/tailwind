import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  values: {
    isAuth: false,
    userName: "",
    userId: "",
    isModerator: false,
  }
}

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    login: (state, action) => {
       return {
        values: {
          isAuth: true,
          userName: action.payload,
          userId: action.payload,
          isModerator: false
       }
      }
    }
}
})


export const { login, logout } = auth.actions;
export default auth.reducer;