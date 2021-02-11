import {useState} from "react";

function Blog({type, rating, onDelete}){
    const [clicked, setClicked] = useState(0);

   return <article>
       <h2>{type}</h2>
       <p>{rating}</p>
       <p>{clicked}</p>
       <button onClick={() => {
           setClicked(clicked + 1)
       }}>Click me</button>

       <button onClick={onDelete}> Delete</button>
   </article>

    /*return (

        <p>"Welcome to this {type} Blog</p>)*/
}
export default Blog;
