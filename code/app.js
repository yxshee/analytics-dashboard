// Dashboard Application JavaScript
class DashboardApp {
    constructor() {
        this.data = null;
        this.charts = {};
        this.currentSort = { field: null, direction: 'asc' };
        this.currentPage = 1;
        this.itemsPerPage = 5;
        this.filteredCampaigns = [];
        this.searchQuery = '';
        this.typeFilter = '';
        this.theme = localStorage.getItem('theme') || 'light';
        
        this.init();
    }

    async init() {
        try {
            // Show loading overlay
            this.showLoading();
            
            // Load data
            await this.loadData();
            
            // Initialize theme
            this.initializeTheme();
            
            // Initialize components
            this.initializeMetrics();
            this.initializeCharts();
            this.initializeTable();
            this.initializeInsights();
            this.initializeEventListeners();
            
            // Start real-time updates
            this.startRealTimeUpdates();
            
            // Hide loading overlay
            setTimeout(() => this.hideLoading(), 1500);
            
        } catch (error) {
            console.error('Dashboard initialization failed:', error);
            this.hideLoading();
        }
    }

    async loadData() {
        // Using the provided JSON data structure
        this.data = {
            "overview_metrics": {
                "revenue": {
                    "current": 124750,
                    "previous": 98200,
                    "growth": 27.0,
                    "currency": "USD"
                },
                "users": {
                    "current": 8934,
                    "previous": 7821,
                    "growth": 14.2
                },
                "conversions": {
                    "current": 342,
                    "previous": 289,
                    "growth": 18.3
                },
                "growth_rate": {
                    "current": 23.5,
                    "previous": 18.7,
                    "growth": 4.8
                }
            },
            "revenue_chart": [
                {"month": "Aug 2024", "revenue": 81829, "target": 77737, "previous_year": 69555},
                {"month": "Sep 2024", "revenue": 85898, "target": 81603, "previous_year": 73013},
                {"month": "Oct 2024", "revenue": 102481, "target": 97357, "previous_year": 87109},
                {"month": "Nov 2024", "revenue": 105742, "target": 100455, "previous_year": 89881},
                {"month": "Dec 2024", "revenue": 118562, "target": 112634, "previous_year": 100778},
                {"month": "Jan 2025", "revenue": 115234, "target": 109472, "previous_year": 97949},
                {"month": "Feb 2025", "revenue": 123456, "target": 117283, "previous_year": 104938},
                {"month": "Mar 2025", "revenue": 129876, "target": 123382, "previous_year": 110395},
                {"month": "Apr 2025", "revenue": 134567, "target": 127839, "previous_year": 114382},
                {"month": "May 2025", "revenue": 142345, "target": 135228, "previous_year": 120993},
                {"month": "Jun 2025", "revenue": 148765, "target": 141327, "previous_year": 126451},
                {"month": "Jul 2025", "revenue": 156789, "target": 148950, "previous_year": 133271}
            ],
            "user_engagement_chart": [
                {"date": "2025-07-05", "day": "Sat", "sessions": 856, "page_views": 2995, "bounce_rate": 45.2, "avg_session_duration": 234},
                {"date": "2025-07-06", "day": "Sun", "sessions": 743, "page_views": 2456, "bounce_rate": 52.1, "avg_session_duration": 189},
                {"date": "2025-07-07", "day": "Mon", "sessions": 1089, "page_views": 3723, "bounce_rate": 38.7, "avg_session_duration": 267},
                {"date": "2025-07-08", "day": "Tue", "sessions": 1156, "page_views": 4234, "bounce_rate": 41.3, "avg_session_duration": 289},
                {"date": "2025-07-09", "day": "Wed", "sessions": 1087, "page_views": 3998, "bounce_rate": 39.8, "avg_session_duration": 256},
                {"date": "2025-07-10", "day": "Thu", "sessions": 1134, "page_views": 4089, "bounce_rate": 42.1, "avg_session_duration": 273},
                {"date": "2025-07-11", "day": "Fri", "sessions": 1067, "page_views": 3856, "bounce_rate": 44.6, "avg_session_duration": 245},
                {"date": "2025-07-12", "day": "Sat", "sessions": 823, "page_views": 2789, "bounce_rate": 48.9, "avg_session_duration": 198},
                {"date": "2025-07-13", "day": "Sun", "sessions": 798, "page_views": 2634, "bounce_rate": 51.2, "avg_session_duration": 187}
            ],
            "traffic_sources": [
                {"source": "Organic Search", "value": 45.2, "visitors": 11300},
                {"source": "Social Media", "value": 23.8, "visitors": 5950},
                {"source": "Direct", "value": 15.6, "visitors": 3900},
                {"source": "Email Marketing", "value": 8.4, "visitors": 2100},
                {"source": "Paid Ads", "value": 7.0, "visitors": 1750}
            ],
            "top_campaigns": [
                {
                    "id": 1,
                    "name": "Google Ads - Brand Keywords",
                    "type": "Paid Search",
                    "budget": 15000,
                    "spent": 12500,
                    "impressions": 125000,
                    "clicks": 3200,
                    "conversions": 89,
                    "ctr": 2.56,
                    "cpa": 140.45,
                    "roas": 4.2
                },
                {
                    "id": 2,
                    "name": "Facebook Ads - Lookalike",
                    "type": "Social Media",
                    "budget": 8000,
                    "spent": 7200,
                    "impressions": 89000,
                    "clicks": 1890,
                    "conversions": 67,
                    "ctr": 2.12,
                    "cpa": 107.46,
                    "roas": 3.8
                },
                {
                    "id": 3,
                    "name": "Email - Newsletter Campaign",
                    "type": "Email Marketing",
                    "budget": 2000,
                    "spent": 1500,
                    "impressions": 45000,
                    "clicks": 2100,
                    "conversions": 78,
                    "ctr": 4.67,
                    "cpa": 19.23,
                    "roas": 6.2
                },
                {
                    "id": 4,
                    "name": "LinkedIn - B2B Targeting",
                    "type": "Social Media",
                    "budget": 5000,
                    "spent": 4200,
                    "impressions": 32000,
                    "clicks": 890,
                    "conversions": 34,
                    "ctr": 2.78,
                    "cpa": 123.53,
                    "roas": 2.9
                },
                {
                    "id": 5,
                    "name": "YouTube Advertising",
                    "type": "Video Marketing",
                    "budget": 6000,
                    "spent": 5100,
                    "impressions": 78000,
                    "clicks": 1200,
                    "conversions": 42,
                    "ctr": 1.54,
                    "cpa": 121.43,
                    "roas": 3.1
                }
            ],
            "conversion_funnel": [
                {"stage": "Visitors", "value": 25000, "percentage": 100},
                {"stage": "Leads", "value": 5000, "percentage": 20},
                {"stage": "Qualified Leads", "value": 1500, "percentage": 30},
                {"stage": "Opportunities", "value": 750, "percentage": 50},
                {"stage": "Customers", "value": 342, "percentage": 45.6}
            ],
            "recent_activities": [
                {
                    "id": 1,
                    "action": "New campaign launched",
                    "campaign": "Summer Sale 2024",
                    "time": "2 hours ago",
                    "status": "active"
                },
                {
                    "id": 2,
                    "action": "Goal completed",
                    "campaign": "Lead Generation Q4",
                    "time": "4 hours ago",
                    "status": "completed"
                },
                {
                    "id": 3,
                    "action": "Budget threshold reached",
                    "campaign": "Facebook Ads - Retargeting",
                    "time": "6 hours ago",
                    "status": "warning"
                },
                {
                    "id": 4,
                    "action": "New conversion",
                    "campaign": "Google Ads - Brand Keywords",
                    "time": "1 day ago",
                    "status": "success"
                },
                {
                    "id": 5,
                    "action": "Campaign paused",
                    "campaign": "LinkedIn Sponsored Content",
                    "time": "2 days ago",
                    "status": "paused"
                }
            ]
        };

        this.filteredCampaigns = [...this.data.top_campaigns];
    }

    showLoading() {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.classList.remove('hidden');
        }
    }

    hideLoading() {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.classList.add('hidden');
        }
    }

    initializeTheme() {
        document.documentElement.setAttribute('data-color-scheme', this.theme);
        this.updateThemeIcon();
    }

    updateThemeIcon() {
        const icon = document.getElementById('themeIcon');
        if (icon) {
            icon.className = this.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-color-scheme', this.theme);
        localStorage.setItem('theme', this.theme);
        this.updateThemeIcon();
        
        // Update charts for theme change
        setTimeout(() => {
            this.updateChartsForTheme();
        }, 100);
    }

    updateChartsForTheme() {
        Object.values(this.charts).forEach(chart => {
            if (chart) {
                chart.destroy();
            }
        });
        this.initializeCharts();
    }

    initializeMetrics() {
        const metrics = this.data.overview_metrics;
        
        // Animate metric values with proper formatting
        this.animateMetricValue('revenueValue', 0, metrics.revenue.current, '$', true);
        this.animateMetricValue('usersValue', 0, metrics.users.current, '', true);
        this.animateMetricValue('conversionsValue', 0, metrics.conversions.current);
        this.animateMetricValue('growthValue', 0, metrics.growth_rate.current, '', false, true); // Added percentage flag
    }

    animateMetricValue(elementId, start, end, prefix = '', addCommas = false, isPercentage = false) {
        const element = document.getElementById(elementId);
        if (!element) return;

        const duration = 2000;
        const increment = (end - start) / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }

            let displayValue = Math.floor(current * 10) / 10; // Round to 1 decimal place
            if (addCommas) {
                displayValue = Math.floor(current).toLocaleString();
            } else if (isPercentage) {
                displayValue = current.toFixed(1); // Fixed to 1 decimal place for percentages
            }
            
            const suffix = isPercentage ? '%' : '';
            element.textContent = `${prefix}${displayValue}${suffix}`;
        }, 16);
    }

    initializeCharts() {
        this.createRevenueChart();
        this.createEngagementChart();
        this.createTrafficChart();
    }

    getChartColors() {
        const computedStyle = getComputedStyle(document.documentElement);
        return {
            primary: computedStyle.getPropertyValue('--color-primary').trim() || '#1FB8CD',
            secondary: computedStyle.getPropertyValue('--color-teal-300').trim() || '#32B8C6',
            text: computedStyle.getPropertyValue('--color-text').trim() || '#134252',
            textSecondary: computedStyle.getPropertyValue('--color-text-secondary').trim() || '#626C71',
            surface: computedStyle.getPropertyValue('--color-surface').trim() || '#FFFFFD',
            fillColors: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
        };
    }

    createRevenueChart() {
        const ctx = document.getElementById('revenueChart');
        if (!ctx) return;

        const colors = this.getChartColors();
        const data = this.data.revenue_chart;

        this.charts.revenue = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map(item => item.month.split(' ')[0]),
                datasets: [
                    {
                        label: 'Revenue',
                        data: data.map(item => item.revenue),
                        borderColor: colors.primary,
                        backgroundColor: colors.primary + '20',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: colors.primary,
                        pointBorderColor: colors.surface,
                        pointBorderWidth: 3,
                        pointRadius: 6
                    },
                    {
                        label: 'Target',
                        data: data.map(item => item.target),
                        borderColor: colors.secondary,
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        fill: false,
                        tension: 0.4,
                        pointRadius: 0
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: colors.text,
                            usePointStyle: true,
                            padding: 20
                        }
                    },
                    tooltip: {
                        backgroundColor: colors.surface,
                        titleColor: colors.text,
                        bodyColor: colors.text,
                        borderColor: colors.primary,
                        borderWidth: 1,
                        cornerRadius: 8,
                        displayColors: true,
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: $${context.parsed.y.toLocaleString()}`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: colors.textSecondary + '20'
                        },
                        ticks: {
                            color: colors.textSecondary
                        }
                    },
                    y: {
                        grid: {
                            color: colors.textSecondary + '20'
                        },
                        ticks: {
                            color: colors.textSecondary,
                            callback: function(value) {
                                return '$' + (value / 1000) + 'K';
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }

    createEngagementChart() {
        const ctx = document.getElementById('engagementChart');
        if (!ctx) return;

        const colors = this.getChartColors();
        const data = this.data.user_engagement_chart;

        this.charts.engagement = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(item => item.day),
                datasets: [
                    {
                        label: 'Sessions',
                        data: data.map(item => item.sessions),
                        backgroundColor: colors.fillColors[0],
                        borderRadius: 4,
                        borderSkipped: false
                    },
                    {
                        label: 'Page Views',
                        data: data.map(item => item.page_views),
                        backgroundColor: colors.fillColors[1],
                        borderRadius: 4,
                        borderSkipped: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: colors.text,
                            usePointStyle: true,
                            padding: 20
                        }
                    },
                    tooltip: {
                        backgroundColor: colors.surface,
                        titleColor: colors.text,
                        bodyColor: colors.text,
                        borderColor: colors.primary,
                        borderWidth: 1,
                        cornerRadius: 8
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: colors.textSecondary
                        }
                    },
                    y: {
                        grid: {
                            color: colors.textSecondary + '20'
                        },
                        ticks: {
                            color: colors.textSecondary
                        },
                        beginAtZero: true
                    }
                }
            }
        });
    }

    createTrafficChart() {
        const ctx = document.getElementById('trafficChart');
        if (!ctx) return;

        const colors = this.getChartColors();
        const data = this.data.traffic_sources;

        this.charts.traffic = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: data.map(item => item.source),
                datasets: [{
                    data: data.map(item => item.value),
                    backgroundColor: colors.fillColors,
                    borderWidth: 0,
                    cutout: '60%'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: colors.text,
                            usePointStyle: true,
                            padding: 15,
                            generateLabels: function(chart) {
                                const data = chart.data;
                                if (data.labels.length && data.datasets.length) {
                                    return data.labels.map((label, i) => {
                                        const value = data.datasets[0].data[i];
                                        return {
                                            text: `${label}: ${value}%`,
                                            fillStyle: data.datasets[0].backgroundColor[i],
                                            pointStyle: 'circle'
                                        };
                                    });
                                }
                                return [];
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: colors.surface,
                        titleColor: colors.text,
                        bodyColor: colors.text,
                        borderColor: colors.primary,
                        borderWidth: 1,
                        cornerRadius: 8,
                        callbacks: {
                            label: function(context) {
                                const visitors = data[context.dataIndex].visitors;
                                return `${context.label}: ${context.parsed}% (${visitors.toLocaleString()} visitors)`;
                            }
                        }
                    }
                }
            }
        });
    }

    initializeTable() {
        this.renderTable();
        this.updatePagination();
    }

    renderTable() {
        const tbody = document.getElementById('campaignTableBody');
        if (!tbody) return;

        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const pageData = this.filteredCampaigns.slice(startIndex, endIndex);

        tbody.innerHTML = pageData.map(campaign => `
            <tr>
                <td>${campaign.name}</td>
                <td>
                    <span class="campaign-type ${this.getCampaignTypeClass(campaign.type)}">
                        ${campaign.type}
                    </span>
                </td>
                <td>$${campaign.budget.toLocaleString()}</td>
                <td>$${campaign.spent.toLocaleString()}</td>
                <td>${campaign.impressions.toLocaleString()}</td>
                <td>${campaign.clicks.toLocaleString()}</td>
                <td>${campaign.conversions}</td>
                <td>${campaign.ctr}%</td>
                <td>$${campaign.cpa.toFixed(2)}</td>
                <td>${campaign.roas.toFixed(1)}</td>
            </tr>
        `).join('');
    }

    getCampaignTypeClass(type) {
        return type.toLowerCase().replace(/\s+/g, '-');
    }

    updatePagination() {
        const total = this.filteredCampaigns.length;
        const totalPages = Math.ceil(total / this.itemsPerPage);
        const startItem = (this.currentPage - 1) * this.itemsPerPage + 1;
        const endItem = Math.min(this.currentPage * this.itemsPerPage, total);

        const paginationInfo = document.getElementById('paginationInfo');
        const prevButton = document.getElementById('prevPage');
        const nextButton = document.getElementById('nextPage');

        if (paginationInfo) {
            paginationInfo.textContent = `Showing ${startItem}-${endItem} of ${total} campaigns`;
        }

        if (prevButton) {
            prevButton.disabled = this.currentPage === 1;
        }

        if (nextButton) {
            nextButton.disabled = this.currentPage === totalPages || total === 0;
        }
    }

    filterAndSearch() {
        let filtered = [...this.data.top_campaigns];

        // Apply search filter
        if (this.searchQuery) {
            filtered = filtered.filter(campaign => 
                campaign.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                campaign.type.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }

        // Apply type filter
        if (this.typeFilter) {
            filtered = filtered.filter(campaign => campaign.type === this.typeFilter);
        }

        this.filteredCampaigns = filtered;
        this.currentPage = 1;
        this.renderTable();
        this.updatePagination();
    }

    sortTable(field) {
        if (this.currentSort.field === field) {
            this.currentSort.direction = this.currentSort.direction === 'asc' ? 'desc' : 'asc';
        } else {
            this.currentSort.field = field;
            this.currentSort.direction = 'asc';
        }

        this.filteredCampaigns.sort((a, b) => {
            let aValue = a[field];
            let bValue = b[field];

            if (typeof aValue === 'string') {
                aValue = aValue.toLowerCase();
                bValue = bValue.toLowerCase();
            }

            if (this.currentSort.direction === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });

        this.updateSortIcons();
        this.renderTable();
    }

    updateSortIcons() {
        // Reset all sort icons
        document.querySelectorAll('.sortable i').forEach(icon => {
            icon.className = 'fas fa-sort';
        });

        // Reset sorted class
        document.querySelectorAll('.sortable.sorted').forEach(header => {
            header.classList.remove('sorted');
        });

        // Update current sort icon
        const currentHeader = document.querySelector(`[data-sort="${this.currentSort.field}"]`);
        if (currentHeader) {
            const icon = currentHeader.querySelector('i');
            if (icon) {
                icon.className = this.currentSort.direction === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down';
                currentHeader.classList.add('sorted');
            }
        }
    }

    initializeInsights() {
        this.renderActivities();
        this.renderFunnel();
    }

    renderActivities() {
        const container = document.getElementById('activitiesList');
        if (!container) return;

        container.innerHTML = this.data.recent_activities.map(activity => `
            <div class="activity-item">
                <div class="activity-status ${activity.status}">
                    <i class="fas ${this.getActivityIcon(activity.status)}"></i>
                </div>
                <div class="activity-content">
                    <div class="activity-action">${activity.action}</div>
                    <div class="activity-campaign">${activity.campaign}</div>
                    <div class="activity-time">${activity.time}</div>
                </div>
            </div>
        `).join('');
    }

    getActivityIcon(status) {
        const icons = {
            active: 'fa-play',
            completed: 'fa-check',
            warning: 'fa-exclamation-triangle',
            success: 'fa-thumbs-up',
            paused: 'fa-pause'
        };
        return icons[status] || 'fa-info';
    }

    renderFunnel() {
        const container = document.getElementById('funnelContainer');
        if (!container) return;

        const maxValue = Math.max(...this.data.conversion_funnel.map(stage => stage.value));

        container.innerHTML = this.data.conversion_funnel.map(stage => {
            const width = (stage.value / maxValue) * 100;
            return `
                <div class="funnel-stage">
                    <div class="funnel-bar" style="width: ${width}%"></div>
                    <div class="funnel-content">
                        <div class="funnel-label">${stage.stage}</div>
                        <div class="funnel-value">
                            ${stage.value.toLocaleString()}
                            <span class="funnel-percentage">(${stage.percentage}%)</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    initializeEventListeners() {
        // Theme toggle - Fixed event binding
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleTheme();
            });
        }

        // Search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            let searchTimeout;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                this.searchQuery = e.target.value;
                searchTimeout = setTimeout(() => {
                    this.filterAndSearch();
                }, 300);
            });
        }

        // Type filter
        const typeFilter = document.getElementById('typeFilter');
        if (typeFilter) {
            typeFilter.addEventListener('change', (e) => {
                this.typeFilter = e.target.value;
                this.filterAndSearch();
            });
        }

        // Table sorting
        document.querySelectorAll('.sortable').forEach(header => {
            header.addEventListener('click', () => {
                const field = header.getAttribute('data-sort');
                this.sortTable(field);
            });
        });

        // Pagination
        const prevButton = document.getElementById('prevPage');
        const nextButton = document.getElementById('nextPage');

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                if (this.currentPage > 1) {
                    this.currentPage--;
                    this.renderTable();
                    this.updatePagination();
                }
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                const totalPages = Math.ceil(this.filteredCampaigns.length / this.itemsPerPage);
                if (this.currentPage < totalPages) {
                    this.currentPage++;
                    this.renderTable();
                    this.updatePagination();
                }
            });
        }
    }

    startRealTimeUpdates() {
        // Simulate real-time updates every 30 seconds
        setInterval(() => {
            this.updateMetricsWithRandomVariation();
        }, 30000);
    }

    updateMetricsWithRandomVariation() {
        const metrics = this.data.overview_metrics;
        
        // Add small random variations to metrics
        const variations = {
            revenue: Math.floor(Math.random() * 1000) - 500,
            users: Math.floor(Math.random() * 20) - 10,
            conversions: Math.floor(Math.random() * 5) - 2,
            growth_rate: (Math.random() * 0.4) - 0.2
        };

        // Update values with variations
        metrics.revenue.current += variations.revenue;
        metrics.users.current += variations.users;
        metrics.conversions.current += variations.conversions;
        metrics.growth_rate.current += variations.growth_rate;

        // Ensure positive values
        metrics.revenue.current = Math.max(metrics.revenue.current, 50000);
        metrics.users.current = Math.max(metrics.users.current, 5000);
        metrics.conversions.current = Math.max(metrics.conversions.current, 100);
        metrics.growth_rate.current = Math.max(metrics.growth_rate.current, 0);

        // Recalculate growth percentages
        metrics.revenue.growth = ((metrics.revenue.current - metrics.revenue.previous) / metrics.revenue.previous * 100);
        metrics.users.growth = ((metrics.users.current - metrics.users.previous) / metrics.users.previous * 100);
        metrics.conversions.growth = ((metrics.conversions.current - metrics.conversions.previous) / metrics.conversions.previous * 100);

        // Update display
        this.updateMetricDisplay('revenue', metrics.revenue);
        this.updateMetricDisplay('users', metrics.users);
        this.updateMetricDisplay('conversions', metrics.conversions);
        this.updateMetricDisplay('growth', metrics.growth_rate);

        // Show update indicator
        this.showUpdateIndicator();
    }

    updateMetricDisplay(type, metric) {
        const valueElement = document.getElementById(`${type}Value`);
        const trendElement = document.getElementById(`${type}Trend`);
        
        if (valueElement) {
            let displayValue;
            if (type === 'revenue') {
                displayValue = `$${metric.current.toLocaleString()}`;
            } else if (type === 'users') {
                displayValue = metric.current.toLocaleString();
            } else if (type === 'growth') {
                displayValue = `${metric.current.toFixed(1)}%`;
            } else {
                displayValue = `${metric.current}`;
            }
            
            valueElement.textContent = displayValue;
            
            // Add pulse animation
            valueElement.style.animation = 'none';
            setTimeout(() => {
                valueElement.style.animation = 'pulse 0.5s ease-in-out';
            }, 10);
        }

        if (trendElement && metric.growth !== undefined) {
            const growth = type === 'growth' ? metric.growth : metric.growth;
            trendElement.textContent = `${growth > 0 ? '+' : ''}${growth.toFixed(1)}%`;
            
            const trendIcon = trendElement.nextElementSibling;
            if (trendIcon) {
                trendIcon.className = growth > 0 ? 'fas fa-arrow-up trend-icon' : 'fas fa-arrow-down trend-icon';
                trendElement.style.color = growth > 0 ? 'var(--color-success)' : 'var(--color-error)';
                trendIcon.style.color = growth > 0 ? 'var(--color-success)' : 'var(--color-error)';
            }
        }
    }

    showUpdateIndicator() {
        const liveIndicator = document.querySelector('.live-indicator');
        if (liveIndicator) {
            liveIndicator.style.animation = 'none';
            setTimeout(() => {
                liveIndicator.style.animation = 'pulse 1s ease-in-out';
            }, 10);
        }
    }
}

// Export functions for global access
window.exportChart = function(chartId) {
    const chartKey = chartId.replace('Chart', '');
    const chart = app.charts[chartKey];
    if (chart) {
        const link = document.createElement('a');
        link.download = `${chartId}.png`;
        link.href = chart.toBase64Image();
        link.click();
    }
};

window.exportTable = function() {
    const campaigns = app.filteredCampaigns;
    const headers = ['Campaign Name', 'Type', 'Budget', 'Spent', 'Impressions', 'Clicks', 'Conversions', 'CTR', 'CPA', 'ROAS'];
    
    let csvContent = headers.join(',') + '\n';
    csvContent += campaigns.map(campaign => [
        `"${campaign.name}"`,
        `"${campaign.type}"`,
        campaign.budget,
        campaign.spent,
        campaign.impressions,
        campaign.clicks,
        campaign.conversions,
        campaign.ctr,
        campaign.cpa,
        campaign.roas
    ].join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.download = 'campaign-performance.csv';
    link.href = URL.createObjectURL(blob);
    link.click();
};

// Initialize the dashboard when DOM is loaded
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new DashboardApp();
});