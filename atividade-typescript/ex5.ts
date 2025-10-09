function separarPares(arr:Array<number>) {
    let res = arr.filter(i => i % 2 == 0)
    return res
}

var ex5Array = [8, 3, 9, 5, 6, 12]

console.log(separarPares(ex5Array))