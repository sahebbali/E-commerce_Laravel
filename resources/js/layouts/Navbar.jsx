// components/layout/Navbar.jsx
export default function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <h1 className="text-2xl font-bold text-gray-900">ShopX</h1>
                <ul className="flex gap-6 font-medium text-gray-700">
                    <li className="cursor-pointer hover:text-black">Home</li>
                    <li className="cursor-pointer hover:text-black">Shop</li>
                    <li className="cursor-pointer hover:text-black">
                        Categories
                    </li>
                    <li className="cursor-pointer hover:text-black">Contact</li>
                </ul>
            </div>
        </nav>
    );
}
