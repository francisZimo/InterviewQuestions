import {arrayRotate1,arrayRotate2,arrayRotate3} from './array-rotate189'

const rotate=arrayRotate2

describe('数组旋转',()=>{
    it('正常情况',()=>{
        const arr=[1,2,3,4,5,6,7]
        const k=3
        const res=rotate(arr,k)
        expect(res).toEqual([5,6,7,1,2,3,4])
    })

    it('0',()=>{
        const arr=[]
        const k=3
        const res=rotate(arr,k)
        expect(res).toEqual([])
    })

    it('超长',()=>{
        const arr=[1,2,3,4,5,6,7]
        const k=14
        const res=rotate(arr,k)
        expect(res).toEqual([1,2,3,4,5,6,7])
    })

    it('特例',()=>{
        const arr=[-1]
        const k=2
        const res=rotate(arr,k)
        expect(res).toEqual([-1])
    })
  
    
})