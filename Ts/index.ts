
// function handle<T extends string >(a:T,b:T):T;
// function handle<T extends number|string >(a:T,b:T){
//     return a+b
// }

// console.log(handle('1','2'))
// console.log(handle<number>(1,2))


// class GenericNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };

// function f(a: string, b: string): string;
// function f(a: number, b: number): number;
function f(a: string | number, b: string | number) {
  if (typeof a === 'string' || typeof  b === 'string') {
    return `${a}:${b}`;
  }
  return a + b;
}
f(2, 3); // Ok
f(1, 'a'); // Error
f('a', 2); // Error
f('a', 'b'); // Ok

