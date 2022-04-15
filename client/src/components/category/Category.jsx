import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './category.css'

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
      <hr/>
      <div className="categoryItem">
          <span className="categoryTitle">CATEGORIES</span>
          <ul className='categoryList'>
            {cats.map(c=>(<Link to={`/?cat=${c.name}`} className="linkcategory" >
              <li className="categoryListItem">{c.name}</li>
              </Link>
            ))}
          </ul>
      </div>
      <div className="categoryItem">
          <span className="categoryTitle">FOLLOW US</span>
          <div className="categorySocial">
          <i className="categoryIcon fa-brands fa-facebook-f"/>
            <i className="categoryIcon fa-brands fa-twitter"/>
            <i className="categoryIcon fa-brands fa-instagram"/>
          </div>
      </div>
 </div>
  );
}
