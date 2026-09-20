"use strict";
Component({
    properties: {
        type: { type: String, value: 'default' },
        size: { type: String, value: 'medium' },
        closable: { type: Boolean, value: false },
        disabled: { type: Boolean, value: false },
        plain: { type: Boolean, value: false }
    },
    methods: {
        onClose() {
            if (this.data.disabled)
                return;
            this.triggerEvent('close');
        }
    }
});
