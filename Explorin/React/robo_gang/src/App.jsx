// import React from 'react'


// export default function App() {
//     const monsterList = document.getElementById("monster-list");
//     const searchInput = document.getElementById("search-1");
//     document.addEventListener("DOMContentLoaded", () => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then(response => response.json())
//             .then(users => {
//                 displayRobots(users);
//             });
//     });

//     function displayRobots(users) {
//         const container = document.getElementById("robotsContainer");
//         container.innerHTML = "";

//         users.forEach(user => {
//             const card = document.createElement("div");
//             card.classList.add("card");
//             card.innerHTML = `
//             <img src="https://robohash.org/${user.id}?size=200x200" alt="Robot">
//             <h2>${user.name}</h2>
//             <p>${user.email}</p>
//             <p>${user.username}</p>
//             <p>${user.address}</p>
//         `;
//             container.appendChild(card);
//         });
//     }

//     function filterRobots() {
//         const searchInput = document.getElementById("searchBox").value.toLowerCase();
//         const cards = document.querySelectorAll(".card");

//         cards.forEach(card => {
//             const name = card.querySelector("h2").innerText.toLowerCase();
//             card.style.display = name.includes(searchInput) ? "block" : "none";
//         });
//     }


//     function displayMonsters(filteredMonsters) {
//         monsterList.innerHTML = "";
//         filteredMonsters.forEach(monster => {
//             const monsterDiv = document.createElement("div");
//             monsterDiv.classList.add("box");
//             monsterDiv.innerHTML = `
//             <img src="https://robohash.org/${monster.id}" alt="Monster Image">
//             <h3>${monster.name}</h3>
//             <p>${monster.email}</p>
//             <p>${monster.username}</p>

//         `;
//             monsterList.appendChild(monsterDiv);
//         });
//     }

//     searchInput.addEventListener("input", () => {
//         const searchText = searchInput.value.toLowerCase();
//         const filteredMonsters = monsters.filter(monster =>
//             monster.name.toLowerCase().includes(searchText) ||
//             monster.username.toLowerCase().includes(searchText) ||
//             monster.email.toLowerCase().includes(searchText)
//         );
//         displayMonsters(filteredMonsters);
//     });

//     displayMonsters(monsters);
//     return (
//         <main className="body">
//             <div class="main">
//                 <nav id="header">
//                     <h1>MONSTERS</h1>
//                 </nav>
//                 <div class="content">
//                     <div class="search-bar">
//                         <p class="search-p">Search Monsters</p>
//                         <input type="text" id="searchBox" placeholder="Search robots..." onkeyup="filterRobots()" />
//                     </div>
//                     <div id="robotsContainer"></div>
//                 </div>
//             </div>
//         </main>
//     )
// }

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setFilteredUsers(users);
    }, [users]);

    // Fetch users from API
    async function fetchUsers() {
        try {
            setIsLoading(true);
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            if (!response.ok) throw new Error("Failed to fetch users");
            const newUsers = await response.json();
            if (!newUsers.length) setMessage("No users found matching your search.");
            else setMessage("");
            setUsers(newUsers);
        } catch (error) {
            console.error("Error fetching users:", error.message ?? error);
            setMessage("Failed to load users. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    }

    function filterUsers(searchTerm) {
        const filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filteredUsers);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="body ">
            <div className="container">
                <header className="header">
                    <h1>RoboGang</h1>
                    <div className="search-container p-4">
                        <i className="fas fa-search"></i>
                        <input
                            type="text"
                            id="searchInput"
                            placeholder="Search users..."
                            onInput={(e) => {
                                filterUsers(e.target.value);
                            }}
                        />
                    </div>
                </header>
                {isLoading ? (
                    <div id="userLoader">
                        <p>Loading users...</p>
                    </div>
                ) : null}
                <main id="userMatrix" className={` ${message && "flex"} `}>
                    {message ? (
                        <div className="no-results">
                            <i className="fas fa-search"></i>
                            <p>${message}</p>
                        </div>
                    ) : null}

                    {filteredUsers.map((user) => (
                        <div className="user-card">
                            <img
                                src={`https://robohash.org/${user.id}?set=set2&size=200x200`}
                                alt={`${user.name}`}
                                className="user-image"
                                loading="lazy"
                            />
                            <div className="user-info">
                                <h2 className="user-name">${user.name}</h2>
                                <div className="user-details">
                                    <p>
                                        <i className="fas fa-envelope"></i> ${user.email}
                                    </p>
                                    <p>
                                        <i className="fas fa-map-marker-alt"></i> $
                                        {user.address.city}, ${user.address.street}
                                    </p>
                                    <p>
                                        <i className="fas fa-phone"></i> ${user.phone}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </div>
    );
}
