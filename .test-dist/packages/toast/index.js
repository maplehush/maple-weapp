"use strict";
const timers = new WeakMap();
Component({
    properties: {
        visible: { type: Boolean, value: false },
        message: { type: String, value: '' },
        type: { type: String, value: 'default' },
        duration: { type: Number, value: 2000 }
    },
    observers: {
        'visible, duration': function (visible, duration) {
            if (!visible || duration <= 0)
                return;
            this.clearTimer();
            const timer = setTimeout(() => {
                this.setData({ visible: false });
                this.triggerEvent('close');
                timers.delete(this);
            }, duration);
            timers.set(this, timer);
        }
    },
    lifetimes: {
        detached() {
            this.clearTimer();
        }
    },
    methods: {
        clearTimer() {
            const timer = timers.get(this);
            if (timer) {
                clearTimeout(timer);
                timers.delete(this);
            }
        }
    }
});
