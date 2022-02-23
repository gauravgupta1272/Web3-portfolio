import React from 'react';
import './Header.css';
import nftLogo from '../Pictures/nftLogo.png'

const Header = ()=> {
    return(
    <div className="header">
      <div class="wrapper d-flex">
       <div class="sidebar">
        <a class="navbar-brand" href="#">
      <img src={nftLogo} className='headerLogo'/>
      TEAM 1
    </a>
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            USER PROFILE
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        
          <ul>
            <li><a href="#"><i class="fa-solid fa-sidebar"/>Dashboard</a></li>
            <li><a href="#"><i class="fa-solid fa-address-book"/>Address Book</a></li>
            <li><a href="#"><i class="fas fa-users"/>NFTs</a></li>
            <li><a href="#"><i class="fas fa-signal"/>Portfolio</a></li>
          </ul>

            <hr class="hr-text" />

        </div>
        </div>
        
      
        

        </div>
        
     


    );

}

export default Header;