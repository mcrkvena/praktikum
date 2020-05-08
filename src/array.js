let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let filtriraniniz = niz.filter(function(broj){
    return broj >5
})

let mapiraniniz = niz.map(function(broj){
    return broj*3
})

let reduciraniniz = niz.reduce(function(broj, suma){
    return broj + suma
}, 0)

console.log("filter: ", filtriraniniz)
console.log("map: ", mapiraniniz)
console.log("reduce: ", reduciraniniz)

