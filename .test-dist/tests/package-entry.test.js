"use strict";
const test = require('node:test');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { existsSync, readFileSync } = require('node:fs');
const { extname, resolve } = require('node:path');
test('published package contains its declared npm entry file', () => {
    const packageJson = JSON.parse(readFileSync(resolve('package.json'), 'utf8'));
    assert.equal(typeof packageJson.main, 'string', 'package.json must declare a main entry');
    const isWindows = process.platform === 'win32';
    const npmCommand = isWindows ? process.env.ComSpec : 'npm';
    const npmArgs = isWindows
        ? ['/d', '/s', '/c', 'npm pack --dry-run --json']
        : ['pack', '--dry-run', '--json'];
    const packResult = JSON.parse(execFileSync(npmCommand, npmArgs, {
        cwd: resolve('.'),
        encoding: 'utf8'
    }));
    const packedFiles = new Set(packResult[0].files.map((file) => file.path));
    assert.ok(packedFiles.has(packageJson.main), `published package must include its main entry: ${packageJson.main}`);
});
test('example npm references resolve inside the published miniprogram root', () => {
    const packageJson = JSON.parse(readFileSync(resolve('package.json'), 'utf8'));
    assert.equal(typeof packageJson.miniprogram, 'string', 'package.json must declare a miniprogram source root');
    const appRoot = 'examples/miniprogram/miniprogram';
    const appConfig = JSON.parse(readFileSync(resolve(appRoot, 'app.json'), 'utf8'));
    const exampleFiles = [
        resolve(appRoot, 'app.wxss'),
        ...appConfig.pages.map((page) => resolve(appRoot, page + '.json'))
    ];
    const packagePrefix = '/miniprogram_npm/maple-weapp/';
    for (const exampleFile of exampleFiles) {
        const content = readFileSync(exampleFile, 'utf8');
        const references = [...content.matchAll(/\/miniprogram_npm\/maple-weapp\/([^"'()\s;]+)/g)];
        for (const [, reference] of references) {
            const sourcePath = resolve(packageJson.miniprogram, reference);
            const candidates = extname(sourcePath)
                ? [sourcePath]
                : ['.json', '.ts', '.wxml', '.wxss'].map((extension) => sourcePath + extension);
            assert.ok(candidates.every(existsSync), `${packagePrefix}${reference} must resolve to published miniprogram source files`);
        }
    }
});
