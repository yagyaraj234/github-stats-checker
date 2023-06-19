import React, { useState, useEffect } from "react";
import axios from "axios";

const RepoList = ({ username }) => {
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    fetchRepo();
  }, [username]);

  const fetchRepo = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=created`
      );
      setRepoData(response.data);
    } catch (error) {
      console.error("Error fetching repository:", error);
    }
  };
  return (
    <>
      <p className="font-semibold mb-2 text-lg  md:w-[85%] w-[90%]">
        Latest Repositories
      </p>

      <div className="border rounded-lg md:w-[85%] w-[90%] mb-4 overflow-hidden">
        {repoData.slice(0, 5).map((repo) => (
          <div className="flex justify-between items-center w-full border-b hover:bg-[#F1F1F1]  ">
            <p className="font-sans px-2 py-2 w-full ">
              {repo.name.slice(0, 25)}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 px-2 opacity-90 cursor-pointer hover:text-gray-400"
            >
              <path
                className=""
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        ))}
      </div>
    </>
  );
};

export default RepoList;
