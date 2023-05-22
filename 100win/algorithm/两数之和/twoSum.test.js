import {
    twoSum
}
from './twoSum'
describe('两数字之和', () => {
    it('正常1', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = 7
        const res = twoSum(arr, k)
        expect(res).toEqual([2, 3])

    })
})