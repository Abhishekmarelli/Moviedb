import { useSearchParams } from 'react-router-dom'
import { MovieCard } from '../components/MovieCard'
import {useFetch} from '../hooks/useFetch'

export const Search = ({req_api}) => {
  const[searchparam] =useSearchParams();
  const queryTerm =searchparam.get('q');
  const{data:movies} = useFetch(req_api,queryTerm)

  return (
    <main>
      <div>
        <p className='text-2xl font-bold p-7 dark:text-white'>{movies.length===0 ? 'No Results Found.....' : `Results for : ${queryTerm}` }</p>
      </div>
    <section className='max-w-7xl mx-auto py-7'>
      <div className=' flex  justify-start flex-wrap'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  </main>
  )
}
