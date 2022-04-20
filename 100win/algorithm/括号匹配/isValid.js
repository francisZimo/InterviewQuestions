// 括号匹配
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const map={
        '}':'{',
        ')':'(',
        ']':'['
    }
    const arr=s.split('')
    const ln=arr.length
    const stack=[]
    for(let i=0;i<ln;i++){
        const item=arr[i]
        if(map[item]){
            if(stack.length===0||stack.pop()!==map[item]){
                return false
            }
        }else{
            stack.push(item)
        }
    }
    return stack.length===0
};
export default isValid