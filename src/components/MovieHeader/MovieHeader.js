import './MovieHeader.scss';
import { timeConvert } from "../../helpers/utils";

function MovieHeader({ movieDetails }) {

  const movieRuntime = timeConvert(movieDetails.runtime);

  return (
    <div className='movie-header'>
          <h1>{movieDetails.original_title}</h1>
          <div className='movie-header__details'>
              <p>{movieDetails.release_date ? movieDetails.release_date.slice(0, 4) : 'not available'}</p>
              <p className='movie-header__runtime'>{movieRuntime}</p>
          </div>
    </div>
  )
}

export default MovieHeader