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
        careq: new Decimal(10),
        calevel: new Decimal(0),
        capoints: new Decimal(0),
        caeffect: new Decimal(1),
        cmreq: new Decimal(25),
        cmlevel: new Decimal(0),
        cmpoints: new Decimal(0),
        cmeffect: new Decimal(1),
        isSacrifice: false,
        challengechecker: new Decimal(0),
        isca:false,
        iscm:false,
        slog21time: 0,
        log12time: 0,
        cfunc: "",
        y:new Decimal(1000),
    }},
    color: "#FFFFFFEE",
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
                { "color": "rgba(245,120,120)", "font-size": "50px", "font-family": "Bahnschrift", "text-shadow" : "0 0 15px rgb(200,100,120)" }]
                ["display-text",
                function() { return `You have ${format(player.points)} points.`},
                { "color": "rgba(245,120,120)", "font-size": "50px", "font-family": "Bahnschrift", "text-shadow" : "0 0 15px rgb(200,100,120)" }],
                "blank",
                "blank",
                "blank",
                "upgrades",
            ],
            unlocked(){return player.f.ftype==0}
        },
        "logᵧ(x)":{
            content:[
                ["display-text",
                function() { return 'Your point gain is:' },
                {"font-size":"25px"}],
                ["display-text",
                    function() { return player.f.cfunc+"="+format(getPointGen())+"/s" },
                    { "color": "orange", "font-size": "50px", "font-family": "Bahnschrift", "text-shadow" : "0 0 15px orange" }],
                ["display-text",
                    function() { return "γ="+format(player.f.y)},
                    { "color": "orange", "font-size": "50px", "font-family": "Bahnschrift", "text-shadow" : "0 0 15px orange" }],
                ["display-text",
                    function() { return `You have ${format(player.points)} points.`},
                { "color": "orange", "font-size": "50px", "font-family": "Bahnschrift", "text-shadow" : "0 0 15px orange" }],
                "blank",
                "blank",
                "blank",
                "upgrades",
            ],
            unlocked(){return player.f.ftype==1}
        },
        "log10(x)":{
            content:[
                ["display-text",
                function() { return 'Your point gain is:' },
                {"font-size":"25px"}],
                ["display-text",
                    function() { return player.f.cfunc+"="+format(getPointGen())+"/s" },
                    { "color": "rgb(255,180,0)", "font-size": "50px", "font-family": "Bahnschrift", "text-shadow" : "0 0 15px yellow" }],
                ["display-text",
                    function() { return `You have ${format(player.points)} points.`},
                { "color": "rgb(255,180,0)", "font-size": "50px", "font-family": "Bahnschrift", "text-shadow" : "0 0 15px yellow" }],
                "blank",
                "blank",
                "blank",
                "upgrades",
            ],
            unlocked(){return player.f.ftype==2}
        },
        "Boosters":{
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
        player.f.y=tmp.f.calcgamma
        player.f.caeffect=tmp.f.effofca.pow(player.f.calevel)
        player.f.cmeffect=tmp.f.effofcm.pow(player.f.cmlevel).pow(0.75)
        if(hasUpgrade("f",75)) player.f.isca=true
        if(inChallenge("f",21)) player.f.slog21time+=(4*diff)
        if(inChallenge("f",32)) player.f.log12time+=((challengeCompletions("f",32)*8+8)*(diff*5))
        if(inChallenge("f",22)) player.points=player.points.min(5000)
        if(inChallenge("f",42)) player.points=player.points.min(20240)
        if(player.f.ftype==0) player.f.cfunc="slog"+(player.f.exp.eq(1)?"":"(")+(player.f.multiplier.neq(1)?"(":"")+"(x"+(player.f.adder.eq(0)?")":"+"+(`${format(player.f.adder)})`))+(player.f.multiplier.neq(1)?"*"+(`${format(player.f.multiplier)}`)+")":"")+(player.f.exp.eq(1)?"":"^"+(`${format(player.f.exp)}`)+")")+(hasUpgrade("f",42)?"*"+format(upgradeEffect("f",42)):"")
        if(player.f.ftype==1) player.f.cfunc="logᵧ"+(player.f.exp.eq(1)?"":"(")+(player.f.multiplier.neq(1)?"(":"")+"(x"+(player.f.adder.eq(0)?")":"+"+(`${format(player.f.adder)})`))+(player.f.multiplier.neq(1)?"*"+(`${format(player.f.multiplier)}`)+")":"")+(player.f.exp.eq(1)?"":"^"+(`${format(player.f.exp)}`)+")")+(inChallenge("f",31)?"/"+format(player.f.y.pow(((challengeCompletions("f",31)+1)*0.25))):"")
        if(player.f.ftype==2) player.f.cfunc="log10"+(player.f.exp.eq(1)?"":"(")+(player.f.multiplier.neq(1)?"(":"")+"(x"+(player.f.adder.eq(0)?")":"+"+(`${format(player.f.adder)})`))+(player.f.multiplier.neq(1)?"*"+(`${format(player.f.multiplier)}`)+")":"")+(player.f.exp.eq(1)?"":"^"+(`${format(player.f.exp)}`)+")")
    },
    calcadder(){
        let add=new Decimal(0)
        //stage 0 +
        if(hasUpgrade("f",12)) add=add.plus(0.1)
        if(hasUpgrade("f",14)) add=add.plus(upgradeEffect("f",14))
        if(hasUpgrade("f",22)) add=add.plus(upgradeEffect("f",15).times(2).add(1).pow(1.5))
        if(hasUpgrade("f",41)) add=add.plus(10)
        if(hasUpgrade("f",41)&&hasUpgrade("f",42)) add=add.plus(10)        
        if(hasUpgrade("f",41)&&hasUpgrade("f",43)) add=add.plus(10)        
        if(hasUpgrade("f",41)&&hasUpgrade("f",44)) add=add.plus(10)        
        if(hasUpgrade("f",41)&&hasUpgrade("f",45)) add=add.plus(10)
        if(hasAchievement("a",15)&&player.f.ftype==0) add=add.plus(1)
        if(inChallenge("f",21)) add=add.minus(player.f.slog21time).max(0)
        //stage 1 +
        if(hasUpgrade("f",62)) add=add.plus(upgradeEffect("f",62))
        if(hasUpgrade("f",65)) add=add.plus(upgradeEffect("f",65))
        if(hasUpgrade("f",102)) add=add.plus(upgradeEffect("f",102))
        //LOGY21 DEBUFF
        if(inChallenge("f",41)) add=new Decimal(1)
        //stage 0 *
        if(hasUpgrade("f",24)) add=add.times(2)
        if(hasUpgrade("f",31)) add=add.times(upgradeEffect("f",31))
        if(hasUpgrade("f",44)) add=add.times(upgradeEffect("f",44))
        //stage 1 *
        if(hasUpgrade("f",73)) add=add.times(upgradeEffect("f",73))
        if(hasUpgrade("f",93)) add=add.times(upgradeEffect("f",73))
        if(hasUpgrade("f",104)) add=add.times(5)
        if(player.f.isca) add=add.times(player.f.caeffect)
        //stage 0 ^
        if(hasUpgrade("f",34)) add=add.pow(upgradeEffect("f",34))
        //stage 1 ^
        if(hasChallenge("f",41)&&player.f.ftype==1) add=add.pow(1.5)
        return add
    },
    calctimer(){
        let mult=new Decimal(1)
        //stage 0 +
        if(hasUpgrade("f",13)) mult=mult.plus(0.25)
        if(hasUpgrade("f",15)) mult=mult.plus(upgradeEffect("f",15))
        if(hasChallenge("f",21)&&player.f.ftype==0) mult=mult.plus(25)
        //stage 1 +
        if(hasUpgrade("f",64)) mult=mult.plus(0.4)
        if(hasUpgrade("f",71)) mult=mult.plus(upgradeEffect("f",71))
        if(hasUpgrade("f",81)) mult=mult.plus(upgradeEffect("f",81))
        //LOGY21 DEBUFF
        if(inChallenge("f",41)) mult=new Decimal(1)
        //stage 0 *
        if(hasUpgrade("f",21)) mult=mult.times(upgradeEffect("f",21))
        if(hasUpgrade("f",25)) mult=mult.times(2)
        if(hasUpgrade("f",45)) mult=mult.times(upgradeEffect("f",45))
        if(hasChallenge("f",11)) mult=mult.times(challengeEffect("f",11))
        //stage 1 *
        if(hasUpgrade("f",84)) mult=mult.times(4)
        if (player.f.iscm)mult=mult.times(player.f.cmeffect)
        //stage 0 ^
        if(hasUpgrade("f",33)) mult=mult.pow(upgradeEffect("f",33))
        if(inChallenge("f",11)) mult=mult.sqrt()
        //stage 1 ^
        if(hasAchievement("a",55)&&player.f.ftype==1) mult=mult.pow(1.05)
        return mult
    },
    calcexponent(){
        let expo=new Decimal(1)
        let expo22=new Decimal(1)
        //stage 1
        if(player.f.ftype==1){
            if(hasUpgrade("f",92)) expo=expo.plus(player.points.pow(2).add(1).log(player.f.y.pow(0.8)).minus(1).max(0))//After XVII
            else if(hasUpgrade("f",73)) expo=expo.plus(player.points.add(1).log(player.f.y.pow(0.95)).add(1).pow(1.1).minus(1).max(0))//After IX
            else expo=expo.plus(player.points.add(1).log(player.f.y).pow(1.5).max(0))//normal
        }
        //stage 0
        if(player.f.ftype==0){
            if(hasChallenge("f",12)) expo=expo.plus(player.points.add(1).log10().pow(1.15).add(1).ln())//Sacrifice after slog12
            else if(hasUpgrade("f",32))expo=expo.plus(player.points.plus(1).ln().cbrt().minus(1))//Sacrifice after XII
            else expo=expo.plus(player.points.plus(1).log10().sqrt().minus(1))//Sacrifice when unlocked
        }
        expo22=expo22.times(player.points.pow(200).plus(1).ln().pow(player.points.plus(1).slog()).pow(player.f.exp.div(hasUpgrade("f",52) ? 30 : hasUpgrade("f",51) ? 40 : 50)).max(0)).min("1eeeeeeeeeeeeeeeeeeee20")
        return (inChallenge("f",22) ? expo22 : expo).add(hasAchievement("a",25)&&player.f.ftype==0 ? 0.01 : 0).max(1)
    },
    calcgamma(){
        let gamma=new Decimal(1000)
        if(hasUpgrade("f",63)) gamma=gamma.minus(10)
        if(hasUpgrade("f",72)) gamma=gamma.minus(20)
        if(hasUpgrade("f",82)) gamma=gamma.minus(upgradeEffect("f",82))
        if(hasUpgrade("f",91)) gamma=gamma.minus(15)
        if(hasUpgrade("f",91)&&hasUpgrade("f",92)) gamma=gamma.minus(15)    
        if(hasUpgrade("f",91)&&hasUpgrade("f",93)) gamma=gamma.minus(15)    
        if(hasUpgrade("f",91)&&hasUpgrade("f",94)) gamma=gamma.minus(15)       
        if(hasUpgrade("f",91)&&hasUpgrade("f",95)) gamma=gamma.minus(15)
        if(inChallenge("f",32)) gamma=gamma.add(player.f.log12time)
        if(challengeCompletions("f",32)>0) gamma=gamma.minus(challengeCompletions("f",32)*50)
        return gamma
    },
    chargeadder(){
        let progress=player.f.capoints.max(1).log10().div(player.f.careq.log10())
        let scal1=new Decimal(18)
        if(hasUpgrade("f",83)) scal1=scal1.minus(3)
        if(hasUpgrade("f",94)) scal1=scal1.minus(upgradeEffect("f",94))
        if(inChallenge("f",31)) scal1=new Decimal(11)
        if(challengeCompletions("f",31)>0) scal1=scal1.minus(challengeCompletions("f",31)*0.5)
        if(progress.gte(1)){
            if(inChallenge("f",42)) player.points=new Decimal(0)
            player.f.calevel=player.f.calevel.plus(1)
            player.f.capoints=new Decimal(0)
        }
        player.f.careq=scal1.pow(new Decimal(18).pow(player.f.calevel.div(inChallenge("f",42)? 6 : 4)).log10()).times(hasAchievement("a",45) ? 0.97 : 1).plus(inChallenge("f",31) ? 1 : 10)
        return format(progress.times(100))+"%"
    },
    effofca(){
        let eff1=new Decimal(1.5)
        if(hasUpgrade("f",101)) eff1=eff1.plus(0.1)
        if(player.f.ftype>=2) eff1=eff1.plus(0.1)
        if (inChallenge("f",42)) eff1=player.f.calevel.div(5-(player.f.calevel.div(5).min(3))).plus(1.5)
        return eff1
    },
    chargefactor(){
        let progress=player.f.cmpoints.max(1).log10().div(player.f.cmreq.log10())
        let scal2=new Decimal(25)
        if(hasUpgrade("f",94)) scal2=scal2.minus(upgradeEffect("f",94))
        if(hasUpgrade("f",103)) scal2=scal2.minus(3)
        if(progress.gte(1)){
            if(inChallenge("f",42)) player.points=new Decimal(0)
            player.f.cmlevel=player.f.cmlevel.plus(1)
            player.f.cmpoints=new Decimal(0)
        }
        player.f.cmreq=scal2.pow(new Decimal(25).pow(player.f.cmlevel.div(inChallenge("f",42)? 8 : 6)).log10()).pow(1.5).plus(25).times(hasAchievement("a",65) ? 0.95 : 1)
        return format(progress.times(100))+"%"
    },
    effofcm(){
        let eff2=new Decimal(1.8)
        if(hasChallenge("f",41)) eff2=eff2.plus(0.1)
        if(player.f.ftype>=2) eff2=eff2.plus(0.1)
        if(inChallenge("f",42)) eff2=player.f.cmlevel.div(7-(player.f.cmlevel.div(3).min(5))).plus(1.8)
        return eff2
    },
    upgrades:{
        col:5,
        11:{
            title:"I",
            description(){return "Generate 1.1 points per second."},
            cost(){return new Decimal(1)},
            unlocked(){ 
                return player.f.unlocked&&player.f.ftype==0
            },
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
            canAfford(){return player.points.gte(75)},
            pay(){return player.points=player.points.minus(75)}
        },
        31:{
            title:"XI",
            description(){return "Multiply the adder of x based on the factor of x."},
            cost(){return new Decimal(90)},
            unlocked(){ 
                return hasUpgrade("f",25)&&player.f.ftype==0&&player.f.isSacrifice
            },
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
            canAfford(){return player.points.gte(800)},
            pay(){return player.points=player.points.minus(800)},
        },
        61:{
            title:"I",
            description(){return "Generate 1.1 points per second."},
            cost(){return new Decimal(1)},
            unlocked(){ 
                return player.f.unlocked&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(1)},
            pay(){return player.points=player.points.minus(1)}
        },
        62:{
            title:"II",
            description(){return "Add a number to x based on points."},
            cost(){return new Decimal(0.25)},
            unlocked(){ 
                return hasUpgrade("f",61)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(0.25)},
            pay(){return player.points=player.points.minus(0.25)},
            effect(){return player.points.add(1).log10().pow(2).min(100)},
            effectDisplay(){return `+${format(upgradeEffect("f",62))}`},
        },
        63:{
            title:"III",
            description(){return "γ is subtracted by 10."},
            cost(){return new Decimal(3)},
            unlocked(){ 
                return hasUpgrade("f",62)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(3)},
            pay(){return player.points=player.points.minus(3)},
        },
        64:{
            title:"IV",
            description(){return "Add 0.4 to the factor of x."},
            cost(){return new Decimal(6)},
            unlocked(){ 
                return hasUpgrade("f",63)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(6)},
            pay(){return player.points=player.points.minus(6)},
        },
        65:{
            title:"V",
            description(){return "Add a number to x based on the exponent of x."},
            cost(){return new Decimal(10)},
            unlocked(){ 
                return hasUpgrade("f",64)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(10)},
            pay(){return player.points=player.points.minus(10)},
            effect(){return player.f.exp.pow(5).div(player.f.exp.pow(3))},
            effectDisplay(){return `+${format(upgradeEffect("f",65))}`},
        },
        71:{
            title:"VI",
            description(){return "Add a number to the factor of x based on points."},
            cost(){return new Decimal(15)},
            unlocked(){ 
                return hasUpgrade("f",65)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(15)},
            pay(){return player.points=player.points.minus(15)},
            effect(){return player.points.add(1).log10().sqrt().times(5)},
            effectDisplay(){return `+${format(upgradeEffect("f",71))}`},
        },
        72:{
            title:"VII",
            description(){return "γ is subtracted by 20."},
            cost(){return new Decimal(30)},
            unlocked(){ 
                return hasUpgrade("f",71)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(30)},
            pay(){return player.points=player.points.minus(30)},
        },
        73:{
            title:"VIII",
            description(){return "Multiply the adder of x based on the factor of x."},
            cost(){return new Decimal(37)},
            unlocked(){ 
                return hasUpgrade("f",72)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(37)},
            pay(){return player.points=player.points.minus(37)},
            effect(){return player.points.add(1).sqrt().log10().pow(1.5).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("f",73))}`},
        },
        74:{
            title:"IX",
            description(){return "Sacrifice formula is better."},
            cost(){return new Decimal(50)},
            unlocked(){ 
                return hasUpgrade("f",73)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(50)},
            pay(){return player.points=player.points.minus(50)},
        },
        75:{
            title:"X",
            description(){return "Unlock charger."},
            cost(){return new Decimal(50)}, 
            unlocked(){ 
                return hasUpgrade("f",74)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(50)},
            pay(){return player.points=player.points.minus(50)},
        },
        81:{
            title:"XI",
            description(){return "Add a number based on the level of adder charger to the factor of x."},
            cost(){return new Decimal(90)}, 
            unlocked(){ 
                return hasUpgrade("f",75)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(90)},
            pay(){return player.points=player.points.minus(90)},
            effect(){return player.f.calevel.pow(2)},
            effectDisplay(){return `+${format(upgradeEffect("f",81))}`},
        },
        82:{
            title:"XII",
            description(){return "γ is subtracted by a number based on your points."},
            cost(){return new Decimal(110)},
            unlocked(){ 
                return hasUpgrade("f",81)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(110)},
            pay(){return player.points=player.points.minus(110)},
            effect(){return player.f.points.add(1).log10().pow(2).min(50)},
            effectDisplay(){return `-${format(upgradeEffect("f",82))}`},
        },
        83:{
            title:"XIII",
            description(){return "Reduce the cost of charging adder."},
            cost(){return new Decimal(150)},
            unlocked(){ 
                return hasUpgrade("f",82)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(150)},
            pay(){return player.points=player.points.minus(150)},
        },
        84:{
            title:"XIV",
            description(){return "The factor of x is 4x bigger."},
            cost(){return new Decimal(200)},
            unlocked(){ 
                return hasUpgrade("f",83)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(200)},
            pay(){return player.points=player.points.minus(200)},
        },
        85:{
            title:"XV",
            description(){return "Unlock a new charger."},
            cost(){return new Decimal(250)},
            unlocked(){ 
                return hasUpgrade("f",84)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(250)},
            pay(){return player.points=player.points.minus(250)},
            onPurchase(){
                player.f.iscm=true
            }
        },
        91:{
            title:"XVI",
            description(){return "Each upgrade in this row reduces γ by 15."},
            cost(){return new Decimal(300)},
            unlocked(){ 
                return hasUpgrade("f",85)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(300)},
            pay(){return player.points=player.points.minus(300)},
            onPurchase(){
                player.f.iscm=true
            }
        },
        92:{
            title:"XVII",
            description(){return "Sacrifice formula is stronger."},
            cost(){return new Decimal(325)},
            unlocked(){ 
                return hasUpgrade("f",91)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(325)},
            pay(){return player.points=player.points.minus(325)},
            onPurchase(){
                player.f.iscm=true
            }
        },
        93:{
            title:"XVIII",
            description(){return "Upgrade VIII affects to the adder of x again."},
            cost(){return new Decimal(375)},
            unlocked(){ 
                return hasUpgrade("f",92)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(375)},
            pay(){return player.points=player.points.minus(375)},
        },
        94:{
            title:"XIX",
            description(){return "Reduce the cost exp. of charing adder and factor based on the adder and factor of x."},
            cost(){return new Decimal(400)},
            unlocked(){ 
                return hasUpgrade("f",93)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(400)},
            pay(){return player.points=player.points.minus(400)},
            effect(){return player.f.adder.add(1).log10().add(1).pow(player.f.multiplier.add(1).log10()).add(1).log(player.f.y.pow(0.6)).min(10)},
            effectDisplay(){return `-${format(upgradeEffect("f",94))}`},
        },
        95:{
            title:"XX",
            description(){return "Unlock Challenges."},
            cost(){return new Decimal(500)},
            unlocked(){ 
                return hasUpgrade("f",94)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(500)},
            pay(){return player.points=player.points.minus(500)},
        },
        101:{
            title:"XXI",
            description(){return "Increase the effect exp. of charging adder by 0.1."},
            cost(){return new Decimal(300)},
            unlocked(){ 
                return challengeCompletions("f",32)>0&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(300)},
            pay(){return player.points=player.points.minus(300)},
        },
        102:{
            title:"XXII",
            description(){return "Add a number to x based on the level of factor charger."},
            cost(){return new Decimal(370)},
            unlocked(){ 
                return hasUpgrade("f",101)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(370)},
            pay(){return player.points=player.points.minus(370)},
            effect(){return player.f.cmlevel.pow(2).div(1.5)},
            effectDisplay(){return `+${format(upgradeEffect("f",102))}`},
        },
        103:{
            title:"XXIII",
            description(){return "Reduce the cost exp. of charging factor by 3."},
            cost(){return new Decimal(450)},
            unlocked(){ 
                return hasUpgrade("f",102)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(450)},
            pay(){return player.points=player.points.minus(450)},
        },
        104:{
            title:"XXIV",
            description(){return "The adder of x is 5 times larger."},
            cost(){return new Decimal(510)},
            unlocked(){ 
                return hasUpgrade("f",103)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(510)},
            pay(){return player.points=player.points.minus(510)},
        },
        105:{
            title:"XXV",
            description(){return "Unlock a new challenge."},
            cost(){return new Decimal(700)},
            unlocked(){ 
                return hasUpgrade("f",103)&&player.f.ftype==1
            },
            canAfford(){return player.points.gte(700)},
            pay(){return player.points=player.points.minus(700)},
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
            style:{"height":"300px","width":"300px","background-color":"#000000","border-radius":"0%","border":"6px solid","border-color":"rgb(205,125,105)","color":"rgb(205,125,105)","text-shadow":"0 0 15px rgb(205,125,105)","font-size":"15px"},
            unlocked(){return hasUpgrade("f",23)||player.f.isSacrifice},
            onClick(){
                player.f.isSacrifice=true
                player.f.exp=player.f.exp.max(tmp.f.calcexponent)
                player.points=new Decimal(1)
                player.f.upgrades=[]
            },
            canClick(){return(hasUpgrade("f",23)||player.f.isSacrifice)&&!inChallenge("f",42)}
        },
        12:{
            title(){return "Upgrade your function"},
            display(){
                if (player.f.ftype==0){
                    return `Reset all the progress but level up the function by 1.
                    All upgrades will be removed.
                    The formula of point gain will be logγ(x).
                    All the slog chanllenges will be kept.
                    `
                }
                if (player.f.ftype==1){
                    return `Reset all the progress but level up the function by 1.
                    All upgrades will be removed.
                    The formula of point gain will be log10(x).
                    Add 0.1 to the effect of chargers.
                    Remove logγ 11 and 12.
                    `
                }
            },
            style:{"height":"300px","width":"300px","background-color":"#000000","border-radius":"0%","border-color":"white","border":"6px solid","color":"white","text-shadow":"0 0 15px white","font-size":"15px","font-family":""},
            unlocked(){
                if(player.f.ftype==0){
                    return hasChallenge("f",22)
                }
                if(player.f.ftype==1){
                    return hasChallenge("f",42)
                }
            },
            onClick(){
                player.f.ftype+=1
                player.points=new Decimal(1)
                player.f.upgrades=[]
                player.f.adder=new Decimal(0)
                player.f.multiplier=new Decimal(1)
                player.f.exp=new Decimal(1)
                player.f.calevel=new Decimal(0)
                player.f.capoints=new Decimal(0)
                player.f.cmlevel=new Decimal(0)
                player.f.cmpoints=new Decimal(0)
            },
            canClick(){return true}
        },
        21:{
            title(){return "Adder charger"},
            display(){return inChallenge("f",22) ? `Nope.`: `Hold this to charge points into the adder of x.
                            requirement:${format(player.f.careq)}
                            level:${format(player.f.calevel)}
                            effect:x${format(player.f.caeffect)}
                            progress:${tmp.f.chargeadder}
                            (${format(player.f.capoints)}/${format(player.f.careq)})`},
            style:{"height":"300px","width":"300px","background-color":"#000000","border-radius":"0%","border":"6px solid","border-color":"orange","color":"orange","text-shadow":"0 0 15px orange","font-size":"15px"},
            unlocked(){return hasUpgrade("f",75)||player.f.isca},
            onHold(){
                player.f.capoints=player.f.capoints.plus(player.points.times(0.1))
                player.points=player.points.minus(player.points.times(0.1))
            },
            canClick(){return (hasUpgrade("f",75)||player.f.isca)&&!inChallenge("f",22)&&canGenPoints()}
        },
        22:{
            title(){return "Factor charger"},
            display(){return inChallenge("f",22) ? `Nope.`: `Hold this to charge points into the factor of x.
                            requirement:${format(player.f.cmreq)}
                            level:${format(player.f.cmlevel)}
                            effect:x${format(player.f.cmeffect)}
                            progress:${tmp.f.chargefactor}
                            (${format(player.f.cmpoints)}/${format(player.f.cmreq)})`},
            style:{"height":"300px","width":"300px","background-color":"#000000","border-radius":"0%","border":"6px solid","border-color":"orange","color":"orange","text-shadow":"0 0 15px orange","font-size":"15px"},
            unlocked(){return hasUpgrade("f",85)||player.f.iscm},
            onHold(){
                player.f.cmpoints=player.f.cmpoints.plus(player.points.times(0.1))
                player.points=player.points.minus(player.points.times(0.1))
            },
            canClick(){return (hasUpgrade("f",85)||player.f.iscm)&&!inChallenge("f",22)&&canGenPoints()}
        },
    },
    challenges:{
        11:{
            name:"slog 11",
            challengeDescription:"The factor of x is square-rooted.",
            unlocked(){return hasUpgrade("f",35)||player.f.challengechecker.gte(1)},
            goalDescription(){return "145 points"},
            style:{"border-radius":"2%","border-color":"rgb(205,125,105)","font-size":"18px"},
            rewardDescription:"Upgrade XIV grows the factor of x with a multiplier.",
            canComplete(){return player.points.gte(145)},
            marked(){return hasChallenge("f",11)},
            onEnter(){
                player.f.challengechecker=player.f.challengechecker.plus(1)
                player.points=new Decimal(1)
            },
            rewardEffect(){return hasChallenge("f",11)&&hasUpgrade("f",34) ? upgradeEffect("f",34).pow(20.24).log10().max(1) : new Decimal(1)},
            rewardDisplay(){return `x${format(this.rewardEffect())}`}
        },
        12:{
            name:"slog 12",
            challengeDescription:"Run 'slog 11' and upgrade XIV is disabled.",
            unlocked(){return hasChallenge("f",11)},
            goalDescription(){return "55 points"},
            style:{"border-radius":"2%","border-color":"rgb(205,125,105)","font-size":"18px"},
            rewardDescription:"Sacrifice formula is better and unlock a new upgrade.",
            canComplete(){return player.points.gte(55)},
            marked(){return hasChallenge("f",12)},
            onEnter(){
                player.points=new Decimal(1)
            },
            countsAs:[11]
        },
        21:{
            name:"slog 21",
            challengeDescription:"Decrease the base adder of x by 4 per second.",
            unlocked(){return hasUpgrade("f",45)||player.f.challengechecker.gte(2)},
            goalDescription(){return "400 points"},
            style:{"border-radius":"2%","border-color":"rgb(205,125,105)","font-size":"18px"},
            rewardDescription:"Add 25 to the base multiplier of x in stage 0.",
            canComplete(){return player.points.gte(400)},
            marked(){return hasChallenge("f",21)},
            onEnter(){
                player.f.challengechecker=player.f.challengechecker.plus(1)
                player.points=new Decimal(1)
                player.f.slog21time=0
            },
        },
        22:{
            name:"slog final",
            challengeDescription:"Run 'slog 12',sacrifice formula is extremly stronger(Entering this will reset your exponent and do a sacrifice without bonus).",
            unlocked(){return hasChallenge("f",21)},
            goalDescription(){return "5000 points(Most points you can get in this challenge)"},
            style:{"border-radius":"2%","border-color":"rgb(205,125,105)","background":"radial-gradient(rgba(255,0,0,0.7),rgba(255,165,0,0.7),rgba(255,255,0,0.7),rgba(0,255,0,0.7),rgba(0,255,255,0.7),rgba(0,0,255,0.7),rgba(140,0,255,0.7))","color":"rgb(0,0,0)","font-size":"18px","text-shadow":"0 0 15px white"},
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
        },
        31:{
            name() {return`logγ 11 (${challengeCompletions("f",31)}/3)`},
            challengeDescription() {return`Point gain is divided by (γ^${format((challengeCompletions("f",31)+1)*0.25)}) but the cost of charging adder is massively reduced.(Entering or exiting this will reset the level of adder charger)`},
            unlocked(){return (hasUpgrade("f",95)||challengeCompletions("f",31)>0)&&player.f.ftype==1},
            goalDescription(){return  `${format((new Decimal(4).pow(challengeCompletions("f",31)+1).div(challengeCompletions("f",31)*2)))} points`},
            style:{"border-radius":"2%","border-color":"orange","font-size":"17px"},
            rewardDescription:"Reduce the cost exp. of charging adder by 0.5 for each completions.",
            canComplete(){return player.points.gte((new Decimal(4).pow(challengeCompletions("f",31)+1).div(challengeCompletions("f",31)+1).div(challengeCompletions("f",31)*2)))},
            marked(){return challengeCompletions("f",31)==3},
            onEnter(){
                player.points=new Decimal(1)
                player.f.calevel=new Decimal(0)
                player.f.capoints=new Decimal(0)
            },            
            onExit(){
                player.points=new Decimal(1)
                player.f.calevel=new Decimal(0)
                player.f.capoints=new Decimal(0)
            },            
            onComplete(){
                player.points=new Decimal(1)
                player.f.calevel=new Decimal(0)
                player.f.capoints=new Decimal(0)
            },
            completionLimit:3,
            rewardEffect(){return challengeCompletions("f",31)*0.5},
            rewardDisplay(){return `-${format(this.rewardEffect())}`}
        },    
        32:{
            name() {return`logγ 12 (${challengeCompletions("f",32)}/${this.completionLimit()})`},
            challengeDescription() {return`Add ${challengeCompletions("f",32)*8+8} to γ every 5 ticks.`},
            unlocked(){return (challengeCompletions("f",31)>0||challengeCompletions("f",32)>0)&&player.f.ftype==1},
            goalDescription(){return  `${format((new Decimal(100).times(challengeCompletions("f",32)+1)))} points`},
            style:{"border-radius":"2%","border-color":"orange","font-size":"18px"},
            rewardDescription:"Reduce γ by 50 for each completions.",
            canComplete(){return player.points.gte((new Decimal(100).times(challengeCompletions("f",32)+1)))},
            marked(){return challengeCompletions("f",32)==this.completionLimit()},
            onEnter(){
                player.points=new Decimal(1)
                player.f.log12time=0
            },
            onExit(){
               player.points=new Decimal(1)                
               player.f.log12time=0
            },            
            onComplete(){
                player.points=new Decimal(1)                
                player.f.log12time=0
            },
            completionLimit(){return hasChallenge("f",41) ? 12 : 8},
            rewardEffect(){return challengeCompletions("f",32)*50},
            rewardDisplay(){return `-${format(this.rewardEffect())}`}
        },
        41:{
            name() {return`logγ 21`},
            challengeDescription() {return`The base adder and factor of x is always 1. Next challenge unlocks at 3 completions of logγ11 and this challenge completed.`},
            unlocked(){return hasUpgrade("f",105)||hasChallenge("f",41)},
            goalDescription(){return  `500 points`},
            style:{"border-radius":"2%","border-color":"orange","font-size":"16px"},
            rewardDescription:"The adder of x is raised to ^1.5 in stage 1 and add 0.1 to the effect of charging factor.Increase the max completion of logγ12 by 4",
            canComplete(){return player.points.gte(500)},
            marked(){return hasChallenge("f",41)},
            onEnter(){
                player.points=new Decimal(1)
            },
            onExit(){
               player.points=new Decimal(1)                
            },            
            onComplete(){
                player.points=new Decimal(1)                
            },
        },
        42:{
            name() {return`logγ final`},
            challengeDescription() {return`Run "logγ 21".Charging adder or factor will reset your points but their effect are growing exponentally and their prices are reduced,too.(Entering or exiting this will reset the level of chargers,sacrifice is disabled.)`},
            unlocked(){return (hasChallenge("f",41)&&challengeCompletions("f",31)==3)||hasChallenge("f",42)},
            goalDescription(){return  `20,240 points(Most points you can get in this Challenge)`},
            style:{"border-radius":"2%","border-color":"orange","font-size":"16px","background":"radial-gradient(rgba(255,0,0,0.7),rgba(255,165,0,0.7),rgba(255,255,0,0.7),rgba(0,255,0,0.7),rgba(0,255,255,0.7),rgba(0,0,255,0.7),rgba(140,0,255,0.7))","color":"rgb(0,0,0)"},
            rewardDescription:"You can upgrade your function",
            canComplete(){return player.points.gte(20240)},
            marked(){return hasChallenge("f",42)},
            onEnter(){
                player.points=new Decimal(1)
                player.f.calevel=new Decimal(0)
                player.f.capoints=new Decimal(0)
                player.f.cmlevel=new Decimal(0)
                player.f.cmpoints=new Decimal(0)
            },
            onExit(){
                player.points=new Decimal(1)
                player.f.calevel=new Decimal(0)
                player.f.capoints=new Decimal(0)
                player.f.cmlevel=new Decimal(0)
                player.f.cmpoints=new Decimal(0)               
            },            
            onComplete(){
                player.points=new Decimal(1)
                player.f.calevel=new Decimal(0)
                player.f.capoints=new Decimal(0)
                player.f.cmlevel=new Decimal(0)
                player.f.cmpoints=new Decimal(0)               
            },
            countsAs:[41]
        },
    },

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
            tooltip: "Buy upgrade IX",
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
            done() {return player.f.exp.gt(1.685)&&player.f.exp.lt(1.694)},
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
            done() {return player.f.exp.gte("1eeeeeeeeeeeeeeeeeee20")},
            tooltip: `TWFrZSB0aGUgZXhwb25l
            bnQgb2YgeCAxRjIwLg==
            reward: 1.05x Point gain.`,
        },
        41: {
            name: "A new function",
            style:{"border-radius":"0%"},
            done() {return hasUpgrade("f",61) },
            tooltip: "Buy upgrade I,again.",
        },
        42: {
            name: "Gamma rays",
            style:{"border-radius":"0%"},
            done() {return player.f.y.lt(1000) },
            tooltip: "Make γ less than 1000.",
        },
        43: {
            name: "Shall we sacrifice?",
            style:{"border-radius":"0%"},
            done() {return player.f.exp.gt(1)&&player.f.ftype>=1 },
            tooltip: "Sacrifice in non-slog function stages.",
        },
        44: {
            name: "Yet another reference.",
            style:{"border-radius":"0%"},
            done() {return player.f.capoints.gt(0) },
            tooltip: "Charge your adder.",
        },
        45: {
            name: `VA==`,
            style:{"border-radius":"0%","border-color":"orange"},
            done() {return player.points.gte(250)&&player.f.ftype>=1&&player.f.calevel.eq(0)},
            tooltip: `RWFybiAyNTAgcG9
            pbnRzIHdpdGhvdXQg
            Y2hhcmdpbmcgYWRkZXIu
            reward: Reduce the cost of charging adder a bit.`,
        },
        51: {
            name: "Wait,is it nerfed?",
            style:{"border-radius":"0%"},
            done() {return player.f.cmpoints.gt(0) },
            tooltip: "Charge your factor.",
        },
        52: {
            name: "Of course it is.",
            style:{"border-radius":"0%"},
            done() {return player.f.calevel.gte(5) },
            tooltip: "Charge your adder to level 5.",
        },
        53: {
            name: "Gamma radio",
            style:{"border-radius":"0%"},
            done() {return player.f.y.lte(800) },
            tooltip: "Make γ less than 800.",
        },
        54: {
            name: "Three in a row",
            style:{"border-radius":"0%"},
            done() {return challengeCompletions("f",31)>=1 },
            tooltip: "Complete logγ 11 for the first time.",
        },
        55: {
            name: `SA==`,
            style:{"border-radius":"0%","border-color":"orange"},
            done() {return inChallenge("f",22)&&player.f.ftype==1&&tmp.f.clickables[21].unlocked},
            tooltip: `RmluZCBhIHBsYWNlIHdoZ
            XJlIHlvdSBjYW4ndCBj
            aGFyZ2Uu
            reward: The factor of x is raised to ^1.05 in stage 1.`,
        },
        61: {
            name: "Eight in a row.",
            style:{"border-radius":"0%"},
            done() {return challengeCompletions("f",32)>=8 },
            tooltip: "Complete logγ 12 for 8 times.",
        },
        62: {
            name: "Where is my infinite?",
            style:{"border-radius":"0%"},
            done() {return player.f.y.lt(308) },
            tooltip: "Make γ less than 308.",
        },
        63: {
            name: "What a timewall.",
            style:{"border-radius":"0%"},
            done() {return challengeCompletions("f",31)>=3 },
            tooltip: "Complete logγ 11 for 3 times.",
        },
        64: {
            name: "Happy new year.",
            style:{"border-radius":"0%"},
            done() {return inChallenge("f",42) },
            tooltip: "Entering logγ final.",
        },
        65: {
            name: `SQ==`,
            style:{"border-radius":"0%","border-color":"orange"},
            done() {return player.f.y.gte(100000)},
            tooltip: `TWFrZSDOsyBiaWdnZXI
            gdGhhbiAxMDAwMDA=
            reward: Reduce the cost of charging factor a bit.`,
        },
        update(diff) {	// Added this section to call adjustNotificationTime every tick, to reduce notification timers
            adjustNotificationTime(diff);
        },
    },
    tabFormat: [
        "blank", 
        ["display-text", function() { return"Achievements:"+player.a.achievements.length+"/30" }], 
        ["display-text", function() { return`Achievements on the last column are chanllenging, complete them to get a bonus!(Maybe you can do them later)` }], 
        "blank", "blank","blank","blank",
        "achievements",
    ],
})