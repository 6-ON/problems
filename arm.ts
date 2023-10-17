const num: number = 12
let pws: number = 0
const str: string = num.toString()
str.split('').forEach((n) => {
    pws += Math.pow(+n, str.length)
})
console.log(pws === num ? 'Armstrong' : 'Not Armstrong')
