export class CanvasHistory {
  public canvas: any;
  public history: any[];
  public currentStep: number;
  constructor(canvas: any) {
    this.canvas = canvas;
    this.history = [];
    this.currentStep = -1;
  }
  save() {
    // 清除currentStep之后的操作记录
    if (this.currentStep < this.history.length - 1) {
      this.history = this.history.slice(0, this.currentStep + 1);
    }
    // 将当前操作记录存入history数组
    const historyItem = {
      canvasState: JSON.stringify(this.canvas),
    };

    this.history.push(historyItem);

    console.log(this.history, '==save');
    this.currentStep++;
  }
  undo() {
    if (this.currentStep > -1) {
      const historyItem = this.history[this.currentStep];
      console.log(historyItem, '==historyItem');
      this.canvas.loadFromJSON(historyItem.canvasState, () => {
        this.canvas.renderAll();
        this.currentStep--;
      });
    }
  }

  redo() {
    // 清除currentStep之后的操作记录
    if (this.currentStep < this.history.length - 1) {
      this.history = this.history.slice(0, this.currentStep + 1);
    }
    // 将当前操作记录存入history数组
    const historyItem = {
      canvasState: JSON.stringify(this.canvas),
    };
    this.history.push(historyItem);
    this.currentStep++;
  }
}

// CanvasHistory.prototype.save = function () {
//   // 清除currentStep之后的操作记录
//   if (this.currentStep < this.history.length - 1) {
//     this.history = this.history.slice(0, this.currentStep + 1);
//   }
//   // 将当前操作记录存入history数组
//   const historyItem = {
//     canvasState: JSON.stringify(this.canvas),
//   };
//   this.history.push(historyItem);
//   this.currentStep++;
// };

// CanvasHistory.prototype.undo = function () {
//   if (this.currentStep < this.history.length - 1) {
//     this.currentStep++;
//     const historyItem = this.history[this.currentStep];
//     this.canvas.loadFromJSON(historyItem.canvasState, () => {
//       this.canvas.renderAll();
//     });
//   }
// };

// CanvasHistory.prototype.redo = function () {
//   if (this.currentStep < this.history.length - 1) {
//     this.currentStep++;
//     const historyItem = this.history[this.currentStep];
//     this.canvas.loadFromJSON(historyItem.canvasState, () => {
//       this.canvas.renderAll();
//     });
//   }
// };
