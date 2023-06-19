import React, { useEffect, useState } from "react";
// import chart from "../assets/chart.png";
import axios from "axios";
import { SearchResult } from "./SearchResult";
import UserNotFound from "./UserNotFound";
const Search = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [username]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="flex flex-col md:w-3/4 w-[98%]">
      <h1 className="md:text-5xl text-3xl opacity-50  my-10">
        Github Profile Finder
      </h1>
      <div className=" border  border-gray-300 bg-white rounded-lg w-full flex flex-row justify-between">
        <div className="text-blue-700 font-semibold text-3xl  mx-auto pt-2  ">
          <ion-icon name="search-outline" size="medium"></ion-icon>
        </div>

        <input
          type="text"
          value={username}
          placeholder="Type username to search"
          className=" bg-[#FFFFFF]   outline-none focus:border-red-400 rounded-md w-11/12 mx-auto  font-sans   "
          onChange={handleChange}
        />
        <button className="px-1 md:px-2 bg-blue-100 hover:bg-blue-200 rounded-r-md transition-colors duration-500">
          Search
        </button>
      </div>

      {data ? <SearchResult data={data} /> : <UserNotFound data={data} />}
      

      <div className="absolute md:top-20 top-20 md:right-5 right-1 ">
      </div>
    </div>
  );
};

export default Search;
