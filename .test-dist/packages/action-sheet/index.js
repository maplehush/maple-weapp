"use strict";
Component({
    properties: {
        visible: { type: Boolean, value: false },
        actions: { type: Array, value: [] },
        cancelText: { type: String, value: '取消' },
        closeOnMaskTap: { type: Boolean, value: true }
    },
    methods: {
        onMaskTap() {
            if (this.data.closeOnMaskTap)
                this.close();
        },
        onActionTap(event) {
            const index = Number(event.currentTarget.dataset.index);
            const action = this.data.actions[index];
            if (!action || action.disabled)
                return;
            this.triggerEvent('select', { index, action });
            this.close();
        },
        onCancel() {
            this.triggerEvent('cancel');
            this.close();
        },
        close() {
            this.setData({ visible: false });
            this.triggerEvent('close');
        },
        noop() { }
    }
});
