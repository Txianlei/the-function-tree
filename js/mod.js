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
	num: "1.0",
	name: "True-release",
}

let changelog = `
	<h1><b>Current endgame: Code accepted.</h1><br><br>
	<h1>Changelog:</h1><br><br>
	<h3>v1.0</h3><br>
		-Added 9 layers.<br>
		-Added lots of upgrades.<br>
		-Added lots of challenges.<br>
		-Added lots of buyables.<br>
		-Fixed lots of bugs.<br>
		-Added 30 achievements.<br><br>
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
		- Added 5 upgrades.<br>
		<br><br><br><br>
		<br><br><br><br>
		<br><br><br><br>
		<br><br><br><br>
		<br><br><br><br>
		<br><br><br><br>
		<br><br><br><br>
		<br><br><br><br>
		<br><br><br><br>
		<br><br><br><br>
		<br><br><br><br>
		<br><br>5<br><br>
		<br><br><br><br>
		<br><br><br><br>`

let winText = `You've reach the current end of game,congrats!`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(1)
}

// Determines if it should show points/sec
function canGenPoints(){
	return hasUpgrade("f",11)||hasUpgrade("f",61)||hasUpgrade("f",111)||hasUpgrade("f",251)||hasUpgrade("f",331)
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	a=new Decimal(0)
	//stage 0 +
	if(hasUpgrade("f",12)) a=a.plus(0.1)
	if(hasUpgrade("f",14)) a=a.plus(upgradeEffect("f",14))
	if(hasUpgrade("f",22)) a=a.plus(upgradeEffect("f",15).times(2).add(1).pow(1.5))
	if(hasUpgrade("f",41)) a=a.plus(10)
	if(hasUpgrade("f",41)&&hasUpgrade("f",42)) a=a.plus(10)        
	if(hasUpgrade("f",41)&&hasUpgrade("f",43)) a=a.plus(10)        
	if(hasUpgrade("f",41)&&hasUpgrade("f",44)) a=a.plus(10)        
	if(hasUpgrade("f",41)&&hasUpgrade("f",45)) a=a.plus(10)
	if(hasAchievement("a",15)&&player.f.ftype==0) a=a.plus(1)
	if(inChallenge("f",21)) a=a.minus(player.f.slog21time).max(0)
	//stage 1 +
	if(hasUpgrade("f",62)) a=a.plus(upgradeEffect("f",62))
	if(hasUpgrade("f",65)) a=a.plus(upgradeEffect("f",65))
	if(hasUpgrade("f",102)) a=a.plus(upgradeEffect("f",102))
	//stage 2 +
	if(hasUpgrade("f",113)) a=a.plus(1)
	if(hasUpgrade("f",114)) a=a.plus(upgradeEffect("f",114))
	if(hasUpgrade("f",121)) a=a.plus(upgradeEffect("f",121))
	if(hasUpgrade("f",221)) a=a.plus(upgradeEffect("f",221))
	if(hasUpgrade("f",131)) a=a.plus(player.f.log10_21time>35 ? new Decimal(0) : new Decimal(15).pow(new Decimal(1.3).pow(challengeCompletions("f",52))))
	//stage 3 +
	if(hasUpgrade("f",252)) a=a.plus(upgradeEffect("f",252))
	if(hasUpgrade("f",261)) a=a.plus(upgradeEffect("f",261))
	if(hasUpgrade("f",174)) a=a.plus(upgradeEffect("f",174))
	if(hasUpgrade("f",234)) a=a.plus(upgradeEffect("f",234))
	//stage 4 +
	a=a.plus(tmp.p.calcboost)
	//LOGY21 DEBUFF
	if(inChallenge("f",41)) a=new Decimal(1)
	//stage 0 *
	if(hasUpgrade("f",24)) a=a.times(2)
	if(hasUpgrade("f",31)) a=a.times(upgradeEffect("f",31))
	if(hasUpgrade("f",44)) a=a.times(upgradeEffect("f",44))
	//stage 1 *
	if(hasUpgrade("f",73)) a=a.times(upgradeEffect("f",73))
	if(hasUpgrade("f",93)) a=a.times(upgradeEffect("f",73))
	if(hasUpgrade("f",104)) a=a.times(5)
	if(player.f.isca&&!inChallenge("f",51)) a=a.times(player.f.caeffect)
	//stage 2 *
	if(hasUpgrade("f",123)) a=a.times(upgradeEffect("f",123))
	if(hasUpgrade("f",181)) a=a.times(3)
	if(hasUpgrade("f",202)) a=a.times(upgradeEffect("f",202))
	//stage 3 *
	if(hasUpgrade("f",271)) a=a.times(upgradeEffect("f",271))
	//stage 4 *
	if(hasUpgrade("p",31)) a=a.times(upgradeEffect("p",31))
	if(hasUpgrade("p",43)) a=a.times(upgradeEffect("p",43))
	if(hasUpgrade("sp",12)) a=a.times(2)
	if(hasUpgrade("hp",23)) a=a.times(tmp.hp.calchpboost)
	if(hasUpgrade("up",21)) a=a.times(upgradeEffect("up",21))
	a=a.times(buyableEffect("p",12))
	//stage 0 ^
	if(hasUpgrade("f",34)) a=a.pow(upgradeEffect("f",34))
	a=a.times(buyableEffect("f",21))
	//stage 1 ^
	if(hasChallenge("f",41)&&player.f.ftype==1) a=a.pow(1.5)
	//stage 2 ^
	if(player.f.log10_21time>15&&inChallenge("f",61)) a=a.pow(0.6)
	//stage 3 ^
	if(hasUpgrade("f",284)) a=a.pow(upgradeEffect("f",284))
	if(hasUpgrade("f",242)) a=a.pow(1.075)
	if(hasUpgrade("f",316)) a=a.pow(1.25)
	a=a.pow(buyableEffect("f",23))
	if(player.f.inneutrondil) a=a.pow(0.2)
	//stage 4 ^
	if(hasUpgrade("up",25)) a=a.pow(1.001)

	m=new Decimal(1)
	//stage 0 +
	if(hasUpgrade("f",13)) m=m.plus(0.25)
	if(hasUpgrade("f",15)) m=m.plus(upgradeEffect("f",15))
	if(hasChallenge("f",21)&&player.f.ftype==0) mult=mult.plus(25)
	//stage 1 +
	if(hasUpgrade("f",64)) m=m.plus(0.4)
	if(hasUpgrade("f",71)) m=m.plus(upgradeEffect("f",71))
	if(hasUpgrade("f",81)) m=m.plus(upgradeEffect("f",81))
	//stage 2 +
	if(hasUpgrade("f",115)) m=m.plus(0.5)
	if(hasUpgrade("f",122)&&(player.f.log10_21time<=5)) m=m.plus(upgradeEffect("f",122))
	if(hasUpgrade("f",141)) m=m.plus(upgradeEffect("f",141))
	if(hasUpgrade("f",191)) m=m.plus(25)
	if(player.f.log10_21time>60) m=m.plus(upgradeEffect("f",202))
	if(hasAchievement("a",75)&&player.f.ftype==2) m=m.plus(1)
	//stage 3 +
	if(hasUpgrade("f",253)) m=m.plus(upgradeEffect("f",253))
	if(hasUpgrade("f",262)) m=m.plus(upgradeEffect("f",262))
	if(hasUpgrade("f",212)) m=m.plus(upgradeEffect("f",212))
	m=m.pow(new Decimal(1.05).pow(challengeCompletions("f",81)))
	//stage 4 +
	m=m.add(tmp.p.calcbuyableboost)
	//LOGY21 DEBUFF
	if(inChallenge("f",41)) m=new Decimal(1)
	//stage 0 *
	if(hasUpgrade("f",21)) m=m.times(upgradeEffect("f",21))
	if(hasUpgrade("f",25)) m=m.times(2)
	if(hasUpgrade("f",45)) m=m.times(upgradeEffect("f",45))
	if(hasChallenge("f",11)) m=m.times(challengeEffect("f",11))
	//stage 1 *
	if(hasUpgrade("f",84)) m=m.times(4)
	if (player.f.iscm&&!inChallenge("f",51))m=m.times(player.f.cmeffect)
	//stage 2 *
	if(hasUpgrade("f",124)) m=m.times(upgradeEffect("f",124))
	if(hasUpgrade("f",151)) m=m.times(3)
	if(hasUpgrade("f",153)||inChallenge("f",52)) m=m.times(upgradeEffect("f",153))
	if(hasUpgrade("f",202)) m=m.times(upgradeEffect("f",202))
	//stage 3 *
	if(hasUpgrade("f",272)) m=m.times(upgradeEffect("f",272))
	if(hasUpgrade("f",285)) m=m.times(3)
	m=m.times(buyableEffect("f",21))
	//stage 4 *
	if(hasUpgrade("p",11)) m=m.times(upgradeEffect("p",11))
	if(hasUpgrade("p",12)) m=m.times(upgradeEffect("p",12))
	if(hasUpgrade("p",22)) m=m.times(upgradeEffect("p",22))
	if(hasUpgrade("p",45)) m=m.times(upgradeEffect("p",45))
	if(hasUpgrade("sp",12)) m=m.times(2)
	if(hasUpgrade("sp",14)) m=m.times(upgradeEffect("sp",14))
	if(hasUpgrade("hp",34)) m=m.times(upgradeEffect("hp",34))
	if(hasUpgrade("pu",15)) m=m.times(upgradeEffect("pu",15))
	if(hasUpgrade("up",23)) m=m.times(upgradeEffect("up",23))
	if(hasUpgrade("su",14)) m=m.times("1e576")
	if(hasUpgrade("su",15)) m=m.times(upgradeEffect("su",15))
	m=m.times(buyableEffect("p",11))
	m=m.times(tmp.sp.calcspboost)
	m=m.times(tmp.r.getreboost)
	m=m.times(Decimal.pow(1.5,player.r.rt))
	if((player.r.rngseed1[0]=='1'||player.r.rngseed1[0]=='4'||player.r.rngseed1[0]=='7')&&player.r.allowrng1) m=m.times(tmp.r.calcrng1boost[3])
	if(((player.r.rngseed2[0]/1)>=5&&(player.r.rngseed2[1]/1)<=6)&&player.r.allowrng2) m=m.times(tmp.r.calcrng2boost[5])
	if(((player.r.rngseed3[0]=='2')||(player.r.rngseed3[0]=='5')||(player.r.rngseed3[0]=='8'))&&player.r.allowrng3) m=m.times(tmp.r.calcrng3boost[3])  
	if((player.r.rngseed5[0]>='7'&&player.r.rngseed5[1]<='4')&&player.r.allowrng5) m=m.times(tmp.r.calcrng5boost[5]) 
	//stage 0 ^
	if(hasUpgrade("f",33)) m=m.pow(upgradeEffect("f",33))
	if(inChallenge("f",11)) m=m.sqrt()
	//stage 1 ^
	if(hasAchievement("a",55)&&player.f.ftype==1) m=m.pow(1.05)
	//stage 2 ^
	if(hasUpgrade("f",152)) m=m.pow(1.1)
	//stage 3 ^
	if(hasUpgrade("f",205)) m=m.pow(1.075)
	if(inChallenge("f",81)) m=m.pow(new Decimal(0.995).pow(player.f.exp21time))
	m=m.pow(buyableEffect("f",41))
	if(player.f.inneutrondil) m=m.pow(0.2)
	//stage 4^
	if(hasUpgrade("sp",22)) m=m.pow(1.1)
	if(hasUpgrade("sp",35)) m=m.pow(1.2)
	m=m.pow(tmp.c.calcshardboost)
	if(player.c.choose32&&player.c.isbegun) m=m.pow(0.3)
	if(player.r.rc1&&player.r.rcbegun) m=m.pow(0.85)
	if(player.r.rc3&&player.r.rcbegun) m=m.pow(Math.abs(Math.sin((player.r.points.min(1e300).toNumber())))*0.75)
	if((player.r.rngseeda=='4'||player.r.rngseeda=='9')&&player.r.allowrnga) m=m.pow(0.4)

	let gain = player.f.ftype>=4 ? new Decimal(1) : new Decimal(1.1)
	gain=gain.plus(a)
	gain=gain.times(m)
	if(hasAchievement("a",35)) gain=gain.times(1.05)
	if(hasAchievement("a",205)) gain=gain.times(10)
	if(player.f.ftype<=2) gain=gain.pow(player.f.exp)
	if(player.f.ftype==0) gain=gain.slog()
	if(player.f.ftype==1) gain=Decimal.log(gain,player.f.y)
	if(player.f.ftype==2) gain=gain.log10()
	if(player.f.ftype==3) gain=gain.pow(player.f.k)
	if(player.f.ftype!=4) gain=gain.times(tmp.f.calctmult)
	if(player.f.ftype!=4) gain=gain.pow(tmp.f.calctrueexp)
	if(player.f.ftype==4) gain=gain.min("e2e7")
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
	return player.f.code=="ACCEPTED"
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