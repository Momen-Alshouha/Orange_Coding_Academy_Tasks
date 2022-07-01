import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router'



export default function Single() {
    const {id} = useParams();
    const [single , setSingle] = useState([]);
 
    useEffect (()=>{
        const fetchData = async ()=>{
            const api = await fetch('https://www.breakingbadapi.com/api/characters');
            const allData = await api.json();
            allData.filter((data)=>{
				if(data.char_id==id){
					return setSingle(data)
				}
			})
			

        }
        fetchData();
    } , [])


    console.log(single);

    return (
    <div>
         <div class="col-sm-12 text-center">
                      <div class="card">
                        <div class="card-body">
                          <h2 class="card-title">{single.name}</h2>
                          <img height={"450px"} src={single.img} alt="" />
                          <p class="card-text">{single.status}</p>
                        </div>
            </div>
        </div>
    </div>
  )
}
