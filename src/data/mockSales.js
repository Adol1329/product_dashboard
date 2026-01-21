export const mockSales = [
    {
        id: 'ORD-001',
        customerName: 'John Doe',
        productName: 'iPhone 15 Pro',
        productId: 1,
        quantity: 1,
        totalPrice: 999.99,
        saleDate: '2024-01-15',
        status: 'Completed'
    },
    {
        id: 'ORD-002',
        customerName: 'Jane Smith',
        productName: 'Sony WH-1000XM5',
        productId: 2,
        quantity: 2,
        totalPrice: 699.98,
        saleDate: '2024-01-16',
        status: 'Processing'
    },
    {
        id: 'ORD-003',
        customerName: 'Mike Johnson',
        productName: 'MacBook Air M2',
        productId: 3,
        quantity: 1,
        totalPrice: 1199.99,
        saleDate: '2024-01-18',
        status: 'Completed'
    },
    {
        id: 'ORD-004',
        customerName: 'Sarah Williams',
        productName: 'Kindle Paperwhite',
        productId: 4,
        quantity: 3,
        totalPrice: 419.97,
        saleDate: '2024-01-19',
        status: 'Cancelled'
    }
];

export const SALE_STATUSES = ['Completed', 'Processing', 'Cancelled', 'Pending'];
