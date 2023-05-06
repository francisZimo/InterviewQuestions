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

type ListItem = ElementOfArr<typeof demo>;
type keyofEle<T> = keyof ElementOfArr<T>;
type K = keyofEle<typeof demo>;

function getValArrayOfObj<
  T extends any[],
  K extends keyofEle<T>,
  E = ElementOfArr<T>
>(t: T, k: K) {
  return t.map(({ [k]: v }: E) => {
    return v;
  });
}
const res = getValArrayOfObj(demo, 'firstctgyId');
console.log(res);
