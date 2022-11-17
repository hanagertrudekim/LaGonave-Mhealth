import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_PATH } from '../../constant';

console.log(API_PATH)

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_PATH}`,
  }), 
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: {username: string; password: string}) => {
        return ({
          url: '/api/auth/login',
          method: 'POST',
          body
        })
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
