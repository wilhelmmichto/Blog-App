import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css'

export default function Category() {
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
    <div className="category">
        <ul className='categoryList'>
            {cats.map(c=>(<Link to={`/?cat=${c.name}`} className="linkcategory" >
              <li className="categoryListItem">{c.name}</li>
              </Link>
            ))}
          </ul>

      
 </div>
  );
}


