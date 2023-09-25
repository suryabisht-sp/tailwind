import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  values: {
    isAuth: false,
    userName: "",
    userId: "",
     token:""
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
          token: action.payload.token
       }
      }
    },
    signup: (state, action) => {
       return {
        values: {
          token: action.payload.token,          
    }
  }
    },
       loggedUser: (state, action) => {
     return {
          values: {
          userName: action.payload,
       }
      }
    },
}
})


export const { login, logout,signup,loggedUser } = auth.actions;
export default auth.reducer;