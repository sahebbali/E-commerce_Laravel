import {
    LayoutDashboard,
    List,
    LogOut,
    PlusCircle,
    ShoppingBag,
    ShoppingCart,
} from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        {
            name: 'Dashboard',
            icon: <LayoutDashboard size={20} />,
            path: '/dashboard',
        },
        {
            name: 'Products',
            icon: <ShoppingBag size={20} />,
            submenu: [
                {
                    name: 'All Products',
                    icon: <List size={18} />,
                    path: '/products',
                },
                {
                    name: 'Create Product',
                    icon: <PlusCircle size={18} />,
                    path: '/products/create',
                },
            ],
        },
        { name: 'Orders', icon: <ShoppingCart size={20} />, path: '/orders' },
    ];

    return (
        <div className="fixed top-0 left-0 flex h-screen w-64 flex-col bg-slate-900 text-white">
            <div className="border-b border-slate-800 p-6 text-2xl font-bold">
                E-Shop <span className="text-blue-500">Admin</span>
            </div>

            <nav className="mt-6 flex-1 space-y-2 px-4">
                {menuItems.map((item, index) => (
                    <div key={index}>
                        {!item.submenu ? (
                            <a
                                href={item.path}
                                className="group flex items-center rounded-lg p-3 transition-colors hover:bg-slate-800"
                            >
                                <span className="text-slate-400 group-hover:text-blue-400">
                                    {item.icon}
                                </span>
                                <span className="ml-3 font-medium">
                                    {item.name}
                                </span>
                            </a>
                        ) : (
                            <div className="space-y-1">
                                <div className="flex items-center p-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                                    {item.name}
                                </div>
                                {item.submenu.map((sub, i) => (
                                    <a
                                        key={i}
                                        href={sub.path}
                                        className="group flex items-center rounded-lg p-3 pl-6 transition-colors hover:bg-slate-800"
                                    >
                                        <span className="text-slate-500 group-hover:text-blue-400">
                                            {sub.icon}
                                        </span>
                                        <span className="ml-3 font-medium text-slate-300">
                                            {sub.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>

            <div className="border-t border-slate-800 p-4">
                <button className="flex w-full items-center rounded-lg p-3 text-red-400 transition-colors hover:bg-red-500/10">
                    <LogOut size={20} />
                    <span className="ml-3 font-medium">Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
