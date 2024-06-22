import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3000/api/";

const getToken = () => localStorage.getItem("token");

export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { endpoint }) => {
    const token = getToken();

    if (token && endpoint !== "login" && endpoint !== "register") {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
