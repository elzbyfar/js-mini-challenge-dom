/***** Deliverable 1 *****/
const header = document.querySelector("#header")
const playerContainer = document.querySelector('.player-container')


/***** Deliverable 2 *****/
header.style.color = 'red'


/***** Deliverable 3 *****/
PLAYERS.forEach(player => playerProfile(player))

function playerProfile(player){
    let playerDiv = document.createElement('div')
    let playerH3 = document.createElement('h3')
    let playerImage = document.createElement('img')
    playerContainer.appendChild(playerDiv)
    playerDiv.appendChild(playerH3)
    playerDiv.appendChild(playerImage)

    playerDiv.className = 'player'
    playerDiv.dataset.number = player.number
    playerH3.innerHTML = `${player.name} (<em>${player.nickname}</em>)`
    playerImage.src = player.photo
    playerImage.alt = player.name
}


/***** Deliverable 4 *****/
document.querySelector('[data-number="7"]').remove()