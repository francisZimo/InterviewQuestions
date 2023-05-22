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

export function isValid(s) {
    const map = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    const stack = []
    const arr = s.split('')
    const ln = arr.length
    for (let i = 0; i < ln; i++) {
        const item = arr[i]
        if (map[item]) {
            if (stack.pop() !== map[item]) {
                return false
            }
        } else {
            stack.push(item)
        }
    }
    return arr.length === 0
};

export function isValid2(s) {
    const map = new Map(
        [
            ['}', '{'],
            [']', '['],
            [')', '(']
        ]
    )
    const arr = s.split('')
    const ln = arr.length
    const stack = []
    for (let i = 0; i < ln; i++) {
        if (map.has(arr[i])) {
            if (stack.pop() !== map.get(arr[i])) {
                return false
            }
        } else {
            stack.push(arr[i])
        }
    }
    return stack.length === 0
}