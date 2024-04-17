let modInfo = {
	name: "The function Tree",
	id: "uitfr",
	author: "User incremental",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal(1), // Used for hard resets and new players
	offlineLimit: 0.1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.4.5",
	name: "Display changes",
}

let changelog = `<h1>Changelog:</h1><br>
	<h4>v0.4.5</h4>
		-Upgrade font color is black now.<br>
		-Stage 0 formula color is rgb(205,125,105) now.<br>
		-change the clickables and challenges for color in stage 0.<br>
		-Added a challenge.<br>
	<h3>v0.4</h3>
		-Added 15 upgrades.<br>
		-Added charger.<br>
	<h3>v0.3</h3><br>
		- Added 7 upgrades.<br>
		- Added 4 challenges.<br>
		- Can reach stage 1.<br>
	<h3>v0.1</h3><br>
		- Added Sacrifice.<br>
		- Added 10 upgrades.<br>
	<h3>v0.0</h3><br>
		- Added function.<br>
		- Added 5 upgrades.`

let winText = `You've reach the current end of game,congrats!`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(1)
}

// Determines if it should show points/sec
function canGenPoints(){
	return hasUpgrade("f",11)||hasUpgrade("f",61)
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1.1)
	gain=gain.plus(player.f.adder)
	gain=gain.times(player.f.multiplier)
	if(hasAchievement("f",35)) gain=gain.times(1.05)
	gain=gain.pow(player.f.exp)
	if(player.f.ftype==0) gain=gain.slog()
	if(player.f.ftype==1) gain=Decimal.log(gain,player.f.y)
	if(hasUpgrade("f",42)) gain=gain.times(upgradeEffect("f",42))
	if(inChallenge("f",31)) gain=gain.div(player.f.y.pow(((challengeCompletions("f",31)+1)*0.25)))
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return false
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}