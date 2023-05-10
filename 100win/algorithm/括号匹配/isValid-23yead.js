// export default function isValid(s) {
//     const map = {
//         ')': '(',
//         ']': '[',
//         '}': '{'
//     }
//     const arr = s.split('')
//     const stack = []
//     const ln = arr.length
//     for (let i = 0; i < ln; i++) {
//         if (map[arr[i]]) {
//             if (stack.pop() !== map[arr[i]]) {
//                 return false
//             }
//         } else {
//             stack.push(arr[i])
//         }
//     }
//     return stack.length === 0
// }

var isValid = function (s) {
    const map = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    const stack = []
    const arr = s.split('')
    console.log('arr', arr, '==arr')
    const ln = arr.length
    for (let i = 0; i < ln; i++) {
        const item = arr[i]
        if (map[item]) {
            if (stack.pop() !== map[item]) {
                return false
            }
        } else {
            console.log('push', item, '==item')
            stack.push(item)
        }
    }
    return arr.length === 0
};

export default isValid;