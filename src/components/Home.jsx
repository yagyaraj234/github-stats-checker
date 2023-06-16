import React, { useState, useEffect } from "react";
import chart from "../assets/chart.png";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);
  const [inputUsername, setInputUsername] = useState("");
  const [username, setUsername] = useState("");

  const handleChange = () => {
    setUsername(inputUsername);
  };
  console.log(data);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [username]);
  return (
    <div className="flex flex-col justify-center  ">
      <h1 className="md:text-5xl text-4xl opacity-50">Github Profile Finder</h1>

      <input
        type="text"
        name="input-field"
        id="input-field"
        placeholder="Enter username"
        className=" bg-[#FFFFFF] p-2  outline-none focus:border-red-400 rounded-lg m-5 w-3/4 mx-auto border border-gray-300 font-sans"
        onChange={(e) => setInputUsername(e.target.value)}
      />

      <button
        className="bg-[#413E4E] hover:bg-[#9381FF] text-[#FFFFFF] p-2 rounded-lg  mx-auto w-3/4 font-bold  "
        onClick={handleChange}
      >
        Search
      </button>

      <div className="absolute md:top-20 top-5 md:right-5 right-1 ">
        <img src={chart} alt="chart-img" className="md:w-[300px] w-1/4" />
      </div>

      {/* cryptoData
          .filter((coin) => {
            return filterCoin.toLowerCase() === ""
              ? coin
              : coin.name.toLowerCase().includes(filterCoin);
          }) */}

      {/* filter((data) => {
          return inputUsername.toLowerCase() === ""
            ? data
            : data.login.toLowerCase().includes(inputUsername);
        }) */}

      {/* {data.map((user) => (
        <div key={user.id}>
          <p>{user.created_at}</p>
        </div>
      ))} */}

      <p>{data.url}</p>
    </div>
  );
};

export default Home;
