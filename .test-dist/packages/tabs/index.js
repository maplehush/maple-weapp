"use strict";
Component({
    properties: {
        active: { type: Number, value: 0 },
        tabs: { type: Array, value: [] },
        sticky: { type: Boolean, value: false }
    },
    methods: {
        onTabTap(event) {
            const index = Number(event.currentTarget.dataset.index);
            if (index === this.data.active)
                return;
            this.setData({ active: index });
            this.triggerEvent('change', { index });
        }
    }
});
