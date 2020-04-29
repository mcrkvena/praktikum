let rimski = ["I","II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]
let arapski = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let brojac=1
function roman(brojac){
    for(let i=9;i>=0;i--){
        if (((brojac%arapski[i])==0)&&(brojac/arapski[i]==1)){return rimski[i];}
    }
}

module.exports = roman