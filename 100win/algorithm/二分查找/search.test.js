import {
    search
} from './search'
describe('二分', () => {
    it('正常', () => {
        const arr = [2, 3, 4, 6, 7];
        const target = 4;
        const res = search(arr, target)
        expect(res).toBe(2)
    })
})