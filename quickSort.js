let quickSort = arr => {
    if (arr.length <= 1) return arr
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr.splice(pivotIndex, 1)[0]
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        arr[i] <= pivot ? left.push(arr[i]) : right.push(arr[i])
    }
    return quickSort(left).concat([pivot], quickSort(right))
}

let numbers = quickSort([1, 5, 6, 23, 56, 3, 645, 7, 32, 26])
console.log(numbers)