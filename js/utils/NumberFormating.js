
function exponentialFormat(num, precision, mantissa = true) {
    let e = num.log10().floor()
    let m = num.div(Decimal.pow(10, e))
    if (m.toStringWithDecimalPlaces(precision) == 10) {
        m = decimalOne
        e = e.add(1)
    }
    e = (e.gte(1e9) ? format(e, 3) : (e.gte(10000) ? commaFormat(e, 0) : e.toStringWithDecimalPlaces(0)))
    if (mantissa)
        return m.toStringWithDecimalPlaces(precision) + "e" + e
    else return "e" + e
}

function commaFormat(num, precision) {
    if (num === null || num === undefined) return "NaN"
    if (num.mag < 0.001) return (0).toFixed(precision)
    let init = num.toStringWithDecimalPlaces(precision)
    let portions = init.split(".")
    portions[0] = portions[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    if (portions.length == 1) return portions[0]
    return portions[0] + "." + portions[1]
}


function regularFormat(num, precision) {
    if (num === null || num === undefined) return "NaN"
    if (num.mag < 0.0001) return (0).toFixed(precision)
    if (num.mag < 0.1 && precision !==0) precision = Math.max(precision, 4)
    return num.toStringWithDecimalPlaces(precision)
}

function fixValue(x, y = 0) {
    return x || new Decimal(y)
}

function sumValues(x) {
    x = Object.values(x)
    if (!x[0]) return decimalZero
    return x.reduce((a, b) => Decimal.add(a, b))
}

function format(decimal, precision = 2, small) {
    small = small || modInfo.allowSmall
    decimal = new Decimal(decimal)
    if (isNaN(decimal.sign) || isNaN(decimal.layer) || isNaN(decimal.mag)) {
        player.hasNaN = true;
        return "NaN"
    }
    if (decimal.sign < 0) return "-" + format(decimal.neg(), precision, small)
    if (decimal.mag == Number.POSITIVE_INFINITY) return "Infinity"
    if (decimal.gte("eeee1000")) {
        var slog = decimal.slog()
        if (slog.gte(1e6)) return "F" + format(slog.floor())
        else return Decimal.pow(10, slog.sub(slog.floor())).toStringWithDecimalPlaces(3) + "F" + commaFormat(slog.floor(), 0)
    }
    else if (decimal.gte("1e1000000")) return exponentialFormat(decimal, 0, false)
    else if (decimal.gte("1e10000")) return exponentialFormat(decimal, 0)
    else if (decimal.gte(1e9)) return exponentialFormat(decimal, precision)
    else if (decimal.gte(1e3)) return commaFormat(decimal, 0)
    else if (decimal.gte(0.0001) || !small) return regularFormat(decimal, precision)
    else if (decimal.eq(0)) return (0).toFixed(precision)

    decimal = invertOOM(decimal)
    let val = ""
    if (decimal.lt("1e1000")){
        val = exponentialFormat(decimal, precision)
        return val.replace(/([^(?:e|F)]*)$/, '-$1')
    }
    else   
        return format(decimal, precision) + "⁻¹"

}

function formatWhole(decimal) {
    decimal = new Decimal(decimal)
    if (decimal.gte(1e9)) return format(decimal, 2)
    if (decimal.lte(0.99) && !decimal.eq(0)) return format(decimal, 2)
    return format(decimal, 0)
}

function formatTime(s) {
    if (s < 60) return format(s) + "s"
    else if (s < 3600) return formatWhole(Math.floor(s / 60)) + "m " + format(s % 60) + "s"
    else if (s < 86400) return formatWhole(Math.floor(s / 3600)) + "h " + formatWhole(Math.floor(s / 60) % 60) + "m " + format(s % 60) + "s"
    else if (s < 31536000) return formatWhole(Math.floor(s / 86400) % 365) + "d " + formatWhole(Math.floor(s / 3600) % 24) + "h " + formatWhole(Math.floor(s / 60) % 60) + "m " + format(s % 60) + "s"
    else return formatWhole(Math.floor(s / 31536000)) + "y " + formatWhole(Math.floor(s / 86400) % 365) + "d " + formatWhole(Math.floor(s / 3600) % 24) + "h " + formatWhole(Math.floor(s / 60) % 60) + "m " + format(s % 60) + "s"
}

function formatTimeLong(s) {
	s = new Decimal(s)
	let years = s.div(31556952)
	let mlt = verse(years)
	let arv1 = [1,1e15,1e30,1e45,1e60,1e75,1e90,1e105,1e120,1e135]
	let arv2 = ["","mega","giga","tera","peta","exa","zetta","yotta","ronna","quetta"]
	let id = 0;
		if (mlt[0].gte(arv1[arv1.length - 1])) id = arv1.length - 1;
		else {
			while (mlt[0].gte(arv1[id])) id++;
			if (id > 0) id--;
		}
	let mverse = arv2[id]+(arv2[id]!=""?"-":"")+mlt[1]
	if (mlt[1]=="multi") {
		mverse = arv2[id]
		if (arv2[id]=="") mverse = "multi"
	}
	if (years.gte("6pt9")) return format(slog(years).pow10().div(9e6)) + " omniverse " + pluralize(slog(years).pow10().div(9e6),"age","ages")
	if (years.gte("eee56") && years.lt("eee69")) return format(years.log10().log10().div(1e56)) + " new big " + pluralize(years.log10().log10().div(1e56),"bang","bangs")
	if (years.gte("ee120") && years.lt("ee129")) return format(years.log10().div(1e120)) + " big " + pluralize(years.log10().div(1e120),"rip","rips")
	if (years.gte("ee9")) return format(mlt[0].div(arv1[id])) + " " + mverse +"verse " + pluralize(mlt[0].div(arv1[id]),"age","ages")
	let scale1 = [5.39121e-44,1e-30,1e-27,1e-24,1e-21,1e-18,1e-15,1e-12,1e-9,1e-6,0.001,1,60,3600,86400,31556952,31556952e3,31556952e9,435e15,31556952e40,31556952e100]
	let scale2 = [" Planck Times"," quectoseconds"," rontoseconds"," yoctoseconds"," zeptoseconds"," attoseconds"," femtoseconds"
	," picoseconds"," nanoseconds"," microseconds"," milliseconds"," seconds"," minutes"
	," hours", " days", " years", " millenia", " aeons", " universe ages", " degenerate eras", " black hole eras"]
	let scalesing = [" Planck Time"," quectosecond"," rontosecond"," yoctosecond"," zeptosecond"," attosecond"," femtosecond"
	," picosecond"," nanosecond"," microsecond"," millisecond"," second"," minute"
	," hour", " day", " year", " millenium", " aeon", " universe age", " degenerate era", " black hole era"]
	let id2 = 0;
		if (s.gte(scale1[scale1.length - 1])) id2 = scale1.length - 1;
		else {
			while (s.gte(scale1[id2])) id2++;
			if (id2 > 0) id2--;
		}
	let mag = s.div(scale1[id2])
	return format(mag) + pluralize(mag,scalesing[id2],scale2[id2])
}

function verse(x) {
	s = slog(new Decimal(x)).sub(Decimal.log10(9))
	let verse1 = [2,3,4,5]
	let verse2 = ["multi","meta","xeno","hyper"]
	let id = 0;
		if (s.gte(verse1[verse1.length - 1])) id = verse1.length - 1;
		else {
			while (s.gte(verse1[id])) id++;
			if (id > 0) id--;
		}
	let mag = slogadd(x,-verse1[id]+1).div(1e9)
	return [mag,verse2[id]]
}

function slog(n){ // slog10(x), .slog is bugged >=eee9e15
	n = new Decimal(n)
	return Decimal.add(n.layer,new Decimal(n.mag).slog())
}

function slogadd(n,add){
	n = new Decimal(n)
	return Decimal.tetrate(10,slog(n).add(add))
}

function pluralize(n,singular,plural,round=false) {
	n = new Decimal(n)
	if ((n.eq_tolerance(1,0.0005) || (n.round().eq(1) && round==true && n.gte(1)))) return singular
	return plural
}

function toPlaces(x, precision, maxAccepted) {
    x = new Decimal(x)
    let result = x.toStringWithDecimalPlaces(precision)
    if (new Decimal(result).gte(maxAccepted)) {
        result = new Decimal(maxAccepted - Math.pow(0.1, precision)).toStringWithDecimalPlaces(precision)
    }
    return result
}

// Will also display very small numbers
function formatSmall(x, precision=2) { 
    return format(x, precision, true)    
}

function invertOOM(x){
    let e = x.log10().ceil()
    let m = x.div(Decimal.pow(10, e))
    e = e.neg()
    x = new Decimal(10).pow(e).times(m)

    return x
}