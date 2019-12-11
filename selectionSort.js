let selectionSort = arr => {
    if (arr.length > 2) {
        let minIndex = arr.indexOf(getMinValue(arr))
        // array.splice(start[, deleteCount[, item1[, item2[, ...]]]]) 表示从某索引开始删除数组中的元素
        let minValue = arr.splice(minIndex, 1)
        return minValue.concat(selectionSort(arr))
    } else {
        return arr[0] < arr[1] ? arr : arr.reverse()
    }
}

let getMinValue = arr => {
    if (arr.length > 2) {
        // slice([begin[, end]])从begin索引开始提取到end（不包括end）
        return getMinValue([arr[0], getMinValue(arr.slice(1))])
    } else {
        return arr[0] < arr[1] ? arr[0] : arr[1]
    }
}

let numbers = selectionSort([1, 3, 6, 2, 7, 23, 3])
console.log(numbers)