"use strict";
Component({
    data: {
        focused: false
    },
    properties: {
        value: { type: String, value: '' },
        placeholder: { type: String, value: '' },
        disabled: { type: Boolean, value: false },
        readonly: { type: Boolean, value: false },
        maxlength: { type: Number, value: 500 },
        clearable: { type: Boolean, value: false },
        showCount: { type: Boolean, value: false }
    },
    methods: {
        onFocus() {
            this.setData({ focused: true });
        },
        onInput(event) {
            const value = event.detail.value;
            if (this.data.readonly) {
                this.setData({ value: this.data.value });
                return;
            }
            this.setData({ value });
            this.triggerEvent('input', { value });
        },
        onBlur(event) {
            this.setData({ focused: false });
            this.triggerEvent('blur', { value: event.detail.value });
        },
        onClear() {
            if (this.data.disabled || this.data.readonly)
                return;
            this.setData({ value: '' });
            this.triggerEvent('input', { value: '' });
            this.triggerEvent('clear', { value: '' });
        }
    }
});
