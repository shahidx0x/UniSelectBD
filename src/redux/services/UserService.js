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
  }),
});

export const { useGetUserByIdQuery } = userServiceApi;
