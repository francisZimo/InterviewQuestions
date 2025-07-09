// 1. 事件聚合器（全局事件中心）
class EventAggregator {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  publish(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => callback(data));
    }
  }
}

// 2. 中介者（订单协调员）
class OrderMediator {
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
    this.modules = {
      inventory: new InventoryModule(),
      payment: new PaymentModule(),
      notification: new NotificationModule(),
    };

    // 订阅相关事件
    this.eventAggregator.subscribe('order:placed', this.handleOrder.bind(this));
  }

  handleOrder(orderData) {
    console.log(`[Mediator] 开始处理订单 #${orderData.id}`);

    // 协调各模块工作流程
    const inventorySuccess = this.modules.inventory.checkStock(orderData);
    if (!inventorySuccess) {
      this.eventAggregator.publish('order:failed', {
        orderId: orderData.id,
        reason: '库存不足',
      });
      return;
    }

    const paymentSuccess = this.modules.payment.processPayment(orderData);
    if (!paymentSuccess) {
      this.eventAggregator.publish('order:failed', {
        orderId: orderData.id,
        reason: '支付失败',
      });
      return;
    }

    this.modules.notification.sendConfirmation(orderData);
    this.eventAggregator.publish('order:completed', orderData);
  }
}

// 3. 业务模块
class InventoryModule {
  checkStock(order) {
    const hasStock = Math.random() > 0.2; // 模拟80%成功率
    console.log(`[库存] ${hasStock ? '库存检查通过' : '库存不足'}`);
    return hasStock;
  }
}

class PaymentModule {
  processPayment(order) {
    const success = Math.random() > 0.3; // 模拟70%成功率
    console.log(`[支付] ${success ? '支付成功' : '支付失败'}`);
    return success;
  }
}

class NotificationModule {
  sendConfirmation(order) {
    console.log(`[通知] 已发送订单 #${order.id} 确认邮件`);
  }
}

// 4. 使用示例
const eventAggregator = new EventAggregator();
const orderMediator = new OrderMediator(eventAggregator);

// 订阅全局事件
eventAggregator.subscribe('order:completed', (order) => {
  console.log(`[全局] 订单 #${order.id} 处理完成！`);
});

eventAggregator.subscribe('order:failed', (data) => {
  console.log(`[全局] 订单 #${data.orderId} 失败: ${data.reason}`);
});

// 模拟用户下单
function placeOrder() {
  const orderId = Math.floor(Math.random() * 1000);
  console.log(`\n用户下单 #${orderId}`);
  eventAggregator.publish('order:placed', {
    id: orderId,
    items: ['商品A', '商品B'],
    total: 99.99,
  });
}

// 测试
placeOrder();
placeOrder();
placeOrder();
