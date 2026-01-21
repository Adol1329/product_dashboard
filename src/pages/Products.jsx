import React, { useState } from 'react';
import ProductTable from '../components/products/ProductTable';
import ProductFilter from '../components/products/ProductFilter';
import ProductForm from '../components/products/ProductForm';
import Modal from '../components/common/Modal';
import Button from '../components/common/Button';

const Products = ({ products, loading, addProduct, updateProduct, deleteProduct, categories }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleAddClick = () => {
        setEditingProduct(null);
        setIsModalOpen(true);
    };

    const handleEditClick = (product) => {
        setEditingProduct(product);
        setIsModalOpen(true);
    };

    const handleFormSubmit = (data) => {
        if (editingProduct) {
            updateProduct(data);
        } else {
            addProduct(data);
        }
        setIsModalOpen(false);
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Products</h2>
                    <p className="text-gray-500 mt-1">Manage your catalog, stock, and pricing</p>
                </div>
                <Button onClick={handleAddClick} className="mt-4 md:mt-0 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Add Product
                </Button>
            </div>

            <ProductFilter
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                categories={categories}
            />

            {loading ? (
                <div className="h-64 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
                </div>
            ) : (
                <ProductTable
                    products={filteredProducts}
                    onEdit={handleEditClick}
                    onDelete={deleteProduct}
                />
            )}

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={editingProduct ? 'Edit Product' : 'Add New Product'}
            >
                <ProductForm
                    onSubmit={handleFormSubmit}
                    initialData={editingProduct}
                    onCancel={() => setIsModalOpen(false)}
                    categories={categories}
                />
            </Modal>
        </div>
    );
};

export default Products;
