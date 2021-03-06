import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'

export default function Sidebar() {
  const [cats,setCats] = useState([]);

  useEffect(() => {
    const getCats = async () =>
    {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
  getCats();
    
  }, [])
  




  return (
    <div className="sidebar">
      
      <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className='sidebarList'>
            {cats.map(c=>(<Link to={`/?cat=${c.name}`} className="linkcategory" >
              <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))}
          </ul>
      </div>
      <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-f"/>
            <i className="sidebarIcon fa-brands fa-twitter"/>
            <i className="sidebarIcon fa-brands fa-instagram"/>
          </div>
      </div>
 </div>
  );
}
