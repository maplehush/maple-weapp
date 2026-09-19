# Maple Weapp

A lightweight UI component library for native WeChat Mini Programs.

## Features

- Native WeChat Mini Program components
- TypeScript implementation
- Shared Design Tokens
- Lightweight and dependency-light
- WebView friendly
- Skyline friendly

## Install

Install the package from npm:

```bash
npm install maple-weapp
```

The package publishes the `packages/` directory. In a WeChat Mini Program project, build npm in WeChat Developer Tools after installation so the package is available under `miniprogram_npm/`.

## Usage

Register the component you need in the page or component JSON:

```json
{
  "usingComponents": {
    "m-button": "/miniprogram_npm/maple-weapp/packages/button/index"
  }
}
```

Then use it in WXML:

```xml
<m-button type="primary" bind:click="handleClick">确认</m-button>
```

For components that expose events, bind the documented event and handle the event in the page or component logic.

## Components

| Component | Purpose |
| --- | --- |
| Button | Primary actions |
| Cell | List rows and navigation entries |
| Icon | Icon glyphs |
| Loading | Loading state |
| Input | Single-line text input |
| Textarea | Multi-line text input |
| Switch | Boolean state toggle |
| Checkbox | Selection control |
| Radio | Single selection control |
| Tag | Status and category labels |
| Toast | Lightweight feedback |
| Dialog | Confirmation and alert dialog |
| Popup | Temporary content overlay |
| ActionSheet | Bottom action menu |
| Card | Content container |
| List | List container |
| Tabs | Content navigation |
| Navbar | Top navigation |
| Tabbar | Bottom navigation |

Each component has its own README under `packages/<component>/README.md` with its API and usage notes.

## Demo

The demo project is under `examples/miniprogram`.

```bash
cd examples/miniprogram
npm install
```

Open `examples/miniprogram` in WeChat Developer Tools and use **构建 npm** to generate `miniprogram_npm`. The demo provides a component catalog, detail pages, and a static profile page.

## Development

Install dependencies:

```bash
npm install
```

Run TypeScript validation:

```bash
npm run typecheck
```

Run component behavior tests:

```bash
npm test
```

Run the full release validation locally:

```bash
npm run release:check
```

## Release

The package uses semantic versioning. Release preparation should be completed on `develop`, then the release commit can be promoted to `main` and tagged.

The current release line is documented in [CHANGELOG.md](./CHANGELOG.md).

## License

MIT
