import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './topbar.css'

import { Context } from "../../context/Context";





export default function Topbar() {
    const { user, dispatch } = useContext(Context)
    const PF = "http://localhost:5000/images/"
    const handleLogout = () =>{
        dispatch({type:"LOGOUT"})
    }
    return (
      <div className="top">
        <div className="topLeft">
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="links fa fa-home  " to="/">
                
              </Link>
            </li>
            <li className="topListItem">
              <Link className="links fa fa-pencil" to="/write">
                
              </Link>
            </li>
            <li className="topListItem">
            {user ? (<Link to="/settings">
            <img
              className="topImg"
              src={PF+user.profilePic}
              alt=""
              onError={event => {
                event.target.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                event.onerror = null
              }}
            /> </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem1">
                <Link className="links" to="/login">
                <img
              className="topImg"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""/>
                </Link>
              </li>
              
            </ul>
          )}

            </li>
            <li className="topListItem">
              <Link className="links fa fa-info-circle" to="/categories">
                
              </Link>
            </li>
            <li className="topListItem " onClick={handleLogout}>
              {user ?( <i className="links fa-solid fa-power-off"></i>):(
                <Link className="links fa-solid fa-power-off " to="/login"></Link>
              )}
            </li>
          </ul>
        </div>
        <div className="topRight">
           </div>
           
      </div>
    );
}
