export function search(arr, target) {
    const ln = arr.length
    let left = 0,
        right = ln - 1;
    while (left <= right) {
        // const middle = (left + right) >> 1
        const middle = left + (right - left) >> 1
        const item = arr[middle]
        if (item === target) {
            return middle
        } else if (item < target) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return -1;

}