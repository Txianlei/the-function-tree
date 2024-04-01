addLayer("f", {
    name: "function", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "F", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        ftype: 0,
        adder: new Decimal(0),
        timer: new Decimal(1),
        exp: new Decimal(1),
        isSacrifice: false,
        cfunc: "",
    }},
    color: "rgb(255 255 255)",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
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
        "Main":{
            content:[
                ["display-text",
                function() { return 'Your point gain is:' },
                {"font-size":"25px"}],
                ["display-text",
                    function() { return player.f.cfunc },
                    { "color": "red", "font-size": "50px", "font-family": "Georgia", "text-shadow" : "0 0 15px red" }],
                "blank",
                "milestones",
                "blank",
                "blank",
                "upgrades",
            ]
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
        }
    },
    update(diff){
        player.f.points=player.points
        player.f.adder=tmp.f.calcadder
        player.f.timer=tmp.f.calctimer
        if(player.f.ftype==0) player.f.cfunc="slog"+(player.f.exp.eq(1)?"":"(")+(player.f.timer.gt(1)?"(":"")+"(x"+(player.f.adder.eq(0)?")":"+"+(`${format(player.f.adder)})`)+(player.f.timer.gt(1)?"*"+(`${format(player.f.timer)}`)+")":""))+(player.f.exp.eq(1)?"":"^"+(`${format(player.f.exp)}`)+")")
    },
    calcadder(){
        add=new Decimal(0)
        if(hasUpgrade("f",12)) add=add.plus(0.1)
        if(hasUpgrade("f",14)) add=add.plus(upgradeEffect("f",14))
        if(hasUpgrade("f",22)) add=add.plus(upgradeEffect("f",15).times(2).add(1).pow(1.5))
        return add
    },
    calctimer(){
        time=new Decimal(1)
        if(hasUpgrade("f",13)) time=time.plus(0.25)
        if(hasUpgrade("f",15)) time=time.plus(upgradeEffect("f",15))
        if(hasUpgrade("f",21)) time=time.times(upgradeEffect("f",21))
        return time
    },
    calcexponent(){
        exp=new Decimal(1)
        exp=exp.plus(player.points.plus(1).log10().sqrt().minus(1))//Sacrifice
        return exp
    },
    upgrades:{
        11:{
            title:"I",
            description(){return "Generate 1.1 points per second."},
            cost(){return new Decimal(0)},
            unlocked(){ 
                return player.f.unlocked&&player.f.ftype==0
            },
            style:{"color":"rgb(255,0,0)","text-shadow" : "0 0 5px red"}
        },
        12:{
            title:"II",
            description(){return "Add 0.1 to x."},
            cost(){return new Decimal(1)},
            unlocked(){ 
                return hasUpgrade("f",11)&&player.f.ftype==0
            },
            style:{"color":"rgb(240,0,0)","text-shadow" : "0 0 5px rgb(240,0,0)"},
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
            pay(){return player.points=player.points.minus(20)}
        },
        21:{
            title:"VI",
            description(){return "Points can grow the factor of x"},
            cost(){return new Decimal(30)},
            unlocked(){ 
                return hasUpgrade("f",15)&&player.f.ftype==0
            },
            style:{"color":"rgb(170,0,0)","text-shadow" : "0 0 5px rgb(170,0,0)"},
            effect(){return player.points.plus(1).slog().pow(7).log10().add(1).max(1)},
            effectDisplay(){return `x${format(upgradeEffect("f",21))}`},
            pay(){return player.points=player.points.minus(30)}
        },
        22:{
            title:"VII",
            description(){return "Upgrade V also affects the adder of x with a stronger effect"},
            cost(){return new Decimal(75)},
            unlocked(){ 
                return hasUpgrade("f",21)&&player.f.ftype==0
            },
            style:{"color":"rgb(155,0,0)","text-shadow" : "0 0 5px rgb(155,0,0)"},
            pay(){return player.points=player.points.minus(75)}
        },
        23:{
            title:"VIII",
            description(){return "Unlock sacrifice"},
            cost(){return new Decimal(100)},
            unlocked(){ 
                return hasUpgrade("f",22)&&player.f.ftype==0
            },
            style:{"color":"rgb(140,0,0)","text-shadow" : "0 0 5px rgb(140,0,0)"},
            pay(){return player.points=player.points.minus(100)}
        },
    },
    clickables:{
        11:{
            title(){return "Sacrifice your function"},
            display(){return `Sacrifice all the points and upgrades to give this function an exponent.
                             curently:+^${format(tmp.f.calcexponent.minus(player.f.exp).max(0))}`},
            style:{"height":"200px","width":"200px","background-color":"#00000000","border-radius":"0%","border-color":"red","color":"red","text-shadow":"0 0 15px red","font-size":"15px"},
            unlocked(){return hasUpgrade("f",23)||player.f.isSacrifice},
            onClick(){
                player.f.isSacrifice=true
                player.f.exp=player.f.exp.max(tmp.f.calcexponent)
                player.points=0
                player.f.upgrades=[]
            },
            canClick(){return hasUpgrade("f",23)}
        },
    }
})