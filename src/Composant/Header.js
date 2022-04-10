import React from 'react'
import './Header.css';
import punkLogo from '../assets/cryptopunk-logo.png';
import searchIcon from '../assets/search.png'
import themeIcon from '../assets/theme-switch.png'


function Header() {
  return (
      <div className='header'>

        <div className='LogoContainer'>
    <img src={punkLogo} className='punkLogo' alt=''/>
        </div>     

        <div className='searchBar'>
            <div className='searchIconContainer'>
                <img src={searchIcon} className='searchIcon' alt=''/>               
            </div>
            <input className='searchInput' placeholder='Collection, item or user ...'/>
        </div>
        <div className='headerItems'>
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p> 
        </div>
        <div className='headerActions'>
            <div className='themeContainer'>
                <img src={themeIcon} className='themeIcon' alt=''/>               
                
            </div>
            
        </div>
        <div className='loginButton'> Get IN </div>
      </div>

    )
}

export default Header