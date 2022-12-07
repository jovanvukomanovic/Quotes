// import CreateSearch from './CreateSearch'
import QuoteList from "./QuoteList";
import{useState,useEffect} from 'react';
import axios from 'axios';
import Pagination from './Pagination';


const Home = () => {
  // const[search,setSearch] = useState([])
  const[data,setData] = useState([]);
  // const[search,setSearch] = useState('');
  const[isPending,setIsPending]= useState(true)
  const[currentPage, setCurrentPage] = useState(1);
  const[postsPerPage, setPostsPerPage]= useState(5);

  
  const fetchData = ()=>{ 
    axios.get('http://localhost:3500/quotes/').then((res)=>{
      setData(res.data);
      setIsPending(false);
     
    })
  } 
  useEffect(() => {
   fetchData()
  }, [])

    // get current posts
  const indexOfTheLastPost = currentPage * postsPerPage;
  const indexOfTheFirstPost = indexOfTheLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfTheFirstPost,indexOfTheLastPost);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

   

  return (
    <div className="home">
       
      { isPending && <div>Loading...</div> }
      { data && <QuoteList quotes={currentPosts} data={data} />}       
      {<Pagination
       postsPerPage={postsPerPage} 
       totalPosts={data.length}
       paginate= {paginate}
       />}
     
    </div>
  );
}
 
export default Home;