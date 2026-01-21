import React from 'react';
import SummaryCard from '../components/dashboard/SummaryCard';

const Dashboard = ({ stats, loading, products, salesStats, sales }) => {
    const recentProducts = [...products].slice(0, 5);
    const recentSales = [...sales].slice(0, 5);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
                <p className="text-gray-500 mt-1">Welcome back, here is what's happening today.</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <SummaryCard
                    title="Total Products"
                    value={loading ? '...' : stats.total}
                    icon={<span className="text-2xl">📦</span>}
                    trend={12}
                    color="blue"
                />
                <SummaryCard
                    title="Total Orders"
                    value={loading ? '...' : salesStats.totalOrders}
                    icon={<span className="text-2xl">🛒</span>}
                    trend={10}
                    color="orange"
                />
                <SummaryCard
                    title="Revenue"
                    value={`$${loading ? '...' : salesStats.totalRevenue.toLocaleString()}`}
                    icon={<span className="text-2xl">💰</span>}
                    trend={15}
                    color="green"
                />
                <SummaryCard
                    title="Out of Stock"
                    value={loading ? '...' : stats.outOfStock}
                    icon={<span className="text-2xl">⚠️</span>}
                    trend={-5}
                    color="red"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Products */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold mb-4">Recent Products</h3>
                    <div className="space-y-4">
                        {recentProducts.map(product => (
                            <div key={product.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center font-bold">
                                        {product.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{product.name}</p>
                                        <p className="text-xs text-gray-500">{product.category}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-gray-900">${product.price}</p>
                                    <p className={`text-xs ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {product.stock} in stock
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold mb-4">Recent Transactions</h3>
                    <div className="space-y-4">
                        {recentSales.map(sale => (
                            <div key={sale.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors border-b last:border-0 border-gray-50">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${sale.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                                        }`}>
                                        {sale.customerName.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{sale.customerName}</p>
                                        <p className="text-xs text-gray-500">{sale.productName} (x{sale.quantity})</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-gray-900">${sale.totalPrice.toFixed(2)}</p>
                                    <p className="text-[10px] text-gray-400 font-mono">{sale.id}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
