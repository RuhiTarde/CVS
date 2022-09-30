import React from "react";
import  '../allcss/firstPage.css'
import front from '../images/front.jpeg';

const Navbar = () => {
  return (
    <>
      <div className="menuBar">
        <ul>
          <li class="active"><a href="/">Home</a></li>
          <li><a href="#">About Vaccines</a>
          <div className="sub-menu">
              <ul>
              <li><a href="/vaccines">Vaccines</a></li>
                <li><a href="/vaccinationInformation">Vaccination Information</a></li>
                <li><a href="/sideEffect">Vaccination side Effect</a></li>
                
              </ul>
            </div></li>
          <li><a href="/contactUs">Contact us</a></li>
          <li><a href="/hospitallogin">Login</a>  </li>
         
         
        </ul>

      </div>
      <div class="bg-image2">

      </div>Vaccination ( or Immunization ) is the process of utilizing the immune system of the body to build antibodies ( either T Cell based of B Cell based ) against the germ that we are trying to protect the body against.
      <div>
        <br></br>
        <div>The procedure involves introducing a small quantity of the same germ in the body as a vaccine. Soon as the body recognizes this germ , the immune system comes into action and builds an antibody response against the germ.
          </div>
          <br></br>
        
        <div>This is quite like a battle where the moment the foreign invader ( the germ ) is recognized , the army ( the immune system) is deployed and the invader is checked at the point of entry before he can spread ( spread of infection ) and cause damage. </div>
        The second time the body is attacked by the germ,the body already has a specific immune response available for the germ.
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div align='center'>
        <img src={front} alt=""/>
          </div>
        
    </>
  );
};

export default Navbar;
