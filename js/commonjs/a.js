let counter=1;
function add(){
  return ++counter
}
setTimeout(()=>{
  ++counter;
},2000)
module.exports={
  counter,
  add
}