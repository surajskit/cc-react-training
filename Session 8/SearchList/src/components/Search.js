import React, { useState } from 'react';
import dataList from './lists';

const Search = () => {

    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(dataList);
  
    // exclude column list from filter
    const excludeColumns = ["id", "color"];
  
    // handle change event of search input
    const handleChange = value => {
      setSearchText(value);
      filterData(value);
    };
  
    // filter records by search text
    const filterData = (value) => {
      const lowercasedValue = value.toLowerCase().trim();
      if (lowercasedValue === "") setData(dataList);
      else {
        const filteredData = dataList.filter(item => {
          return Object.keys(item).some(key =>
            excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
          );
        });
        setData(filteredData);
      }
    }
  return (
    <div className="App">
<h2>Search List</h2>
      <input
        // style={{ marginLeft: 5 }}
        type="text"
        placeholder="Search here..."
        value={searchText}
        onChange={e => handleChange(e.target.value)}
      />
      <div className="box-container">
        {data.map((d, i) => {
          return (
            <div key={i} className="box" style={{ backgroundColor: d.color }}>
              <b>Name: </b>
              {d.name}
              <br />
              <b>Year: </b>
              {d.year}
              <br />
              <b>Color: </b>
              {d.color}
              <br />
              <b>Pantone value: </b>
              {d.pantone_value}
              <br />
              <b>{new Date(d.createdAt).toUTCString()}</b>
            </div>
          );
        })}
        <div className="clearboth"></div>
        {dataList.length === 0 && <span>No records found to display!</span>}
      </div>
    </div>
  );
};

export default Search;
