// Array 数组系列
// array 两种方式
let arr:string[]=['1','2']
let arr2:Array<string>=['1','2']

//联合类型数组
let arr3:(number|string)[]
let arr4=[1,'v',2,'c']

// 指定对象成员数组 <项目中遍历数组结构时候需要>
interface ArrObj{
    name:string,
    age:number
}
let arr5:ArrObj[]=[{name:'ximi',age:22}]

// 函数
// 函数声明
function sum(x:number,y:number):number{
    return x+y
}
// 函数表达式
let mySum:(x:number,y:number)=>number=function(x:number,y:number):number{
    return x+y
}

// 用接口定义函数类型
interface SearchFunc{
    (x:number,y:number):number
}
let mysum2:SearchFunc=function(x:number,y:number):number{
    return x+y
}
// 可选参数 可选参数后面不允许再出现必需参数
function buildName(firstName:string,lastName?:string){
    if(lastName){
        return firstName+lastName
    }else{
        return firstName
        }
}
let tomcat=buildName('tom','cat')
let tom=buildName('Tom')

// 参数默认
function buildName2(firstName:string,lastName:string='cat'){

    return firstName+lastName
}

// 剩余参数
function push(ary:any[],...item:any[]){
    item.forEach(item=>{
        ary.push(item)
    })
}
let a:any[]=[]
push(a,1,2,3)

// 函数重载
//函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力
type Types=string | number

function add(a:Types,b:Types){
    if(typeof a==='string'||typeof b==='string'){
        return a.toString()+b.toString()
    }
    return a+b
}
const result=add('1','2')
result.split() // number 没有split

function add1(a:string,b:string):string
function add1(a:string,b:number):string
function add1(a:number,b:string):string
function add1(a:number,b:number):number
function add1(a:Types,b:Types){
    if(typeof a==='string'||typeof b==='string'){
        return a.toString()+b.toString()
    }
    return a+b
}
const result2=add1('1','2')
result2.split('')

// 元组
let tuple_x:[string,number]

tuple_x=['hello',12] //ok
tuple_x=[11,11] // error

// 元组 解构赋值
let employee:[number,string]=[1,'hasky']
let [id,username]=employee
console.log(`id:${id}`)
console.log(`username:${username}`)

//元组可选元素
let optionalTuple:[string,boolean?];
optionalTuple=["hello",true]
optionalTuple=['hello']

// 坐标系举例
type Point = [number, number?, number?];

const x: Point = [10]; // 一维坐标点
const xy: Point = [10, 20]; // 二维坐标点
const xyz: Point = [10, 20, 10]; // 三维坐标点

console.log(x.length); // 1
console.log(xy.length); // 2
console.log(xyz.length); // 3

// 元组类型的剩余元素
//  例如，[number, ...string[]] 表示带有一个 number 元素和任意数量string 类型元素的元组类型
type RestTypleType=[number,...string[]]
let restTuple:RestTypleType=[666,'x','22']

// 只读元组类型
const point:readonly[number,number]=[10,20]
point[0]=1; // Cannot assign to '0' because it is a read-only property.
point.push(0) // Property 'push' does not exist on type 'readonly [number, number]'.
point.pop() // Property 'pop' does not exist on type 'readonly [number, number]'.
point.splice(1,2) // Property 'splice' does not exist on type 'readonly [number, number]'.


