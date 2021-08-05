import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const [ title, setTitle] = useState('');
    const [ author, setAuthor] = useState('');
    const [ body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        console.log(blog)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        })
  
    }
    
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label> Blog title :</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                 <label> Blog body :</label>
            <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
            <label> Blog author : </label>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}> 
                <option value="angel">Angel</option>
                <option value="luimar">Luimar</option>
            </select>
            { !isPending &&  <button>Add blog</button> }
            { isPending &&  <button disabled>Adding blog...</button> }
            </form>
        </div>
     );
}
 
export default Create;