// function moveZero(arr){
//     if(!arr.length){
//         return []
//     }
//     let zeroIndex=-1
//     for(let  i=0;i<arr.length;i++){
//         if(arr[i]===0&&zeroIndex<0){
//             zeroIndex=i
//         }
//         if(arr[i]&&zeroIndex>=0){
//             const temp=arr[i]
//             arr[i]=arr[zeroIndex]
//             arr[zeroIndex]=temp

//             zeroIndex++
//         }
//     }
// }

function moveZero1(arr){

    let slow=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]){
            arr[slow]=arr[i]
            slow++
        }
    }
    for(let i=slow;i<arr.length;i++){
        arr[i]=0
    }
}
let s=[1,0,3,2,0,9]
moveZero1(s)
console.log(s,'==1')