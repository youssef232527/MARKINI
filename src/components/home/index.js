import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import logo from "../../images/logo.png";
// import "./styles/styleHome.css";
// import   "./styleHome.css";
import '../style/styleHome.css';

const Home= (props) =>{
  const onNavigateSignIn=()=>{
    props.history.push('/signIn')
  }
  const onNavigateSignUp=()=>{
    props.history.push('/signUp')
  }


  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  return (
    <div className="home0">
      <div className="navbar0">
        <div className="headerHome0">
          <div className="logo-container0">
            <img className="logo" src={logo} />
          </div>
          <div className="menuAll0">
            <ul className="menu0">
              <li className="option0">Blog</li>
              <li className="option0">Custumers</li>
              <li className="option0">About us</li>
            </ul>

            <div className="login-signup0">
              <button onClick={onNavigateSignIn} className="login0">Log in</button>
              <button onClick={onNavigateSignUp} className="signup0">Sign up</button>
            </div>
          </div>
          
        </div>
      </div>


<div className="mobileHeader0">
<div id="nav20">
         <div className="nav2-ll0">
         <img className="logo20" src={logo} alt="" />
          <div className="navbar-icone0" onClick={handleClick}>
          {click ? (
               <i class="fas fa-times"></i>
            
          ):(
            <i class="fas fa-bars"></i>
          )}
            
          </div>
         </div>
        </div>
        <div className="menu0" style={click==true?{display:'flex'}:{display:'none'}}>
            <div className="menuAll0">
            <ul className="menuitem0">
              <li className="option0">Blog</li>
              <li className="option0">Custumers</li>
              <li className="option0">About us</li> 
              <div className="">
              <li className="option0 loginbtn20 loginbtn0">Log in</li>
              <br />
              <li className="option0  loginbtn0">Sign up</li>
            </div>
            </ul>

           
          </div>
        </div>
</div>
      <div >
     
        <div className="main0">
          <div id="intro0">
            <div className="introprph0">
              <h1 className="intro-title0">MARKINI</h1>
              <p className="intro-paragraph0">
                Markini is a mobile application associated with an online
                platform <br />
                <br /> dedicated to trainers and training canters.
              </p>
              <button className="btnmore0">
                <span>See more</span>
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Home;