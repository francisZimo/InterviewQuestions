declare function func(name:string):string
declare function func(name:number):number
func(9)
func('p')

interface Fn{
    (name:string):string;
    (name:number):number;
}

declare const func2:Fn
func(2)
func('3')

type Fn2=((name:string)=>string)&((name:number)=>number)
declare const fun3:Fn2
fun3(1)
fun3('22')