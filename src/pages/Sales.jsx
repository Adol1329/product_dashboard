import React, { useState } from 'react';
import SaleTable from '../components/sales/SaleTable';
import SaleFilter from '../components/sales/SaleFilter';
import SaleForm from '../components/sales/SaleForm';
import Modal from '../components/common/Modal';
import Button from '../components/common/Button';
import SummaryCard from '../components/dashboard/SummaryCard';
import { useSales } from '../hooks/useSales';

const Sales = ({ products, updateProduct }) => {
    const { sales, loading, stats, addSale, updateSale, deleteSale } = useSales(products, updateProduct);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingSale, setEditingSale] = useState(null);

    const filteredSales = sales.filter(sale => {
        const matchesSearch =
            sale.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sale.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sale.productName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = selectedStatus === 'All' || sale.status === selectedStatus;
        return matchesSearch && matchesStatus;
    });

    const handleAddClick = () => {
        setEditingSale(null);
        setIsModalOpen(true);
    };

    const handleEditClick = (sale) => {
        setEditingSale(sale);
        setIsModalOpen(true);
    };

    const handleFormSubmit = (data) => {
        if (editingSale) {
            updateSale(data);
        } else {
            addSale(data);
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this sales record? This will not restore product stock.')) {
            deleteSale(id);
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Sales Transactions</h2>
                    <p className="text-gray-500 mt-1">Track orders, revenue, and customer activity</p>
                </div>
                <Button onClick={handleAddClick} className="mt-4 md:mt-0 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Record Sale
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <SummaryCard
                    title="Total Revenue"
                    value={`$${loading ? '...' : stats.totalRevenue.toLocaleString()}`}
                    icon={<span className="text-2xl">💰</span>}
                    trend={15}
                    color="green"
                />
                <SummaryCard
                    title="Total Orders"
                    value={loading ? '...' : stats.totalOrders}
                    icon={<span className="text-2xl">🛒</span>}
                    trend={10}
                    color="blue"
                />
                <SummaryCard
                    title="Avg. Order Value"
                    value={`$${loading ? '...' : (stats.totalRevenue / (stats.completedOrders || 1)).toFixed(2)}`}
                    icon={<span className="text-2xl">📊</span>}
                    trend={5}
                    color="orange"
                />
            </div>

            <SaleFilter
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                selectedStatus={selectedStatus}
                onStatusChange={setSelectedStatus}
            />

            {loading ? (
                <div className="h-64 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
                </div>
            ) : (
                <SaleTable
                    sales={filteredSales}
                    onEdit={handleEditClick}
                    onDelete={handleDelete}
                />
            )}

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={editingSale ? 'Edit Transaction' : 'Record New Sale'}
            >
                <SaleForm
                    onSubmit={handleFormSubmit}
                    initialData={editingSale}
                    onCancel={() => setIsModalOpen(false)}
                    products={products}
                />
            </Modal>
        </div>
    );
};

export default Sales;
