import {
    ArrowRight,
    Check,
    Headphones,
    Lock,
    Menu,
    RotateCcw,
    ShoppingCart,
    Star,
    Truck,
    User,
    X,
} from 'lucide-react';
import { useState } from 'react';

// Navigation Component
const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-gray-900">
                            ShopPremium
                        </h1>
                    </div>

                    <div className="hidden items-center space-x-8 md:flex">
                        <a
                            href="#"
                            className="text-gray-700 hover:text-gray-900"
                        >
                            Shop
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-gray-900"
                        >
                            Categories
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-gray-900"
                        >
                            Deals
                        </a>
                    </div>

                    <div className="hidden items-center space-x-4 md:flex">
                        <button className="text-gray-700 hover:text-gray-900">
                            <User size={20} />
                        </button>
                        <button className="relative text-gray-700 hover:text-gray-900">
                            <ShoppingCart size={20} />
                            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                3
                            </span>
                        </button>
                    </div>

                    <button
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="border-t bg-white md:hidden">
                    <div className="space-y-3 px-4 py-3">
                        <a href="#" className="block text-gray-700">
                            Shop
                        </a>
                        <a href="#" className="block text-gray-700">
                            Categories
                        </a>
                        <a href="#" className="block text-gray-700">
                            Deals
                        </a>
                        <a href="#" className="block text-gray-700">
                            Login
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

// Hero Section Component
const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-32 lg:px-8">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div className="space-y-6">
                        <h2 className="text-4xl leading-tight font-bold text-gray-900 md:text-6xl">
                            Premium Products, Designed for Everyday Life
                        </h2>
                        <p className="text-lg text-gray-600">
                            High-quality materials • Fast delivery • Secure
                            checkout
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <button className="rounded-lg bg-gray-900 px-8 py-4 font-semibold text-white transition hover:bg-gray-800">
                                Shop Now
                            </button>
                            <button className="rounded-lg border-2 border-gray-900 px-8 py-4 font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white">
                                View Collection
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-6 pt-4">
                            <div className="flex items-center gap-2">
                                <Check className="text-green-600" size={20} />
                                <span className="text-sm text-gray-600">
                                    Free Shipping
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="text-green-600" size={20} />
                                <span className="text-sm text-gray-600">
                                    Secure Payment
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="text-green-600" size={20} />
                                <span className="text-sm text-gray-600">
                                    30-Day Return
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="flex h-96 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-200 to-pink-200 p-8">
                            <div className="text-center text-gray-600">
                                <ShoppingCart
                                    size={120}
                                    className="mx-auto mb-4 text-gray-400"
                                />
                                <p className="text-lg">
                                    Featured Product Image
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Category Card Component
const CategoryCard = ({ title, image, bgColor }) => {
    return (
        <div
            className={`${bgColor} group cursor-pointer rounded-2xl p-8 transition-transform duration-300 hover:scale-105`}
        >
            <div className="mb-4 flex aspect-square items-center justify-center">
                <div className="text-6xl">{image}</div>
            </div>
            <h3 className="text-center text-xl font-semibold text-gray-900 group-hover:text-gray-700">
                {title}
            </h3>
        </div>
    );
};

// Categories Section Component
const CategoriesSection = () => {
    const categories = [
        { title: 'Electronics', image: '💻', bgColor: 'bg-blue-50' },
        { title: 'Fashion', image: '👕', bgColor: 'bg-pink-50' },
        { title: 'Home & Living', image: '🏠', bgColor: 'bg-green-50' },
        { title: 'Beauty & Care', image: '💄', bgColor: 'bg-purple-50' },
        { title: 'Sports', image: '⚽', bgColor: 'bg-orange-50' },
        { title: 'Accessories', image: '⌚', bgColor: 'bg-yellow-50' },
    ];

    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
                    Shop by Category
                </h2>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} {...category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Product Card Component
const ProductCard = ({ name, price, rating, badge }) => {
    return (
        <div className="group cursor-pointer rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-lg">
            <div className="relative mb-4">
                <div className="flex aspect-square items-center justify-center rounded-lg bg-gray-100">
                    <ShoppingCart size={48} className="text-gray-400" />
                </div>
                {badge && (
                    <span className="absolute top-2 left-2 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                        {badge}
                    </span>
                )}
            </div>
            <h3 className="mb-2 font-semibold text-gray-900">{name}</h3>
            <div className="mb-2 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={14}
                        className={
                            i < rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                        }
                    />
                ))}
                <span className="ml-1 text-sm text-gray-500">({rating}.0)</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">
                    ${price}
                </span>
                <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

// Best Sellers Section Component
const BestSellersSection = () => {
    const products = [
        {
            name: 'Premium Headphones',
            price: 299,
            rating: 5,
            badge: 'Best Seller',
        },
        { name: 'Smart Watch', price: 399, rating: 5, badge: 'New' },
        { name: 'Wireless Speaker', price: 199, rating: 4, badge: null },
        {
            name: 'Premium Backpack',
            price: 149,
            rating: 5,
            badge: 'Limited Stock',
        },
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        Best Sellers
                    </h2>
                    <button className="flex items-center gap-2 font-semibold text-gray-900 transition-all hover:gap-3">
                        View All <ArrowRight size={20} />
                    </button>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Value Proposition Component
const ValueProposition = () => {
    const features = [
        {
            icon: <Truck size={40} />,
            title: 'Fast Delivery',
            description: '24-72 hours nationwide',
        },
        {
            icon: <Lock size={40} />,
            title: 'Secure Payments',
            description: '100% protected transactions',
        },
        {
            icon: <RotateCcw size={40} />,
            title: 'Easy Returns',
            description: '30-day money back guarantee',
        },
        {
            icon: <Headphones size={40} />,
            title: '24/7 Support',
            description: 'Always here to help you',
        },
    ];

    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center">
                            <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-gray-900">
                                {feature.icon}
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Promo Banner Component
const PromoBanner = () => {
    return (
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
                    Flat 30% OFF on First Order
                </h2>
                <p className="mb-8 text-xl text-white">
                    Limited time offer • Use code: FIRST30
                </p>
                <button className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-purple-600 transition hover:bg-gray-100">
                    Get Offer Now
                </button>
            </div>
        </section>
    );
};

// Newsletter Component
const Newsletter = () => {
    return (
        <section className="bg-gray-900 py-20">
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                    Get Exclusive Deals & Early Access
                </h2>
                <p className="mb-8 text-gray-400">
                    Join 10,000+ subscribers and get 10% off your first order
                </p>
                <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 rounded-lg px-6 py-4 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                    <button className="rounded-lg bg-purple-600 px-8 py-4 font-semibold text-white transition hover:bg-purple-700">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="bg-gray-900 py-12 text-gray-400">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div>
                        <h3 className="mb-4 font-semibold text-white">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-white">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 font-semibold text-white">
                            Support
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Returns
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 font-semibold text-white">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 font-semibold text-white">
                            Follow Us
                        </h3>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white">
                                Facebook
                            </a>
                            <a href="#" className="hover:text-white">
                                Instagram
                            </a>
                            <a href="#" className="hover:text-white">
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p>&copy; 2026 ShopPremium. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

// Main App Component
export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <HeroSection />
            <CategoriesSection />
            <BestSellersSection />
            <ValueProposition />
            <PromoBanner />
            <BestSellersSection />
            <Newsletter />
            <Footer />
        </div>
    );
}
