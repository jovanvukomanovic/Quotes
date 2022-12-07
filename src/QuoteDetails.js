import {  useParams } from "react-router-dom";
import  {useState,useEffect} from 'react';
import axios from 'axios';

const QuoteDetails = () => {

  const { id } = useParams();
  const [data,setData] = useState(null);
   const[ isPending, setIsPending] = useState(true)

  const[like,setLike]= useState(4)
  const[dislike,setDislike]= useState(50)

  
  const fetchData = ()=>{ 
    axios.get(`http://localhost:3500/quotes/`+ id).then((res)=>{     
    setData(res.data)    
    })
  } 

  useEffect(() => {
   fetchData();  
  }, [])

  const handleClick = ()=>{ 
    axios.delete('http://localhost:3500/quotes/'+ id).then((res)=>{      
    })
  } 
  

  return (
    <div className="quote-details">
     
      { data && (
        <article key={data.id}>        
          <div>            
            <p 
            style={{ color: 'white', 
            backgroundColor: 'rgb(84, 70, 135)'}}>
              <span style={{ color: 'white'}}>Quote:</span>
              </p>{ data.body }</div>
          <button onClick={handleClick}>delete</button>         
        </article>
      )}   
    </div>
  );
}
 
export default QuoteDetails;