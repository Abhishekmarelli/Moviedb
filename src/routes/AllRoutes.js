import { Routes, Route } from "react-router-dom";
import { MovieDetail, MovieList, Search, PageNotFound } from "../pages";


export const AllRoutes = () => {


  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route path="/" element={<MovieList req_api="movie/now_playing" />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/movies/popular" element={<MovieList req_api="movie/popular" />} />
        <Route path="/movies/top" element={<MovieList req_api="movie/top_rated" />} />
        <Route path="/movies/upcoming" element={<MovieList req_api="movie/upcoming" />} />
        <Route path="/search" element={<Search req_api="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}
