// import isValid from './isValid'
import {
    isValid as test,
    isValid2
} from './isValid-23yead'

const isValid = isValid2

describe('括号匹配', () => {
    it('匹配1', () => {
        const str = "()"
        const value = isValid(str)
        expect(value).toBe(true)
    })
    it('匹配', () => {
        const str = "()[]{}"
        const value = isValid(str)
        expect(value).toBe(true)
    })
    it('不匹配1', () => {
        const str = "(}"
        const value = isValid(str)
        expect(value).toBe(false)
    })
    it('不匹配2', () => {
        const str = "}"
        const value = isValid(str)
        expect(value).toBe(false)
    })
})