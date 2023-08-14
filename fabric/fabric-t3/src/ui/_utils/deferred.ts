type Fn = (...args: any[]) => void;
export class Deferred<T> {
  isCompleted: boolean;

  rejected: boolean;

  resolved: boolean;

  reject: Fn | null;

  resolve: Fn | null;

  promise: Promise<T>;

  then: any;

  // 非Promise方法，目前用于Dialog
  close: Fn | null;

  constructor() {
    this.isCompleted = false;
    this.rejected = false;
    this.resolved = false;
    this.reject = null;
    this.resolve = null;
    this.close = null;
    this.promise = new Promise((resolve, reject) => {
      this.reject = (...args) => {
        if (this.resolved || this.rejected) {
          return;
        }
        this.isCompleted = true;
        this.rejected = true;
        (reject as Fn).call(this, ...args);
      };
      this.resolve = (...args) => {
        if (this.resolved || this.rejected) {
          return;
        }
        this.isCompleted = true;
        this.resolved = true;
        (resolve as Fn).call(this, ...args);
      };
    });
    this.then = this.promise.then.bind(this.promise);
  }
}

export default null;
