## Changelog

### [1.1.0] - 2017-02-11
- Added `disabled` prop to `NavTab`. Prevents the click action when true.
- `NavTab` `exact` prop now correctly defaults to true. This enables nested tabs by default and keeps presentational behaviour consistent with RR's `NavLink`.
- `NavTab` given default classNames. Previously these were set only when `RoutedTabs` component was used.
- Example styling updated to not require the parent `"react-router-tabs"` class, so that styles can work when NavTabs are used on their own. The class will still be given to `RoutedTabs` for compatibility with older versions of the stylesheet.
- Removed `RoutedTabs` usage wherever not needed in examples.
- Documentation fixes.

### [1.0.3] - 2017-12-30
- `RoutedTabs` updated to handle null children (when tabs are rendered conditionally)

### [1.0.2] - 2017-11-17
- Added gif and badges to readme

### [1.0.0 - 1.0.1] - 2017-11-16
- Initial commit
