import { Link } from "react-router-dom";
export const Navbar = () => {

  
  
  return (
    <div className="navbar">
          <h1>Quotes</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create" style={{ 
            color: 'white', 
            backgroundColor: 'rgb(84, 70, 135)',
            borderRadius: '8px' 
          }}>Create Quote</Link>
        
        </div>
    </div>
  );
};

export default Navbar;