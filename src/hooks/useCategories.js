import { useState, useEffect } from 'react';
import { mockCategories } from '../data/mockCategories';

export const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCategories(mockCategories);
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const addCategory = (category) => {
        const newCategory = {
            ...category,
            id: Date.now(),
            status: category.status || 'Active'
        };
        setCategories(prev => [newCategory, ...prev]);
    };

    const updateCategory = (updatedCategory) => {
        setCategories(prev => prev.map(c =>
            c.id === updatedCategory.id ? updatedCategory : c
        ));
    };

    const deleteCategory = (id) => {
        setCategories(prev => prev.filter(c => c.id !== id));
    };

    const activeCategories = categories.filter(c => c.status === 'Active');

    return {
        categories,
        activeCategories,
        loading,
        addCategory,
        updateCategory,
        deleteCategory
    };
};
