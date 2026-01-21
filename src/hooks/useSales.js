import { useState, useEffect } from 'react';
import { mockSales } from '../data/mockSales';

export const useSales = (products = [], updateProductStock) => {
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSales(mockSales);
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const addSale = (sale) => {
        const newSale = {
            ...sale,
            id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
            saleDate: new Date().toISOString().split('T')[0]
        };
        setSales(prev => [newSale, ...prev]);

        // Reduce stock of the product
        if (updateProductStock) {
            const product = products.find(p => p.id === parseInt(sale.productId));
            if (product) {
                updateProductStock({
                    ...product,
                    stock: product.stock - sale.quantity
                });
            }
        }
    };

    const updateSale = (updatedSale) => {
        setSales(prev => prev.map(s =>
            s.id === updatedSale.id ? updatedSale : s
        ));
    };

    const deleteSale = (id) => {
        setSales(prev => prev.filter(s => s.id !== id));
    };

    const stats = {
        totalRevenue: sales.reduce((sum, s) => s.status === 'Completed' ? sum + s.totalPrice : sum, 0),
        totalOrders: sales.length,
        completedOrders: sales.filter(s => s.status === 'Completed').length,
    };

    return {
        sales,
        loading,
        addSale,
        updateSale,
        deleteSale,
        stats
    };
};
