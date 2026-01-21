import React from 'react';

const Sidebar = ({ activePage, setActivePage }) => {
    const menuItems = [
        { id: 'dashboard', icon: '📊', label: 'Dashboard' },
        { id: 'products', icon: '📦', label: 'Products' },
        { id: 'categories', icon: '📁', label: 'Categories' },
        { id: 'sales', icon: '📈', label: 'Sales' },
        { id: 'settings', icon: '⚙️', label: 'Settings' },
    ];

    return (
        <aside className="w-64 bg-slate-900 text-white min-h-screen hidden md:flex flex-col fixed left-0 top-0 z-40">
            <div className="p-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                    ProDash
                </h1>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-2">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActivePage(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${activePage === item.id
                                ? 'bg-sky-600 text-white shadow-lg shadow-sky-900/20'
                                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                            }`}
                    >
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                    </button>
                ))}
            </nav>

            <div className="p-4 border-t border-slate-800">
                <div className="flex items-center gap-3 px-4 py-2">
                    <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center font-bold text-white shadow-inner">
                        AD
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <p className="text-sm font-semibold truncate">Admin User</p>
                        <p className="text-xs text-slate-500 truncate">admin@prodash.com</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
