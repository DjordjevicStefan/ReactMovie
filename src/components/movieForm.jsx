import React, { Component } from 'react';
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovies , getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    
    data: { title: "", genre : "", numberInStock : "", dailyRentalRate : "" },
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    genre: Joi.string()
      .label("Genre"),
    numberInStock: Joi.number().integer().min(1).max(100)
      .required()
      .label("Number in stock"),
      dailyRentalRate:  Joi.number().integer().min(1).max(10)
    .required()
    .label("Rate"),
  };

  componentDidMount(){
   let movieId = this.props.match.params.id ;
   if (movieId  === "new") { return ; }

   let movie = getMovie(movieId) ;
   ///// ako sa ovom funkcijom ne dobijemo 1 film ovim ispod kodom vracamo osobu na home page. ukoliko se vrati movie objekat sa tim id u zagradi ce biti false pa se nece "krenuti" kod sa desne strane.
   if (!movie) { return this.props.history.replace("/") } ;
   

   //// posto funkcija save movie u data base prima tacno odredjene propertije i zato sto se sema za validaciju nece poklopiti za porpertijem iz data ovde dole moramo da tacno setujemo state sa objektom koji ima iste prop kao i state objekat.
   this.setState({data : this.objForState(movie)})

  }

  objForState = (movie) => {
    return {
      title: movie.title,
      genre : movie.genre.name,
      numberInStock : movie.numberInStock,
      dailyRentalRate : movie.dailyRentalRate 
    }

  }

  doSubmit = () => {
      console.log("zabelezeno");
       
      saveMovie(this.state.data);
 
      this.props.history.replace("/");

  }

  render() { 
    return (
      <React.Fragment>
        <h1>Movie form</h1>
        <form onSubmit={this.handleSubmit}>
        {this.renderInput("title" , "Title")}
        
        {this.renderSelectInput("genre" , "Genre", "Action" , "Triller" , "Comedy" )}

        {this.renderInput("numberInStock" , "Number In Stock", "number")}

        {this.renderInput("dailyRentalRate" , "Rate", "number")}

        {this.renderBtn("Save movie")}
        </form>
        
      </React.Fragment>
    );
  }
}
 
export default MovieForm;