let countingSort = arr => {
    let hashTable = {}, max = 0, result = []
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in hashTable)) {
            hashTable[arr[i]] = 1
        } else {
            hashTable[arr[i]] += 1
        }
        if (arr[i] > max) { max = arr[i] }
    }
    for (let j = 0; j <= max; j++) {
        if (j in hashTable) {
            for (let n = 0; n < hashTable[j]; n++) {
                result.push(j)
            }
        }
    }
    return result
}

let numbers = countingSort([1, 5, 6, 23, 56, 3, 645, 7, 32, 26])
console.log(numbers)