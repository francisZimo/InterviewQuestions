// 复杂工厂
// 在简单工厂的基础上创建 工厂类

// 在case语句中而非直接创建咖啡，而是由咖啡工厂类 创建
// switch (name) {
//     case 'American':
//       return new AmericanCoffee('美式咖啡');
//     case 'LatteCoffee':
//       return new LattteCoffee('拿铁咖啡');
//     case 'CappuccinoCoffee':
//       return new CapuccinoCoffee('拿铁');
//     default:
//       throw new Error('error');
//   }
