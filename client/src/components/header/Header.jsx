import './header.css'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';


import { Context } from "../../context/Context";


export default function Header() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="header">
      <div className="headerleft">
        <span className="headerTitle">MICHTO BLOG</span>
        </div>
        <div className="headerright">
          <ul className="headList">
          {/* <li className="headListItem">
              {user ? (
                <Link to="/settings">
                  <img
                    className="headImg"
                    src={PF + user.profilePic}
                    alt=""
                    onError={(event) => {
                      event.target.src =
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
                      event.onerror = null;
                    }}
                  />{" "}
                </Link>
              ) : (
                <ul className="headList">
                  <li className="headListItem1">
                    <Link className="headerlink" to="/login">
                      <img
                        className="headImg"
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        alt=""
                      />
                      
                    </Link>
                  </li>
                </ul>
              )}
            </li> */}
            <li className="headListItem">
              <Link className="headerlink" to="/">
                HOME
              </Link>
            </li>
            <li className="headListItem">
              <Link className="headerlink" to="/write">
                WRITE
              </Link>
            </li>
            
            <li className="headListItem">
              <Link className="headerlink" to="/about">
                CATEGORIES
              </Link>
            </li>
            <li className="headListItem " onClick={handleLogout}>
              {user ? (
                <span className="headerlink">LOGOUT</span>
              ) : (
                <Link className="headerlink" to="/login">
                  LOGIN
                </Link>
              )}
            </li>
          </ul>
          
        </div>
      </div>
    
  );
}
