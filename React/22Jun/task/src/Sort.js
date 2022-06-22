import React from "react";

class Sort extends React.Component {
    render() {
        let numbers = ['Z','A','Q','B','C'];
        let sortedNumbers = numbers.sort();
        return (
            <div>
                <h1 style={{backgroundColor:"gray",color:"white"}}>
                Sorted Array: {sortedNumbers.sort().join(" ")}
                </h1> <br />
            </div>
        )
    }
}

export default Sort