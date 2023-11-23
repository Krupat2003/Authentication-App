import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
const adminStorage = localStorage.getItem('admin-token');

function verifyToken(){
    if(adminStorage){
        const decodeToken = jwtDecode(adminStorage);
        const expiresIn = new Date(decodeToken.exp * 1000);
        if(new Date() > expiresIn){
            localStorage.removeItem('admin-token');
            return null;
        }else{
            return adminStorage;
        }
    }else{
        return null;
    }
}

const authReducer = createSlice({
    name: 'authReducer',
    initialState: {               //state
        adminToken: verifyToken()
    },
    reducers:{
        setAdminToken: (state, action) => {
         state.adminToken = action.payload;   
        },
        logout: (state) => {
            localStorage.removeItem('admin-token')  //remove token
            state.adminToken = null;
        }
    }
})

export const {setAdminToken, logout} = authReducer.actions;

export default authReducer.reducer;


