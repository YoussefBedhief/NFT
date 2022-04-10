import './App.css';
import Header from './Composant/Header';
import {useState , useEffect} from 'react';
import axios from 'axios';
import PunkList from './Composant/PunkList';
import Main from './Composant/Main';

function App() {
const [punkListData, setPunkListData] = useState([])
const [selectedpunk, setSelectedpunk] = useState([0])


useEffect(() => {
  const getNFTData = async () =>{
    const openseaData = await axios.get(
      'https://testnets-api.opensea.io/assets?asset_contract_address=0x686Ba4d2F5d8D3511C1Aed641a40cEeCfeC90681&order_direction=asc'
    )
    console.log(openseaData.data.assets)
    setPunkListData(openseaData.data.assets)
  }  
  return getNFTData()
}
,[])


  return (
    <div className='appHeader'>
         <Header/>
         {
           punkListData.length > 0 && (
             <>
        <Main 
         punkListData={punkListData}
         selectedPunk={selectedpunk}/>
         <PunkList
         punkListData={punkListData}
         setSelectedPunk ={setSelectedpunk}
         />
             </>

           )
         }
         
 
    </div>
  );
}

export default App;
