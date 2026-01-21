import React, { useState, useEffect } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import { SALE_STATUSES } from '../../data/mockSales';

const SaleForm = ({ onSubmit, initialData, onCancel, products = [] }) => {
    const [formData, setFormData] = useState({
        customerName: '',
        productId: '',
        quantity: '1',
        status: 'Completed'
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (initialData) {
            setFormData({
                customerName: initialData.customerName,
                productId: initialData.productId.toString(),
                quantity: initialData.quantity.toString(),
                status: initialData.status
            });
        } else if (products.length > 0) {
            setFormData(prev => ({ ...prev, productId: products[0].id.toString() }));
        }
    }, [initialData, products]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.customerName.trim()) newErrors.customerName = 'Customer name is required';
        if (!formData.productId) newErrors.productId = 'Please select a product';
        if (!formData.quantity || isNaN(formData.quantity) || parseInt(formData.quantity) <= 0) {
            newErrors.quantity = 'Valid quantity is required';
        } else {
            const product = products.find(p => p.id.toString() === formData.productId);
            if (!initialData && product && parseInt(formData.quantity) > product.stock) {
                newErrors.quantity = `Insufficient stock (Available: ${product.stock})`;
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const product = products.find(p => p.id.toString() === formData.productId);
            onSubmit({
                ...formData,
                productId: parseInt(formData.productId),
                productName: product ? product.name : '',
                quantity: parseInt(formData.quantity),
                totalPrice: product ? product.price * parseInt(formData.quantity) : 0,
                id: initialData?.id,
                saleDate: initialData?.saleDate
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                label="Customer Name"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                error={errors.customerName}
                placeholder="e.g. John Doe"
                required
            />

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Select Product</label>
                <select
                    name="productId"
                    value={formData.productId}
                    onChange={handleChange}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                >
                    {products.map(p => (
                        <option key={p.id} value={p.id.toString()}>
                            {p.name} (${p.price} | Stock: {p.stock})
                        </option>
                    ))}
                </select>
                {errors.productId && <span className="text-xs text-red-500">{errors.productId}</span>}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Input
                    label="Quantity"
                    name="quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={handleChange}
                    error={errors.quantity}
                    required
                />
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">Status</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
                    >
                        {SALE_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">Estimated Total:</span>
                <span className="text-xl font-bold text-gray-900">
                    ${(products.find(p => p.id.toString() === formData.productId)?.price * (parseInt(formData.quantity) || 0) || 0).toFixed(2)}
                </span>
            </div>

            <div className="flex justify-end gap-3 pt-4">
                <Button variant="secondary" onClick={onCancel}>Cancel</Button>
                <Button type="submit">{initialData ? 'Update Order' : 'Complete Sale'}</Button>
            </div>
        </form>
    );
};

export default SaleForm;
