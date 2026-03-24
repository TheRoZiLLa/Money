// ============================================
// MONEY TRACKER – AI Finance Assistant
// Main Application Logic
// ============================================

// ===== SAMPLE DATA =====
const sampleTransactions = [
    {
        id: 1,
        title: "Sushi Express – Lunch Set A",
        description: "AI: Lunch at Sushi Express Siam Paragon. Salmon sashimi set with miso soup and green tea.",
        amount: -389,
        category: "food",
        date: "2026-03-24",
        time: "12:35",
        source: "manual",
        aiGenerated: false
    },
    {
        id: 2,
        title: "BTS Skytrain – Monthly Pass",
        description: "AI: Monthly BTS transit pass renewal for March–April 2026. Covers unlimited rides on all BTS lines.",
        amount: -1400,
        category: "transport",
        date: "2026-03-23",
        time: "08:15",
        source: "email",
        aiGenerated: true
    },
    {
        id: 3,
        title: "Salary – Acme Corp",
        description: "Monthly salary deposit from Acme Corporation. Net pay after tax deductions.",
        amount: 65000,
        category: "salary",
        date: "2026-03-22",
        time: "09:00",
        source: "email",
        aiGenerated: true
    },
    {
        id: 4,
        title: "Netflix Premium Plan",
        description: "AI: Monthly subscription for Netflix Premium (4K, 4 screens). Auto-renewed via Kasikorn credit card.",
        amount: -419,
        category: "entertainment",
        date: "2026-03-21",
        time: "00:01",
        source: "email",
        aiGenerated: true
    },
    {
        id: 5,
        title: "Starbucks – Grande Latte",
        description: "AI: Coffee purchase at Starbucks Central World. Grande Caramel Latte with oat milk.",
        amount: -175,
        category: "food",
        date: "2026-03-21",
        time: "14:22",
        source: "slip",
        aiGenerated: true
    },
    {
        id: 6,
        title: "Shopee – Phone Case",
        description: "AI: Online purchase via Shopee. MagSafe silicone case for iPhone 16 Pro Max, midnight blue.",
        amount: -450,
        category: "shopping",
        date: "2026-03-20",
        time: "20:48",
        source: "email",
        aiGenerated: true
    },
    {
        id: 7,
        title: "True Internet – Fiber",
        description: "AI: Monthly True Internet Fiber subscription (1 Gbps plan). Payment processed via direct debit.",
        amount: -899,
        category: "bills",
        date: "2026-03-20",
        time: "10:00",
        source: "email",
        aiGenerated: true
    },
    {
        id: 8,
        title: "7-Eleven – Groceries",
        description: "AI: Grocery shopping at 7-Eleven Sukhumvit 23. Items: bread, milk, eggs, instant noodles.",
        amount: -287,
        category: "food",
        date: "2026-03-19",
        time: "19:30",
        source: "slip",
        aiGenerated: true
    },
    {
        id: 9,
        title: "Grab Car – Asoke to Sathorn",
        description: "AI: Grab ride from Asoke to Sathorn. GrabCar Plus with priority matching.",
        amount: -185,
        category: "transport",
        date: "2026-03-19",
        time: "08:45",
        source: "email",
        aiGenerated: true
    },
    {
        id: 10,
        title: "Bumrungrad Hospital – Checkup",
        description: "AI: Annual health checkup at Bumrungrad International Hospital. Executive package.",
        amount: -4500,
        category: "health",
        date: "2026-03-18",
        time: "10:00",
        source: "manual",
        aiGenerated: false
    },
    {
        id: 11,
        title: "Central Department Store",
        description: "AI: Purchase at Central Chidlom. Polo Ralph Lauren shirt and Calvin Klein belt.",
        amount: -3890,
        category: "shopping",
        date: "2026-03-17",
        time: "15:30",
        source: "slip",
        aiGenerated: true
    },
    {
        id: 12,
        title: "Electricity Bill – MEA",
        description: "AI: Metropolitan Electricity Authority bill for Feb 2026. 342 kWh consumed.",
        amount: -1450,
        category: "bills",
        date: "2026-03-16",
        time: "09:00",
        source: "email",
        aiGenerated: true
    },
    {
        id: 13,
        title: "McDonald's – Family Meal",
        description: "AI: McDonald's delivery via GrabFood. Big Mac family sharing box with extra fries.",
        amount: -589,
        category: "food",
        date: "2026-03-15",
        time: "18:45",
        source: "slip",
        aiGenerated: true
    },
    {
        id: 14,
        title: "AIS Mobile – Postpaid",
        description: "AI: AIS mobile postpaid plan payment. 5G Ultra plan with unlimited data.",
        amount: -1299,
        category: "bills",
        date: "2026-03-15",
        time: "08:00",
        source: "email",
        aiGenerated: true
    },
    {
        id: 15,
        title: "Freelance Payment – Logo Design",
        description: "Income from freelance logo design project for Thai Coffee Co.",
        amount: 8500,
        category: "salary",
        date: "2026-03-14",
        time: "14:00",
        source: "manual",
        aiGenerated: false
    },
    {
        id: 16,
        title: "Tops Supermarket – Weekly",
        description: "AI: Weekly grocery run at Tops Supermarket. Fresh produce, chicken, rice, and condiments.",
        amount: -1876,
        category: "food",
        date: "2026-03-14",
        time: "11:20",
        source: "slip",
        aiGenerated: true
    },
    {
        id: 17,
        title: "Bolt Ride – Airport Transfer",
        description: "AI: Bolt ride from Suvarnabhumi Airport to Asoke. Standard sedan.",
        amount: -350,
        category: "transport",
        date: "2026-03-13",
        time: "22:15",
        source: "email",
        aiGenerated: true
    },
    {
        id: 18,
        title: "Spotify Premium",
        description: "AI: Monthly Spotify Premium subscription. Individual plan with HiFi audio.",
        amount: -139,
        category: "entertainment",
        date: "2026-03-12",
        time: "00:01",
        source: "email",
        aiGenerated: true
    },
    {
        id: 19,
        title: "After You – Dessert",
        description: "AI: Dessert café visit at After You Siam Square. Shibuya honey toast and matcha kakigori.",
        amount: -520,
        category: "food",
        date: "2026-03-11",
        time: "16:00",
        source: "slip",
        aiGenerated: true
    },
    {
        id: 20,
        title: "Water Bill – MWA",
        description: "AI: Metropolitan Waterworks Authority bill for Feb 2026.",
        amount: -285,
        category: "bills",
        date: "2026-03-10",
        time: "09:00",
        source: "email",
        aiGenerated: true
    },
    {
        id: 21,
        title: "Lazada – Wireless Earbuds",
        description: "AI: Online purchase via Lazada. Sony WF-1000XM6 wireless noise-cancelling earbuds.",
        amount: -7990,
        category: "shopping",
        date: "2026-03-08",
        time: "21:30",
        source: "email",
        aiGenerated: true
    },
    {
        id: 22,
        title: "PTT Gas Station – Fuel",
        description: "AI: Gasoline fill-up at PTT Station Ratchada. UltraForce Diesel 40L.",
        amount: -1560,
        category: "transport",
        date: "2026-03-06",
        time: "07:30",
        source: "slip",
        aiGenerated: true
    },
    {
        id: 23,
        title: "MK Suki – Dinner",
        description: "AI: Dinner at MK Suki Restaurant for 4 people. Gold set with extra vegetables.",
        amount: -1250,
        category: "food",
        date: "2026-03-04",
        time: "19:00",
        source: "manual",
        aiGenerated: false
    },
    {
        id: 24,
        title: "Condo Rent – March",
        description: "Monthly condo rental payment for March 2026. Unit 2301, The Line Sukhumvit.",
        amount: -15000,
        category: "bills",
        date: "2026-03-01",
        time: "09:00",
        source: "manual",
        aiGenerated: false
    }
];

const categoryConfig = {
    food: { emoji: "🍔", label: "Food & Dining", color: "#F59E0B", bg: "cat-bg-food" },
    transport: { emoji: "🚗", label: "Transport", color: "#3B82F6", bg: "cat-bg-transport" },
    bills: { emoji: "📄", label: "Bills & Utilities", color: "#6366F1", bg: "cat-bg-bills" },
    shopping: { emoji: "🛍️", label: "Shopping", color: "#EC4899", bg: "cat-bg-shopping" },
    health: { emoji: "💊", label: "Health", color: "#10B981", bg: "cat-bg-health" },
    entertainment: { emoji: "🎮", label: "Entertainment", color: "#8B5CF6", bg: "cat-bg-entertainment" },
    salary: { emoji: "💰", label: "Income", color: "#10B981", bg: "cat-bg-salary" },
    income: { emoji: "💰", label: "Income", color: "#10B981", bg: "cat-bg-income" },
    other: { emoji: "📦", label: "Other", color: "#64748B", bg: "cat-bg-other" }
};

// ===== STATE =====
let currentScreen = 'dashboard';
let activeCategory = 'all';
let transactions = [...sampleTransactions];

// ===== NAVIGATION =====
function navigateTo(screen) {
    const screens = document.querySelectorAll('.screen');
    const navItems = document.querySelectorAll('.nav-item');
    const fab = document.getElementById('fab');

    screens.forEach(s => s.classList.remove('active'));

    const targetScreen = document.getElementById(`screen-${screen}`);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }

    // Update nav
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.screen === screen) {
            item.classList.add('active');
        }
    });

    // Show/hide FAB
    const hideFabScreens = ['add', 'ai-review'];
    if (hideFabScreens.includes(screen)) {
        fab.classList.add('hide');
    } else {
        fab.classList.remove('hide');
    }

    // Show/hide nav
    const hideNavScreens = ['add', 'ai-review'];
    const nav = document.getElementById('bottom-nav');
    if (hideNavScreens.includes(screen)) {
        nav.style.transform = 'translateY(100%)';
        nav.style.transition = '0.3s ease';
    } else {
        nav.style.transform = 'translateY(0)';
    }

    currentScreen = screen;

    // Scroll to top
    const content = targetScreen?.querySelector('.screen-content');
    if (content) content.scrollTop = 0;

    // Render charts when analytics is shown
    if (screen === 'analytics') {
        setTimeout(() => {
            renderSpendingChart();
            renderDonutChart();
            renderTrendChart();
            renderTopExpenses();
        }, 100);
    }

    // Render transactions
    if (screen === 'transactions') {
        renderAllTransactions();
    }
}

// ===== RENDER TRANSACTIONS =====
function formatAmount(amount) {
    const sign = amount >= 0 ? '+' : '-';
    const formatted = Math.abs(amount).toLocaleString('en-US', {
        minimumFractionDigits: amount % 1 !== 0 ? 2 : 0,
        maximumFractionDigits: 2
    });
    return `${sign}฿${formatted}`;
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const today = new Date('2026-03-24');
    const yesterday = new Date('2026-03-23');

    if (dateStr === '2026-03-24') return 'Today';
    if (dateStr === '2026-03-23') return 'Yesterday';

    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function createTransactionCard(txn, index) {
    const cat = categoryConfig[txn.category] || categoryConfig.other;
    const isIncome = txn.amount >= 0;
    const card = document.createElement('div');
    card.className = 'transaction-card';
    card.style.animationDelay = `${index * 0.05}s`;
    card.onclick = () => showTransactionDetail(txn);

    card.innerHTML = `
        <div class="txn-icon ${cat.bg}">${cat.emoji}</div>
        <div class="txn-details">
            <span class="txn-title">${txn.title}${txn.aiGenerated ? '<span class="txn-ai-tag">AI</span>' : ''}</span>
            <span class="txn-category">${cat.label}</span>
        </div>
        <div class="txn-right">
            <span class="txn-amount ${isIncome ? 'income' : 'expense'}">${formatAmount(txn.amount)}</span>
            <span class="txn-time">${txn.time}</span>
        </div>
    `;
    return card;
}

function renderDashboardTransactions() {
    const container = document.getElementById('dashboard-transactions');
    container.innerHTML = '';
    const recent = transactions.slice(0, 5);
    recent.forEach((txn, i) => {
        container.appendChild(createTransactionCard(txn, i));
    });
}

function renderAllTransactions(filter = 'all', searchQuery = '') {
    const container = document.getElementById('all-transactions');
    container.innerHTML = '';

    let filtered = [...transactions];

    if (filter !== 'all') {
        if (filter === 'income') {
            filtered = filtered.filter(t => t.amount >= 0);
        } else {
            filtered = filtered.filter(t => t.category === filter);
        }
    }

    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(t =>
            t.title.toLowerCase().includes(q) ||
            t.description.toLowerCase().includes(q) ||
            t.category.toLowerCase().includes(q)
        );
    }

    // Group by date
    const grouped = {};
    filtered.forEach(txn => {
        if (!grouped[txn.date]) grouped[txn.date] = [];
        grouped[txn.date].push(txn);
    });

    const sortedDates = Object.keys(grouped).sort((a, b) => new Date(b) - new Date(a));
    let totalIndex = 0;

    if (sortedDates.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding: 40px 0; color: var(--text-tertiary);">
                <p style="font-size: 2rem; margin-bottom: 8px;">🔍</p>
                <p style="font-size: 0.88rem; font-weight: 500;">No transactions found</p>
            </div>
        `;
        return;
    }

    sortedDates.forEach(date => {
        const label = document.createElement('div');
        label.className = 'transaction-date-label';
        label.textContent = formatDate(date);
        container.appendChild(label);

        grouped[date].forEach(txn => {
            container.appendChild(createTransactionCard(txn, totalIndex++));
        });
    });
}

// ===== TRANSACTION DETAIL MODAL =====
function showTransactionDetail(txn) {
    const overlay = document.getElementById('modal-overlay');
    const body = document.getElementById('modal-body');
    const title = document.getElementById('modal-title');
    const cat = categoryConfig[txn.category] || categoryConfig.other;
    const isIncome = txn.amount >= 0;

    title.textContent = txn.title;

    body.innerHTML = `
        <div class="detail-row">
            <span class="detail-label">Amount</span>
            <span class="detail-value" style="color: ${isIncome ? 'var(--income)' : 'var(--expense)'}; font-size: 1.1rem;">${formatAmount(txn.amount)}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Category</span>
            <span class="detail-value">${cat.emoji} ${cat.label}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Date</span>
            <span class="detail-value">${formatDate(txn.date)} at ${txn.time}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Source</span>
            <span class="detail-value">${txn.source === 'email' ? '📧 Email Import' : txn.source === 'slip' ? '📷 Slip Scan' : '✏️ Manual'}</span>
        </div>
        ${txn.aiGenerated ? `
        <div style="margin-top: 12px; padding: 12px; background: var(--bg-primary); border-radius: var(--radius-sm); border-left: 3px solid #F59E0B;">
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
                <span class="ai-badge">✨ AI</span>
                <span style="font-size: 0.75rem; font-weight: 600; color: var(--text-secondary);">AI Summary</span>
            </div>
            <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5;">${txn.description}</p>
        </div>` : ''}
    `;

    overlay.classList.remove('hidden');
    requestAnimationFrame(() => overlay.classList.add('show'));

    // Delete button
    document.getElementById('modal-delete').onclick = () => {
        transactions = transactions.filter(t => t.id !== txn.id);
        closeModal();
        showToast('Transaction deleted');
        renderDashboardTransactions();
        if (currentScreen === 'transactions') renderAllTransactions(activeCategory);
    };

    // Edit button
    document.getElementById('modal-edit').onclick = () => {
        closeModal();
        showToast('Edit mode coming soon');
    };
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('show');
    setTimeout(() => overlay.classList.add('hidden'), 300);
}

// ===== TOAST =====
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    toastMsg.textContent = message;
    toast.classList.remove('hidden');
    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 400);
    }, 2200);
}

// ===== CHARTS =====
function renderSpendingChart() {
    const canvas = document.getElementById('canvas-spending');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = 200 * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = '200px';
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = 200;

    const data = [2800, 4200, 1500, 3800, 2100, 5600, 2400];
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const max = Math.max(...data) * 1.2;
    const padding = { top: 20, right: 20, bottom: 36, left: 50 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    ctx.clearRect(0, 0, w, h);

    // Grid lines
    const gridSteps = 4;
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--border-light').trim() || '#F1F5F9';
    ctx.lineWidth = 1;
    for (let i = 0; i <= gridSteps; i++) {
        const y = padding.top + (chartH / gridSteps) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(w - padding.right, y);
        ctx.stroke();

        // Labels
        const val = Math.round(max - (max / gridSteps) * i);
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-tertiary').trim() || '#94A3B8';
        ctx.font = '11px Inter, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText((val / 1000).toFixed(1) + 'k', padding.left - 8, y + 4);
    }

    // Bars
    const barWidth = chartW / data.length * 0.5;
    const barGap = chartW / data.length;

    // Gradient
    const grad = ctx.createLinearGradient(0, padding.top, 0, h - padding.bottom);
    grad.addColorStop(0, '#818CF8');
    grad.addColorStop(1, '#6366F1');

    data.forEach((val, i) => {
        const barH = (val / max) * chartH;
        const x = padding.left + barGap * i + (barGap - barWidth) / 2;
        const y = padding.top + chartH - barH;

        // Bar shadow
        ctx.fillStyle = 'rgba(99, 102, 241, 0.1)';
        roundRect(ctx, x, y + 2, barWidth, barH, 6);
        ctx.fill();

        // Bar
        ctx.fillStyle = grad;
        roundRect(ctx, x, y, barWidth, barH, 6);
        ctx.fill();

        // Label
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-tertiary').trim() || '#94A3B8';
        ctx.font = '11px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(labels[i], x + barWidth / 2, h - padding.bottom + 18);
    });
}

function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}

function renderDonutChart() {
    const canvas = document.getElementById('canvas-donut');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    canvas.width = 200 * dpr;
    canvas.height = 200 * dpr;
    canvas.style.width = '200px';
    canvas.style.height = '200px';
    ctx.scale(dpr, dpr);

    const centerX = 100, centerY = 100, radius = 85, lineWidth = 22;
    const categories = calculateCategoryBreakdown();
    let startAngle = -Math.PI / 2;

    ctx.clearRect(0, 0, 200, 200);

    categories.forEach(cat => {
        const sweepAngle = (cat.percent / 100) * Math.PI * 2;
        const endAngle = startAngle + sweepAngle;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.strokeStyle = cat.color;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        ctx.stroke();

        startAngle = endAngle + 0.03; // small gap
    });

    // Render breakdown list
    const list = document.getElementById('category-breakdown');
    list.innerHTML = '';
    categories.forEach(cat => {
        const item = document.createElement('div');
        item.className = 'category-breakdown-item';
        item.innerHTML = `
            <div class="cat-color" style="background: ${cat.color}"></div>
            <span class="cat-name">${cat.emoji} ${cat.label}</span>
            <span class="cat-amount">฿${cat.total.toLocaleString()}</span>
            <span class="cat-percent">${cat.percent}%</span>
        `;
        list.appendChild(item);
    });
}

function calculateCategoryBreakdown() {
    const expenses = transactions.filter(t => t.amount < 0);
    const totalExpense = expenses.reduce((sum, t) => sum + Math.abs(t.amount), 0);
    const catTotals = {};

    expenses.forEach(t => {
        if (!catTotals[t.category]) catTotals[t.category] = 0;
        catTotals[t.category] += Math.abs(t.amount);
    });

    return Object.entries(catTotals)
        .map(([key, total]) => ({
            key,
            emoji: categoryConfig[key]?.emoji || '📦',
            label: categoryConfig[key]?.label || key,
            color: categoryConfig[key]?.color || '#64748B',
            total,
            percent: Math.round((total / totalExpense) * 100)
        }))
        .sort((a, b) => b.total - a.total);
}

function renderTrendChart() {
    const canvas = document.getElementById('canvas-trend');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = 180 * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = '180px';
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = 180;
    const padding = { top: 20, right: 20, bottom: 36, left: 50 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    const incomeData = [62000, 58000, 71000, 65000, 73500, 65000];
    const expenseData = [38000, 42000, 35000, 48000, 39000, 22420];
    const labels = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
    const maxVal = Math.max(...incomeData, ...expenseData) * 1.15;

    ctx.clearRect(0, 0, w, h);

    // Grid
    const gridSteps = 3;
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--border-light').trim() || '#F1F5F9';
    ctx.lineWidth = 1;
    for (let i = 0; i <= gridSteps; i++) {
        const y = padding.top + (chartH / gridSteps) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(w - padding.right, y);
        ctx.stroke();

        const val = Math.round(maxVal - (maxVal / gridSteps) * i);
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-tertiary').trim() || '#94A3B8';
        ctx.font = '10px Inter, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText((val / 1000).toFixed(0) + 'k', padding.left - 8, y + 4);
    }

    // Draw lines
    function drawLine(data, color, fillColor) {
        const points = data.map((val, i) => ({
            x: padding.left + (chartW / (data.length - 1)) * i,
            y: padding.top + chartH - (val / maxVal) * chartH
        }));

        // Fill area
        ctx.beginPath();
        ctx.moveTo(points[0].x, h - padding.bottom);
        points.forEach(p => ctx.lineTo(p.x, p.y));
        ctx.lineTo(points[points.length - 1].x, h - padding.bottom);
        ctx.closePath();
        const areaGrad = ctx.createLinearGradient(0, padding.top, 0, h - padding.bottom);
        areaGrad.addColorStop(0, fillColor);
        areaGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = areaGrad;
        ctx.fill();

        // Line
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2.5;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        // Smooth curve
        for (let i = 0; i < points.length; i++) {
            if (i === 0) {
                ctx.moveTo(points[i].x, points[i].y);
            } else {
                const prev = points[i - 1];
                const cpx = (prev.x + points[i].x) / 2;
                ctx.bezierCurveTo(cpx, prev.y, cpx, points[i].y, points[i].x, points[i].y);
            }
        }
        ctx.stroke();

        // Dots
        points.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.fill();
        });
    }

    drawLine(incomeData, '#10B981', 'rgba(16, 185, 129, 0.1)');
    drawLine(expenseData, '#EF4444', 'rgba(239, 68, 68, 0.1)');

    // X labels
    labels.forEach((label, i) => {
        const x = padding.left + (chartW / (labels.length - 1)) * i;
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-tertiary').trim() || '#94A3B8';
        ctx.font = '11px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(label, x, h - padding.bottom + 18);
    });

    // Legend
    ctx.fillStyle = '#10B981';
    ctx.fillRect(padding.left, h - 10, 8, 3);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim() || '#64748B';
    ctx.font = '10px Inter, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Income', padding.left + 12, h - 7);

    ctx.fillStyle = '#EF4444';
    ctx.fillRect(padding.left + 70, h - 10, 8, 3);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim() || '#64748B';
    ctx.fillText('Expense', padding.left + 82, h - 7);
}

function renderTopExpenses() {
    const container = document.getElementById('top-expenses');
    if (!container) return;
    container.innerHTML = '';

    const expenses = transactions
        .filter(t => t.amount < 0)
        .sort((a, b) => a.amount - b.amount)
        .slice(0, 5);

    expenses.forEach((txn, i) => {
        const cat = categoryConfig[txn.category] || categoryConfig.other;
        const item = document.createElement('div');
        item.className = 'top-expense-item';
        item.innerHTML = `
            <div class="top-expense-rank">${i + 1}</div>
            <div class="top-expense-info">
                <span class="top-expense-name">${txn.title}</span>
                <span class="top-expense-cat">${cat.emoji} ${cat.label}</span>
            </div>
            <span class="top-expense-amount">฿${Math.abs(txn.amount).toLocaleString()}</span>
        `;
        container.appendChild(item);
    });
}

// ===== AI SCAN SIMULATION =====
function simulateAIScan() {
    const processing = document.getElementById('ai-processing');
    const scanBtn = document.getElementById('btn-scan-slip');
    const uploadZone = document.getElementById('upload-zone');

    uploadZone.classList.add('hidden');
    processing.classList.remove('hidden');
    scanBtn.classList.add('hidden');

    setTimeout(() => {
        processing.classList.add('hidden');
        navigateTo('ai-review');
        uploadZone.classList.remove('hidden');
        scanBtn.classList.remove('hidden');
    }, 2000);
}

// ===== EVENT LISTENERS =====
function initEventListeners() {
    // Bottom Nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const screen = item.dataset.screen;
            if (screen) navigateTo(screen);
        });
    });

    // Category Chips
    document.getElementById('category-chips')?.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip');
        if (!chip) return;

        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeCategory = chip.dataset.category;
        renderAllTransactions(activeCategory, document.getElementById('search-input')?.value || '');
    });

    // Search Toggle
    document.getElementById('btn-search-toggle')?.addEventListener('click', () => {
        const searchBar = document.getElementById('search-bar');
        searchBar.classList.toggle('hidden');
        if (!searchBar.classList.contains('hidden')) {
            document.getElementById('search-input').focus();
        }
    });

    // Search Input
    document.getElementById('search-input')?.addEventListener('input', (e) => {
        renderAllTransactions(activeCategory, e.target.value);
    });

    // Search Clear
    document.getElementById('search-clear')?.addEventListener('click', () => {
        document.getElementById('search-input').value = '';
        renderAllTransactions(activeCategory, '');
    });

    // Filter Toggle
    document.getElementById('btn-filter')?.addEventListener('click', () => {
        document.getElementById('date-filter').classList.toggle('hidden');
    });

    // Import tabs
    document.querySelectorAll('.import-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.import-option').forEach(o => o.classList.remove('active'));
            option.classList.add('active');

            const method = option.dataset.method;
            document.getElementById('form-manual').classList.toggle('hidden', method !== 'manual');
            document.getElementById('form-slip').classList.toggle('hidden', method !== 'slip');
            document.getElementById('form-email').classList.toggle('hidden', method !== 'email');
        });
    });

    // Type Toggle (Income/Expense)
    const typeToggle = document.querySelector('.type-toggle');
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (btn.dataset.type === 'income') {
                typeToggle.classList.add('income-active');
            } else {
                typeToggle.classList.remove('income-active');
            }
        });
    });

    // Category Selector (Add Transaction)
    document.getElementById('category-selector')?.addEventListener('click', (e) => {
        const option = e.target.closest('.cat-option');
        if (!option) return;
        document.querySelectorAll('.cat-option').forEach(o => o.classList.remove('active'));
        option.classList.add('active');
    });

    // Save Transaction
    document.getElementById('btn-save-transaction')?.addEventListener('click', () => {
        const amount = parseFloat(document.getElementById('input-amount').value);
        const desc = document.getElementById('input-description').value;
        const date = document.getElementById('input-date').value;
        const activeCat = document.querySelector('.cat-option.active');
        const isIncome = document.querySelector('.type-toggle').classList.contains('income-active');

        if (!amount || !desc) {
            showToast('Please fill in amount and description');
            return;
        }

        const newTxn = {
            id: Date.now(),
            title: desc,
            description: `Manual entry: ${desc}`,
            amount: isIncome ? Math.abs(amount) : -Math.abs(amount),
            category: activeCat?.dataset.cat || 'other',
            date: date,
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
            source: 'manual',
            aiGenerated: false
        };

        transactions.unshift(newTxn);
        renderDashboardTransactions();
        showToast('Transaction saved! ✨');
        navigateTo('dashboard');

        // Reset form
        document.getElementById('input-amount').value = '';
        document.getElementById('input-description').value = '';
        document.getElementById('input-notes').value = '';
        document.querySelectorAll('.cat-option').forEach(o => o.classList.remove('active'));
    });

    // AI Review Approve
    document.getElementById('btn-approve-ai')?.addEventListener('click', () => {
        const desc = document.getElementById('ai-description').value;
        const amount = parseInt(document.getElementById('ai-amount').value.replace(/[^0-9]/g, ''));
        const cat = document.getElementById('ai-category').value;
        const date = document.getElementById('ai-date').value;

        const newTxn = {
            id: Date.now(),
            title: desc.split('–')[0].trim() || desc.substring(0, 30),
            description: `AI: ${desc}`,
            amount: -amount,
            category: cat,
            date: date,
            time: '10:00',
            source: 'email',
            aiGenerated: true
        };

        transactions.unshift(newTxn);
        renderDashboardTransactions();
        showToast('AI transaction approved! ✨');
        navigateTo('dashboard');
    });

    // AI Review Discard
    document.getElementById('btn-reject-ai')?.addEventListener('click', () => {
        showToast('Transaction discarded');
        navigateTo('add');
    });

    // Modal Close
    document.getElementById('modal-close')?.addEventListener('click', closeModal);
    document.getElementById('modal-overlay')?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });

    // Upload Zone
    document.getElementById('upload-zone')?.addEventListener('click', () => {
        document.getElementById('file-upload').click();
    });

    // Period Selector (Analytics)
    document.getElementById('period-selector')?.addEventListener('click', (e) => {
        const btn = e.target.closest('.period-btn');
        if (!btn) return;
        document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });

    // Dark Mode Toggle
    document.getElementById('toggle-darkmode')?.addEventListener('change', (e) => {
        document.body.classList.toggle('dark-mode', e.target.checked);
        // Re-render charts with new colors
        if (currentScreen === 'analytics') {
            setTimeout(() => {
                renderSpendingChart();
                renderDonutChart();
                renderTrendChart();
            }, 100);
        }
    });
}

// ===== INIT =====
function init() {
    renderDashboardTransactions();
    initEventListeners();

    // Set greeting based on time
    const hour = new Date().getHours();
    const greetingEl = document.querySelector('.greeting-label');
    if (greetingEl) {
        if (hour < 12) greetingEl.textContent = 'Good morning';
        else if (hour < 17) greetingEl.textContent = 'Good afternoon';
        else greetingEl.textContent = 'Good evening';
    }
}

document.addEventListener('DOMContentLoaded', init);
