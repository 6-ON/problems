const s1: string = 'abcde'
const s2: string = 'ace'
type change = {
    type: 'replace' | 'insert' | 'delete'
    index: number
    char: string
}
const editsNeeded = (s1: string, s2: string) => {
    let n: number = 0
    const l1: number = s1.length
    const l2: number = s2.length
    n += Math.abs(l1 - l2)
    if (n > 1) return false
    for (let i = 0; i < (l1 > l2 ? l2 : l1); i++) {
        if (s1[i] !== s2[i]) n++
        if (n > 1) return false
    }
    return true
}
const editsNeeded2 = (s1: string, s2: string) => {
    let changes: Array<change> = []
    const l1: number = s1.length
    const l2: number = s2.length
    const diff: number = Math.abs(l1 - l2)
    if(l1>l2)
    s2 += '_'.repeat(diff)
    else
    s1 += '_'.repeat(diff)
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (l1 > l2) {
                changes.push({type: 'delete', index: i, char: s1[i]})
                s1 = s1.slice(0, i) + s1.slice(i + 1)
            } else if (l1 < l2) {
                changes.push({type: 'insert', index: i, char: s2[i]})
                s1 = s1.slice(0, i) + s2[i] + s1.slice(i)
            } else {
                changes.push({type: 'replace', index: i, char: s2[i]})
                s1 = s1.slice(0, i) + s2[i] + s1.slice(i + 1)
            }
        }
    }
    console.log(changes)
}
editsNeeded2(s1, s2)