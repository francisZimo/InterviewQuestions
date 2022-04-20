
import MyQueue  from "./MyQueue";
describe('栈实现队列',()=>{
    it('test',()=>{
        const queue=new MyQueue()
        queue.push(100)
        queue.push(200)
        queue.push(300)
        expect(queue.length).toBe(3)
        expect(queue.pop()).toBe(100)
        expect(queue.peek()).toBe(200)
        queue.pop()
        queue.pop()
        expect(queue.empty()).toBe(true)
    })
})