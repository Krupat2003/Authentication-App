import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const authService = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api/'
    }),

    // backend API hiat (send req backend using endpointe)
    endpoints: (builder) => {
        return {
            authLogin: builder.mutation({           //update or add
                query: (LoginData) => {
                    return {
                        url: 'login',
                        method: 'POST',
                        body: LoginData
                    }
                }
            }),

               // register
            authRegister: builder.mutation({
                query: (RegisterData) => {
                    return {
                        // 'http://localhost:8000/api/register'
                        url: 'register',
                        method: 'POST',
                        body: RegisterData
                    }
                }
            })
            // end 

        }
    }
});

export const { useAuthLoginMutation, useAuthRegisterMutation } = authService;

export default authService;