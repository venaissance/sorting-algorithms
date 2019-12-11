let mergeSort = arr => {
    let len = arr.length
    if (len === 1) return arr
    let centerIndex = Math.floor(len / 2)
    let left = arr.slice(0, centerIndex)
    let right = arr.slice(centerIndex)
    return merge(mergeSort(left), mergeSort(right))
}

let merge = (a, b) => {
    if (a.length === 0) return b
    if (b.length === 0) return a
    return a[0] < b[0] ?
        [a[0]].concat(merge(a.slice(1), b)) :
        [b[0]].concat(merge(a, b.slice(1)))
}

let numbers = mergeSort([1, 5, 6, 23, 56, 3, 645, 7, 32, 26])
console.log(numbers)