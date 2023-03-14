const demo = [
  {
    secondctgyId: 1,
    secctgyname: '0-2岁',
    firstctgyId: 1,
    thirdctgyId: 1,
    thirdctgyname: '图画故事',
  },
  {
    secondctgyId: 1,
    secctgyname: '0-2岁',
    firstctgyId: 1,
    thirdctgyId: 2,
    thirdctgyname: '图画故事',
  },
  {
    secondctgyId: 1,
    secctgyname: '0-2岁',
    firstctgyId: 1,
    thirdctgyId: 3,
    thirdctgyname: '益智游戏',
  },
];

type ElementOfArr<T> = T extends Array<infer U> ? U : never;

// type ListItem = ElementOfArr<typeof demo>;
// // {
// //     secondctgyId: number;
// //     secctgyname: string;
// //     firstctgyId: number;
// //     thirdctgyId: number;
// //     thirdctgyname: string;
// // }
// type K = keyof ElementOfArr<typeof demo>;
// // "secondctgyId" | "secctgyname" | "firstctgyId" | "thirdctgyId" | "thirdctgyname"
// type Keys = K[];

// let keys: Keys = ['firstctgyId'];

function getItemFromArr<T extends Object[], K extends keyof ElementOfArr<T>>(
  data: T,
  ...keys: K[]
) {}

getItemFromArr(demo, 'secctgyname');

type ItemType<T extends Object[]> = {
  [K in keyof ElementOfArr<T>]: ElementOfArr<T>[K];
};

function getItemFromArr2<
  T extends ItemType<T>[],
  K extends keyof ElementOfArr<T>
>(data: T, ...keys: K[]) {
  return data.map((item) => {
    return keys.reduce((pre, cur, index) => {
      return { ...pre, [keys[index]]: item[keys[index]] };
    }, {});
  }) as Pick<ElementOfArr<T>, K>[];
}

const res = getItemFromArr2(demo, 'firstctgyId', 'secondctgyId');
console.log(res, '==res');
// 推导 res
// Pick<{
//     secondctgyId: number;
//     secctgyname: string;
//     firstctgyId: number;
//     thirdctgyId: number;
//     thirdctgyname: string;
// }, "firstctgyId" | "secondctgyId">[]
