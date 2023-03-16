import React from "react";
import { useState } from "react";
import List from "./List";
import './search.css';

function Search() {
    const [text, setText] = useState('');
    const [data, setData] = useState([]);

  
    const fetchData = async (text) => {
      const response = await fetch(`https://api.github.com/search/repositories?q=${text}`);
      const data = await response.json();
      setData(data);
    }

    const handleSubmit = () => {
      if(text === '' || text === undefined)  setText('');
      fetchData(text);
    }
    
  return (
    <>
      <form className="search-form search" onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <input required type="text" placeholder="Search..." value={text} onChange={(e)=>setText(e.target.value)}/>
        <button type="submit">Search</button>
      </form>
      {data?.items ? <List props={data}/> : null}
    </>
  )
}

export default Search;