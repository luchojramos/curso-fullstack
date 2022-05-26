let start = new Date().getTime() / 1000

prompt("Ingrese su nombre crack")

let end = new Date().getTime() / 1000

let res = end - start

let resSec = (res % 60).toFixed(3)
let resMin = ((res / 60) % 60).toFixed(0)
let resHour = (res / 360).toFixed(0)

let msg = "Se tardaron " + resSec + " segundos"
if(resMin >= 1) {
    msg = "Se tardaron " + resMin + " min y " + resSec + " segundos"
    if (resHour >= 1) {
        msg =  "Se tardaron " + resHour + " horas, " + resMin + " min y " + resSec + " segundos"
    }
}

alert(msg)


console.log(start,typeof(start))
console.log(end,typeof(end))
console.log(res,typeof(res))
console.log(resSec,typeof(resSec))
console.log(resMin,typeof(resMin))
console.log(resHour,typeof(resHour))