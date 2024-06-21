import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "http://localhost:3000/api/";
const getToken = () => localStorage.getItem("authToken");
export const authServiceApi = createApi({
  reducerPath: "authServiceApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { endpoint }) => {
      const token = getToken();

      if (token && endpoint !== "login" && endpoint !== "register") {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    register: builder.mutation({
      query: (userInfo) => ({
        url: "auth/register",
        method: "POST",
        body: userInfo,
      }),
    }),

    register_university: builder.mutation({
      query: (universityInfo) => ({
        url: "register",
        method: "POST",
        body: universityInfo,
      }),
    }),

    getUserProfile: builder.query({
      query: () => "profile",
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authServiceApi;
