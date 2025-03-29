const monsterList = document.getElementById("monster-list");
const searchInput = document.getElementById("search-1");document.addEventListener("DOMContentLoaded", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            displayRobots(users);
        });
});

function displayRobots(users) {
    const container = document.getElementById("robotsContainer");
    container.innerHTML = "";

    users.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="https://robohash.org/${user.id}?size=200x200" alt="Robot">
            <h2>${user.name}</h2>
            <p>${user.email}</p>
            <p>${user.username}</p>
        `;
        container.appendChild(card);
    });
}

function filterRobots() {
    const searchInput = document.getElementById("searchBox").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const name = card.querySelector("h2").innerText.toLowerCase();
        card.style.display = name.includes(searchInput) ? "block" : "none";
    });
}


function displayMonsters(filteredMonsters) {
    monsterList.innerHTML = "";
    filteredMonsters.forEach(monster => {
        const monsterDiv = document.createElement("div");
        monsterDiv.classList.add("box");
        monsterDiv.innerHTML = `
            <img src="https://robohash.org/${monster.id}" alt="Monster Image">
            <h3>${monster.name}</h3>
            <p>${monster.email}</p>
            <p>${monster.username}</p>
        `;
        monsterList.appendChild(monsterDiv);
    });
}

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchText) ||
        monster.username.toLowerCase().includes(searchText) ||
        monster.email.toLowerCase().includes(searchText)
    );
    displayMonsters(filteredMonsters);
});

displayMonsters(monsters);