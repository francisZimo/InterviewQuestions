/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 function ListNode(val) {
        //  this.val = val;
        // this.next = null;
        return{
            val:val,
            next:null
        }
     }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
  export const reverseList=function (head) {
    let pre=null
    while(head){
        const next=head.next
        head.next=pre
        pre=head
        head=next
    }
    return pre
};

const reverseList1=function(head){
    let pre=null
    while(head){
        const next=head.next
        head.next=pre
        pre=head
        head=next
    }
    return pre
}

export const createListNode= function (arr){
    if(!arr||!arr.length) return null
    // const head=new ListNode(0)
    const head= ListNode(0)
    let tempNode=head
    for(let i=0;i<arr.length;i++){
        // const newNode=new ListNode(arr[i])
        const newNode= ListNode(arr[i])
        tempNode.next=newNode
        tempNode=newNode
    }
    return head.next
   
}
const createListNode1=function(arr){
    if(!arr||!arr.length) return null
    const head=ListNode(0)
    let tempNode=head
    for(let i=0;i<arr.length;i++){
        const item= ListNode(arr[i])
        tempNode.next=item
        tempNode=item
    }
    return head.next
}
// let s=[100,200,300]
// console.log(createListNode(s))