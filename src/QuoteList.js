import { Link} from 'react-router-dom'; 
import { useState } from 'react';


const QuoteList = ({ quotes ,data}) => {

  const[search,setSearch] = useState('');


//   const FilteredQuotes= data.filter(quote =>{
//     if(search==''){
//       return search
//     }else if( ((quote.body).toLowerCase().includes(search.toLowerCase()))
//     || ((quote.title).toLowerCase().includes(search.toLowerCase()))
// ){   return search }

// })

// setSearch(FilteredQuotes)

 
 
  return (
    <div className="quote-list">   
    <input 
            type="text" 
            id='search' 
            role='searchbox'
            placeholder='Search Items'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
      {quotes
      .filter(quote =>{
        if(search==''){
          return search
        }else if( ((quote.body).toLowerCase().includes(search.toLowerCase()))
        || ((quote.title).toLowerCase().includes(search.toLowerCase()))
    ){   return search }
    
    })
      .map((quote) => (   
        <div className="quote-preview"  key={quote.id} >
          <Link to={`/quotes/${quote.id}`}>
        <article >
          <p>{quote.author}</p>
          <p>{quote.body}</p>
        </article>
        </Link>
        </div>
      ))}
    </div>
  );
}
  
export default QuoteList;