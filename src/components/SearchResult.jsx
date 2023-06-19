import RepoList from "./RepoList";

export const SearchResult = ({ data, username }) => {
  return (
    <div className="mx-auto  flex flex-col items-center  my-10 bg-white rounded-md  border-2">
      {/* Icon Section Start  */}
      <div className="flex flex-row justify-center gap-2  py-2 md:px-3">
        <div className="text-center md:w-3/12  w-1/3">
          <img src={data.avatar_url} alt="text" className=" rounded-md" />
          <p className="font-bold text-lg ">{data.name}</p>
        </div>
        <div className="flex flex-col items-center  ">
          <div className="grid md:grid-cols-4 grid-cols-2 text-white font-semibold text-center ">
            <p className="bg-[#4582EC] rounded md:p-2 p-1 text-sm md:text-md m-1 md:m-2 hid text-center">
              Public Repo's : {data.public_repos}
            </p>
            <p className="bg-[#ADB5BD] rounded md:p-2 p-1 text-sm md:text-md m-1 md:m-2 hid">
              Public Gist's :{data.public_gists}
            </p>
            <p className="bg-[#02B875] rounded md:p-2 p-1 text-sm md:text-md  md:m-2">
              Follower's :{data.followers}
            </p>
            <p className="bg-[#17A2B8] rounded md:p-2 p-1 text-sm md:text-md ml-2  md:m-2 ">
              Following :{data.following}
            </p>
          </div>

          {/* Icon section End  */}

          {/* User Details Start  */}

          <div className="w-full md:my-1 my-2 border rounded border-gray-300 px-2 text-xs md:text-lg">
            <h3 className=" flex font-bold border-b  md:p-2 py-1 pl-0 items-center ">
              Company :
              <span className="  font-normal">
                {data.company === null ? (
                  <p className="text-xs font-semibold px-2 py-1">NULL</p>
                ) : (
                  <p className="px-1">{data.company}</p>
                )}
              </span>
            </h3>
            <h3 className="flex font-bold border-b  md:p-2 py-1 pl-0 items-center">
              Website :{" "}
              <span className="font-normal">
                {data.website === null ? (
                  <p className="text-sm font-semibold px-2 py-1">NULL</p>
                ) : (
                  <p className="px-1">{data.website}</p>
                )}
              </span>
            </h3>
            <h3 className="font-bold flex border-b md:p-2 py-1 pl-0 ">
              Location : <span className="font-normal px-1"> {data.location}</span>
            </h3>
            <h3 className="font-bold md:p-2 p-1 pl-0 hid">
              Member Since :{" "}
              <span className="font-normal"> {Date(data.created_at).slice(0,15)}</span>
            </h3>
          </div>
        </div>
      </div>
       {/* User Details End  */}

      {/* First Section End  */}

      {/* repo section start  */}

      <RepoList username={username} />

      {/* repo section end */}

      {/* bottom Section  Start  */}
      <div className="ml-5 mb-5">
        <button className="bg-blue-600 text-white md:p-2 p-1 px-4 rounded-md hover:bg-blue-500  ">
          <a href={data.html_url} target="_blank" rel="noreferrer">
            View Full Profile
          </a>
        </button>
      </div>
      {/* bottom section end  */}
    </div>
  );
};
