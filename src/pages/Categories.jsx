import React, { useState } from 'react';
import CategoryTable from '../components/categories/CategoryTable';
import CategoryFilter from '../components/categories/CategoryFilter';
import CategoryForm from '../components/categories/CategoryForm';
import Modal from '../components/common/Modal';
import Button from '../components/common/Button';
import { useCategories } from '../hooks/useCategories';

const Categories = () => {
    const { categories, loading, addCategory, updateCategory, deleteCategory } = useCategories();
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);

    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddClick = () => {
        setEditingCategory(null);
        setIsModalOpen(true);
    };

    const handleEditClick = (category) => {
        setEditingCategory(category);
        setIsModalOpen(true);
    };

    const handleFormSubmit = (data) => {
        if (editingCategory) {
            updateCategory(data);
        } else {
            addCategory(data);
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this category? Products using this category will remain, but you may want to reassign them.')) {
            deleteCategory(id);
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
                    <p className="text-gray-500 mt-1">Organize your products with categories</p>
                </div>
                <Button onClick={handleAddClick} className="mt-4 md:mt-0 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Add Category
                </Button>
            </div>

            <CategoryFilter
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />

            {loading ? (
                <div className="h-64 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
                </div>
            ) : (
                <CategoryTable
                    categories={filteredCategories}
                    onEdit={handleEditClick}
                    onDelete={handleDelete}
                />
            )}

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={editingCategory ? 'Edit Category' : 'Add New Category'}
            >
                <CategoryForm
                    onSubmit={handleFormSubmit}
                    initialData={editingCategory}
                    onCancel={() => setIsModalOpen(false)}
                />
            </Modal>
        </div>
    );
};

export default Categories;
