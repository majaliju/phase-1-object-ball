function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["black", "white"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assits: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assits: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assits: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assits: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["turquoise", "purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assits: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assits: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assits: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 31,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assits: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                },
            }
        },
    }
    
}


function numPointsScored(player){
    const game = gameObject();  // access the gameObject 
    for (const gameKey in game){ // enter one level below
        const playersObj = game[gameKey]["players"] // enter another level below, to the players object
        for (const thisPlayer in playersObj){ 
            if (thisPlayer === player){ // checks if player-input matches the given player
                return playersObj[player].points
            }
            
        }
    }
}

function shoeSize(player){
    const game = gameObject();  // access the gameObject 
    for (const gameKey in game){ // enter one level below
        const playersObj = game[gameKey]["players"] // enter another level below, to the players object
        for (const thisPlayer in playersObj){ 
            if (thisPlayer === player){ // checks if player-input matches the given player
                return playersObj[player].shoe
            }
            
        }
    }
}


function teamColors(name){
    const game = gameObject(); // access the gameObject
    for (const gameKey in game){ // gameKey equals either home or away
        debugger;
        const teamObj = game[gameKey]  // teamObj holds {teamName, colors, players}
        for (const thisTeam in teamObj){ // thisTeam cycles thru teamName, colors, players
            debugger;
            if (teamObj["teamName"] === name){
                return teamObj["colors"]
            }
            else {
                continue
            }
        }
        }
    }

function teamNames(){
    const game = gameObject(); // access the gameObject
    const teamNameArray = [];
    for (const gameKey in game){
        teamNameArray.push(game[gameKey]["teamName"])
    }
    return teamNameArray;
}

function playerNumbers(teamName){
    const game = gameObject(); // access the gameObject
    const jerseyArray = []; 
    debugger;

    for (const gameKey in game){ // enter the 'home' and 'array' object
        debugger;
        const teamNameObj = game[gameKey]["teamName"]
        const playersObj = game[gameKey]["players"]
        debugger;
        if (teamName === teamNameObj){ // if teamName matches the teamName in our game object
            for (const player in playersObj){
                console.log([`${player}`])
                // issue is here with undefined being pushed into jerseyArray
                jerseyArray.push([`${player}`]["number"]) // [player][number] is undefined 
                debugger;
            }
            }
            // jerseyArray.push(playersObj["number"]) // push that player's jersey number 
            debugger;
        }
}

playerNumbers("Brooklyn Nets")
playerNumbers("Charlotte Hornets")













































/*
function teamColors(name){
    let game = gameObject(); // access the gameObject
    for (let gameKey in game){ // gameKey equals either home or away
        debugger;
        let teamObj = game[gameKey]  // teamObj holds {teamName, colors, players}
        for (let thisTeam in teamObj){ // thisTeam cycles thru teamName, colors, players
            debugger;
            if (teamObj["teamName"] === name){
                return teamObj["colors"]
            }
            else {
                return ""
            }
        }
        
}
}*/
