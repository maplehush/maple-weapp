"use strict";
const test = require('node:test');
const assert = require('node:assert/strict');
const { existsSync, readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const { loadComponent, createInstance } = require('./component-test-utils');
test('example app exposes only the component catalog flow', () => {
    const appConfig = JSON.parse(readFileSync(resolve('examples/miniprogram/miniprogram/app.json'), 'utf8'));
    const indexConfig = JSON.parse(readFileSync(resolve('examples/miniprogram/miniprogram/pages/index/index.json'), 'utf8'));
    const detailConfig = JSON.parse(readFileSync(resolve('examples/miniprogram/miniprogram/pages/detail/index.json'), 'utf8'));
    assert.deepEqual(appConfig.pages, [
        'pages/index/index',
        'pages/detail/index'
    ]);
    const navbarRegistration = {
        'm-navbar': '/miniprogram_npm/maple-weapp/navbar/index'
    };
    assert.deepEqual(indexConfig.usingComponents, navbarRegistration);
    assert.deepEqual(detailConfig.usingComponents, {
        ...navbarRegistration,
        'm-icon': '/miniprogram_npm/maple-weapp/icon/index'
    });
    assert.equal(indexConfig.disableScroll, true);
    assert.equal(detailConfig.disableScroll, true);
    for (const page of appConfig.pages) {
        for (const extension of ['.json', '.ts', '.wxml', '.wxss']) {
            assert.ok(existsSync(resolve('examples/miniprogram/miniprogram', page + extension)), `${page}${extension} must exist`);
        }
    }
});
test('component detail page loads the Icon demo from its route id', () => {
    const previousWx = global.wx;
    global.wx = {
        setNavigationBarTitle() { },
        navigateBack() { }
    };
    try {
        const definition = loadComponent('examples/miniprogram/miniprogram/pages/detail/index.js');
        const { instance } = createInstance(definition);
        instance.onLoad({ id: 'icon' });
        assert.equal(instance.data.componentId, 'icon');
        assert.equal(instance.data.doc.name, 'Icon');
        assert.deepEqual(instance.data.iconNames, [
            'chevron-left', 'chevron-right', 'chevron-up', 'chevron-down',
            'arrow-left', 'arrow-right', 'plus', 'minus',
            'close', 'check', 'search', 'edit',
            'delete', 'more', 'home', 'user'
        ]);
    }
    finally {
        global.wx = previousWx;
    }
});
