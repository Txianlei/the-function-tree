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
	num: "0.6.6",
	name: "Mini-update",
}

let changelog = `
	ENDING FILE:eyJ0YWIiOiJvcHRpb25zLXRhYiIsIm5hdlRhYiI6I`
	+`nRyZWUtdGFiIiwidGltZSI6MTcxNDIyNTM1NDE0MSwibm90aWZ5Ijp7fS`+
	`widmVyc2lvblR5cGUiOiJ1aXRmIiwidmVyc2lvbiI6IjAuNi42IiwidGltZVBsYXllZCI6Mzg5NjkuMzg5NDU3ODM1NDcsIm`+
	`tlZXBHb2luZyI6ZmFsc2UsImhhc05hTiI6dHJ1ZSwicG9pbnRzIjoiNzczMDYuMDU3OTk4NDM4NzIiLCJzdWJ0YWJzIjp7ImNoYW5nZWxvZy10YWIiOnt9LCJmIjp7Im1haW5UYWJzIjoibG9nMTAoeCkifX0sImxhc3RTYWZlVGFiIjoiZiIsImluZm9ib3hlcyI6e30sImluZm8tdGFiIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6Mzg5NjkuMzg5NDU3ODM1NDcsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwib3B0aW9ucy10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozODk2OS4zODk0NTc4MzU0NywiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJjaGF`+
	`uZ2Vsb2ctdGFiIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6Mzg5NjkuMzg5NDU3ODM1NDcsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiZiI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiNzczMDYuMDU3OTk4NDM4NzIiLCJmdHlwZSI6MiwiYWRkZXIiOiIxODY1MTYuNDY0NzA2NDgzNDciLCJtdWx0aXBsaWVyIjoiMTg5NTMwNjYuOTcwNzYxNzc2IiwidG90YWxtdWx0IjoiMSIsImV4cCI6IjEuMzQ0NDY2MDQ2Nzc0MiIsImNhcmVxIjoiNDU5ODguNjgyMDYxMjU1NjgiLCJjYWxldmVsIjoiMTMiLCJjYXBvaW50cyI6IjAiLCJjYWVmZmVjdCI6IjQ1MC4zNTk5NjI3MzcwNDk5NSIsImNtcmVxIjoiMjM3MjQuMTI0NDY3MjkwMDc2IiwiY21sZXZlbCI6IjkiLCJjbXBvaW50cyI6IjQwMjMuMjMwMjU2ODk4MDY1NCIsImNtZWZmZWN0IjoiMTA3LjYzNDc0MTE1MjQ3NTQ0IiwiZnVuY3Bvd2VyIjoiMyIsImN1YmVyZXEiOiI5MTczMy4zMzAxOTMyNjg2MyIsImlzU2FjcmlmaWNlIjp0cnVlLCJ0b3RhbHBvd2VyIjoiMjYiLCJjaGFsbGVuZ2VjaGVja2VyIjoiMiIsImlzY2EiOnRydWUsImlzY20iOnRydWUsImlzc3R1ZCI6dHJ1ZSwic2xvZzIxdGltZSI6Nzg2LjQ1OTk5OTk5OTk5MzIsImxvZzEydGltZSI6MCwiY2Z1bmMiOiJsb2cxMCgoKHgrMTg2LDUxNikqMTgsOTUzLDA2NyleMS4zNCkqNS4wMCIsInkiOiIxMDAwIiwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjM4OTY5LjM4OTQ1NzgzNTQ3LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnsiMTEiOiIiLCIxMiI6IiIsIjIxIjoiIiwiMjIiOiIiLCIzMSI6IiJ9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOlsxMTEsMTEyLDExMywxMTQsMTE1LDEyMSwxMjIsMTIzLDEyNCwxMjUsMTMxLDE0MSwxNDIsMTUyLDE1MywxNjEsMTUxLDE3Ml0sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7IjExIjoxLCIxMiI6MSwiMjEiOjEsIjIyIjoxLCIzMSI6MCwiMzIiOjAsIjQxIjoxLCI0MiI6MSwiNTEiOjV9LCJncmlkIjp7fSwicHJldlRhYiI6IiIsImFjdGl2ZUNoYWxsZW5nZSI6bnVsbH0sImEiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozODk2OS4zODk0NTc4MzU0NywiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6WyIxMSIsIjEyIiwiMTMiLCIxNCIsIjIzIiwiMjEiLCIyMiIsIjI1IiwiM`+
	`TUiLCIzMSIsIjI0IiwiMzMiLCIzMiIsIjM1IiwiNDEiLCI0MiIsIjQzIiwiNDQiLCI0NSIsIjUxIiwiNTIiLCI1MyIsIjU0IiwiNTUiLCI2MSIsIjYyIiwiNjMiLCI2NCIsIjY1IiwiMzQiLCI3MSIsIjc1IiwiNzMiLCI3MiIsIjc0Il0sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJtIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIxIiwidG90YWwiOiIwIiwiYmVzdCI6ImVlZWUxOC4wMDY3MjgxMDE1MjkzNTgiLCJyZXNldFRpbWUiOjM3OTAxLjI3NTk4NDg0NTcsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7IjExIjoiMCIsIjEyIjoiMCIsIjEzIjoiMCIsIjE0IjoiMCIsIjIxIjoiMCIsIjIyIjoiMCIsIjIzIjoiMCIsIjI0IjoiMCIsIjMxIjoiMCIsIjMyIjoiMCIsIjMzIjoiMCIsIjM0IjoiMCJ9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7IjExIjoiIiwiMTIiOiIifSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiIsIlBhdXNlZCI6dHJ1ZSwiZnJlZSI6IjAifSwiYmxhbmsiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozODk2OC42MTY0NTc4MzU0NDQsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwidHJlZS10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozODk2OC42MTY0NTc4MzU0NDQsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifX0=`+
	`<br><h1><b>Current endgame: Have study 61.</h1><br><br>
	<h1>Changelog:</h1><br><br>
	<h4>v0.6.6</h4><br>
		-Added 3 studies.<br>
		-Added a minigame.<br>
		-Fixed some bugs.<br>
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
	return hasUpgrade("f",11)||hasUpgrade("f",61)||hasUpgrade("f",111)
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
	gain=gain.times(tmp.f.calctmult)
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
	return hasUpgrade("f",181)
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