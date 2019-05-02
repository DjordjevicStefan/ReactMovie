import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

// import Like from "./common/like";

import Pagination from "./common/pagination";

// import NavBar from "./common/navbar"

import { paginate } from "../utilities/paginate";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";

import _ from "lodash" ;
import {Link} from "react-router-dom"

// import {Route, Switch, Redirect } from "react-router-dom" ;


class Vidly extends Component {
  state = {
    movies: [],
    genre: [],
    pageSize: 4,
    curentPage: 1,
    sortColumn : {path : "title" , order : "asc"}
  };

  ///// ovde ide ajax request za potrebnu datu ka serveru !!
  componentDidMount() {
    const genre = [{ name: "all films" , _id : "" }, ...getGenres()];

    this.setState({ movies: getMovies(), genre: genre });
  }

  // testLog = () => {
  //   console.log(this.newArrey());
  // }

  // newArrey = () => {
  //   let newMovies = [...this.state.movies] ;
  //   return newMovies ;
  // }
  
  getPagedData = () => {
    const { pageSize, curentPage, movies, genre, selGenre, sortColumn } = this.state;

    const filteredMovies =
    selGenre && selGenre._id
      ? movies.filter(m => m.genre.name === selGenre.name)
      : movies;
    /////////// lodash funcija za sortiranje , prvo prima arej pa posle string po kome da sw sortiraa na kraju da li padajuci niz ili rastujuci /////  
    const sorted = _.orderBy(filteredMovies, sortColumn.path , sortColumn.order )  

  const newMoviesArrey = paginate(sorted, curentPage, pageSize);

  return {totalCount : filteredMovies.length , data : newMoviesArrey } ;

  }
 

  checkArrey = () => {
    return this.state.movies.length === 0 ? (this.show.display = "none") : "";
  };

  // renderTd = newMoviesArrey => {
  //   return newMoviesArrey.map((x, index) => this.makeOne(x));
  // };

  deleteM = movie => {
    let newMovies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: newMovies });
    console.log(movie);
    this.checkArrey();
  };

  handleLike = obj => {
    let newState = [...this.state.movies];
    let index = newState.indexOf(obj);
    if (newState[index].like === true) {
      newState[index].like = false;
      this.setState({ movies: newState });
    } else {
      newState[index].like = true;
      this.setState({ newState });
    }
  };

  handlePageChange = page => {
    this.setState({ curentPage: page });
  };

  handleGenreSelect = x => {
    this.setState({ selGenre: x, curentPage: 1 });
    // console.log(this.state.selGenre);
  };
   
   handleSort = sortColumn => {
      this.setState ({sortColumn : sortColumn}) ;
    }
  

  // makeOne = obj => {
  //   return (
  //     <tr key={obj._id}>
  //       <td>{obj.title}</td>
  //       <td>{obj.genre.name}</td>
  //       <td>{obj.numberInStock}</td>
  //       <td>{obj.dailyRentalRate}</td>
  //       <td>
  //         <Like liked={obj.like} onLike={() => this.handleLike(obj)} />
  //       </td>
  //       <td>
  //         <button onClick={() => this.deleteM(obj)} className="btn btn-info">
  //           delete
  //         </button>
  //       </td>
  //     </tr>
  //   );
  // };

  render() {
    const { length } = this.state.movies;
    const { pageSize, curentPage, genre, selGenre, sortColumn } = this.state;

   

    if (length === 0) return <h1>nema vise filmova u bazi</h1>;

    const {totalCount , data : movies} = this.getPagedData();

    return (
      <React.Fragment>
         
        <div className="row">
          <div className="col-2">
            <ListGroup
              items={genre}
              onItemSelect={this.handleGenreSelect}
              selGenre={selGenre}
            />
          </div>
          <div className="col">
            <Link to="/movies/new" className="btn btn-primary mt-3">Add new movie</Link>
            <h1>ostalo je jos {totalCount} filmova</h1>
            <MoviesTable
              movies={movies}
              sortColumn ={sortColumn}
              onDelete = {this.deleteM}
              onLike = {this.handleLike}
              onSort = {this.handleSort}
             />
            

            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              curentPage={curentPage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Vidly;
