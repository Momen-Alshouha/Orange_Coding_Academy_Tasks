import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Home () {

    const [characters,setChracters] = useState([]);

    async function fetchData() {
        const res = await fetch("https://www.breakingbadapi.com/api/characters");
        const data = await res.json();
        setChracters(data);
      }
    
      useEffect(() => {
        fetchData();
      });

    return(
      <div>
            
                <div class="about-section">
                <h1>Home</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
        <div >
       
            <span >{characters.map((val) => {
                return (
                    
                    
                    <div class="col-sm-12 text-center">
                      <div class="card">
                        <div class="card-body">
                          <h2 class="card-title">{val.name}</h2>
                          <img height={"450px"} src={val.img} alt="" />
                          <p class="card-text">{val.status}</p>
                        </div>
                            <a class="nav-link disabled"> <NavLink className='btn btn-primary' to={'/single/'+val.char_id}>Go To</NavLink></a>
                      </div>
                      <br />
                    </div>
                  
                )
            })}</span><br/>
        </div>
        </div>
        
    )
}

export default Home