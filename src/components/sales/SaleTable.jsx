import React from 'react';
import Button from '../common/Button';

const SaleTable = ({ sales, onEdit, onDelete }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'bg-green-100 text-green-700';
            case 'Processing': return 'bg-blue-100 text-blue-700';
            case 'Cancelled': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="overflow-x-auto bg-white rounded-xl border border-gray-100 shadow-sm">
            <table className="w-full text-left">
                <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Order ID</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Product</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">Qty</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Total</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {sales.length > 0 ? (
                        sales.map((sale) => (
                            <tr key={sale.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-mono text-sm text-gray-600">{sale.id}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">{sale.customerName}</td>
                                <td className="px-6 py-4 text-gray-600">{sale.productName}</td>
                                <td className="px-6 py-4 text-center text-gray-600 font-medium">{sale.quantity}</td>
                                <td className="px-6 py-4 font-bold text-gray-900">${sale.totalPrice.toFixed(2)}</td>
                                <td className="px-6 py-4 text-gray-500 text-sm whitespace-nowrap">{sale.saleDate}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-bold rounded-full ${getStatusColor(sale.status)}`}>
                                        {sale.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button variant="ghost" onClick={() => onEdit(sale)} className="p-1">
                                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </Button>
                                        <Button variant="ghost" onClick={() => onDelete(sale.id)} className="p-1 text-red-500">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="px-6 py-12 text-center text-gray-500">No sales transactions found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default SaleTable;
