addLayer("f", {
    name: "function", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "F", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        ftype: 0,
        adder: new Decimal(0),
        multiplier: new Decimal(1),
        exp: new Decimal(1),
        isSacrifice: false,
        challengechecker: new Decimal(0),
        slog21time: 0,
        cfunc: "",
    }},
    color: "#FFFFFF",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    tabFormat: {
        "Slog(x)":{
            content:[
                ["display-text",
                function() { return 'Your point gain is:' },
                {"font-size":"25px"}],
                ["display-text",
                    function() { return player.f.cfunc+"="+format(getPointGen())+"/s" },
                    { "color": "red", "font-size": "50px", "font-family": "Georgia", "text-shadow" : "0 0 15px red" }],
                "blank",
                "blank",
                "blank",
                "upgrades",
            ],
            unlocked(){return player.f.ftype==0}
        },
        "log10(x)":{
            content:[
                ["display-text",
                function() { return 'Your point gain is:' },
                {"font-size":"25px"}],
                ["display-text",
                    function() { return player.f.cfunc+"="+format(getPointGen())+"/s" },
                    { "color": "orange", "font-size": "50px", "font-family": "Georgia", "text-shadow" : "0 0 15px orange" }],
                "blank",
                "blank",
                "blank",
                "upgrades",
            ],
            unlocked(){return player.f.ftype==1}
        },
        "Resets":{
            content:[
                ["display-text",
                function() { return "Your function stage is " + player.f.ftype },
                { "color": "red", "font-size": "25px", "text-shadow" : "0 0 10px red"},],
                "blank",
                "clickables"
            ],
            unlocked(){return tmp.f.clickables[11].unlocked}
        }, 
        "Challenges":{
            content:[
                "challenges"
            ],
            unlocked(){return player.f.challengechecker.gte(1)||hasUpgrade("f",35)}
        },
    },
    update(diff){
        player.f.points=player.points
        player.f.adder=tmp.f.calcadder
        player.f.multiplier=tmp.f.calctimer
        if(inChallenge("f",21)) player.f.slog21time+=(4*diff)
        if(inChallenge("f",22)) player.points=player.points.min(5000)
        if(player.f.ftype==0) player.f.cfunc="slog"+(player.f.exp.eq(1)?"":"(")+(player.f.multiplier.neq(1)?"(":"")+"(x"+(player.f.adder.eq(0)?")":"+"+(`${format(player.f.adder)})`))+(player.f.multiplier.neq(1)?"*"+(`${format(player.f.multiplier)}`)+")":"")+(player.f.exp.eq(1)?"":"^"+(`${format(player.f.exp)}`)+")"+(hasUpgrade("f",42)?"*"+format(upgradeEffect("f",42)):""))
        if(player.f.ftype==1) player.f.cfunc="log10"+(player.f.exp.eq(1)?"":"(")+(player.f.multiplier.neq(1)?"(":"")+"(x"+(player.f.adder.eq(0)?")":"+"+(`${format(player.f.adder)})`))+(player.f.multiplier.neq(1)?"*"+(`${format(player.f.multiplier)}`)+")":"")+(player.f.exp.eq(1)?"":"^"+(`${format(player.f.exp)}`)+")")
    },
    calcadder(){
        let add=new Decimal(0)
        if(hasUpgrade("f",12)) add=add.plus(0.1)
        if(hasUpgrade("f",14)) add=add.plus(upgradeEffect("f",14))
        if(hasUpgrade("f",22)) add=add.plus(upgradeEffect("f",15).times(2).add(1).pow(1.5))
        if(hasUpgrade("f",41)) add=add.plus(10)
        if(hasUpgrade("f",41)) add=add.plus(10)        
        if(hasUpgrade("f",41)&&hasUpgrade("f",42)) add=add.plus(10)        
        if(hasUpgrade("f",41)&&hasUpgrade("f",43)) add=add.plus(10)        
        if(hasUpgrade("f",41)&&hasUpgrade("f",44)) add=add.plus(10)        
        if(hasUpgrade("f",41)&&hasUpgrade("f",45)) add=add.plus(10)
        if(hasAchievement("a",15)&&player.f.ftype==0) add=add.plus(1)
        if(inChallenge("f",21)) add=add.minus(player.f.slog21time).max(0)
        if(hasUpgrade("f",24)) add=add.times(2)
        if(hasUpgrade("f",31)) add=add.times(upgradeEffect("f",31))
        if(hasUpgrade("f",44)) add=add.times(upgradeEffect("f",44))
        if(hasUpgrade("f",34)) add=add.pow(upgradeEffect("f",34))
        return add
    },
    calctimer(){
        let mult=new Decimal(1)
        if(hasUpgrade("f",13)) mult=mult.plus(0.25)
        if(hasUpgrade("f",15)) mult=mult.plus(upgradeEffect("f",15))
        if(hasChallenge("f",21)&&player.f.ftype==0) mult=mult.plus(25)
        if(hasUpgrade("f",21)) mult=mult.times(upgradeEffect("f",21))
        if(hasUpgrade("f",25)) mult=mult.times(2)
        if(hasUpgrade("f",45)) mult=mult.times(upgradeEffect("f",45))
        if(hasChallenge("f",11)) mult=mult.times(challengeEffect("f",11))
        if(hasUpgrade("f",33)) mult=mult.pow(upgradeEffect("f",33))
        if(inChallenge("f",11)) mult=mult.sqrt()
        return mult
    },
    calcexponent(){
        let expo=new Decimal(1)
        if(hasChallenge("f",12)) expo=expo.plus(player.points.log10().pow(1.15).add(1).ln())//Sacrifice after slog12
        else if(hasUpgrade("f",32))expo=expo.plus(player.points.plus(1).ln().cbrt().minus(1))//Sacrifice after XII
        else expo=expo.plus(player.points.plus(1).log10().sqrt().minus(1))//Sacrifice when unlocked
        if(inChallenge("f",22)) expo=expo.times(player.points.pow(200).plus(1).ln().pow(player.points.plus(1).slog()).pow(player.f.exp.div(hasUpgrade("f",52) ? 30 : hasUpgrade("f",51) ? 40 : 50)).max(0)).min("1eeeeeeeeeeeeeeeeeeee20")
        return expo.add(hasAchievement("a",25)&&player.f.ftype==0 ? 0.01 : 0).max(1)
    },
    upgrades:{
        11:{
            title:"I",
            description(){return "Generate 1.1 points per second."},
            cost(){return new Decimal(1)},
            unlocked(){ 
                return player.f.unlocked&&player.f.ftype==0
            },
            style:{"color":"rgb(255,0,0)","text-shadow" : "0 0 5px red",},
            canAfford(){return player.points.gte(1)},
            pay(){return player.points=player.points.minus(1)}
        },
        12:{
            title:"II",
            description(){return "Add 0.1 to x."},
            cost(){return new Decimal(1)},
            unlocked(){ 
                return hasUpgrade("f",11)&&player.f.ftype==0
            },
            style:{"color":"rgb(240,0,0)","text-shadow" : "0 0 5px rgb(240,0,0)"},
            canAfford(){return player.points.gte(1)},
            pay(){return player.points=player.points.minus(1)}
        },
        13:{
            title:"III",
            description(){return "Add 0.25 to the factor of x."},
            cost(){return new Decimal(2)},
            unlocked(){ 
                return hasUpgrade("f",12)&&player.f.ftype==0
            },
            style:{"color":"rgb(225,0,0)","text-shadow" : "0 0 5px rgb(225,0,0)"},
            canAfford(){return player.points.gte(2)},
            pay(){return player.points=player.points.minus(2)}
        },
        14:{
            title:"IV",
            description(){return "Add a number which is based on points to x."},
            cost(){return new Decimal(5)},
            unlocked(){ 
                return hasUpgrade("f",13)&&player.f.ftype==0
            },
            style:{"color":"rgb(210,0,0)","text-shadow" : "0 0 5px rgb(210,0,0)"},
            effect(){return player.points.plus(1).slog().pow(2).max(0)},
            effectDisplay(){return `+${format(upgradeEffect("f",14))}`},
            canAfford(){return player.points.gte(5)},
            pay(){return player.points=player.points.minus(5)}
        },
        15:{
            title:"V",
            description(){return "Add a number which is based on the adder of x to the factor of x."},
            cost(){return new Decimal(20)},
            unlocked(){ 
                return hasUpgrade("f",14)&&player.f.ftype==0
            },
            style:{"color":"rgb(195,0,0)","text-shadow" : "0 0 5px rgb(195,0,0)"},
            effect(){return player.f.adder.plus(1).slog().pow(0.8).div(2).max(0)},
            effectDisplay(){return `+${format(upgradeEffect("f",15))}`},
            canAfford(){return player.points.gte(20)},
            pay(){return player.points=player.points.minus(20)}
        },
        21:{
            title:"VI",
            description(){return "Points can grow the factor of x"},
            cost(){return new Decimal(30)},
            unlocked(){ 
                return hasUpgrade("f",15)&&player.f.ftype==0
            },
            style:{"color":"rgb(180,0,0)","text-shadow" : "0 0 5px rgb(180,0,0)"},
            effect(){return player.points.plus(1).slog().pow(hasUpgrade("f",43) ? 43 : 7).add(1).log10().add(1).max(1)},
            effectDisplay(){return `x${format(upgradeEffect("f",21))}`},
            canAfford(){return player.points.gte(30)},
            pay(){return player.points=player.points.minus(30)}
        },
        22:{
            title:"VII",
            description(){return "Upgrade V also affects the adder of x with a stronger effect"},
            cost(){return new Decimal(50)},
            unlocked(){ 
                return hasUpgrade("f",21)&&player.f.ftype==0
            },
            style:{"color":"rgb(165,0,0)","text-shadow" : "0 0 5px rgb(165,0,0)"},
            canAfford(){return player.points.gte(50)},
            pay(){return player.points=player.points.minus(50)}
        },
        23:{
            title:"VIII",
            description(){return player.f.isSacrifice ? "Unlock a new upgrade." : "Unlock sacrifice."},
            cost(){return new Decimal(100)},
            unlocked(){ 
                return hasUpgrade("f",22)&&player.f.ftype==0
            },
            style:{"color":"rgb(150,0,0)","text-shadow" : "0 0 5px rgb(150,0,0)"},
            canAfford(){return player.points.gte(100)},
            pay(){return player.points=player.points.minus(100)}
        },
        24:{
            title:"IX",
            description(){return "The adder of x is 2 times bigger."},
            cost(){return new Decimal(60)},
            unlocked(){ 
                return hasUpgrade("f",23)&&player.f.ftype==0&&player.f.isSacrifice
            },
            style:{"color":"rgb(135,0,0)","text-shadow" : "0 0 5px rgb(135,0,0)"},
            canAfford(){return player.points.gte(60)},
            pay(){return player.points=player.points.minus(60)}
        },
        25:{
            title:"X",
            description(){return "The factor of x is 2 times bigger."},
            cost(){return new Decimal(75)},
            unlocked(){ 
                return hasUpgrade("f",24)&&player.f.ftype==0&&player.f.isSacrifice
            },
            style:{"color":"rgb(120,0,0)","text-shadow" : "0 0 5px rgb(120,0,0)"},
            canAfford(){return player.points.gte(75)},
            pay(){return player.points=player.points.minus(75)}
        },
        31:{
            title:"XI",
            description(){return "Multiply the adder of x based on the facor of x."},
            cost(){return new Decimal(90)},
            unlocked(){ 
                return hasUpgrade("f",25)&&player.f.ftype==0&&player.f.isSacrifice
            },
            style:{"color":"rgb(105,0,0)","text-shadow" : "0 0 5px rgb(105,0,0)"},
            effect(){return player.f.multiplier.plus(10).log10().pow(2).div(0.5).max(1)},
            effectDisplay(){return `x${format(upgradeEffect("f",31))}`},
            canAfford(){return player.points.gte(90)},
            pay(){return player.points=player.points.minus(90)}
        },
        32:{
            title:"XII",
            description(){return "Sacrifice formula is better."},
            cost(){return new Decimal(120)},
            unlocked(){ 
                return hasUpgrade("f",31)&&player.f.ftype==0&&player.f.isSacrifice
            },
            style:{"color":"rgb(90,0,0)","text-shadow" : "0 0 5px rgb(90,0,0)"},
            canAfford(){return player.points.gte(120)},
            pay(){return player.points=player.points.minus(120)}
        },
        33:{
            title:"XIII",
            description(){return "The exponent of x can grow the factor of x."},
            cost(){return new Decimal(150)},
            unlocked(){ 
                return hasUpgrade("f",32)&&player.f.ftype==0&&player.f.isSacrifice
            },
            style:{"color":"rgb(75,0,0)","text-shadow" : "0 0 5px rgb(75,0,0)"},
            effect(){return player.f.exp.sqrt().max(1)},
            effectDisplay(){return `^${format(upgradeEffect("f",33))}`},
            canAfford(){return player.points.gte(150)},
            pay(){return player.points=player.points.minus(150)}
        },
        34:{
            title:"XIV",
            description(){return "The exponent of x can grow the adder of x."},
            cost(){return new Decimal(175)},
            unlocked(){ 
                return hasUpgrade("f",33)&&player.f.ftype==0&&player.f.isSacrifice
            },
            style:{"color":"rgb(60,0,0)","text-shadow" : "0 0 5px rgb(60,0,0)"},
            effect(){return inChallenge("f",12) ? new Decimal(1):player.f.exp.div(0.5).sqrt().max(1)},
            effectDisplay(){return `^${format(upgradeEffect("f",34))}`},
            canAfford(){return player.points.gte(175)},
            pay(){return player.points=player.points.minus(175)}
        },
        35:{
            title:"XV",
            description(){return "Unlock challenges."},
            cost(){return new Decimal(200)},
            unlocked(){ 
                return hasUpgrade("f",34)&&player.f.ftype==0&&player.f.isSacrifice
            },
            style:{"color":"rgb(255,0,0)","text-shadow" : "0 0 5px rgb(255,0,0)"},
            canAfford(){return player.points.gte(200)},
            pay(){return player.points=player.points.minus(200)}
        },
        41:{
            title:"XVI",
            description(){return "Each upgrade in this row you've bought adds 10 to the base adder of x."},
            cost(){return new Decimal(125)},
            unlocked(){ 
                return hasChallenge("f",12)&&player.f.ftype==0
            },
            style:{"color":"rgb(255,0,0)","text-shadow" : "0 0 5px rgb(255,0,0)"},
            canAfford(){return player.points.gte(125)},
            pay(){return player.points=player.points.minus(125)}
        },
        42:{
            title:"XVII",
            description(){return "Points can grow their gain after slog."},
            cost(){return new Decimal(145)},
            unlocked(){ 
                return hasUpgrade("f",41)&&player.f.ftype==0
            },
            style:{"color":"rgb(255,0,0)","text-shadow" : "0 0 5px rgb(255,0,0)"},
            canAfford(){return player.points.gte(145)},
            pay(){return player.points=player.points.minus(145)},
            effect(){return player.points.add(1).pow(10).log10().cbrt().max(1)},
            effectDisplay(){return `x${format(upgradeEffect("f",42))}`},
        },
        43:{
            title:"XVIII",
            description(){return "Upgrade VI's effect is stronger."},
            cost(){return new Decimal(250)},
            unlocked(){ 
                return hasUpgrade("f",42)&&player.f.ftype==0
            },
            style:{"color":"rgb(255,0,0)","text-shadow" : "0 0 5px rgb(255,0,0)"},
            canAfford(){return player.points.gte(250)},
            pay(){return player.points=player.points.minus(250)},
        },
        44:{
            title:"XIX",
            description(){return "The adder of x boosts itself."},
            cost(){return new Decimal(340)},
            unlocked(){ 
                return hasUpgrade("f",43)&&player.f.ftype==0
            },
            style:{"color":"rgb(255,0,0)","text-shadow" : "0 0 5px rgb(255,0,0)"},
            canAfford(){return player.points.gte(340)},
            pay(){return player.points=player.points.minus(250)},
            effect(){return new Decimal(player.f.adder.log10()).pow(player.f.adder.add(1).slog()).div(3).max(1)},
            effectDisplay(){return `x${format(upgradeEffect("f",44))}`},
        },
        45:{
            title:"XX",
            description(){return "The factor of x boosts itself, unlock a new challenge."},
            cost(){return new Decimal(500)},
            unlocked(){ 
                return hasUpgrade("f",44)&&player.f.ftype==0
            },
            style:{"color":"rgb(255,0,0)","text-shadow" : "0 0 5px rgb(255,0,0)"},
            canAfford(){return player.points.gte(500)},
            pay(){return player.points=player.points.minus(500)},
            effect(){return new Decimal(player.f.multiplier.ln()).pow(player.f.multiplier.add(1).slog()).div(5).max(1)},
            effectDisplay(){return `x${format(upgradeEffect("f",45))}`},
        },
        51:{
            title:"XXI",
            description(){return "Sacrifice exp-divider is 40 instead of 50."},
            cost(){return new Decimal(700)},
            unlocked(){ 
                return inChallenge("f",22)&&player.f.ftype==0&&player.f.exp.gte(5)
            },
            style:{"color":"rgb(255,0,0)","text-shadow" : "0 0 5px rgb(255,0,0)"},
            canAfford(){return player.points.gte(700)},
            pay(){return player.points=player.points.minus(700)},
        },
        52:{
            title:"XXII",
            description(){return "Sacrifice exp-divider is 30 instead of 40."},
            cost(){return new Decimal(800)},
            unlocked(){ 
                return inChallenge("f",22)&&player.f.ftype==0&&player.f.exp.gte(12.5)
            },
            style:{"color":"rgb(255,0,0)","text-shadow" : "0 0 5px rgb(255,0,0)"},
            canAfford(){return player.points.gte(800)},
            pay(){return player.points=player.points.minus(800)},
        },
    },
    clickables:{
        11:{
            title(){return "Sacrifice your function"},
            display(){return player.f.exp.gt(tmp.f.calcexponent) ? `Maybe not now..... but it's still clickable!
                currently:+^${format(tmp.f.calcexponent.minus(player.f.exp).max(0))}
                total boost:+^${format(player.f.exp.minus(1))}`:`Sacrifice all the points and upgrades to give this function an exponent.
                             currently:+^${format(tmp.f.calcexponent.minus(player.f.exp).max(0))}
                             total boost:+^${format(player.f.exp.minus(1))}`},
            style:{"height":"300px","width":"300px","background-color":"#000000","border-radius":"0%","border":"6px solid","border-color":"red","color":"red","text-shadow":"0 0 15px red","font-size":"15px"},
            unlocked(){return hasUpgrade("f",23)||player.f.isSacrifice},
            onClick(){
                player.f.isSacrifice=true
                player.f.exp=player.f.exp.max(tmp.f.calcexponent)
                player.points=new Decimal(1)
                player.f.upgrades=[]
            },
            canClick(){return hasUpgrade("f",23)||player.f.isSacrifice}
        },
        12:{
            title(){return "Upgrade your function"},
            display(){
                if (player.f.ftype==0){
                    return `Reset all the progress but level up the function by 1.
                    All upgrades will be removed.
                    The formula of point gain will be log10(x).
                    The value of x is 4 times bigger.
                    All the slog chanllenges will be kept.
                    `
                }
            },
            style:{"height":"300px","width":"300px","background-color":"#000000","border-radius":"0%","border-color":"white","border":"6px solid","color":"white","text-shadow":"0 0 15px white","font-size":"15px","font-family":""},
            unlocked(){
                if(player.f.ftype==0){
                    return hasChallenge("f",22)
                }
            },
            onClick(){
                player.f.ftype+=1
                player.points=new Decimal(1)
                player.f.upgrades=[]
                player.f.adder=new Decimal(0)
                player.f.multiplier=new Decimal(1)
                player.f.exp=new Decimal(1)
            },
            canClick(){return hasUpgrade("f",23)||player.f.isSacrifice}
        },
    },
    challenges:{
        11:{
            name:"slog 11",
            challengeDescription:"The factor of x is square-rooted.",
            unlocked(){return hasUpgrade("f",35)||player.f.challengechecker.gte(1)},
            goalDescription(){return "145 points"},
            style:{"border-radius":"2%","border-color":"rgb(255,0,0)","color":"red","font-size":"18px","text-shadow":"0 0 15px red"},
            rewardDescription:"Upgrade XIV grows the factor of x with a multiplier.",
            canComplete(){return player.points.gte(145)},
            marked(){return hasChallenge("f",11)},
            onEnter(){
                player.f.challengechecker=player.f.challengechecker.plus(1)
                player.points=new Decimal(0)
            },
            rewardEffect(){return hasChallenge("f",11)&&hasUpgrade("f",34) ? upgradeEffect("f",34).pow(20.24).log10().max(1) : new Decimal(1)},
            rewardDisplay(){return `x${format(this.rewardEffect())}`}
        },
        12:{
            name:"slog 12",
            challengeDescription:"Run 'slog 11' and upgrade XIV is disabled.",
            unlocked(){return hasChallenge("f",11)},
            goalDescription(){return "55 points"},
            style:{"border-radius":"2%","border-color":"rgb(255,0,0)","color":"red","font-size":"18px","text-shadow":"0 0 15px red"},
            rewardDescription:"Sacrifice formula is better and unlock a new upgrade.",
            canComplete(){return player.points.gte(55)},
            marked(){return hasChallenge("f",12)},
            onEnter(){
                player.points=new Decimal(0)
            },
            countsAs:[11]
        },
        21:{
            name:"slog 21",
            challengeDescription:"Decrease the base adder of x by 4 per second.",
            unlocked(){return hasUpgrade("f",45)||player.f.challengechecker.gte(2)},
            goalDescription(){return "400 points"},
            style:{"border-radius":"2%","border-color":"rgb(255,0,0)","color":"red","font-size":"18px","text-shadow":"0 0 15px red"},
            rewardDescription:"Add 25 to the base multiplier of x in stage 0.",
            canComplete(){return player.points.gte(400)},
            marked(){return hasChallenge("f",21)},
            onEnter(){
                player.f.challengechecker=player.f.challengechecker.plus(1)
                player.points=new Decimal(0)
                player.f.slog21time=0
            },
        },
        22:{
            name:"slog final",
            challengeDescription:"Run 'slog 12',sacrifice formula is extremly stronger(Entering this will reset your exponent and do a sacrifice without bonus).",
            unlocked(){return hasChallenge("f",21)},
            goalDescription(){return "5000 points(Most points you can get in this challenge)"},
            style:{"border-radius":"2%","border-color":"rgb(255,0,0)","background":"radial-gradient(rgba(255,0,0,0.7),rgba(255,165,0,0.7),rgba(255,255,0,0.7),rgba(0,255,0,0.7),rgba(0,255,255,0.7),rgba(0,0,255,0.7),rgba(140,0,255,0.7))","color":"rgb(0,0,0)","font-size":"18px","text-shadow":"0 0 15px white"},
            rewardDescription:"You can upgrade your function",
            canComplete(){return player.points.gte(5000)},
            marked(){return hasChallenge("f",22)},
            onEnter(){
                player.points=new Decimal(1)
                player.f.exp=new Decimal(1)
                player.f.upgrades=[]
            },
            onExit(){
                player.points=new Decimal(1)
                player.f.exp=new Decimal(1)
            },
            onComplete(){
                player.points=new Decimal(1)
                player.f.exp=new Decimal(1)
            },
            countsAs:[12]
        }
    }
})
addLayer("a", {
    startData() { return {
        unlocked: true,
    }},
    color: "yellow",
    row: "side",
    layerShown() {return true}, 
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Achievements")
    },
    achievements: {
        11: {
            name: "Welcome!",
            style:{"border-radius":"0%"},
            done() {return hasUpgrade("f",11) },
            tooltip: "Make the function makes sense.",
        },
        12: {
            name: "2 is a lot",
            style:{"border-radius":"0%"},
            done() {return  player.points.gte(2)},
            tooltip: "Earn 2 points.",
        },
        13: {
            name: "I've got some adders",
            style:{"border-radius":"0%"},
            done() {return  player.f.adder.gte(1)&&player.f.ftype==0},
            tooltip: "Let the adder of x bigger than 1 in stage 0.",
        },
        14: {
            name: "Multi-function",
            style:{"border-radius":"0%"},
            done() {return  player.f.multiplier.gte(2)&&player.f.ftype==0},
            tooltip: "Let the factor of x bigger than 2 in stage 0.",
        },
        15: {
            name: `VA==`,
            style:{"border-radius":"0%","border-color":"red"},
            done() {return player.points.gte(10)&&player.f.multiplier.eq(1)&&player.f.ftype==0},
            tooltip: `R2V0IDEwIHBvaW50cy
            B3aXRob3V0IGhhdmluZ
            yBhbnkgbXVsdGlwbG
            llciBpbiBzdGFnZSA
            wLg==
            reward: Add 1 to the base adder of x only in stage 0.`,
        },
        21: {
            name: "Gods are pleased",
            style:{"border-radius":"0%"},
            done() {return hasUpgrade("f",23) },
            tooltip: "Unlock sacrifice.",
        },
        22: {
            name: "What is change?",
            style:{"border-radius":"0%"},
            done() {return hasUpgrade("f",24) },
            tooltip: "Buy upgrade IV",
        },
        23: {
            name: "slog is lufrewop",
            style:{"border-radius":"0%"},
            done() {return player.points.gte(100) },
            tooltip: "Earn 100 points",
        },
        24: {
            name: "Noise.",
            style:{"border-radius":"0%"},
            done() {return player.f.exp.gte(1.69) },
            tooltip: "Make the exponent of x bigger than 1.69",
        },
        25: {
            name: `SA==`,
            style:{"border-radius":"0%","border-color":"red"},
            done() {return player.f.exp.eq(1.69)},
            tooltip: `TWFrZSB0aGUgZXhwb25lb
            nQgb2YgeCBleGFjdGx
            5IDEuNjku
            reward: Add 0.01 to sacrifice bonus only in stage 0.`,
        },
        31: {
            name: "A challenging day",
            style:{"border-radius":"0%"},
            done() {return player.f.challengechecker.neq(0) },
            tooltip: "Enter a challenge.",
        },
        32: {
            name: "Gods are confused",
            style:{"border-radius":"0%"},
            done() {return inChallenge("f",22)},
            tooltip: "Entering slog final.",
        },
        33: {
            name: "We're on the third!.",
            style:{"border-radius":"0%"},
            done() {return player.points.gte(1000) },
            tooltip: "Earn 1000 points.",
        },
        34: {
            name: "Bye bye-moment",
            style:{"border-radius":"0%"},
            done() {return player.f.ftype==1 },
            tooltip: "Reach function stage 1.",
        },
        35: {
            name: `RQ==`,
            style:{"border-radius":"0%","border-color":"red"},
            done() {return player.f.exponent.gte("eeeeeeeeeeeeeeeeeee20")},
            tooltip: `TWFrZSB0aGUgZXhwb25l
            bnQgb2YgeCAxRjIwLg==
            reward: 1.05x Point gain.`,
        },
        update(diff) {	// Added this section to call adjustNotificationTime every tick, to reduce notification timers
            adjustNotificationTime(diff);
        },
    },
    tabFormat: [
        "blank", 
        ["display-text", function() { return"Achievements:"+player.a.achievements.length+"/9" }], 
        ["display-text", function() { return`Achievements on the last column are chanllenging, complete them to get a bonus!(Maybe you can do them later)` }], 
        "blank", "blank","blank","blank",
        "achievements",
    ],
})