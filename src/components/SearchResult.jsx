// import data from "../data";
import { useState } from "react";
import image from "../assets/image.png";
export const SearchResult = ({ data }) => {
  const [imageUrl, setImageUrl] = useState(null);
  return (
    <div className="mx-auto px-1 my-10 bg-white rounded-md  border-2">
      <div className="flex flex-row gap-2  py-2 md:px-3">
        <div className="text-center md:w-3/12  w-1/3">
        <img src={image} alt="text" className=" rounded-md pt-5" />
          {/* {data.avatar_url === "Null" ? (
            <img src={image} alt="text" className=" rounded-md pt-5" />
          ) : (
            <img src={data.avatar_url} alt="text" className=" rounded-md" />
          )} */}
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
          <div className="w-full md:my-1 my-2 border rounded border-gray-300">
            <h3 className="font-bold border-b  md:p-2 p-1 pl-0 ">
              Company : <span className="font-normal"> {data.company}</span>{" "}
            </h3>
            <h3 className="font-bold border-b md:p-2 p-1 pl-0 ">
              Website : <span className="font-normal"> {data.website}</span>{" "}
            </h3>
            <h3 className="font-bold border-b md:p-2 p-1 pl-0 ">
              Location : <span className="font-normal"> {data.location}</span>{" "}
            </h3>
            <h3 className="font-bold md:p-2 p-1 pl-0 hid">
              Member Since :{" "}
              <span className="font-normal"> {Date(data.created_at)}</span>{" "}
            </h3>
          </div>
        </div>
      </div>

      {/* First Section End  */}

      <div className="">
        <button className="bg-blue-600 text-white md:p-2 p-1 rounded-md mx-auto">
          <a href={data.html_url} target="_blank" rel="noreferrer">
            View Full Profile
          </a>
        </button>
      </div>
    </div>
  );
};
