import Posts from '../../components/posts/Posts';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css';
import Topbar from '../../components/topbar/Topbar';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [posts,setPosts] = useState([]);
  const {search} = useLocation();
  const [loader, setloader] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
     const res = await axios.get("/posts"+search);
    setPosts(res.data)
    }
    fetchPosts();
    setloader(false)
  }, [search]);

  return (
    <div className='homes'>
    {/* <Topbar/> */}
      <Header/>
      <div className="home">
      {loader ? (
                <span className="loading">loading...</span>
              ) : (
                <Posts posts={posts}   />
              )}
        <Sidebar />
        
      </div>
      
      <Topbar/>

    </div>
  );

}
