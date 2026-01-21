import { useState, useEffect } from 'react';
import { mockProducts } from '../data/mockProducts';

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API fetch
        const timer = setTimeout(() => {
            setProducts(mockProducts);
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const addProduct = (product) => {
        const newProduct = {
            ...product,
            id: Date.now(),
            status: product.stock > 0 ? 'In Stock' : 'Out of Stock'
        };
        setProducts(prev => [newProduct, ...prev]);
    };

    const updateProduct = (updatedProduct) => {
        setProducts(prev => prev.map(p =>
            p.id === updatedProduct.id
                ? { ...updatedProduct, status: updatedProduct.stock > 0 ? 'In Stock' : 'Out of Stock' }
                : p
        ));
    };

    const deleteProduct = (id) => {
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    const stats = {
        total: products.length,
        inStock: products.filter(p => p.stock > 0).length,
        outOfStock: products.filter(p => p.stock === 0).length,
    };

    return {
        products,
        loading,
        addProduct,
        updateProduct,
        deleteProduct,
        stats
    };
};
