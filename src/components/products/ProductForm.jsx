import React, { useState, useEffect } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const ProductForm = ({ onSubmit, initialData, onCancel, categories = [] }) => {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        stock: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name,
                category: initialData.category,
                price: initialData.price.toString(),
                stock: initialData.stock.toString()
            });
        } else if (categories.length > 0) {
            setFormData(prev => ({ ...prev, category: categories[0].name }));
        }
    }, [initialData, categories]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.category) newErrors.category = 'Category is required';
        if (!formData.price || isNaN(formData.price) || parseFloat(formData.price) < 0) {
            newErrors.price = 'Valid price is required';
        }
        if (!formData.stock || isNaN(formData.stock) || parseInt(formData.stock) < 0) {
            newErrors.stock = 'Valid stock quantity is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit({
                ...formData,
                price: parseFloat(formData.price),
                stock: parseInt(formData.stock),
                id: initialData?.id
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                label="Product Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="e.g. iPhone 15 Pro"
                required
            />

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Category</label>
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all ${errors.category ? 'border-red-500' : 'border-gray-300'
                        }`}
                >
                    {categories.map(cat => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                    {categories.length === 0 && <option value="">No categories available</option>}
                </select>
                {errors.category && <span className="text-xs text-red-500">{errors.category}</span>}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Input
                    label="Price ($)"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    error={errors.price}
                    placeholder="0.00"
                    required
                />
                <Input
                    label="Stock Quantity"
                    name="stock"
                    type="number"
                    value={formData.stock}
                    onChange={handleChange}
                    error={errors.stock}
                    placeholder="0"
                    required
                />
            </div>

            <div className="flex justify-end gap-3 pt-4">
                <Button variant="secondary" onClick={onCancel}>
                    Cancel
                </Button>
                <Button type="submit">
                    {initialData ? 'Update Product' : 'Add Product'}
                </Button>
            </div>
        </form>
    );
};

export default ProductForm;
