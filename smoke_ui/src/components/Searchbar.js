import React from "react";
import SearchField from "./SearchField";

function SearchBar ({title, params, OnSubmit}){
    let fullquery = {};
    const setFullQueryVal = (key, val) => {
        fullquery[key] = val;
        Object.keys(fullquery).forEach(key =>{
            if(fullquery[key] === undefined && delete(fullquery[key]));
        });
        console.log(fullquery);
    }
    return(
        <>
        <label>{title}</label>
        {params.map((param, i) => <SearchField field={param} onSet={setFullQueryVal} key={i}/>)}
        <button onClick={() => {OnSubmit(fullquery); return false;}}>Submit</button>
        </>
    )
}

export default SearchBar;