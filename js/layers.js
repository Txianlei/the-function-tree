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
        proton: new Decimal(0),
        neutron: new Decimal(0),
        ne:new Decimal(0),
        isSacrifice: false,
        totalpower: new Decimal(0),
        challengechecker: new Decimal(0),
        isca:false,
        iscm:false,
        isstud:false,
        inprotondil:false,
        inneutrondil:false,
        slog21time: 0,
        log12time: 0,
        log10_21time: 0,
        exp21time: 0,
        cfunc: "",
        randtext:"",
        y:new Decimal(1000),
        k:new Decimal(0.02),
        kmult:new Decimal(1),
        code:"",
        codeac:false,
        isspeedrun:false,
        speedruntime:0,
        currenttime:0,
        st0time:9999999999,
        st1time:9999999999,
        st2time:9999999999,
        st3time:9999999999,
        st4time:9999999999,
        besttime:9999999999,
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
    row:5, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    microtabs:{
        dilation:{
            "upgrades":{
                content:[
                    ["upgrades",[30,31,32]]
                ]
            },
            "proton buyables":{
                content:[
                    ["buyables",[1,2]]
                ],
                unlocked(){return hasUpgrade("f",301)}
            },
            "neutron buyables":{
                content:[
                    ["buyables",[3,4]]
                ],
                unlocked(){return hasUpgrade("f",305)}
            },
            "Challenges":{
                content:[
                    ["challenges",[9]]
                ]
            }
        }
    },
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
                ["upgrades",[25,26,27,28]],
            ],
            unlocked(){return player.f.ftype==3}
        },
        "x":{
            content:[
                ["display-text",
                function() { return 'Your point gain is:' },
                {"font-size":"25px"}],
                ["display-text",
                    function() { return player.f.cfunc+"="+format(getPointGen())+"/s" },
                    { "color": "rgb(65,205,255)", "font-size": "50px", "font-family": "Bahnschrift", "text-shadow" : "0 0 15px rgb(65,205,255)" }],
                ["display-text",
                    function() { return `You have ${format(player.points)} points.`},
                { "color": "rgb(65,205,255)", "font-size": "50px", "font-family": "Bahnschrift", "text-shadow" : "0 0 15px rgb(65,205,255)" }],
                "blank",
                "blank",
                "blank",
                ["upgrades",[33,34]],
            ],
            unlocked(){return player.f.ftype==4}
        },
        "Boosters":{
            content:[
                ["display-text",
                function() { return "Your function stage is " + player.f.ftype },
                { "color": "red", "font-size": "25px", "text-shadow" : "0 0 10px red"},],
                "blank",
                ["clickables",[1,2]]
            ],
            unlocked(){return (tmp.f.clickables[11].unlocked||player.f.ftype>=1)&&player.f.ftype<4}
        }, 
        "Challenges":{
            content:[
                ["challenges",[1,2,3,4,5,6,7,8]]
            ],
            unlocked(){return (player.f.challengechecker.gte(1)||hasUpgrade("f",35))&&player.f.ftype<4}
        },
        "Studies":{
            content:[
                ["display-text",function() { return `You've got <h2 style="color:rgb(255,180,0);text-shadow:0 0 5px yellow">${player.f.funcpower}</h2> cubes of function power`}],
                ["display-text",function() { return `Next at <h2 style="color:rgb(255,180,0);text-shadow:0 0 5px yellow">${format(player.f.cubereq)}</h2> points`}],
                "blank",
                "blank",
                ["clickables",[3]],
                ["upgrades",[13,14,15,16,17,18,19,20,21,22,23,24,29]]
            ],
            unlocked(){return (hasUpgrade("f",125)||player.f.isstud)&&player.f.ftype<4}
        },
        "Dilation":{
            content:[
                ["display-text",function() { return `You have <h2 style="color:rgb(50,205,50)">${format(player.f.proton)}</h2> proton.`}],
                ["display-text",function() { return hasUpgrade("f",304) ? `You have <h2 style="color:rgb(50,205,50)">${format(player.f.neutron)}</h2> neutron, which generates <h2 style="color:rgb(50,205,50)">${format(tmp.f.getneps)}</h2> neutron energy per second.` : ``}],
                ["display-text",function() { return hasUpgrade("f",304) ? `You have <h2 style="color:rgb(50,205,50)">${format(player.f.ne)}</h2> neutron energy, which multiplies points gain by <h2 style="color:rgb(50,205,50)">x${format(tmp.f.getneboost)}</h2>` : ``}],
                "blank",
                ["clickables",[4]],
                "blank",
                "blank",
                ["microtabs","dilation"]
            ],
            unlocked(){return hasUpgrade("f",291)}
        },
        "Others":{
            content:[
                ["display-text",
                function() { return "Your function stage is " + player.f.ftype },
                { "color": "red", "font-size": "25px", "text-shadow" : "0 0 10px red"},],
                "blank",
                ["clickables",[5,6]]
            ],
            unlocked(){return player.f.ftype==4}
        }, 
        "Code":{
            content:[
                ["display-text",
                function() { return player.f.code=="ACCEPTED"?`<h2 style="color:rgb(4, 205, 4);text-shadow:0 0 5px rgb(4, 205, 4)">${player.f.code}</h2>`:player.f.code=="DECLINED"?`<h2 style="color:rgb(226, 0, 0);text-shadow:0 0 5px rgb(226,0,0)">${player.f.code}</h2>`:`<h2 style="color:rgb(255,255,255);text-shadow:0 0 5px rgb(255,255,255)">${player.f.code}</h2>`},{ "font-size": "30px", "font-family": "Consolas"}],
                "blank",
                ["clickables",[7]],
                ["display-text",
                function() {return `You need to input a 4-digit code to upgrade your function, here are the hints.<br>
                                    1.These hints doesn't tell the order of the code, you need to find it by yourself.<br>
                                    2.For one of the code, you need to find the difference between the upside down, the number on the left of the different will tell the order.<br>
                                    3.For one of the code, you need to find the dark text under the chains<br>
                                    4.For one of the code, you need to check the progress you've got, what's the meaning of their name?<br>
                                    5.For one of the code, you need to go deeper when you found changes, the order will be told after you know other three.<br>
                                    6.If you confirm the right code, you will get a challenge achievement which is quite useful.<br>
                                    7.If you don't know the code, that's OK, input <em>The function tree</> to skip this one.`},{ "font-size": "15px"}],
                ["clickables",[8]]
            ],
            unlocked(){return player.f.ftype==4&&player.r.rc5fin}
        }, 
        "Speedrun":{
            content:[
                ["display-text",
                    function() { return `Current speedrun total time:<h2 style="color:rgb(255,255,255);text-shadow:0 0 5px rgb(255,255,255);font-family:MS Serif">${formatTime(player.f.speedruntime)}</h2>`},{ "font-size": "20px"}],
                "blank",
                ["display-text",
                    function() { return player.f.ftype==0?`Current stage time:<h2 style="color:rgb(200,100,120);text-shadow:0 0 5px rgb(200,100,120);font-family:MS Serif">${formatTime(player.f.currenttime)}</h2>`:
                                        player.f.ftype==1?`Current stage time:<h2 style="color:orange;text-shadow:0 0 5px orange;font-family:MS Serif">${formatTime(player.f.currenttime)}</h2>`:
                                        player.f.ftype==2?`Current stage time:<h2 style="color:rgb(250,180,0);text-shadow:0 0 5px rgb(250,180,0);font-family:MS Serif">${formatTime(player.f.currenttime)}</h2>`:
                                        player.f.ftype==3?`Current stage time:<h2 style="color:rgb(50,205,50);text-shadow:0 0 5px rgb(50,205,50);font-family:MS Serif">${formatTime(player.f.currenttime)}</h2>`:
                                        player.f.ftype==4?`Current stage time:<h2 style="color:rgb(65,205,225);text-shadow:0 0 5px rgb(65,205,225);font-family:MS Serif">${formatTime(player.f.currenttime)}</h2>`:"..."},{ "font-size": "20px"}],
                "blank",
                ["display-text",
                    function() { return `-Best time-<br>
                                stage 0:<h2 style="color:rgb(200,100,120);text-shadow:0 0 5px rgb(200,100,120);font-family:MS Serif">${formatTime(player.f.st0time)}</h2><br>
                                stage 1:<h2 style="color:orange;text-shadow:0 0 5px orange;font-family:MS Serif">${formatTime(player.f.st1time)}</h2><br>
                                stage 2:<h2 style="color:rgb(250,180,0);text-shadow:0 0 5px rgb(250,180,0);font-family:MS Serif">${formatTime(player.f.st2time)}</h2><br>
                                stage 3:<h2 style="color:rgb(50,205,50);text-shadow:0 0 5px rgb(50,205,50);font-family:MS Serif">${formatTime(player.f.st3time)}</h2><br>
                                stage 4:<h2 style="color:rgb(65,205,225);text-shadow:0 0 5px rgb(65,205,225);font-family:MS Serif">${formatTime(player.f.st4time)}</h2><br>
                                total:<h2 style="color:rgb(255,255,255);text-shadow:0 0 5px rgb(255,255,255);font-family:MS Serif">${formatTime(player.f.besttime)}</h2>`},{ "font-size": "17.5px"}],
            ],
            unlocked(){return player.f.isspeedrun}
        }, 
    },
    update(diff){
        player.f.speedruntime+=diff
        player.f.currenttime+=diff
        player.f.points=player.points
        player.f.multiplier=tmp.f.calctimer
        player.f.y=tmp.f.calcgamma
        player.f.caeffect=tmp.f.effofca.pow(player.f.calevel)
        player.f.cmeffect=tmp.f.effofcm.pow(player.f.cmlevel).pow(0.75)
        player.f.k=player.f.kmult.times(tmp.f.calcbasek)
        if (player.devSpeed>1) player.points= new Decimal(0)
        player.f.ne=player.f.ne.add(tmp.f.getneps.times(diff))
        if(hasUpgrade("f",75)) player.f.isca=true
        if(inChallenge("f",21)) player.f.slog21time+=(4*diff)
        if(inChallenge("f",32)&&player.f.ftype==1) player.f.log12time+=((challengeCompletions("f",32)*8+8)*(diff*5))
        if(inChallenge("f",61)) player.f.log10_21time+=(diff)
        if(inChallenge("f",81)) player.f.exp21time+=diff
        if(inChallenge("f",22)) player.points=player.points.min(5000)
        if(inChallenge("f",42)) player.points=player.points.min(20240)
        if(player.f.ftype==0) player.f.cfunc="slog"+(player.f.exp.eq(1)?"":"(")+(player.f.multiplier.neq(1)?"(":"")+"(x"+(player.f.adder.eq(0)?")":"+"+(`${format(player.f.adder)})`))+(player.f.multiplier.neq(1)?"*"+(`${format(player.f.multiplier)}`)+")":"")+(player.f.exp.eq(1)?"":"^"+(`${format(player.f.exp)}`)+")")+(hasUpgrade("f",42)?"*"+format(upgradeEffect("f",42)):"")
        if(player.f.ftype==1) player.f.cfunc="logᵧ"+(player.f.exp.eq(1)?"":"(")+(player.f.multiplier.neq(1)?"(":"")+"(x"+(player.f.adder.eq(0)?")":"+"+(`${format(player.f.adder)})`))+(player.f.multiplier.neq(1)?"*"+(`${format(player.f.multiplier)}`)+")":"")+(player.f.exp.eq(1)?"":"^"+(`${format(player.f.exp)}`)+")")+(inChallenge("f",31)?"/"+format(player.f.y.pow(((challengeCompletions("f",31)+1)*0.25))):"")
        if(player.f.ftype==2) player.f.cfunc="log10"+(player.f.exp.eq(1)?"":"(")+(player.f.multiplier.neq(1)?"(":"")+"(x"+(player.f.adder.eq(0)?")":"+"+(`${format(player.f.adder)})`))+(player.f.multiplier.neq(1)?"*"+(`${format(player.f.multiplier)}`)+")":"")+(player.f.exp.eq(1)?"":"^"+(`${format(player.f.exp)}`)+")")+(tmp.f.calctmult.gt(1)?"*"+format(tmp.f.calctmult):"")
        if(player.f.ftype==3) player.f.cfunc=(tmp.f.calctrueexp.neq(1)?"(":"")+(player.f.multiplier.neq(1)?"(":"")+(player.f.adder.neq(0)?"(":"")+"x"+(player.f.adder.eq(0)?"":"+"+(`${format(player.f.adder)})`))+(player.f.multiplier.neq(1)?"*"+(`${format(player.f.multiplier)}`)+")":"")+"^k"+(tmp.f.calctmult.gt(1)?"*"+format(tmp.f.calctmult):"")+(tmp.f.calctrueexp.neq(1)?")^"+format(tmp.f.calctrueexp):"")
        if(player.f.ftype==4) player.f.cfunc=(player.f.multiplier.neq(1)?"(":"")+(player.f.adder.neq(0)?"(":"")+"x"+(player.f.adder.eq(0)?"":"+"+(`${format(player.f.adder)})`))+(player.f.multiplier.neq(1)?"*"+(`${format(player.f.multiplier)}`)+")":"")
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
        //stage 4 cap
        if(player.f.ftype==4) a=a.min("e2e7")
        player.f.adder=a

    },
    getCube(){
        let scal3=new Decimal(1.8)
        let basereq=new Decimal(100)
        let cubediv=new Decimal(1)
        if(hasUpgrade("f",232)) cubediv=cubediv.times(upgradeEffect("f",232))
        if(hasUpgrade("f",183)) cubediv=cubediv.times(upgradeEffect("f",183))
        if(player.f.ftype==3) {
            basereq=new Decimal(2500)
            scal3=new Decimal(2)
        }
        if(hasUpgrade("f",213)) basereq=basereq.pow(0.5)
        if(hasUpgrade("f",143)) scal3=scal3.minus(0.6)
        scal3=scal3.minus(challengeCompletions("f",51)*0.1)
        if(hasUpgrade("f",231)) scal3=scal3.minus(0.075)
        player.f.cubereq=new Decimal(scal3).pow(player.f.totalpower.div(hasUpgrade("f",211)?1.5:1)).times(basereq.minus(hasAchievement("a",85)?1:0)).div(cubediv)
        if(player.points.gte(player.f.cubereq)&&player.f.cubereq!=undefined&&player.f.cubereq.neq(0)&&player.points!=undefined&&player.points.neq(0)) {
            player.f.funcpower=player.f.funcpower.add(1)
            player.f.totalpower=player.f.totalpower.add(1)
        }
    },
    calctimer(){
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
        //stage 4 cap
        if(player.f.ftype==4) m=m.min("e2e7")
        return m
    },
    calctmult(){
        let tmult=new Decimal(1)
        //stage 2
        if(hasUpgrade("f",112)) tmult=tmult.times(upgradeEffect("f",112))
        if(hasUpgrade("f",161)) tmult=tmult.times(2)
        if(hasUpgrade("f",204)) tmult=tmult.times(1.3)
        if(hasUpgrade("f",221)) tmult=tmult.times(2)
        if(player.f.log10_21time>60) tmult=tmult.div(1.5)
        if(player.f.log10_21time>85) tmult=tmult.times(0)
        //stage 3
        if(hasUpgrade("f",265)) tmult=tmult.times(upgradeEffect("f",265))
        if(hasUpgrade("f",283)) tmult=tmult.times(upgradeEffect("f",283)) 
        tmult=tmult.times(new Decimal(1.4).pow(challengeCompletions("f",71)))
        if(hasChallenge("f",82)) tmult=tmult.times(2)
        if(hasUpgrade("f",322)&&player.f.inprotondil) tmult=tmult.times(upgradeEffect("f",322))
        tmult=tmult.times(buyableEffect("f",12))
        if(!inChallenge("f",92)) tmult=tmult.times(tmp.f.getneboost)
        if(inChallenge("f",91)) tmult=tmult.div(1e6)
        if(inChallenge("f",72)) tmult=new Decimal(1)
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
    calckmult(){
        let kmult=new Decimal(1)
        let expand=new Decimal(0.02)
        if(hasUpgrade("f",264)) expand=expand.plus(0.02)
        if(hasUpgrade("f",182)) expand=expand.times(1.5)
        kmult=player.points.minus(10).max(0).pow(expand)
        return kmult.min(2.5)
    },
    calcbasek(){
        let basek=new Decimal(0.02)
        if(hasUpgrade("f",263)) basek=basek.add(0.005)
        if(hasUpgrade("f",273)) basek=basek.add(upgradeEffect("f",273))
        if(hasUpgrade("f",282)) basek=basek.add(0.005)
        if(hasUpgrade("f",162)) basek=basek.add(0.01)
        if(hasUpgrade("f",222)) basek=basek.add(0.02)
        if(hasAchievement("a",95)) basek=basek.add(0.001)
        if(hasUpgrade("f",323)) basek=basek.add(0.03)
        basek=basek.plus(new Decimal(0.008).times(challengeCompletions("f",72)))
        basek=basek.plus(buyableEffect("f",13))
        if(hasChallenge("f",91)) basek=basek.add(0.05)
        if(inChallenge("f",72)) basek=new Decimal(0.15).div(challengeCompletions("f",72)*2+1)
        if(inChallenge("f",82)) basek=new Decimal(0.002)
        if(inChallenge("f",92)) basek=new Decimal(0.001)
        if(inChallenge("f",93)) basek=basek.times((Decimal.pow(1.6,player.points.add(1).log10().floor())).min(400))
        return basek
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
    calctrueexp(){
        let et=new Decimal(1)
        if(inChallenge("f",71)) et=et.times(new Decimal(1).minus((new Decimal(challengeCompletions("f",71)+1)).times(0.15)))
        if(hasUpgrade("f",313)) et=et.times(1.1)
        if(hasUpgrade("f",321)) et=et.times(upgradeEffect("f",321))
        if(player.f.inprotondil) et=new Decimal(0.1)
        if(hasUpgrade("f",303)&&player.f.inprotondil) et=et.times(upgradeEffect("f",303))
        if(hasUpgrade("f",313)&&player.f.inprotondil) et=et.times(1.8)
        if(hasUpgrade("f",314)&&player.f.inneutrondil) et=et.times(1.5)
        if(inChallenge("f",91)) et=et.times(0.05)
        et=et.times(buyableEffect("f",42))
        return et
    },
    chargeadder(){
        let progress=player.f.capoints.max(1).log10().div(player.f.careq.log10())
        let scal1=new Decimal(18)
        let scal4=new Decimal(18)
        let pow1=new Decimal(1)
        let divcost=new Decimal(1)
        if(player.f.calevel.eq(75)) player.f.capoints=new Decimal(0)
        if(hasUpgrade("f",255)) divcost=divcost.times(upgradeEffect("f",255))
        if(player.f.ftype==3) pow1=pow1.add(0.2)
        if(hasUpgrade("f",193)) pow1=pow1.minus(0.1)
        if(player.f.calevel.gte(40)) pow1=pow1.add(0.15)
        if(hasUpgrade("f",172)) scal4=scal4.minus(4)
        if(hasUpgrade("f",83)) scal1=scal1.minus(3)
        if(hasUpgrade("f",171)) scal1=scal1.minus(5)
        if(hasUpgrade("f",94)) scal1=scal1.minus(upgradeEffect("f",94))
        if(inChallenge("f",31)) scal1=new Decimal(11)
        if(challengeCompletions("f",31)>0&&player.f.ftype==1) scal1=scal1.minus(challengeCompletions("f",31)*0.5)
        if(progress.gte(1)&&player.f.calevel.lt(75)){
            if(inChallenge("f",42)) player.points=new Decimal(0)
            player.f.calevel=player.f.calevel.plus(1)
            player.f.capoints=new Decimal(0)
        }
        player.f.careq=scal1.pow(scal4.pow(player.f.calevel.div(inChallenge("f",42)? 6 : 4)).add(1).log10().pow(pow1)).times(hasAchievement("a",45) ? 0.97 : 1).plus(inChallenge("f",31) ? 1 : 10).div(divcost)
        return format(progress.times(100))+"%"
    },
    effofca(){
        let eff1=new Decimal(1.5)
        if(hasUpgrade("f",101)) eff1=eff1.plus(0.1)
        if(player.f.ftype>=2) eff1=eff1.plus(0.1)
        if(hasUpgrade("f",203)) eff1=eff1.plus(0.2)
        if(hasUpgrade("f",274)) eff1=eff1.plus(upgradeEffect("f",274))
        if (inChallenge("f",42)) eff1=player.f.calevel.div(5-(player.f.calevel.div(5).min(3))).plus(1.5)
        return eff1
    },
    chargefactor(){
        let progress=player.f.cmpoints.max(1).log10().div(player.f.cmreq.log10())
        let scal2=new Decimal(25)
        let pow1=new Decimal(1)
        let divcost=new Decimal(1)
        if(player.f.cmlevel.eq(60)) player.f.cmpoints=new Decimal(0)
        if(hasUpgrade("f",254)) divcost=divcost.times(upgradeEffect("f",254))
        if(player.f.ftype==3) pow1=pow1.add(0.4)
        if(hasUpgrade("f",94)) scal2=scal2.minus(upgradeEffect("f",94))
        if(hasUpgrade("f",103)) scal2=scal2.minus(3)
        if(hasUpgrade("f",192)) scal2=scal2.minus(8)
        if(hasUpgrade("f",173)) scal2=scal2.minus(6)
        if(progress.gte(1)&&player.f.cmlevel.lt(60)){
            if(inChallenge("f",42)) player.points=new Decimal(0)
            player.f.cmlevel=player.f.cmlevel.plus(1)
            player.f.cmpoints=new Decimal(0)
        }
        player.f.cmreq=scal2.pow(new Decimal(25).pow(player.f.cmlevel.div(inChallenge("f",42)? 8 : 6)).add(1).log10().pow(pow1)).pow(1.5).plus(25).times(hasAchievement("a",65) ? 0.95 : 1).div(divcost)
        return format(progress.times(100))+"%"
    },
    effofcm(){
        let eff2=new Decimal(1.8)
        if(hasChallenge("f",41)) eff2=eff2.plus(0.1)
        if(player.f.ftype>=2) eff2=eff2.plus(0.1)
        if(hasUpgrade("f",203)) eff2=eff2.plus(0.2)
        if(hasUpgrade("f",275)) eff2=eff2.plus(upgradeEffect("f",275))
        if(inChallenge("f",42)) eff2=player.f.cmlevel.div(7-(player.f.cmlevel.div(3).min(5))).plus(1.8)
        return eff2
    },
    getproton(){
        let exp1=new Decimal(0.6)
        if(hasUpgrade("f",311)) exp1=exp1.add(0.4)
        exp1=exp1.add(buyableEffect("f",22))
        let protongain=player.points.div(10).add(1).ln().pow(exp1)
        protongain=protongain.times(buyableEffect("f",11))
        if(hasUpgrade("f",302)) protongain=protongain.times(upgradeEffect("f",302))
        if(hasAchievement("a",105)) protongain=protongain.times(1.05)
        protongain=protongain.pow(buyableEffect("f",33))
        if(hasChallenge("f",93)) protongain=protongain.pow(1.2)
        return protongain.minus(player.f.proton).max(0)
    },
    getneutron(){
        let exp2=new Decimal(0.6)
        if(hasUpgrade("f",314)) exp2=exp2.add(0.2)
        let neutrongain=player.points.div(25).add(1).log10().pow(exp2)
        neutrongain=neutrongain.times(buyableEffect("f",31))
        if(hasChallenge("f",92)) neutrongain=neutrongain.times(3)
        if(hasUpgrade("f",306)) neutrongain=neutrongain.times(upgradeEffect("f",306))
        if(hasChallenge("f",93)) neutrongain=neutrongain.pow(1.2)
        return neutrongain.minus(player.f.neutron).max(0)
    },
    getneps(){
        let exp3=new Decimal(1.825)
        if(hasUpgrade("f",315)) exp3=exp3.add(0.15)
        exp3=exp3.add(buyableEffect("f",43))
        let neps=Decimal.pow(exp3,player.f.neutron.add(1).ln()).minus(1)
        neps=neps.times(buyableEffect("f",32))
        if(hasUpgrade("f",325)) neps=neps.pow(1.5)
        return neps
    },
    getneboost(){
        let exp4=new Decimal(2)
        if(hasUpgrade("f",324)) exp4=exp4.add(upgradeEffect("f",324))
        exp4=exp4.add(buyableEffect("f",43))
        let neboost=player.f.ne.add(1).log10().times(2).pow(exp4).add(1)
        if(hasChallenge("f",92)) neboost=player.f.ne.add(1).ln().times(exp4).pow(exp4).add(1)
        return neboost
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
            effect(){return player.f.adder.add(1).slog().pow(0.8).div(2).max(0)},
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
            effect(){return new Decimal(player.f.adder.add(1).log10()).pow(player.f.adder.add(1).slog().add(1)).div(3).max(1)},
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
            effect(){return new Decimal(player.f.multiplier.add(1).ln()).pow(player.f.multiplier.add(1).slog().add(1)).div(5).max(1)},
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
            effect(){return player.f.adder.add(1).pow(0.4).min(100)},
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
            effect(){return player.f.adder.add(1).log(1500).add(1).log(player.f.adder.pow(0.025).add(1)).add(1).times((hasUpgrade("f",142)||inChallenge("f",52))?upgradeEffect("f",142):1)},
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
                return (hasUpgrade("f",125)||player.f.isstud)&&(player.f.ftype==2||player.f.ftype==3)
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
                return hasUpgrade("f",125)||player.f.isstud&&(player.f.ftype==2||player.f.ftype==3)
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
        143:{
            title:"21",
            description(){return "Reduce the cube cost exp. by 0.6"},
            cost(){return new Decimal(1)},
            currencyDisplayName:"cube",
            unlocked(){ 
                return (hasUpgrade("f",285)&&player.f.isstud)&&player.f.ftype==3
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(65,255,85)","font-size":"15px","margin-top":"25px",
            "color"(){
                let c="black"
                if(!hasUpgrade("f",143)&&canAffordUpgrade("f",143)) c="rgb(65,255,85)"
                return c
            },
            "background"(){
                let a=""
                if(!hasUpgrade("f",143)&&canAffordUpgrade("f",143)) a="radial-gradient(black 50%,rgb(65,255,85))"
                return a
            }},
            canAfford(){return player.f.funcpower.gte(1)&&hasUpgrade("f",131)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(1)},
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
                return (hasUpgrade("f",125)||player.f.isstud)&&(player.f.ftype==2||player.f.ftype==3)
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
            canAfford(){return player.f.funcpower.gte(3)&&(player.f.ftype==3 ? hasUpgrade("f",131) : hasUpgrade("f",151)||hasUpgrade("f",152)||hasUpgrade("f",153))},
            pay(){return player.f.funcpower=player.f.funcpower.minus(3)},
            branches(){return player.f.ftype==3 ? [131] : [151,152,153]},
        },
        162:{
            title:"42",
            description(){return "Add 0.01 to base k."},
            cost(){return new Decimal(2)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",285)&&player.f.isstud)&&player.f.ftype==3
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(65,255,85)","font-size":"15px","margin-top":"25px","margin-left":"25px",
            "color"(){
                let c="black"
                if(!hasUpgrade("f",162)&&canAffordUpgrade("f",162)) c="rgb(65,255,85)"
                return c
            },
            "background"(){
                let a=""
                if(!hasUpgrade("f",162)&&canAffordUpgrade("f",162)) a="radial-gradient(black 50%,rgb(65,255,85))"
                return a
            }},
            canAfford(){return player.f.funcpower.gte(2)&&hasUpgrade("f",143)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(2)},
            branches:[143]
        },
        171:{
            title:"51",
            description(){return "Reduce the cost exp. of charging adder by 5."},
            cost(){return new Decimal(6)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",125)||player.f.isstud)&&(player.f.ftype==2||player.f.ftype==3)
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
                return (hasUpgrade("f",125)||player.f.isstud)&&(player.f.ftype==2||player.f.ftype==3)
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
        173:{
            title:"53",
            description(){return "Reduce the cost exp. of charging factor by 6."},
            cost(){return new Decimal(2)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",285)&&player.f.isstud)&&player.f.ftype==3
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(65,255,85)","font-size":"15px","margin-top":"25px","margin-left":"25px",
            "color"(){
                let c="black"
                if(!hasUpgrade("f",173)&&canAffordUpgrade("f",173)) c="rgb(65,255,85)"
                return c
            },
            "background"(){
                let a=""
                if(!hasUpgrade("f",173)&&canAffordUpgrade("f",173)) a="radial-gradient(black 50%,rgb(65,255,85))"
                return a
            }},
            canAfford(){return player.f.funcpower.gte(2)&&hasUpgrade("f",162)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(2)},
            branches:[162]
        },
        174:{
            title:"54",
            description(){return `Add 1 to base adder for each adder charger level.`},
            cost(){return new Decimal(3)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",285)&&player.f.isstud)&&player.f.ftype==3
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(65,255,85)","font-size":"15px","margin-top":"25px","margin-left":"25px",
            "color"(){
                let c="black"
                if(!hasUpgrade("f",174)&&canAffordUpgrade("f",174)) c="rgb(65,255,85)"
                return c
            },
            "background"(){
                let a=""
                if(!hasUpgrade("f",174)&&canAffordUpgrade("f",174)) a="radial-gradient(black 50%,rgb(65,255,85))"
                return a
            }},
            canAfford(){return player.f.funcpower.gte(3)&&hasUpgrade("f",173)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(3)},
            effect(){return player.f.calevel.pow(hasUpgrade("f",184) ? upgradeEffect("f",184) : 1)},
            effectDisplay(){return `+${format(upgradeEffect("f",174))}`},
            branches:[173]
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
        182:{
            title:"61",
            description(){return "Expand formula is better and expanding  doesn't reset upgrades."},
            cost(){return new Decimal(2)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",285)&&player.f.isstud)&&player.f.ftype==3
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(65,255,85)","font-size":"15px","margin-top":"25px",
            "color"(){
                let c="black"
                if(!hasUpgrade("f",182)&&canAffordUpgrade("f",182)) c="rgb(65,255,85)"
                return c
            },
            "background"(){
                let a=""
                if(!hasUpgrade("f",182)&&canAffordUpgrade("f",182)) a="radial-gradient(black 50%,rgb(65,255,85))"
                return a
            }},
            canAfford(){return player.f.funcpower.gte(2)&&hasUpgrade("f",173)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(2)},
            branches:[173]
        },
        183:{
            title:"62",
            description(){return "Divide cube cost based on points."},
            cost(){return new Decimal(2)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",285)&&player.f.isstud)&&player.f.ftype==3
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(65,255,85)","font-size":"15px","margin-top":"25px","margin-left":"25px",
            "color"(){
                let c="black"
                if(!hasUpgrade("f",183)&&canAffordUpgrade("f",183)) c="rgb(65,255,85)"
                return c
            },
            "background"(){
                let a=""
                if(!hasUpgrade("f",183)&&canAffordUpgrade("f",183)) a="radial-gradient(black 50%,rgb(65,255,85))"
                return a
            }},
            canAfford(){return player.f.funcpower.gte(2)&&hasUpgrade("f",174)},
            effect(){return player.points.add(1).log10().pow(hasUpgrade("f",184) ? upgradeEffect("f",184) : 1).add(1)},
            effectDisplay(){return `/${format(upgradeEffect("f",183))}`},
            pay(){return player.f.funcpower=player.f.funcpower.minus(2)},
            branches:[174]
        },
        184:{
            title:"63",
            description(){return "Boost study 62 and 54's effects based on total cubes."},
            cost(){return new Decimal(4)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",285)&&player.f.isstud)&&player.f.ftype==3
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(65,255,85)","font-size":"15px","margin-top":"25px","margin-left":"25px",
            "color"(){
                let c="black"
                if(!hasUpgrade("f",184)&&canAffordUpgrade("f",184)) c="rgb(65,255,85)"
                return c
            },
            "background"(){
                let a=""
                if(!hasUpgrade("f",184)&&canAffordUpgrade("f",184)) a="radial-gradient(black 50%,rgb(65,255,85))"
                return a
            }},
            canAfford(){return player.f.funcpower.gte(4)&&hasUpgrade("f",174)},
            effect(){return player.f.totalpower.div(50).times(player.f.totalpower.pow(0.05).div(25).add(1)).add(1).min(2)},
            effectDisplay(){return `^${format(upgradeEffect("f",184))}`},
            pay(){return player.f.funcpower=player.f.funcpower.minus(4)},
            branches:[174]
        },
        191:{
            title:"71",
            description(){return "Add 25 to the base multiplier of x."},
            cost(){return new Decimal(3)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",125)||player.f.isstud)&&(player.f.ftype==2||player.f.ftype==3)
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(255,180,0)","font-size":"15px","margin-top":"25px",
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
            canAfford(){return player.f.funcpower.gte(3)&&(player.f.ftype==3 ? hasUpgrade("f",171)||hasUpgrade("f",172) :hasUpgrade("f",181))},
            pay(){return player.f.funcpower=player.f.funcpower.minus(3)},
            branches(){return player.f.ftype==3 ? [171,172] : [181]},
        },
        192:{
            title:"72",
            description(){return "Reduce the cost exp. of charging factor by 8."},
            cost(){return new Decimal(5)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",125)||player.f.isstud)&&(player.f.ftype==2||player.f.ftype==3)
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
            canAfford(){return player.f.funcpower.gte(5)&&(player.f.ftype==3 ? hasUpgrade("f",171)||hasUpgrade("f",172) :hasUpgrade("f",181))},
            pay(){return player.f.funcpower=player.f.funcpower.minus(5)},
            branches(){return player.f.ftype==3 ? [171,172] : [181]},
        },
        193:{
            title:"73",
            description(){return "Reduce the cost-scaling in stage 3 of adder charger by 0.1."},
            cost(){return new Decimal(4)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",285)&&player.f.isstud)&&player.f.ftype==3
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(65,255,85)","font-size":"15px","margin-top":"25px","margin-left":"25px",
            "color"(){
                let c="black"
                if(!hasUpgrade("f",193)&&canAffordUpgrade("f",193)) c="rgb(65,255,85)"
                return c
            },
            "background"(){
                let a=""
                if(!hasUpgrade("f",193)&&canAffordUpgrade("f",193)) a="radial-gradient(black 50%,rgb(65,255,85))"
                return a
            }},
            canAfford(){return player.f.funcpower.gte(4)&&hasUpgrade("f",192)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(4)},
            branches:[192]
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
                return (hasUpgrade("f",125)||player.f.isstud)&&(player.f.ftype==2||player.f.ftype==3)
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
        205:{
            title:"85",
            description(){return "The factor of x is raised to ^1.075."},
            cost(){return new Decimal(3)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",285)&&player.f.isstud)&&player.f.ftype==3
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(65,255,85)","font-size":"15px","margin-top":"25px","margin-left":"25px",
            "color"(){
                let c="black"
                if(!hasUpgrade("f",205)&&canAffordUpgrade("f",205)) c="rgb(65,255,85)"
                return c
            },
            "background"(){
                let a=""
                if(!hasUpgrade("f",205)&&canAffordUpgrade("f",205)) a="radial-gradient(black 50%,rgb(65,255,85))"
                return a
            }},
            canAfford(){return player.f.funcpower.gte(3)&&hasUpgrade("f",192)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(3)},
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
        212:{
            title:"91",
            description(){return "Add 1.5 to base factor for each level of factor charger."},
            cost(){return new Decimal(3)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",285)&&player.f.isstud)&&player.f.ftype==3
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(65,255,85)","font-size":"15px","margin-top":"25px","margin-left":"25px",
            "color"(){
                let c="black"
                if(!hasUpgrade("f",212)&&canAffordUpgrade("f",212)) c="rgb(65,255,85)"
                return c
            },
            "background"(){
                let a=""
                if(!hasUpgrade("f",212)&&canAffordUpgrade("f",212)) a="radial-gradient(black 50%,rgb(65,255,85))"
                return a
            }},
            effect(){return player.f.cmlevel.times(1.5)},
            effectDisplay(){return `+${format(upgradeEffect("f",212))}`},
            canAfford(){return player.f.funcpower.gte(3)&&hasUpgrade("f",191)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(3)},
            branches:[191]
        },
        213:{
            title:"92",
            description(){return "Base cube req is square-rooted."},
            cost(){return new Decimal(6)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",285)&&player.f.isstud)&&player.f.ftype==3
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(65,255,85)","font-size":"15px","margin-top":"25px","margin-left":"25px",
            "color"(){
                let c="black"
                if(!hasUpgrade("f",213)&&canAffordUpgrade("f",213)) c="rgb(65,255,85)"
                return c
            },
            "background"(){
                let a=""
                if(!hasUpgrade("f",213)&&canAffordUpgrade("f",213)) a="radial-gradient(black 50%,rgb(65,255,85))"
                return a
            }},
            canAfford(){return player.f.funcpower.gte(6)&&hasUpgrade("f",205)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(6)},
            branches:[205]
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
            canAfford(){return player.f.funcpower.gte(6)&&hasUpgrade("f",211)&&hasChallenge("f",61)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(6)},
            effect(){return new Decimal(player.f.cmlevel).pow(3).add(1).log10().pow(5)},
            effectDisplay(){return `+${format(upgradeEffect("f",221))}`},
            branches:[211]
        },
        222:{
            title:"101",
            description(){return "Add 0.02 to base k."},
            cost(){return new Decimal(6)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",285)&&player.f.isstud)&&player.f.ftype==3
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(65,255,85)","font-size":"15px","margin-top":"25px","margin-left":"25px",
            "color"(){
                let c="black"
                if(!hasUpgrade("f",222)&&canAffordUpgrade("f",222)) c="rgb(65,255,85)"
                return c
            },
            "background"(){
                let a=""
                if(!hasUpgrade("f",222)&&canAffordUpgrade("f",222)) a="radial-gradient(black 50%,rgb(65,255,85))"
                return a
            }},
            canAfford(){return player.f.funcpower.gte(6)&&(hasUpgrade("f",212)||hasUpgrade("f",213))},
            pay(){return player.f.funcpower=player.f.funcpower.minus(6)},
            branches:[212,213]
        },
        223:{
            title:"102",
            description(){return "Unlock a challenge."},
            cost(){return new Decimal(11)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",285)&&player.f.isstud)&&player.f.ftype==3
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(65,255,85)","font-size":"15px","margin-top":"25px","margin-left":"25px",
            "color"(){
                let c="black"
                if(!hasUpgrade("f",223)&&canAffordUpgrade("f",223)) c="rgb(65,255,85)"
                return c
            },
            "background"(){
                let a=""
                if(!hasUpgrade("f",223)&&canAffordUpgrade("f",223)) a="radial-gradient(black 50%,rgb(65,255,85))"
                return a
            }},
            canAfford(){return player.f.funcpower.gte(11)&&hasUpgrade("f",222)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(11)},
            branches:[222]
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
        233:{
            title:"111",
            description(){return "Unlock a challenge."},
            cost(){return new Decimal(25)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",285)&&player.f.isstud)&&player.f.ftype==3
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(65,255,85)","font-size":"15px","margin-top":"25px","margin-left":"25px",
            "color"(){
                let c="black"
                if(!hasUpgrade("f",233)&&canAffordUpgrade("f",233)) c="rgb(65,255,85)"
                return c
            },
            "background"(){
                let a=""
                if(!hasUpgrade("f",233)&&canAffordUpgrade("f",233)) a="radial-gradient(black 50%,rgb(65,255,85))"
                return a
            }},
            canAfford(){return player.f.funcpower.gte(25)&&hasUpgrade("f",234)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(25)},
            branches:[234]
        },
        234:{
            title:"112",
            description(){return "Add a number to the adder of x based on unspent cubes."},
            cost(){return new Decimal(7)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",285)&&player.f.isstud)&&player.f.ftype==3
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(65,255,85)","font-size":"15px","margin-top":"25px","margin-left":"25px",
            "color"(){
                let c="black"
                if(!hasUpgrade("f",234)&&canAffordUpgrade("f",234)) c="rgb(65,255,85)"
                return c
            },
            "background"(){
                let a=""
                if(!hasUpgrade("f",234)&&canAffordUpgrade("f",234)) a="radial-gradient(black 50%,rgb(65,255,85))"
                return a
            }},
            canAfford(){return player.f.funcpower.gte(7)&&hasUpgrade("f",222)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(7)},
            effect(){return Decimal.pow(4,hasUpgrade("f",312) ? player.f.totalpower : player.f.funcpower.add(1).ln().pow(1.7)).min(2e8)},
            effectDisplay(){return `+${format(upgradeEffect("f",234))}`},      
            branches:[222]
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
        242:{
            title:"121",
            description(){return "The adder of x is raised to ^1.075."},
            cost(){return new Decimal(9)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",285)&&player.f.isstud)&&player.f.ftype==3
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(65,255,85)","font-size":"15px","margin-top":"25px","margin-left":"25px",
            "color"(){
                let c="black"
                if(!hasUpgrade("f",242)&&canAffordUpgrade("f",242)) c="rgb(65,255,85)"
                return c
            },
            "background"(){
                let a=""
                if(!hasUpgrade("f",242)&&canAffordUpgrade("f",242)) a="radial-gradient(black 50%,rgb(65,255,85))"
                return a
            }},
            canAfford(){return player.f.funcpower.gte(9)&&hasUpgrade("f",234)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(9)}, 
            branches:[234]
        },
        243:{
            title:"122",
            description(){return "Unlock a challenge."},
            cost(){return new Decimal(50)},
            currencyDisplayName:"cubes",
            unlocked(){ 
                return (hasUpgrade("f",285)&&player.f.isstud)&&player.f.ftype==3
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(65,255,85)","font-size":"15px","margin-top":"25px","margin-left":"25px",
            "color"(){
                let c="black"
                if(!hasUpgrade("f",243)&&canAffordUpgrade("f",243)) c="rgb(65,255,85)"
                return c
            },
            "background"(){
                let a=""
                if(!hasUpgrade("f",243)&&canAffordUpgrade("f",243)) a="radial-gradient(black 50%,rgb(65,255,85))"
                return a
            }},
            canAfford(){return player.f.funcpower.gte(50)&&hasUpgrade("f",242)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(50)}, 
            branches:[242]
        },
        251:{
            title:"I",
            description(){return "Generate 1.1 points per second."},
            cost(){return new Decimal(1)},
            unlocked(){ 
                return player.f.ftype==3
            },
            canAfford(){return player.points.gte(1)},
            pay(){return player.points=player.points.minus(1)},
        },
        252:{
            title:"II",
            description(){return "Add a number to x based on points."},
            cost(){return new Decimal(10)},
            unlocked(){ 
                return hasUpgrade("f",251)&&player.f.ftype==3
            },
            canAfford(){return player.points.gte(10)},
            pay(){return player.points=player.points.minus(10)},
            effect(){return player.points.add(1).pow(hasUpgrade("f",281) ? 0.7 : 0.4).minus(1).max(0).min(2e5)},
            effectDisplay(){return `+${format(upgradeEffect("f",252))}`},
        },
        253:{
            title:"III",
            description(){return "Add a number to the factor of x based on points."},
            cost(){return new Decimal(25)},
            unlocked(){ 
                return hasUpgrade("f",252)&&player.f.ftype==3
            },
            canAfford(){return player.points.gte(25)},
            pay(){return player.points=player.points.minus(25)},
            effect(){return player.points.add(1).pow(hasUpgrade("f",281) ? 0.45 :0.25).minus(1).times(1.1).max(0).min(1e5)},
            effectDisplay(){return `+${format(upgradeEffect("f",253))}`},
        },
        254:{
            title:"IV",
            description(){return "Divide the cost of charging multiplier based on points."},
            cost(){return new Decimal(50)},
            unlocked(){
                return hasUpgrade("f",253)&&player.f.ftype==3
            },
            canAfford(){return player.points.gte(50)},
            pay(){return player.points=player.points.minus(50)},
            effect(){return player.points.add(1).pow(2).log10().pow(0.5).add(1).min(5)},
            effectDisplay(){return `/${format(upgradeEffect("f",254))}`},
        },
        255:{
            title:"V",
            description(){return "Divide the cost of charging adder based on points."},
            cost(){return new Decimal(80)},
            unlocked(){
                return hasUpgrade("f",254)&&player.f.ftype==3
            },
            canAfford(){return player.points.gte(80)},
            pay(){return player.points=player.points.minus(80)},
            effect(){return player.points.add(1).pow(3).log10().pow(0.7).add(1).min(10)},
            effectDisplay(){return `/${format(upgradeEffect("f",255))}`},
        },
        261:{
            title:"VI",
            description(){return "Add a number to x based on the factor of x."},
            cost(){return new Decimal(45)},
            unlocked(){
                return hasUpgrade("f",255)&&player.f.ftype==3
            },
            canAfford(){return player.points.gte(45)},
            pay(){return player.points=player.points.minus(45)},
            effect(){return player.f.multiplier.pow(0.4).div(4).min(2000)},
            effectDisplay(){return `+${format(upgradeEffect("f",261))}`},
        },
        262:{
            title:"VII",
            description(){return "Add a number to the factor of x based on the adder of x."},
            cost(){return new Decimal(70)},
            unlocked(){
                return hasUpgrade("f",261)&&player.f.ftype==3
            },
            canAfford(){return player.points.gte(70)},
            pay(){return player.points=player.points.minus(70)},
            effect(){return player.f.multiplier.pow(0.5).div(7).min(2000)},
            effectDisplay(){return `+${format(upgradeEffect("f",262))}`},
        },
        263:{
            title:"VIII",
            description(){return "Add 0.005 to base k."},
            cost(){return new Decimal(91)},
            unlocked(){
                return hasUpgrade("f",262)&&player.f.ftype==3
            },
            canAfford(){return player.points.gte(91)},
            pay(){return player.points=player.points.minus(91)},
        },
        264:{
            title:"IX",
            description(){return "Expand formula is better."},
            cost(){return new Decimal(125)},
            unlocked(){
                return hasUpgrade("f",263)&&player.f.ftype==3
            },
            canAfford(){return player.points.gte(125)},
            pay(){return player.points=player.points.minus(125)},
        },
        265:{
            title:"X",
            description(){return "Boost point gain based on the adder of x."},
            cost(){return new Decimal(150)},
            unlocked(){
                return hasUpgrade("f",264)&&player.f.ftype==3
            },
            canAfford(){return player.points.gte(150)},
            pay(){return player.points=player.points.minus(150)},
            effect(){return player.f.adder.pow(3.5).add(1).ln().pow(0.5).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("f",265))}`},
        },
        271:{
            title:"XI",
            description(){return "Boost the adder of x based on itself."},
            cost(){return new Decimal(350)},
            unlocked(){
                return hasUpgrade("f",265)&&player.f.ftype==3
            },
            canAfford(){return player.points.gte(350)},
            pay(){return player.points=player.points.minus(350)},
            effect(){return player.f.adder.add(1).log10().pow(hasUpgrade("f",281) ? 2.3 :1.7).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("f",271))}`},
        },
        272:{
            title:"XII",
            description(){return "Boost the multiplier of x based on itself."},
            cost(){return new Decimal(500)},
            unlocked(){
                return hasUpgrade("f",271)&&player.f.ftype==3
            },
            canAfford(){return player.points.gte(500)},
            pay(){return player.points=player.points.minus(500)},
            effect(){return player.f.multiplier.add(1).times(hasUpgrade("f",281) ? 11 :4).log10().pow(1.1).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("f",272))}`},
        },
        273:{
            title:"XIII",
            description(){return "Add a number to k based on points."},
            cost(){return new Decimal(700)},
            unlocked(){
                return hasUpgrade("f",272)&&player.f.ftype==3
            },
            canAfford(){return player.points.gte(700)},
            pay(){return player.points=player.points.minus(700)},
            effect(){return Decimal.pow(1.8,player.points.add(1).log10()).minus(1).max(0).div(2500).min(0.01)},
            effectDisplay(){return `+${format(upgradeEffect("f",273))}`},
        },
        274:{
            title:"XIII",
            description(){return "Add a number to the effect exp. of charging adder based on its'level."},
            cost(){return new Decimal(900)},
            unlocked(){
                return hasUpgrade("f",273)&&player.f.ftype==3
            },
            canAfford(){return player.points.gte(900)},
            pay(){return player.points=player.points.minus(900)},
            effect(){return player.f.calevel.add(1).ln().div(30)},
            effectDisplay(){return `+${format(upgradeEffect("f",274))}`},
        },
        275:{
            title:"XV",
            description(){return "Add a number to the effect exp. of charging multiplier based on its'level."},
            cost(){return new Decimal(1300)},
            unlocked(){
                return hasUpgrade("f",274)&&player.f.ftype==3
            },
            canAfford(){return player.points.gte(1300)},
            pay(){return player.points=player.points.minus(1300)},
            effect(){return player.f.cmlevel.add(1).ln().div(50)},
            effectDisplay(){return `+${format(upgradeEffect("f",275))}`},
        },
        281:{
            title:"XVI",
            description(){return "Upgrade II,III,XI,XII's effects are stronger."},
            cost(){return new Decimal(600)},
            unlocked(){
                return hasUpgrade("f",275)&&player.f.ftype==3
            },
            canAfford(){return player.points.gte(600)},
            pay(){return player.points=player.points.minus(600)},
        },
        282:{
            title:"XVII",
            description(){return "Add 0.005 to base k."},
            cost(){return new Decimal(800)},
            unlocked(){
                return hasUpgrade("f",281)&&player.f.ftype==3
            },
            canAfford(){return player.points.gte(800)},
            pay(){return player.points=player.points.minus(800)},
        },
        283:{
            title:"XVIII",
            description(){return "Points boost themselves."},
            cost(){return new Decimal(1200)},
            unlocked(){
                return hasUpgrade("f",282)&&player.f.ftype==3
            },
            canAfford(){return player.points.gte(1200)},
            pay(){return player.points=player.points.minus(1200)},
            effect(){return player.points.pow(0.2).add(1).ln().pow(1.3).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("f",283))}`},
        },
        284:{
            title:"XIX",
            description(){return "The adder of x is raised to ^(1+k)."},
            cost(){return new Decimal(1600)},
            unlocked(){
                return hasUpgrade("f",283)&&player.f.ftype==3
            },
            canAfford(){return player.points.gte(1600)},
            pay(){return player.points=player.points.minus(1600)},
            effect(){return player.f.k.plus(1)},
            effectDisplay(){return `^${format(upgradeEffect("f",284))}`},
        },
        285:{
            title:"XIX",
            description(){return "Triple the multiplier of x and unlock some new studies."},
            cost(){return new Decimal(4000)},
            unlocked(){
                return hasUpgrade("f",284)&&player.f.ftype==3
            },
            canAfford(){return player.points.gte(4000)},
            pay(){return player.points=player.points.minus(4000)},
        },
        291:{
            title:"131",
            description(){return hasChallenge("f",82) ? "Unlock dilation.":player.f.randtext},
            cost(){return new Decimal(0)},
            currencyDisplayName:"cube",
            unlocked(){ 
                return (hasUpgrade("f",285)&&player.f.isstud)&&player.f.ftype==3&&hasChallenge("f",82)
            },
            style:{"height":"150px","width":"250px","border":"6px solid","border-color":"rgb(45,205,60)","font-size":"15px","margin-top":"25px","margin-left":"25px",
            "color"(){
                let c="black"
                if(!hasUpgrade("f",291)&&canAffordUpgrade("f",291)) c="rgb(45,205,20)"
                return c
            },
            "background"(){
                let a=""
                if(!hasUpgrade("f",291)&&canAffordUpgrade("f",291)) a="radial-gradient(black 50%,rgb(45,205,60))"
                return a
            },
            "background-color"(){
                let b=""
                if(!hasChallenge("f",82)) b="#ad0000"
                return b
            }},
            canAfford(){return player.f.funcpower.gte(0)&&hasUpgrade("f",242)&&hasChallenge("f",82)},
            pay(){return player.f.funcpower=player.f.funcpower.minus(0)}, 
            branches:[242]
        },
        301:{
            description(){return `Unlock dilation buyables`},
            cost(){return new Decimal(2)},
            currencyDisplayName:"proton",
            unlocked(){ 
                return hasUpgrade("f",291)
            },
            style:{"height":"75px","width":"175px","border":"2px solid","font-size":"15px",
            "background-color"(){
                let b=""
                if(!hasUpgrade("f",301)&&canAffordUpgrade("f",301)) b="#0000CC"
                return b
            }},
            canAfford(){return player.f.proton.gte(2)},
            pay(){return player.f.proton=player.f.proton.minus(2)}, 
        },
        302:{
            description(){return `Boost proton gain based on proton.`},
            cost(){return new Decimal(7)},
            currencyDisplayName:"proton",
            unlocked(){ 
                return hasUpgrade("f",291)
            },
            style:{"height":"75px","width":"175px","border":"2px solid","font-size":"15px",
            "background-color"(){
                let b=""
                if(!hasUpgrade("f",302)&&canAffordUpgrade("f",302)) b="#0000CC"
                return b
            }},
            canAfford(){return player.f.proton.gte(7)},
            pay(){return player.f.proton=player.f.proton.minus(7)}, 
            effect(){return player.f.proton.add(1).ln().pow(1.1).add(1).pow(hasUpgrade("f",321)?upgradeEffect("f",321):1)},
            effectDisplay(){return `x${format(upgradeEffect("f",302))}`},
        },
        303:{
            description(){return `While in proton dilation,point gain is raised to a number based on proton`},
            cost(){return new Decimal(42)},
            currencyDisplayName:"proton",
            unlocked(){ 
                return hasUpgrade("f",291)
            },
            style:{"height":"75px","width":"175px","border":"2px solid","font-size":"15px",
            "background-color"(){
                let b=""
                if(!hasUpgrade("f",303)&&canAffordUpgrade("f",303)) b="#0000CC"
                return b
            }},
            canAfford(){return player.f.proton.gte(42)},
            pay(){return player.f.proton=player.f.proton.minus(42)}, 
            effect(){return player.f.proton.add(1).log10().add(1).pow(2).ln().pow(0.6).max(1).min(2.5)},
            effectDisplay(){return `^${format(upgradeEffect("f",303))}`},
        },
        304:{
            description(){return `Unlock neutron dilation.`},
            cost(){return new Decimal(10000)},
            currencyDisplayName:"proton",
            unlocked(){ 
                return hasUpgrade("f",291)
            },
            style:{"height":"75px","width":"175px","border":"2px solid","font-size":"15px","margin-left":"20px",
            "background-color"(){
                let b=""
                if(!hasUpgrade("f",304)&&canAffordUpgrade("f",304)) b="#EF1300"
                return b
            }},
            canAfford(){return player.f.proton.gte(10000)},
            pay(){return player.f.proton=player.f.proton.minus(10000)}, 
        },
        305:{
            description(){return `Unlock more dilation buyables.`},
            cost(){return new Decimal(100)},
            currencyDisplayName:"NE",
            unlocked(){ 
                return hasUpgrade("f",291)
            },
            style:{"height":"75px","width":"175px","border":"2px solid","font-size":"15px",
            "background-color"(){
                let b=""
                if(!hasUpgrade("f",305)&&canAffordUpgrade("f",305)) b="#EF1300"
                return b
            }},
            canAfford(){return player.f.ne.gte(100)},
            pay(){return player.f.ne=player.f.ne.minus(100)}, 
        },
        306:{
            description(){return `Boost neutron gain base on points.`},
            cost(){return new Decimal(1500)},
            currencyDisplayName:"NE",
            unlocked(){ 
                return hasUpgrade("f",291)
            },
            style:{"height":"75px","width":"175px","border":"2px solid","font-size":"15px",
            "background-color"(){
                let b=""
                if(!hasUpgrade("f",306)&&canAffordUpgrade("f",306)) b="#EF1300"
                return b
            }},
            canAfford(){return player.f.ne.gte(1500)},
            pay(){return player.f.ne=player.f.ne.minus(1500)}, 
            effect(){return player.points.add(1).log10().add(1).pow(0.5)},
            effectDisplay(){return `x${format(upgradeEffect("f",306))}`},
        },
        311:{
            description(){return `Add 0.4 to proton gain exp.`},
            cost(){return new Decimal(90)},
            currencyDisplayName:"proton",
            unlocked(){ 
                return hasUpgrade("f",291)
            },
            style:{"height":"75px","width":"175px","border":"2px solid","font-size":"15px",
            "background-color"(){
                let b=""
                if(!hasUpgrade("f",311)&&canAffordUpgrade("f",311)) b="#0000CC"
                return b
            }},
            canAfford(){return player.f.proton.gte(90)},
            pay(){return player.f.proton=player.f.proton.minus(90)}, 
        },
        312:{
            description(){return `Study 112's effect is based on total cubes now.`},
            cost(){return new Decimal(280)},
            currencyDisplayName:"proton",
            unlocked(){ 
                return hasUpgrade("f",291)
            },
            style:{"height":"75px","width":"175px","border":"2px solid","font-size":"15px",
            "background-color"(){
                let b=""
                if(!hasUpgrade("f",312)&&canAffordUpgrade("f",312)) b="#0000CC"
                return b
            }},
            canAfford(){return player.f.proton.gte(280)},
            pay(){return player.f.proton=player.f.proton.minus(280)}, 
        },
        313:{
            description(){return `Point gain is raised to ^1.1 in normal game and ^1.8 in proton dilation.`},
            cost(){return new Decimal(400)},
            currencyDisplayName:"proton",
            unlocked(){ 
                return hasUpgrade("f",291)
            },
            style:{"height":"75px","width":"175px","border":"2px solid","font-size":"15px",
            "background-color"(){
                let b=""
                if(!hasUpgrade("f",313)&&canAffordUpgrade("f",313)) b="#0000CC"
                return b
            }},
            canAfford(){return player.f.proton.gte(400)},
            pay(){return player.f.proton=player.f.proton.minus(400)}, 
        },
        314:{
            description(){return `Add 0.2 to neutron gain exp.Point gain in neutron dilation is raised to ^1.5`},
            cost(){return new Decimal(12000)},
            currencyDisplayName:"NE",
            unlocked(){ 
                return hasUpgrade("f",291)
            },
            style:{"height":"75px","width":"175px","border":"2px solid","font-size":"15px","margin-left":"20px",
            "background-color"(){
                let b=""
                if(!hasUpgrade("f",314)&&canAffordUpgrade("f",314)) b="#EF1300"
                return b
            }},
            canAfford(){return player.f.ne.gte(12000)},
            pay(){return player.f.ne=player.f.ne.minus(12000)}, 
        },
        315:{
            description(){return `Add 0.15 to NE gain exp.`},
            cost(){return new Decimal(25000)},
            currencyDisplayName:"NE",
            unlocked(){ 
                return hasUpgrade("f",291)
            },
            style:{"height":"75px","width":"175px","border":"2px solid","font-size":"15px",
            "background-color"(){
                let b=""
                if(!hasUpgrade("f",315)&&canAffordUpgrade("f",315)) b="#EF1300"
                return b
            }},
            canAfford(){return player.f.ne.gte(25000)},
            pay(){return player.f.ne=player.f.ne.minus(25000)}, 
        },
        316:{
            description(){return `The adder of x is raised to ^1.25.`},
            cost(){return new Decimal(60000)},
            currencyDisplayName:"NE",
            unlocked(){ 
                return hasUpgrade("f",291)
            },
            style:{"height":"75px","width":"175px","border":"2px solid","font-size":"15px",
            "background-color"(){
                let b=""
                if(!hasUpgrade("f",316)&&canAffordUpgrade("f",316)) b="#EF1300"
                return b
            }},
            canAfford(){return player.f.ne.gte(60000)},
            pay(){return player.f.ne=player.f.ne.minus(60000)}, 
        },
        321:{
            description(){return `Boost point gain and the effect of the second upgrade based on proton.`},
            cost(){return new Decimal(2500)},
            currencyDisplayName:"proton",
            unlocked(){ 
                return hasUpgrade("f",291)
            },
            style:{"height":"75px","width":"175px","border":"2px solid","font-size":"15px",
            "background-color"(){
                let b=""
                if(!hasUpgrade("f",321)&&canAffordUpgrade("f",321)) b="#0000CC"
                return b
            }},
            canAfford(){return player.f.proton.gte(2500)},
            pay(){return player.f.proton=player.f.proton.minus(2500)}, 
            effect(){return player.f.proton.add(1).log10().add(1).pow(0.5).add(1).ln().max(1).min(1.667)},
            effectDisplay(){return `^${format(upgradeEffect("f",321))}`},
        },
        322:{
            description(){return `Boost point gain in proton dilation based on itself.`},
            cost(){return new Decimal(6000)},
            currencyDisplayName:"proton",
            unlocked(){ 
                return hasUpgrade("f",291)
            },
            style:{"height":"75px","width":"175px","border":"2px solid","font-size":"15px",
            "background-color"(){
                let b=""
                if(!hasUpgrade("f",322)&&canAffordUpgrade("f",322)) b="#0000CC"
                return b
            }},
            canAfford(){return player.f.proton.gte(6000)},
            pay(){return player.f.proton=player.f.proton.minus(6000)}, 
            effect(){return Decimal.pow(1.5,player.points.add(1).log10())},
            effectDisplay(){return `x${format(upgradeEffect("f",322))}`},
        },
        323:{
            description(){return `Add 0.03 to base k.`},
            cost(){return new Decimal(7100)},
            currencyDisplayName:"proton",
            unlocked(){ 
                return hasUpgrade("f",291)
            },
            style:{"height":"75px","width":"175px","border":"2px solid","font-size":"15px",
            "background-color"(){
                let b=""
                if(!hasUpgrade("f",323)&&canAffordUpgrade("f",323)) b="#0000CC"
                return b
            }},
            canAfford(){return player.f.proton.gte(7100)},
            pay(){return player.f.proton=player.f.proton.minus(7100)}, 
        },
        324:{
            description(){return `Boost NE boost exp. based on NE`},
            cost(){return new Decimal(200000)},
            currencyDisplayName:"NE",
            unlocked(){ 
                return hasUpgrade("f",291)
            },
            style:{"height":"75px","width":"175px","border":"2px solid","font-size":"15px","margin-left":"20px",
            "background-color"(){
                let b=""
                if(!hasUpgrade("f",324)&&canAffordUpgrade("f",324)) b="#EF1300"
                return b
            }},
            canAfford(){return player.f.ne.gte(200000)},
            pay(){return player.f.ne=player.f.ne.minus(200000)}, 
            effect(){return player.f.ne.add(1).log10().div(50).max(0)},
            effectDisplay(){return `+${format(upgradeEffect("f",324))}`},
        },
        325:{
            description(){return `NE gain is raised to ^1.5 and unlock dilation challenges.`},
            cost(){return new Decimal(1000000)},
            currencyDisplayName:"NE",
            unlocked(){ 
                return hasUpgrade("f",291)
            },
            style:{"height":"75px","width":"175px","border":"2px solid","font-size":"15px",
            "background-color"(){
                let b=""
                if(!hasUpgrade("f",325)&&canAffordUpgrade("f",325)) b="#EF1300"
                return b
            }},
            canAfford(){return player.f.ne.gte(1000000)},
            pay(){return player.f.ne=player.f.ne.minus(1000000)}, 
        },
        326:{
            description(){return `You can upgrade your function.`},
            cost(){return new Decimal("1e1500")},
            currencyDisplayName:"points",
            unlocked(){ 
                return hasUpgrade("f",291)
            },
            style:{"height":"75px","width":"175px","border":"2px solid","font-size":"15px",
            "background-color"(){
                let b=""
                if(!hasUpgrade("f",326)&&canAffordUpgrade("f",326)) b="#EF1300"
                return b
            }},
            canAfford(){return player.points.gte("1e1500")},
            pay(){return player.points=player.points.minus("1e1500")},
        },
        331:{
            title:"I",
            description(){return "Generate 1 point per second."},
            cost(){return new Decimal(1)},
            unlocked(){ 
                return player.f.ftype==4
            },
            canAfford(){return player.points.gte(1)},
            pay(){return player.points=player.points.minus(1)},
        },
        332:{
            title:"II",
            description(){return "Unlock prestige layer."},
            cost(){return new Decimal(10)},
            unlocked(){ 
                return player.f.ftype==4&&hasUpgrade("f",331)
            },
            onPurchase(){
                player.tab='p'
            },
            canAfford(){return player.points.gte(10)},
            pay(){return player.points=player.points.minus(10)},
        },
        333:{
            title:"III",
            description(){return "Unlock super prestige layer."},
            cost(){return new Decimal(5e10)},
            unlocked(){ 
                return player.f.ftype==4&&hasUpgrade("f",332)
            },
            onPurchase(){
                player.tab='sp'
            },
            canAfford(){return player.points.gte(5e10)},
            pay(){return player.points=player.points.minus(5e10)},
        },
        334:{
            title:"IV",
            description(){return "Unlock Prestige upgrader layer."},
            cost(){return new Decimal(1e30)},
            unlocked(){ 
                return player.f.ftype==4&&hasUpgrade("f",333)
            },
            onPurchase(){
                player.tab='pu'
            },
            canAfford(){return player.points.gte(1e30)},
            pay(){return player.points=player.points.minus(1e30)},
        },
        335:{
            title:"V",
            description(){return "Unlock Hyper prestige layer."},
            cost(){return new Decimal(1e50)},
            unlocked(){ 
                return player.f.ftype==4&&hasUpgrade("f",334)
            },
            onPurchase(){
                player.tab='hp'
            },
            canAfford(){return player.points.gte(1e50)},
            pay(){return player.points=player.points.minus(1e50)},
        },
        341:{
            title:"VI",
            description(){return "Unlock challenge layer."},
            cost(){return new Decimal(1e75)},
            unlocked(){ 
                return player.f.ftype==4&&hasUpgrade("f",335)
            },
            onPurchase(){
                player.tab='c'
                player.c.checker=true
                player.c.unlocked=true
            },
            canAfford(){return player.points.gte(1e75)},
            pay(){return player.points=player.points.minus(1e75)},
        },
        342:{
            title:"VII",
            description(){return "Unlock super upgrader layer."},
            cost(){return new Decimal(1e200)},
            unlocked(){ 
                return player.f.ftype==4&&hasUpgrade("f",341)
            },
            onPurchase(){
                player.tab='su'
            },
            canAfford(){return player.points.gte(1e200)},
            pay(){return player.points=player.points.minus(1e200)},
        },
        343:{
            title:"VIII",
            description(){return "Unlock ultra prestige layer."},
            cost(){return new Decimal("1.8e308")},
            unlocked(){ 
                return player.f.ftype==4&&hasUpgrade("f",342)
            },
            onPurchase(){
                player.tab='up'
            },
            canAfford(){return player.points.gte("1.8e308")},
            pay(){return player.points=player.points.minus("1.8e308")},
        },
        344:{
            title:"IX",
            description(){return "Unlock prestium layer."},
            cost(){return new Decimal("1e1120")},
            unlocked(){ 
                return player.f.ftype==4&&hasUpgrade("f",343)
            },
            onPurchase(){
                player.tab='pt'
            },
            canAfford(){return player.points.gte("1e1120")},
            pay(){return player.points=player.points.minus("1e1120")},
        },
        345:{
            title:`X`,
            description(){return `Unlock <p style= "color:#EF25EF">Reincarnation</p>`},
            cost(){return new Decimal("1e100000")},
            unlocked(){ 
                return player.f.ftype==4&&hasUpgrade("f",344)
            },
            onPurchase(){
                player.tab='r'
            },
            canAfford(){return player.points.gte("1e100000")},
            pay(){return player.points=player.points.minus("1e100000")},
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
            display(){return tmp.f.calckmult.eq(2.5)?`Capped!
            currently:x${format(tmp.f.calckmult.div(player.f.kmult).max(1))}
                total boost:x${format(player.f.kmult)}` : tmp.f.calckmult.lt(player.f.kmult) ? `Maybe not now..... but it's still clickable!
                currently:x${format(tmp.f.calckmult.div(player.f.kmult).max(1))}
                total boost:x${format(player.f.kmult)}`:
                `Sacrifice all the points and upgrades to grow k.
                currently:x${format(tmp.f.calckmult.div(player.f.kmult).max(1))}
                total boost:x${format(player.f.kmult)}`},
            style:{"height":"300px","width":"300px","background-color":"#000000","border-radius":"0%","border":"6px solid","border-color":"rgb(65,245,65)","color":"rgb(65,245,65)","text-shadow":"0 0 15px rgb(65,245,65)","font-size":"15px"},
            onClick(){
                player.f.kmult=player.f.kmult.times(tmp.f.calckmult.div(player.f.kmult).max(1))
                player.points=new Decimal(1)
                player.f.upgrades = player.f.upgrades.filter(n => n>126 || n<241)
            },
            unlocked(){return player.f.ftype==3},
            canClick(){return true}
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
                    Studies except 11,41,51,52,71,72,84 will be removed
                    The formula of point gain will be x^k(k<1).
                    Base cube req is 2500
                    Remove log10 challenges.
                    Sacrifice is re-designed.
                    `
                }
                if (player.f.ftype==3){
                    return `Reset all the progress but level up the function by 1.
                    All upgrades will be removed.
                    All studies will be removed
                    The formula of point gain will be x.
                    Remove all the things expect function.
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
                if(player.f.ftype==3){
                    return hasUpgrade("f",326)
                }
            },
            onClick(){
                if(player.f.ftype==0){
                    player.f.st0time=Math.min(player.f.st0time,player.f.currenttime)
                }
                if(player.f.ftype==1){
                    player.f.st1time=Math.min(player.f.st1time,player.f.currenttime)
                }
                if(player.f.ftype==2){
                    player.f.st2time=Math.min(player.f.st2time,player.f.currenttime)
                }
                if(player.f.ftype==3){
                    player.f.st3time=Math.min(player.f.st3time,player.f.currenttime)
                }
                player.f.currenttime=0
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
                player.f.proton=new Decimal(0)
                player.f.neutron=new Decimal(0)
                player.f.ne=new Decimal(0)
                player.f.challenges[51]=0
                player.f.challenges[52]=0
                player.f.challenges[71]=0
                player.f.challenges[72]=0
                player.f.challenges[81]=0
                player.f.challenges[82]=0
                player.f.challenges[91]=0
                player.f.challenges[92]=0
                player.f.challenges[93]=0
                setBuyableAmount("f",11,new Decimal(0))
                setBuyableAmount("f",12,new Decimal(0))
                setBuyableAmount("f",13,new Decimal(0))
                setBuyableAmount("f",21,new Decimal(0))
                setBuyableAmount("f",22,new Decimal(0))
                setBuyableAmount("f",23,new Decimal(0))
                setBuyableAmount("f",31,new Decimal(0))
                setBuyableAmount("f",32,new Decimal(0))
                setBuyableAmount("f",33,new Decimal(0))
                setBuyableAmount("f",41,new Decimal(0))
                setBuyableAmount("f",42,new Decimal(0))
                setBuyableAmount("f",43,new Decimal(0))
                layerDataReset("r")
                layerDataReset("su")
                layerDataReset("up")
                layerDataReset("pt")
                layerDataReset("hp")
                layerDataReset("c")
                layerDataReset("pu")
                layerDataReset("sp")
                layerDataReset("p")
                layerDataReset("r")
                layerDataReset("sp")
                layerDataReset("p")
                layerDataReset("su")
                layerDataReset("up")
                layerDataReset("c")
                layerDataReset("pu")
                layerDataReset("pt")
                layerDataReset("hp")
            },
            canClick(){return true}
        },
        21:{
            title(){return "Adder charger"},
            display(){return inChallenge("f",22) ? `Nope.`: `Hold this to charge points into the adder of x.
                            requirement:${format(player.f.careq)}
                            level:${player.f.calevel}/75
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
                            level:${player.f.cmlevel}/60
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
            display(){return `Respec function studies`},
            style:{"height":"30px","width":"500px","background-color":"#000000","border-radius":"0%","border":"2px solid","border-color":"rgb(255,180,0)","color":"rgb(255,180,0)","text-shadow":"0 0 15px orange","font-size":"15px"},
            unlocked(){return player.f.isstud},
            onClick(){
                player.f.upgrades = player.f.upgrades.filter(n => n<126 || n>250)
                player.f.funcpower=player.f.totalpower
            },
            canClick(){return player.f.isstud}
        },
        41:{
            display(){return player.f.inprotondil ? (player.f.inneutrondil ? `You need to end neutron dilation first!`:`End proton dilation\nGet ${format(tmp.f.getproton)} proton`) : `Start proton dilation`},
            tooltip:"Point gain is raised to ^0.1",
            style:{"height":"155px","width":"255px","background-color"(){return player.f.inprotondil ? "#0000EF25" : "#00000000"},"border-radius":"0%","border":"6px solid","border-color"(){return player.f.inprotondil ? "#0000EF" : "#00ca00"},"color"(){return player.f.inprotondil ? "#0044FF" : "#00ee00"},"font-size":"15px"},
            unlocked(){return hasUpgrade("f",291)},
            onClick(){
                player.f.adder=player.f.adder.pow(0)
                player.f.multiplier=player.f.multiplier.pow(0)
                player.points=new Decimal(1)
                player.f.inprotondil=!player.f.inprotondil
                if(!player.f.inprotondil) player.f.proton=player.f.proton.add(tmp.f.getproton)
            },
            canClick(){return hasUpgrade("f",291)&&!player.f.inneutrondil}
        },
        42:{
            display(){return player.f.inneutrondil ? `End neutron dilation\nGet ${format(tmp.f.getneutron)} neutron` : player.f.inprotondil ? `Start neutron dilation` : "You can only start it in proton dilation!"},
            tooltip:"The adder and the multiplier of x is raised to ^0.2",
            style:{"height":"155px","width":"255px","background-color"(){return player.f.inneutrondil ? "#EF000025" : "#00000000"},"border-radius":"0%","border":"6px solid","border-color"(){return player.f.inneutrondil ? "#EF0000" : "#00ca00"},"color"(){return player.f.inneutrondil ? "#FF4400" : "#00ee00"},"font-size":"15px"},
            unlocked(){return hasUpgrade("f",304)},
            onClick(){
                player.f.adder=player.f.adder.pow(0)
                player.f.multiplier=player.f.multiplier.pow(0)
                player.points=new Decimal(1)
                player.f.inneutrondil=!player.f.inneutrondil
                if(!player.f.inneutrondil) player.f.neutron=player.f.neutron.add(tmp.f.getneutron)
                player.points=new Decimal(1)
            },
            canClick(){return player.f.inprotondil&&hasUpgrade("f",304)}
        },
        51:{
            display(){return `Spin to prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#31aeb0","color":"#31aeb0","font-size":"15px","background-color":"#00000000"},
            unlocked(){return hasUpgrade("f",332)},
            onClick(){
                player.tab='p'
            },
            canClick(){return true}
        },
        52:{
            display(){return `Spin to super prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#217782","color":"#217782","font-size":"15px","background-color":"#00000000"},
            unlocked(){return hasUpgrade("f",333)},
            onClick(){
                player.tab='sp'
            },
            canClick(){return true}
        },
        53:{
            display(){return `Spin to prestige upgrader tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#14CEA3","color":"#14CEA3","font-size":"15px","background-color":"#00000000"},
            unlocked(){return hasUpgrade("f",334)},
            onClick(){
                player.tab='pu'
            },
            canClick(){return true}
        },
        54:{
            display(){return `Spin to hyper prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#0068A5","color":"#0068A5","font-size":"15px","background-color":"#00000000"},
            unlocked(){return hasUpgrade("f",335)},
            onClick(){
                player.tab='hp'
            },
            canClick(){return true}
        },
        55:{
            display(){return `Spin to challenge tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#45AC68","color":"#45AC68","font-size":"15px","background-color":"#00000000"},
            unlocked(){return hasUpgrade("f",341)},
            onClick(){
                player.tab='c'
            },
            canClick(){return true}
        },
        61:{
            display(){return `Spin to super upgrader tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#04AE83","color":"#04AE83","font-size":"15px","background-color":"#00000000"},
            unlocked(){return hasUpgrade("f",342)},
            onClick(){
                player.tab='su'
            },
            canClick(){return true}
        },
        62:{
            display(){return `Spin to ultra prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#5C00CC","color":"#5C00CC","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.up.unlocked},
            onClick(){
                player.tab='up'
            },
            canClick(){return true}
        },
        63:{
            display(){return `Spin to prestium tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EEDB05","color":"#EEDB05","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pt.unlocked},
            onClick(){
                player.tab='pt'
            },
            canClick(){return true}
        },
        64:{
            display(){return `Spin to reincarnation tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EF25EF","color":"#EF25EF","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.r.unlocked},
            onClick(){
                player.tab='r'
            },
            canClick(){return true}
        },
        71:{
            display(){return `Input your code`},
            style:{"height":"150px","width":"150px","border-radius":"0%","font-size":"15px"},
            unlocked(){return player.r.rc5fin},
            onClick(){
                player.f.code=prompt("Enter your code below:")
            },
            canClick(){return (!player.f.codeac)}
        },
        72:{
            display(){return `Confirm your code`},
            style:{"height":"150px","width":"150px","border-radius":"0%","font-size":"15px"},
            unlocked(){return player.r.rc5fin},
            onClick(){
                if(player.f.code=="7598"){
                    player.f.code="ACCEPTED"
                    player.f.codeac=true
                }
                else if(player.f.code=="The function tree"){
                    player.f.code="ACCEPTED"
                }
                else player.f.code="DECLINED"
            },
            canClick(){return player.f.code!="ACCEPTED"}
        },
        81:{
            title() {return `Stage speedrun`},
            display(){return `By clicking this completly reset all your pregress so far include stages!<br>
                              Try to reach this place in a shorter time!<br>
                              (Also unlock a new tab:speedrun)<br>`},
            style:{"height":"350px","width":"350px","border-radius":"0%","border":"6px solid","border-color":"#EEEEEE","color":"#EEEEEE","font-size":"15px","background-color":"#eeeeee25"},
            unlocked(){return player.f.code=="ACCEPTED"},
            onClick(){
                let check=confirm("Are you sure to start the speedrun? You'd better export your savefile first...")
                if(check){
                    if(player.f.ftype==4){
                        player.f.st4time=Math.min(player.f.st4time,player.f.currenttime)
                        player.f.besttime=Math.min(player.f.besttime,player.f.speedruntime)
                    }
                    player.f.currenttime=0
                    player.f.ftype=0
                    player.f.isspeedrun=true
                    player.f.speedruntime=0
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
                    player.f.proton=new Decimal(0)
                    player.f.neutron=new Decimal(0)
                    player.f.ne=new Decimal(0)
                    player.f.challenges[11]=0
                    player.f.challenges[12]=0
                    player.f.challenges[21]=0
                    player.f.challenges[22]=0
                    player.f.challenges[31]=0
                    player.f.challenges[32]=0
                    player.f.challenges[41]=0
                    player.f.challenges[42]=0
                    player.f.challenges[61]=0
                    player.f.challenges[51]=0
                    player.f.challenges[52]=0
                    player.f.challenges[71]=0
                    player.f.challenges[72]=0
                    player.f.challenges[81]=0
                    player.f.challenges[82]=0
                    player.f.challenges[91]=0
                    player.f.challenges[92]=0
                    player.f.challenges[93]=0
                    setBuyableAmount("f",11,new Decimal(0))
                    setBuyableAmount("f",12,new Decimal(0))
                    setBuyableAmount("f",13,new Decimal(0))
                    setBuyableAmount("f",21,new Decimal(0))
                    setBuyableAmount("f",22,new Decimal(0))
                    setBuyableAmount("f",23,new Decimal(0))
                    setBuyableAmount("f",31,new Decimal(0))
                    setBuyableAmount("f",32,new Decimal(0))
                    setBuyableAmount("f",33,new Decimal(0))
                    setBuyableAmount("f",41,new Decimal(0))
                    setBuyableAmount("f",42,new Decimal(0))
                    setBuyableAmount("f",43,new Decimal(0))
                    layerDataReset("r")
                    layerDataReset("su")
                    layerDataReset("up")
                    layerDataReset("pt")
                    layerDataReset("hp")
                    layerDataReset("c")
                    layerDataReset("pu")
                    layerDataReset("sp")
                    layerDataReset("p")
                    layerDataReset("r")
                    layerDataReset("sp")
                    layerDataReset("p")
                    layerDataReset("su")
                    layerDataReset("up")
                    layerDataReset("c")
                    layerDataReset("pu")
                    layerDataReset("pt")
                    layerDataReset("hp")
                    player.tab="none"
                }
            },
            canClick(){return player.f.ftype==4}
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
                player.f.exp=new Decimal(1)
                player.points=new Decimal(1)
                player.f.upgrades=[]
            },
            onExit(){
                player.f.exp=new Decimal(1)
                player.points=new Decimal(1)
                player.f.exp=new Decimal(1) 
                player.f.upgrades=[]
            },
            onComplete(){
                player.f.exp=new Decimal(1)
                player.points=new Decimal(1)
                player.f.exp=new Decimal(1)
                player.f.upgrades=[]
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
            challengeDescription() {return`The effects of adder charger and factor charger are alway 1.Complete this challenge for the first time to unlock it permanently!`},
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
            challengeDescription() {return`Study 22 and 33's effects are their multiplicative inverse and always effective.Complete this challenge for the first time to unlock it permanently!`},
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
        71:{
            name() {return`exp 11(${challengeCompletions("f",71)}/5)`},
            challengeDescription() {return`Point gain is raised to ^${format(new Decimal(1).minus((new Decimal(challengeCompletions("f",71)+1)).times(0.15)))}.Complete this challenge for the first time to unlock it permanently!`},
            unlocked(){return (hasUpgrade("f",223)||challengeCompletions("f",71)>0)&&player.f.ftype==3},
            goalDescription(){return  `${format(new Decimal(1.5e9).pow(new Decimal(1).minus((new Decimal(challengeCompletions("f",71)+1)).times(0.14))))} points`},
            style:{"border-radius":"2%","border-color":"green","font-size":"17px"},
            rewardDescription:"1.4x point gain for each completions",
            canComplete(){return player.points.gte(new Decimal(1.5e9).pow(new Decimal(1).minus((new Decimal(challengeCompletions("f",71)+1)).times(0.14))))},
            marked(){return challengeCompletions("f",71)==5},
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
            rewardEffect(){return new Decimal(1.4).pow(challengeCompletions("f",71))},
            rewardDisplay(){return `x${format(this.rewardEffect())}`}
        },
        72:{
            name() {return`exp 12(${challengeCompletions("f",72)}/5)`},
            challengeDescription() {return`Remove the point multiplier and base k is always ${format(new Decimal(0.15).div(challengeCompletions("f",72)*2+1))} .Complete this challenge for the first time to unlock it permanently!`},
            unlocked(){return (hasUpgrade("f",233)||challengeCompletions("f",72)>0)&&player.f.ftype==3},
            goalDescription(){return  `${format(new Decimal(3e7).pow(new Decimal(1).minus((new Decimal(challengeCompletions("f",72)+1)).times(0.1))))} points`},
            style:{"border-radius":"2%","border-color":"green","font-size":"17px"},
            rewardDescription:"Add 0.008 to k for each completions",
            canComplete(){return player.points.gte(new Decimal(3e7).pow(new Decimal(1).minus((new Decimal(challengeCompletions("f",72)+1)).times(0.1))))},
            marked(){return challengeCompletions("f",72)==5},
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
            rewardEffect(){return new Decimal(0.008).times(challengeCompletions("f",72))},
            rewardDisplay(){return `+${format(this.rewardEffect())}`}
        },
        81:{
            name() {return`exp 21(${challengeCompletions("f",81)}/5)`},
            challengeDescription() {return`The multiplier of x is raised to ^0.995 per second.Complete this challenge for the first time to unlock it permanently!`},
            unlocked(){return (hasUpgrade("f",243)||challengeCompletions("f",81)>0)&&player.f.ftype==3},
            goalDescription(){return  `${format(new Decimal(1e14).pow(challengeCompletions("f",81)/100+1).times(challengeCompletions("f",81)+1))} points`},
            style:{"border-radius":"2%","border-color":"green","font-size":"17px"},
            rewardDescription:"The base multiplier is raised to ^1.05 for each completions",
            canComplete(){return player.points.gte(new Decimal(1e14).pow(challengeCompletions("f",81)/100+1).times(challengeCompletions("f",81)+1))},
            marked(){return challengeCompletions("f",81)==5},
            onEnter(){
                player.points=new Decimal(1)
                player.f.exp21time=0
            },            
            onExit(){
                player.points=new Decimal(1)
                player.f.exp21time=0
            },            
            onComplete(){
                player.points=new Decimal(1)
                player.f.exp21time=0
            },
            completionLimit:5,
            rewardEffect(){return new Decimal(1.05).pow(challengeCompletions("f",81))},
            rewardDisplay(){return `^${format(this.rewardEffect())}`}
        },
        82:{
            name() {return`exp 22`},
            challengeDescription() {return`Base k is always 0.002`},
            unlocked(){return (hasUpgrade("f",243)||challengeCompletions("f",81)>0)&&player.f.ftype==3},
            goalDescription(){return  `Gain 3,250 points per second.`},
            style:{"border-radius":"2%","border-color":"green","font-size":"17px"},
            rewardDescription:"Double point gain and allow you to buy study 131.",
            canComplete(){return getPointGen().gte(3250) },
            marked(){return hasChallenge("f",82)},
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
        91:{
            name() {return`Proton dilation EX`},
            challengeDescription() {return`Point gain is divided by 1e6,then raised to ^0.05.You can complete it while in proton dilation!`},
            unlocked(){return hasUpgrade("f",325)&&player.f.ftype==3},
            goalDescription(){return  `350000 points.`},
            style:{"border-radius":"2%","border-color":"#0000EF","font-size":"17px","background-color"(){
                let b=""
                if(inChallenge("f",91)&&player.f.inprotondil&&!tmp.f.challenges[91].canComplete) b="#2525EF25"
                return b
            },"color"(){
                let c=""
                if(inChallenge("f",91)&&player.f.inprotondil&&!tmp.f.challenges[91].canComplete) c="#2525EF"
                return c
            }},
            rewardDescription:"Add 0.05 to base k,the second proton buyable won't reduce proton anymore",
            canComplete(){return player.points.gte(350000)&&player.f.inprotondil },
            marked(){return hasChallenge("f",91)},
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
        92:{
            name() {return`Neutron dilation EX`},
            challengeDescription() {return`NE doesn't have any effect and base k is always 0.001.You can complete it while in neutron dilation!`},
            unlocked(){return hasChallenge("f",91)&&player.f.ftype==3},
            goalDescription(){return  `5e41 points.`},
            style:{"border-radius":"2%","border-color":"#EF0000","font-size":"17px","background-color"(){
                let b=""
                if(inChallenge("f",92)&&player.f.inneutrondil&&!tmp.f.challenges[92].canComplete) b="#EF252525"
                return b
            },"color"(){
                let c=""
                if(inChallenge("f",92)&&player.f.inneutrondil&&!tmp.f.challenges[92].canComplete) c="#EF2525"
                return c
            }},
            rewardDescription:"Improve NE boost formula and triple neutron gain.",
            canComplete(){return player.points.gte(5e41)&&player.f.inneutrondil},
            marked(){return hasChallenge("f",92)},
            onEnter(){
                player.f.adder=player.f.adder.pow(0)
                player.f.multiplier=player.f.multiplier.times(0)
                player.points=new Decimal(1)
            },            
            onExit(){
                player.f.adder=player.f.adder.pow(0)
                player.f.multiplier=player.f.multiplier.pow(0)
                player.points=new Decimal(1)
            },            
            onComplete(){
                player.f.adder=player.f.adder.pow(0)
                player.f.multiplier=player.f.multiplier.pow(0)
                player.points=new Decimal(1)
            },
        },
        93:{
            name() {return`exp final`},
            challengeDescription() {return`Run two other dilation challenges but you can complete this in normal game.1.6x base k for each Oom of points and capped at 400x.<br>Now: x${format(Decimal.pow(1.6,player.points.add(1).log10().floor()).min(400))}`},
            unlocked(){return hasChallenge("f",92)&&player.f.ftype==3},
            goalDescription(){return  `1e45 points.`},
            style:{"border-radius":"2%","font-size":"17px"},
            rewardDescription:"Neutron and proton gain is raised to ^1.2.",
            canComplete(){return player.points.gte(1e45)},
            marked(){return hasChallenge("f",93)},
            onEnter(){
                player.f.adder=player.f.adder.pow(0)
                player.f.multiplier=player.f.multiplier.times(0)
                player.points=new Decimal(1)
            },            
            onExit(){
                player.f.adder=player.f.adder.pow(0)
                player.f.multiplier=player.f.multiplier.times(0)
                player.points=new Decimal(1)
            },            
            onComplete(){
                player.f.adder=player.f.adder.pow(0)
                player.f.multiplier=player.f.multiplier.times(0)
                player.points=new Decimal(1)
            },

            countsAs:[91,92]
        },
    },
    buyables:{
        11:{
            cost(x) { return Decimal.pow(2,x.add(1).pow(2))},
            effect(x) { return new Decimal(2).pow(x) },
            display() { return `Double proton gain.
                                Cost: ${format(this.cost())}
                                Amount: ${format(getBuyableAmount("f",11))}
                                Effect: x${format(this.effect())}` },
            canAfford() { return player.f.proton.gte(this.cost()) },
            buy(){
                if(!tmp.f.buyables[11].canAfford) return
                player.f.proton = player.f.proton.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            style:{"height":"250px","width":"250px","margin":"25px","border":"6px solid","border-radius":"0%","border-color"(){return tmp.f.buyables[11].canAfford? "#0000CC":"#00EF00"},"color"(){return tmp.f.buyables[11].canAfford? "#2545EF":"#00EF00"},"background-color"(){return tmp.f.buyables[11].canAfford? "#0000EF20":"#00000000"},"font-size":"17px"}
        },
        12:{
            cost(x) { return Decimal.pow(x.add(1).pow(2),2)},
            effect(x) { return new Decimal(2).pow(x) },
            display() { return `Double point gain.
                                Cost: ${format(this.cost())}
                                Amount: ${format(getBuyableAmount("f",12))}/2000
                                Effect: x${format(this.effect())}` },
            canAfford() { return player.f.proton.gte(this.cost()) },
            buy(){
                if(!tmp.f.buyables[12].canAfford) return
                if(!hasChallenge("f",91)) player.f.proton = player.f.proton.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1).min(2000))
            },
            style:{"height":"250px","width":"250px","margin":"25px","border":"6px solid","border-radius":"0%","border-color"(){return tmp.f.buyables[12].canAfford? "#0000CC":"#00EF00"},"color"(){return tmp.f.buyables[12].canAfford? "#2545EF":"#00EF00"},"background-color"(){return tmp.f.buyables[12].canAfford? "#0000EF20":"#00000000"},"font-size":"17px"}
        },
        13:{
            cost(x) { return Decimal.pow(5,x.add(1).pow(2))},
            effect(x) { return new Decimal(0.01).times(x)},
            display() { return `Add 0.01 to base k.
                                Cost: ${format(this.cost())}
                                Amount: ${format(getBuyableAmount("f",13))}
                                Effect: +${format(this.effect())}` },
            canAfford() { return player.f.proton.gte(this.cost()) },
            buy(){
                if(!tmp.f.buyables[13].canAfford) return
                player.f.proton = player.f.proton.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            style:{"height":"250px","width":"250px","margin":"25px","border":"6px solid","border-radius":"0%","border-color"(){return tmp.f.buyables[13].canAfford? "#0000CC":"#00EF00"},"color"(){return tmp.f.buyables[13].canAfford? "#2545EF":"#00EF00"},"background-color"(){return tmp.f.buyables[13].canAfford? "#0000EF20":"#00000000"},"font-size":"17px"}
        },
        21:{
            cost(x) { return Decimal.pow(1.7,x.add(1)).times(100)},
            effect(x) { return new Decimal(5).pow(x)},
            display() { return `Multiply the adder and the multiplier of x by 5.
                                Cost: ${format(this.cost())}
                                Amount: ${format(getBuyableAmount("f",21))}
                                Effect: x${format(this.effect())}` },
            canAfford() { return player.f.proton.gte(this.cost()) },
            buy(){
                if(!tmp.f.buyables[21].canAfford) return
                player.f.proton = player.f.proton.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            style:{"height":"250px","width":"250px","margin":"25px","border":"6px solid","border-radius":"0%","border-color"(){return tmp.f.buyables[21].canAfford? "#0000CC":"#00EF00"},"color"(){return tmp.f.buyables[21].canAfford? "#2545EF":"#00EF00"},"background-color"(){return tmp.f.buyables[21].canAfford? "#0000EF20":"#00000000"},"font-size":"17px"}
        },
        22:{
            cost(x) { return Decimal.pow(5,x).pow(1.75).times(300)},
            effect(x) { return new Decimal(0.05).times(x)},
            display() { return `Add 0.05 to proton gain exp.
                                Cost: ${format(this.cost())}
                                Amount: ${format(getBuyableAmount("f",22))}
                                Effect: +${format(this.effect())}` },
            canAfford() { return player.f.proton.gte(this.cost()) },
            buy(){
                if(!tmp.f.buyables[22].canAfford) return
                player.f.proton = player.f.proton.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            style:{"height":"250px","width":"250px","margin":"25px","border":"6px solid","border-radius":"0%","border-color"(){return tmp.f.buyables[22].canAfford? "#0000CC":"#00EF00"},"color"(){return tmp.f.buyables[22].canAfford? "#2545EF":"#00EF00"},"background-color"(){return tmp.f.buyables[22].canAfford? "#0000EF20":"#00000000"},"font-size":"17px"}
        },
        23:{
            cost(x) { return Decimal.pow(5,x.pow(3)).pow(0.7).times(1500)},
            effect(x) { return new Decimal(1.1).pow(x)},
            display() { return `The adder of x is raised to ^1.1.
                                Cost: ${format(this.cost())}
                                Amount: ${format(getBuyableAmount("f",23))}
                                Effect: ^${format(this.effect())}` },
            canAfford() { return player.f.proton.gte(this.cost()) },
            buy(){
                if(!tmp.f.buyables[23].canAfford) return
                player.f.proton = player.f.proton.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            style:{"height":"250px","width":"250px","margin":"25px","border":"6px solid","border-radius":"0%","border-color"(){return tmp.f.buyables[23].canAfford? "#0000CC":"#00EF00"},"color"(){return tmp.f.buyables[23].canAfford? "#2545EF":"#00EF00"},"background-color"(){return tmp.f.buyables[23].canAfford? "#0000EF20":"#00000000"},"font-size":"17px"}
        },
        31:{
            cost(x) { return Decimal.pow(2,x.add(1).pow(2)).times(20).pow(1.25)},
            effect(x) { return new Decimal(3).pow(x)},
            display() { return `Triple neutron gain.
                                Cost: ${format(this.cost())} NE
                                Amount: ${format(getBuyableAmount("f",31))}
                                Effect: x${format(this.effect())}` },
            canAfford() { return player.f.ne.gte(this.cost()) },
            buy(){
                if(!tmp.f.buyables[31].canAfford) return
                player.f.ne = player.f.ne.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            style:{"height":"250px","width":"250px","margin":"25px","border":"6px solid","border-radius":"0%","border-color"(){return tmp.f.buyables[31].canAfford? "#DD0000":"#00EF00"},"color"(){return tmp.f.buyables[31].canAfford? "#EF4525":"#00EF00"},"background-color"(){return tmp.f.buyables[31].canAfford? "#EF000020":"#00000000"},"font-size":"17px"}
        },
        32:{
            cost(x) { return Decimal.pow(4,x).times(250)},
            effect(x) { return new Decimal(1.5).pow(x)},
            display() { return `1.5x NE gain.
                                Cost: ${format(this.cost())} NE
                                Amount: ${format(getBuyableAmount("f",31))}
                                Effect: x${format(this.effect())}` },
            canAfford() { return player.f.ne.gte(this.cost()) },
            buy(){
                if(!tmp.f.buyables[32].canAfford) return
                player.f.ne = player.f.ne.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            style:{"height":"250px","width":"250px","margin":"25px","border":"6px solid","border-radius":"0%","border-color"(){return tmp.f.buyables[32].canAfford? "#DD0000":"#00EF00"},"color"(){return tmp.f.buyables[32].canAfford? "#EF4525":"#00EF00"},"background-color"(){return tmp.f.buyables[32].canAfford? "#EF000020":"#00000000"},"font-size":"17px"}
        },
        33:{
            cost(x) { return Decimal.pow(2,new Decimal(2).pow(Decimal.pow(1.8,x))).times(200)},
            effect(x) { return new Decimal(1.075).pow(x)},
            display() { return `Proton gain is raised to ^1.075.
                                Cost: ${format(this.cost())} NE
                                Amount: ${format(getBuyableAmount("f",33))}
                                Effect: ^${format(this.effect())}` },
            canAfford() { return player.f.ne.gte(this.cost()) },
            buy(){
                if(!tmp.f.buyables[33].canAfford) return
                player.f.ne = player.f.ne.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            style:{"height":"250px","width":"250px","margin":"25px","border":"6px solid","border-radius":"0%","border-color"(){return tmp.f.buyables[33].canAfford? "#DD0000":"#00EF00"},"color"(){return tmp.f.buyables[33].canAfford? "#EF4525":"#00EF00"},"background-color"(){return tmp.f.buyables[33].canAfford? "#EF000020":"#00000000"},"font-size":"17px"}
        },
        41:{
            cost(x) { return Decimal.pow(4,new Decimal(2).pow(x.add(1).pow(0.5))).times(1100)},
            effect(x) { return getBuyableAmount("f",41).gte(10) ? new Decimal(1.04).pow(x.minus(10)).add(new Decimal(1.1).pow(10)):new Decimal(1.1).pow(x)},
            display() { return `The multiplier of x is raised to ^1.1.
                                Cost: ${format(this.cost())} NE
                                Amount: ${format(getBuyableAmount("f",41))}
                                Effect: ^${format(this.effect())}`+ (getBuyableAmount("f",41).gte(10) ? `(Softcapped)` : ``)},
            canAfford() { return player.f.ne.gte(this.cost()) },
            buy(){
                if(!tmp.f.buyables[41].canAfford) return
                player.f.ne = player.f.ne.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            style:{"height":"250px","width":"250px","margin":"25px","border":"6px solid","border-radius":"0%","border-color"(){return tmp.f.buyables[41].canAfford? "#DD0000":"#00EF00"},"color"(){return tmp.f.buyables[41].canAfford? "#EF4525":"#00EF00"},"background-color"(){return tmp.f.buyables[41].canAfford? "#EF000020":"#00000000"},"font-size":"17px"}
        },
        42:{
            cost(x) { return Decimal.pow(2,x.add(1).pow(2.5)).times(12500)},
            effect(x) { return new Decimal(1.1).pow(x)},
            display() { return `Point gain is raised to ^1.1.
                                Cost: ${format(this.cost())} NE
                                Amount: ${format(getBuyableAmount("f",42))}
                                Effect: ^${format(this.effect())}` },
            canAfford() { return player.f.ne.gte(this.cost()) },
            buy(){
                if(!tmp.f.buyables[42].canAfford) return
                player.f.ne = player.f.ne.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            style:{"height":"250px","width":"250px","margin":"25px","border":"6px solid","border-radius":"0%","border-color"(){return tmp.f.buyables[42].canAfford? "#DD0000":"#00EF00"},"color"(){return tmp.f.buyables[42].canAfford? "#EF4525":"#00EF00"},"background-color"(){return tmp.f.buyables[42].canAfford? "#EF000020":"#00000000"},"font-size":"17px"}
        },
        43:{
            cost(x) { return Decimal.pow(2.5,x.times(2).pow(1.55)).times(250000)},
            effect(x) { return new Decimal(0.08).times(x)},
            display() { return `Add 0.08 to NE gain and boost exp.
                                Cost: ${format(this.cost())} NE
                                Amount: ${format(getBuyableAmount("f",43))}
                                Effect: +${format(this.effect())}` },
            canAfford() { return player.f.ne.gte(this.cost()) },
            buy(){
                if(!tmp.f.buyables[43].canAfford) return
                player.f.ne = player.f.ne.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            style:{"height":"250px","width":"250px","margin":"25px","border":"6px solid","border-radius":"0%","border-color"(){return tmp.f.buyables[43].canAfford? "#DD0000":"#00EF00"},"color"(){return tmp.f.buyables[43].canAfford? "#EF4525":"#00EF00"},"background-color"(){return tmp.f.buyables[43].canAfford? "#EF000020":"#00000000"},"font-size":"17px"}
        },
    }
}),
addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        buyableamo: new Decimal(0),
        buyableboost: new Decimal(0.1),
        sc: new Decimal(100),
    }},
    color: "#31aeb0",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent() {
        gain=0.25
        if(hasUpgrade("sp",21)) gain=0.275
        if(hasUpgrade("hp",21)) gain=0.3
        if(((((player.r.rngseed1[0]/1)+(player.r.rngseed1[1]/1))>=17)||(((player.r.rngseed1[0]/1)+(player.r.rngseed1[1]/1))<=3))&&player.r.allowrng1) gain+=tmp.r.calcrng1boost[5]
        return gain
    }, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if(hasUpgrade("p",13)) mult=mult.times(upgradeEffect("p",13))
        if(hasUpgrade("p",21)) mult=mult.times(upgradeEffect("p",21))
        if(hasUpgrade("p",34)) mult=mult.times(upgradeEffect("p",34))
        if(hasUpgrade("sp",13)) mult=mult.times(upgradeEffect("sp",13))
        if(hasUpgrade("sp",31)) mult=mult.times(upgradeEffect("sp",31))
        if(hasUpgrade("up",11)) mult=mult.times(upgradeEffect("up",11))
        if(hasUpgrade("su",13)) mult=mult.times(upgradeEffect("su",13)[1])
        if(hasUpgrade("sp",11)) mult=mult.times(2)
        if(hasAchievement("a",125)) mult=mult.times(2)
        if(hasMilestone("p",1)) mult=mult.times(3)
        mult=mult.times(buyableEffect("p",13))
        mult=mult.times(tmp.pu.effect)
        mult=mult.times(tmp.up.calcupboost)
        if((player.r.rngseed1[1]=='3'||player.r.rngseed1[1]=='5'||player.r.rngseed1[1]=='8')&&player.r.allowrng1) mult=mult.times(tmp.r.calcrng1boost[4])
        if((player.r.rngseed1[0]=='6'||player.r.rngseed1[0]=='2')&&player.r.allowrng1) mult=mult.times(player.r.r1dynamicboost)
        if(player.c.choose33&&player.c.isbegun) mult=mult.times(0)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        if(hasUpgrade("p",23)) exp=exp.times(1.05)
        if(hasUpgrade("p",42)) exp=exp.times(1.025)
        if(hasUpgrade("sp",35)) exp=exp.times(1.025)
        if(hasMilestone("sp",7)) exp=exp.times(tmp.c.calcshardboost)
        if(player.r.rngseed4=='1'&&player.r.allowrng4) exp=exp.times(tmp.r.calcrng4boost[1])
        if(player.c.choose11&&player.c.isbegun) exp=exp.times(0.5)
        if(player.r.rc1&&player.r.rcbegun&&player.up.best.gte(1)) exp=exp.times(0.75)
        exp=exp.times(tmp.r.calcrpboost)
        return exp
    },
    passiveGeneration(){return hasMilestone("sp",1) ? 1 : hasMilestone("p",2) ? 0.05 : 0},
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    doReset(resettingLayer){
        let keep=[]
        if((hasMilestone("sp",0)&&resettingLayer=="sp")||hasMilestone("r",0)) keep.push("milestones")
        if(hasMilestone("sp",2)&&resettingLayer=="sp") keep.push("upgrades")
        if(hasMilestone("pu",0)) keep.push("milestones")
        if(hasMilestone("pu",0)||hasMilestone("r",0)) keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("p", keep)
    },
    layerShown(){return hasUpgrade("f",332)},
    tabFormat:{
        "Main":{
            content:[
                ["display-text",function() { return `You have <h2 style="color:#31aeb0">${format(player.p.points)}</h2> prestige points, which adds <h2 style="color:#31aeb0">${format(tmp.p.calcboost)}</h2> to x`+(tmp.p.calcboost.gt(player.p.sc)?`(Softcapped)`:``)},
                { "font-size":"17.5px","text-shadow" : "0 0 10px #31aeb0"},],
                "blank",
                "prestige-button",
                ["display-text",function() { return `You have ${format(player.points)} points.`},],
                ["display-text",function() { return hasMilestone("p",2) ? `You are gaining ${format(getResetGain("p","normal").times(tmp.p.passiveGeneration))} prestige points per second.` : ``},],
                "blank",
                "upgrades",
                "blank",
                "clickables"
            ]
        },
        "Milestones":{
            content:[
                ["display-text",function() { return `You have <h2 style="color:#31aeb0">${format(player.p.points)}</h2> prestige points, which adds <h2 style="color:#31aeb0">${format(tmp.p.calcboost)}</h2> to x.`},
                { "font-size":"17.5px","text-shadow" : "0 0 10px #31aeb0"},],
                "blank",
                "milestones",
            ]
        },
        "Buyables":{
            content:[
                ["display-text",function() { return `Each buyables Adds ${format(player.p.buyableboost)} to the base multiplier of x. Currently:<h2 style="color:#31aeb0">+${format(tmp.p.calcbuyableboost)}</h2>`}],
                "blank",
                "buyables",
            ],
            unlocked(){return hasMilestone("sp",4)}
        },
    },
    calcboost(){
        let exp5=new Decimal(1.75)
        if(hasMilestone("p",0)) exp5=exp5.add(0.1)
        if(hasUpgrade("p",14)) exp5=exp5.add(0.2)
        if(hasMilestone("hp",3)) exp5=exp5.add(0.4)
        if(hasMilestone("pu",4)) exp5=exp5.add(0.25)
        let boost=Decimal.pow(exp5,player.p.points.pow(0.5).add(1).ln()).minus(1)
        let sc=new Decimal(100)
        if(hasMilestone("sp",3)) sc=sc.times(2)
        if(player.c.choose13&&player.c.isbegun) sc=new Decimal(0)
        if(hasUpgrade("p",41)) boost=boost.pow(1.25)
        boost=boost.times(buyableEffect("p",21))
        if((player.r.rngseed1[0]=='0'&&player.r.rngseed1[1]!='0')&&player.r.allowrng1) boost=boost.pow(tmp.r.calcrng1boost[1])
        if(boost.gt(sc)) boost=boost.minus(sc).add(1).log10().pow(3).add(sc).pow(player.c.choose13&&player.c.isbegun?0.5:1)
        boost=boost.pow(tmp.pt.calcboost3)

        player.p.sc=sc
        return (player.c.choose41&&player.c.isbegun)?new Decimal(0):boost
    },
    calcbuyableboost(){
        let multi=new Decimal(0.1)
        if(hasUpgrade("pu",11)) multi=new Decimal(0.3)
        if(hasUpgrade("pu",12)) multi=new Decimal(0.5)
        if(hasUpgrade("pu",13)) multi=new Decimal(0.8)
        if(hasUpgrade("pu",14)) multi=new Decimal(1)
        multi=multi.add(tmp.pt.calcboost4)
        player.p.buyableboost=multi
        return getBuyableAmount("p",11).add(getBuyableAmount("p",12).add(getBuyableAmount("p",13).add(getBuyableAmount("p",21).add(getBuyableAmount("p",22).add(getBuyableAmount("p",23)))))).times(multi)
    },
    update(diff){
        if(hasUpgrade("up",15)&&hasAchievement("a",165)) layers.p.buyables[11].buyMax()
        else if(hasUpgrade("hp",14)) layers.p.buyables[11].buy()
        if(hasUpgrade("up",15)&&hasAchievement("a",165)) layers.p.buyables[12].buyMax()
        else if(hasUpgrade("hp",14)) layers.p.buyables[12].buy()
        if(hasUpgrade("up",15)&&hasAchievement("a",165)) layers.p.buyables[13].buyMax()
        else if(hasUpgrade("hp",14)) layers.p.buyables[13].buy()
        if(hasUpgrade("up",15)&&hasAchievement("a",165)) layers.p.buyables[21].buyMax()
        else if(hasUpgrade("hp",14)) layers.p.buyables[21].buy()
        if(hasUpgrade("up",15)&&hasAchievement("a",165)) layers.p.buyables[22].buyMax()
        else if(hasUpgrade("hp",14)) layers.p.buyables[22].buy()
        if(hasUpgrade("up",15)&&hasAchievement("a",165)) layers.p.buyables[23].buyMax()
        else if(hasUpgrade("hp",14)) layers.p.buyables[23].buy()
    },
    upgrades:{
        11:{
            title:"Prestige boost",
            description(){return "Boost point gain based on prestige points."},
            cost(){return new Decimal(3)},
            unlocked(){ 
                return player.p.unlocked
            },
            canAfford(){return player.p.points.gte(3)},
            pay(){return player.p.points=player.p.points.minus(3)},
            effect(){return player.c.choose12&&player.c.isbegun? new Decimal(1) : player.p.points.add(1).log10().add(1).pow(1.5).pow(hasUpgrade("p",24) ? upgradeEffect("p",24):1)},
            effectDisplay(){return `x${format(upgradeEffect("p",11))}`},
        },
        12:{
            title:"Point boost",
            description(){return "Boost point gain based on itself."},
            cost(){return new Decimal(10)},
            unlocked(){ 
                return hasUpgrade("p",11)
            },
            canAfford(){return player.p.points.gte(10)},
            pay(){return player.p.points=player.p.points.minus(10)},
            effect(){return player.c.choose12&&player.c.isbegun? new Decimal(1) : player.points.pow(hasMilestone("p",4) ? 1 : 0.4).add(1).ln().pow(1.2).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("p",12))}`},
        },
        13:{
            title:"Point Antiboost",
            description(){return "Boost prestige point gain based points."},
            cost(){return new Decimal(20)},
            unlocked(){ 
                return hasUpgrade("p",12)
            },
            canAfford(){return player.p.points.gte(20)},
            pay(){return player.p.points=player.p.points.minus(20)},
            effect(){return player.c.choose12&&player.c.isbegun? new Decimal(1) : player.points.pow(0.3).add(1).ln().pow(hasMilestone("p",3) ? 1.25 : 0.75).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("p",13))}`},
        },
        14:{
            title:"Prestige exp boost",
            description(){return "Add 0.2 to prestige boost exp."},
            cost(){return new Decimal(1e5)},
            unlocked(){ 
                return hasUpgrade("p",13)
            },
            canAfford(){return player.p.points.gte(1e5)},
            pay(){return player.p.points=player.p.points.minus(1e5)},
        },
        21:{
            title:"Prestige Antiboost",
            description(){return "Boost prestige point gain based on itself."},
            cost(){return new Decimal(150)},
            unlocked(){ 
                return hasUpgrade("p",13)
            },
            canAfford(){return player.p.points.gte(150)},
            pay(){return player.p.points=player.p.points.minus(150)},
            effect(){return player.c.choose12&&player.c.isbegun? new Decimal(1) : Decimal.pow(1.5,player.p.points.add(1).log10()).add(1).ln().pow(hasUpgrade("p",33) ? upgradeEffect("p",33).add(1.75) : new Decimal(1.75)).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("p",21))}`},
        },
        22:{
            title:"Upgrade boost",
            description(){return "Each prestige upgrade bought multiplies point gain by 1.5x."},
            cost(){return new Decimal(300)},
            unlocked(){ 
                return hasUpgrade("p",21)
            },
            canAfford(){return player.p.points.gte(300)},
            pay(){return player.p.points=player.p.points.minus(300)},
            effect(){return player.c.choose12&&player.c.isbegun? new Decimal(1) : Decimal.pow(hasUpgrade("up",22)?3:1.5,(hasUpgrade("up",22) ? player.hp.upgrades.length+player.sp.upgrades.length+player.p.upgrades.length:hasUpgrade("sp",23) ? player.sp.upgrades.length+player.p.upgrades.length:player.p.upgrades.length))},
            effectDisplay(){return `x${format(upgradeEffect("p",22))}`},
        },
        23:{
            title:"Prestige exponent",
            description(){return "Prestige point gain is raised to ^1.05"},
            cost(){return new Decimal(500)},
            unlocked(){ 
                return hasUpgrade("p",22)
            },
            canAfford(){return player.p.points.gte(500)},
            pay(){return player.p.points=player.p.points.minus(500)},
        },
        24:{
            title:"Prestige reboost",
            description(){return `Boost the effect of "Prestige boost" based on prestige points.`},
            cost(){return new Decimal(1.5e5)},
            unlocked(){ 
                return hasUpgrade("p",23)
            },
            canAfford(){return player.p.points.gte(1.5e5)},
            pay(){return player.p.points=player.p.points.minus(1.5e5)},
            effect(){return player.c.choose12&&player.c.isbegun? new Decimal(1) : player.p.points.add(1).log10().pow(1.25).div(100).add(1).min(2)},
            effectDisplay(){return `^${format(upgradeEffect("p",24))}`},
        },
        31:{
            title:"Adder boost",
            description(){return "Boost the adder of x based on points."},
            cost(){return new Decimal(1500)},
            unlocked(){ 
                return hasUpgrade("p",23)
            },
            canAfford(){return player.p.points.gte(1500)},
            pay(){return player.p.points=player.p.points.minus(1500)},
            effect(){return player.points.add(1).log10().add(1).ln().pow(1.8).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("p",31))}`},
        },
        32:{
            title:"Adder Antiboost",
            description(){return "Boost point gain based on the adder of x."},
            cost(){return new Decimal(3000)},
            unlocked(){ 
                return hasUpgrade("p",31)
            },
            canAfford(){return player.p.points.gte(3000)},
            pay(){return player.p.points=player.p.points.minus(3000)},
            effect(){return player.f.adder.pow(4).add(1).ln().pow(0.5).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("p",32))}`},
        },
        33:{
            title:"Tier II boost",
            description(){return `Boost the effect exp. of "Prestige Antiboost" based on points.`},
            cost(){return new Decimal(9000)},
            unlocked(){ 
                return hasUpgrade("p",32)
            },
            canAfford(){return player.p.points.gte(9000)},
            pay(){return player.p.points=player.p.points.minus(9000)},
            effect(){return player.points.add(1).log10().pow(0.5).div(100)},
            effectDisplay(){return `+${format(upgradeEffect("p",33))}`},
        },
        34:{
            title:"Tier II Antiboost",
            description(){return `"Upgrade boost" affects prestige point gain with a weaker effect.`},
            cost(){return new Decimal(2e5)},
            unlocked(){ 
                return hasUpgrade("p",33)
            },
            canAfford(){return player.p.points.gte(2e5)},
            pay(){return player.p.points=player.p.points.minus(2e5)},
            effect(){return upgradeEffect("p",22).pow(0.666)},
            effectDisplay(){return `x${format(upgradeEffect("p",34))}`},
        },
        41:{
            title:"Prestige boost+",
            description(){return `Prestige point boost is raised to ^1.25 before softcap.`},
            cost(){return new Decimal(1e8)},
            unlocked(){ 
                return hasMilestone("sp",1)
            },
            canAfford(){return player.p.points.gte(1e8)},
            pay(){return player.p.points=player.p.points.minus(1e8)},
        },
        42:{
            title:"Prestige boost++",
            description(){return `Prestige point gain is raised to ^1.025.`},
            cost(){return new Decimal(2.5e8)},
            unlocked(){ 
                return hasMilestone("sp",1)
            },
            canAfford(){return player.p.points.gte(2.5e8)},
            pay(){return player.p.points=player.p.points.minus(2.5e8)},
        },
        43:{
            title:"Prestige boost+++",
            description(){return `Boost the adder of x based on prestige points.`},
            cost(){return new Decimal(1e10)},
            unlocked(){ 
                return hasMilestone("sp",1)
            },
            canAfford(){return player.p.points.gte(1e10)},
            pay(){return player.p.points=player.p.points.minus(1e10)},
            effect(){return player.p.points.add(1).log10().add(1).ln().pow(hasMilestone("p",7) ? 4 : 1.5).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("p",43))}`},
        },
        44:{
            title:"Prestige boost++++",
            description(){return `Double SP gain.`},
            cost(){return new Decimal(2e10)},
            unlocked(){ 
                return hasMilestone("sp",1)
            },
            canAfford(){return player.p.points.gte(2e10)},
            pay(){return player.p.points=player.p.points.minus(2e10)},
        },
        45:{
            title:"How did you get there?",
            description(){return `Boost point gain based on Rein points and prestige points.`},
            cost(){return new Decimal("1e134000")},
            unlocked(){ 
                return player.r.rc1fin
            },
            canAfford(){return player.p.points.gte("1e134000")},
            pay(){return player.p.points=player.p.points.minus("1e134000")},
            effect(){return player.p.points.add(1).ln().times(player.r.points).pow(100).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("p",45))}`},
        }
    },
    clickables:{
        11:{
            display(){return `Spin to function tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EEEEEE","color":"#DDDDDD","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.p.unlocked},
            onClick(){
                player.tab='f'
            },
            canClick(){return true}
        },
        12:{
            display(){return `Spin to super prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#217782","color":"#217782","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.sp.unlocked},
            onClick(){
                player.tab='sp'
            },
            canClick(){return true}
        },
        13:{
            display(){return `Spin to prestige upgrader tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#14CEA3","color":"#14CEA3","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pu.unlocked},
            onClick(){
                player.tab='pu'
            },
            canClick(){return true}
        },
        14:{
            display(){return `Spin to hyper prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#0068A5","color":"#0068A5","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.hp.unlocked},
            onClick(){
                player.tab='hp'
            },
            canClick(){return true}
        },
        15:{
            display(){return `Spin to challenge tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#45AC68","color":"#45AC68","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.c.checker},
            onClick(){
                player.tab='c'
            },
            canClick(){return true}
        },
        21:{
            display(){return `Spin to super upgrader tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#04AE83","color":"#04AE83","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.su.unlocked},
            onClick(){
                player.tab='su'
            },
            canClick(){return true}
        },
        22:{
            display(){return `Spin to ultra prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#5C00CC","color":"#5C00CC","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.up.unlocked},
            onClick(){
                player.tab='up'
            },
            canClick(){return true}
        },
        23:{
            display(){return `Spin to prestium tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EEDB05","color":"#EEDB05","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pt.unlocked},
            onClick(){
                player.tab='pt'
            },
            canClick(){return true}
        },
        24:{
            display(){return `Spin to reincarnation tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EF25EF","color":"#EF25EF","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.r.unlocked},
            onClick(){
                player.tab='r'
            },
            canClick(){return true}
        },
    },
    milestones:{
        0: {
            requirementDescription: "100 prestige points",
            done() { return player.p.points.gte(100)},
            style:{"width":"500px"},
            effectDescription: "Add 0.1 to prestige boost-exp.",
        },
        1: {
            requirementDescription: "25000 prestige points",
            done() { return player.p.points.gte(25000)},
            style:{"width":"500px"},
            effectDescription: "Triple prestige point gain.",
        },
        2: {
            requirementDescription: "1e7 prestige points",
            done() { return player.p.points.gte(1e7)},
            style:{"width":"500px"},
            effectDescription: "Gain 5% of prestige point gain on reset per second.",
        },
        3: {
            requirementDescription: "1e15 prestige points",
            done() { return player.p.points.gte(1e15)},
            style:{"width":"500px"},
            effectDescription: `"Point antiboost" effect exp. is 1.25, unlock a new buyable.`,
            unlocked(){return hasMilestone("sp",4)}
        },
        4: {
            requirementDescription: "1e17 prestige points",
            done() { return player.p.points.gte(1e17)},
            style:{"width":"500px"},
            effectDescription: `"Point Boost" exp. is 1, unlock a new buyable.`,
            unlocked(){return hasMilestone("sp",4)}
        },
        5: {
            requirementDescription: "5e23 prestige points",
            done() { return player.p.points.gte(5e23)},
            style:{"width":"500px"},
            effectDescription: `Double SP gain, unlock a new buyable.`,
            unlocked(){return player.pu.unlocked}
        },
        6: {
            requirementDescription: "1e29 prestige points",
            done() { return player.p.points.gte(1e29)},
            style:{"width":"500px"},
            effectDescription: `"Prestige boost booster" effect base is 4, unlock a new buyable.`,
            unlocked(){return player.pu.unlocked}
        },
        7: {
            requirementDescription: "1e34 prestige points",
            done() { return player.p.points.gte(1e34)},
            style:{"width":"500px"},
            effectDescription: `"Prestige boost+++" effect exp. is 4, unlock a new buyable.`,
            unlocked(){return player.pu.unlocked}
        },
    },
    buyables:{
        11:{
            title:"Point booster",
            cost(x) { return Decimal.pow(5,Decimal.pow(x,1.1)).times(1e20)},
            effect(x) { return (player.r.rc2&&player.r.rcbegun)? Decimal.pow(0.99,x):((player.r.rngseed1[1]=='0'&&player.r.rngseed1[0]!='0'&&player.r.allowrng1)?x.add(tmp.r.calcrng1boost[2]):x).pow(new Decimal(hasMilestone("hp",6) ? 8 : hasUpgrade("hp",25) ? 4 : hasUpgrade("sp",33) ? 3 : 2).add(hasUpgrade("hp",32)?upgradeEffect("hp",32):0)).add(1)},
            display() { return `Boost point gain.
                                Cost: ${format(this.cost())} points
                                Amount: ${format(getBuyableAmount("p",11))}<br>`+((player.r.rc2&&player.r.rcbegun)?
                                `Effect: /${format(new Decimal(1).div(this.effect()))}`:`Effect: x${format(this.effect())}`) },
            canAfford() { return player.points.gte(this.cost()) },
            buy(){
                if(!tmp.p.buyables[11].canAfford) return
                if(!hasUpgrade("hp",14)) player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            buyMax() {
                if(!tmp.p.buyables[11].canAfford) return
                let tb = player.points.max(1).div(1e20).log(5).pow(new Decimal(1).div(1.1)).max(0)
                let tg = tb.plus(1).floor()
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(tg))
            },
            style:{"height":"250px","width":"250px","font-size":"15px"}
        },
        12:{
            title:"Adder booster",
            cost(x) { return Decimal.pow(10,x.pow(1.25)).times(1e13)},
            effect(x) { return Decimal.pow(4,x.div(1.5)).pow(hasUpgrade("pu",12)? 0.9 : 0.8).times(2)},
            display() { return `Boost the adder of x.
                                Cost: ${format(this.cost())} prestige points
                                Amount: ${format(getBuyableAmount("p",12))}
                                Effect: x${format(this.effect())}` },
            canAfford() { return player.p.points.gte(this.cost()) },
            buy(){
                if(!tmp.p.buyables[12].canAfford) return
                if(!hasUpgrade("hp",14))player.p.points = player.p.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.buyableamo=player.p.buyableamo.add(1)
            },
            buyMax() {
                if(!tmp.p.buyables[12].canAfford) return
                let tb = player.p.points.max(1).div(1e13).log(10).pow(new Decimal(1).div(1.25)).max(0)
                let tg = tb.plus(1).floor()
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(tg))
            },
            unlocked(){return hasMilestone("p",3)},
            style:{"height":"250px","width":"250px","font-size":"15px"}
        },
        13:{
            title:"Prestige booster",
            cost(x) { return Decimal.pow(2,x.add(1).pow(2)).times(1e17)},
            effect(x) { return Decimal.pow((hasMilestone("sp",5) ? 2.75 : 2),x).pow(0.875)},
            display() { return `Boost prestige point gain.
                                Cost: ${format(this.cost())} prestige points
                                Amount: ${format(getBuyableAmount("p",13))}
                                Effect: x${format(this.effect())}` },
            canAfford() { return player.p.points.gte(this.cost()) },
            buy(){
                if(!tmp.p.buyables[13].canAfford) return
                if(!hasUpgrade("hp",14))player.p.points = player.p.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.buyableamo=player.p.buyableamo.add(1)
            },
            buyMax() {
                if(!tmp.p.buyables[13].canAfford) return
                let tb = player.p.points.max(1).div(1e17).log(2).pow(new Decimal(1).div(2)).minus(1).max(0)
                let tg = tb.plus(1).floor()
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(tg))
            },
            unlocked(){return hasMilestone("p",4)},
            style:{"height":"250px","width":"250px","font-size":"15px"}
        },
        21:{
            title:"Prestige boost booster",
            cost(x) { return Decimal.pow(2.1,x.add(1).pow(1.75)).times(1e23)},
            effect(x) { return Decimal.pow(hasMilestone("p",6) ? 4: 2,x)},
            display() { return `Boost the effect of prestige points before softcap.
                                Cost: ${format(this.cost())} prestige points
                                Amount: ${format(getBuyableAmount("p",21))}
                                Effect: x${format(this.effect())}` },
            canAfford() { return player.p.points.gte(this.cost()) },
            buy(){
                if(!tmp.p.buyables[21].canAfford) return
                if(!hasUpgrade("hp",14))player.p.points = player.p.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.buyableamo=player.p.buyableamo.add(1)
            },
            buyMax() {
                if(!tmp.p.buyables[21].canAfford) return
                let tb = player.p.points.max(1).div(1e23).log(2.1).pow(new Decimal(1).div(1.75)).minus(1).max(0)
                let tg = tb.plus(1).floor()
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(tg))
            },
            unlocked(){return hasMilestone("p",5)},
            style:{"height":"250px","width":"250px","font-size":"15px"}
        },
        22:{
            title:"Super booster",
            cost(x) { return Decimal.pow(3,x.add(1).pow(2)).times(hasUpgrade("hp",33)?1e18:1e28)},
            effect(x) { return Decimal.pow(8.25,(((player.r.rngseed2[0]=='2'||player.r.rngseed2[0]=='3'||player.r.rngseed2[0]=='8')&&player.r.allowrng2)?x.add(tmp.r.calcrng2boost[3]):x)).pow(0.5)},
            display() { return `Boost SP gain.
                                Cost: ${format(this.cost())} prestige points
                                Amount: ${format(getBuyableAmount("p",22))}
                                Effect: x${format(this.effect())}` },
            canAfford() { return player.p.points.gte(this.cost()) },
            buy(){
                if(!tmp.p.buyables[22].canAfford) return
                if(!hasUpgrade("hp",14))player.p.points = player.p.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.buyableamo=player.p.buyableamo.add(1)
            },
            buyMax() {
                if(!tmp.p.buyables[11].canAfford) return
                let tb = player.p.points.max(1).div(hasUpgrade("hp",33)?1e18 : 1e28).log(3).pow(new Decimal(1).div(2)).minus(1).max(0)
                let tg = tb.plus(1).floor()
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(tg))
            },
            unlocked(){return hasMilestone("p",6)},
            style:{"height":"250px","width":"250px","font-size":"15px"}
        },
        23:{
            title:"Super boost booster",
            cost(x) { return Decimal.pow(2,x.add(1).pow(2.75)).times(hasUpgrade("hp",33)?1e23:1e33)},
            effect(x) { return Decimal.pow(5,x.pow(0.75))},
            display() { return `Boost SP boost base.
                                Cost: ${format(this.cost())} prestige points
                                Amount: ${format(getBuyableAmount("p",23))}
                                Effect: x${format(this.effect())}` },
            canAfford() { return player.p.points.gte(this.cost()) },
            buy(){
                if(!tmp.p.buyables[23].canAfford) return
                if(!hasUpgrade("hp",14))player.p.points = player.p.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.p.buyableamo=player.p.buyableamo.add(1)
            },
            buyMax() {
                if(!tmp.p.buyables[23].canAfford) return
                let tb = player.p.points.max(1).div(hasUpgrade("hp",33)?1e18 : 1e28).log(2).pow(new Decimal(1).div(2.75)).minus(1).max(0)
                let tg = tb.plus(1).floor()
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).max(tg))
            },
            unlocked(){return hasMilestone("p",7)},
            style:{"height":"250px","width":"250px","font-size":"15px"}
        },
    }
}),
addLayer("sp", {
    name: "super prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0)
    }},
    color: "#217782",
    requires: new Decimal(5e7), // Can be a function that takes requirement increases into account
    resource: "super prestige points", // Name of prestige currency
    baseResource: "prestige points", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent(){
        gain=0.1
        if(hasUpgrade("hp",22)) gain=0.15
        return gain
    }, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if(hasUpgrade("p",44)) mult=mult.times(2)
        if(hasUpgrade("sp",15)) mult=mult.times(upgradeEffect("sp",15))
        if(hasUpgrade("sp",24)) mult=mult.times(upgradeEffect("sp",24))
        if(hasUpgrade("sp",34)) mult=mult.times(upgradeEffect("sp",34))
        if(hasUpgrade("hp",24)) mult=mult.times(upgradeEffect("hp",24))
        if(hasUpgrade("su",11)) mult=mult.times(upgradeEffect("su",11))
        if(hasUpgrade("up",12)) mult=mult.times(upgradeEffect("up",12))
        if(hasMilestone("p",5)) mult=mult.times(2)
        if(hasMilestone("hp",4)) mult=mult.times(3)
        if(hasAchievement("a",135)) mult=mult.times(5)
        mult=mult.times(buyableEffect("p",22))
        mult=mult.times(tmp.up.calcupboost)
        if(player.hp.unlocked) mult=mult.times(tmp.hp.calchpboost)
        if((player.r.rngseed2[1]=='5'||player.r.rngseed2[1]=='7'||player.r.rngseed2[1]=='9')&&player.r.allowrng2) mult=mult.times(tmp.r.calcrng2boost[4])
        if((player.r.rngseed2[0]=='2'||player.r.rngseed2[0]=='5')&&player.r.allowrng2) mult=mult.times(player.r.r2dynamicboost)
        if(player.c.choose31&&player.c.isbegun) mult=mult.times(0)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        if(hasUpgrade("hp",12)) exp=exp.times(1.1)
        if(hasMilestone("hp",5)) exp=exp.times(tmp.c.calcshardboost)
        if(player.c.choose21&&player.c.isbegun) exp=exp.times(0.6)
        if(player.r.rngseed2[0]=='1'||player.r.rngseed2[0]=='5') exp=exp.times(1.01)
        if(player.r.rngseed4=='3'&&player.r.allowrng4) exp=exp.times(tmp.r.calcrng4boost[2])
        if(player.r.rc1&&player.r.rcbegun&&player.up.best.gte(1)) exp=exp.times(0.75)
        return exp
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "s", description: "S: Reset for super prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("f",333)},
    passiveGeneration(){return hasMilestone("hp",3) ? 1 : hasMilestone("pu",1)?0.05:0},
    doReset(resettingLayer){
        player.points=new Decimal(0)
        let keep = [];
        if(hasMilestone("hp",0)||hasMilestone("r",2)) keep.push("milestones")
        if(hasMilestone("hp",2)||hasMilestone("r",2)) keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("sp",keep)
    },
    tabFormat:{
        "Main":{
            content:[
                ["display-text",function() { return `You have <h2 style="color:#217782">${format(player.sp.points)}</h2> super prestige points, which boost point gain by <h2 style="color:#217782">${format(tmp.sp.calcspboost)}</h2>.`},
                { "font-size":"17.5px","text-shadow" : "0 0 10px #217782"},],
                "blank",
                "prestige-button",
                ["display-text",function() { return `You have ${format(player.p.points)} prestige points.`},],
                ["display-text",function() { return hasMilestone("pu",1) ? `You are gaining ${format(getResetGain("sp","normal").times(tmp.sp.passiveGeneration))} super prestige points per second.` : ``},],
                "blank",
                "upgrades",
                "blank",
                "clickables"
            ]
        },
        "Milestones":{
            content:[
                ["display-text",function() { return `You have <h2 style="color:#217782">${format(player.sp.points)}</h2> super prestige points, which boost point gain by <h2 style="color:#217782">${format(tmp.sp.calcspboost)}</h2>.`},
                { "font-size":"17.5px","text-shadow" : "0 0 10px #217782"},],
                "blank",
                "milestones",
            ]
        }
    },
    calcspboost(){
        let exp6=new Decimal(1.25)
        if(hasUpgrade("sp",25)) exp6=exp6.add(0.1)
        if(hasMilestone("pu",2)) exp6=exp6.add(0.25)
        if(hasUpgrade("hp",11)) exp6=exp6.add(upgradeEffect("hp",11))
        if(hasUpgrade("su",12)) exp6=exp6.add(upgradeEffect("su",12))
        let boost=(hasMilestone("sp",2)? player.sp.best : player.sp.points).times(buyableEffect("p",23)).add(1).pow(exp6).ln().pow(2).times(2).max(1).pow(hasMilestone("hp",1)?2:1)
        if(hasMilestone("up",5)) boost=(hasMilestone("sp",2)? player.sp.best : player.sp.points).times(buyableEffect("p",23)).add(1).pow(exp6).ln().max(1).pow(hasMilestone("hp",1)?2:1).times(1e100)
        return boost
    },
    branches:["p"],
    upgrades:{
        11:{
            title:"More prestige",
            description(){return `Double prestige point gain.`},
            cost(){return new Decimal(1)},
            unlocked(){ 
                return player.sp.unlocked
            },
            canAfford(){return player.sp.points.gte(1)},
            pay(){return player.sp.points=player.sp.points.minus(1)},
        },
        12:{
            title:"More points",
            description(){return `Double the adder and the multiplier of x.`},
            cost(){return new Decimal(1)},
            unlocked(){ 
                return player.sp.unlocked
            },
            canAfford(){return player.sp.points.gte(1)},
            pay(){return player.sp.points=player.sp.points.minus(1)},
        },
        13:{
            title:"Super boost",
            description(){return `Boost prestige points gain based on SP points.`},
            cost(){return new Decimal(1)},
            unlocked(){ 
                return hasUpgrade("sp",11)&&hasUpgrade("sp",12)
            },
            canAfford(){return player.sp.points.gte(1)},
            pay(){return player.sp.points=player.sp.points.minus(1)},
            effect(){return (player.c.choose23&&player.c.isbegun)? new Decimal(1) : player.sp.points.add(1).log10().pow((hasUpgrade("sp",32) ? upgradeEffect("sp",32) : new Decimal(0)).add(2.5)).add(1).min(1e12)},
            effectDisplay(){return `x${format(upgradeEffect("sp",13))}`},
        },
        14:{
            title:"Super point boost",
            description(){return `Boost point gain based on SP points.`},
            cost(){return new Decimal(5)},
            unlocked(){ 
                return hasUpgrade("sp",13)
            },
            canAfford(){return player.sp.points.gte(5)},
            pay(){return player.sp.points=player.sp.points.minus(5)},
            effect(){return (player.c.choose23&&player.c.isbegun)? new Decimal(1) : player.sp.points.add(1).pow(0.75).log10().pow(3.333).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("sp",14))}`},
        },
        15:{
            title:"Super Antiboost",
            description(){return `Boost SP points gain based on SP points.`},
            cost(){return new Decimal(35)},
            unlocked(){ 
                return hasUpgrade("sp",14)
            },
            canAfford(){return player.sp.points.gte(35)},
            pay(){return player.sp.points=player.sp.points.minus(35)},
            effect(){return (player.c.choose23&&player.c.isbegun)? new Decimal(1) : player.sp.points.add(1).pow(2).log10().add(1)},
            effectDisplay(){return `x${format(upgradeEffect("sp",15))}`},
        },
        21:{
            title:"More prestige+",
            description(){return `Prestige gain exponent is 0.275 now.`},
            cost(){return new Decimal(120)},
            unlocked(){ 
                return hasUpgrade("sp",15)
            },
            canAfford(){return player.sp.points.gte(120)},
            pay(){return player.sp.points=player.sp.points.minus(120)},
        },
        22:{
            title:"More points+",
            description(){return `The multiplier of x is raised to ^1.1.`},
            cost(){return new Decimal(120)},
            unlocked(){ 
                return hasUpgrade("sp",15)
            },
            canAfford(){return player.sp.points.gte(120)},
            pay(){return player.sp.points=player.sp.points.minus(120)},
        },
        23:{
            title:"More upgrades",
            description(){return `Super prestige upgrades count in "Upgrade Boost"'s effect.`},
            cost(){return new Decimal(500)},
            unlocked(){ 
                return hasUpgrade("sp",21)||hasUpgrade("sp",22)
            },
            canAfford(){return player.sp.points.gte(500)},
            pay(){return player.sp.points=player.sp.points.minus(500)},
        },
        24:{
            title:"Super Super Antiboost",
            description(){return `Boost SP gain based on points.`},
            cost(){return new Decimal(1000)},
            unlocked(){ 
                return hasUpgrade("sp",23)
            },
            canAfford(){return player.sp.points.gte(1000)},
            pay(){return player.sp.points=player.sp.points.minus(1000)},
            effect(){return player.points.pow(2).add(1).log10().add(1).ln().pow(1.5).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("sp",24))}`},
        },
        25:{
            title:"Super exp. boost",
            description(){return `Add 0.1 to SP boost exp.`},
            cost(){return new Decimal(10000)},
            unlocked(){ 
                return hasUpgrade("sp",24)
            },
            canAfford(){return player.sp.points.gte(10000)},
            pay(){return player.sp.points=player.sp.points.minus(10000)},
        },
        31:{
            title:"Super reboost",
            description(){return `SP boost affects prestige point gain with a weaker effect.`},
            cost(){return new Decimal(50000)},
            unlocked(){ 
                return hasUpgrade("sp",25)
            },
            canAfford(){return player.sp.points.gte(50000)},
            pay(){return player.sp.points=player.sp.points.minus(50000)},
            effect(){return tmp.sp.calcspboost.pow(0.5)},
            effectDisplay(){return `x${format(upgradeEffect("sp",31))}`},
        },
        32:{
            title:"Super exp. Antiboost",
            description(){return `Add a number to "Super Boost"'s effect exp. based on SP points.`},
            cost(){return new Decimal(70000)},
            unlocked(){ 
                return hasUpgrade("sp",31)
            },
            canAfford(){return player.sp.points.gte(70000)},
            pay(){return player.sp.points=player.sp.points.minus(70000)},
            effect(){return player.sp.points.add(1).log10().add(1).pow(2).div(50)},
            effectDisplay(){return `+${format(upgradeEffect("sp",32))}`},
        },
        33:{
            title:"Super buyable boost",
            description(){return `Effect exp. of "Point booster" is 3 instead of 2.`},
            cost(){return new Decimal(300000)},
            unlocked(){ 
                return hasUpgrade("sp",32)
            },
            canAfford(){return player.sp.points.gte(300000)},
            pay(){return player.sp.points=player.sp.points.minus(300000)},
        },
        34:{
            title:"Super Antiboost+",
            description(){return `Boost SP points gain based on prestige points.`},
            cost(){return new Decimal(700000)},
            unlocked(){ 
                return hasUpgrade("sp",33)
            },
            canAfford(){return player.sp.points.gte(700000)},
            pay(){return player.sp.points=player.sp.points.minus(700000)},
            effect(){return player.p.points.add(1).log10().pow(1.5).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("sp",34))}`},
        },
        35:{
            title:"We could get MORE",
            description(){return `The multiplier of x is raised to ^1.2,prestige point gain is raised to ^1.025.`},
            cost(){return new Decimal(5e9)},
            unlocked(){ 
                return hasUpgrade("sp",34)
            },
            canAfford(){return player.sp.points.gte(5e9)},
            pay(){return player.sp.points=player.sp.points.minus(5e9)},
        },
    },
    clickables:{
        11:{
            display(){return `Spin to function tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EEEEEE","color":"#DDDDDD","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.sp.unlocked},
            onClick(){
                player.tab='f'
            },
            canClick(){return true}
        },
        12:{
            display(){return `Spin to prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#31aeb0","color":"#31aeb0","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.sp.unlocked},
            onClick(){
                player.tab='p'
            },
            canClick(){return true}
        },
        13:{
            display(){return `Spin to prestige upgrader tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#14CEA3","color":"#14CEA3","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pu.unlocked},
            onClick(){
                player.tab='pu'
            },
            canClick(){return true}
        },
        14:{
            display(){return `Spin to hyper prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#0068A5","color":"#0068A5","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.hp.unlocked},
            onClick(){
                player.tab='hp'
            },
            canClick(){return true}
        },
        15:{
            display(){return `Spin to challenge tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#45AC68","color":"#45AC68","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.c.checker},
            onClick(){
                player.tab='c'
            },
            canClick(){return true}
        },
        21:{
            display(){return `Spin to super upgrader tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#04AE83","color":"#04AE83","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.su.unlocked},
            onClick(){
                player.tab='su'
            },
            canClick(){return true}
        },
        22:{
            display(){return `Spin to ultra prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#5C00CC","color":"#5C00CC","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.up.unlocked},
            onClick(){
                player.tab='up'
            },
            canClick(){return true}
        },
        23:{
            display(){return `Spin to prestium tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EEDB05","color":"#EEDB05","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pt.unlocked},
            onClick(){
                player.tab='pt'
            },
            canClick(){return true}
        },
        24:{
            display(){return `Spin to reincarnation tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EF25EF","color":"#EF25EF","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.r.unlocked},
            onClick(){
                player.tab='r'
            },
            canClick(){return true}
        },
    },
    milestones:{
        0: {
            requirementDescription: "2 super prestige points",
            done() { return player.sp.points.gte(2)||player.r.coreLv.gte(3)},
            style:{"width":"500px"},
            effectDescription: "Kept prestige milestones on reset.",
        },
        1: {
            requirementDescription: "4 super prestige points",
            done() { return player.sp.points.gte(4)},
            style:{"width":"500px"},
            effectDescription: "The third prestige milestone's effect is 100%,unlock a new row of prestige upgrades.",
        },
        2: {
            requirementDescription: "10 super prestige points",
            done() { return player.sp.points.gte(10)},
            style:{"width":"500px"},
            effectDescription: "Kept prestige upgrades on reset,SP boost is based on best.",
        },
        3: {
            requirementDescription: "1000 super prestige points",
            done() { return player.sp.points.gte(1000)},
            style:{"width":"500px"},
            effectDescription: "The softcap of prestige boost starts 2x later.",
        },
        4: {
            requirementDescription: "20000 super prestige points",
            done() { return player.sp.points.gte(20000)},
            style:{"width":"500px"},
            effectDescription: "Unlock a prestige buyable.",
        },
        5: {
            requirementDescription: "250000 super prestige points",
            done() { return player.sp.points.gte(250000)},
            style:{"width":"500px"},
            effectDescription: `"Prestige booster" effect base is 2.75`,
        },
        6: {
            requirementDescription: "1e9 super prestige points",
            done() { return player.sp.points.gte(1e9)},
            style:{"width":"500px"},
            effectDescription: `The softcap of prestige points boost starts 2x later.`,
        },
        7: {
            requirementDescription: "1e35 super prestige points",
            done() { return player.sp.points.gte(1e35)},
            style:{"width":"500px"},
            effectDescription: `Challenge shards affect prestige point gain.`,
            unlocked(){return player.c.checker}
        },
    }
}),
addLayer("pu", {
    name: "prestige upgraders", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "PU", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    color: "#14CEA3",
    requires() { return new Decimal(1e29) }, // Can be a function that takes requirement increases into account
    resource: "prestige upgraders", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["p"],
    exponent() { 
        ba=3
        if(hasMilestone("hp",2)) ba=2
        return ba 
    }, // Prestige currency exponent
    base() {
        ca=4
        if(hasUpgrade("hp",31)) ca=3.75
        if(hasUpgrade("up",13)) ca=3.25
        if(hasMilestone("su",1)) ca=2.9
        return ca  
    },
    gainMult() { 
        let mult = new Decimal(1);
        if(hasUpgrade("pu",13)) mult=mult.div(upgradeEffect("pu",13))
        if(hasUpgrade("hp",31)) mult=mult.div(upgradeEffect("hp",31))
        if(hasAchievement("a",145)) mult=mult.div(25)
        mult=mult.pow(new Decimal(1).div(tmp.su.effect))
        if((player.r.rngseed3[0]=='1'||player.r.rngseed3[0]=='6'||player.r.rngseed3[0]=='9')&&player.r.allowrng3) mult=mult.pow(new Decimal(1).div(tmp.r.calcrng3boost[1]))
        return mult;
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "u", description: "Press U to perform a prestige upgrader reset", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("f",334)},
    effectBase() {
        let base = new Decimal(10);
        if(hasUpgrade("pu",21)) base=new Decimal(12.5)
        if(hasUpgrade("pu",22)) base=new Decimal(17.5)
        if(hasUpgrade("pu",23)) base=new Decimal(25)
        if((player.r.rngseed3[0]=='3'||player.r.rngseed3[0]=='4')&&player.r.allowrng3) base=base.add(tmp.r.calcrng3boost[2])
        if(player.r.rc2&&player.r.rcbegun) base=new Decimal(0.6)
        return base
    },
    effect() {
        if ((!player.pu.unlocked)||(player.c.choose22&&player.c.isbegun)) return new Decimal(1);
        return Decimal.pow(tmp.pu.effectBase,(player.pu.points.add(hasUpgrade("hp",41)?player.su.points.times((player.r.rngseed5[0]==player.r.rngseed5[1])&&player.r.rngseed5!="00"?12:10):0))).pow(((player.r.rngseeda=='0'||player.r.rngseeda=='5')&&player.r.allowrnga)?0.05:1)
    },
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        best: new Decimal(0),
        total: new Decimal(0),
    }},
    doReset(resettingLayer){
        player.points=new Decimal(0)
        if (layers[resettingLayer].row > this.row&&!hasMilestone("hp",0)) layerDataReset("pu")
    },
    autoPrestige(){return hasMilestone("pu",3)},
    resetsNothing(){return hasMilestone("su",0)},
    canBuyMax(){return hasMilestone("pu",5)},
    tabFormat:{
        "Main":{
            content:[
                ["display-text",function() { return `You have <h2 style="color:#14CEA3">${format(player.pu.points)}</h2>`+(hasUpgrade("hp",41)?`<h2 style="color:#04AE83">(+${format(player.su.points.times((player.r.rngseed5[0]==player.r.rngseed5[1])&&player.r.rngseed5!="00" ? 12:10))})</h2>`:``)+` prestige upgraders, `+((player.r.rc2&&player.r.rcbegun)?`which divides prestige points gain by <h2 style="color:#14CEA3">${format(new Decimal(1).div(tmp.pu.effect))}</h2>.`:`which boost prestige points gain by <h2 style="color:#14CEA3">${format(tmp.pu.effect)}</h2>.`)},
                { "font-size":"17.5px","text-shadow" : "0 0 10px #14CEA3"},],
                "blank",
                "prestige-button",
                ["display-text",function() { return `You have ${format(player.points)} points.`},],
                "blank",
                "upgrades",
                "blank",
                "clickables"
            ]
        },
        "Milestones":{
            content:[
                ["display-text",function() { return `You have <h2 style="color:#14CEA3">${player.pu.points}</h2> prestige upgraders, which boost prestige points gain by <h2 style="color:#14CEA3">${format(tmp.pu.effect)}</h2>.`},
                { "font-size":"17.5px","text-shadow" : "0 0 10px #14CEA3"},],
                "blank",
                "milestones",
            ]
        }
    },
    upgrades:{
        11:{
            title:"Upgrader boost",
            description(){return `Each of prestige buyables adds 0.3 instead of 0.1 to the base multiplier of x.`},
            cost(){return new Decimal(2)},
            unlocked(){ 
                return player.pu.unlocked
            },
            canAfford(){return player.pu.points.gte(2)},
            pay(){return player.pu.points=player.pu.points.minus(2)},
        },
        12:{
            title:"Upgrader boost+",
            description(){return `Each of prestige buyables adds 0.5 instead of 0.3 to the base multiplier of x,"Adder booster" effect exp. is 0.9`},
            cost(){return new Decimal(3)},
            unlocked(){ 
                return player.pu.unlocked
            },
            canAfford(){return player.pu.points.gte(3)},
            pay(){return player.pu.points=player.pu.points.minus(3)},
        },
        13:{
            title:"Upgrader Antiboost",
            description(){return `Each of prestige buyables adds 0.8 instead of 0.5 to the base multiplier of x,divide PU cost based on points.`},
            cost(){return new Decimal(4)},
            unlocked(){ 
                return player.pu.unlocked
            },
            canAfford(){return player.pu.points.gte(4)},
            pay(){return player.pu.points=player.pu.points.minus(4)},
            effect(){return player.points.add(1).pow(0.25)},
            effectDisplay(){return `/${format(upgradeEffect("pu",13))}`},
        },
        14:{
            title:"Upgrader superboost",
            description(){return `Each of prestige buyables adds 1 instead of 0.8 to the base multiplier of x.`},
            cost(){return new Decimal(10)},
            unlocked(){ 
                return player.pu.unlocked
            },
            canAfford(){return player.pu.points.gte(10)},
            pay(){return player.pu.points=player.pu.points.minus(10)},
        },
        15:{
            title:"Upgrader hyperboost",
            description(){return `Boost point gain based on PU.`},
            cost(){return new Decimal(21)},
            unlocked(){ 
                return player.pu.unlocked
            },
            canAfford(){return player.pu.points.gte(21)},
            pay(){return player.pu.points=player.pu.points.minus(21)},
            effect(){return Decimal.pow(2,player.pu.points.add(1).pow(1.1))},
            effectDisplay(){return `x${format(upgradeEffect("pu",15))}`},
        },
        21:{
            title:"Prestige hit",
            description(){return `PU effect base is 12.5.`},
            cost(){return new Decimal(28)},
            unlocked(){ 
                return player.pu.unlocked
            },
            canAfford(){return player.pu.points.gte(28)},
            pay(){return player.pu.points=player.pu.points.minus(28)},
        },
        22:{
            title:"Prestige hurt",
            description(){return `PU effect base is 17.5.`},
            cost(){return new Decimal(33)},
            unlocked(){ 
                return player.pu.unlocked
            },
            canAfford(){return player.pu.points.gte(33)},
            pay(){return player.pu.points=player.pu.points.minus(33)},
        },
        23:{
            title:"Prestige deadly hurt",
            description(){return `PU effect base is 25.`},
            cost(){return new Decimal(40)},
            unlocked(){ 
                return player.pu.unlocked
            },
            canAfford(){return player.pu.points.gte(40)},
            pay(){return player.pu.points=player.pu.points.minus(40)},
        },
        24:{
            title:"Prestige Anti-dilate",
            description(){return `HP gain is raised to ^1.2.`},
            cost(){return new Decimal(1187)},
            unlocked(){ 
                return player.r.rc1fin
            },
            canAfford(){return player.pu.points.gte(1187)},
            pay(){return player.pu.points=player.pu.points.minus(1187)},
        },
    },
    milestones:{
        0: {
            requirementDescription: "2 Prestige Upgraders",
            done() { return player.pu.points.gte(2)},
            style:{"width":"500px"},
            effectDescription: "Kept prestige milestones and upgrades on all resets.",
        },
        1: {
            requirementDescription: "3 Prestige Upgraders",
            done() { return player.pu.points.gte(3)},
            style:{"width":"500px"},
            effectDescription: "Gain 5% of SP points on reset per second.",
        },
        2: {
            requirementDescription: "4 Prestige Upgraders",
            done() { return player.pu.points.gte(4)},
            style:{"width":"500px"},
            effectDescription: "Add 0.25 to SP boost exp.",
        },
        3: {
            requirementDescription: "10 Prestige Upgraders",
            done() { return player.pu.points.gte(10)},
            style:{"width":"500px"},
            effectDescription: "Auto reset for PU.",
        },
        4: {
            requirementDescription: "28 Prestige Upgraders",
            done() { return player.pu.points.gte(28)},
            style:{"width":"500px"},
            effectDescription: "Add 0.25 to prestige boost exp.",
        },
        5: {
            requirementDescription: "32 Prestige Upgraders",
            done() { return player.pu.points.gte(32)},
            style:{"width":"500px"},
            effectDescription: "HP boost formula is better.You can buy max prestige upgraders.",
        },
    },
    clickables:{
        11:{
            display(){return `Spin to function tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EEEEEE","color":"#DDDDDD","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pu.unlocked},
            onClick(){
                player.tab='f'
            },
            canClick(){return true}
        },
        12:{
            display(){return `Spin to prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#31aeb0","color":"#31aeb0","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pu.unlocked},
            onClick(){
                player.tab='p'
            },
            canClick(){return true}
        },
        13:{
            display(){return `Spin to super prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#217782","color":"#217782","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pu.unlocked},
            onClick(){
                player.tab='sp'
            },
            canClick(){return true}
        },
        14:{
            display(){return `Spin to hyper prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#0068A5","color":"#0068A5","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.hp.unlocked},
            onClick(){
                player.tab='hp'
            },
            canClick(){return true}
        },
        15:{
            display(){return `Spin to challenge tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#45AC68","color":"#45AC68","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.c.checker},
            onClick(){
                player.tab='c'
            },
            canClick(){return true}
        },
        21:{
            display(){return `Spin to super upgrader tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#04AE83","color":"#04AE83","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.su.unlocked},
            onClick(){
                player.tab='su'
            },
            canClick(){return true}
        },
        22:{
            display(){return `Spin to ultra prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#5C00CC","color":"#5C00CC","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.up.unlocked},
            onClick(){
                player.tab='up'
            },
            canClick(){return true}
        },
        23:{
            display(){return `Spin to prestium tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EEDB05","color":"#EEDB05","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pt.unlocked},
            onClick(){
                player.tab='pt'
            },
            canClick(){return true}
        },
        24:{
            display(){return `Spin to reincarnation tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EF25EF","color":"#EF25EF","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.r.unlocked},
            onClick(){
                player.tab='r'
            },
            canClick(){return true}
        },
    },
}),
addLayer("hp", {
    name: "hyper prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "HP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0)
    }},
    color: "#0068A5",
    requires: new Decimal(1e10), // Can be a function that takes requirement increases into account
    resource: "hyper prestige points", // Name of prestige currency
    baseResource: "super prestige points", // Name of resource prestige is based on
    baseAmount() {return player.sp.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent(){
        let gain=0.05
        if(hasUpgrade("up",14)) gain=0.075
        return gain
    }, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if(hasUpgrade("hp",15)) mult=mult.times(upgradeEffect("hp",15))
        if(hasUpgrade("hp",25)) mult=mult.times(buyableEffect("p",22))
        if(hasUpgrade("hp",35)) mult=mult.times(upgradeEffect("hp",35))
        if(hasUpgrade("up",14)) mult=mult.times(upgradeEffect("up",14))
        if(hasMilestone("hp",4)) mult=mult.times(3)
        if(hasAchievement("a",155)) mult=mult.times(10)
        if((player.r.rngseed5[0]=='1'||player.r.rngseed5[0]=='3'||player.r.rngseed5[0]=='5'||player.r.rngseed5[0]=='7')&&player.r.allowrng5) mult=mult.times(tmp.r.calcrng5boost[1])
        mult=mult.times(tmp.up.calcupboost)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        if(hasMilestone("hp",6)) exp=exp.times(tmp.c.calcshardboost)
        if(hasUpgrade("pu",24)) exp=exp.times(1.2)
        if(player.r.rngseed4=='5'&&player.r.allowrng4) exp=exp.times(tmp.r.calcrng4boost[3])
        if(player.r.rc1&&player.r.rcbegun&&player.up.best.gte(1)) exp=exp.times(0.75)
        return exp
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "h", description: "H: Reset for hyper prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("f",335)},
    doReset(resettingLayer){
        player.points=new Decimal(0)
        let keep=[]
        if(hasMilestone("up",1)) keep.push("milestones")
        if(hasMilestone("up",1)||hasMilestone("r",3)) keep.push("upgrades")
        if (layers[resettingLayer].row > this.row) layerDataReset("hp",keep)
    },
    branches:["sp"],
    passiveGeneration(){return hasMilestone("su",0)?1:0},
    tabFormat:{
        "Main":{
            content:[
                ["display-text",function() { return `You have <h2 style="color:#0068A5">${format(player.hp.points)}</h2> hyper prestige points, which boosts SP gain by <h2 style="color:#0068A5">${format(tmp.hp.calchpboost)}</h2>.`},
                { "font-size":"17.5px","text-shadow" : "0 0 10px #0068A5"},],
                "blank",
                "prestige-button",
                ["display-text",function() { return `You have ${format(player.sp.points)} super prestige points.`},],
                "blank",
                "upgrades",
                "blank",
                "clickables"
            ]
        },
        "Milestones":{
            content:[
                ["display-text",function() { return `You have <h2 style="color:#0068A5">${format(player.hp.points)}</h2> hyper prestige points, which boosts SP gain by <h2 style="color:#0068A5">${format(tmp.hp.calchpboost)}</h2>.`},
                { "font-size":"17.5px","text-shadow" : "0 0 10px #0068A5"},],
                "blank",
                "milestones",
            ]
        }
    },
    calchpboost(){
        let exp7=new Decimal(2)
        if(hasMilestone("hp",4)) exp7=exp7.add(0.5)
        if(hasMilestone("hp",5)) exp7=exp7.add(1.5)
        if(hasMilestone("up",2)) exp7=exp7.add(1)
        let boost=player.hp.points.add(1).pow(exp7).log(hasMilestone("pu",5)?5:10).pow(2).times(10).add(1)
        if(hasMilestone("up",5)) boost=player.hp.points.add(1).pow(exp7).ln().pow(exp7).times(((player.r.rngseed5[1]=='1'||player.r.rngseed5[1]=='3'||player.r.rngseed5[1]=='5'||player.r.rngseed5[1]=='7')&&player.r.allowrng5)?tmp.r.calcrng5boost[2]:1).add(1).times(1e50).pow(0.5)
        return boost
    },
    upgrades:{
        11:{
            title:"Hyper super boost",
            description(){return `Add a number to SP boost exp. based on points.`},
            cost(){return new Decimal(1)},
            unlocked(){ 
                return player.hp.unlocked
            },
            canAfford(){return player.hp.points.gte(1)},
            pay(){return player.hp.points=player.hp.points.minus(1)},
            effect(){return player.points.add(1).log10().add(1).pow(0.5).div(100)},
            effectDisplay(){return `+${format(upgradeEffect("hp",11))}`},
        },
        12:{
            title:"Hyper boost",
            description(){return `SP gain is raised to ^1.1.`},
            cost(){return new Decimal(2)},
            unlocked(){ 
                return hasUpgrade("hp",11)
            },
            canAfford(){return player.hp.points.gte(2)},
            pay(){return player.hp.points=player.hp.points.minus(2)},
        },
        13:{
            title:"Hyper boost+",
            description(){return `Boost prestige points gain based on HP.`},
            cost(){return new Decimal(5)},
            unlocked(){ 
                return hasUpgrade("hp",12)
            },
            canAfford(){return player.hp.points.gte(5)},
            pay(){return player.hp.points=player.hp.points.minus(5)},
            effect(){return player.hp.points.add(1).pow(1.5)},
            effectDisplay(){return `x${format(upgradeEffect("hp",13))}`},
        },
        14:{
            title:"Why auto?",
            description(){return `Buy 1 of each prestige buyables per tick. Prestige buyables cost nothing.`},
            cost(){return new Decimal(8)},
            unlocked(){ 
                return hasUpgrade("hp",13)
            },
            canAfford(){return player.hp.points.gte(8)},
            pay(){return player.hp.points=player.hp.points.minus(8)},
        },
        15:{
            title:"Hyper antiboost",
            description(){return `Boost HP gain based on SP.`},
            cost(){return new Decimal(20)},
            unlocked(){ 
                return hasUpgrade("hp",14)
            },
            canAfford(){return player.hp.points.gte(20)},
            pay(){return player.hp.points=player.hp.points.minus(20)},
            effect(){return player.sp.points.add(1).log10().add(1)},
            effectDisplay(){return `x${format(upgradeEffect("hp",15))}`},
        },
        21:{
            title:"Hyper static-boost I",
            description(){return `Prestige gain exp. is 0.3.`},
            cost(){return new Decimal(1000)},
            unlocked(){ 
                return hasUpgrade("hp",15)
            },
            canAfford(){return player.hp.points.gte(1000)},
            pay(){return player.hp.points=player.hp.points.minus(1000)},
        },
        22:{
            title:"Hyper static-boost II",
            description(){return `SP gain exp. is 0.15.`},
            cost(){return new Decimal(2000)},
            unlocked(){ 
                return hasUpgrade("hp",21)
            },
            canAfford(){return player.hp.points.gte(2000)},
            pay(){return player.hp.points=player.hp.points.minus(2000)},
        },
        23:{
            title:"Hyper adder boost",
            description(){return `HP boost affects the adder of x.`},
            cost(){return new Decimal(4000)},
            unlocked(){ 
                return hasUpgrade("hp",22)
            },
            canAfford(){return player.hp.points.gte(4000)},
            pay(){return player.hp.points=player.hp.points.minus(4000)},
        },
        24:{
            title:"Hyper super antiboost",
            description(){return `Boost SP gain based on points.`},
            cost(){return new Decimal(8000)},
            unlocked(){ 
                return hasUpgrade("hp",23)
            },
            canAfford(){return player.hp.points.gte(8000)},
            pay(){return player.hp.points=player.hp.points.minus(8000)},
            effect(){return player.points.add(1).pow(2).log10().add(1).pow(2)},
            effectDisplay(){return `x${format(upgradeEffect("hp",24))}`},
        },
        25:{
            title:"Hyper antiboost+",
            description(){return `"Super booster" affects HP gain,"Point booster" effect base is 4.`},
            cost(){return new Decimal(16000)},
            unlocked(){ 
                return hasUpgrade("hp",24)
            },
            canAfford(){return player.hp.points.gte(16000)},
            pay(){return player.hp.points=player.hp.points.minus(16000)},
        },
        31:{
            title:"Hyper boost++",
            description(){return `Divide PU cost based on HP,PU is cheaper.`},
            cost(){return new Decimal(2.5e8)},
            unlocked(){ 
                return hasUpgrade("hp",25)
            },
            canAfford(){return player.hp.points.gte(2.5e8)},
            pay(){return player.hp.points=player.hp.points.minus(2.5e8)},
            effect(){return player.hp.points.add(1).pow(0.75)},
            effectDisplay(){return `/${format(upgradeEffect("hp",31))}`},
        },
        32:{
            title:"Hyper point boost",
            description(){return `Add a number to "point booster" base based on HP.`},
            cost(){return new Decimal(5e8)},
            unlocked(){ 
                return hasUpgrade("hp",31)
            },
            canAfford(){return player.hp.points.gte(5e8)},
            pay(){return player.hp.points=player.hp.points.minus(5e8)},
            effect(){return player.hp.points.add(1).log10().add(1).pow(0.75).div(10)},
            effectDisplay(){return `+${format(upgradeEffect("hp",32))}`},
        },
        33:{
            title:"Hyper buyable boost",
            description(){return `"Super booster" and "Super boost booster" are cheaper.`},
            cost(){return new Decimal(1e10)},
            unlocked(){ 
                return hasUpgrade("hp",32)
            },
            canAfford(){return player.hp.points.gte(1e10)},
            pay(){return player.hp.points=player.hp.points.minus(1e10)},
        },
        34:{
            title:"Hyper point boost max",
            description(){return `Boost point gain based on HP.`},
            cost(){return new Decimal(1e11)},
            unlocked(){ 
                return hasUpgrade("hp",33)
            },
            canAfford(){return player.hp.points.gte(1e11)},
            pay(){return player.hp.points=player.hp.points.minus(1e11)},
            effect(){return player.hp.points.add(1)},
            effectDisplay(){return `x${format(upgradeEffect("hp",34))}`},
        },
        35:{
            title:"Hyper point antiboost max",
            description(){return `Boost HP gain based on points.`},
            cost(){return new Decimal(1e30)},
            unlocked(){ 
                return hasUpgrade("hp",34)
            },
            canAfford(){return player.hp.points.gte(1e30)},
            pay(){return player.hp.points=player.hp.points.minus(1e30)},
            effect(){return player.points.add(1).log10().pow(2).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("hp",35))}`},
        },
        41:{
            title:"Not included",
            description(){return `Every super upgrader gives ${(player.r.rngseed5[0]==player.r.rngseed5[1])&&player.r.rngseed5!="00"?12:10} free prestige upgraders.`},
            cost(){return new Decimal("1e13110")},
            unlocked(){ 
                return player.r.rc1fin
            },
            canAfford(){return player.hp.points.gte("1e13110")},
            pay(){return player.hp.points=player.hp.points.minus("1e13110")},
        },
    },
    milestones:{
        0: {
            requirementDescription: "1 hyper prestige points",
            done() { return player.hp.points.gte(1)},
            style:{"width":"500px"},
            effectDescription: "Kept super prestige milestones and prestige upgrader contents on all resets.",
        },
        1: {
            requirementDescription: "5 hyper prestige points",
            done() { return player.hp.points.gte(5)},
            style:{"width":"500px"},
            effectDescription:"SP boost formula is better.",
        },
        2: {
            requirementDescription: "10 hyper prestige points",
            done() { return player.hp.points.gte(10)},
            style:{"width":"500px"},
            effectDescription:"Kept super prestige upgrades on reset, prestige upgrader is cheaper.",
        },
        3: {
            requirementDescription: "500 hyper prestige points",
            done() { return player.hp.points.gte(500)},
            style:{"width":"500px"},
            effectDescription:"The second PU milestone's effect is 100%, prestige boost formula is better.",
        },
        4: {
            requirementDescription: "2500 hyper prestige points",
            done() { return player.hp.points.gte(2500)},
            style:{"width":"500px"},
            effectDescription:"HP boost formula is better, Triple HP and SP gain.",
        },
        5: {
            requirementDescription: "1e11 hyper prestige points",
            done() { return player.hp.points.gte(1e11)},
            style:{"width":"500px"},
            effectDescription:"HP boost formula is better, challenge shard affects SP gain.",
        },
        6: {
            requirementDescription: "1e15 hyper prestige points",
            done() { return player.hp.points.gte(1e15)},
            style:{"width":"500px"},
            effectDescription:`"Point booster" base is 8, challenge shard affects HP gain.`,
        },
    },
    clickables:{
        11:{
            display(){return `Spin to function tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EEEEEE","color":"#DDDDDD","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.hp.unlocked},
            onClick(){
                player.tab='f'
            },
            canClick(){return true}
        },
        12:{
            display(){return `Spin to prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#31aeb0","color":"#31aeb0","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.hp.unlocked},
            onClick(){
                player.tab='p'
            },
            canClick(){return true}
        },
        13:{
            display(){return `Spin to super prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#217782","color":"#217782","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.hp.unlocked},
            onClick(){
                player.tab='sp'
            },
            canClick(){return true}
        },
        14:{
            display(){return `Spin to prestige upgrader tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#14CEA3","color":"#14CEA3","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.hp.unlocked},
            onClick(){
                player.tab='pu'
            },
            canClick(){return true}
        },
        15:{
            display(){return `Spin to challenge tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#45AC68","color":"#45AC68","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.c.checker},
            onClick(){
                player.tab='c'
            },
            canClick(){return true}
        },
        21:{
            display(){return `Spin to super upgrader tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#04AE83","color":"#04AE83","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.su.unlocked},
            onClick(){
                player.tab='su'
            },
            canClick(){return true}
        },
        22:{
            display(){return `Spin to ultra prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#5C00CC","color":"#5C00CC","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.up.unlocked},
            onClick(){
                player.tab='up'
            },
            canClick(){return true}
        },
        23:{
            display(){return `Spin to prestium tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EEDB05","color":"#EEDB05","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pt.unlocked},
            onClick(){
                player.tab='pt'
            },
            canClick(){return true}
        },
        24:{
            display(){return `Spin to reincarnation tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EF25EF","color":"#EF25EF","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.r.unlocked},
            onClick(){
                player.tab='r'
            },
            canClick(){return true}
        },
    }
}),
addLayer("c", {
    name: "challenges", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        shard: new Decimal(0),
        depth:1,
        goal:new Decimal(0),
        checker:false,
        isbegun:false,
        choose11:false,
        choose12:false,
        choose13:false,
        choose21:false,
        choose22:false,
        choose23:false,
        choose31:false,
        choose32:false,
        choose33:false,
        clist:""
    }},
    color: "#45AC68",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "challenge shards", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.05, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        return exp
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade("f",341)},
    branches:["sp"],
    doReset(resettingLayer){
        let keep=[]
        keep.push("checker")
        if(hasMilestone("r",6)) keep.push("points")
        if(hasMilestone("up",0)&&resettingLayer!='r') keep.push("points")
        if (layers[resettingLayer].row > this.row) layerDataReset("c",keep)
    },
    tabFormat:{
        "Main":{
            content:[
                ["display-text",function() { return `You can get <h2 style="color:#45AC68">${format(tmp.c.getshard)}</h2> challenge shards after finish challenges.<br>
                 Max shard you've got is <h2 style="color:#45AC68">${format(player.c.points)}</h2>, which boost the multiplier of x by <h2 style="color:#45AC68">^${format(tmp.c.calcshardboost)}</h2><br>
                 Goal: <h2 style="color:#45AC68">${format(player.points)}/${format(player.c.goal)}</h2> points.`},
                    { "font-size":"17.5px","text-shadow" : "0 0 10px #45AC68"},],
                "blank",
                ["display-text",function() { return `Current challenge:[<h2 style="color:#45AC68">${player.c.clist}</h2>]<br>`+(player.c.isbegun?`You're in challenge now!`:`Not in challenge now!`)},
                       { "font-size":"17.5px","text-shadow" : "0 0 10px #45AC68"},],
                "blank",
                ["display-text",function() { return `You're in challenge depth ${player.c.depth} now.`}],
                "blank",
                "clickables"
            ]
        },
        "Info":{
            content:[
                ["infobox","c_intro"],
                ["infobox","d1_info"],
                ["infobox","d2_info"],
                ["infobox","d3_info"],
            ]
        },
    },
    getshard(){
        gs=new Decimal(0)
        if(player.c.choose11) gs=gs.add(1)
        if(player.c.choose12) gs=gs.add(1)
        if(player.c.choose13) gs=gs.add(2)
        if(player.c.choose21) gs=gs.add(hasMilestone("up",0)? 3 : 2)
        if(player.c.choose22) gs=gs.add(hasMilestone("up",0)? 3 : 2)
        if(player.c.choose23) gs=gs.add(3)
        if(player.c.choose31) gs=gs.add(3)
        if(player.c.choose32) gs=gs.add(3)
        if(player.c.choose33) gs=gs.add(4)

        return gs
    },
    getclist(){
        let cl=""
        if(player.c.choose11) cl+=" 11 "
        if(player.c.choose12) cl+=" 12 "
        if(player.c.choose13) cl+=" 13 "
        if(player.c.choose21) cl+=" 21 "
        if(player.c.choose22) cl+=" 22 "
        if(player.c.choose23) cl+=" 23 "
        if(player.c.choose31) cl+=" 31 "
        if(player.c.choose32) cl+=" 32 "
        if(player.c.choose33) cl+=" 33 "
        player.c.clist=cl
    },
    getgoal(){
        let g=new Decimal(1)
        let cnt=new Decimal(0)
        if(player.c.choose11) {
            g=g.times(1e60)
            cnt=cnt.add(1)
        }
        if(player.c.choose12) {
            g=g.times(cnt.eq(0)?1e75:1e50)
            cnt=cnt.add(1.5)
        }
        if(player.c.choose13) {
            g=g.times(cnt.eq(0)?Decimal.pow(10,93.75):1e75)
            cnt=cnt.add(1.25)
        }
        if(player.c.choose21) {
            g=g.times(cnt.eq(0)?Decimal.pow(10,131.25):1e75)
            cnt=cnt.add(1.75)
        }
        if(player.c.choose22) {
            g=g.times(cnt.eq(0)?1e160:1e80)
            cnt=cnt.add(2)
        }
        if(player.c.choose23) {
            g=g.times(cnt.eq(0)?1e140:1e80)
            cnt=cnt.add(1.75)
        }
        if(player.c.choose31) {
            g=g.times(cnt.eq(0)?Decimal.pow(10,90):1e60)
            cnt=cnt.add(1.5)
        }
        if(player.c.choose32) {
            g=g.times(cnt.eq(0)?Decimal.pow(10,180):1e60)
            cnt=cnt.add(3)
        }
        if(player.c.choose33) {
            g=g.times(cnt.eq(0)?Decimal.pow(10,300):1e60)
            cnt=cnt.add(5)
        } 
        player.c.goal=g.pow(new Decimal(1).div(cnt.max(1)))
    },
    calcshardboost(){
        return player.c.points.times(((player.r.rngseeda=='2'||player.r.rngseeda=='7')&&player.r.allowrnga)?0.01:0.03).add(1)
    },
    infoboxes: {
        c_intro: {
            title: "Stage 4 challenges intro",
            body() { return `<br><h3>Welcome to the first challenge layer in stage 4! Here's something you should notice.</h3><br><br>
                1.This layer has 3 challenge Depths, each depth has some challenges.Challenge will give you challenge shards based on the Depth.<br><br>
                2.Each challenge gives you different debuffs, They could affect together!<br><br>
                3.Click a challenge's picture to choose it.<br><br>
                4.You must choose at least 1 challenge to begin challenges.
                5.You can know challenge's contents in infoboxes under.<br><br>
                6.Each challenge has a certain goal,the mean goal of all chosen challenges determines the final goal to reach.
                ENJOY!
                ` },
            style:{"width":"1100px"},
        },
        d1_info: {
            title: "Depth 1",
            body() { return `Prestige dilate[11]:Prestige point gain is raised to ^0.5, Goal:1e60 points<br>
                             Prestige deboost[12]:The effect of the 1st and 2nd row of prestige upgrades are their default value, Goal:1e50 points<br>
                             Softcap power[13]:The softcap of prestige point boost starts from 0 and it is 2x stronger, Goal:1e75 points.` },
            style:{"width":"1100px"},
        },
        d2_info: {
            title: "Depth 2",
            body() { return `Super dilate[21]:Super prestige point gain is raised to ^0.6, Goal:1e75 points<br>
                             Upgrader disabled[22]:Prestige upgrader's effect is 1, Goal:1e60 points<br>
                             Super deboost[23]:The effect of the 1st row of super prestige upgrades are their default value, Goal:1e80 points.` },
            style:{"width":"1100px"},
        },
        d3_info: {
            title: "Depth 3",
            body() { return `Super disabled[31]:You can't gain super prestige points, Goal:1e60 points<br>
                             Slog11's return[32]:The multiplier of x is raised to ^0.3, Goal:1e60 points<br>
                             Prestige disabled[33]:You cannot gain prestige points, Goal:1e60 points.` },
            style:{"width":"1100px"},
        },
    },
    clickables:{
        11:{
            display(){return player.c.choose11? `<img src="js/cpic/c11choose.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`:`<img src="js/cpic/c11.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`},
            style:{"height":"161px","width":"161px","border-radius":"0%","border":"6px solid","border-color"(){return player.c.choose11 ? "#45AC68":"#DDDDDD"},"color":"#45AC68","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.c.depth==1},
            onClick(){
                player.c.choose11=!player.c.choose11
            },
            canClick(){return !player.c.isbegun}
        },
        12:{
            display(){return player.c.choose12? `<img src="js/cpic/c12choose.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`:`<img src="js/cpic/c12.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`},
            style:{"height":"161px","width":"161px","border-radius":"0%","border":"6px solid","border-color"(){return player.c.choose12 ? "#45AC68":"#DDDDDD"},"color":"#45AC68","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.c.depth==1},
            onClick(){
                player.c.choose12=!player.c.choose12
            },
            canClick(){return !player.c.isbegun}
        },
        13:{
            display(){return player.c.choose13? `<img src="js/cpic/c13choose.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`:`<img src="js/cpic/c13.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`},
            style:{"height":"161px","width":"161px","border-radius":"0%","border":"6px solid","border-color"(){return player.c.choose13 ? "#45AC68":"#DDDDDD"},"color":"#45AC68","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.c.depth==1},
            onClick(){
                player.c.choose13=!player.c.choose13
            },
            canClick(){return !player.c.isbegun}
        },
        21:{
            display(){return player.c.choose21? `<img src="js/cpic/c21choose.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`:`<img src="js/cpic/c21.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`},
            style:{"height":"161px","width":"161px","border-radius":"0%","border":"6px solid","border-color"(){return player.c.choose21 ? "#45AC68":"#DDDDDD"},"color":"#45AC68","font-size":"15px","background-color":"#00000000","margin-top":"-15px"},
            unlocked(){return player.c.depth==2},
            onClick(){
                player.c.choose21=!player.c.choose21
            },
            canClick(){return !player.c.isbegun}
        },
        22:{
            display(){return player.c.choose22? `<img src="js/cpic/c22choose.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`:`<img src="js/cpic/c22.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`},
            style:{"height":"161px","width":"161px","border-radius":"0%","border":"6px solid","border-color"(){return player.c.choose22 ? "#45AC68":"#DDDDDD"},"color":"#45AC68","font-size":"15px","background-color":"#00000000","margin-top":"-15px"},
            unlocked(){return player.c.depth==2},
            onClick(){
                player.c.choose22=!player.c.choose22
            },
            canClick(){return !player.c.isbegun}
        },
        23:{
            display(){return player.c.choose23? `<img src="js/cpic/c23choose.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`:`<img src="js/cpic/c23.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`},
            style:{"height":"161px","width":"161px","border-radius":"0%","border":"6px solid","border-color"(){return player.c.choose23 ? "#45AC68":"#DDDDDD"},"color":"#45AC68","font-size":"15px","background-color":"#00000000","margin-top":"-15px"},
            unlocked(){return player.c.depth==2},
            onClick(){
                player.c.choose23=!player.c.choose23
            },
            canClick(){return !player.c.isbegun}
        },
        31:{
            display(){return player.c.choose31? `<img src="js/cpic/c31choose.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`:`<img src="js/cpic/c31.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`},
            style:{"height":"161px","width":"161px","border-radius":"0%","border":"6px solid","border-color"(){return player.c.choose31 ? "#45AC68":"#DDDDDD"},"color":"#45AC68","font-size":"15px","background-color":"#00000000","margin-top":"-30px"},
            unlocked(){return player.c.depth==3},
            onClick(){
                player.c.choose31=!player.c.choose31
            },
            canClick(){return !player.c.isbegun}
        },
        32:{
            display(){return player.c.choose32? `<img src="js/cpic/c32choose.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`:`<img src="js/cpic/c32.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`},
            style:{"height":"161px","width":"161px","border-radius":"0%","border":"6px solid","border-color"(){return player.c.choose32 ? "#45AC68":"#DDDDDD"},"color":"#45AC68","font-size":"15px","background-color":"#00000000","margin-top":"-30px"},
            unlocked(){return player.c.depth==3},
            onClick(){
                player.c.choose32=!player.c.choose32
            },
            canClick(){return !player.c.isbegun}
        },
        33:{
            display(){return player.c.choose33? `<img src="js/cpic/c33choose.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`:`<img src="js/cpic/c33.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`},
            style:{"height":"161px","width":"161px","border-radius":"0%","border":"6px solid","border-color"(){return player.c.choose33 ? "#45AC68":"#DDDDDD"},"color":"#45AC68","font-size":"15px","background-color":"#00000000","margin-top":"-30px"},
            unlocked(){return player.c.depth==3},
            onClick(){
                player.c.choose33=!player.c.choose33
            },
            canClick(){return !player.c.isbegun}
        },
        51:{
            display(){return `Go deeper`},
            style:{"height":"40px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#45AC68","color":"#45AC68","font-size":"15px","background-color":"#00000000"},
            unlocked(){return true},
            onClick(){
                player.c.depth+=1
            },
            canClick(){return player.c.depth<=2}
        },
        52:{
            display(){return `Start challenges`},
            style:{"height":"40px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#45AC68","color":"#45AC68","font-size":"15px","background-color":"#00000000"},
            unlocked(){return true},
            onClick(){
                player.c.isbegun=true
                player.f.multiplier=new Decimal(0)
                doReset("hp")
            },
            canClick(){return (!player.c.isbegun)&&(!tmp.c.getshard.eq(0))}
        },
        53:{
            display(){return `End challenges`},
            style:{"height":"40px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#45AC68","color":"#45AC68","font-size":"15px","background-color"(){return player.points.gte(player.c.goal)&&player.c.isbegun? "#ECEF31":"#00000000"}},
            unlocked(){return true},
            onClick(){
                if(player.points.gte(player.c.goal)) player.c.points=player.c.points.max(tmp.c.getshard)
                doReset("hp")
                player.c.isbegun=false
            },
            canClick(){return player.c.isbegun}
        },
        54:{
            display(){return `Go higher`},
            style:{"height":"40px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#45AC68","color":"#45AC68","font-size":"15px","background-color":"#00000000"},
            unlocked(){return true},
            onClick(){
                player.c.depth-=1
            },
            canClick(){return player.c.depth!=1}
        },
        61:{
            display(){return `Spin to function tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EEEEEE","color":"#DDDDDD","font-size":"15px","background-color":"#00000000"},
            unlocked(){return true},
            onClick(){
                player.tab='f'
            },
            canClick(){return true}
        },
        62:{
            display(){return `Spin to prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#31aeb0","color":"#31aeb0","font-size":"15px","background-color":"#00000000"},
            unlocked(){return true},
            onClick(){
                player.tab='p'
            },
            canClick(){return true}
        },
        63:{
            display(){return `Spin to super prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#217782","color":"#217782","font-size":"15px","background-color":"#00000000"},
            unlocked(){return true},
            onClick(){
                player.tab='sp'
            },
            canClick(){return true}
        },
        64:{
            display(){return `Spin to prestige upgrader tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#14CEA3","color":"#14CEA3","font-size":"15px","background-color":"#00000000"},
            unlocked(){return true},
            onClick(){
                player.tab='pu'
            },
            canClick(){return true}
        },
        65:{
            display(){return `Spin to hyper prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#0068A5","color":"#0068A5","font-size":"15px","background-color":"#00000000"},
            unlocked(){return true},
            onClick(){
                player.tab='hp'
            },
            canClick(){return true}
        },
        71:{
            display(){return `Spin to super upgrader tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#04AE83","color":"#45AC68","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.su.unlocked},
            onClick(){
                player.tab='su'
            },
            canClick(){return true}
        },
        72:{
            display(){return `Spin to ultra prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#5C00CC","color":"#5C00CC","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.up.unlocked},
            onClick(){
                player.tab='up'
            },
            canClick(){return true}
        },
        73:{
            display(){return `Spin to prestium tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EEDB05","color":"#EEDB05","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pt.unlocked},
            onClick(){
                player.tab='pt'
            },
            canClick(){return true}
        },
        74:{
            display(){return `Spin to reincarnation tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EF25EF","color":"#EF25EF","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.r.unlocked},
            onClick(){
                player.tab='r'
            },
            canClick(){return true}
        },
    }
}),
addLayer("su", {
    name: "super upgraders", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SU", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    color: "#04AE83",
    requires() { return new Decimal(1e20) }, // Can be a function that takes requirement increases into account
    resource: "super upgraders", // Name of prestige currency
    baseResource: "hyper prestige points", // Name of resource prestige is based on
    baseAmount() {return player.hp.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["sp"],
    exponent() { 
        ba=3
        return ba 
    }, // Prestige currency exponent
    base() {
        ca=5
        return ca  
    },
    gainMult() { 
        let mult = new Decimal(1);
        if(hasAchievement("a",175)) mult=mult.div(101)
        return mult;
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "d", description: "Press D to perform a super upgrader reset", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("f",342)},
    effectBase() {
        let base = new Decimal(0.9);
        return base
    },
    effect() {
        if ((!player.su.unlocked)) return new Decimal(1);
        return Decimal.pow(tmp.su.effectBase,player.su.points)
    },
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        best: new Decimal(0),
        total: new Decimal(0),
    }},
    doReset(resettingLayer){
        player.points=new Decimal(0)
        if (layers[resettingLayer].row > this.row&&!hasMilestone("up",2)) layerDataReset("su")
    },
    autoPrestige(){return hasMilestone("su",1)},
    resetsNothing(){return hasMilestone("su",2)},
    tabFormat:{
        "Main":{
            content:[
                ["display-text",function() { return `You have <h2 style="color:#04AE83">${player.su.points}</h2> super upgraders, prestige upgrader's cost is raised to <h2 style="color:#04AE83">^${format(tmp.su.effect)}</h2>.`},
                { "font-size":"17.5px","text-shadow" : "0 0 10px #04AE83"},],
                "blank",
                "prestige-button",
                ["display-text",function() { return `You have ${format(player.hp.points)} hyper prestige points.`},],
                "blank",
                "upgrades",
                "blank",
                "clickables"
            ]
        },
        "Milestones":{
            content:[
                ["display-text",function() { return `You have <h2 style="color:#04AE83">${player.su.points}</h2> super upgraders, prestige upgrader's cost is raised to <h2 style="color:#04AE83">^${format(tmp.su.effect)}</h2>.`},
                { "font-size":"17.5px","text-shadow" : "0 0 10px #14CEA3"},],
                "blank",
                "milestones"
            ]
        },
    },
    upgrades:{
        11:{
            title:"Super upgrade boost",
            description(){return `Boost SP gain based on super upgrader.`},
            cost(){return new Decimal(4)},
            unlocked(){ 
                return true
            },
            canAfford(){return player.su.points.gte(4)},
            pay(){return player.su.points=player.su.points.minus(4)},
            effect(){return Decimal.pow(100,player.su.points.pow(1.5))},
            effectDisplay(){return `x${format(upgradeEffect("su",11))}`},
        },
        12:{
            title:"Super upgrade boost boost",
            description(){return `Boost SP boost base based on super upgrader.`},
            cost(){return new Decimal(6)},
            unlocked(){ 
                return true
            },
            canAfford(){return player.su.points.gte(6)},
            pay(){return player.su.points=player.su.points.minus(6)},
            effect(){return player.su.points.pow(1.1).div(50).min(1)},
            effectDisplay(){return `+${format(upgradeEffect("su",12))}`},
        },
        13:{
            title:"Prestium Synergism",
            description(){return `Prestium and prestige boosts each other.`},
            cost(){return new Decimal(11)},
            unlocked(){ 
                return player.pt.unlocked
            },
            canAfford(){return player.su.points.gte(11)},
            pay(){return player.su.points=player.su.points.minus(11)},
            effect(){
                a=[new Decimal(1),new Decimal(1)]
                a[0]=player.p.points.add(1).log10().pow(0.5).add(1).pow(((player.r.rngseed1[1]=='6'||player.r.rngseed1[0]=='3')&&player.r.allowrng1)?tmp.r.calcrng1boost[7]:1)
                a[1]=Decimal.pow(player.pt.points,20).pow(0.85).add(1).pow(((player.r.rngseed1[1]=='6'||player.r.rngseed1[0]=='3')&&player.r.allowrng1)?tmp.r.calcrng1boost[7]:1)
                return a
            },
            effectDisplay(){return `<br>P->PT:x${format(this.effect()[0])}<br>PT->P:${format(this.effect()[1])}`},
        },
        14:{
            title:"A boost",
            description(){return `x1e576 points.`},
            cost(){return new Decimal(25)},
            unlocked(){ 
                return player.pt.unlocked
            },
            canAfford(){return player.su.points.gte(25)},
            pay(){return player.su.points=player.su.points.minus(25)},
        },
        15:{
            title:"Point generation growth",
            description(){return `Boost point gain based on rein points.`},
            cost(){return new Decimal(36)},
            unlocked(){ 
                return player.r.rc1fin
            },
            canAfford(){return player.su.points.gte(36)},
            pay(){return player.su.points=player.su.points.minus(36)},
            effect(){
                return Decimal.pow(25,(player.r.points.add(1).ln()))
            },
            effectDisplay(){return `x${format(upgradeEffect("su",15))}`}
        },
    },
    milestones:{
        0: {
            requirementDescription: "4 super Upgraders",
            done() { return player.su.points.gte(4)},
            style:{"width":"500px"},
            effectDescription: "Gain 100% of hyper prestige points on reset per second. Prestige upgrader resets nothing.",
        },
        1: {
            requirementDescription: "10 super Upgraders",
            done() { return player.su.points.gte(10)},
            style:{"width":"500px"},
            effectDescription: "Auto reset for SU,PU is cheaper.",
        },
        2: {
            requirementDescription: "36 super Upgraders",
            done() { return player.su.points.gte(36)},
            style:{"width":"500px"},
            effectDescription: "SU resets nothing. Gain 100% of ultra prestige points on reset per second.",
        },
    },
    clickables:{
        11:{
            display(){return `Spin to function tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EEEEEE","color":"#DDDDDD","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.su.unlocked},
            onClick(){
                player.tab='f'
            },
            canClick(){return true}
        },
        12:{
            display(){return `Spin to super prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#217782","color":"#217782","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.c.checker},
            onClick(){
                player.tab='sp'
            },
            canClick(){return true}
        },
        13:{
            display(){return `Spin to prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#31aeb0","color":"#31aeb0","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.su.unlocked},
            onClick(){
                player.tab='p'
            },
            canClick(){return true}
        },
        14:{
            display(){return `Spin to prestige upgrader tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#14CEA3","color":"#14CEA3","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.su.unlocked},
            onClick(){
                player.tab='pu'
            },
            canClick(){return true}
        },
        15:{
            display(){return `Spin to hyper prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#0068A5","color":"#0068A5","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.su.unlocked},
            onClick(){
                player.tab='hp'
            },
            canClick(){return true}
        },
        21:{
            display(){return `Spin to challenge tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#45AC68","color":"#45AC68","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.su.unlocked},
            onClick(){
                player.tab='c'
            },
            canClick(){return true}
        },
        22:{
            display(){return `Spin to ultra prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#5C00CC","color":"#5C00CC","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.up.unlocked},
            onClick(){
                player.tab='up'
            },
            canClick(){return true}
        },
        23:{
            display(){return `Spin to prestium tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EEDB05","color":"#EEDB05","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pt.unlocked},
            onClick(){
                player.tab='pt'
            },
            canClick(){return true}
        },
        24:{
            display(){return `Spin to reincarnation tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EF25EF","color":"#EF25EF","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.r.unlocked},
            onClick(){
                player.tab='r'
            },
            canClick(){return true}
        },
    }
}),
addLayer("up", {
    name: "ultra prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "UP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
        sc:new Decimal(1e50),
        dsc:new Decimal(1e75)
    }},
    color: "#5C00CC",
    requires: new Decimal("1.8e308"), // Can be a function that takes requirement increases into account
    resource: "ultra prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.01, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if(hasUpgrade("up",15)) mult=mult.times(2)
        if(hasUpgrade("up",24)) mult=mult.times(upgradeEffect("up",24))
        if(hasUpgrade("up",33)) mult=mult.times(upgradeEffect("up",33))
        if(player.r.rngseed5[0]=='2'||player.r.rngseed5[1]=='5'||player.r.rngseed5[0]=='6'||player.r.rngseed5[1]=='8') mult=mult.times(tmp.r.calcrng5boost[4])
        mult=mult.times(tmp.pt.calcboost1)
        if(player.r.rc3&&player.r.rcbegun) mult=mult.div(Decimal.pow(1e25,player.pt.blv[5]))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        if(player.r.rngseed4=='7'&&player.r.allowrng4) exp=exp.times(tmp.r.calcrng4boost[4])
        if(player.r.rc1&&player.r.rcbegun&&player.up.best.gte(1)) exp=exp.times(0.75)
        return exp
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "l", description: "L: Reset for ultra prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("f",343)},
    doReset(resettingLayer){
        player.f.multiplier=new Decimal(0)
        player.points=new Decimal(0)
        let keep=[]
        if(hasMilestone("r",5)) keep.push("upgrades")
        if(hasMilestone("r",5)) keep.push("milestones")
        if (layers[resettingLayer].row > this.row) layerDataReset("up", keep)
    },
    passiveGeneration(){return hasMilestone("su",2)?1:0},
    branches:["p","hp"],
    tabFormat:{
        "Main":{
            content:[
                ["display-text",function() { return `You have <h2 style="color:#5C00CC">${format(player.up.points)}</h2> ultra prestige points, which boosts the gain of all prestige resources before by <h2 style="color:#5C00CC">${format(tmp.up.calcupboost)}</h2>.`+((tmp.up.calcupboost.gte(player.up.dsc))?`(Softcapped)`:``)},
                { "font-size":"17.5px","text-shadow" : "0 0 10px #5C00CC"},],
                "blank",
                "prestige-button",
                ["display-text",function() { return `You have ${format(player.points)} points.`},],
                "blank",
                ["upgrades",[1,2,3]],
                "blank",
                "clickables"
            ]
        },
        "Milestones":{
            content:[
                ["display-text",function() { return `You have <h2 style="color:#5C00CC">${format(player.up.points)}</h2> ultra prestige points, which boosts the gain of all prestige resources before by <h2 style="color:#5C00CC">${format(tmp.up.calcupboost)}</h2>.`+((tmp.up.calcupboost.gte(player.up.dsc))?`(Softcapped)`:``)},
                { "font-size":"17.5px","text-shadow" : "0 0 10px #5C00CC"},],
                "blank",
                "milestones",
            ]
        },
    },
    calcupboost(){
        let exp8=new Decimal(25)
        let boost= Decimal.pow(exp8,player.up.points.add(1).ln())
        let sc2=new Decimal(1e50)
        player.up.sc=sc2
        if(boost.gte(1e75)) return boost.minus(1e75).add(1).cbrt().times(1e75).pow(((player.rngseeda=='1'||player.r.rngseeda=='6')&&player.r.allowrnga)?0.125:1)
        return boost
    },
    upgrades:{
        11:{
            title:"Ultra prestige boost",
            description(){return `Boost prestige gain based on UP.`},
            cost(){return new Decimal(2)},
            unlocked(){ 
                return true
            },
            canAfford(){return player.up.points.gte(2)},
            pay(){return player.up.points=player.up.points.minus(2)},
            effect(){return player.up.points.pow(5).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("up",11))}`},
        },
        12:{
            title:"Ultra super boost",
            description(){return `Boost SP gain based on UP.`},
            cost(){return new Decimal(3)},
            unlocked(){ 
                return hasUpgrade("up",11)
            },
            canAfford(){return player.up.points.gte(3)},
            pay(){return player.up.points=player.up.points.minus(3)},
            effect(){return player.up.points.pow(3).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("up",12))}`},
        },
        13:{
            title:"Ultra upgrader boost",
            description(){return `PU is cheaper.`},
            cost(){return new Decimal(5)},
            unlocked(){ 
                return hasUpgrade("up",12)
            },
            canAfford(){return player.up.points.gte(5)},
            pay(){return player.up.points=player.up.points.minus(5)},
        },
        14:{
            title:"Ultra hyper boost",
            description(){return `Boost HP gain based on UP, HP gain exp. is 0.075`},
            cost(){return new Decimal(8)},
            unlocked(){ 
                return hasUpgrade("up",13)
            },
            canAfford(){return player.up.points.gte(8)},
            pay(){return player.up.points=player.up.points.minus(8)},
            effect(){return player.up.points.pow(2).add(1)},
            effectDisplay(){return `x${format(upgradeEffect("up",14))}`},
        },
        15:{
            title:"Hyper AUTO",
            description(){return `Auto buy max prestige buyables per tick, double UP gain.`},
            cost(){return new Decimal(15)},
            unlocked(){ 
                return hasUpgrade("up",14)
            },
            canAfford(){return player.up.points.gte(15)},
            pay(){return player.up.points=player.up.points.minus(15)},
        },
        21:{
            title:"Ultra adder boost",
            description(){return `Boost the adder of x based on UP.`},
            cost(){return new Decimal(1000)},
            unlocked(){ 
                return hasUpgrade("up",15)
            },
            canAfford(){return player.up.points.gte(1000)},
            pay(){return player.up.points=player.up.points.minus(1000)},
            effect(){return Decimal.pow(1.025,player.up.points.pow(10).add(1).log10().pow(2)).min("1e1500")},
            effectDisplay(){return `x${format(upgradeEffect("up",21))}`},
        },
        22:{
            title:"Ultra upgrade boost",
            description(){return `"Upgrade boost" base is 3 and counts in hyper upgrades.`},
            cost(){return new Decimal(1e4)},
            unlocked(){ 
                return hasUpgrade("up",21)
            },
            canAfford(){return player.up.points.gte(1e4)},
            pay(){return player.up.points=player.up.points.minus(1e4)},
        },
        23:{
            title:"Ultra point boost",
            description(){return `Boost point gain based on UP.`},
            cost(){return new Decimal(4e4)},
            unlocked(){ 
                return hasUpgrade("up",22)
            },
            canAfford(){return player.up.points.gte(4e4)},
            pay(){return player.up.points=player.up.points.minus(4e4)},
            effect(){return player.up.points.add(1).pow(3.5)},
            effectDisplay(){return `x${format(upgradeEffect("up",23))}`},
        },
        24:{
            title:"Ultra ultra boost",
            description(){return `Boost UP gain based on UP.`},
            cost(){return new Decimal(5e6)},
            unlocked(){ 
                return hasUpgrade("up",23)
            },
            canAfford(){return player.up.points.gte(5e6)},
            pay(){return player.up.points=player.up.points.minus(5e6)},
            effect(){return player.up.points.add(1).ln().max(1)},
            effectDisplay(){return `x${format(upgradeEffect("up",24))}`},
        },
        25:{
            title:"Meanless upgrade.",
            description(){return `The adder of x is raised to ^1.001.`},
            cost(){return new Decimal(5e10)},
            unlocked(){ 
                return hasUpgrade("up",24)
            },
            canAfford(){return player.up.points.gte(5e10)},
            pay(){return player.up.points=player.up.points.minus(5e10)},
        },
        31:{
            title:"Extra building",
            description(){return `Building I-V are 200% stronger.`},
            cost(){return new Decimal(1e56)},
            unlocked(){ 
                return player.pt.unlocked
            },
            canAfford(){return player.up.points.gte(1e56)},
            pay(){return player.up.points=player.up.points.minus(1e56)},
        },
        32:{
            title:"Purification",
            description(){return `Prestium gain is raised to ^1.025.`},
            cost(){return new Decimal("1e1050")},
            unlocked(){ 
                return hasUpgrade("up",31)
            },
            canAfford(){return player.up.points.gte("1e1050")},
            pay(){return player.up.points=player.up.points.minus("1e1050")},
        },
        33:{
            title:"The last upgrade in stage 4",
            description(){return `Building IV affects Reinpow gain base, boost UP gain based on Rein points. Unlock a new RD buyable.`},
            cost(){return new Decimal("1e2360")},
            unlocked(){ 
                return player.r.rc1fin
            },
            canAfford(){return player.up.points.gte("1e2360")},
            pay(){return player.up.points=player.up.points.minus("1e2360")},
            effect(){return player.r.points.add(1)},
            effectDisplay(){return `x${format(upgradeEffect("up",33))}`},
        },
    },
    milestones:{
        0: {
            requirementDescription: "2 ultra prestige points",
            done() { return player.up.points.gte(2)},
            style:{"width":"500px"},
            effectDescription: "Get 1 more challenge shards on c21 and c22, kept challenge shards on reset.",
        },
        1: {
            requirementDescription: "4 ultra prestige points",
            done() { return player.up.points.gte(4)},
            style:{"width":"500px"},
            effectDescription: "Kept hyper prestige milestones on reset.",
        },
        2: {
            requirementDescription: "7 ultra prestige points",
            done() { return player.up.points.gte(7)},
            style:{"width":"500px"},
            effectDescription: "Kept super upgrader contents on all resets,HP boost formula is better.",
        },
        3: {
            requirementDescription: "50 ultra prestige points",
            done() { return player.up.points.gte(50)},
            style:{"width":"500px"},
            effectDescription: "Kept hyper prestige upgrades on reset.",
        },
        4: {
            requirementDescription: "1e42 ultra prestige points",
            done() { return player.up.points.gte(1e42)},
            style:{"width":"500px"},
            effectDescription: "Gain 100% of prestium on reset per second.",
        },
        5: {
            requirementDescription: "1e47 ultra prestige points",
            done() { return player.up.points.gte(1e47)},
            style:{"width":"500px"},
            effectDescription: "SP and HP boost formula are better.",
        },
    },
    clickables:{
        11:{
            display(){return `Spin to function tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EEEEEE","color":"#DDDDDD","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.su.unlocked},
            onClick(){
                player.tab='f'
            },
            canClick(){return true}
        },
        12:{
            display(){return `Spin to prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#31aeb0","color":"#31aeb0","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.up.unlocked},
            onClick(){
                player.tab='p'
            },
            canClick(){return true}
        },
        13:{
            display(){return `Spin to super prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#217782","color":"#217782","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.up.unlocked},
            onClick(){
                player.tab='sp'
            },
            canClick(){return true}
        },
        14:{
            display(){return `Spin to prestige upgrader tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#14CEA3","color":"#14CEA3","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.up.unlocked},
            onClick(){
                player.tab='pu'
            },
            canClick(){return true}
        },
        15:{
            display(){return `Spin to hyper prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#0068A5","color":"#0068A5","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.up.unlocked},
            onClick(){
                player.tab='hp'
            },
            canClick(){return true}
        },
        21:{
            display(){return `Spin to challenge tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#45AC68","color":"#45AC68","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.up.unlocked},
            onClick(){
                player.tab='c'
            },
            canClick(){return true}
        },
        22:{
            display(){return `Spin to super upgrader tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#04AE83","color":"#04AE83","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.su.unlocked},
            onClick(){
                player.tab='su'
            },
            canClick(){return true}
        },
        23:{
            display(){return `Spin to prestium tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EEDB05","color":"#EEDB05","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pt.unlocked},
            onClick(){
                player.tab='pt'
            },
            canClick(){return true}
        },
        24:{
            display(){return `Spin to reincarnation tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EF25EF","color":"#EF25EF","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.r.unlocked},
            onClick(){
                player.tab='r'
            },
            canClick(){return true}
        },
    }
}),
addLayer("pt", {
    name: "prestium", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "PT", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
        worker: new Decimal(0),
        maxw: new Decimal(0),
        blv:[null,new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)],
        basecst:[null,new Decimal(30),new Decimal(125),new Decimal(999),new Decimal(10800),new Decimal(86400)],
        cstup:[null,new Decimal(5),new Decimal(7),new Decimal(9.99),new Decimal(6),new Decimal(2.25)],
        cst:[null,new Decimal(30),new Decimal(125),new Decimal(999),new Decimal(10800),new Decimal(86400)],
        work:[null,new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)],
        wreq:new Decimal(1),
        ischoose:[null,false,false,false,false,false,false],
    }},
    color: "#EEDB05",
    requires: new Decimal("1e212"), // Can be a function that takes requirement increases into account
    resource: "prestium", // Name of prestige currency
    baseResource: "hyper prestige points", // Name of resource prestige is based on
    baseAmount() {return player.hp.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.01, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        mult = mult.times(tmp.pt.calcboost2)
        if(hasUpgrade("su",13)) mult=mult.times(upgradeEffect("su",13)[0])
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        if(hasUpgrade("up",32)) exp=exp.times(1.025)
        return exp
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "t", description: "T: Reset for prestium", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("f",344)},
    doReset(resettingLayer){
        player.f.multiplier=new Decimal(0)
        player.points=new Decimal(0)
        let keep=[]
        if(hasMilestone("r",3)) keep.push("points")
        if ((layers[resettingLayer].row > this.row)&&(!hasMilestone("r",8))) layerDataReset("pt", keep)
    },
    passiveGeneration(){return hasMilestone("up",4)?1:0},
    branches:["hp"],
    tabFormat:{
        "Main":{
            content:[
                ["display-text",function() { return `You have <h2 style="color:#EEDB05">${format(player.pt.points)}</h2> prestium.`},
                { "font-size":"17.5px","text-shadow" : "0 0 10px #EEDB05"},],
                "blank",
                "prestige-button",
                "blank",
                ["display-text",function() { return `You have ${format(player.hp.points)} hyper prestige points.`},],
                "blank",
                ["display-text",function() { return `You have <h2 style="color:#EEDB05">${player.pt.worker}/${player.pt.maxw}</h2> workers.(next at <h2 style="color:#EEDB05">${format(player.pt.wreq)}</h2> prestium)`},
                { "font-size":"17.5px","text-shadow" : "0 0 10px #EEDB05"},],
                "blank",
                "clickables"
            ]
        },
        "Build effects":{
            content:[
                ["display-text",function() { return `Building I : Boost UP gain by <h2 style="color:#EEDB05">${format(tmp.pt.calcboost1)}</h2>`},
                    { "font-size":"17.5px","text-shadow" : "0 0 10px #EEDB05"},],
                ["display-text",function() { return `Building II : Boost prestium gain by <h2 style="color:#EEDB05">${format(tmp.pt.calcboost2)}</h2>`},
                    { "font-size":"17.5px","text-shadow" : "0 0 10px #EEDB05"},],
                ["display-text",function() { return `Building III : Prestige boost is raised to <h2 style="color:#EEDB05">^${format(tmp.pt.calcboost3)}</h2>.`},
                    { "font-size":"17.5px","text-shadow" : "0 0 10px #EEDB05"},],
                ["display-text",function() { return `Building IV : Add <h2 style="color:#EEDB05">${format(tmp.pt.calcboost4)}</h2> to prestige buyable effect base.`},
                    { "font-size":"17.5px","text-shadow" : "0 0 10px #EEDB05"},],
                ["display-text",function() { return `Building V : Every worker is <h2 style="color:#EEDB05">x${format(tmp.pt.calcboost5)}</h2> stronger.`},
                    { "font-size":"17.5px","text-shadow" : "0 0 10px #EEDB05"},],
            ]
        },
    },
    calcwreq(){
        expw=new Decimal(10)
        player.pt.wreq=expw.pow(player.pt.maxw.pow(0.8))
        if(player.pt.points.gte(player.pt.wreq)){
            player.pt.worker=player.pt.worker.add(1)
            player.pt.maxw=player.pt.maxw.add(1)
        }
    },
    update(diff){
        if(player.pt.ischoose[1])player.pt.cst[1]=player.pt.cst[1].minus(Decimal.pow(tmp.pt.calcboost5.times(1.5),player.pt.work[1].times(hasMilestone("r",7)?5:1)).minus(1).max(0).times(diff))
        if(player.pt.ischoose[2])player.pt.cst[2]=player.pt.cst[2].minus(Decimal.pow(tmp.pt.calcboost5.times(1.5),player.pt.work[2].times(hasMilestone("r",7)?5:1)).minus(1).max(0).times(diff))
        if(player.pt.ischoose[3])player.pt.cst[3]=player.pt.cst[3].minus(Decimal.pow(tmp.pt.calcboost5.times(1.5),player.pt.work[3].times(hasMilestone("r",7)?5:1)).minus(1).max(0).times(diff))
        if(player.pt.ischoose[4])player.pt.cst[4]=player.pt.cst[4].minus(Decimal.pow(tmp.pt.calcboost5.times(1.5),player.pt.work[4].times(hasMilestone("r",7)?5:1)).minus(1).max(0).times(diff))
        if(player.pt.ischoose[5])player.pt.cst[5]=player.pt.cst[5].minus(Decimal.pow(tmp.pt.calcboost5.times(1.5),player.pt.work[5].times(hasMilestone("r",7)?5:1)).minus(1).max(0).times(diff))
    },
    calcblv(){
        if(player.pt.cst[1].lte(0)){
            player.pt.blv[1]=player.pt.blv[1].add(1).min(100)
            player.pt.cst[1]=player.pt.basecst[1].times(player.pt.cstup[1].pow(player.pt.blv[1]))
        }
        if(player.pt.cst[2].lte(0)){
            player.pt.blv[2]=player.pt.blv[2].add(1).min(55)
            player.pt.cst[2]=player.pt.basecst[2].times(player.pt.cstup[2].pow(player.pt.blv[2]).pow(player.pt.blv[2].minus(10).max(0).div(10).add(1)))
        }
        if(player.pt.cst[3].lte(0)){
            player.pt.blv[3]=player.pt.blv[3].add(1).min(55)
            player.pt.cst[3]=player.pt.basecst[3].times(player.pt.cstup[3].pow(player.pt.blv[3]).add(player.pt.blv[3].times(0.999)))
        }
        if(player.pt.cst[4].lte(0)){
            player.pt.blv[4]=player.pt.blv[4].add(1).min(75)
            player.pt.cst[4]=player.pt.basecst[4].times(player.pt.cstup[4].pow(player.pt.blv[4]))
        }
        if(player.pt.cst[5].lte(0)){
            player.pt.blv[5]=player.pt.blv[5].add(1).min(55)
            player.pt.cst[5]=player.pt.basecst[5].times(Decimal.pow((player.pt.cstup[5].pow(player.pt.blv[5])),(player.pt.blv[5].div(10).add(1))).add(Decimal.pow(2,player.pt.blv[5])))
        }
    },
    calclefttime(){
        return player.pt.cst[1]
    },
    calclefttime2(){
        return player.pt.cst[2]
    },
    calclefttime3(){
        return player.pt.cst[3]
    },
    calclefttime4(){
        return player.pt.cst[4]
    },
    calclefttime5(){
        return player.pt.cst[5]
    },
    getlv(){
        return player.pt.blv[1]
    },
    getlv2(){
        return player.pt.blv[2]
    },
    getlv3(){
        return player.pt.blv[3]
    },
    getlv4(){
        return player.pt.blv[4]
    },
    getlv5(){
        return player.pt.blv[5]
    },
    calcboost1(){
        return Decimal.pow(16,(tmp.pt.getlv.times(hasUpgrade("up",31)?2:1)).pow(0.75))
    },
    calcboost2(){
        return Decimal.pow(1.5,(tmp.pt.getlv2.times(hasUpgrade("up",31)?2:1)).pow(1.3)).pow(0.9)
    },
    calcboost3(){
        return Decimal.pow(1.1,(tmp.pt.getlv3.times(hasUpgrade("up",31)?2:1)).div(1.25))
    },
    calcboost4(){
        return tmp.pt.getlv4.times((((tmp.pt.getlv4.times(hasUpgrade("up",31)?2:1))).div(100)).add(0.1))
    },
    calcboost5(){
        return Decimal.pow(1.02,(tmp.pt.getlv5.times(hasUpgrade("up",31)?2:1)).pow(0.9)).add((tmp.pt.getlv5.times(hasUpgrade("up",31)?2:1)).times(0.001))
    },
    clickables:{
        11:{
            display(){return `+1`},
            style:{"height":"125px","width":"125px","border-radius":"4%","border":"3px solid","font-size":"20px"},
            onClick(){
                if(player.pt.ischoose[1]){
                    player.pt.work[1]=player.pt.work[1].add(1)
                    player.pt.worker=player.pt.worker.minus(1)
                }
                if(player.pt.ischoose[2]){
                    player.pt.work[2]=player.pt.work[2].add(1)
                    player.pt.worker=player.pt.worker.minus(1)
                }
                if(player.pt.ischoose[3]){
                    player.pt.work[3]=player.pt.work[3].add(1)
                    player.pt.worker=player.pt.worker.minus(1)
                }
                if(player.pt.ischoose[4]){
                    player.pt.work[4]=player.pt.work[4].add(1)
                    player.pt.worker=player.pt.worker.minus(1)
                }
                if(player.pt.ischoose[5]){
                    player.pt.work[5]=player.pt.work[5].add(1)
                    player.pt.worker=player.pt.worker.minus(1)
                }
                if(player.pt.ischoose[6]){
                    player.pt.work[6]=player.pt.work[6].add(1)
                    player.pt.worker=player.pt.worker.minus(1)
                }
            },
            canClick(){return (player.pt.ischoose[1]||player.pt.ischoose[2]||player.pt.ischoose[3]||player.pt.ischoose[4]||player.pt.ischoose[5]||player.pt.ischoose[6])&&player.pt.worker.gt(0)}
        },
        12:{
            display(){return `-1`},
            style:{"height":"125px","width":"125px","border-radius":"4%","border":"3px solid","font-size":"20px"},
            onClick(){
                if(player.pt.ischoose[1]){
                    player.pt.work[1]=player.pt.work[1].minus(1)
                    player.pt.worker=player.pt.worker.add(1)
                }
                if(player.pt.ischoose[2]){
                    player.pt.work[2]=player.pt.work[2].minus(1)
                    player.pt.worker=player.pt.worker.add(1)
                }
                if(player.pt.ischoose[3]){
                    player.pt.work[3]=player.pt.work[3].minus(1)
                    player.pt.worker=player.pt.worker.add(1)
                }
                if(player.pt.ischoose[4]){
                    player.pt.work[4]=player.pt.work[4].minus(1)
                    player.pt.worker=player.pt.worker.add(1)
                }
                if(player.pt.ischoose[5]){
                    player.pt.work[5]=player.pt.work[5].minus(1)
                    player.pt.worker=player.pt.worker.add(1)
                }
                if(player.pt.ischoose[6]){
                    player.pt.work[6]=player.pt.work[6].minus(1)
                    player.pt.worker=player.pt.worker.add(1)
                }
            },
            canClick(){return (player.pt.ischoose[1]||player.pt.ischoose[2]||player.pt.ischoose[3]||player.pt.ischoose[4]||player.pt.ischoose[5]||player.pt.ischoose[6])&&player.pt.worker.lt(player.pt.maxw)&&(!(player.pt.ischoose[1]&&player.pt.work[1].eq(0)))&&(!(player.pt.ischoose[2]&&player.pt.work[2].eq(0)))&&(!(player.pt.ischoose[3]&&player.pt.work[3].eq(0)))&&(!(player.pt.ischoose[4]&&player.pt.work[4].eq(0)))&&(!(player.pt.ischoose[5]&&player.pt.work[5].eq(0)))&&(!(player.pt.ischoose[6]&&player.pt.work[6].eq(0)))}
        },
        13:{
            display(){return `+100%`},
            style:{"height":"125px","width":"125px","border-radius":"4%","border":"3px solid","font-size":"20px"},
            onClick(){
                if(player.pt.ischoose[1]){
                    player.pt.work[1]=player.pt.work[1].add(player.pt.worker)
                    player.pt.worker=new Decimal(0)
                }
                if(player.pt.ischoose[2]){
                    player.pt.work[2]=player.pt.work[2].add(player.pt.worker)
                    player.pt.worker=new Decimal(0)
                }
                if(player.pt.ischoose[3]){
                    player.pt.work[3]=player.pt.work[3].add(player.pt.worker)
                    player.pt.worker=new Decimal(0)
                }
                if(player.pt.ischoose[4]){
                    player.pt.work[4]=player.pt.work[4].add(player.pt.worker)
                    player.pt.worker=new Decimal(0)
                }
                if(player.pt.ischoose[5]){
                    player.pt.work[5]=player.pt.work[5].add(player.pt.worker)
                    player.pt.worker=new Decimal(0)
                }
                if(player.pt.ischoose[6]){
                    player.pt.work[6]=player.pt.work[6].add(player.pt.worker)
                    player.pt.worker=new Decimal(0)
                }
            },
            canClick(){return (player.pt.ischoose[1]||player.pt.ischoose[2]||player.pt.ischoose[3]||player.pt.ischoose[4]||player.pt.ischoose[5]||player.pt.ischoose[6])&&player.pt.worker.gt(0)}
        },
        14:{
            display(){return `-100%`},
            style:{"height":"125px","width":"125px","border-radius":"4%","border":"3px solid","font-size":"20px"},
            onClick(){
                if(player.pt.ischoose[1]){
                    player.pt.worker=player.pt.worker.add(player.pt.work[1])
                    player.pt.work[1]=new Decimal(0)
                }
                if(player.pt.ischoose[2]){
                    player.pt.worker=player.pt.worker.add(player.pt.work[2])
                    player.pt.work[2]=new Decimal(0)
                }
                if(player.pt.ischoose[3]){
                    player.pt.worker=player.pt.worker.add(player.pt.work[3])
                    player.pt.work[3]=new Decimal(0)
                }
                if(player.pt.ischoose[4]){
                    player.pt.worker=player.pt.worker.add(player.pt.work[4])
                    player.pt.work[4]=new Decimal(0)
                }
                if(player.pt.ischoose[5]){
                    player.pt.worker=player.pt.worker.add(player.pt.work[5])
                    player.pt.work[5]=new Decimal(0)
                }
                if(player.pt.ischoose[6]){
                    player.pt.worker=player.pt.worker.add(player.pt.work[6])
                    player.pt.work[6]=new Decimal(0)
                }
            },
            canClick(){return (player.pt.ischoose[1]||player.pt.ischoose[2]||player.pt.ischoose[3]||player.pt.ischoose[4]||player.pt.ischoose[5]||player.pt.ischoose[6])&&(!(player.pt.ischoose[1]&&player.pt.work[1].eq(0)))&&(!(player.pt.ischoose[2]&&player.pt.work[2].eq(0)))&&(!(player.pt.ischoose[3]&&player.pt.work[3].eq(0)))&&(!(player.pt.ischoose[4]&&player.pt.work[4].eq(0)))&&(!(player.pt.ischoose[5]&&player.pt.work[5].eq(0)))&&(!(player.pt.ischoose[6]&&player.pt.work[6].eq(0)))}
        },
        21:{
            display(){return `Building I|LV.${tmp.pt.getlv}\nNext at ${formatTimeLong(tmp.pt.calclefttime.div(Decimal.pow(tmp.pt.calcboost5.times(1.5),player.pt.work[1]).minus(1).max(0.5)))}`},
            style:{"height":"105px","width":"200px","border-radius":"0%","border":"6px solid","border-color":"yellow","font-size":"14px","background-color"(){return tmp.pt.getlv.gte(100)? "#21EB2525":player.pt.ischoose[1]?"#EEDB0530":"#00000000"},"color":"#EEDB05"},
            onClick(){
                player.pt.ischoose[1]=!player.pt.ischoose[1]
            },
            canClick(){return !(player.pt.ischoose[2]||player.pt.ischoose[3]||player.pt.ischoose[4]||player.pt.ischoose[5]||player.pt.ischoose[6])}
        },
        22:{
            display(){return `Building II|LV.${tmp.pt.getlv2}\nNext at ${formatTimeLong(tmp.pt.calclefttime2.div(Decimal.pow(tmp.pt.calcboost5.times(1.5),player.pt.work[2]).minus(1).max(0.5)))}`},
            style:{"height":"105px","width":"200px","border-radius":"0%","border":"6px solid","border-color":"yellow","font-size":"14px","background-color"(){return tmp.pt.getlv2.gte(55)? "#21EB2525":player.pt.ischoose[2]?"#EEDB0530":"#00000000"},"color":"#EEDB05"},
            onClick(){
                player.pt.ischoose[2]=!player.pt.ischoose[2]
            },
            canClick(){return !(player.pt.ischoose[1]||player.pt.ischoose[3]||player.pt.ischoose[4]||player.pt.ischoose[5]||player.pt.ischoose[6])}
        },
        23:{
            display(){return `Building III|LV.${tmp.pt.getlv3}\nNext at ${formatTimeLong(tmp.pt.calclefttime3.div(Decimal.pow(tmp.pt.calcboost5.times(1.5),player.pt.work[3]).minus(1).max(0.5)))}`},
            style:{"height":"105px","width":"200px","border-radius":"0%","border":"6px solid","border-color":"yellow","font-size":"14px","background-color"(){return tmp.pt.getlv3.gte(55)? "#21EB2525":player.pt.ischoose[3]?"#EEDB0530":"#00000000"},"color":"#EEDB05"},
            onClick(){
                player.pt.ischoose[3]=!player.pt.ischoose[3]
            },
            canClick(){return !(player.pt.ischoose[1]||player.pt.ischoose[2]||player.pt.ischoose[4]||player.pt.ischoose[5]||player.pt.ischoose[6])}
        },
        24:{
            display(){return `Building IV|LV.${tmp.pt.getlv4}\nNext at ${formatTimeLong(tmp.pt.calclefttime4.div(Decimal.pow(tmp.pt.calcboost5.times(1.5),player.pt.work[4]).minus(1).max(0.5)))}`},
            style:{"height":"105px","width":"200px","border-radius":"0%","border":"6px solid","border-color":"yellow","font-size":"14px","background-color"(){return tmp.pt.getlv4.gte(75)? "#21EB2525":player.pt.ischoose[4]?"#EEDB0530":"#00000000"},"color":"#EEDB05"},
            onClick(){
                player.pt.ischoose[4]=!player.pt.ischoose[4]
            },
            canClick(){return !(player.pt.ischoose[1]||player.pt.ischoose[2]||player.pt.ischoose[3]||player.pt.ischoose[5]||player.pt.ischoose[6])}
        },
        25:{
            display(){return `Building V|LV.${tmp.pt.getlv5}\nNext at ${formatTimeLong(tmp.pt.calclefttime5.div(Decimal.pow(tmp.pt.calcboost5.times(1.5),player.pt.work[5]).minus(1).max(0.5)))}`},
            style:{"height":"105px","width":"200px","border-radius":"0%","border":"6px solid","border-color":"yellow","font-size":"14px","background-color"(){return tmp.pt.getlv5.gte(55)? "#21EB2525":player.pt.ischoose[5]?"#EEDB0530":"#00000000"},"color":"#EEDB05"},
            onClick(){
                player.pt.ischoose[5]=!player.pt.ischoose[5]
            },
            canClick(){return !(player.pt.ischoose[1]||player.pt.ischoose[2]||player.pt.ischoose[3]||player.pt.ischoose[4]||player.pt.ischoose[6])}
        },
        41:{
            display(){return `Spin to function tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EEEEEE","color":"#DDDDDD","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pt.unlocked},
            onClick(){
                player.tab='f'
            },
            canClick(){return true}
        },
        42:{
            display(){return `Spin to prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#31aeb0","color":"#31aeb0","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pt.unlocked},
            onClick(){
                player.tab='p'
            },
            canClick(){return true}
        },
        43:{
            display(){return `Spin to super prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#217782","color":"#217782","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pt.unlocked},
            onClick(){
                player.tab='sp'
            },
            canClick(){return true}
        },
        44:{
            display(){return `Spin to prestige upgrader tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#14CEA3","color":"#14CEA3","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pt.unlocked},
            onClick(){
                player.tab='pu'
            },
            canClick(){return true}
        },
        45:{
            display(){return `Spin to hyper prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#0068A5","color":"#0068A5","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pt.unlocked},
            onClick(){
                player.tab='hp'
            },
            canClick(){return true}
        },
        51:{
            display(){return `Spin to challenge tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#45AC68","color":"#45AC68","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pt.unlocked},
            onClick(){
                player.tab='c'
            },
            canClick(){return true}
        },
        52:{
            display(){return `Spin to super upgrader tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#04AE83","color":"#04AE83","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pt.unlocked},
            onClick(){
                player.tab='su'
            },
            canClick(){return true}
        },
        53:{
            display(){return `Spin to ultra prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#5C00CC","color":"#5C00CC","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.pt.unlocked},
            onClick(){
                player.tab='up'
            },
            canClick(){return true}
        },
        54:{
            display(){return `Spin to reincarnation tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EF25EF","color":"#EF25EF","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.r.unlocked},
            onClick(){
                player.tab='r'
            },
            canClick(){return true}
        },
    }
}),
addLayer("r", {
    name: "Reincarnation", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
        rt:new Decimal(0),
        rp:new Decimal(0),
        coreLv:new Decimal(0),
        rngseed1:"00",
        rngseed2:"00",
        rngseed3:'0',
        rngseed4:'0',
        rngseed5:"00",
        rngseeda:'0',
        r1dynamicboost:new Decimal(1),
        r2dynamicboost:new Decimal(1),
        allowrng1:false,
        allowrng2:false,
        allowrng3:false,
        allowrng4:false,
        allowrng5:false,
        allowrnga:false,
        allowauto:false,
        re:new Decimal(0),
        dim1:new Decimal(0),
        dim2:new Decimal(0),
        dim3:new Decimal(0),
        dim4:new Decimal(0),
        dim5:new Decimal(0),
        dim6:new Decimal(0), 
        dim1mul:new Decimal(1),
        dim2mul:new Decimal(1),
        dim3mul:new Decimal(1),
        dim4mul:new Decimal(1),
        dim5mul:new Decimal(1),
        dim6mul:new Decimal(1),
        remult:new Decimal(1),
        rc1:false,
        rc1fin:false,
        rc1time:200,
        rc2:false,
        rc2fin:false,
        rc2time:180,
        rc3:false,
        rc3fin:false,
        rc3time:900,
        rc4:false,
        rc4fin:false,
        rc4time:330,
        rc5:false,
        rc5fin:false,
        rc5time:142,
        rcbegun:false,
        goal:new Decimal(0),
        rct:0,
        rc4tick:0,
        unstext:"unstable"
    }},
    color: "#EF25EF",
    requires: new Decimal("1e100000"), // Can be a function that takes requirement increases into account
    resource: "reincarnation point", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.00005, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if((player.r.rngseed1=="99")&&player.r.allowrng1) mult=mult.times(2)
        if((player.r.rngseed2=="99")&&player.r.allowrng2) mult=mult.times(2)
        if((player.r.rngseed5=="99")&&player.r.allowrng5) mult=mult.times(5)
        if(hasAchievement("a",185)) mult=mult.times(5)
        if(player.r.rc3fin) mult=mult.times(Decimal.pow(1.025,player.pt.blv[3]))
        mult=mult.times(buyableEffect("r",32))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        return exp
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "r", description: "R: Reincarnation", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("f",345)},
    doReset(resettingLayer){
        player.f.multiplier=new Decimal(0)
        player.points=new Decimal(0)
        player.r.rt=player.r.rt.add(hasMilestone("r",11)? 10:1)
    },
    canReset(){return (!player.r.rcbegun)&&player.points.gte("1e100000")},
    branches:["up"],
    tabFormat:{
        "Core":{
            content:[
                ["display-text",function() { return `You have <h2 style="color:#EF25EF">${format(player.r.points)}</h2> reincarnation points, which produce ${format(tmp.r.getrp)} Rein power/s.`},
                { "font-size":"17.5px","text-shadow" : "0 0 10px #EF25EF"},],
                "blank",
                "prestige-button",
                ["display-text",function() { return `You have reincarnation for ${format(player.r.rt)} times.`},],
                ["display-text",function() { return `You have ${format(player.points)} points.`},],
                ["display-text",function() { return player.r.points.gte(5e307) ? `Rein points gain is capped at <p style="color:#EF25EF">1.8e308</p>`:``},
                    { "font-size":"17.5px","text-shadow" : "0 0 10px #EF25EF"},],
                ["display-text",function() { return player.points.gte("e2e7") ?  `Point gain is capped at <p style="color:#EF25EF">e2e7</p>`:``},
                    { "font-size":"17.5px","text-shadow" : "0 0 10px #EF25EF"},],
                "blank",
                ["display-text",function() { return `You have <h2 style="color:#EF25EF">${format(player.r.rp)}</h2> reincarnation power, prestige point gain is raised to <h2 style="color:#EF25EF">${format(tmp.r.calcrpboost,precision = 4)}</h2> .`},
                    { "font-size":"17.5px","text-shadow" : "0 0 10px #EF25EF"},],
                "blank",
                ["display-text",function() { return player.r.coreLv.gte(24)? `The core is becoming more and more <p style="color:#EF0000">unstable</p>`:``},
                    { "font-size":"17.5px"},],
                ["display-text",function() { return player.r.coreLv.gte(24)? `The requirement of core level over 25 is raised to <p style="color:#EF0000">^${format(Decimal.pow(1.0875,Decimal.pow(player.r.coreLv.minus(24).max(0),1.0875)),4)}</p>`:``},
                    { "font-size":"17.5px"},],
                "blank",
                ["clickables",[1,4,5]],
            ]
        },
        "Core-effects":{
            content:[
                ["display-text",function() { return `You have <h2 style="color:#EF25EF">${format(player.r.points)}</h2> reincarnation points, which produce ${format(tmp.r.getrp)} Rein power/s.`},
                { "font-size":"17.5px","text-shadow" : "0 0 10px #EF25EF"},],
                "blank",
                "milestones",
            ]
        },
        "Upgrade generator":{
            content:[
                ["display-text",function() { return `You have <h2 style="color:#EF25EF">${format(player.r.points)}</h2> reincarnation points, which produce ${format(tmp.r.getrp)} Rein power/s.`},
                { "font-size":"17.5px","text-shadow" : "0 0 10px #EF25EF"},],
                "blank",
                ["display-text",function() { return `Seed: <h2 style="color:#31AEB0;text-shadow : 0 0 10px #31AEB0">${player.r.rngseed1}</h2>`+(hasMilestone("r",2)?`<h2 style="color:#217782;text-shadow : 0 0 10px #217782">${player.r.rngseed2}</h2>`:``)+(hasMilestone("r",5)?`<h2 style="color:#14CEA3;text-shadow : 0 0 10px #14CEA3">${player.r.rngseed3}</h2>`:``)+(hasMilestone("r",7)?`<h2 style="color:#45AC68;text-shadow : 0 0 10px #45AC68">${player.r.rngseed4}</h2>`:``)+(hasMilestone("r",9)?`<h2 style="color:#0068A5;text-shadow : 0 0 10px #0068A5">${player.r.rngseed5}</h2>`:``)+((player.r.rc4&&player.r.rcbegun)?`<h2 style="color:#00EF00;text-shadow : 0 0 10px #00EF00">${player.r.rngseeda}</h2>`:``)},
                    { "font-size":"17.5px"},],
                "blank",
                ["clickables",[2]],
                ["display-text",function() { return ((player.r.rc4&&player.r.rcbegun)?`<br>${tmp.r.calcrngaboost[0]}`:``)+`${tmp.r.calcrng1boost[0]}`+(hasMilestone("r",2)?`<br>${tmp.r.calcrng2boost[0]}`:``)+(hasMilestone("r",5)?`<br>${tmp.r.calcrng3boost[0]}`:``)+(hasMilestone("r",7)?`<br>${tmp.r.calcrng4boost[0]}`:``)+(hasMilestone("r",9)?`<br>${tmp.r.calcrng5boost[0]}`:``)},
                    { "font-size":"17.5px"},],     
            ],
            unlocked(){return hasMilestone("r",0)}
        },
        "Reincarnation dimensions":{
            content:[
                ["display-text",function() { return `You have <h2 style="color:#EF25EF">${format(player.r.points)}</h2> reincarnation points, which produce ${format(tmp.r.getrp)} Rein power/s.`},
                { "font-size":"17.5px","text-shadow" : "0 0 10px #EF25EF"},],
                "blank",
                ["display-text",function() { return `You have <h2 style="color:#EF25EF;text-shadow : 0 0 10px #EF25EF">${format(player.r.re)}</h2> rein energy.\nWhich `+(((player.r.rngseeda=='3'||player.r.rngseeda=='8')&&player.r.allowrnga)?`divides`:`boosts`)+` your points by <h2 style="color:#EF25EF;text-shadow : 0 0 10px #EF25EF">${format((player.r.rngseeda=='3'&&player.r.allowrnga)?new Decimal(1).div(tmp.r.getreboost):tmp.r.getreboost)}</h2>`},
                    { "font-size":"17.5px"},],
                "blank",
                "buyables"
            ],
            unlocked(){return hasMilestone("r",4)}
        },
        "Reincarnation challenges":{
            content:[
                ["display-text",function() { return `You have <h2 style="color:#EF25EF">${format(player.r.points)}</h2> reincarnation points, which produce ${format(tmp.r.getrp)} Rein power/s.`},
                { "font-size":"17.5px","text-shadow" : "0 0 10px #EF25EF"},],
                "blank",
                ["display-text",function() { return `Click the picture below to see the info of each challenge!<br>
                                                    All the challenges have a time limit, if you can't complete the challenge in the limit, you will be failed!<br>
                                                    Starting a challenge will remove all the progress of early layers!<br>
                                                    TIME LEFT:<h2 style="color:red;text-shadow: 0 0 10px red;font-family:MS serif">${formatTime(player.r.rct)}</h2>`},
                    { "font-size":"17.5px"},],
                "blank",
                ["clickables",[6,7]],
                "blank",
                ["clickables",[8]],
                "blank",
                ["display-text",function() { return player.r.rc1? `<h3 style="color:#FE0000">[1]Absolute dilation</h3><br>
                                                                    <strong>·This challenge must be completed in</strong> <h2 style="font-family:MS serif;color:red;text-shadow : 0 0 10px red;"> 3:20 </h2><br>
                                                                    ·Point gain will raised to ^0.85<br>
                                                                    ·After the first UP reset, P,SP,HP and UP gain will raised to ^0.75<br>
                                                                    Goal:1e315 points<br>
                                                                    Reward:Unlock 5 upgrades in different layers<br>
                                                                    Best finish time:<h2 style="font-family:MS serif;color:red;text-shadow : 0 0 10px red;"> ${formatTime(player.r.rc1time)} </h2>`:
                                                    player.r.rc2? `<h3 style="color:#FE5400">[2]Out of charge</h3><br>
                                                                    <strong>·This challenge must be completed in</strong> <h2 style="font-family:MS serif;color:orange;text-shadow : 0 0 10px orange;"> 3:00 </h2><br>
                                                                    ·"Point booster" effect base is 0.99<br>
                                                                    ·PU effect base is 0.6<br>
                                                                    Goal:1e1650 points<br>
                                                                    Reward:Unlock a new dimension<br>
                                                                    Best finish time:<h2 style="font-family:MS serif;color:orange;text-shadow : 0 0 10px orange;"> ${formatTime(player.r.rc2time)} </h2>`:
                                                    player.r.rc3? `<h3 style="color:#FEEF00">[3]Cosmic wave</h3><br>
                                                                    <strong>·This challenge must be completed in</strong> <h2 style="font-family:MS serif;color:yellow;text-shadow : 0 0 10px yellow;"> 15:00 </h2><br>
                                                                    ·Point gain is raised to an exponent based on 0.75abs(sin(Rein points))<br>
                                                                    ·Each level of building V divides UP gain by 1e25<br>
                                                                    Goal:1e115000 points<br>
                                                                    Reward:Each level of building III boosts Rein points gain by x1.025<br>
                                                                    Best finish time:<h2 style="font-family:MS serif;color:yellow;text-shadow : 0 0 10px yellow;"> ${formatTime(player.r.rc3time)} </h2>`:
                                                    player.r.rc4? `<h3 style="color:#00EF00">[4]Wrong RNG generation</h3><br>
                                                                    <strong>·This challenge must be completed in</strong> <h2 style="font-family:MS serif;color:#00EF00;text-shadow : 0 0 10px #00EF00;"> 5:30 </h2><br>
                                                                    ·Auotmatically generate a seed every 4 tick.<br>
                                                                    ·A bad seed in this challenge which gives debuffs(You need to change it by yourself).<br>
                                                                    ·Clicking "Generate seed" will divide your Rein points by 2(if Rein points is 0 already, won't create a new seed).<br>
                                                                    Goal:1e260000 points<br>
                                                                    Reward:You can automatically generate a seed every 4 tick, Rein power gain is raised to ^1.25<br>
                                                                    Best finish time:<h2 style="font-family:MS serif;color:#00EF00;text-shadow : 0 0 10px #00EF00;"> ${formatTime(player.r.rc4time)} </h2>`:
                                                    player.r.rc5? `<h3 style="color:rgb(65,205,225)">[5]Broke the chain</h3><br>
                                                                    <strong>·This challenge must be completed in</strong> <h2 style="font-family:MS serif;color:rgb(65,205,225);text-shadow : 0 0 10px rgb(65,205,225);"> 2:22 </h2><br>
                                                                    ·Auto seed generate is disabled.<br>
                                                                    Are you fast enough to enter stage 5?<br>
                                                                    Goal:e2e7 points<br>
                                                                    Reward:You can upgrade your function....?<br>
                                                                    Best finish time:<h2 style="font-family:MS serif;color:rgb(65,205,255);text-shadow : 0 0 10px rgb(65,205,255);"> ${formatTime(player.r.rc5time)} </h2>`:`.....`},
                    { "font-size":"17.5px"},],
            ],
            unlocked(){return hasMilestone("r",6)}
        },
    },
    update(diff){
        player.r.points=player.r.points.min("1.8e308")
        player.r.rp=player.r.rp.add(tmp.r.getrp.times(diff))
        if(player.r.rngseed1[0]=='6'||player.r.rngseed1[0]=='2') player.r.r1dynamicboost=player.r.r1dynamicboost.times(Decimal.pow((Math.floor(player.r.rngseed1[1]/2*10)/100+1),diff))
        if(player.r.rngseed2[0]=='2'||player.r.rngseed2[0]=='5') player.r.r2dynamicboost=player.r.r2dynamicboost.times(Decimal.pow((Math.floor(player.r.rngseed1[1]/2*8)/100+1),diff))
        player.r.re=player.r.re.add(player.r.dim1.times(player.r.dim1mul.times(tmp.r.getremult)).times(diff))
        player.r.dim1=player.r.dim1.add(player.r.dim2.times(player.r.dim2mul).times(diff))
        player.r.dim2=player.r.dim2.add(player.r.dim3.times(player.r.dim3mul).times(diff))
        player.r.dim3=player.r.dim3.add(player.r.dim4.times(player.r.dim4mul).times(diff))
        player.r.dim4=player.r.dim4.add(player.r.dim5.times(player.r.dim5mul).times(diff))
        player.r.dim5=player.r.dim5.add(player.r.dim6.times(player.r.dim6mul).times(diff))
        if(player.r.rcbegun) player.r.rct-=diff;
        if(player.r.rct<=0&&player.r.rcbegun){
            doReset("r")
            player.r.rcbegun=false
            player.r.rct=0
        }
        if(player.r.rc1) player.r.goal=new Decimal("1e315")
        if(player.r.rc2) player.r.goal=new Decimal("1e1650")
        if(player.r.rc3) player.r.goal=new Decimal("1e115000")
        if(player.r.rc4) player.r.goal=new Decimal("1e260000")
        if(player.r.rc5) player.r.goal=new Decimal("e2e7")
        if(player.r.rc5&&player.r.rcbegun) player.r.allowauto=false
        if((player.r.rc4tick+1)%4==0&&((player.r.rc4&&player.r.rcbegun)||player.r.allowauto)){
            player.r.rngseed1=tmp.r.rngseed1
            player.r.rngseed2=tmp.r.rngseed2
            player.r.rngseed3=tmp.r.rngseed3
            player.r.rngseed4=tmp.r.rngseed4
            player.r.rngseed5=tmp.r.rngseed5
            player.r.rc4tick=0
        }else{
            player.r.rc4tick++
        }
    },
    calclvreq(){
        p=new Decimal(1)
        if(player.r.coreLv.gte(25)) p=Decimal.pow(1.0875,Decimal.pow(player.r.coreLv.minus(24).max(0),1.0875))
        return Decimal.pow(Decimal.pow(5,player.r.coreLv),player.r.coreLv.div(25).add(1)).times(125).pow(p)
    },
    getrp(){
        let gain=new Decimal(1)
        gain=player.r.points.min("1.8e308").sqrt().div(3).pow(1.25).times(1.5).add(player.pt.blv[4]).times(hasMilestone("r",8)?(player.r.re.add(1).log10().div(2)):new Decimal(1))
        let t=new Decimal(1)
        if(hasMilestone("r",0)) t=t.times(2)
        if((player.r.rngseed1=="99"||player.r.rngseed1=="01")&&player.r.allowrng1) t=t.times(tmp.r.calcrng1boost[6])
        if((player.r.rngseed1=="99")&&player.r.allowrng1) t=t.times(10)
        if((player.r.rngseed2=="99")&&player.r.allowrng2) t=t.times(10)
        if((player.r.rngseed3=="9")&&player.r.allowrng3) t=t.times(25)
        if(hasMilestone("r",2)) t=t.times(Decimal.pow(1.2,player.r.rt))
        return player.r.unlocked?gain.times(t).pow(player.r.rc4fin?1.25:1):new Decimal(0)
    },
    calcrpboost(){
        let boost=new Decimal(1)
        boost=boost.add(player.r.rp.add(1).log10().add(1).pow(2.5).log10().div(200))
        if(hasMilestone("r",8)) boost=(player.r.rp.add(1).log10().cbrt().div(10)).add(1)
        return boost.pow(1.1)
    },
    getremult(){
        let mult=new Decimal(1)
        if((player.r.rngseed3=='9')&&player.r.allowrng3) mult=mult.times(10)
        if((player.r.rngseed5=="99")&&player.r.allowrng5) mult=mult.times(25)
        mult=mult.times(Decimal.pow(2,player.r.remult))
        if(player.r.rngseed4=='9'&&player.r.allowrng4) mult=mult.pow(tmp.r.calcrng4boost[5])
        return mult
    },
    getreboost(){
        let boost=new Decimal(1)
        boost=player.r.re.pow(player.r.re.add(1).log10().pow(hasMilestone("r",8)?(player.r.re.add(1).log10().div(100).add(1)):new Decimal(1)).add(1).ln().add(2))
        return ((player.r.rngseeda=='3'||player.r.rngseeda=='8')&&player.r.allowrnga)?(new Decimal(1).div(boost.add(1).pow(5))) : boost.add(1)
    },
    rngseed1(){
        s=Math.floor(Math.random()*100).toString()
        if(s<10){
            return '0'+s
        }
        return s
    },
    rngseed2(){
        s=Math.floor(Math.random()*100).toString()
        if(s<10){
            return '0'+s
        }
        return s
    },
    rngseed3(){
        s=Math.floor(Math.random()*10).toString()
        return s;
    },
    rngseed4(){
        s=Math.floor(Math.random()*10).toString()
        return s;
    },
    rngseed5(){
        s=Math.floor(Math.random()*100).toString()
        if(s<10){
            return '0'+s
        }
        return s
    },
    rngseeda(){
        s=Math.floor(Math.random()*10).toString()
        return s
    },
    calcrng1boost(){
        let a=player.r.rngseed1[0]
        let b=player.r.rngseed1[1]
        let c=""
        let d=""
        let e=""
        let f=""
        let g="",h="",i="",k="",m=""
        let eff1=new Decimal(0)
        let eff2=new Decimal(0)
        let eff3=new Decimal(1)
        let eff4=new Decimal(1)
        let eff5=new Decimal(0)
        let eff6=new Decimal(1)
        let eff7=new Decimal(1)
        player.r.allowrng1=false
        if(a=='0'&&b!="0"){
            c=`Prestige boost is raised to <h2 style="color:#31AEB0;text-shadow : 0 0 10px #31AEB0">^1.0`+b+`</h2><br>`
            eff1=1+(b/100)
        }
        if(b=='0'&&a!="0"){
            d=`Get <h2 style="color:#31AEB0;text-shadow : 0 0 10px #31AEB0">${format(a/3)}</h2>`+` free "Point booster"<br>`
            eff2=a/3
        }
        if(a=='1'||a=='4'||a=='7'){
            e=`Boost point gain based on <h2 style="color:#31AEB0;text-shadow : 0 0 10px #31AEB0">log`+Math.floor((10-(b/10))*10)/10+`(prestige points+1)^`+Math.floor(a/2*10)/10+`</h2><br>`
            eff3=player.p.points.add(1).log(Math.floor((10-(b/10))*10)/10).pow(a/2).add(1)
        }
        if(b=='3'||b=='5'||b=='8'){
            f=`Boost prestige point gain based on <h2 style="color:#31AEB0;text-shadow : 0 0 10px #31AEB0">log10(points^`+Math.floor(a/2*10)/10+`+1)</h2><br>`
            eff4=player.points.pow(a/2).add(1).log10().add(1)
        }
        if(((a/1)+(b/1)>=17)||((a/1)+(b/1)<=3)){
            g=`Add <h2 style="color:#31AEB0;text-shadow : 0 0 10px #31AEB0">`+(format((a/10000)+(b/10000),precision = 4))+`</h2> to prestige gain exp<br>`
            eff5=(a/10000)+(b/10000)
        }
        if(a+b=="99"||a+b=="01"){
            h=`Boost rein power gain based on <h2 style="color:#31AEB0;text-shadow : 0 0 10px #31AEB0">log10(log10(prestige points))</h2><br>`
            eff6=player.p.points.add(1).log10().add(1).log10().add(1)
        }
        if(b=='6'||a=='3'){
            i=`SU upgrade 3 is raised to <h2 style="color:#31AEB0;text-shadow : 0 0 10px #31AEB0">^1.0`+a+b+`</h2><br>`
            eff7=1+(a/100)+(b/1000)
        }
        if(a=='6'||a=='2'){
            k=`Get a prestige point dynamic boost:<h2 style="color:#31AEB0;text-shadow : 0 0 10px #31AEB0">x${format(player.r.r1dynamicboost)}</h2>(<h2 style="color:#31AEB0;text-shadow : 0 0 10px #31AEB0">x${format(Math.floor((b/2)*10)/100+1)}</h2> per second).<br>`
        }
        if(a+b=="99"){
            m=`10x Rein power and 2x RP gain.<br>`
        }
        let lst=[c+d+e+f+g+h+i+k+m,eff1,eff2,eff3,eff4,eff5,eff6,eff7];
        player.r.allowrng1=true
        return lst
        
    },
    calcrng2boost(){
        let a=player.r.rngseed2[0]
        let b=player.r.rngseed2[1]
        let c=""
        let d=""
        let e=""
        let f="",g="",m="",k=""
        let eff1=new Decimal(1)
        let eff2=new Decimal(1)
        let eff3=new Decimal(0)
        let eff4=new Decimal(1)
        let eff5=new Decimal(1)
        player.r.allowrng2=false
        if(a=='1'||a=='5'){
            c=`Super prestige gain is raised to <h2 style="color:#217782;text-shadow : 0 0 10px #217782">^1.01</h2><br>`
            eff1=1.01
        }
        if((a/1)>=4&&(b/1)<=5){
            d=`SP boost is raised to <h2 style="color:#217782;text-shadow : 0 0 10px #217782">^1.0${Math.floor(a/3)}</h2><br>`
            eff2=((a/100)/3)+1
        }
        if(a=='2'||a=='3'||a=='8'){
            e=`Get <h2 style="color:#217782;text-shadow : 0 0 10px #217782">${format(a/5+1)}</h2> free "Super booster"<br>`
            eff3=(a/5)+1
        }
        if(b=='5'||b=='7'||b=='9'){
            f=`Boost SP gain based on <h2 style="color:#217782;text-shadow : 0 0 10px #217782">log10(SP)^${a}</h2>.<br>`
            eff4=player.sp.points.add(1).log10().pow(a).add(1)
        }
        if(((a/1)>=5)&&((b/1)<=6)){
            g=`Boost point gain based on <h2 style="color:#217782;text-shadow : 0 0 10px #217782">ln(SP)^${Math.floor((b/2)*10)/10}</h2>.<br>`
            eff5=player.sp.points.add(1).ln().pow(b/2).add(1)
        }
        if(a=='2'||a=='5'){
            k=`Get a SP dynamic boost:<h2 style="color:#217782;text-shadow : 0 0 10px #217782">x${format(player.r.r2dynamicboost)}</h2>(<h2 style="color:#217782;text-shadow : 0 0 10px #217782">x${format(Math.floor((b/2)*8)/100+1)}</h2> per second).<br>`
        }
        if(a+b=="99"){
            m=`10x Rein power and 2x RP gain.<br>`
        }
        let lst=[c+d+e+f+g+k+m,eff1,eff2,eff3,eff4,eff5];
        if(hasMilestone("r",2)) player.r.allowrng2=true
        return lst
    },
    calcrng3boost(){
        let a=player.r.rngseed3[0]
        let c=""
        let d=""
        let e=""
        let f=""
        let eff1=new Decimal(1)
        let eff2=new Decimal(1)
        let eff3=new Decimal(1)
        let eff4=new Decimal(1)
        player.r.allowrng3=false
        if(a=='1'||a=='6'||a=='9'){
            c=`PU are <h2 style="color:#14CEA3;text-shadow : 0 0 10px #14CEA3">^0.85</h2> cheaper.<br>`
            eff1=0.85
        }
        if(a=='3'||a=='4'){
            d=`Add <h2 style="color:#14CEA3;text-shadow : 0 0 10px #14CEA3">ln(PT^3)^0.2</h2> to PU boost base<br>`
            eff2=player.pt.points.pow(3).add(1).ln().pow(0.2)
        }
        if(a=='2'||a=='5'||a=='8'){
            e=`Boost point gain based on <h2 style="color:#14CEA3;text-shadow : 0 0 10px #14CEA3">(PU effect)^0.5</h2><br>`
            eff3=tmp.pu.effect.pow(0.5)
        }
        if(a=='9'){
            f=`25x Rein power and 10x RE gain.<br>`
        }
        let lst=[c+d+e+f,eff1,eff2,eff3,eff4]
        if(hasMilestone("r",5)) player.r.allowrng3=true
        return lst
    },
    calcrng4boost(){
        let a=player.r.rngseed4[0]
        let c=""
        let d=""
        let e=""
        let f=""
        let g=""
        let eff1=new Decimal(1)
        let eff2=new Decimal(1)
        let eff3=new Decimal(1)
        let eff4=new Decimal(1)
        let eff5=new Decimal(1)
        player.r.allowrng4=false
        if(a=='1'){
            c=`Each challenge shard boosts prestige gain for additional <h2 style="color: #45AC68;text-shadow : 0 0 10px #45AC68">+^0.01</h2><br>`
            eff1=player.c.points.times(0.01).add(1)
        }
        if(a=='3'){
            d=`Each challenge shard boosts SP gain for additional <h2 style="color: #45AC68;text-shadow : 0 0 10px #45AC68">+^0.015</h2><br>`
            eff2=player.c.points.times(0.015).add(1)
        }
        if(a=='5'){
            e=`Each challenge shard boosts HP gain for additional <h2 style="color: #45AC68;text-shadow : 0 0 10px #45AC68">+^0.015</h2><br>`
            eff3=player.c.points.times(0.015).add(1)
        }
        if(a=='7'){
            f=`Each challenge shard boosts UP gain for additional <h2 style="color: #45AC68;text-shadow : 0 0 10px #45AC68">+^0.005</h2><br>`
            eff4=player.c.points.times(0.005).add(1)
        }
        if(a=='9'){
            g=`Each challenge shard boosts RE gain for additional <h2 style="color: #45AC68;text-shadow : 0 0 10px #45AC68">+^0.005</h2><br>`
            eff5=player.c.points.times(0.005).add(1)
        }
        let lst=[c+d+e+f+g,eff1,eff2,eff3,eff4,eff5]
        if(hasMilestone("r",7)) player.r.allowrng4=true
        return lst
    },
    calcrng5boost(){
        let a=player.r.rngseed5[0]
        let b=player.r.rngseed5[1]
        let c=""
        let d=""
        let e=""
        let f="",g="",m="",k="",l=""
        let eff1=new Decimal(1)
        let eff2=new Decimal(1)
        let eff3=new Decimal(0)
        let eff4=new Decimal(1)
        let eff5=new Decimal(1)
        player.r.allowrng5=false
        if(a=='1'||a=='3'||a=='5'||a=='7'){
            c=`Boost HP gain based on <h2 style="color: #0068A5;text-shadow : 0 0 10px #0068A5">SP^0.02</h2><br>`
            eff1=player.sp.points.pow(0.02).add(1)
        }
        if(b=='1'||b=='3'||b=='5'||b=='7'){
            d=`Boost HP boost base based on <h2 style="color: #0068A5;text-shadow : 0 0 10px #0068A5">Rpoint^${format((b/10)+2)}</h2><br>`
            eff2=player.r.points.pow((b/10)+2)
        }
        if(a==b&&player.r.rngseed5!="00"){
            e=`Add <h2 style="color: #0068A5;text-shadow : 0 0 10px #0068A5">2</h2> to "Not included" base<br>`
            eff3=new Decimal(2)
        }
        if(a=='2'||b=='5'||a=='6'||b=='8'){
            f=`Boost UP gain based on <h2 style="color: #0068A5;text-shadow : 0 0 10px #0068A5">log10(HP+1)^${Math.floor(a/2)}+1</h2><br>`
            eff4=player.hp.points.add(1).log10().pow(Math.floor(a/2)).add(1)
        }
        if(a>='7'&&b<='4'){
            g=`Boost point gain based on <h2 style="color: #0068A5;text-shadow : 0 0 10px #0068A5">ln(HP^${a}+1)^${b}+1</h2><br>`
            eff5=player.hp.points.pow(a/1).add(1).ln().pow(b/1).add(1)
        }
        if(player.r.rngseed5=="99"){
            m="5x rein points gain and 25x RE gain.<br>"
        }
        let lst=[c+d+e+f+g+m,eff1,eff2,eff3,eff4,eff5];
        if(hasMilestone("r",9)) player.r.allowrng5=true
        return lst
    },
    calcrngaboost(){
        let a=player.r.rngseeda[0]
        let c=""
        let d=""
        let e=""
        let f="",g="",m="",k="",l=""
        player.r.allowrnga=false
        if(player.r.rngseeda=='0'||player.r.rngseeda=='5'){
            c=`PU effect is raised to <h2 style="color: #00EF00;text-shadow : 0 0 10px #00EF00">^0.05</h2><br>`
        }
        if(player.r.rngseeda=='1'||player.r.rngseeda=='6'){
            d=`UP effect is raised to <h2 style="color: #00EF00;text-shadow : 0 0 10px #00EF00">^0.125</h2><br>`
        }
        if(player.r.rngseeda=='2'||player.r.rngseeda=='7'){
            e=`Each Challenge shard only gives <h2 style="color: #00EF00;text-shadow : 0 0 10px #00EF00">+^0.01</h2> to the multiplier of x<br>`
        }
        if(player.r.rngseeda=='3'||player.r.rngseeda=='8'){
            f=`RE boost is <h2 style="color: #00EF00;text-shadow : 0 0 10px #00EF00">(1/RE boost^5)</h2><br>`
        }
        if(player.r.rngseeda=='4'||player.r.rngseeda=='9'){
            g=`Point gain is raised to <h2 style="color: #00EF00;text-shadow : 0 0 10px #00EF00">^0.4</h2><br>If you want to generate a new seed, your rein points will be divided by <h2 style="color: #00EF00;text-shadow : 0 0 10px #00EF00">1e6</h2><br>(if you have 0, you can't gengrate a new seed)<br>`
        }
        let lst=[c+d+e+f+g+m+k+l];
        if(player.r.rc4&&player.r.rcbegun) player.r.allowrnga=true
        return lst
    },
    clickables:{
        11:{
            display(){return `Increase core level(${player.r.coreLv}->${player.r.coreLv.add(1)})<br>Require:${format(tmp.r.calclvreq,precision = 2)} RP`},
            style:{"height":"150px","width":"250px","border-radius":"2%","border":"6px solid","border-color":"#EF25EF","font-size":"14px","color":"#EF25EF","background-color":"#DF35EF33"},
            onClick(){
                player.r.coreLv=player.r.coreLv.add(1)
                player.r.rp=new Decimal(0)
            },
            canClick(){return player.r.rp.gte(tmp.r.calclvreq)}
        },
        21:{
            display(){return `Generate a random seed`},
            style:{"height":"100px","width":"150px","border-radius":"2%","border":"6px solid","border-color":"#EF25EF","font-size":"14px","color":"#EF25EF","background-color":"#DF35EF33"},
            onClick(){                
                if(player.r.rc4&&player.r.rcbegun&&player.r.points.gt(0)){
                    if(player.r.rngseeda=='4'||player.r.rngseeda=='9') player.r.points=player.r.points.div(1e6).floor()
                    else player.r.points=player.r.points.div(2).floor()
                    player.r.rngseed1=tmp.r.rngseed1
                    player.r.rngseed2=tmp.r.rngseed2
                    player.r.rngseed3=tmp.r.rngseed3
                    player.r.rngseed4=tmp.r.rngseed4
                    player.r.rngseed5=tmp.r.rngseed5
                    player.r.rngseeda=tmp.r.rngseeda
                    if(player.r.rngseed1[0]=='6'||player.r.rngseed1[0]=='2') player.r.r1dynamicboost=new Decimal(1)
                    if(player.r.rngseed1[0]=='2'||player.r.rngseed1[0]=='5') player.r.r2dynamicboost=new Decimal(1)
                }
                if(!(player.r.rcbegun&&player.r.rc4)){
                    player.r.rngseed1=tmp.r.rngseed1
                    player.r.rngseed2=tmp.r.rngseed2
                    player.r.rngseed3=tmp.r.rngseed3
                    player.r.rngseed4=tmp.r.rngseed4
                    player.r.rngseed5=tmp.r.rngseed5
                    player.r.rngseeda=tmp.r.rngseeda
                    if(player.r.rngseed1[0]=='6'||player.r.rngseed1[0]=='2') player.r.r1dynamicboost=new Decimal(1)
                    if(player.r.rngseed1[0]=='2'||player.r.rngseed1[0]=='5') player.r.r2dynamicboost=new Decimal(1)
                }
            },
            canClick(){return true}
        },
        22:{
            display(){return `Auto Generate seed<br>`+((player.r.rc5&&player.r.rcbegun)? `DISABLED` : ((player.r.allowauto)?`ON`:`OFF`))},
            style:{"height":"100px","width":"150px","border-radius":"2%","border":"6px solid","border-color"(){return player.r.allowauto? "#00EF00":"red"},"font-size":"14px","color"(){return player.r.allowauto?"#00EF00":"red"},"background-color"(){return player.r.allowauto?"#00EF0033":"#FF000033"}},            onClick(){                
                player.r.allowauto=!player.r.allowauto
            },
            canClick(){return !(player.r.rc5&&player.r.rcbegun)},
            unlocked(){return player.r.rc4fin}
        },
        41:{
            display(){return `Spin to function tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EEEEEE","color":"#DDDDDD","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.r.unlocked},
            onClick(){
                player.tab='f'
            },
            canClick(){return true}
        },
        42:{
            display(){return `Spin to prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#31aeb0","color":"#31aeb0","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.r.unlocked},
            onClick(){
                player.tab='p'
            },
            canClick(){return true}
        },
        43:{
            display(){return `Spin to super prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#217782","color":"#217782","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.r.unlocked},
            onClick(){
                player.tab='sp'
            },
            canClick(){return true}
        },
        44:{
            display(){return `Spin to prestige upgrader tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#14CEA3","color":"#14CEA3","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.r.unlocked},
            onClick(){
                player.tab='pu'
            },
            canClick(){return true}
        },
        45:{
            display(){return `Spin to hyper prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#0068A5","color":"#0068A5","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.r.unlocked},
            onClick(){
                player.tab='hp'
            },
            canClick(){return true}
        },
        51:{
            display(){return `Spin to challenge tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#45AC68","color":"#45AC68","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.r.unlocked},
            onClick(){
                player.tab='c'
            },
            canClick(){return true}
        },
        52:{
            display(){return `Spin to super upgrader tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#04AE83","color":"#04AE83","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.r.unlocked},
            onClick(){
                player.tab='su'
            },
            canClick(){return true}
        },
        53:{
            display(){return `Spin to ultra prestige tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#5C00CC","color":"#5C00CC","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.r.unlocked},
            onClick(){
                player.tab='up'
            },
            canClick(){return true}
        },
        54:{
            display(){return `Spin to prestium tab`},
            style:{"height":"150px","width":"150px","border-radius":"0%","border":"6px solid","border-color":"#EEDB05","color":"#EEDB05","font-size":"15px","background-color":"#00000000"},
            unlocked(){return player.r.unlocked},
            onClick(){
                player.tab='pt'
            },
            canClick(){return true}
        },
        61:{
            display(){return !player.r.rc1fin? `<img src="js/cpic/RC1.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`:`<img src="js/cpic/RC1finish.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`},
            style:{"height":"161px","width":"161px","border-radius":"0%","border":"6px solid","border-color"(){return player.r.rc1 ? "red":"#DDDDDD"},"color":"red","font-size":"15px","background-color":"#00000000"},
            unlocked(){return hasMilestone("r",6)},
            onClick(){
                player.r.rc1=!player.r.rc1
                if(player.r.rc1)player.r.rct=200
                else player.r.rct=0
            },
            canClick(){return (!player.r.rcbegun)&&(!player.r.rc2)&&(!player.r.rc3)&&(!player.r.rc4)&&(!player.r.rc5)}
        },
        62:{
            display(){return !player.r.rc2fin? `<img src="js/cpic/RC2.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`:`<img src="js/cpic/RC2finish.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`},
            style:{"height":"161px","width":"161px","border-radius":"0%","border":"6px solid","border-color"(){return player.r.rc2 ? "orange":"#DDDDDD"},"color":"orange","font-size":"15px","background-color":"#00000000"},
            unlocked(){return hasMilestone("r",6)},
            onClick(){
                player.r.rc2=!player.r.rc2
                if(player.r.rc2)player.r.rct=180
                else player.r.rct=0
            },
            canClick(){return (!player.r.rcbegun)&&(!player.r.rc1)&&(!player.r.rc3)&&(!player.r.rc4)&&(!player.r.rc5)}
        },
        63:{
            display(){return !player.r.rc3fin? `<img src="js/cpic/RC3.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`:`<img src="js/cpic/RC3finish.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`},
            style:{"height":"161px","width":"161px","border-radius":"0%","border":"6px solid","border-color"(){return player.r.rc3 ? "yellow":"#DDDDDD"},"color":"yellow","font-size":"15px","background-color":"#00000000"},
            unlocked(){return hasMilestone("r",7)},
            onClick(){
                player.r.rc3=!player.r.rc3
                if(player.r.rc3)player.r.rct=900
                else player.r.rct=0
            },
            canClick(){return (!player.r.rcbegun)&&(!player.r.rc1)&&(!player.r.rc2)&&(!player.r.rc4)&&(!player.r.rc5)}
        },
        71:{
            display(){return !player.r.rc4fin? `<img src="js/cpic/RC4.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`:`<img src="js/cpic/RC4finish.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`},
            style:{"height":"161px","width":"161px","border-radius":"0%","border":"6px solid","border-color"(){return player.r.rc4 ? "#00EF00":"#DDDDDD"},"color":"#00EF00","font-size":"15px","background-color":"#00000000"},
            unlocked(){return hasMilestone("r",10)},
            onClick(){
                player.r.rc4=!player.r.rc4
                if(player.r.rc4)player.r.rct=330
                else player.r.rct=0
            },
            canClick(){return (!player.r.rcbegun)&&(!player.r.rc1)&&(!player.r.rc2)&&(!player.r.rc3)&&(!player.r.rc5)}
        },
        72:{
            display(){return !player.r.rc5fin? `<img src="js/cpic/RC5.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`:`<img src="js/cpic/RC5finish.jpg" width="150" height="150" style="margin-left:-6px;margin-top:-1px">`},
            style:{"height":"161px","width":"161px","border-radius":"0%","border":"6px solid","border-color"(){return player.r.rc5 ? "rgb(65,205,225)":"#DDDDDD"},"color":"rgb(65,205,225","font-size":"15px","background-color":"#00000000"},
            unlocked(){return hasMilestone("r",12)},
            onClick(){
                player.r.rc5=!player.r.rc5
                if(player.r.rc5)player.r.rct=142
                else player.r.rct=0
            },
            canClick(){return (!player.r.rcbegun)&&(!player.r.rc1)&&(!player.r.rc2)&&(!player.r.rc3)&&(!player.r.rc4)}
        },
        81:{
            display(){return player.r.rcbegun? player.points.gte(player.r.goal) ? `Complete the challenge`:`Exit the challenge`:`Begin the challenge`},
            style:{"height":"50px","width":"125px","border-radius":"0%","border":"6px solid","border-color":"#DDDDDD","color":"white","font-size":"15px","background-color"(){return ((player.points.gte(player.r.goal))&&player.r.rcbegun)?"gold":"#FFFFFF25"}},
            unlocked(){return hasMilestone("r",6)},
            onClick(){
                if(player.r.rcbegun&&player.points.gte(player.r.goal)){
                    if(player.r.rc1){
                        player.r.rc1fin=true
                        player.r.rc1time=Math.min(player.r.rc1time,200-player.r.rct)
                    }
                    if(player.r.rc2){
                        player.r.rc2fin=true
                        player.r.rc2time=Math.min(player.r.rc2time,180-player.r.rct)
                    }
                    if(player.r.rc3){
                        player.r.rc3fin=true
                        player.r.rc3time=Math.min(player.r.rc3time,900-player.r.rct)
                    }
                    if(player.r.rc4){
                        player.r.rc4fin=true
                        player.r.rc4time=Math.min(player.r.rc4time,330-player.r.rct)
                    }
                    if(player.r.rc5){
                        player.r.rc5fin=true
                        player.r.rc5time=Math.min(player.r.rc5time,142-player.r.rct)
                    }
                }
                player.r.rcbegun=!player.r.rcbegun
                if(player.r.rcbegun){
                    player.points=new Decimal(0)
                    layerDataReset("up")
                    layerDataReset("pt")
                    layerDataReset("su")
                    layerDataReset("hp")
                    layerDataReset("c")
                    layerDataReset("pu")
                    layerDataReset("sp")
                    layerDataReset("p")
                    doReset("r")
                    player.points=new Decimal(0)
                }
                player.points=new Decimal(0)
                if(player.r.rc1) player.r.rct=200
                if(player.r.rc2) player.r.rct=180
                if(player.r.rc3) player.r.rct=900
                if(player.r.rc4) player.r.rct=330
                if(player.r.rc5) player.r.rct=142
            },
            canClick(){return player.r.rc1||player.r.rc2||player.r.rc3||player.r.rc4||player.r.rc5}
        }
    },
    milestones:{
        0: {
            requirementDescription: "Core level 1",
            done() { return player.r.coreLv.gte(1)},
            style:{"width":"500px"},
            effectDescription: "Keep prestige milestones and upgrades on all resets, Double Rein power gain. Unlock upgrade generator.",
        },
        1: {
            requirementDescription: "Core level 2",
            done() { return player.r.coreLv.gte(2)},
            style:{"width":"500px"},
            effectDescription(){return `Boost point gain based on reincarnation times, Currently:x${format(Decimal.pow(1.5,player.r.rt))}`},
        },
        2: {
            requirementDescription: "Core level 3",
            done() { return player.r.coreLv.gte(3)},
            style:{"width":"500px"},
            effectDescription(){return `Keep SP milestones and upgrades on all resets. Unlock a new seed.<br>
                                        The effect of level 2 affects rein power but a little weaker.`},
        },
        3: {
            requirementDescription: "Core level 4",
            done() { return player.r.coreLv.gte(4)},
            style:{"width":"500px"},
            effectDescription(){return `Keep HP upgrades and your prestium on all resets.`},
        },
        4: {
            requirementDescription: "Core level 5",
            done() { return player.r.coreLv.gte(5)},
            style:{"width":"500px"},
            effectDescription(){return `Unlock reincarnation dimensions.`},
        },
        5: {
            requirementDescription: "Core level 6",
            done() { return player.r.coreLv.gte(6)},
            style:{"width":"500px"},
            effectDescription(){return `Keep UP milestones and upgrades on all resets, unlock a new seed.`},
        }, 
        6: {
            requirementDescription: "Core level 7",
            done() { return player.r.coreLv.gte(7)},
            style:{"width":"500px"},
            effectDescription(){return `Keep challenge shards on all resets. Unlock Reincarnation challenges.`},
        },
        7: {
            requirementDescription: "Core level 8",
            done() { return player.r.coreLv.gte(8)},
            style:{"width":"500px"},
            effectDescription(){return `Unlock a new seed and a new challenge, workers are 500% stronger.`},
        },
        8: {
            requirementDescription: "Core level 10 and RC3 completed",
            done() { return player.r.coreLv.gte(10)&&player.r.rc3fin},
            style:{"width":"500px"},
            effectDescription(){return `Keep buildings on reset, unlock last 2 dimensions. RE boosts Rein power gain base and RE boost base. Rein power boost formula is better.`},
        },
        9: {
            requirementDescription: "Core level 12",
            done() { return player.r.coreLv.gte(12)},
            style:{"width":"500px"},
            effectDescription(){return `Unlock a new seed.`},
        },
        10: {
            requirementDescription: "Core level 18",
            done() { return player.r.coreLv.gte(18)},
            style:{"width":"500px"},
            effectDescription(){return `Unlock a new challenge.`},
        },
        11: {
            requirementDescription: "Core level 37",
            done() { return player.r.coreLv.gte(37)},
            style:{"width":"500px"},
            effectDescription(){return `You can get 10 reincarnation times on reincarnation.`},
        },
        12: {
            requirementDescription: "Core level 40",
            done() { return player.r.coreLv.gte(40)},
            unlocked() {return player.r.coreLv.gte(40)},
            style:{"width":"500px"},
            effectDescription(){return `Unlock THE FINAL CHALLENGE.`},
        },
    },
    buyables:{
        11:{
            title:"Dim 1",
            cost(x) { return Decimal.pow(5,x)},
            effect(x) { return x},
            display() { return `Cost: ${format(this.cost())} RP
                                Amount: ${format(player.r.dim1,0)}(${format(getBuyableAmount("r",11),0)})
                                x${format(player.r.dim1mul)}` },
            canAfford() { return player.r.points.gte(this.cost()) },
            buy(){
                if(!tmp.r.buyables[11].canAfford) return
                player.r.points = player.r.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.r.dim1=player.r.dim1.add(1)
                player.r.dim1mul=Decimal.pow(2,(getBuyableAmount("r",11)).minus(1)).max(1)
            },
            style:{"height":"150px","width":"150px","font-size":"12.5px"}
        },
        12:{
            title:"Dim 2",
            cost(x) { return Decimal.pow(10,x).times(5)},
            effect(x) { return x},
            display() { return `Cost: ${format(this.cost())} RP
                                Amount: ${format(player.r.dim2,0)}(${format(getBuyableAmount("r",12),0)})
                                x${format(player.r.dim2mul)}` },
            canAfford() { return player.r.points.gte(this.cost()) },
            buy(){
                if(!tmp.r.buyables[12].canAfford) return
                player.r.points = player.r.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.r.dim2=player.r.dim2.add(1)
                player.r.dim2mul=Decimal.pow(2,(getBuyableAmount("r",12)).minus(1)).max(1)
            },
            style:{"height":"150px","width":"150px","font-size":"12.5px"}
        },
        13:{
            title:"Dim 3",
            cost(x) { return Decimal.pow(15,x).times(25)},
            effect(x) { return x},
            display() { return `Cost: ${format(this.cost())} RP
                                Amount: ${format(player.r.dim3,0)}(${format(getBuyableAmount("r",13),0)})
                                x${format(player.r.dim3mul)}` },
            canAfford() { return player.r.points.gte(this.cost()) },
            buy(){
                if(!tmp.r.buyables[13].canAfford) return
                player.r.points = player.r.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.r.dim3=player.r.dim3.add(1)
                player.r.dim3mul=Decimal.pow(2,(getBuyableAmount("r",13)).minus(1)).max(1)
            },
            style:{"height":"150px","width":"150px","font-size":"12.5px"}
        },
        21:{
            title:"Dim 4",
            cost(x) { return Decimal.pow(20,x).times(50)},
            unlocked(){return player.r.rc2fin},
            effect(x) { return x},
            display() { return `Cost: ${format(this.cost())} RP
                                Amount: ${format(player.r.dim4,0)}(${format(getBuyableAmount("r",21),0)})
                                x${format(player.r.dim4mul)}` },
            canAfford() { return player.r.points.gte(this.cost()) },
            buy(){
                if(!tmp.r.buyables[21].canAfford) return
                player.r.points = player.r.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.r.dim4=player.r.dim4.add(1)
                player.r.dim4mul=Decimal.pow(2,(getBuyableAmount("r",21)).minus(1)).max(1)
            },
            style:{"height":"150px","width":"150px","font-size":"12.5px","margin-top":"12.5px"}
        },
        22:{
            title:"Dim 5",
            cost(x) { return Decimal.pow(50,x).times(1e6)},
            unlocked(){return hasMilestone("r",8)},
            effect(x) { return x },
            display() { return `Cost: ${format(this.cost())} RP
                                Amount: ${format(player.r.dim5,0)}(${format(getBuyableAmount("r",22),0)})
                                x${format(player.r.dim5mul)}` },
            canAfford() { return player.r.points.gte(this.cost()) },
            buy(){
                if(!tmp.r.buyables[22].canAfford) return
                player.r.points = player.r.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.r.dim5=player.r.dim5.add(1)
                player.r.dim5mul=Decimal.pow(2,(getBuyableAmount("r",22)).minus(1)).max(1)
            },
            style:{"height":"150px","width":"150px","font-size":"12.5px","margin-top":"12.5px"}
        },
        23:{
            title:"Dim 6",
            cost(x) { return Decimal.pow(150,x).times(1e8)},
            unlocked(){return hasMilestone("r",8)},
            effect(x) { return x },
            display() { return `Cost: ${format(this.cost())} RP
                                Amount: ${format(player.r.dim6,0)}(${format(getBuyableAmount("r",23),0)})
                                x${format(player.r.dim6mul)}` },
            canAfford() { return player.r.points.gte(this.cost()) },
            buy(){
                if(!tmp.r.buyables[23].canAfford) return
                player.r.points = player.r.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.r.dim6=player.r.dim6.add(1)
                player.r.dim6mul=Decimal.pow(2,(getBuyableAmount("r",23)).minus(1)).max(1)
            },
            style:{"height":"150px","width":"150px","font-size":"12.5px","margin-top":"12.5px"}
        },
        31:{
            title:"RE booster",
            cost(x) { return Decimal.pow(100,x).times(1000)},
            effect(x) { return x},
            display() { return `Boost to RE gain.
                                Cost: ${format(this.cost())} RE
                                Amount: ${format(player.r.remult,0)}(${format(getBuyableAmount("r",31),0)})
                                Effect:x${format(Decimal.pow(2,player.r.remult))}` },
            canAfford() { return player.r.re.gte(this.cost()) },
            buy(){
                if(!tmp.r.buyables[31].canAfford) return
                player.r.re = player.r.re.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.r.remult=player.r.remult.add(1)
            },
            style:{"height":"150px","width":"150px","font-size":"12.5px","margin-top":"12.5px"}
        },
        32:{
            title:"UR booster",
            cost(x) { return Decimal.pow(1e10,Decimal.pow(x,1.05)).times(1e20)},
            effect(x) { return this.unlocked? Decimal.pow(10,Decimal.pow(x,1.25)) : new Decimal(1) },
            unlocked() {return hasUpgrade("up",33)||getBuyableAmount("r",32).gt(0)},
            display() { return `Boost to Rein points gain.
                                Cost: ${format(this.cost())} RE
                                Amount: ${format(getBuyableAmount("r",32),0)}
                                Effect:x${format(this.effect())}` },
            canAfford() { return player.r.re.gte(this.cost()) },
            buy(){
                if(!tmp.r.buyables[32].canAfford) return
                player.r.re = player.r.re.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            style:{"height":"150px","width":"150px","font-size":"12.5px","margin-top":"12.5px"}
        },
    }
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
            tooltip(){ return `Get 10 points without having any multiplier in stage 0.<br>reward: Add 1 to the base adder of x only in stage 0.`},
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
            tooltip() { return `Make the exponent of x exactly 1.69.<br>reward: Add 0.01 to sacrifice bonus only in stage 0.`},
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
            done() {return player.f.exp.gte("1eeeeeeeeeeeeeeeeeee20")||hasAchievement("a",92)},
            tooltip(){ return `Make the exponent of x 1F20.<br>reward: 1.05x Point gain.`},
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
            tooltip(){ return `Find a place you can't charge.<br>reward: The factor of x is raised to ^1.05 in stage 1.`},
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
            done() {return player.points.gte(100)&&player.f.calevel.eq(0)&&player.f.cmlevel.eq(0)&&player.f.ftype>=1},
            tooltip(){ return `Reach 100 points without charging.<br>reward: Reduce the cost of charging factor a bit.`},
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
            tooltip(){ return `Find the secret one.<br>reward: Add 1 to the base multiplier of x only in stage 2`},
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
            done() {return !hasUpgrade("f",241)&&player.points.gte(400000)},
            tooltip(){ return `Get 400000 points without buying study 121.<br>reward: Reduce the base cube req by 1 points`},
        },
        91: {
            name: "Finally a normal game...?",
            style:{"border-radius":"0%"},
            done() {return player.f.ftype==3},
            tooltip: "Reach stage 3.",
        }, 
        92: {
            name: "Oh no I can't get RQ==!",
            style:{"border-radius":"0%"},
            done() {return player.f.kmult.gt(1)},
            tooltip: "Do a expanding.\nreward:Get RQ==.",
        }, 
        93: {
            name: "KkKkKkKk",
            style:{"border-radius":"0%"},
            done() {return player.f.k.gt(0.05)},
            tooltip: "Make k greater than 0.05.",
        },
        94: {
            name: "Kept study",
            style:{"border-radius":"0%"},
            done() {return hasUpgrade("f",285)},
            tooltip: "See more studies.",
        },
        95: {
            name: "Qw==.",
            style:{"border-radius":"0%","border-color":"green"},
            done() {return player.f.kmult.gte(2.5)},
            tooltip(){ return `Reach expand hardcap.<br>reward: Add 0.001 to base k`},
        },
        101: {
            name: "I've been charged",
            style:{"border-radius":"0%"},
            done() {return player.f.calevel.gte(30)&&player.f.ftype==3},
            tooltip: "Charger your adder to level 30 in stage 3.",
        },
        102: {
            name: "Reduce by reduce",
            style:{"border-radius":"0%"},
            done() {return challengeCompletions("f",71)>=5},
            tooltip: "Complete exp11 for 5 times.",
        },
        103: {
            name: "1 TICK RACE",
            style:{"border-radius":"0%"},
            done() {return hasChallenge("f",82)},
            tooltip: "Complete exp22.",
        },
        104: {
            name: "Time dilated",
            style:{"border-radius":"0%"},
            done() {return hasUpgrade("f",291 )},
            tooltip: "Unlock dilation.",
        },
        105: {
            name: "Tw==.",
            style:{"border-radius":"0%","border-color":"green"},
            done() {return tmp.f.getproton.gte(100)&&!hasUpgrade("f",131)},
            tooltip(){ return `Get 100 proton without buying studies.<br>reward: 1.05x proton gain.`},
        },
        111: {
            name: "1e15 is too much",
            style:{"border-radius":"0%"},
            done() {return player.f.points.gte(1e15)&&player.f.inprotondil},
            tooltip: "Get 1e15 points in proton dilation.",
        },
        112: {
            name: "Neutron energy",
            style:{"border-radius":"0%"},
            done() {return player.f.ne.gt(0)},
            tooltip: "Start to generate NE.",
        },
        113: {
            name: "When did we get there?",
            style:{"border-radius":"0%"},
            done() {return getPointGen().gte("1.8e308")},
            tooltip: "Earn 1.8e308 points per second.",
        },
        114: {
            name: "Final is not final",
            style:{"border-radius":"0%"},
            done() {return hasChallenge("f",93)},
            tooltip: "Complete exp final.",
        },
        115: {
            name: "RA==.",
            style:{"border-radius":"0%","border-color":"green"},
            done() {return player.points.gte("1e2000")},
            tooltip(){ return `Get 1e2000 points.<br>reward: 1.05x proton gain.`},
        },
        121: {
            name: "You can get these achievements later, trust me.",
            style:{"border-radius":"0%"},
            done() {return player.f.ftype==4},
            tooltip: "Reach stage 4.",
        }, 
        122: {
            name: "Pre-stage",
            style:{"border-radius":"0%"},
            done() {return hasUpgrade("f",332)},
            tooltip: "Unlock prestige.",
        }, 
        123: {
            name: "10000 points seem like a lot",
            style:{"border-radius":"0%"},
            done() {return player.points.gte(1e4)&&player.f.ftype==4},
            tooltip: "Get 10000 points in stage 4.",
        },
        124: {
            name: "Tier II prestige boost",
            style:{"border-radius":"0%"},
            done() {return player.p.points.gte(2e6)},
            tooltip: "Get 2e6 prestige points",
        },
        125: {
            name: "RQ==.",
            style:{"border-radius":"0%","border-color":"rgb(65,205,225)"},
            done() {return player.p.points.gte(1e8)&&player.sp.points.eq(0)},
            tooltip(){ return `Get 1e8 prestige with 0 SP.<br>reward:Double prestige gain.`},
        },
        131: {
            name: "Super pre-stage",
            style:{"border-radius":"0%"},
            done() {return hasUpgrade("f",333)},
            tooltip: "Unlock super prestige.",
        },
        132: {
            name: "Milestones are based on the best",
            style:{"border-radius":"0%"},
            done() {return player.sp.points.gte(10)},
            tooltip: "Get 10 SP points.",
        },
        133: {
            name: "Going up per-grade",
            style:{"border-radius":"0%"},
            done() {return hasUpgrade("f",334)},
            tooltip: "Unlock prestige upgraders.",
        },
        134: {
            name: "40 disagrees with infinity",
            style:{"border-radius":"0%"},
            done() {return player.points.gte(1e40)&&player.f.ftype==4},
            tooltip: "Get 1e40 points in stage 4.",
        },
        135: {
            name: "SQ==.",
            style:{"border-radius":"0%","border-color":"rgb(65,205,225)"},
            done() {return player.points.gte(1e52)&&player.hp.points.eq(0)&&player.f.ftype==4},
            tooltip(){ return `Get 1e52 points with 0 HP.<br>reward:5x SP gain.`},
        },
        141: {
            name: "Once in a blue moon....",
            style:{"border-radius":"0%"},
            done() {return hasUpgrade("f",335)},
            tooltip: "Unlock hyper prestige.",
        },
        142: {
            name: "Cant hold all these prestiges",
            style:{"border-radius":"0%"},
            done() {return player.p.points.gte(1e75)},
            tooltip: "Get over 1e75 prestige points.",
        },
        143: {
            name: "Bot Boost Booster",
            style:{"border-radius":"0%"},
            done() {return hasUpgrade("hp",14)},
            tooltip: `Buy "why auto".`,
        },
        144: {
            name: "Some challenges await",
            style:{"border-radius":"0%"},
            done() {return hasUpgrade("f",341)},
            tooltip: `Unlock challenges.`,
        },
        145: {
            name: "Uw==",
            style:{"border-radius":"0%","border-color":"rgb(65,205,225)"},
            done() {return player.points.gte(player.c.goal.times(1e5))&&player.c.isbegun},
            tooltip: `Get points over 1e5 times than the goal in a challenge.<br>reward:Divide PU cost by 25.`,
        },
        151: {
            name: "The last but not the least",
            style:{"border-radius":"0%"},
            done() {return player.c.points.gte(20)},
            tooltip: `Get 20 challenge shards.`,
        },
        152: {
            name: "Chalack Jack",
            style:{"border-radius":"0%"},
            done() {return player.c.points.gte(21)},
            tooltip: `Get 21 challenge shards.`,
        },
        153: {
            name: "Prestige depends on super",
            style:{"border-radius":"0%"},
            done() {return hasUpgrade("f",342)},
            tooltip: `Unlock super upgraders.`,
        },
        154: {
            name: "6561!",
            style:{"border-radius":"0%"},
            done() {return player.su.points.gte(4)},
            tooltip: `Get 4 super upgraders.`,
        },
        155: {
            name: "Tg==",
            style:{"border-radius":"0%","border-color":"rgb(65,205,225)"},
            done() {return player.hp.points.gte(1e45)&&player.up.points.eq(0)&&player.f.ftype==4},
            tooltip: `Get 1e45 HP points with 0 UP.<br>reward:10x HP gain.`,
        },
        161: {
            name: "Give UP",
            style:{"border-radius":"0%"},
            done() {return hasUpgrade("f",343)},
            tooltip: `Unlock ultra prestige.`,
        },
        162: {
            name: "These Qols are too late",
            style:{"border-radius":"0%"},
            done() {return hasMilestone("up",0)},
            tooltip: `Get 2 UP.`,
        },
        163: {
            name: "Bot Boot Boost Booster Boostered",
            style:{"border-radius":"0%"},
            done() {return hasUpgrade("up",15)},
            tooltip: `Buy "Hyper auto".`,
        },
        164: {
            name: "Can I have a break???",
            style:{"border-radius":"0%"},
            done() {return player.p.points.gte("1.8e308")},
            tooltip: `Get 1.8e308 prestige.`,
        },
        165: {
            name: "SQ==",
            style:{"border-radius":"0%","border-color":"rgb(65,205,225)"},
            done() {return getBuyableAmount("p",11).gte(250)&&(!(hasUpgrade("hp",14)&&hasUpgrade("up",15)))},
            tooltip: `Buy 250 "Point booster"s without buying "why auto" or "hyper auto".<br>reward:Keep auto prestige buyables on all resets.`,
        },
        171: {
            name: "[DATA ACHEIVE]",
            style:{"border-radius":"0%"},
            done() {return player.points.gte("1e1000")&&player.f.ftype==4},
            tooltip: `Get 1e1000 points in stage 4`,
        },
        172: {
            name: "Welcome, builder",
            style:{"border-radius":"0%"},
            done() {return hasUpgrade("f",344)},
            tooltip: `Unlock prestium.`,
        },
        173: {
            name: "This build is OP",
            style:{"border-radius":"0%"},
            done() {return player.pt.blv[5].gte(1)},
            tooltip: `Get 1 level of building V.`,
        },
        174: {
            name: "This build is too OP",
            style:{"border-radius":"0%"},
            done() {return player.pt.blv[3].gte(55)},
            tooltip: `Get 55 level of building III.`,
        },
        175: {
            name: "Tg==",
            style:{"border-radius":"0%","border-color":"rgb(65,205,225)"},
            done() {return player.points.gte("1e100100")&&player.r.points.eq(0)&&player.f.ftype==4},
            tooltip: `Get e100100 points with 0 rein points.<br>reward:Divide SU price by 101`,
        },
        181: {
            name: "Rein force",
            style:{"border-radius":"0%"},
            done() {return player.r.points.gte(1)},
            tooltip: `Do a reincarnation`,
        },
        182: {
            name: "Core enabled",
            style:{"border-radius":"0%"},
            done() {return player.r.rngseed1!="00"},
            tooltip: `Reach core level 1 and generate a seed.`,
        },
        183: {
            name: "Yet another reference but not the first one",
            style:{"border-radius":"0%"},
            done() {return hasMilestone("r",4)},
            tooltip: `Unlock reincarnation dimensions.`,
        },
        184: {
            name: " TICK-TOCK-BOOM",
            style:{"border-radius":"0%"},
            done() {return hasMilestone("r",6)},
            tooltip: `Unlock reincarnation challenges.`,
        },
        185: {
            name: "RQ==",
            style:{"border-radius":"0%","border-color":"rgb(65,205,225)"},
            done() {return player.r.rngseed1=="99"||player.r.rngseed2=="99"||player.r.rngseed5=="99"},
            tooltip: `Get a seed with at least one type is "99"(Can get this while the seeds are not unlocked yet).<br>reward:5x Rein points gain.`,
        },
        191: {
            name: "Dilate didn't give you something",
            style:{"border-radius":"0%"},
            done() {return player.r.rc1fin},
            tooltip: `Complete RC1`,
        },
        192: {
            name: "Call a phone,pls",
            style:{"border-radius":"0%"},
            done() {return player.r.rc2fin},
            tooltip: `Complete RC2`,
        },
        193: {
            name: "Still waving in the lonely universe",
            style:{"border-radius":"0%"},
            done() {return player.r.rc3fin},
            tooltip: `Complete RC3`,
        },
        194: {
            name: "rngrngrngrngrgn....",
            style:{"border-radius":"0%"},
            done() {return player.r.rc4fin},
            tooltip: `Complete RC4`,
        },
        195: {
            name: "Broken chains",
            style:{"border-radius":"0%","border-color":"rgb(65,205,225)"},
            done() {return player.r.rc5fin},
            tooltip: `Complete RC5.<br>reward:A congrat.`,
        },
        201: {
            name: "Speedrun pro",
            style:{"border-radius":"0%","border-color":"rgb(65,205,225)"},
            done() {return player.r.rc5time<=120},
            tooltip: `Complete RC5 in 2 minutes.`,
        },
        202: {
            name: "Speedrun master",
            style:{"border-radius":"0%","border-color":"rgb(65,205,225)"},
            done() {return player.r.rc5time<=90},
            tooltip: `Complete RC5 in 1 minute and 30 seconds.`,
        },
        203: {
            name: "Here's the extreme",
            style:{"border-radius":"0%","border-color":"rgb(65,205,225)"},
            done() {return player.r.rc5time<=60},
            tooltip: `Complete RC5 in 1 minute.`,
        },
        204: {
            name: "I can't stop being myself",
            style:{"border-radius":"0%","border-color":"rgb(65,205,225)"},
            done() {return player.r.rc5time<=50},
            tooltip: `Complete RC5 in 50 seconds.`,
        },
        205: {
            name: "Master Decoder",
            style:{"border-radius":"0%","border-color":"rgb(65,205,225)"},
            done() {return player.f.codeac},
            tooltip: `Input the right code.<br>reward:A permanently 10x point boost.`,
        },
        update(diff) {	// Added this section to call adjustNotificationTime every tick, to reduce notification timers
            adjustNotificationTime(diff);
        },
    },
    tabFormat: [
        "blank", 
        ["display-text", function() { return"Achievements:"+player.a.achievements.length+"/100" }], 
        ["display-text", function() { return`Achievements on the last column are challenging, complete them to get a bonus!(Maybe you can do them later but only in correct stage!)` }], 
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
            description(){return `Buy 1e10 buyables per tick except "TETRATE","E↓" and "T → T".`},
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