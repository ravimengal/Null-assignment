import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Fetchdata.css";

const Fetchdata = (props) => {
  const [infos, setInfos] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const getApi = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      console.log(response.data);
      setInfos(response.data);
    } catch (error) {
      console.log(`something went`);
      return error.response;
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      {infos.map((info) => (
        <div className="All_user card">
          <div className="user_card">
          <h3>{info.userId}</h3>
            <h3>{info.title}</h3>
            
          </div>
        </div>
      ))}
    </>
  );
};

export default Fetchdata;
