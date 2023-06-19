import React from "react";

const RepoList = ({ repoData }) => {
  return <div className="border rounded-md">
    {repoData.slice(0, 5).map((repoData) => (
        <div className="flex justify-between items-center">
            <p className="font-sans">{repoData.name}</p>
        </div>
      ))}
  </div>;
};

export default RepoList;
