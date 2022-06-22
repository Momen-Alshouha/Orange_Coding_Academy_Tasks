import React from "react";

class Map extends React.Component {
    
    render() {
        const Fruits = [
            {id: 1 , name: "Apple",  color: "Yellow"},
            {id: 2 , name: "Strawberry", color: "Red"},
            {id: 3 , name: "Kiwi", color: "Green"}
          ]; 

          const fruitList = Fruits.map(fruit =>
          <table className="table">
            <tr>
                <td>{fruit.id}</td>
                <td>{fruit.name}</td>
                <td>{fruit.color}</td>
            </tr>
            </table>);
        return(
           <div className="container">
            {fruitList}
           </div>
        )      
    }
}

export default Map