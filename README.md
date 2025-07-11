# 📊 ADmyBRAND Insights - Analytics Dashboard
<p align="center">
  <img src="assets/logo.png" alt="ADmyBRAND Logo" width="120" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Badge" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3 Badge" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge" />
  <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white" alt="Chart.js Badge" />
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License: MIT" />
</p>

<p align="center">
  <a href="https://yxshdogra-analyticsdashboard.vercel.app/"><strong>🔗 Live Demo</strong></a>
  &nbsp;|&nbsp;
  <a href="https://vercel.com/new/clone?repository-url=https://github.com/yxshee/admybrand-dashboard&project-name=admybrand-dashboard&framework=other&root-directory=code">
    <img src="https://vercel.com/button" alt="Deploy with Vercel" />
  </a>
</p>

A sleek, responsive, and feature-rich analytics dashboard designed to provide a comprehensive overview of marketing performance. This project showcases a modern frontend stack to create a dynamic and user-friendly interface for data visualization.

---

## 🚀 Preview

**Live Demo:** https://yxshdogra-analyticsdashboard.vercel.app/

A live version of the dashboard can be run by simply opening the `index.html` file in your browser. For the best experience, use a live server extension in your code editor.

<p align="center">
  <img src="https://github.com/user-attachments/assets/299d8baa-a07f-4e53-ac8f-2723e99127ec" alt="Dashboard Screenshot" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
</p>




---

## ✨ Key Features

* **📊 Dynamic Data Visualization:** Interactive charts powered by **Chart.js** to visualize revenue trends, user engagement, and traffic sources.
* **📈 Overview Metrics:** At-a-glance cards for key performance indicators like Revenue, Active Users, and Conversions, with trend indicators.
* **🎛️ Interactive & Sortable Table:** A detailed table for campaign performance with features like search, filtering by campaign type, and column sorting.
* **🌓 Light & Dark Mode:** Seamlessly switch between light and dark themes to suit your viewing preference. The selected theme is saved in local storage.
* **📱 Fully Responsive Design:** The layout adapts beautifully to all screen sizes, from mobile phones to widescreen desktops.
* **📥 Data Export:** Easily export campaign performance data to a `.csv` file and download charts as `.png` images.
* **⚡ Real-Time Simulation:** Key metrics update every 30 seconds to simulate a live data feed.
* **🧩 Modular JavaScript:** The application logic is organized into a `DashboardApp` class for better structure and maintainability.
* **🎨 Modern UI/UX:** A clean and modern interface built with a custom design system using CSS variables for easy theming and consistency.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Charting Library:** [Chart.js](https://www.chartjs.org/)
* **Icons:** [Font Awesome](https://fontawesome.com/)

---


## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You only need a modern web browser like Google Chrome, Firefox, or Microsoft Edge.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/yxshee/admybrand-dashboard.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd admybrand-dashboard
    ```
3.  **Open the application:**
    Navigate to the `code` folder and open the `index.html` file in your web browser.
    * For a better development experience with hot-reloading, you can use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for VS Code.

### 🌐 Deploy to Production

This project is ready for deployment to popular hosting platforms:

#### Quick Deploy Options:

**Vercel (Recommended):**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yxshee/admybrand-dashboard&project-name=admybrand-dashboard&framework=other&root-directory=code)


---

## ⚙️ How It Works

The dashboard operates through a combination of semantic HTML, a powerful CSS design system, and a class-based JavaScript architecture.

* **`index.html`**: This file lays out the semantic structure of the dashboard, including sections for the header, overview metrics, charts, tables, and other insights. It links to the CSS stylesheet, JavaScript files, and necessary libraries.

* **`style.css`**: This file contains a complete design system built with CSS variables (`--var-name`). This approach makes it incredibly easy to manage themes (like the light and dark modes) and maintain a consistent design. It also includes all the media queries for a fully responsive layout.

* **`app.js`**: This is the heart of the application.
    * It's built around the `DashboardApp` class, which encapsulates all the dashboard's functionality.
    * On initialization (`init`), it loads the data, sets the theme, and calls methods to render all the components.
    * **`initializeMetrics()`**: Populates the overview cards and animates the numbers for a dynamic effect.
    * **`initializeCharts()`**: Uses Chart.js to create the revenue, engagement, and traffic source charts from the loaded data.
    * **`initializeTable()`**: Renders the campaign performance table with sorting, filtering, and pagination logic.
    * **`initializeEventListeners()`**: Sets up all user interactions, such as theme toggling, searching, and filtering.
    * **`startRealTimeUpdates()`**: Uses `setInterval` to simulate live data updates for the main metrics.

* **`admybrand_dashboard_data.json`**: This file acts as a mock database, providing all the necessary data that `app.js` fetches and displays on the dashboard.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🙏 Acknowledgements

* [Chart.js](https://www.chartjs.org/) for the beautiful and easy-to-use charting library.
* [Font Awesome](https://fontawesome.com/) for the high-quality icons.
* [Shields.io](https://shields.io/) for the professional README badges.

