const mockData = {
  data: {
    // 对象
    personInfo: {
      // 对象
      name: '张三', // string
      shoppingList: [
        { name: '手机', price: 1000 },
        { name: '电脑', price: 5000 }
      ] // 默认为[]
    }
  },
  success: 0 // 0 表示成功 1 表示失败
};

// 用来判断是否是对象
const isObj = (obj) => Object.prototype.toString.call(obj).toLowerCase() == '[object object]';

if (mockData?.data?.personInfo?.shoppingList?.length > 0) {
  console.log('购物清单：');
  mockData.data.personInfo.shoppingList.forEach((item) => {
    console.log(item.name, item.price);
  });
}
