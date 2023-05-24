import {
    createListNode,
    reverseList
} from "./reverseList"

describe('反转链表', () => {
    it('反转1', () => {
        const arr = [1, 2, 3]
        const listNode = createListNode(arr)
        const res = reverseList(listNode)
        console.log(res, '===res')
        expect(res).toEqual({
            val: 3,
            next: {
                val: 2,
                next: {
                    val: 1,
                    next: null
                }
            }
        })
    })
})