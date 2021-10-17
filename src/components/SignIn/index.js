import React from 'react';
import markeni from '../../images/markeni.png';
import image from '../../image/signPhoto.png';
import photo from '../../images/girl.png';
// import './signIn.css';


function Sign(){
    return(
    <div className="sign">
        <div className="footer">
            <div id="premierTrait"></div> 
            <div className ="menu">
                <li className="log"  ><a href="#"> About us</a></li>
                <li className="log" ><a href="#"> Custumers</a></li>
                <li className="log" ><a href="#"> Blog</a></li>
            </div>
            <div className="markeni"><img src={markeni} alt="carte"/></div>
        </div>

        <div className="header">
            <div className="gird">
                <div   className="image">
                    <img  id="image"className="img" src={image} alt="image"/>
                </div>
                
                <div id="formulaire" className ="form">
                    <h4 className="title">Sign in</h4>
                    <div className="border">
                        <div className="info">
                            <div className="input_field">
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="User name" />
                            </div>
                            <div className="input_field">
                                <i class="fas fa-lock"></i>
                                <input type="text" placeholder="Password" />
                            </div>
                            <p style={{ color:"#fff",marginBottom:"10px"}}>forget Password ? </p>
                            <input type="submit" value="Login" class="btn solid" />
                            <hr  className="traitLeft"></hr>
                            <div className="or">Or</div>
                            <hr  className="traitRigth"></hr>
                            <div className="google">
                                <i id="google" class="fa fa-google"></i>
                                <input type="submit" value="Log in with google" class="  solid" />
                            
                            </div>
                            <br></br>
                            <h7> New user? </h7>
                            <a href="#">Sign up for free</a>
                            
                        </div>
                    </div>
                </div> 
                <div>
                <img id="photo"  className="photo" src={photo} alt="image"/>
                </div>
                
                 
            </div>    
        </div>
        
           
        <div className="wave-div"  >
            <svg className="wave-svg" viewBox="0 0 500 150" preserveAspectRatio="none" ><path className="wave-path" d="M0.00,49.99 C261.51,278.58 337.69,-137.85 503.61,54.56 L500.00,150.00 L0.00,150.00 Z" ></path></svg>
        </div>
         
         
    </div>
    )

}
export default Sign