import './single.css'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'
import Topbar from '../../components/topbar/Topbar'
import Header from '../../components/header/Header'

export default function Single() {
  return (<div className="container"><Topbar/><Header/>
    <div className="single">
      
        <SinglePost/>
        <Sidebar/>
    </div>
    </div>
  )
}
