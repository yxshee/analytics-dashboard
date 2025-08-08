# Architecture & File Structure

```
admybrand-dashboard/
├── code/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx                 # React root mount
│       ├── App.jsx                  # Layout + tab switching
│       ├── contexts/ThemeContext.jsx# Light/Dark theme toggling
│       ├── components/
│       │   ├── Sidebar.jsx, Header.jsx
│       │   ├── Dashboard.jsx, Analytics.jsx, Reports.jsx, Settings.jsx
│       │   ├── DataTable.jsx, ChartCard.jsx
│       │   └── charts/
│       │       ├── RevenueChart.jsx, EngagementChart.jsx, TrafficChart.jsx
│       │       └── TrafficSourcesPieChart.jsx
│       └── styles (co-located .css files)
├── docs/
├── assets/
├── README.md
└── LICENSE
```

## Core Modules

- `App.jsx`: Orchestrates sidebar, header, and main content, switching between sections.
- `ThemeContext.jsx`: Provides a `dark` boolean and `toggleTheme()`; toggles `body.dark-theme`.
- Charts (`react-chartjs-2`): Line/Bar/Pie components themed via CSS variables.
- `DataTable.jsx`: Client-side search, sort, pagination, and CSV export via `react-csv`.
