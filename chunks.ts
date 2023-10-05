const arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const size:number = 3
const chunkedArr: Array<Array<number>> = []
arr.forEach((e:number, i:number) => {
    if (i % size === 0) chunkedArr.push(arr.slice(i, i + size))
})
console.log(chunkedArr)

