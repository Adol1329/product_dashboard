import React from 'react';

const Navbar = ({ activePage }) => {
    const pageTitles = {
        dashboard: 'Dashboard',
        products: 'Products',
        categories: 'Categories',
        sales: 'Sales',
        settings: 'Settings'
    };

    return (
        <nav className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-30">
            <div className="flex items-center gap-4">
                <button className="md:hidden text-gray-600 p-2 hover:bg-gray-100 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <h1 className="text-lg font-bold text-gray-800 hidden sm:block">
                    {pageTitles[activePage] || 'ProDash'}
                </h1>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative hidden lg:block">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-64 pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all font-medium"
                    />
                    <div className="absolute left-3 top-2.5 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                <button className="p-2 text-gray-400 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-all relative">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="w-px h-8 bg-gray-200 mx-2"></div>

                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-gray-700 group-hover:text-sky-600 transition-colors">Admin User</p>
                        <p className="text-xs text-gray-400">Super Admin</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-gray-100 p-0.5 group-hover:border-sky-500 transition-all">
                        <img
                            src="https://ui-avatars.com/api/?name=Admin+User&background=0ea5e9&color=fff"
                            className="w-full h-full rounded-full object-cover"
                            alt="Avatar"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
