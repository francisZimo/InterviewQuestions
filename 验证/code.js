// 中介者对象
const chatRoom = {
    users: [],
    
    // 注册用户
    register(user) {
      this.users.push(user);
      user.chatRoom = this;
    },
    
    // 发送消息
    send(message, fromUser, toUser) {
      if (toUser) {
        // 私聊
        console.log(`[${fromUser.name} 私信 ${toUser.name}]: ${message}`);
        toUser.receive(message, fromUser);
      } else {
        // 群发
        console.log(`[${fromUser.name} 对所有人说]: ${message}`);
        this.users.forEach(user => {
          if (user !== fromUser) {
            user.receive(message, fromUser);
          }
        });
      }
    }
  };
  
  // 用户类
  class User {
    constructor(name) {
      this.name = name;
      this.chatRoom = null;
    }
    
    // 发送消息
    say(message, toUser = null) {
      this.chatRoom.send(message, this, toUser);
    }
    
    // 接收消息
    receive(message, fromUser) {
      console.log(`${this.name} 收到来自 ${fromUser.name} 的消息: ${message}`);
    }
  }
  
  // 使用示例
  const john = new User('John');
  const jane = new User('Jane');
  const bob = new User('Bob');
  
  // 注册用户到聊天室
  chatRoom.register(john);
  chatRoom.register(jane);
  chatRoom.register(bob);
  
  // 用户间交互
  john.say('大家好！');          // 群发消息
  jane.say('你好 John!', john); // 私信给 John
  bob.say('有人在吗？');        // 群发消息
  