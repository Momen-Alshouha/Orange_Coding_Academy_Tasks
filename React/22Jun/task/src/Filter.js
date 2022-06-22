import { useState } from "react";

let names = ["samer","mohammad","ahmad","noor","yamen"];
let Filter = () => {
    const [search,searchHandler] = useState('');
    const ChangeHandler = (event)=>{
        let filteredArr = names.filter(ev => ev.includes(event.target.value)   );
        searchHandler(filteredArr);
    }
    return(
        <div>
        <form>
            <input type="text" onChange={ChangeHandler}/>
            <p>{search}</p>
        </form>
        </div>
    );
}
export default Filter;