let daymaxprijestupna = [0,31,29,31,30,31,30,31,31,30,31,30,31]
let daymaxobicna = [0,31,28,31,30,31,30,31,31,30,31,30,31]
let rezultat = 0

function dayofyear(dan, mjesec, godina){
    if(godina%4==0){
        for(let i=mjesec; i>0; i--){
            rezultat += daymaxprijestupna[i-1]

        }
        rezultat += dan
    }
    else {
        for(let i=mjesec; i>0; i--){
            rezultat += daymaxobicna[i-1]

        }
        rezultat += dan
    }
    return(rezultat)
}
module.exports = dayofyear