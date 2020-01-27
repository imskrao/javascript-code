const arr = [2, 5, 5, 6, 9, 19, 26, 45, 69]
const x = 6
const start = 1
const end = arr.length

let binarySearch = (arr, x, start, end) => {
    if (start > end) {
        return false
    }

    let mid = Math.floor((start + end) / 2)

    if (arr[mid] === x) {
        return true
    } else if (arr[mid] > x) {
        return binarySearch(arr, x, start, mid - 1)
    } else {
        return binarySearch(arr, x, mid + 1, end)
    }
}

if (binarySearch(arr, x, start, end)) {
    console.log('Element found!')
} else {
    console.log('Element not found!')
}