import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import Table from "./common/table"

class MoviesTable extends Component {
       columns = [
      {path : "title" , label: "Title" },
      {path : "genre.name" , label: "Genre" },
      {path : "numberInStock" , label: "Stock" },
      {path : "dailyRentalRate" , label: "Rental rate" },
      {label : "Like" , content : movie => (<Like liked={movie.like} onLike={() => this.props.onLike(movie)} />) },
      {label: "Delete" , content : movie => (  <button onClick={() => this.props.onDelete(movie)} className="btn btn-info">  delete </button> ) }
   ]
   
  render() {
    

    const { movies, onDelete, onLike, onSort,sortColumn } = this.props;

    return (
      <Table
        sortColumn={sortColumn}
        data = {movies}
        columns ={this.columns}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
