# Changelog

## 0.1.0

### Added

- 19 native WeChat Mini Program UI components: Button, Cell, Icon, Loading, Input, Textarea, Switch, Checkbox, Radio, Tag, Toast, Dialog, Popup, ActionSheet, Card, List, Tabs, Navbar, and Tabbar.
- Shared design tokens for color, typography, spacing, radius, state, and component dimensions.
- TypeScript type checking, component behavior tests, and GitHub Actions CI.
- A demo app with a component catalog, component detail pages, and a static profile page.

### Changed

- `packages/` is the single source of truth for published components; the demo consumes the npm package output instead of duplicating component source.
- Component styling has been aligned around shared Design Tokens.

### Notes

- This release focuses on a stable native Mini Program component foundation.
- Global service APIs, advanced component groups, and automated npm publishing are intentionally left for later iterations.
