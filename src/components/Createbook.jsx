import React, { useState } from "react";
import '../App.css';
import Axios from 'axios';

function CreateBook() {
  const [ bookName, setBookName ] = useState ("");
  const [ author, setAuthor ] = useState ("");
  const [ description, setDescription ] = useState ("");
  const [ image, setImage ] = useState ("");


  const submitBook = () => {
    Axios.post('http://localhost:3001/api/v1/books', {
      name: bookName,
      author: author,
      description: description,
      image: image,
    }).then( () => {
      alert("Livro adicionado com sucesso.");
    });
  }


  return (
    <div className="App">

        <form onSubmit={submitBook}>

        <div className="insertBookForm">

          <h1>Add a new book</h1>

          <label>Name:</label>
          <input
            type="text"
            name="bookName"
            onChange={(e) => {
              setBookName(e.target.value);
            }}
            required
          />


          <label>Author:</label>
          <input
            type="text"
            name="author"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            required
          />


          <label>Description:</label>
          <textarea
            type="text"
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          />


          <label>Image:</label>
          <input
            type="text"
            name="image"
            onChange={(e) => {
              setImage(e.target.value);
            }}
            required
          />

          <input type="submit" value="Add new book" id="submit-button"></input>
          </div> 
       </form>
         
    </div>
  );
}

export default CreateBook;