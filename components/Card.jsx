'use client'

import { useState, useEffect } from "react";


const Card = ({ contributor }) => {

    const [noOfCommits, setNoOfCommits] = useState(0);

    useEffect(() => {
        fetch(`https://api.github.com/repos/angular/angular/commits?author=${contributor.login}`)
        .then(response => response.json())
        .then(data => {
            setNoOfCommits(data.length)
            console.log(data.length)
        })
        .catch(error => {
          console.error(`Error fetching commits for ${contributor.login}:`, error);
        });
      
    }, [])
    

    return (
    <div className="bg-white text-center rounded-md shadow-md p-7">
      <div className="w-full h-full ">
        <div className=" flex justify-between">
          <div className="flex  gap-2">
            <img
              src={contributor.avatar_url}
              alt="profile"
              width={70}
              className="border-4 border-gray-300"
            />
            <div className="flex items-end">
              <span className=" text-sm text-gray-500">
                <a href={contributor.html_url}>@github</a>
              </span>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div className="flex flex-start flex-col mt-5">
          <h1 className="font-bold text-xl">{contributor.login}</h1>
          <span className="text-gray-500">{noOfCommits} commits</span>
        </div>

        <div className="mt-7">
          <a href={contributor.html_url}>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              view repository
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
