import './MovieHeader.scss';

function MovieHeader({ movieDetailsRequest }) {

    function time_convert(num) {
        var hours = Math.floor(num / 60);
        var minutes = num % 60;
        return hours + "h" + " " + minutes + "m";
    }

    const movieRuntime = time_convert(movieDetailsRequest.runtime);

  return (
    <div className='movie-header'>
          <h1>{movieDetailsRequest.original_title}</h1>
          <div className='movie-header__details'>
              <p>{movieDetailsRequest.release_date.slice(0, 4)}</p>
              <p className='movie-header__runtime'>{movieRuntime}</p>
          </div>
    </div>
  )
}

export default MovieHeader