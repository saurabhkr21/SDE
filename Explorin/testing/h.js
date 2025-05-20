const userMatrix = document.getElementById("user-Matrix");
fetch("http://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((obj, i) => {
            const card = document.createElement("div");
            card.className = "card";
            const image = document.createElement("img");
            image.src = 'https://robohash.org/${obj.id}';
            image.alt = "User Image";
            const name = document.createElement("span");
            name.className = "robo-name";
            name.textContent = obj.name;
            
        });
    })