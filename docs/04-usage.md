# Usage

## Theme Toggle
Use the header toggle to switch light/dark mode. The app applies a `dark-theme` class on `<body>` via `ThemeContext` and CSS variables adapt chart and UI colors.

## KPI Cards
The dashboard header shows KPIs (revenue, active users, conversion rate, AOV) that simulate updates every few seconds.

## Charts
- Revenue Trends (Line)
- User Engagement (Line)
- Traffic Analytics (Bar)
- Traffic Sources (Pie) on the Analytics page

Charts use `react-chartjs-2` and inherit theme colors from CSS variables.

## Data Table
- Search across all visible columns
- Sort by clicking column headers
- Pagination controls (Prev/Next)
- Export current dataset as CSV
