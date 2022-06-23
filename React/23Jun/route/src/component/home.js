import React from 'react';
 
function Home (){

    const handleClick = (e,name) => {
        console.log("Hello! " + name , e);
    }

    return (
        <div class="jumbotron">
            <h1 class="display-4">Home Page!</h1>
            <button class = "btn btn-primary" onClick={(e) => {handleClick(e,"Ahmad")}}>Click Event</button>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
         </div>
        )
}
 
export default Home;