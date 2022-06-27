import data from './MOCK_DATA';
import {useState} from 'react'

function FunctionalComponent() {
  const [search,setSearch] = useState('');
  return (
    <div className="App">
      <input type="text" placeholder="search"  onChange={event => {setSearch(event.target.value)}} />
      {
        data.filter((val) => {
          if(search === ""){
            return val;
          } else if(val.first_name.includes(search)) {
            return val;
          }
        }).map((val,key)=> {
          return <div>
            <p>{val.first_name}</p>
          </div>
        })
      }
    </div>
  );
}

export default FunctionalComponent;
