
const card = document.getElementById("card");
const players = document.getElementById("players");
fetch("./data.json")
  .then((data) => data.json())
  .then((res) => {
    for (let i = 0; i < res.length; i++) {
        let player = document.createElement('div')
        player.setAttribute('id', 'player')
        player.setAttribute('class', `player${i}`)

        let name = document.createElement("h1");
        let age = document.createElement('h2');
        let club = document.createElement('h2'); 
        let goals = document.createElement('h2');
        let stats = document.createElement('h2');
        
        name.setAttribute("id", `pName${i}`);
        age.setAttribute("id", `age${i}`);
        club.setAttribute("id", `club${i}`);
        goals.setAttribute("id", `goals${i}`);
        stats.setAttribute("id", `stats${i}`);
        age.setAttribute('class', 'age');
        club.setAttribute("class", 'club');
        goals.setAttribute("class", 'goals');
        stats.setAttribute("class", 'stats');
        
        name.innerHTML = res[i].name;
        age.innerHTML = res[i].age;
        club.innerHTML = res[i].club;
        goals.innerHTML = res[i].goals;
        stats.innerHTML = res[i].stats;
        player.appendChild(name);
        player.appendChild(age);
        player.appendChild(club);
        player.appendChild(goals);
        player.appendChild(stats);

        players.appendChild(player);
      }
  });



