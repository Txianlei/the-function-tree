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
        totalmult:new Decimal(1),
        exp: new Decimal(1),
        careq: new Decimal(10),
        calevel: new Decimal(0),
        capoints: new Decimal(0),
        caeffect: new Decimal(1),
        cmreq: new Decimal(25),
        cmlevel: new Decimal(0),
        cmpoints: new Decimal(0),
        cmeffect: new Decimal(1),
        funcpower: new Decimal(0),
        cubereq: new Decimal(100),
        isSacrifice: false,
        totalpower: new Decimal(0),
        challengechecker: new Decimal(0),
        isca:false,
        iscm:false,
        isstud:false,
        slog21time: 0,
        log12time: 0,
        log10_21time: 0,
        cfunc: "",
        randtext:"",
        y:new Decimal(1000),
        k:new Decimal(0.002),
    }},
    color: "#DDDDDD",
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
                    { "color": "rgba(245,120,120)", "font-size": "50px", "font-family": "Bahnschrift", "text-shadow" : "0 0 15px rgb(200,100,120)" }],
                ["display-text",
                    function() { return `You have ${format(player.points)} points.`},
                    { "color": "rgba(245,120,120)", "font-size": "50px", "font-family": "Bahnschrift", "text-shadow" : "0 0 15px rgb(200,100,120)" }],
                "blank",
                "blank",
                "blank",
                "upgrades",
                ["display-text",
                    function() { return `SORRY FOR RESET!HERE'S A STAGE 2 GAME FILE:`},
                    { "color": "rgba(245,120,120)", "font-size": "50px", "font-family": "Bahnschrift", "text-shadow" : "0 0 15px rgb(200,100,120)" }],
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
                ["upgrades",[11,12]],
            ],
            unlocked(){return player.f.ftype==2}
        },
        "x^k":{
            content:[
                ["display-text",
                function() { return 'Your point gain is:' },
                {"font-size":"25px"}],
                ["display-text",
                    function() { return player.f.cfunc+"="+format(getPointGen())+"/s" },
                    { "color": "rgb(65,245,65)", "font-size": "50px", "font-family": "Bahnschrift", "text-shadow" : "0 0 15px rgb(65,245,65)" }],
                ["display-text",
                    function() { return "k="+format(player.f.k) },
                    { "color": "rgb(65,245,65)", "font-size": "50px", "font-family": "Bahnschrift", "text-shadow" : "0 0 15px rgb(65,245,65)" }],
                ["display-text",
                    function() { return `You have ${format(player.points)} points.`},
                { "color": "rgb(65,245,65)", "font-size": "50px", "font-family": "Bahnschrift", "text-shadow" : "0 0 15px rgb(65,245,65)" }],
                "blank",
                "blank",
                "blank",
                ["upgrades",[26,27]],
            ],
            unlocked(){return player.f.ftype==3}
        },
        "Boosters":{
            content:[
                ["display-text",
                function() { return "Your function stage is " + player.f.ftype },
                { "color": "red", "font-size": "25px", "text-shadow" : "0 0 10px red"},],
                "blank",
                ["clickables",[1,2]]
            ],
            unlocked(){return tmp.f.clickables[11].unlocked||player.f.ftype>=1}
        }, 
        "Challenges":{
            content:[
                "challenges"
            ],
            unlocked(){return player.f.challengechecker.gte(1)||hasUpgrade("f",35)}
        },
        "Studies":{
            content:[
                ["display-text",function() { return `You've got <h2 style="color:rgb(255,180,0);text-shadow:0 0 5px yellow">${player.f.funcpower}</h2> cubes of function power`}],
                ["display-text",function() { return `Next at <h2 style="color:rgb(255,180,0);text-shadow:0 0 5px yellow">${format(player.f.cubereq)}</h2> points`}],
                "blank",
                "blank",
                ["clickables",[3]],
                ["upgrades",[13,14,15,16,17,18,19,20,21,22,23,24]]
            ],
            unlocked(){return hasUpgrade("f",125)||player.f.isstud}
        },
    },
    update(diff){
        player.f.points=player.points
        player.f.adder=tmp.f.calcadder
        player.f.multiplier=tmp.f.calctimer
        player.f.y=tmp.f.calcgamma
        player.f.caeffect=tmp.f.effofca.pow(player.f.calevel)
        player.f.cmeffect=tmp.f.effofcm.pow(player.f.cmlevel).pow(0.75)
        if (player.devSpeed>1) player.points= new Decimal(0)
        if(hasUpgrade("f",75)) player.f.isca=true
        if(inChallenge("f",21)) player.f.slog21time+=(4*diff)
        if(inChallenge("f",32)&&player.f.ftype==1) player.f.log12time+=((challengeCompletions("f",32)*8+8)*(diff*5))
        if(inChallenge("f",61)) player.f.log10_21time+=(diff)
        if(inChallenge("f",22)) player.points=player.points.min(5000)
        if(inChallenge("f",42)) player.points=player.points.min(20240)
        if(player.f.ftype==0) player.f.cfunc="slog"+(player.f.exp.eq(1)?"":"(")+(player.f.multiplier.neq(1)?"(":"")+"(x"+(player.f.adder.eq(0)?")":"+"+(`${format(player.f.adder)})`))+(player.f.multiplier.neq(1)?"*"+(`${format(player.f.multiplier)}`)+")":"")+(player.f.exp.eq(1)?"":"^"+(`${format(player.f.exp)}`)+")")+(hasUpgrade("f",42)?"*"+format(upgradeEffect("f",42)):"")
        if(player.f.ftype==1) player.f.cfunc="logᵧ"+(player.f.exp.eq(1)?"":"(")+(player.f.multiplier.neq(1)?"(":"")+"(x"+(player.f.adder.eq(0)?")":"+"+(`${format(player.f.adder)})`))+(player.f.multiplier.neq(1)?"*"+(`${format(player.f.multiplier)}`)+")":"")+(player.f.exp.eq(1)?"":"^"+(`${format(player.f.exp)}`)+")")+(inChallenge("f",31)?"/"+format(player.f.y.pow(((challengeCompletions("f",31)+1)*0.25))):"")
        if(player.f.ftype==2) player.f.cfunc="log10"+(player.f.exp.eq(1)?"":"(")+(player.f.multiplier.neq(1)?"(":"")+"(x"+(player.f.adder.eq(0)?")":"+"+(`${format(player.f.adder)})`))+(player.f.multiplier.neq(1)?"*"+(`${format(player.f.multiplier)}`)+")":"")+(player.f.exp.eq(1)?"":"^"+(`${format(player.f.exp)}`)+")")+(tmp.f.calctmult.gt(1)?"*"+format(tmp.f.calctmult):"")
        if(player.f.ftype==3) player.f.cfunc=(player.f.multiplier.neq(1)?"(":"")+"x"+(player.f.adder.eq(0)?"":"+"+(`${format(player.f.adder)})`))+(player.f.multiplier.neq(1)?"*"+(`${format(player.f.multiplier)}`)+")":"")+"^k"+(tmp.f.calctmult.gt(1)?"*"+format(tmp.f.calctmult):"")
    },
    randTextGen(){
        let s1=String.fromCharCode(Math.floor(Math.random() * 66)+65)
        let s2=String.fromCharCode(Math.floor(Math.random() * 66)+65)
        let s3=String.fromCharCode(Math.floor(Math.random() * 66)+65)
        let s4=String.fromCharCode(Math.floor(Math.random() * 66)+65)
        let s5=String.fromCharCode(Math.floor(Math.random() * 66)+65)
        let s6=String.fromCharCode(Math.floor(Math.random() * 66)+65)
        let s7=String.fromCharCode(Math.floor(Math.random() * 66)+65)
        let s8=String.fromCharCode(Math.floor(Math.random() * 66)+65)
        let s9=String.fromCharCode(Math.floor(Math.random() * 66)+65)
        let s10=String.fromCharCode(Math.floor(Math.random() * 66)+65)
        let s11=String.fromCharCode(Math.floor(Math.random() * 66)+65)
        let s12=String.fromCharCode(Math.floor(Math.random() * 66)+65)
        player.f.randtext=s1+s2+s3+s4+s5+s7+s5+s6+s1+s11+s12+s8+s9+s10+s4+s11+s12+s1+s2+s5+s6+s7+s8+s9+s10+s2+s3+s4+"\n"+s10+s11+s12+s1+s2+s3+s3+s4+s5+s6+s7+s8+s9+s10+s6+s7+s8+s9+s11+s12
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
        //stage 2 +
        if(hasUpgrade("f",113)) add=add.plus(1)
        if(hasUpgrade("f",114)) add=add.plus(upgradeEffect("f",114))
        if(hasUpgrade("f",121)) add=add.plus(upgradeEffect("f",121))
        if(hasUpgrade("f",221)) add=add.plus(upgradeEffect("f",221))
        if(hasUpgrade("f",131)) add=add.plus(player.f.log10_21time>35 ? new Decimal(0) : new Decimal(15).pow(new Decimal(1.3).pow(challengeCompletions("f",52))))
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
        if(player.f.isca&&!inChallenge("f",51)) add=add.times(player.f.caeffect)
        //stage 2 *
        if(hasUpgrade("f",123)) add=add.times(upgradeEffect("f",123))
        if(hasUpgrade("f",181)) add=add.times(3)
        if(hasUpgrade("f",202)) add=add.times(upgradeEffect("f",202))
        //stage 0 ^
        if(hasUpgrade("f",34)) add=add.pow(upgradeEffect("f",34))
        //stage 1 ^
        if(hasChallenge("f",41)&&player.f.ftype==1) add=add.pow(1.5)
        //stage 2 ^
        if(player.f.log10_21time>15&&inChallenge("f",61)) add=add.pow(0.6)
        return add
    },
    getCube(){
        if(player.points.gte(player.f.cubereq)) {
            player.f.funcpower=player.f.funcpower.add(1)
            player.f.totalpower=player.f.totalpower.add(1)
        }
        let scal3=new Decimal(1.8)
        let basereq=new Decimal(100)
        if(player.f.ftype==3) basereq=new Decimal(2500)
        scal3=scal3.minus(challengeCompletions("f",51)*0.1)
        if(hasUpgrade("f",231)) scal3=scal3.minus(0.075)
        player.f.cubereq=new Decimal(scal3).pow(player.f.totalpower.div(hasUpgrade("f",211)?1.5:1)).times(basereq.minus(hasAchievement("a",85)?1:0)).div(hasUpgrade("f",232) ? upgradeEffect("f",232) : 1)
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
        //stage 2 +
        if(hasUpgrade("f",115)) mult=mult.plus(0.5)
        if(hasUpgrade("f",122)&&(player.f.log10_21time<=5)) mult=mult.plus(upgradeEffect("f",122))
        if(hasUpgrade("f",141)) mult=mult.plus(upgradeEffect("f",141))
        if(hasUpgrade("f",191)) mult=mult.plus(25)
        if(player.f.log10_21time>60) mult=mult.plus(upgradeEffect("f",202))
        if(hasAchievement("a",75)&&player.f.ftype==2) mult=mult.plus(1)
        //LOGY21 DEBUFF
        if(inChallenge("f",41)) mult=new Decimal(1)
        //stage 0 *
        if(hasUpgrade("f",21)) mult=mult.times(upgradeEffect("f",21))
        if(hasUpgrade("f",25)) mult=mult.times(2)
        if(hasUpgrade("f",45)) mult=mult.times(upgradeEffect("f",45))
        if(hasChallenge("f",11)) mult=mult.times(challengeEffect("f",11))
        //stage 1 *
        if(hasUpgrade("f",84)) mult=mult.times(4)
        if (player.f.iscm&&!inChallenge("f",51))mult=mult.times(player.f.cmeffect)
        //stage 2 *
        if(hasUpgrade("f",124)) mult=mult.times(upgradeEffect("f",124))
        if(hasUpgrade("f",151)) mult=mult.times(3)
        if(hasUpgrade("f",153)||inChallenge("f",52)) mult=mult.times(upgradeEffect("f",153))
        if(hasUpgrade("f",202)) mult=mult.times(upgradeEffect("f",202))
        //stage 0 ^
        if(hasUpgrade("f",33)) mult=mult.pow(upgradeEffect("f",33))
        if(inChallenge("f",11)) mult=mult.sqrt()
        //stage 1 ^
        if(hasAchievement("a",55)&&player.f.ftype==1) mult=mult.pow(1.05)
        //stage 2 ^
        if(hasUpgrade("f",152)) mult=mult.pow(1.1)
        return mult
    },
    calctmult(){
        let tmult=new Decimal(1)
        if(hasUpgrade("f",112)) tmult=tmult.times(upgradeEffect("f",112))
        if(hasUpgrade("f",161)) tmult=tmult.times(2)
        if(hasUpgrade("f",204)) tmult=tmult.times(1.3)
        if(hasUpgrade("f",221)) tmult=tmult.times(2)
        if(player.f.log10_21time>60) tmult=tmult.div(1.5)
        if(player.f.log10_21time>85) tmult=tmult.times(0)
        return tmult
    },
    calcexponent(){
        let expo=new Decimal(1)
        let expo22=new Decimal(1)
        //stage 2
        if(player.f.ftype==2){
            if(hasUpgrade("f",201)) expo=expo.plus(player.points.pow(0.275).add(1).log10().add(1).ln().pow(2.2).max(0))
            else expo=expo.plus(player.points.pow(0.2).add(1).log10().add(1).ln().pow(2).max(0))
        }
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
        expo22=expo22.times(player.points.pow(200).plus(1).ln().pow(player.points.plus(1).slog()).pow(player.f.exp.div(hasUpgrade("f",52) ? 30 : hasUpgrade("f",51) ? 40 : 50)).max(0)).times(player.f.exp).min("1eeeeeeeeeeeeeeeeeeee20")
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
        let scal4=new Decimal(18)
        if(hasUpgrade("f",172)) scal4=scal4.minus(4)
        if(hasUpgrade("f",83)) scal1=scal1.minus(3)
        if(hasUpgrade("f",171)) scal1=scal1.minus(5)
        if(hasUpgrade("f",94)) scal1=scal1.minus(upgradeEffect("f",94))
        if(inChallenge("f",31)) scal1=new Decimal(11)
        if(challengeCompletions("f",31)>0&&player.f.ftype==1) scal1=scal1.minus(challengeCompletions("f",31)*0.5)
        if(progress.gte(1)){
            if(inChallenge("f",42)) player.points=new Decimal(0)
            player.f.calevel=player.f.calevel.plus(1)
            player.f.capoints=new Decimal(0)
        }
        player.f.careq=scal1.pow(scal4.pow(player.f.calevel.div(inChallenge("f",42)? 6 : 4)).log10()).times(hasAchievement("a",45) ? 0.97 : 1).plus(inChallenge("f",31) ? 1 : 10)
        return format(progress.times(100))+"%"
    },
    effofca(){
        let eff1=new Decimal(1.5)
        if(hasUpgrade("f",101)) eff1=eff1.plus(0.1)
        if(player.f.ftype>=2) eff1=eff1.plus(0.1)
        if(hasUpgrade("f",203)) eff1=eff1.plus(0.2)
        if (inChallenge("f",42)) eff1=player.f.calevel.div(5-(player.f.calevel.div(5).min(3))).plus(1.5)
        return eff1
    },
    chargefactor(){
        let progress=player.f.cmpoints.max(1).log10().div(player.f.cmreq.log10())
        let scal2=new Decimal(25)
        if(hasUpgrade("f",94)) scal2=scal2.minus(upgradeEffect("f",94))
        if(hasUpgrade("f",103)) scal2=scal2.minus(3)
        if(hasUpgrade("f",192)) scal2=scal2.minus(8)
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
        if(hasUpgrade("f",203)) eff2=eff2.plus(0.2)
        if(inChallenge("f",42)) eff2=player.f.cmlevel.div(7-(player.f.cmlevel.div(3).min(5))).plus(1.8)
        return eff2
    },
    upgrades:{
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
            description(){return "Boost the adder of x based on the factor of x."},
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
            description(){return "Upgrade VIII affects the adder of x again."},
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
        111:{
            title:"I",
            description(){return "Generate 1.1 points per second."},
            cost(){return new Decimal(1)},
            unlocked(){ 
                return player.f.ftype==2
            },
            canAfford(){return player.points.gte(1)},
            pay(){return player.points=player.points.minus(1)},
        },
        112:{
            title:"II",
            description(){return "Points boost themselves."},
            cost(){return new Decimal(1)},
            unlocked(){ 
                return hasUpgrade("f",111)&&player.f.ftype==2
            },
            canAfford(){return player.points.gte(1)},
            pay(){return player.points=player.points.minus(1)},
            effect(){return player.points.plus(1).log10().add(1).min(2.5)},
            effectDisplay(){return `x${format(upgradeEffect("f",112))}`},
        },
        113:{
            title:"III",
            description(){return "Add 1 to x."},
            cost(){return new Decimal(3)},
            unlocked(){ 
                return hasUpgrade("f",112)&&player.f.ftype==2
            },
            canAfford(){return player.points.gte(3)},
            pay(){return player.points=player.points.minus(3)},
        },
        114:{
            title:"IV",
            description(){return "The adder of x boosts itself."},
            cost(){return new Decimal(6)},
            unlocked(){ 
                return hasUpgrade("f",113)&&player.f.ftype==2
            },
            canAfford(){return player.points.gte(6)},
            pay(){return player.points=player.points.minus(6)},
            effect(){return player.f.adder.plus(1).pow(0.4).min(100)},
            effectDisplay(){return `+${format(upgradeEffect("f",114))}`},
        },
        115:{
            title:"V",
            description(){return "Add 0.5 to the factor of x."},
            cost(){return new Decimal(15)},
            unlocked(){ 
                return hasUpgrade("f",114)&&player.f.ftype==2
            },
            canAfford(){return player.points.gte(15)},
            pay(){return player.points=player.points.minus(15)},
        },
        121:{
            title:"VI",
            description(){return "Add a number to x based on points."},
            cost(){return new Decimal(25)},
            unlocked(){ 
                return hasUpgrade("f",115)&&player.f.ftype==2
            },
            canAfford(){return player.points.gte(25)},
            pay(){return player.points=player.points.minus(25)},
            effect(){return player.f.log10_21time>5 ? new Decimal(0) : player.points.add(1).log10()},
            effectDisplay(){return `+${format(upgradeEffect("f",121))}`},
        },
        122:{
            title:"VII",
            description(){return "Add a number to the factor of x based on points."},
            cost(){return new Decimal(50)},
            unlocked(){ 
                return hasUpgrade("f",121)&&player.f.ftype==2
            },
            canAfford(){return player.points.gte(50)},
            pay(){return player.points=player.points.minus(50)},
            effect(){return player.f.log10_21time>5 ? new Decimal(0) : player.points.add(1).log10().sqrt().add(1).ln()},
            effectDisplay(){return `+${format(upgradeEffect("f",122))}`},
        },
        123:{
            title:"VIII",
            description(){return "The factor of x boosts the adder of x."},
            cost(){return new Decimal(100)},
            unlocked(){ 
                return hasUpgrade("f",122)&&player.f.ftype==2
            },
            canAfford(){return player.points.gte(100)},
            pay(){return player.points=player.points.minus(100)},
            effect(){return player.f.multiplier.plus(1).log(1000).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("f",123))}`},
        },
        124:{
            title:"IX",
            description(){return "The adder of x boosts the factor of x."},
            cost(){return new Decimal(140)},
            unlocked(){ 
                return hasUpgrade("f",123)&&player.f.ftype==2
            },
            canAfford(){return player.points.gte(140)},
            pay(){return player.points=player.points.minus(140)},
            effect(){return player.f.adder.plus(1).log(1500).add(1).log(player.f.adder.pow(0.025).add(1)).add(1).times((hasUpgrade("f",142)||inChallenge("f",52))?upgradeEffect("f",142):1)},
            effectDisplay(){return `x${format(upgradeEffect("f",124))}`},
        },
        125:{
            title:"X",
            description(){return "Unlock function studies."},
            cost(){return new Decimal(200)},
            unlocked(){ 
                return hasUpgrade("f",124)&&player.f.ftype==2
            },
            canAfford(){return player.points.gte(200)},
            pay(){return player.points=player.points.minus(200)},
        },
        131:{
            title:"11",
            description(){return `Add ${format(player.f.log10_21time>35 ? new Decimal(0) : new Decimal(15).pow(new Decimal(1.3).pow(challengeCompletions("f",52))))} to the base adder of x.`},
            cost(){return new Decimal(1)},
            currencyDisplayName:"cube",
            unlocked(){ 
                return hasUpgrade("f",125)||player.f.isstud
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px",
        "color"(){
            let c="black"
            if(!hasUpgrade("f",131)&&canAffordUpgrade("f",131)) c="rgb(255,180,0)"
            if(player.f.log10_21time>35) c="rgb(255,250,0)"
            return c
        },
        "background"(){
            let a=""
            if(!hasUpgrade("f",131)&&canAffordUpgrade("f",131)) a="radial-gradient(black 50%,rgb(255,180,0))"
            if(player.f.log10_21time>35) a="radial-gradient(black 50%,rgb(255,250,0))"
            return a
        }},
            canAfford(){return player.f.funcpower.gte(1)},
            onPurchase(){
                player.f.isstud=true
            },
            pay(){return player.f.funcpower=player.f.funcpower.minus(1)},
        },
        132:{
            title:"You've found me!",
            description(){return "Get a challenging achievement."},
            cost(){return new Decimal(0)},
            currencyDisplayName:"cube",
            unlocked(){ 
                return hasUpgrade("f",125)||player.f.isstud
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgba(0,0,0,0)","font-size":"15px","margin-left":"25px","background-color":"rgba(0,0,0,0)",
        "color"(){
            let c="rgba(0,0,0,0)"
            if(hasUpgrade("f",132)) c="rgb(255,180,0)"
            return c
        }},
            canAfford(){return player.f.funcpower.gte(0)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(0)},
        },
        141:{
            title:"21",
            description(){return "Upgrade VI affects to the factor of x with a weaker effect."},
            cost(){return new Decimal(2)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",125)||player.f.isstud)&&player.f.ftype==2
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px","margin-top":"25px",
        "color"(){
            let c="black"
            if(!hasUpgrade("f",141)&&canAffordUpgrade("f",141)) c="rgb(255,180,0)"
            return c
        },
        "background"(){
            let a=""
            if(!hasUpgrade("f",141)&&canAffordUpgrade("f",141)) a="radial-gradient(black 50%,rgb(255,180,0))"
            return a
        }},
            canAfford(){return player.f.funcpower.gte(2)&&hasUpgrade("f",131)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(2)},
            effect(){return upgradeEffect("f",121).add(1).log10().add(1).pow(1.5)},
            effectDisplay(){return `+${format(upgradeEffect("f",141))}`},
            branches:[131]
        },
        142:{
            title:"22",
            description(){return "Upgrade IX's effect is stronger based on total cubes."},
            cost(){return new Decimal(3)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",125)||player.f.isstud)&&player.f.ftype==2
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px","margin-top":"25px","margin-left":"25px",
            "color"(){
                let c="black"
                if(!hasUpgrade("f",142)&&canAffordUpgrade("f",142)) c="rgb(255,180,0)"
                if(inChallenge("f",52)) c="rgb(255,250,0)"
                if(player.f.log10_21time>35) c="rgb(255,250,0)"
                return c
            },
            "background"(){
                let a=""
                if(!hasUpgrade("f",142)&&canAffordUpgrade("f",142)) a="radial-gradient(black 50%,rgb(255,180,0))"
                if(inChallenge("f",52)) a="radial-gradient(black 50%,rgb(255,250,0))"
                if(player.f.log10_21time>35) a="radial-gradient(black 50%,rgb(255,250,0))"
                return a
            }},
            canAfford(){return player.f.funcpower.gte(3)&&hasUpgrade("f",131)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(3)},
            effect(){return player.f.log10_21time>35 ? new Decimal(1) : inChallenge("f",52) ? new Decimal(1).div(player.f.totalpower.pow(2).div(5).add(1)) : player.f.totalpower.pow(2).div(5).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("f",142))}`},
            branches:[131]
        },
        151:{
            title:"31",
            description(){return "Triple the factor of x."},
            cost(){return new Decimal(2)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",125)||player.f.isstud)&&player.f.ftype==2
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px","margin-top":"25px",
        "color"(){
            let c="black"
            if(!hasUpgrade("f",151)&&canAffordUpgrade("f",151)) c="rgb(255,180,0)"
            return c
        },
        "background"(){
            let a=""
            if(!hasUpgrade("f",151)&&canAffordUpgrade("f",151)) a="radial-gradient(black 50%,rgb(255,180,0))"
            return a
        }},
            canAfford(){return player.f.funcpower.gte(2)&&hasUpgrade("f",141)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(2)},
            branches:[141]
        },
        152:{
            title:"32",
            description(){return "The factor of x is raised to ^1.1."},
            cost(){return new Decimal(4)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",125)||player.f.isstud)&&player.f.ftype==2
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px","margin-top":"25px","margin-left":"25px",
        "color"(){
            let c="black"
            if(!hasUpgrade("f",152)&&canAffordUpgrade("f",152)) c="rgb(255,180,0)"
            return c
        },
        "background"(){
            let a=""
            if(!hasUpgrade("f",152)&&canAffordUpgrade("f",152)) a="radial-gradient(black 50%,rgb(255,180,0))"
            return a
        }},
            canAfford(){return player.f.funcpower.gte(4)&&hasUpgrade("f",141)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(4)},
            branches:[141]
        },
        153:{
            title:"33",
            description(){return "Multiply the factor of x based on points and unlock a challenge."},
            cost(){return new Decimal(1)},
            currencyDisplayName:"cube",
            unlocked(){ 
                return (hasUpgrade("f",125)||player.f.isstud)&&player.f.ftype==2
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px","margin-top":"25px","margin-left":"25px",
        "color"(){
            let c="black"
            if(!hasUpgrade("f",153)&&canAffordUpgrade("f",153)) c="rgb(255,180,0)"
            if(player.f.log10_21time>35) c="rgb(255,250,0)"
            if(inChallenge("f",52)) c="rgb(255,250,0)"
            return c
        },
        "background"(){
            let a=""
            if(!hasUpgrade("f",153)&&canAffordUpgrade("f",153)) a="radial-gradient(black 50%,rgb(255,180,0))"
            if(inChallenge("f",52)) a="radial-gradient(black 50%,rgb(255,250,0))"
            if(player.f.log10_21time>35) a="radial-gradient(black 50%,rgb(255,250,0))"
            return a
        }},
            canAfford(){return player.f.funcpower.gte(1)&&hasUpgrade("f",142)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(1)},
            branches:[142],
            effect(){return player.f.log10_21time>35 ? new Decimal(1) : inChallenge("f",52) ? new Decimal(1).div(player.points.add(1).log10().times(1.2).max(1)):player.points.add(1).log10().times(1.2).max(1)},
            effectDisplay(){return `x${format(upgradeEffect("f",153))}`},
        },
        161:{
            title:"41",
            description(){return "Double point gain."},
            cost(){return new Decimal(3)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return hasUpgrade("f",125)||player.f.isstud
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px","margin-top":"25px",
        "color"(){
            let c="black"
            if(!hasUpgrade("f",161)&&canAffordUpgrade("f",161)) c="rgb(255,180,0)"
            return c
        },
        "background"(){
            let a=""
            if(!hasUpgrade("f",161)&&canAffordUpgrade("f",161)) a="radial-gradient(black 50%,rgb(255,180,0))"
            return a
        }},
            canAfford(){return player.f.funcpower.gte(3)&&(hasUpgrade("f",151)||hasUpgrade("f",152)||hasUpgrade("f",153))},
            pay(){return player.f.funcpower=player.f.funcpower.minus(3)},
            branches(){return player.f.ftype==3 ? [131] : [151,152,153]},
        },
        171:{
            title:"51",
            description(){return "Reduce the cost exp. of charging adder by 5."},
            cost(){return new Decimal(6)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return hasUpgrade("f",125)||player.f.isstud
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px","margin-top":"25px",
        "color"(){
            let c="black"
            if(!hasUpgrade("f",171)&&canAffordUpgrade("f",171)) c="rgb(255,180,0)"
            return c
        },
        "background"(){
            let a=""
            if(!hasUpgrade("f",171)&&canAffordUpgrade("f",171)) a="radial-gradient(black 50%,rgb(255,180,0))"
            return a
        }},
            canAfford(){return player.f.funcpower.gte(6)&&hasUpgrade("f",161)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(6)},
            branches:[161],
        },
        172:{
            title:"52",
            description(){return "Reduce the log-exp. of charging adder by 4."},
            cost(){return new Decimal(7)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return hasUpgrade("f",125)||player.f.isstud
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px","margin-top":"25px","margin-left":"25px",
        "color"(){
            let c="black"
            if(!hasUpgrade("f",172)&&canAffordUpgrade("f",172)) c="rgb(255,180,0)"
            return c
        },
        "background"(){
            let a=""
            if(!hasUpgrade("f",172)&&canAffordUpgrade("f",172)) a="radial-gradient(black 50%,rgb(255,180,0))"
            return a
        }},
            canAfford(){return player.f.funcpower.gte(7)&&hasUpgrade("f",161)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(7)},
            branches:[161],
        },
        181:{
            title:"61",
            description(){return "Triple the adder of x and unlock a challenge."},
            cost(){return new Decimal(6)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",125)||player.f.isstud)&&player.f.ftype==2
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px","margin-top":"25px","margin-left":"25px",
        "color"(){
            let c="black"
            if(!hasUpgrade("f",181)&&canAffordUpgrade("f",181)) c="rgb(255,180,0)"
            return c
        },
        "background"(){
            let a=""
            if(!hasUpgrade("f",181)&&canAffordUpgrade("f",181)) a="radial-gradient(black 50%,rgb(255,180,0))"
            return a
        }},
            canAfford(){return player.f.funcpower.gte(6)&&(hasUpgrade("f",171)||hasUpgrade("f",172))},
            pay(){return player.f.funcpower=player.f.funcpower.minus(6)},
            branches:[171,172],
        },
        191:{
            title:"71",
            description(){return "Add 25 to the base multiplier of x."},
            cost(){return new Decimal(3)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return hasUpgrade("f",125)||player.f.isstud
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px","margin-top":"25px","margin-left":"25px",
        "color"(){
            let c="black"
            if(!hasUpgrade("f",191)&&canAffordUpgrade("f",191)) c="rgb(255,180,0)"
            return c
        },
        "background"(){
            let a=""
            if(!hasUpgrade("f",191)&&canAffordUpgrade("f",191)) a="radial-gradient(black 50%,rgb(255,180,0))"
            return a
        }},
            canAfford(){return player.f.funcpower.gte(3)&&hasUpgrade("f",181)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(3)},
            branches(){return player.f.ftype==3 ? [171,172] : [181]},
        },
        192:{
            title:"72",
            description(){return "Reduce the cost exp. of charging factor by 8."},
            cost(){return new Decimal(5)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return hasUpgrade("f",125)||player.f.isstud
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px","margin-top":"25px","margin-left":"25px",
        "color"(){
            let c="black"
            if(!hasUpgrade("f",192)&&canAffordUpgrade("f",192)) c="rgb(255,180,0)"
            return c
        },
        "background"(){
            let a=""
            if(!hasUpgrade("f",192)&&canAffordUpgrade("f",192)) a="radial-gradient(black 50%,rgb(255,180,0))"
            return a
        }},
            canAfford(){return player.f.funcpower.gte(5)&&hasUpgrade("f",181)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(5)},
            branches(){return player.f.ftype==3 ? [171,172] : [181]},
        },
        201:{
            title:"81",
            description(){return "Sacrifice formula is better."},
            cost(){return new Decimal(4)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",125)||player.f.isstud)&&player.f.ftype==2
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px","margin-top":"25px","margin-left":"25px",
        "color"(){
            let c="black"
            if(!hasUpgrade("f",201)&&canAffordUpgrade("f",201)) c="rgb(255,180,0)"
            return c
        },
        "background"(){
            let a=""
            if(!hasUpgrade("f",201)&&canAffordUpgrade("f",201)) a="radial-gradient(black 50%,rgb(255,180,0))"
            return a
        }},
            canAfford(){return player.f.funcpower.gte(4)&&(hasUpgrade("f",191))},
            pay(){return player.f.funcpower=player.f.funcpower.minus(4)},
            branches:[191],
        }, 
        202:{
            title:"82",
            description(){return "Boost the adder and the factor of x based on the exponent of x."},
            cost(){return new Decimal(4)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",125)||player.f.isstud)&&player.f.ftype==2
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px","margin-top":"25px","margin-left":"25px",
        "color"(){
            let c="black"
            if(!hasUpgrade("f",202)&&canAffordUpgrade("f",202)) c="rgb(255,180,0)"
            return c
        },
        "background"(){
            let a=""
            if(!hasUpgrade("f",202)&&canAffordUpgrade("f",202)) a="radial-gradient(black 50%,rgb(255,180,0))"
            return a
        }},
            canAfford(){return player.f.funcpower.gte(4)&&(hasUpgrade("f",191))},
            pay(){return player.f.funcpower=player.f.funcpower.minus(4)},
            branches:[191],
            effect(){return new Decimal(player.f.exp).pow(player.f.exp).add(1).pow(2.75)},
            effectDisplay(){return `x${format(upgradeEffect("f",202))}`},
        },
        203:{
            title:"83",
            description(){return "Add 0.2 to the effect exp. of charging adder and factor."},
            cost(){return new Decimal(5)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",125)||player.f.isstud)&&player.f.ftype==2
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px","margin-top":"25px","margin-left":"25px",
        "color"(){
            let c="black"
            if(!hasUpgrade("f",203)&&canAffordUpgrade("f",203)) c="rgb(255,180,0)"
            return c
        },
        "background"(){
            let a=""
            if(!hasUpgrade("f",203)&&canAffordUpgrade("f",203)) a="radial-gradient(black 50%,rgb(255,180,0))"
            return a
        }},
            canAfford(){return player.f.funcpower.gte(5)&&(hasUpgrade("f",192))},
            pay(){return player.f.funcpower=player.f.funcpower.minus(5)},
            branches:[192]
        },
        204:{
            title:"84",
            description(){return "1.3x point gain."},
            cost(){return new Decimal(8)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return hasUpgrade("f",125)||player.f.isstud
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px","margin-top":"25px","margin-left":"25px",
        "color"(){
            let c="black"
            if(!hasUpgrade("f",204)&&canAffordUpgrade("f",204)) c="rgb(255,180,0)"
            return c
        },
        "background"(){
            let a=""
            if(!hasUpgrade("f",204)&&canAffordUpgrade("f",204)) a="radial-gradient(black 50%,rgb(255,180,0))"
            return a
        }},
            canAfford(){return player.f.funcpower.gte(8)&&(hasUpgrade("f",192))},
            pay(){return player.f.funcpower=player.f.funcpower.minus(8)},
            branches:[192]
        },
        211:{
            title:"91",
            description(){return "1.5 cubes count as one in cube price formula."},
            cost(){return new Decimal(9)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",125)||player.f.isstud)&&player.f.ftype==2
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px","margin-top":"25px","margin-left":"25px",
        "color"(){
            let c="black"
            if(!hasUpgrade("f",211)&&canAffordUpgrade("f",211)) c="rgb(255,180,0)"
            return c
        },
        "background"(){
            let a=""
            if(!hasUpgrade("f",211)&&canAffordUpgrade("f",211)) a="radial-gradient(black 50%,rgb(255,180,0))"
            return a
        }},
            canAfford(){return player.f.funcpower.gte(9)&&(hasUpgrade("f",201)||hasUpgrade("f",202)||hasUpgrade("f",203)||hasUpgrade("f",204))},
            pay(){return player.f.funcpower=player.f.funcpower.minus(9)},
            branches:[201,202,203,204]
        },
        221:{
            title:"101",
            description(){return hasChallenge("f",61) ? `Add a number to x based on the level of factor charger and double point gain.`:player.f.randtext},
            cost(){return new Decimal(6)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",125)||player.f.isstud)&&player.f.ftype==2
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px","margin-top":"25px","margin-left":"25px",
        "color"(){
            let c="black"
            if(!hasUpgrade("f",221)&&canAffordUpgrade("f",221)) c="rgb(255,180,0)"
            return c
        },
        "background"(){
            let a=""
            if(!hasUpgrade("f",221)&&canAffordUpgrade("f",221)) a="radial-gradient(black 50%,rgb(255,180,0))"
            return a
        },
        "background-color"(){
            let b=""
            if(!hasChallenge("f",61)) b="#ad0000"
            return b
        }},
            canAfford(){return player.f.funcpower.gte(6)&&hasUpgrade("f",211)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(6)},
            effect(){return new Decimal(player.f.cmlevel).pow(3).add(1).log10().pow(5)},
            effectDisplay(){return `+${format(upgradeEffect("f",221))}`},
            branches:[211]
        },
        231:{
            title:"111",
            description(){return `Reduce the cost scaling of cubes by 0.075`},
            cost(){return new Decimal(10)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",125)||player.f.isstud)&&player.f.ftype==2
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px","margin-top":"25px","margin-left":"25px",
        "color"(){
            let c="black"
            if(!hasUpgrade("f",231)&&canAffordUpgrade("f",231)) c="rgb(255,180,0)"
            return c
        },
        "background"(){
            let a=""
            if(!hasUpgrade("f",231)&&canAffordUpgrade("f",231)) a="radial-gradient(black 50%,rgb(255,180,0))"
            return a
        }},
            canAfford(){return player.f.funcpower.gte(10)&&hasUpgrade("f",221)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(10)},
            branches:[221]
        },
        232:{
            title:"112",
            description(){return `Divide the cost of cubes based on unspent cubes.`},
            cost(){return new Decimal(44)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",125)||player.f.isstud)&&player.f.ftype==2
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px","margin-top":"25px","margin-left":"25px",
        "color"(){
            let c="black"
            if(!hasUpgrade("f",232)&&canAffordUpgrade("f",232)) c="rgb(255,180,0)"
            return c
        },
        "background"(){
            let a=""
            if(!hasUpgrade("f",232)&&canAffordUpgrade("f",232)) a="radial-gradient(black 50%,rgb(255,180,0))"
            return a
        }},
            canAfford(){return player.f.funcpower.gte(44)&&hasUpgrade("f",221)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(44)},
            effect(){return player.f.funcpower.times(5).pow(0.7).add(1)},
            effectDisplay(){return `/${format(upgradeEffect("f",232))}`},
            branches:[221]
        },
        241:{
            title:"121",
            description(){return `You can upgrade your function.`},
            cost(){return new Decimal(100)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",125)||player.f.isstud)&&player.f.ftype==2
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,255,255)","font-size":"15px","margin-top":"25px","margin-left":"25px",
        "color"(){
            let c="black"
            if(!hasUpgrade("f",241)&&canAffordUpgrade("f",241)) c="rgb(255,255,255)"
            return c
        },
        "background"(){
            let a=""
            if(!hasUpgrade("f",241)&&canAffordUpgrade("f",241)) a="radial-gradient(black 50%,rgb(255,255,255))"
            return a
        }},
            canAfford(){return player.f.funcpower.gte(100)&&(hasUpgrade("f",231)||hasUpgrade("f",232))},
            pay(){return player.f.funcpower=player.f.funcpower.minus(100)},
            branches:[231,232]
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
            unlocked(){return (hasUpgrade("f",23)||player.f.isSacrifice)&&player.f.ftype<3},
            onClick(){
                player.f.isSacrifice=true
                player.f.exp=player.f.exp.max(tmp.f.calcexponent)
                player.points=new Decimal(1)
                if(player.f.ftype<2){
                    player.f.upgrades=[]
                }
            },
            canClick(){return(hasUpgrade("f",23)||player.f.isSacrifice)&&!inChallenge("f",42)}
        },
        12:{
            title(){return "Expand your function"},
            display(){return player.f.exp.gt(tmp.f.calcexponent) ? `Maybe not now..... but it's still clickable!
                currently:xcoming soon}
                total boost:xcoming soon`:
                `Sacrifice all the points and upgrades to grow k.
                currently:xcoming soon
                total boost:xcoming soon`},
            style:{"height":"300px","width":"300px","background-color":"#000000","border-radius":"0%","border":"6px solid","border-color":"rgb(65,245,65)","color":"rgb(65,245,65)","text-shadow":"0 0 15px rgb(65,245,65)","font-size":"15px"},
            unlocked(){return player.f.ftype>=3},
            canClick(){return false}
        },
        13:{
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
                    Sacrifice resets nothing.
                    `
                }
                if (player.f.ftype==2){
                    return `Reset all the progress but level up the function by 1.
                    All upgrades will be removed.
                    Studies expect 11,41,51,52,71,72,84 will be removed
                    The formula of point gain will be x^k(k<1).
                    Base cube req is 2500
                    Remove log10 challenges.
                    Sacrifice is re-designed.
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
                if(player.f.ftype==2){
                    return hasUpgrade("f",241)
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
                player.f.challenges[31]=0
                player.f.challenges[32]=0
                player.f.funcpower=new Decimal(0)
                player.f.totalpower=new Decimal(0)
                player.f.cubereq=new Decimal(100)
                player.f.challenges[51]=0
                player.f.challenges[52]=0
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
        31:{
            display(){return `Respec funtion studies`},
            style:{"height":"30px","width":"500px","background-color":"#000000","border-radius":"0%","border":"2px solid","border-color":"rgb(255,180,0)","color":"rgb(255,180,0)","text-shadow":"0 0 15px orange","font-size":"15px"},
            unlocked(){return player.f.isstud},
            onClick(){
                player.f.upgrades = player.f.upgrades.filter(n => n<126 || n>255)
                player.f.funcpower=player.f.totalpower
            },
            canClick(){return player.f.isstud}
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
            goalDescription(){return  `${format((new Decimal(4).pow(challengeCompletions("f",31)+1).div((challengeCompletions("f",31)*2)+1)))} points`},
            style:{"border-radius":"2%","border-color":"orange","font-size":"17px"},
            rewardDescription:"Reduce the cost exp. of charging adder by 0.5 for each completions.",
            canComplete(){return player.points.gte((new Decimal(4).pow(challengeCompletions("f",31)+1).div(challengeCompletions("f",31)*2+1)))},
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
            challengeDescription() {return`The base adder and factor of x are always 1. Next challenge unlocks at 3 completions of logγ11 and this challenge completed.`},
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
            challengeDescription() {return`Run "logγ 21".Charging adder or factor will reset your points but their effects are growing exponentially and their prices are reduced,too.(Entering or exiting this will reset the level of chargers,sacrifice is disabled.)`},
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
        51:{
            name() {return`log10 11 (${challengeCompletions("f",51)}/6)`},
            challengeDescription() {return`The effects of adder charger and factor charger are alway 1.Complete this challenge for the first time to unlock it permantly!`},
            unlocked(){return (hasUpgrade("f",153)||challengeCompletions("f",51)>0)&&player.f.ftype==2},
            goalDescription(){return  `${format(new Decimal(500).times(Decimal.pow(1.6,challengeCompletions("f",51))))} points`},
            style:{"border-radius":"2%","border-color":"yellow","font-size":"17px"},
            rewardDescription:"Reduce the cost scaling of cube by 0.1 for each completions.",
            canComplete(){return player.points.gte(new Decimal(500).times(Decimal.pow(1.6,challengeCompletions("f",51))))},
            marked(){return challengeCompletions("f",51)==6},
            onEnter(){
                player.points=new Decimal(1)
            },            
            onExit(){
                player.points=new Decimal(1)
            },            
            onComplete(){
                player.points=new Decimal(1)
            },
            completionLimit:6 ,
            rewardEffect(){return challengeCompletions("f",51)*0.1},
            rewardDisplay(){return `-${format(this.rewardEffect())}`}
        },   
        52:{
            name() {return`log10 12 (${challengeCompletions("f",52)}/5)`},
            challengeDescription() {return`Study 22 and 33's effects are their multiplicative inverse and always affacts.Complete this challenge for the first time to unlock it permantly!`},
            unlocked(){return (hasUpgrade("f",181)||challengeCompletions("f",52)>0)&&player.f.ftype==2},
            goalDescription(){return  `${format(Decimal.pow(4,challengeCompletions("f",52)+1).times(challengeCompletions("f",52)>=4 ? 50 : 100))} points`},
            style:{"border-radius":"2%","border-color":"yellow","font-size":"17px"},
            rewardDescription:"Study 11's effect is raised to ^1.3 for each completions.",
            canComplete(){return player.points.gte(new Decimal(Decimal.pow(4,challengeCompletions("f",52)+1).times(challengeCompletions("f",52)>=4 ? 50 : 100)))},
            marked(){return challengeCompletions("f",52)==5},
            onEnter(){
                player.points=new Decimal(1)
            },            
            onExit(){
                player.points=new Decimal(1)
            },            
            onComplete(){
                player.points=new Decimal(1)
            },
            completionLimit:5,
            rewardEffect(){return new Decimal(1.3).pow(challengeCompletions("f",52))},
            rewardDisplay(){return `^${format(this.rewardEffect())}`}
        }, 
        61:{
            name() {return`log10 21`},
            challengeDescription(){return`Following things happens by time:<br>
                                        5sec:The effect of upgrade VI and VII is 0<br>
                                        15sec:The adder of x is raised to ^0.6<br>
                                        35sec:The effect of study 11,22,33 is 0,1 and 1.<br>
                                        60sec:Study 82's effect adds to the base factor of x but point gain is divided by 1.5<br>
                                        85sec:Point gain is reduced to 0.<br>
                                        (${format(player.f.log10_21time)}seconds passed in this challenge.)`},
            unlocked(){return challengeCompletions("f",52)==5&&player.f.ftype==2},
            goalDescription(){return  `12500 points`},
            style:{"border-radius":"2%","border-color":"yellow","font-size":"17px","width":"600px"},
            rewardDescription:"Allow you to buy study 101.",
            canComplete(){return player.points.gte(12500)},
            marked(){return hasChallenge("f",61)},
            onEnter(){
                player.points=new Decimal(1)
                player.f.log10_21time=0
            },            
            onExit(){
                player.points=new Decimal(1)
                player.f.log10_21time=0
            },            
            onComplete(){
                player.points=new Decimal(1)
                player.f.log10_21time=0
            },
        }, 
    },
}),
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
            done() {return player.points.gte(10)&&player.f.multiplier.eq(1)},
            tooltip(){ return (hasAchievement("a",15) ? `Get 10 points without having any multiplier in stage 0.` : `R2V0IDEwI
            HBvaW50cyB3aXRo
            b3V0IGhhdmluZyBhbnkgb
            XVsdGlwbGllci4=`)+
            `\nreward: Add 1 to the base adder of x only in stage 0.`},
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
            tooltip() { return (hasAchievement("a",25) ? `Make the exponent of x exactly 1.69.` : `TWFrZSB0aGUgZXhwb25lb
            nQgb2YgeCBleGFjdGx
            5IDEuNjku`)+
            `\nreward: Add 0.01 to sacrifice bonus only in stage 0.`},
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
            tooltip(){ return (hasAchievement("a",35) ? `Make the exponent of x 1F20.` : `TWFrZSB0aGUgZXhwb25l
            bnQgb2YgeCAxRjIwLg==`)+
            `\nreward: 1.05x Point gain.`},
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
            tooltip(){ return (hasAchievement("a",45) ? `Earn 250 points without charging adder.` : `RWFybiAyNTAgcG9
            pbnRzIHdpdGhvdXQg
            Y2hhcmdpbmcgYWRkZXIu`)+
            `\nreward: Reduce the cost of charging adder a bit.`},
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
            done() {return inChallenge("f",22)&&player.f.ftype>=1&&tmp.f.clickables[21].unlocked},
            tooltip(){ return (hasAchievement("a",55) ? `Find a place you can't charge.` : `RmluZCBhIHBsYWNlIHdoZ
            XJlIHlvdSBjYW4ndCBj
            aGFyZ2Uu`)+
            `\nreward: The factor of x is raised to ^1.05 in stage 1.`},
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
            done() {return player.points.gte(500)&&player.f.calevel.eq(0)&&player.f.cmlevel.eq(0)&&player.f.ftype>=1},
            tooltip(){ return (hasAchievement("a",65) ? `Reach 500 points without charging.` : `R2V0IDEwMCBwb2ludHMgd2
            l0aG91dCBjaGFyZ2luZy4=`)+
            `\nreward: Reduce the cost of charging factor a bit.`},
        },
        71: {
            name: "let gamma=new Decimal(10)",
            style:{"border-radius":"0%"},
            done() {return player.f.ftype==2},
            tooltip: "Reach function stage 2.",
        },        
        72: {
            name: "Adders are important!!!",
            style:{"border-radius":"0%"},
            done() {return player.f.ftype==2&&player.f.adder.gte(1000)},
            tooltip: "Make the adder of x bigger than 1000 in stage 2.",
        },
        73: {
            name: "YET ANOTHER REFERENCE",
            style:{"border-radius":"0%"},
            done() {return hasUpgrade("f",125)},
            tooltip: "Unlock function studies.",
        },
        74: {
            name: "1 Oom for 2 stages, stages gone but points still.",
            style:{"border-radius":"0%"},
            done() {return player.f.ftype==2&&player.f.points.gte(10000)},
            tooltip: "Earn 10000 points in stage 2.",
        },
        75: {
            name: "Ug==.",
            style:{"border-radius":"0%","border-color":"yellow"},
            done() {return hasUpgrade("f",132)},
            tooltip(){ return (hasAchievement("a",75) ? `Find the secret one.` : `RmluZCB0aGUg
            c2VjcmV0IG9uZS4=`)+
            `\nreward: Add 1 to the base multiplier of x only in stage 2`},
        },
        81: {
            name: "It's called funity challenges",
            style:{"border-radius":"0%"},
            done() {return challengeCompletions("f",51)>=1},
            tooltip: "Complete log10 11 for the first time.",
        },  
        82: {
            name: "We're halfway there",
            style:{"border-radius":"0%"},
            done() {return player.f.totalpower.gte(50)},
            tooltip: "Get a total of 50 cubes.",
        }, 
        83: {
            name: "Tick-tock-tick",
            style:{"border-radius":"0%"},
            done() {return hasChallenge("f",61)},
            tooltip: "Complete log10 21.",
        }, 
        84: {
            name: "I'm sick of this",
            style:{"border-radius":"0%"},
            done() {return hasUpgrade("f",241)},
            tooltip: "Buy study 121.",
        }, 
        85: {
            name: "RA==.",
            style:{"border-radius":"0%","border-color":"yellow"},
            done() {return !hasUpgrade("f",241)&&player.points.gte(4)},
            tooltip(){ return (hasAchievement("a",85) ? `Get 400000 points without buying study 121.` : `R2V0IDQwMDA
            wMCBwb2ludHMgd2l
            0aG91dCBidXlpbmcgc
            3R1ZHkgMTIxLg==.`)+
            `\nreward: Reduce cube cost count by 1 in stage 2`},
        },
        update(diff) {	// Added this section to call adjustNotificationTime every tick, to reduce notification timers
            adjustNotificationTime(diff);
        },
    },
    tabFormat: [
        "blank", 
        ["display-text", function() { return"Achievements:"+player.a.achievements.length+"/35" }], 
        ["display-text", function() { return`Achievements on the last column are challenging, complete them to get a bonus!(Maybe you can do them later)` }], 
        "blank", "blank","blank","blank",
        "achievements",
    ],
}),
addLayer("m",{
    startData() { return {
        unlocked: true,
        points: new Decimal(1),
        Paused: true,
        free: new Decimal(0)
    }},
    color: "yellow",
    row: "side",
    layerShown() {return true}, 
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Mini-game")
    },
    color:"#ABCDEF",
    resource:"MG points",
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    update(diff){
        player.m.points=player.m.points.plus(buyableEffect("m",11).times(buyableEffect("m",12)).pow(buyableEffect("m",13)).tetrate(buyableEffect("m",14)).times(diff).times(player.m.Paused?1:0)).min("1eeee18")
        if(hasUpgrade("m",11)) layers.m.buyables[11].buy()
        if(hasUpgrade("m",15)) layers.m.buyables[12].buy()
        if(hasUpgrade("m",15)) layers.m.buyables[13].buy()
        if(hasUpgrade("m",15)) layers.m.buyables[21].buy()
        if(hasUpgrade("m",15)) layers.m.buyables[22].buy()
        if(hasUpgrade("m",15)) layers.m.buyables[23].buy()
        if(hasUpgrade("m",15)) layers.m.buyables[31].buy()
        if(hasUpgrade("m",15)) layers.m.buyables[32].buy()
        if(hasUpgrade("m",15)) layers.m.buyables[33].buy()
        if(hasUpgrade("m",14)) layers.m.buyables[21].buyMax()
        else if(hasUpgrade("m",13)) layers.m.buyables[21].buy()
    },
    tabFormat:[
        "main-display",
        ["display-text", function() { return `You are gaining ${format(buyableEffect("m",11).times(buyableEffect("m",12)).pow(buyableEffect("m",13)).tetrate(buyableEffect("m",14)).times(player.m.Paused?1:0).min("1eeee18"))} MG points per second.` }],
        "blank",
        "blank",
        "clickables",
        "buyables",
        "blank",
        "blank",
        "upgrades"
    ],
    buyables:{
        11:{
            title:"ADDER",
            cost(x) { return x.pow((x.times(0.01).add(2))).pow(x.minus(hasUpgrade("m",12) ? 250 : 200).max(1).div(2).add(1)) },
            effect(x) { return (x.add(getBuyableAmount("m",12).times(buyableEffect("m",21)))).times(buyableEffect("m",31).pow(getBuyableAmount("m",11)))},
            display() { return `Add ${format(buyableEffect("m",31).pow(getBuyableAmount("m",11)))} to base MG points gain.
                                Cost: ${format(this.cost())}
                                Amount: ${format(getBuyableAmount("m",11))}`+(getBuyableAmount("m",21).gt(0)?`+${format(getBuyableAmount("m",12).times(buyableEffect("m",21)))}`:"")+
                                `\nEffect: +${format(this.effect())}` },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy(){
                if(!tmp.m.buyables[11].canAfford) return
                if(!hasUpgrade("m",11)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(hasUpgrade("m",15)?1e10 : 1))
            },
            style:{"height":"200px","width":"200px","border-radius":"4%","border":"6px solid","font-size":"15px","border-color":"rgba(85,85,255,0.7)"}
        },
        12:{
            title:"MULTIPLIER",
            cost(x) { return new Decimal(4).pow(x.add(3).minus(player.m.free)).pow((x.minus(25).minus(player.m.free).max(0).div(15).add(1))).pow(buyableEffect("m",32)).tetrate(x.minus(105).minus(player.m.free).max(0).div(3000).add(1)) },
            effect(x) { return new Decimal((getBuyableAmount("m",11).times(buyableEffect("m",22))).add(2)).pow(x.add(player.m.free).add(getBuyableAmount("m",13).times(buyableEffect("m",23)))) },
            display() { return `MG points gain is multiplied by ${format((getBuyableAmount("m",11).times(buyableEffect("m",22))).add(2))}.
                                Cost: ${format(this.cost())}
                                Amount: ${format(getBuyableAmount("m",12).add(player.m.free))}`+(getBuyableAmount("m",23).gt(0)?`+${format(getBuyableAmount("m",13).times(buyableEffect("m",23)))}`:"")+
                                `\nEffect: x${format(this.effect())}` },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if(!tmp.m.buyables[12].canAfford) return
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(hasUpgrade("m",15)?1e10 : 1))
            },
            style:{"height":"200px","width":"200px","border-radius":"4%","border":"6px solid","font-size":"15px","border-color":"rgba(85,85,255,0.7)"}
        },
        13:{
            title:"EXPONENT",
            cost(x) { return x.add(5).pow(x.add(5)).pow(x.div(3).add(1)).pow(x.div(5).add(1)).tetrate(x.minus(4).max(1).div(103).add(0.99)).tetrate(buyableEffect("m",24))},
            effect(x) { return new Decimal(getBuyableAmount("m",13).times(buyableEffect("m",33)).add(1.1)).pow(x) },
            display() { return `MG points gain is raised to ^${format((getBuyableAmount("m",13).times(buyableEffect("m",33))).add(1.1))}.
                                Cost: ${format(this.cost())}
                                Amount: ${format(getBuyableAmount("m",13))}
                                Effect: ^${format(this.effect())}` },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if(!tmp.m.buyables[13].canAfford) return
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(hasUpgrade("m",15)?1e10 : 1))
            },
            style:{"height":"200px","width":"200px","border-radius":"4%","border":"6px solid","font-size":"15px","border-color":"rgba(85,85,255,0.7)"}
        },        
        14:{
            title:"TETRATE",
            cost(x) { return new Decimal("1e1335").tetrate(x.div(25).add(1))},
            effect(x) { return new Decimal(getBuyableAmount("m",14).times(buyableEffect("m",34)).add(1.0001)).pow(x) },
            display() { return `MG points gain is tetrated by ${format(getBuyableAmount("m",14).times(buyableEffect("m",34)).add(1.0001))}.
                                Cost: ${format(this.cost())}
                                Amount: ${format(getBuyableAmount("m",14))}
                                Effect: ^^${format(this.effect().times(100))}%` },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            style:{"height":"200px","width":"200px","border-radius":"4%","border":"6px solid","font-size":"15px","border-color":"rgba(85,85,255,0.7)"}
        },
        21:{
            title:"M → A",
            cost(x) { return Decimal.pow(2.5e6,x.div(3.875).add(1))},
            effect(x) { return x.pow(2).times(0.5) },
            display() { return `Add a number to "ADDER" amount for each "MULTIPLIER" bought.
                                Cost: ${format(this.cost())}
                                Amount: ${format(getBuyableAmount("m",21))}
                                Effect: +${format(this.effect())} per bought.` },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if(!tmp.m.buyables[21].canAfford) return
                if(!hasUpgrade("m",13)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            buyMax() {
                if(!tmp.m.buyables[21].canAfford) return
                let tb = player[this.layer].points.max(1).log(2.5e6).minus(1).times(3.875)
                let tg = tb.plus(1).floor()
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(tg))
            },
            style:{"height":"200px","width":"200px","border-radius":"4%","border":"6px solid","font-size":"15px","border-color":"rgba(85,85,255,0.7)"}
        },
        22:{
            title:"A → M",
            cost(x) { return new Decimal(5e8).pow(x.div(3).add(1)).pow(x.div(20).add(0.85)).pow(x.minus(1).max(0).add(1))},
            effect(x) { return x.pow(x.div(100).add(1)).times(0.0015) },
            display() { return `Add a number to "MULTIPLIER" base effect for each "ADDER" bought.
                                Cost: ${format(this.cost())}
                                Amount: ${format(getBuyableAmount("m",22))}
                                Effect: +${format(this.effect())} per bought.` },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if(!tmp.m.buyables[22].canAfford) return
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(hasUpgrade("m",15)?1e10 : 1))
            },
            style:{"height":"200px","width":"200px","border-radius":"4%","border":"6px solid","font-size":"15px","border-color":"rgba(85,85,255,0.7)"}
        },
        23:{
            title:"E → M",
            cost(x) { return new Decimal(1e20).pow(x.div(15).add(1)).pow(x.minus(4).max(1).pow(2).div(12).add(1))},
            effect(x) { return x.pow(0.7) },
            display() { return `Add a number to "MULTIPLIER" amount for each "EXPONENT" bought.
                                Cost: ${format(this.cost())}
                                Amount: ${format(getBuyableAmount("m",23))}
                                Effect: +${format(this.effect())} per bought.` },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if(!tmp.m.buyables[23].canAfford) return
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(hasUpgrade("m",15)?1e10 : 1))
            },
            style:{"height":"200px","width":"200px","border-radius":"4%","border":"6px solid","font-size":"15px","border-color":"rgba(85,85,255,0.7)"}
        },  
        24:{
            title:"E↓",
            cost(x) { return new Decimal("1e5024").tetrate(new Decimal(1.0001).pow(x))},
            effect(x) { return new Decimal(0.5).pow(x) },
            display() { return `Reduce the cost of "EXPONENT".
                                Cost: ${format(this.cost())}
                                Amount: ${format(getBuyableAmount("m",24))}
                                Effect: ^^${format(this.effect().times(100))}%.` },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            style:{"height":"200px","width":"200px","border-radius":"4%","border":"6px solid","font-size":"15px","border-color":"rgba(85,85,255,0.7)"}
        },    
        31:{
            title:"A → A",
            cost(x) { return new Decimal(1e42).pow(x.div(5).add(1)).div(x.times(10000).add(1)).tetrate(x.minus(155).max(0).div(200000).add(1))},
            effect(x) { return x.times(0.015).add(1) },
            display() { return `"ADDER" base effect is multiplied by a number for each "ADDER" bought.
                                Cost: ${format(this.cost())}
                                Amount: ${format(getBuyableAmount("m",31))}
                                Effect: x${format(this.effect())} per bought.` },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if(!tmp.m.buyables[31].canAfford) return
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(hasUpgrade("m",15)?1e10 : 1))
            },
            style:{"height":"200px","width":"200px","border-radius":"4%","border":"6px solid","font-size":"15px","border-color":"rgba(85,85,255,0.7)"}
        },    
        32:{
            title:"M↓",
            cost(x) { return new Decimal(1e48).pow(x.div(new Decimal(33.33).minus(x.div(2)).max(1)).pow(x.div(new Decimal(22.22).minus(x.div(3)).max(1)).add(1)).add(1))},
            effect(x) { return new Decimal(1).div(x.div(10).add(1).pow(0.4)) },
            display() { return `Reduce the cost of "MULTIPLIER".
                                Cost: ${format(this.cost())}
                                Amount: ${format(getBuyableAmount("m",32))}
                                Effect: ^${format(this.effect())}` },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if(!tmp.m.buyables[32].canAfford) return
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(hasUpgrade("m",15)?1e10 : 1))
            },
            style:{"height":"200px","width":"200px","border-radius":"4%","border":"6px solid","font-size":"15px","border-color":"rgba(85,85,255,0.7)"}
        },
        33:{
            title:"E → E",
            cost(x) { return new Decimal(1e103).tetrate(x.div(new Decimal(3000).minus(x.times(100))).plus(hasUpgrade("m",15)?1e10 : 1))},
            effect(x) { return x.times(0.0015) },
            display() { return `Add a number to "EXPONENT" base effect for each "EXPONENT" bought.
                                Cost: ${format(this.cost())}
                                Amount: ${format(getBuyableAmount("m",33))}
                                Effect: +${format(this.effect())} per bought.` },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if(!tmp.m.buyables[33].canAfford) return
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(hasUpgrade("m",15)?1e10 : 1))
            },
            style:{"height":"200px","width":"200px","border-radius":"4%","border":"6px solid","font-size":"15px","border-color":"rgba(85,85,255,0.7)"}
        },
        34:{
            title:"T → T",
            cost(x) { return new Decimal("1eeee10").tetrate(x.minus(1).max(0).div(10).add(1))},
            effect(x) { return x.times(0.00001) },
            display() { return `Add a number to "TETRATE" base effect for each "TETRATE" bought.
                                Cost: ${format(this.cost())}
                                Amount: ${format(getBuyableAmount("m",34))}
                                Effect: +${format(this.effect().times(100000))}/100000 per bought.` },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            style:{"height":"200px","width":"200px","border-radius":"4%","border":"6px solid","font-size":"15px","border-color":"rgba(85,85,255,0.7)"}
        },
    },
    upgrades:{
        11:{
            title:"AUTO I",
            description(){return `Buy 1 "ADDER" per tick and buying "ADDER" costs nothing.`},
            cost(){return new Decimal(1e13)},
            unlocked(){ 
                return true
            },
        },
        12:{
            title:"BOOST I",
            description(){return `The cost scaling of "ADDER" starts 50 later.`},
            cost(){return new Decimal(1e127)},
            unlocked(){ 
                return true
            },
        },
        13:{
            title:"AUTO II",
            description(){return `Buy 1 "M → A" per tick and buying "M → A" costs nothing.`},
            cost(){return new Decimal("1e1330")},
            unlocked(){ 
                return true
            },
        },        
        14:{
            title:"AUTO III",
            description(){return `Buy max "M → A" per tick.`},
            cost(){return new Decimal("1e4950")},
            unlocked(){ 
                return true
            },
        },
        15:{
            title:"AUTO ∞",
            description(){return `Buy 1e10 buyables per tick expect "TETRATE","E↓" and "T → T".`},
            cost(){return new Decimal("1e10000000")},
            unlocked(){ 
                return true
            },
        },
    },
    clickables:{
        11:{
            title(){return "Pause the game"},
            display(){return `Reduce MG points gain to 0`},
            style:{"height":"45px","width":"400px","background-color":"#000000","border-radius":"0%","border":"6px solid","border-color":"#ABCDEF","color":"#ABCDEF","text-shadow":"0 0 10px #ABCDEF","font-size":"15px"},
            unlocked(){return true},
            onClick(){
                player.m.Paused=!player.m.Paused
            },
            canClick(){return true}
        },
        12:{
            title(){return "Finish the game"},
            display(){return `Reach eee1e18 MG points to finish it and get a free "MULTIPLIER".`},
            style:{"height":"45px","width":"400px","background-color":"#000000","border-radius":"0%","border":"6px solid","border-color":"#FE0000","color":"#FE0000","text-shadow":"0 0 10px #ABCDEF","font-size":"15px"},
            unlocked(){return true},
            onClick(){
                player.m.upgrades=[]
                player.m.free=player.m.free.add(1)
                setBuyableAmount("m",11,new Decimal(0))
                setBuyableAmount("m",12,new Decimal(0))
                setBuyableAmount("m",13,new Decimal(0))
                setBuyableAmount("m",14,new Decimal(0))
                setBuyableAmount("m",21,new Decimal(0))
                setBuyableAmount("m",22,new Decimal(0))
                setBuyableAmount("m",23,new Decimal(0))
                setBuyableAmount("m",24,new Decimal(0))
                setBuyableAmount("m",31,new Decimal(0))
                setBuyableAmount("m",32,new Decimal(0))
                setBuyableAmount("m",33,new Decimal(0))
                setBuyableAmount("m",34,new Decimal(0))
                player.m.points=new Decimal(1)
            },
            canClick(){return player.m.points.gte("1eeee18")}
        },
    }
})