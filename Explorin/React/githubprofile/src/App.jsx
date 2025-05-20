import React, { useState } from "react"

import UserCard from "./components/Usercard";
import UserSearch from "./components/Usersearch";


export default function App() {
  const [userData, setUserData] = useState(null);
  // console.log("1",userData);
  const [error, setError] = useState("");

  // async function getUserData(username) {
  // const response = await fetch(`https://api.github.com/users/${username}`);
  // const data = await response.json();
  // setUserData(data)
  // }

  function handleSubmit(e, input) {
    getUserData(input);
  }

  async function getUserData(username) {
    fetch(`https://api.github.com/users/${username}`)
    // let promise = new Promise((res) => setTimeout(res, 2000));
    // promise
      .then((response) => response.json())
      .then((data) => {
        setError("");
        // console.log(data, username);
        // setUserData(sampleData);
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setError(error.message ?? "User not found");
      });
  }

  return (
    <div className=" max-w-[1280px] m-auto App flex flex-col gap-8 p-8 justify-center min-h-screen  overflow-auto">
      <UserSearch handleSubmit={handleSubmit} />
      {
        // conditional rendering
        error ? (
          <div className="w-full text-center justify-center flex gap-4 p-4 bg-white border-red-500 shadow shadow-red-500 rounded-md shadow-md m-auto">
            {error}
          </div>
        ) : null
      }
      {userData ? <UserCard userData={userData} /> : null}
    </div>
  );
}