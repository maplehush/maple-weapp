"use strict";
Component({
    properties: {
        visible: { type: Boolean, value: false },
        title: { type: String, value: '' },
        content: { type: String, value: '' },
        showCancel: { type: Boolean, value: true },
        confirmText: { type: String, value: '确定' },
        cancelText: { type: String, value: '取消' },
        closeOnMaskTap: { type: Boolean, value: true }
    },
    methods: {
        onMaskTap() { if (this.data.closeOnMaskTap)
            this.close(); },
        onCancel() { this.triggerEvent('cancel'); this.close(); },
        onConfirm() { this.triggerEvent('confirm'); this.close(); },
        close() { this.setData({ visible: false }); this.triggerEvent('close'); }
    }
});
