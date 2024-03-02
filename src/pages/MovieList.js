import React from 'react'
import { MovieCard } from '../components/MovieCard'
import { useFetch } from '../hooks/useFetch'

export const MovieList = ({ req_api }) => {

  const { data: movies } = useFetch(req_api)

  return (
    <main>
      <section className='max-w-7xl mx-auto py-10'>
        <div className=' flex justify-around flex-wrap'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
