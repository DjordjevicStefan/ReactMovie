import React from 'react';

const MovieForm = (props) => {
  return ( 
    <div>
    <h1>Single movie page</h1>
    <p>film sa id {props.match.params.id}</p>
    <button className="btn btn-primary" onClick={() => props.history.replace("/")}>
        save
    </button>
    </div>
   );
}

export default MovieForm ;
