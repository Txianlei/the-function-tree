let modInfo = {
	name: "The function Tree",
	id: "uitf",
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
	num: "0.9",
	name: "Dilation",
}

let changelog = `
	<h1><b>Current endgame: Reach stage 4.</h1><br><br>
	<h1>Changelog:</h1><br><br>
	<h3>v0.9</h3><br>
		-Added dilation.<br>
		-Added 18 upgrades.<br>
		-Added 3 challenges.<br>
		-Added 6 buyables.<br>
		-Fixed some bugs.<br>
		-Added 10 achievements.<br><br>
	<h3>v0.8</h3><br>
		-Added 15 upgrades.<br>
		-Added 18 studies.<br>
		-Added 4 challenges.<br>
		-Fixed some bugs.<br>
		-Added 5 achievements.<br><br>
	<h3>v0.7</h3><br>
		-Added 10 studies.<br>
		-Added 2 challenges.<br>
		-Can reach stage 3.<br>
		-Fixed some bugs.<br>
		-Rebalanced minigame.<br>
		-Added 5 achievements.<br><br>
	<h4>v0.6.6</h4><br>
		-Added 3 studies.<br>
		-Added a minigame.<br>
		-Fixed some bugs.<br><br>
	<h3>v0.6</h3><br>
		-Added 10 upgrades.<br>
		-Added function study.<br>
		-Fixed some bugs.<br>
		-Added 5 achievements.<br><br>
	<h3>v0.5</h3><br>
		-Challenge font color is default now.<br>
		-Added 3 challenges.<br>
		-Fixed some bugs.<br>
		-Added 5 upgrades.<br>
		-Added 10 achievements.<br><br>
	<h4>v0.4.5</h4>
		-Upgrade font color is black now.<br>
		-Stage 0 formula color is rgb(205,125,105) now.<br>
		-change the clickables and challenges for color in stage 0.<br>
		-Added a challenge.<br><br>
	<h3>v0.4</h3><br>
		-Added 15 upgrades.<br>
		-Added charger.<br><br>
	<h3>v0.3</h3><br>
		- Added 7 upgrades.<br>
		- Added 4 challenges.<br>
		- Can reach stage 1.<br><br>
	<h3>v0.1</h3><br>
		- Added Sacrifice.<br>
		- Added 10 upgrades.<br><br>
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
	return hasUpgrade("f",11)||hasUpgrade("f",61)||hasUpgrade("f",111)||hasUpgrade("f",251)
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1.1)
	gain=gain.plus(player.f.adder)
	gain=gain.times(player.f.multiplier)
	if(hasAchievement("a",35)) gain=gain.times(1.05)
	gain=gain.pow(player.f.exp)
	if(player.f.ftype==0) gain=gain.slog()
	if(player.f.ftype==1) gain=Decimal.log(gain,player.f.y)
	if(player.f.ftype==2) gain=gain.log10()
	if(player.f.ftype==3) gain=gain.pow(player.f.k)
	gain=gain.times(tmp.f.calctmult)
	gain=gain.pow(tmp.f.calctrueexp)
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
	return player.f.ftype==4
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