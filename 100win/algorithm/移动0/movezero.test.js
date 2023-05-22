import {
    moveZero1,
    moveZero2
} from './movezero'
const moveZero = moveZero2
describe('移动0', () => {
    it('正常', () => {
        const arr = [1, 0, 0, 2, 3]
        const res = moveZero(arr)
        expect(res).toEqual([1, 2, 3, 0, 0])
    })
})