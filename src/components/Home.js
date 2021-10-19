import React,{useState} from 'react'
import Fetchdata from './Fetch/Fetchdata'
import '../App.css'
import Loader from '../components/Loader/Loader'

const Home = () => {

   
    return (
        <div>
          {


          }
          <Loader />
            <div className="App">
            
                <Fetchdata/>
                
                </div>
            
        </div>
    )
}

export default Home
