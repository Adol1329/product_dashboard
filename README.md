# ProDash - Product Management Dashboard

ProDash is a modern, responsive, and high-performance Product Management Dashboard built with **React**, **Tailwind CSS**, and **Vite**. It provides a comprehensive suite for managing inventory, categories, and sales transactions in an intuitive interface.

**🌐 Live Demo:** [product-dashboard-bice.vercel.app](https://product-dashboard-bice.vercel.app/)

---

## 🚀 Key Features

### 📊 Dashboard Overview
- **Real-time Analytics**: Monthly and daily summary cards for Total Products, Total Orders, Revenue, and Out-of-Stock items.
- **Recent Activity**: Quick view of latest products added and recent sales transactions.
- **Dynamic Trends**: Visual indicators for growth and performance metrics.

### 📦 Product Management
- **Full CRUD Operations**: Add, edit, and delete products with ease.
- **Dynamic Search & Filtering**: Instant search by name and category filtering.
- **Stock Indicators**: Visual badges for "In Stock" and "Out of Stock" status.
- **Validation**: Strict form validation for pricing, stock levels, and required fields.

### 📁 Category Management
- **Organized Inventory**: Manage product categories independently.
- **Status Control**: Toggle between "Active" and "Inactive" categories.
- **Product Integration**: Seamlessly dynamic category selection within the product management forms.

### 💰 Sales & Order Tracking
- **Transaction History**: Comprehensive list of all sales with order IDs and customer names.
- **Auto-Stock Update**: Recording a sale automatically updates the corresponding product's inventory levels.
- **Status Lifecycle**: Track orders through "Pending", "Processing", "Completed", or "Cancelled" states.
- **Revenue Calculation**: Automatic calculation of total revenue from completed orders.

### 📱 Premium UX/UI
- **Sidebar Navigation**: Fixed sidebar for desktop, collapsible for mobile devices.
- **Modern Design**: Clean interface using custom color palettes and smooth transitions.
- **Responsive Layout**: Optimized for all screen sizes, from mobile phones to ultra-wide monitors.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) (Functional Components & Hooks)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **State Management**: Custom Hooks (`useEffect`, `useState`)
- **Icons**: Lucide React & Hand-crafted SVG icons

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── layout/       # Sidebar, Navbar, and Shell layout
│   ├── common/       # Reusable UI (Buttons, Modals, Inputs)
│   ├── dashboard/    # Analytics components
│   ├── products/     # Inventory-specific components
│   ├── categories/   # Category management UI
│   └── sales/        # Transaction management UI
├── pages/            # View-level components for each route
├── hooks/            # Business logic and state management
├── data/             # Mock data and constants
├── App.jsx           # Main application router and state orchestration
└── main.jsx          # Entry point
```

---

## 🚦 Getting Started

### Prerequisites
- Node.js (v16.0 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Adol1329/product_dashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd product
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📜 Future Roadmap
- [ ] Role-based access control (Admin vs. Staff).
- [ ] Integration with a backend API (Express/Spring Boot).
- [ ] Export to PDF/CSV for sales reports.
- [ ] Dark Mode support.

---

## 🤝 Contributing
Feel free to fork this project and submit pull requests for any features or bug fixes. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
