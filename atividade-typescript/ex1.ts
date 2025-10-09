function calcularQuadrado1(arr:Array<number>) {
    for (let i = 0; i < arr.length; i++){
        return(arr[i]**2)
    }
}

function calcularQuadrado2(arr:Array<number>) {
    arr.forEach(i => {
        return i**2
    });
}


var exArray = [3,5,7,3,8,9,1]
console.log(calcularQuadrado1(exArray))
console.log(calcularQuadrado2(exArray))

