import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeader = {
  "X-RapidAPI-Key": "100f56563emsh99169c2af194d78p1564c0jsna51711719604",
  "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
};

const baseUrl = "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk";

const createRequest = (url) => ({ url, headers: cryptoNewsHeader });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});
