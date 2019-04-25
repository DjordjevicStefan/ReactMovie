import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = path => {
    ////////// sa ove tri tacke moze da se kopira i objekat i arej !!!!!

    let sortColumn = { ...this.props.sortColumn };
    console.log(sortColumn);

    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th className="clicable" key={column.path || column.label } onClick={() => this.raiseSort(column.path)}>{column.label}</th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
