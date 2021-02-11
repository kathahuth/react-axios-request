import './App.css';
import {Button} from "./components/Button";
import {useState} from 'react';
import AddBlogForm from "./components/AddBlogForm";
import BlogList from "./components/BlogList";
import axios from "axios";


function App() {

  /*const blogEntries = [
    {
      id: "1",
      description: "Welcome",
      comment: "comments are allowed"
    },
    {
      id: "2",
      description: "About Me",
      comment: "comments are not allowed"
    },
    {
      id: "3",
      description: "Contact",
      comment: "comments are allowed"
    }
  ];*/
const [blogEntries, setBlogEntries] = useState([]);

  function loadApiRequest(){
      const responsePromise = axios.get("https://jsonplaceholder.typicode.com/comments")
      responsePromise.then(result => {
          setBlogEntries(result.data);
      })
  }

  function onDeleteEntry(id){
      const updatedList = blogEntries.filter(item => item.id !== id);
      setBlogEntries(updatedList);
  }

  return (

      // Alles in ein TAG!!! (Fragment REACT)
      <div>
       <BlogList blogEntries={blogEntries} onDeleteEntry={onDeleteEntry}
       />

       <Button onClick={loadApiRequest}> Load API Button </Button>

          {/*<Button onClick={() =>
            setBlogEntries( [
              {
                id: "1",
                description: "Welcome",
                comment: "comments are allowed"
              },
              {
                id: "2",
                description: "About Me",
                comment: "comments are not allowed"
              },
              {
                id: "3",
                description: "Contact",
                comment: "comments are allowed"

            ])}>
          Load My Block Entry
        </Button>*/}

        <Button  onClick={() => {
          const updatedList = [...blogEntries, {id: "new-id", description:"new entry", comment: "new comment"}];
          setBlogEntries(updatedList)
      }}>
            Add Entry
        </Button>

        <AddBlogForm onAdd={newEntry =>
            setBlogEntries([...blogEntries, newEntry])}/>


          {/*<Button primary>Klick mich, ich bin ein Button</Button>
          <Button secondary>Klick mich, ich bin ein Button</Button>*/}
      </div>

  );



  /*<div className="App">

    <Blog type = {"Sports"}/>
    <Blog type = {"Music"}/>


    </div>*/
}

export default App;
