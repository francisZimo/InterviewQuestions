function throttle(fn, interval = 1000) {
    let timer;
    return function () {
        if (!timer) {
            fn.apply(this, arguments);
            timer = setTimeout(function () {
                timer = null;
            }, interval);
        }
    };
}
class CountDuration {
    //统计批改时长
    constructor() {
        this.idleTimer = null; // 计时器
        this.isIdle = false; // 是否处于空闲状态
        this.startTime = 0; // 开始时间
        this.activeCorrectionTime = 0; //有效批改时间
        this.idleStartTime = 0; // 空闲开始时间
        this.totalTime = 0; // 总时长

        this.mousedownEvent = throttle(() => {
            console.log('mouseDown')
            this.resumeTimer();
        })
        this.mousemoveEvnet =
            throttle(() => {
                console.log('mouseDown')
                this.resumeTimer();
            })
        this.keydownEvent = throttle(() => {
            console.log('keydown')
            this.resumeTimer();
        })
    }


    // 开始监听
    start() {
        // 处理防抖截流
        // 监听鼠标和键盘事件
        document.addEventListener('mousedown', this.mouseDownEvent);
        document.addEventListener('mousemove', this.mousemoveEvnet);
        document.addEventListener('keydown', this.keydownEvent);
    }
    removeListener() {
        document.removeEventListener('mousedown', this.mouseDownEvent);
        document.removeEventListener('mousemove', this.mousemoveEvnet);
        document.removeEventListener('keydown', this.keydownEvent);
    }

    // 重置 空闲
    resetIdleTimer() {
        clearTimeout(this.idleTimer);
        this.idleTimer = setTimeout(() => {
            this.handleIdel()
        }, 5000);
    }

    // 处理空闲
    handleIdel() {
        if (!this.isIdle) {
            this.idleStartTime = Date.now();
            console.log('用户暂停了批改')
            this.isIdle = true;
            clearTimeout(this.idleTimer) // 停止计时器
        }
    }

    // 恢复批改
    resumeTimer() {
        console.log('激活批改')
        this.isIdle = false
        if (this.idleStartTime) {
            console.log('有暂存时间')
            this.idleStartTime = 0;
            this.startTime = Date.now();
        } else {
            console.log('无暂存时间')
            this.activeCorrectionTime += Date.now() - this.startTime;
            this.startTime = Date.now()
        }
        console.log(this.activeCorrectionTime / 1000, '==有效批改时间')
        this.resetIdleTimer()
    }

    // 开始计时
    startCorrection() {
        if (!this.startTime) {
            this.startTime = Date.now();
            this.resetIdleTimer();
            this.start()
        }
    }

    stopCorrectionTimer() {
        clearTimeout(this.idleTimer);
        this.removeListener()
    }
    // 获取有效的批改时间
    getTotalCorrectionTime() {
        this.stopCorrectionTimer()
        return this.activeCorrectionTime / 1000;
    }
}

export default CountDuration;