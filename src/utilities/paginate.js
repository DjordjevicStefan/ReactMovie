import _ from "lodash" ;


export function paginate(items, pageNumber, pageSize){
 const startIndex = (pageNumber -1) * pageSize ;

  
 //// vraca arej sa novom listom filmova u zavisnosti od parametra koji se stave u njega
 return _(items).slice(startIndex).take(pageSize).value() ;
}