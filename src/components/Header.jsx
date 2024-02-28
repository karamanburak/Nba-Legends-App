import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../assets/nba-logo.png'
import { IoClose } from "react-icons/io5";



const Header = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center mt-4'>
    <div className='header'>
    <div className='logo text-center'>
        <img src={logo} alt="" width="200px"/>
    </div>
    <div className='title'>

        <h1 className="display-4 fw-bold">NBA Legends</h1>
    </div>

    <div className="inputDiv">

              <input className='w-100 m-auto form-control' type="text" placeholder='Search for NBA Legends' 
              />
              <IoClose className="closeIcon" />
    </div>

    </div>



    </div>
  )
}

export default Header