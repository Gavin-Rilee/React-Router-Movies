import React from 'react';
import {useHistory} from "react-router-dom";





export default function MovieList(props) {

const {movieList} = props
  

  let history = useHistory();



function handleClick(){
  history.push(`/Movie/${movieList.id}`)
}



  return (
    <div className="movie-list">
      {movieList.map(movie => (
        <MovieDetails  key={movie.id} movie={movie} onClick={handleClick} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  let history = useHistory();


function handleClick(){
  history.push(`/Movie/${props.movie.id}`)
}




  return (
    <div className="movie-card" onClick={handleClick}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
