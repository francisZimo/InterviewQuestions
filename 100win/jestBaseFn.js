const add =function(a,b){
    return a+b
}
// expect(add(1,2)).tobe(13)
function expect(cbRes){
    console.log()
    return {
        tobe:(nums)=>{
            return cbRes===nums
        }
    }
}
console.log(expect(add(1,2)).tobe(3))
console.log(expect(add(1,2)).tobe(4))