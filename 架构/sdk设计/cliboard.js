class ClipboardJS {
  constructor(selector, options = {}) {
    this.targets = typeof selector === 'string' ? document.querySelectorAll(selector) : [selector];

    this.options = {
      text: () => '',
      ...options,
    };

    this.handler = (e) => this.onClick(e);
    this.bindEvents();
  }

  bindEvents() {
    this.targets.forEach((target) => {
      target.addEventListener('click', this.handler);
    });
  }

  onClick(e) {
    try {
      const text = this.getText(e);
      this.copyToClipboard(text);
      this.emit('success', {
        action: 'copy',
        text: text,
        trigger: e.currentTarget,
      });
    } catch (err) {
      this.emit('error', {
        action: 'copy',
        trigger: e.currentTarget,
        text: '',
        error: err,
      });
    }
  }

  getText(e) {
    return typeof this.options.text === 'function' ? this.options.text(e.currentTarget) : this.options.text;
  }

  copyToClipboard(text) {
    if (navigator.clipboard) {
      return navigator.clipboard.writeText(text);
    }

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();

    try {
      const success = document.execCommand('copy');
      if (!success) throw new Error('Copy command failed');
    } finally {
      document.body.removeChild(textarea);
    }
  }

  on(event, callback) {
    if (!this.listeners) this.listeners = {};
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(callback);
  }

  emit(event, data) {
    if (!this.listeners || !this.listeners[event]) return;
    this.listeners[event].forEach((cb) => cb(data));
  }

  destroy() {
    this.targets.forEach((target) => {
      target.removeEventListener('click', this.handler);
    });
    this.targets = null;
    this.handler = null;
    this.listeners = null;
  }
}
