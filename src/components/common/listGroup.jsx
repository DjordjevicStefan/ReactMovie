import React from "react";

const ListGroup = props => {
  const {nameProperty, idProperty, onItemSelect, selGenre } = props ;
  // console.log(selGenre);

  return (
    
    
    <div className="ml-2 mt-3">
      <ul className="list-group">
        {/* <li className="list-group-item">Show all</li> */}
        {props.items.map((x,index) => (
          //////////////////// da bi ovajlist mogli da korisitimo i na drugim stranam uvodimo dinamicke varijable za key i naziv u listi !!!!
          <li key={x[idProperty]} onClick={() => onItemSelect(x)} className={selGenre === x ? "list-group-item active" : "list-group-item" }>
            {x[nameProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};

///// umesto da guramo ove varijable iz parent-a mi defolten vrednosti stavljamo ovako dole. Sada kako se taj kod opaljuje posle returna jebem li ga.. !!!! 
ListGroup.defaultProps = {
  nameProperty : "name" ,
  idProperty : "_id"
}

export default ListGroup;
