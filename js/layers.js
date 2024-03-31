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
    tabFormat: [
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
        "upgrades"
    ],
    update(diff){
        player.f.points=player.points
        player.f.adder=tmp.f.calcadder
        player.f.timer=tmp.f.calctimer
        if(player.f.ftype==0) player.f.cfunc="slog"+(player.f.timer.gt(1)?"(":"")+"(x"+(player.f.adder.eq(0)?")":"+"+(`${format(player.f.adder)})`)+(player.f.timer.gt(1)?"*"+(`${format(player.f.timer)}`)+")":""))
    },
    calcadder(){
        add=new Decimal(0)
        if(hasUpgrade("f",12)) add=add.plus(0.1)
        if(hasUpgrade("f",14)) add=add.plus(upgradeEffect("f",14))
        return add
    },
    calctimer(){
        time=new Decimal(1)
        if(hasUpgrade("f",13)) time=time.plus(0.25)
        if(hasUpgrade("f",15)) time=time.plus(upgradeEffect("f",15))
        return time
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
        },
        13:{
            title:"III",
            description(){return "Add 0.25 to the factor of x."},
            cost(){return new Decimal(2)},
            unlocked(){ 
                return hasUpgrade("f",12)&&player.f.ftype==0
            },
            style:{"color":"rgb(225,0,0)","text-shadow" : "0 0 5px rgb(225,0,0)"},
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
            effectDisplay(){return `+${format(upgradeEffect("f",14))}`}
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
            effectDisplay(){return `+${format(upgradeEffect("f",15))}`}
        },
    }
})
