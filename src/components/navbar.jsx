import YTlogo from  '../images/YTlogo.png';
import notification from  '../images/notification.png';
import videos from  '../images/videos.png';
import '../styles/navbar.css';

function Navbar(){
    return (
    <div className="navbar">  

<div className="logo">
    <img width={100} src={YTlogo} alt="" />
</div>
<div className="searchbar">
    <input type="text"  placeholder='search'/>
</div>

<div className="useroptions" >
<img height={30} width={40} src={videos} alt="" />
<img height={30} width={40} src={notification} alt="" />
<h4>k</h4>
</div>


    </div>



    )
}

export default Navbar;