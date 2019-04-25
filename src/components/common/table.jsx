import React from 'react';

import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = (props) => {
   
  const {onSort, sortColumn, columns, data} = props ;
  
  // a moze i ovako !!!!!!!! da se odmah uradi destrukturing gore !!!!!!

  // const Table = ({onSort, sortColumn, columns, data}) => {
   
  return ( 
    <table className="table">
        <TableHeader
          columns={columns}
          onSort = {onSort}
          sortColumn ={sortColumn}

        />
         
         <TableBody
           data={data}
           columns={columns}
         />
   </table> 
   );
}
 
export default Table;