import React, {useState, useEffect} from "react";
import '../App.css';
import Axios from 'axios';

function Search() {
  const [ bookList, setBookList ] = useState([]);

  useEffect( () => {
    Axios.get('http://localhost:3001/api/v1/books').then((response) => {
      setBookList(response.data);
    });
  }, []);

  return (
    
    <div className = "book-list">

      {bookList.map( (value) => {
        return (
        
          <div className = "card">
            <img src="Bitmap.png" alt="book cape" />
            <h2>{value.name}</h2>
            <h4>by {value.author}</h4>
          </div>

        )
      })}
    </div>
  )
}

export default Search;