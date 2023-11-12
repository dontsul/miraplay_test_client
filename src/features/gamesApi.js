import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const URL = "https://api.miraplay.cloud/games/by_page";

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  tagTypes: ["Games"],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getGamesList: build.query({
      query: (body) => ({
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetGamesMutation, useGetGamesListQuery } = gamesApi;
