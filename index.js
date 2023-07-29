const cats = ["Milo", "Otis", "Garfield"]

console.log(cats)

function destructivelyAppendCat() {
    cats.push('Ralph')
    return cats
}
console.log(destructivelyAppendCat())

function destructivelyPrependCat(catName) {
    cats.unshift('Bob')
    return cats
}

console.log(destructivelyPrependCat())

function destructivelyRemoveLastCat() {
    cats.pop()
    return cats
}

console.log(destructivelyRemoveLastCat())

function destructivelyRemoveFirstCat() {
    cats.shift()
    return cats
}

console.log(destructivelyRemoveFirstCat())

function appendCat() {
    return [...cats, "Broom"]
   
}
console.log(appendCat())

function prependCat() {
    return ["Arnold", ...cats]
}

console.log(prependCat())

function removeLastCat() {
   return [...cats.slice(0,2)]
}

console.log (removeLastCat())

function removeFirstCat() {
    return [...cats.slice(1)]
}

console.log (removeFirstCat())
