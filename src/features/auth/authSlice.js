import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn : false,
  isError : false,
}

export const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // 로그인 처리에 필요한 함수
    setIsLoggedIn(state, action){
      console.log(`action :: `, action.payload.result_rows);
      if(action.payload.result_rows){ // 1 일때 
        state.isLoggedIn = true;
      }else{
        state.isError = true;
      }
    },
    setIsLogout(state){
      state.isLoggedIn = false;
    },
    setLoginReset(state){
      state.isError = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setIsLoggedIn, setIsLogout, setLoginReset } = authSlice.actions

export default authSlice.reducer