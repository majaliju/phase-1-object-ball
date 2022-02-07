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
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
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
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 31,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                },
            }
        },
    }
    
}

// create a function that holds a new object of purely players
function players(){
    // optimal Flatiron walk-thru v1
    const game = gameObject();

    //Object. assign --> make an object that holds all the players
    const homePlayers = game.home.players
    const awayPlayers = game.away.players
    return Object.assign(homePlayers, awayPlayers)
    
}

// flatIron walk-thru method
function numPointsScoredv2(playerInput){
   

    for (const playerName in players()){ // iterate thru players
        if (playerName === playerInput){
            return players()[playerName].points
        }
    }
}








// Majlind's natural method for numPointsScored
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

    for (const gameKey in game){ // enter the 'home' and 'array' object
        const teamNameObj = game[gameKey]["teamName"]
        const playersObj = game[gameKey]["players"]
        if (teamName === teamNameObj){ // if teamName matches the teamName in our game object
            for (const player in playersObj){
                console.log(playersObj[player]["number"])
                jerseyArray.push(playersObj[player]["number"]) //
            }
            }
        }
        return jerseyArray
}


function playerStats(player){
    const game = gameObject();  // access the gameObject 
    for (const gameKey in game){ // enter one level below
        const playersObj = game[gameKey]["players"] // enter another level below, to the players object
        for (const thisPlayer in playersObj){ 
            if (thisPlayer === player){ // checks if player-input matches the given player
                return playersObj[player]
            }
            
        }
    }
}

function bigShoeRebounds(){
    // want to figure a clean method to cross-check the shoe-size for this
    console.log(Object.values(players()[]))
    return Object.values(players())
}
bigShoeRebounds();


    



















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
