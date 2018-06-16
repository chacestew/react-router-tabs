## Changelog

### [1.2.0] - 2018-06-16
- Added `allowClickOnActive` to `NavTab` to support re-selecting active tabs.
- Added check to `RoutedTabs` to prevent passing down props to DOM elements.
- Added `elementType` prop to `RoutedTabs` to change the container element.
- Extended NavTab's `to` prop-type to include objects.
- Fixed NavTab's `aria-current` attribute and handling of missing paths (as per updates to React Router's `NavLink`).
- Fixed RoutedTab's incorrect prop-type name for `activeTabClassName`.

### [1.1.1] - 2018-03-22
- Fixed RoutedTab's `activeTabStyle` prop-type to be object.

### [1.1.0] - 2018-02-11
- Added `disabled` prop to `NavTab`. Prevents the click action when true.
- `NavTab` `exact` prop now correctly defaults to true. This enables nested tabs by default and keeps presentational behaviour consistent with RR's `NavLink`.
- `NavTab` given default classNames. Previously these were set only when `RoutedTabs` component was used.
- Example styling updated to not require the parent `"react-router-tabs"` class, so that styles can work when NavTabs are used on their own. The class will still be given to `RoutedTabs` for compatibility with older versions of the stylesheet.
- Removed `RoutedTabs` usage wherever not needed in examples.
- Documentation fixes.

### [1.0.3] - 2017-12-30
- `RoutedTabs` updated to handle null children (when tabs are rendered conditionally).

### [1.0.2] - 2017-11-17
- Added gif and badges to readme.

### [1.0.0 - 1.0.1] - 2017-11-16
- Initial commit.
