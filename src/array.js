let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function filtriranje(broj){
    return broj>5
}
let filtriraniniz = niz.filter(filtriranje)

function mapiranje(broj){
    return broj*3
}
let mapiraniniz = niz.map(mapiranje)

let reduciraniniz = niz.reduce(function(broj, suma){
    return broj + suma
}, 0)
console.log("filter: ", filtriraniniz)
console.log("map: ", mapiraniniz)
console.log("reduce: ", reduciraniniz)

