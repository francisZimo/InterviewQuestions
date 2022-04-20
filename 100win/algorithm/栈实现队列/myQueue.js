class MyQueue{
     stack1=[]
     stack2=[]

    push(n){
        this.stack1.push(n)
    }
    pop(){
        if(!this.stack2.length){
            while(this.stack1.length){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }
    peek(){
        if(this.stack2.length){
            return this.stack2[this.stack2.length-1]
        }
        return this.stack1[0]
    }
    empty(){
        if(!this.stack1.length&&!this.stack2.length){
            return true
        }
        return false
    }
    get length(){
        return this.stack1.length+this.stack2.length
    }
}

export default MyQueue