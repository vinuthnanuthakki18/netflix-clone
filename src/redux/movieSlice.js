import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=YOUR_TMDB_API_KEY";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get(API_URL);
  return response.data.results;
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default movieSlice.reducer;