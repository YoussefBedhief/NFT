import React from 'react'
import instagramLogo from '../assets/instagram.png'
import twitterLogo from '../assets/twitter.png'
import MoreIcon from '../assets/more.png'
import './main.css'
import {useState, useEffect} from 'react';


function Main({ selectedPunk, punkListData }) {
    const [activePunk, setActivePunk] = useState(punkListData[0])
    var reversePunkListData = [ ...punkListData].reverse();

    useEffect(() => {
      setActivePunk(reversePunkListData[selectedPunk])}
    , [reversePunkListData, selectedPunk])
    console.log(punkListData[selectedPunk]);
    return (
    <div className='Main'>
        <div className='MainContent'>
            
        <div className='PunkHighligh'>
            <div className='PunkContainer'>
                <img 
                className='SelectedPunk' 
                src={activePunk.image_url}
                alt=''/>
            </div>
 
        </div>
        <div className='PunkDetails'>
            <div className='title'>
                {activePunk.name}
            <span className='ItemNumber'>.#{activePunk.token_id}</span>

            </div>
        <div className='Owner'>
            <div className='OwnerImageContainer'>
                <img src={activePunk.creator.profile_img_url} alt=''/>
            </div>
            <div className='OwnerDetails'>
                <div className='OwnerNameAndAdresse'>
                    <div className='OwnerAdress'>
                    {activePunk.creator.address}
                    </div>
                    <div className='OwnerName'>
                        @YoussefBedhief
                    </div>
                    </div>
                    <div className='OwnerLink'>
                        <img src={instagramLogo} alt='' />
                    </div>
                    <div className='OwnerLink'>
                        <img src={twitterLogo} alt='' />
                    </div>
                    <div className='OwnerLink'>
                        <img src={MoreIcon} alt='' />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Main