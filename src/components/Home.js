import React from 'react'
import Fetchdata from './Fetch/Fetchdata'
import '../App.css'
import Loader from "./Loader/Loader"


const Home = ({isLoading}) => {

  
    return (
       
        <div className="App">
            {
                isLoading ?  <Fetchdata/>:


                <Loader/>

            }
           
      
            
            
        </div>
    )
}

export default Home
