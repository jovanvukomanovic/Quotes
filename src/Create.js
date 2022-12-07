import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const quote = {  body, author };

    fetch('http://localhost:3500/quotes', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(quote)
    }).then(() => {
      
      history('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Quote</h2>
      <form onSubmit={handleSubmit}>
        <label>Author:</label>
        <input 
          type="text" 
          required 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        
        <button>Add Quote</button>
      </form>
    </div>
  );
}
 
export default Create;