import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../BaseQuery";

export const adminServiceApi = createApi({
  reducerPath: "adminServiceApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (params) => ({ url: "users", params: { ...params } }),
      providesTags: ["users"],
    }),

    getRegisterUniversity: builder.query({
      query: (params) => ({
        url: "register/university",
        params: { ...params },
      }),
      providesTags: ["register-university"],
    }),

    deleteRegisterdUniversity: builder.mutation({
      query: ({ id }) => ({
        url: `register/university/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["register-university"],
    }),

    updateUserRole: builder.mutation({
      query: ({ id, payload }) => ({
        url: `users/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["users"],
    }),

    updateUniversityRegistrationStatus: builder.mutation({
      query: ({ id, payload }) => ({
        url: `register/university/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["register-university"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserRoleMutation,
  useGetRegisterUniversityQuery,
  useDeleteRegisterdUniversityMutation,
  useUpdateUniversityRegistrationStatusMutation,
} = adminServiceApi;
