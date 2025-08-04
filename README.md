# 🚀 ADmyBRAND Insights - Next.js 14 Analytics Dashboard

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.0+-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Latest-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

**A modern, responsive analytics dashboard built for digital marketing agencies**

[🔗 Live Demo](https://your-demo-link.com) • [📖 Documentation](#documentation) • [🚀 Quick Start](#quick-start) • [💡 Features](#features)

</div>

---

## 🎯 Project Overview

ADmyBRAND Insights is a cutting-edge analytics dashboard designed specifically for digital marketing agencies. Built with **Next.js 14**, **shadcn/ui**, **TypeScript**, and **Recharts**, it provides real-time insights into campaign performance, user engagement, and revenue metrics with a beautiful, responsive interface.

### 🌟 Why ADmyBRAND Insights?

- **🎨 Modern Design**: Clean, professional interface with dark/light mode support
- **📊 Interactive Visualizations**: Dynamic charts built with Recharts
- **⚡ Performance**: Optimized with Next.js 14 App Router and Server Components
- **🔧 Type-Safe**: Full TypeScript implementation for reliability
- **📱 Responsive**: Mobile-first design that works on all devices
- **🎯 Purpose-Built**: Tailored specifically for marketing analytics needs

---

## ✨ Features

### 📈 Dashboard Overview
- **Real-time Metrics**: Live revenue, user, and conversion tracking
- **Growth Indicators**: Visual growth percentages with color-coded trends
- **Animated Counters**: Smooth value transitions for engaging UX

### 📊 Data Visualizations
- **Revenue Charts**: 12-month trend analysis with target comparisons
- **Engagement Analytics**: Daily user activity and session metrics
- **Traffic Sources**: Interactive pie charts showing visitor origins
- **Campaign Performance**: Comprehensive ROI and conversion tracking

### 🎛️ Interactive Components
- **Smart Tables**: Sortable columns with advanced filtering
- **Search & Filter**: Real-time data filtering capabilities
- **Pagination**: Efficient data navigation
- **Export Functions**: CSV and PNG export capabilities

### 🎨 User Experience
- **Dark/Light Theme**: Seamless theme switching
- **Loading States**: Beautiful skeleton loaders
- **Micro-interactions**: Hover effects and animations
- **Accessibility**: WCAG compliant with keyboard navigation

---

## 🛠️ Technology Stack

<div align="center">

| Frontend | UI Library | Charts | Styling | Type Safety |
|----------|------------|--------|---------|-------------|
| ![](https://img.shields.io/badge/Next.js_14-000000?style=flat&logo=next.js&logoColor=white) | ![](https://img.shields.io/badge/shadcn%2Fui-000000?style=flat&logo=shadcnui&logoColor=white) | ![](https://img.shields.io/badge/Recharts-FF6B6B?style=flat&logo=recharts&logoColor=white) | ![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | ![](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) |

</div>

### 🏗️ Architecture Highlights

- **Next.js 14 App Router**: Modern routing with Server Components
- **shadcn/ui Components**: Production-ready UI component library
- **Recharts Integration**: Responsive and interactive data visualizations
- **TypeScript**: Full type safety and developer experience
- **Tailwind CSS**: Utility-first styling with custom design system

---

## 🚀 Quick Start

### Prerequisites

```bash
Node.js 18.17+ 
npm/yarn/pnpm
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/admybrand-insights.git
   cd admybrand-insights
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up shadcn/ui**
   ```bash
   npx shadcn@latest init
   ```

4. **Install required components**
   ```bash
   npx shadcn@latest add card button table badge input switch skeleton alert select tabs
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
📦 admybrand-insights/
├── 📁 app/                     # Next.js 14 App Router
│   ├── 📄 layout.tsx          # Root layout with theme provider
│   ├── 📄 page.tsx            # Main dashboard page
│   └── 📄 globals.css         # Global styles & shadcn/ui setup
├── 📁 components/             
│   ├── 📁 dashboard/          # Dashboard-specific components
│   │   ├── 📄 overview-metrics.tsx    # Metrics cards
│   │   ├── 📄 revenue-chart.tsx       # Revenue line chart
│   │   ├── 📄 engagement-chart.tsx    # User engagement bars
│   │   ├── 📄 traffic-chart.tsx       # Traffic sources pie
│   │   ├── 📄 campaigns-table.tsx     # Campaign data table
│   │   └── 📄 recent-activities.tsx   # Activity feed
│   ├── 📁 ui/                 # shadcn/ui components
│   │   ├── 📄 card.tsx
│   │   ├── 📄 button.tsx
│   │   ├── 📄 table.tsx
│   │   └── 📄 ...
│   └── 📁 theme/              # Theme management
│       └── 📄 theme-provider.tsx
├── 📁 lib/
│   ├── 📄 utils.ts            # Utility functions
│   └── 📄 data.ts             # Mock data & API calls
├── 📁 types/
│   └── 📄 dashboard.ts        # TypeScript interfaces
├── 📁 hooks/
│   ├── 📄 use-theme.ts        # Theme management hook
│   └── 📄 use-dashboard-data.ts # Data fetching hook
└── 📄 README.md
```

---

## 🎨 Screenshots & Demo

### 🖥️ Desktop View
![Desktop Dashboard](https://via.placeholder.com/800x500/3B82F6/FFFFFF?text=Desktop+Dashboard+View)

### 📱 Mobile Responsive
<div align="center">
<img src="https://via.placeholder.com/300x600/10B981/FFFFFF?text=Mobile+View" alt="Mobile Dashboard" width="300"/>
</div>

### 🌙 Dark Mode
![Dark Mode](https://via.placeholder.com/800x500/1F2937/FFFFFF?text=Dark+Mode+Interface)

---

## 📊 Data Schema & API

### TypeScript Interfaces

```typescript
interface DashboardMetrics {
  revenue: MetricData;
  users: MetricData;
  conversions: MetricData;
  growth_rate: MetricData;
}

interface MetricData {
  current: number;
  previous: number;
  growth: number;
  currency?: string;
}

interface Campaign {
  id: number;
  name: string;
  type: string;
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  conversions: number;
  ctr: number;
  cpa: number;
  roas: number;
}
```

### Sample Data Structure

```json
{
  "overview_metrics": {
    "revenue": {
      "current": 124750,
      "previous": 98200,
      "growth": 27.0,
      "currency": "USD"
    }
  },
  "revenue_chart": [
    {
      "month": "Jan 2025",
      "revenue": 115234,
      "target": 109472,
      "previous_year": 97949
    }
  ]
}
```

---

## 🧩 Component Library

### 📋 Available Components

| Component | Description | Props | Example |
|-----------|-------------|-------|---------|
| `OverviewMetrics` | Dashboard metric cards | `data: DashboardMetrics` | Revenue, users, conversions |
| `RevenueChart` | Line chart for revenue | `data: RevenueData[]` | 12-month revenue trends |
| `EngagementChart` | Bar chart for engagement | `data: EngagementData[]` | Daily user activity |
| `TrafficChart` | Pie chart for traffic sources | `data: TrafficSource[]` | Visitor origins |
| `CampaignsTable` | Data table with sorting | `data: Campaign[]` | Campaign performance |
| `RecentActivities` | Activity feed | `data: Activity[]` | Latest actions |

### 🎯 Usage Examples

```tsx
import { OverviewMetrics } from '@/components/dashboard/overview-metrics'
import { RevenueChart } from '@/components/dashboard/revenue-chart'

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <OverviewMetrics data={dashboardData.overview_metrics} />
      <RevenueChart data={dashboardData.revenue_chart} />
    </div>
  )
}
```

---

## 🎨 Design System

### 🎨 Color Palette

```css
/* Light Mode */
--primary: 221.2 83.2% 53.3%;      /* Blue */
--secondary: 210 40% 96%;          /* Light Gray */
--success: 142.1 76.2% 36.3%;      /* Green */
--warning: 47.9 95.8% 53.1%;       /* Yellow */
--destructive: 0 84.2% 60.2%;      /* Red */

/* Dark Mode */
--primary: 217.2 91.2% 59.8%;      /* Light Blue */
--secondary: 217.2 32.6% 17.5%;    /* Dark Gray */
```

### 📐 Typography Scale

```css
/* Font Sizes */
text-xs: 0.75rem;    /* 12px */
text-sm: 0.875rem;   /* 14px */
text-base: 1rem;     /* 16px */
text-lg: 1.125rem;   /* 18px */
text-xl: 1.25rem;    /* 20px */
text-2xl: 1.5rem;    /* 24px */
text-3xl: 1.875rem;  /* 30px */
```

### 🔲 Component Variants

```tsx
// Button variants
<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Badge variants
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
```

---

## ⚡ Performance Optimizations

### 🏃‍♂️ Speed Optimizations
- **Server Components**: Leverage Next.js 14 server rendering
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component with lazy loading
- **Bundle Analysis**: Webpack bundle analyzer integration

### 📊 Performance Metrics
```bash
# Lighthouse Scores
Performance: 95/100
Accessibility: 100/100
Best Practices: 100/100
SEO: 100/100

# Core Web Vitals
LCP: < 1.2s
FID: < 100ms
CLS: < 0.1
```

### 🔧 Optimization Techniques
- **React.memo**: Prevent unnecessary re-renders
- **useMemo/useCallback**: Optimize expensive calculations
- **Skeleton Loading**: Improve perceived performance
- **Virtual Scrolling**: Handle large datasets efficiently

---

## 🧪 Testing Strategy

### 🔬 Testing Stack
- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: Cypress for E2E testing
- **Visual Tests**: Chromatic for UI regression
- **Performance Tests**: Lighthouse CI

### 🧪 Running Tests

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Visual tests
npm run test:visual

# Performance tests
npm run test:performance
```

---

## 🚀 Deployment

### 🌐 Deployment Options

#### Vercel (Recommended)
```bash
# Deploy to Vercel
npm run build
vercel --prod
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### Static Export
```bash
# Generate static files
npm run build
npm run export
```

### 🔧 Environment Variables

```env
# .env.local
NEXT_PUBLIC_API_URL=https://api.admybrand.com
NEXT_PUBLIC_ANALYTICS_ID=GA_MEASUREMENT_ID
DATABASE_URL=postgresql://...
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### 🛠️ Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Add tests** for new features
5. **Run the test suite**
   ```bash
   npm run test
   ```
6. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
7. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
8. **Open a Pull Request**

### 📋 Development Guidelines

- **Code Style**: Follow Prettier and ESLint configurations
- **Commits**: Use conventional commit messages
- **Documentation**: Update README for new features
- **Testing**: Maintain test coverage above 80%

---

## 📚 Documentation

### 📖 Additional Resources

- [📘 API Documentation](docs/API.md)
- [🎨 Design System Guide](docs/DESIGN_SYSTEM.md)
- [🏗️ Architecture Overview](docs/ARCHITECTURE.md)
- [🔧 Configuration Guide](docs/CONFIGURATION.md)
- [🚀 Deployment Guide](docs/DEPLOYMENT.md)

### 🎓 Learning Resources

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com/docs)
- [Recharts Documentation](https://recharts.org/en-US/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)

---

## 🐛 Troubleshooting

### Common Issues

<details>
<summary><strong>🔧 shadcn/ui components not working</strong></summary>

Make sure you've initialized shadcn/ui correctly:
```bash
npx shadcn@latest init
npx shadcn@latest add card button table
```
</details>

<details>
<summary><strong>📊 Charts not rendering</strong></summary>

Ensure Recharts is properly installed:
```bash
npm install recharts react-is
```
</details>

<details>
<summary><strong>🎨 Theme not switching</strong></summary>

Check if ThemeProvider is properly configured in layout.tsx:
```tsx
import { ThemeProvider } from '@/components/theme/theme-provider'
```
</details>

### 🆘 Getting Help

- 🐛 [Report a Bug](https://github.com/your-username/admybrand-insights/issues/new?template=bug_report.md)
- 💡 [Request a Feature](https://github.com/your-username/admybrand-insights/issues/new?template=feature_request.md)
- 💬 [Join Discussions](https://github.com/your-username/admybrand-insights/discussions)
- 📧 [Email Support](mailto:support@admybrand.com)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[shadcn](https://twitter.com/shadcn)** for the amazing UI component library
- **[Vercel](https://vercel.com)** for Next.js framework and hosting
- **[Recharts Team](https://github.com/recharts/recharts)** for the visualization library
- **[Tailwind CSS](https://tailwindcss.com)** for the utility-first CSS framework

---

## 📊 Project Stats

<div align="center">

![GitHub Stars](https://img.shields.io/github/stars/your-username/admybrand-insights?style=social)
![GitHub Forks](https://img.shields.io/github/forks/your-username/admybrand-insights?style=social)
![GitHub Issues](https://img.shields.io/github/issues/your-username/admybrand-insights)
![GitHub PRs](https://img.shields.io/github/issues-pr/your-username/admybrand-insights)

**Built with ❤️ by the ADmyBRAND team**

[⬆️ Back to Top](#-admybrand-insights---nextjs-14-analytics-dashboard)

</div>