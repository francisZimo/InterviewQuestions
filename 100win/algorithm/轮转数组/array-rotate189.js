// 【189】轮转数组 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数

// 旋转数组
// pop shift
// O(n)
export function arrayRotate1(nums, k){
    const ln=nums.length
    if(ln<2){
        return nums
    }
    const step=Math.abs(k%ln)
    for(let i=0;i<step;i++){
        const item=nums.pop()
        if(nums!==null){
            nums.unshift(item)
        }
    }
    return nums
}

// concat
// O(1)
export function arrayRotate2(nums,k){
    const ln=nums.length
    if(ln<2){
        return nums
    }
    const step=Math.abs(k%ln)
    if(!step) return nums
    const start=nums.slice(-step)
    const end=nums.slice(0,ln-step)
    return start.concat(end)
}
// 备份交换
export function arrayRotate3(nums, k){
    const ln=nums.length
    const arr1=Array.from({length:ln})
    
    for(let i=0;i<ln;i++){
        arr1[i]=nums[i]
    }
    
    for(let i=0;i<ln;i++){
        nums[(i+k)%ln]=arr1[i]
    }
    return nums
}

// 旋转 🌟推荐
export function arrayRotate4(nums, k){
    
    const ln=nums.length
    k=k%ln
    reverse(nums,0,ln-1)
    reverse(nums,0,k-1)
    reverse(nums,k,ln-1)
}
function reverse(nums,s,e){
    while(s<e){
        let temp=nums[s]
        nums[s++]=nums[e]
        nums[e--]=temp
    }
}

let nums = [1,2,3,4,5,6,7]
let nums2 = [-1]
let k=3
// console.log(arrayRotate1(nums,k))
// console.log(arrayRotate2(nums,k))
// console.log(arrayRotate3(nums2,k),'==xx')
