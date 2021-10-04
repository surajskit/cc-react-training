import React from 'react'
import {useState} from "react";

function Search({placeholder, data}) {
    const [filterdData, setFilterdData] = useState([])

    const handleFilter = (event)=>{
        const searchWord = event.target.value;
        const newFilter = data.filter((value)=>{
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord==="") {
            setFilterdData([]);
        }
        else{
        setFilterdData(newFilter)
    }
    };
    return (
        <div className="search">
            <h1>HackerStories</h1>
            <div className="searchInputs">
        <input
          type="text" placeholder={placeholder} onChange={handleFilter}/>
            </div>
            {filterdData.length !=0 &&(
            <div className="dataResult">
          {filterdData.map((value, key)=>{
              return <div> {value.title} </div>
          })
          }
            </div>
            )}
            {data.map((value)=>{
                return <ul>
                    <li>{value.title}</li>
                </ul>
            })

            }
        </div>
    )
}
export default Search;
