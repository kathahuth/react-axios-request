import { v4 as uuidv4 } from'uuid';
import {useState} from "react";

export default function AddBlogForm({onAdd}) {

    const [description, setDescription] = useState("some description");
    const [comment, setComment] = useState("");

    return <form onSubmit={event => {
        event.preventDefault()
        onAdd({id: uuidv4(), description: description, comment: comment})
        setDescription("")
        setComment("")
    }}>


        <lable>
            Description
            <input value={description} onChange={event => setDescription(event.target.value)}/>
        </lable>
        <lable>
            Comment
            <input value={comment} onChange={event => setComment(event.target.value)}/>
        </lable>

        <button>
            Add Blog Entry
        </button>
    </form>
}

