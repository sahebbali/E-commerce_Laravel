import Sidebar from './Sidebar';

export default function AuthenticatedLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-slate-100">
            {/* Fixed Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="ml-64 flex flex-1 flex-col">
                {/* Top Navbar */}
                <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8">
                    <h2 className="text-xl font-semibold text-slate-800">
                        Dashboard Overview
                    </h2>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-slate-600">
                            Admin User
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
                            A
                        </div>
                    </div>
                </header>

                {/* Dynamic Page Content */}
                <main className="p-8">{children}</main>
            </div>
        </div>
    );
}
