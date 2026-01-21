import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const DashboardLayout = ({ children, activePage, setActivePage }) => {
    return (
        <div className="flex min-h-screen bg-gray-50 text-gray-900">
            {/* Sidebar - Fix to the left */}
            <Sidebar activePage={activePage} setActivePage={setActivePage} />

            {/* Main Content Area - Offset by sidebar width on large screens */}
            <div className="flex-1 flex flex-col min-w-0 md:ml-64">
                <Navbar activePage={activePage} />
                <main className="p-4 md:p-8 flex-1 animate-in fade-in duration-500">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
