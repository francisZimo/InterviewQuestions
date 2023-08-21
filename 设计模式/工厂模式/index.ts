// 简单工厂
class Coffee {
  constructor(public name: string) {
    this.name = name;
    console.log(this.name);
  }
}

class AmericanCoffee extends Coffee {}
class LattteCoffee extends Coffee {}
class CapuccinoCoffee extends Coffee {}

class CafeFactory {
  static order(name: string) {
    // 这种违反了开闭原则.
    switch (name) {
      case 'American':
        return new AmericanCoffee('美式咖啡');
      case 'LatteCoffee':
        return new LattteCoffee('拿铁咖啡');
      case 'CappuccinoCoffee':
        return new CapuccinoCoffee('拿铁');
      default:
        throw new Error('error');
    }
  }
}

console.log(CafeFactory.order('American'));
console.log(CafeFactory.order('LatteCoffee'));
console.log(CafeFactory.order('CappuccinoCoffee'));
