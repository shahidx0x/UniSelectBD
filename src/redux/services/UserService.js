import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../BaseQuery";

export const userServiceApi = createApi({
  reducerPath: "userServiceApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => ({ url: `users/${id}` }),
      providesTags: ["users"],
    }),
    updateUserInfo: builder.mutation({
      query: ({ id, payload }) => ({
        url: `users/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useGetUserByIdQuery,useUpdateUserInfoMutation } = userServiceApi;
