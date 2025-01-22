import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

// Fetch popular movies
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Failed to fetch movies");
  }
});

// Fetch movies by search query
export const fetchMoviesBySearch = createAsyncThunk("movies/fetchMoviesBySearch", async (query, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Failed to fetch movies");
  }
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMoviesBySearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMoviesBySearch.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMoviesBySearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default movieSlice.reducer;
