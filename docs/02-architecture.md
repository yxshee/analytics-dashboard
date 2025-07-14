# Architecture & File Structure

```
admybrand-dashboard/
├── code/
│   ├── index.html      # Main layout & components
│   ├── style.css       # CSS variables, utilities, responsiveness
│   └── app.js          # DashboardApp class, data flow, real-time updates
├── docs/               # This multi-page documentation
├── assets/             # Icons, images
├── admybrand_dashboard_data.json  # Mock data source
├── README.md           # Entrypoint with links to docs
└── LICENSE
```

## Core Components

- **DashboardApp (app.js):** Initialization, data loading, charts, table pagination, real-time updates.
- **CSS Design System (style.css):** Color themes, spacing, typography, utility classes.
- **HTML Layout (index.html):** Semantic sections for header, metrics, charts, table, and insights.
