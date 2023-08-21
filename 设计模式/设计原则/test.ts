abstract class Animal {
  abstract speak(): void;
  abstract name: string;
  handleEvents() {
    if (this.name === 'dog') {
      console.log('我是霸王 🦖');
      this.speak();
    } else {
      this.speak();
    }
  }
}

class Dog extends Animal {
  public name = 'dog';
  speak(): void {
    console.log('汪汪');
  }
}
class Cat extends Animal {
  public name = 'cat';
  speak(): void {
    console.log('喵喵');
  }
}

var dog = new Dog();
var cat = new Cat();
dog.handleEvents();
cat.handleEvents();
