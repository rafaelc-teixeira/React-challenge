import React, {useState, useEffect} from "react";
import './App.css';
import Axios from 'axios';

function App() {
  const [ bookName, setBookName ] = useState ("");
  const [ author, setAuthor ] = useState ("");
  const [ description, setDescription ] = useState ("");
  const [ image, setImage ] = useState ("");
  const [ bookList, setBookList ] = useState([]);

  useEffect( () => {
    Axios.get('http://localhost:3001/api/v1/books').then((response) => {
      setBookList(response.data);
    });
  }, []);

  const submitBook = () => {
    Axios.post('http://localhost:3001/api/v1/books', {
      name: bookName,
      author: author,
      description: description,
      image: image,
    }).then( () => {
      alert("Deu certo porra");
    });
  }

  return (
    <div className="App">
      <h1>Add a new book</h1>

      <div className="insertBookForm">
        <label>Name:</label>
        <input
          type="text"
          name="bookName"
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />


        <label>Author:</label>
        <input
          type="text"
          name="author"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />


        <label>Description:</label>
        <input
          type="text"
          name="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />


        <label>Image:</label>
        <input
          type="text"
          name="image"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />

        <button onClick={submitBook}>Add new book</button>

        {bookList.map( (value) => {
          return <h1>{value.name}</h1>
        })}
      </div>    
    </div>
  );
}

export default App;
