// export function arrayRoate(arr, k) {
//     const ln = arr.length
//     // k = k > ln ? Math.floor(k % ln) : k 最初
//     k = Math.abs(k % ln) // 优化
//     const start = ln - k;
//     console.log(start, '==start')
//     const pre = arr.slice(0, start)
//     const end = arr.slice(start)
//     return end.concat(pre)
// }

export function arrayRoate(arr, k) {
    const ln = arr.length
    if (ln < 2) return arr
    k = Math.abs(k % ln)
    reverse(arr, 0, ln - 1)
    reverse(arr, 0, k - 1)
    reverse(arr, k, ln - 1)
    return arr
}

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start]
        arr[start++] = arr[end]
        arr[end--] = temp
    }

}