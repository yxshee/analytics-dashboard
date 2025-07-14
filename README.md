# ADmyBRAND Insights

A responsive, themeable analytics dashboard.

## 📖 Documentation Pages
- [1. Introduction](docs/01-introduction.md)
- [2. Architecture & File Structure](docs/02-architecture.md)
- [3. Installation & Setup](docs/03-installation.md)
- [4. Usage](docs/04-usage.md)
- [5. Deployment](docs/05-deployment.md)
- [6. Contributing](docs/06-contributing.md)

---

## Project Overview
ADmyBRAND Insights is a responsive analytics dashboard that visualizes marketing performance with interactive charts, tables, and real-time data simulation. Built with vanilla JavaScript, Chart.js, and a CSS variables design system, it provides a modular, themeable, and extensible foundation for future enhancements.

## Key Features
- **Overview Metrics:** Animated cards for revenue, users, conversions, and growth.
- **Dynamic Charts:** Line, bar, and doughnut charts using Chart.js.
- **Interactive Table:** Search, sort, filter, paginate, and CSV export.
- **Real-Time Simulation:** Metrics update every 30 seconds to emulate live data.
- **Light & Dark Mode:** CSS variables driven theme with persisted preference.
- **Data Export:** Download charts as PNG and table data as CSV.
- **Additional Insights:** Recent activities feed and conversion funnel visualization.

## Architecture & File Structure
```
admybrand-dashboard/
├── README.md
├── DOCUMENTATION.md           # This file
├── DEPLOYMENT.md
├── AI Usage Report.md
├── LICENSE
├── assets/                    # Logos, images, icons
├── code/
│   ├── index.html             # Main HTML structure
│   ├── style.css              # Design system & responsive styles
│   └── app.js                 # DashboardApp class & logic
└── admybrand_dashboard_data.json  # Mock data source
```

### Core Components
- **DashboardApp (app.js):** Encapsulates data loading, rendering, event handling, and live updates.
- **CSS Design System (style.css):** Defines color, spacing, typography variables; includes media queries and focus states.
- **HTML Layout (index.html):** Semantic sections for header, metrics, charts, table, and insights.

## Tech Stack & Concepts
- **HTML5 & CSS3:** Semantic markup and modern CSS variables for theming.
- **JavaScript (ES6+):** Class-based architecture, modular functions, and DOM manipulation.
- **Chart.js:** Configurable chart instances with custom tooltips and responsive behavior.
- **Local Storage:** Persist theme preference.
- **Accessibility:** Focus-visible styles, ARIA-friendly icons.
- **Performance:** Debounced search, pagination, and optimized interval updates.

## Getting Started
1. Clone the repository:
   ```sh
   git clone https://github.com/yxshee/admybrand-dashboard.git
   ```
2. Open `code/index.html` in your browser or launch with a live-reload server.
3. Interact with the dashboard—toggle theme, sort/filter the table, export data.

## Deployment
- **Vercel & Netlify:** Simply point to the `code/` folder; no build step required.
- **Static Hosting:** Serve `index.html`, `style.css`, `app.js`, and assets from any static host.

Refer to DEPLOYMENT.md for detailed steps.

## Contributing
Contributions are welcome:
1. Fork the repo
2. Create a branch (`git checkout -b feature/...`)
3. Commit your changes
4. Open a pull request

## License
Distributed under the MIT License. See `LICENSE` for details.